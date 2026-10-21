// design-tokens.json -> CSS-variabelen + TypeScript-constanten.
//
// Overtypen zou betekenen dat de spec en de code uit elkaar lopen zodra er een
// waarde verandert. Dit draait opnieuw: `npm run tokens`.
//
// Faalt hard als een bron ontbreekt of niets oplevert. Een generator die stil
// een leeg bestand schrijft is erger dan geen generator: je ziet het pas als
// het scherm wit is.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const hier = dirname(fileURLToPath(import.meta.url));
const wortel = join(hier, '..', '..');

// Welke tokenset hoort bij welk programma. `suite` heeft geen eigen bestand:
// de voordeur is bewust neutraal en leent de structuur van Phylax met een
// eigen, grijze primaire kleur (zie suite/00-suite-start.md).
const BRONNEN = [
  { naam: 'phylax', bestand: 'docs/handoff/phylax/design-tokens.json', scope: ':root, .phylax' },
  { naam: 'sak',    bestand: 'docs/handoff/sak/design-tokens.json',    scope: ':root, .sak' },
];

// px of niet. Een getal in `color` of `fontWeight` krijgt geen eenheid; een
// getal in `fontSize`, `radius`, `space` of `layout` wel.
const GEEN_PX = new Set(['fontWeight', 'opacity', 'zIndex']);

const kebab = (s) => String(s).replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase();

function plat(obj, pad, uit, wortelSleutel) {
  for (const [k, v] of Object.entries(obj)) {
    const sleutel = wortelSleutel ?? k;
    const naam = [...pad, kebab(k)].join('-');
    if (v === null || v === undefined) continue;
    if (Array.isArray(v)) {
      // een reeks wordt genummerd: space[3] -> --space-3
      v.forEach((x, i) => {
        if (typeof x === 'number' || typeof x === 'string') {
          uit.push(['--' + naam + '-' + i, eenheid(x, sleutel)]);
        }
      });
    } else if (typeof v === 'object') {
      plat(v, [...pad, kebab(k)], uit, sleutel);
    } else {
      uit.push(['--' + naam, eenheid(v, sleutel)]);
    }
  }
}

function eenheid(v, sleutel) {
  if (typeof v !== 'number') return String(v);
  if (GEEN_PX.has(sleutel)) return String(v);
  return v === 0 ? '0' : v + 'px';
}

mkdirSync(join(hier, 'css'), { recursive: true });
const verslag = [];

for (const bron of BRONNEN) {
  let ruw;
  try { ruw = JSON.parse(readFileSync(join(wortel, bron.bestand), 'utf8')); }
  catch (e) { console.error('tokens: kan ' + bron.bestand + ' niet lezen — ' + e.message); process.exit(1); }

  const paren = [];
  // googleFonts is geen ontwerpwaarde maar een url; die hoort in index.html
  const zonderUrls = JSON.parse(JSON.stringify(ruw));
  if (zonderUrls.font) delete zonderUrls.font.googleFonts;
  plat(zonderUrls, [], paren);

  if (paren.length < 20) {
    console.error('tokens: ' + bron.naam + ' leverde maar ' + paren.length + ' waarden op — dat klopt niet');
    process.exit(1);
  }

  const regels = [
    '/* GEGENEREERD door packages/tokens/bouw.mjs uit ' + bron.bestand + '.',
    '   Niet met de hand aanpassen: pas de json aan en draai `npm run tokens`. */',
    bron.scope + ' {',
    ...paren.map(([n, w]) => '  ' + n + ': ' + w + ';'),
    '}',
    '',
  ];
  writeFileSync(join(hier, 'css', bron.naam + '.css'), regels.join('\n'));

  // de layout-getallen heb je ook in code nodig (zijmenu 240, kop 52)
  writeFileSync(
    join(hier, bron.naam + '.ts'),
    '// GEGENEREERD door packages/tokens/bouw.mjs. Niet met de hand aanpassen.\n'
    + 'export const ' + bron.naam + ' = ' + JSON.stringify(ruw, null, 2) + ' as const;\n'
  );
  verslag.push([bron.naam, paren.length]);
}

// De suite-voordeur: neutraal, leent Phylax' structuur maar met een grijze
// primaire knop. Staat hier en niet in een json, omdat suite/00 het in proza
// beschrijft en er geen tokenbestand voor is.
writeFileSync(join(hier, 'css', 'suite.css'), [
  '/* GEGENEREERD door packages/tokens/bouw.mjs.',
  '   De suite-start is bewust neutraal: geen teal en geen amber, zodat geen',
  '   enkel programma voorgaat (suite/00-suite-start.md). */',
  '@import "./phylax.css";',
  ':root, .suite {',
  '  --suite-bg: #08090b;',
  '  --suite-primary: #e8eaf0;',
  '  --suite-primary-hover: #ffffff;',
  '  --suite-on-primary: #08090b;',
  '}',
  '',
].join('\n'));

console.log('tokens: ' + verslag.map(([n, c]) => n + ' ' + c).join(', ') + ', suite 4');
