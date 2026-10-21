# 09 · Publieke meldpagina (white-label)

Referentie-prototype: **`prototype/SAK Publiek melden Club HiFi.dc.html`**. Pixelspec: `specs/SAK Publiek melden Club HiFi.md`. Schermafbeeldingen: `screens/hifi-01…06`.
Neutrale basisversie (voor klanten zonder eigen huisstijl): `prototype/SAK Publiek melden.dc.html`, spec `specs/SAK Publiek melden.md`.

## Doel en doelgroep
Een meldpunt voor **iedereen**: bezoekers van de club, leden van de vereniging en buurtbewoners. Melden kan in de club, op straat (bijvoorbeeld op weg naar huis) en in de buurt. Het gaat om de kleinere dingen in het uitgaansleven: lastigvallen, nageroepen worden, overlast, glas of kots op straat. Toon: vriendelijk en informeel, professioneel uiterlijk.

## White-label: elke klant zijn eigen huisstijl
Elke vereniging of club krijgt de pagina in de **eigen huisstijl**, voor herkenbaarheid en binding. De structuur, velden en logica zijn voor alle klanten gelijk; het uiterlijk komt uit een thema per opdrachtgever.

### Thema (per opdrachtgever, in Beheer → Publieke pagina)
| Sleutel | Club HiFi (referentie) | Toelichting |
|---|---|---|
| `naam` | `Club HiFi` | grote titel in de kop |
| `logo` | `assets/logo-hifi.png` (wit, transparant) | 100 × 64, `object-fit: contain`, linksboven |
| `sfeerfoto` | (upload) | kop, `object-fit: cover` |
| `font` | Ubuntu 400/500/700 | Google Fonts of eigen upload (woff2) |
| `kleur.primair` | `#2c5aa0` | balkjes voor koppen, gekozen type, nummers, knop Versturen |
| `kleur.inkt` | `#1d2b4a` | tekst, gekozen knoppen, voet |
| `kleur.tekst2` | `#3a4866` / `#56637d` | intro, uitleg / hulptekst |
| `kleur.vlak` | `#eef3f9` | vakken "Zo werkt het", na versturen |
| `kleur.rand` | `#d5deea` | velden en knoppen |
| `kleur.uit` | `#a3aec0` | knop Versturen zolang niet alles is ingevuld |
| `verloop` | `160deg, rgba(127,211,214,.72) 0%, rgba(61,111,182,.7) 50%, rgba(106,84,170,.62) 100%` | over de sfeerfoto |
| `vormtaal` | schuine vlakken + harde schaduw `4px 4px 0 #14161c` | zie Opbouw |
| `toon` | `informeel` | `zakelijk`, `vriendelijk`, `informeel` |
| `toon112` | `false` | 112-balk tonen; standaard uit |
| `plekken` | Dansvloer, Bar voor, Bar achter, Toiletten, Garderobe, Rij buiten | knoppen bij "In de club" |
| `kaartMidden` | 52.1578, 4.4862 (voorbeeld, echte adres nog aanleveren) | startpunt kaart bij "Op straat" en meldkaart |
| `bewaartermijn` | `3 maanden` | termijn tot anonimiseren (zie `11-…`) |

Beheer controleert bij opslaan dat witte tekst op `kleur.primair` en `kleur.inkt` een contrast van minstens 4,5:1 heeft.

### Hoe we een nieuwe huisstijl maken
Neem de website van de klant als bron: logo, kleuren, lettertype en de herkenbare vormen (bij Club HiFi: verloop turquoise-blauw-paars, hoekige witte "bergvormen", titel in hoofdletters met harde schaduw, witte verticale balk). Vertaal die naar de sleutels hierboven. De opbouw van de pagina verandert niet.

## Opbouw (van boven naar beneden, Club HiFi)
Max 480 breed, gecentreerd, padding 4 20 48, gap 30. Alles uit de spec; hieronder de hoofdlijnen.
1. **Kop** 400 hoog: sfeerfoto, verloop erover, twee schuine vlakken onderaan (`clip-path`, lichtgrijs `rgba(220,228,238,.55)` en wit). Logo linksboven. Witte balk 10 breed, titel "CLUB HIFI" 700 54/0.95 wit met schaduw `4px 4px 0 #14161c`, ondertitel "VOELT IETS NIET GOED? LAAT HET ONS WETEN." 700 22.
2. **Intro** 17/1.5: "In de club, onderweg naar huis of bij jou in de buurt: als iets niet klopt, willen we het weten. Ook als het klein lijkt. De crew van {naam} leest elke melding."
3. **Zo werkt het** (koptype: balkje 6 breed `kleur.primair` + 700 20 HOOFDLETTERS). Drie vakken onder elkaar, bg `#eef3f9`, padding 16, cijfer 700 34:
   - **Jij meldt het:** "Klopt er iets niet of geeft iets je een vervelend gevoel? Meld het, in de club of onderweg naar huis. Voel je je op dit moment niet veilig? Loop dan naar de beveiliging of de bar."
   - **Wij kijken wat er nodig is:** "We bekijken wat er nodig is om jou te helpen, of om te voorkomen dat het nog eens gebeurt."
   - **Er komt actie:** "De beveiliging grijpt in, we houden een plek of persoon extra in de gaten, of we zorgen ervoor dat het de volgende keer niet meer gebeurt."
4. **Wat is er gebeurd?** acht knoppen onder elkaar (min-hoogte 64, rand 2): icoon 28, titel 16/700, voorbeeld 13. Gekozen: bg en rand `kleur.primair`, tekst wit.
   | Knop | Icoon | Type in Meldkamer | Prio |
   |---|---|---|---|
   | Lastiggevallen of ongewenst aangeraakt | `front_hand` | Overlast | P1 |
   | Nageroepen of gevolgd | `directions_walk` | Overlast | P2 |
   | Iets in een drankje | `local_bar` | Verdachte situatie | P1 |
   | Ruzie of agressie | `sports_mma` | Vechtpartij | P1 |
   | Iemand is onwel | `medical_services` | Onwel | P1 |
   | Onveilige situatie | `warning` | Onveilige situatie | P2 |
   | Overlast in de buurt | `home` | Overlast | P3 |
   | Iets anders | `flag` | Overig | P3 |
   De voorbeeldregels staan letterlijk in de spec. Onder de knoppen: "Jas kwijt of een vraag over de muziek? Daarvoor kun je terecht bij de garderobe of de bar."
5. **Waar was het?** twee knoppen "In de club" (`nightlife`) en "Op straat" (`directions_walk`), 56 hoog.
   - **In de club:** knoppen met `plekken` (44 hoog) + vrij veld "Of beschrijf de plek".
   - **Op straat:** "Tik op de kaart waar het gebeurde. Ongeveer is goed genoeg." Kaart 280 hoog (rand 2 `#d5deea`), tik zet een pin (ruit 22 × 22 `kleur.primair`, witte rand 3, schaduw `2px 2px 0 #14161c`). Knop "Ik ben er nu" (`my_location`) vraagt de locatie van het toestel. Status ernaast: "Nog geen plek gekozen" / "Plek gekozen" (`#2c7a4b`) / foutmelding (`#b23a3a`). Vrij veld "Straat of herkenningspunt (mag)". Daaronder **Wanneer?**: Net, Eerder vannacht, Andere dag (dan een datumveld).
6. **Vertel wat je zag:** tekstvak 4 regels, plus "Foto toevoegen (mag)" (camera, meerdere, verkleind tot 1100 px).
7. **Mogen we je nog iets vragen?** uitleg: "Soms hebben we nog vragen over een melding. Met je gegevens kunnen we contact met je opnemen. Zonder gegevens kan dat niet, maar je melding telt natuurlijk wel mee." Knoppen "Ja, neem contact op" (**standaard gekozen**) en "Liever anoniem". Bij ja: Voornaam + 06-nummer, met "Alleen de beveiliging ziet je gegevens. We gebruiken ze alleen voor deze melding."
8. **Melding versturen:** 62 hoog, `kleur.primair` (grijs `#a3aec0` tot alles klopt), 700 20 HOOFDLETTERS, schaduw `4px 4px 0 #14161c`. Te vroeg gedrukt: "Vul nog in: …".
9. **Link naar de meldkaart:** vak met rand 2, icoon `map` in `#6a54aa`, "Meldkaart" + "Zie waar rond {naam} de meeste overlast wordt gemeld. Anoniem en per blok."
10. **Voet** `kleur.inkt` met schuine bovenrand (`clip-path: polygon(0 22px,34% 0,72% 30px,100% 8px,100% 100%,0 100%)`): "Wat we met je melding doen", vier regels (iconen in `#7fd3d6`):
    - Alleen de beveiliging van {naam} ziet je melding en je gegevens.
    - Anoniem melden? Dan slaan we geen naam, nummer of locatie van je telefoon op.
    - Op de openbare meldkaart staat nooit je precieze plek. Meldingen worden samengevoegd per blok van ongeveer 150 meter en pas getoond vanaf 3 meldingen.
    - Na {bewaartermijn} halen we je naam en nummer van de melding af. De melding zelf bewaren we, voor statistiek en om van te leren.

## Verplichte velden
Type; bij Op straat een pin of een plekomschrijving; bij Andere dag een datum; omschrijving of foto; bij contact een 06-nummer.

## Na het versturen
Balk 10 breed + "DANKJEWEL VOOR JE MELDING" (700 32) + "MELDNUMMER M-1047". Vak met drie regels:
- De beveiliging heeft je melding binnen en kijkt wat er nodig is.
- Contact: "Hebben we nog vragen? Dan nemen we contact met je op via het nummer dat je gaf." / anoniem: "Je hebt anoniem gemeld. We kunnen je daarom niet terugbellen."
- Op straat: "Je melding telt anoniem mee op de meldkaart. Zo ziet iedereen welke plekken je beter kunt mijden." / in de club: "Ben je nog in de club en voel je je niet veilig? Loop naar de beveiliging of de bar."
Knoppen "Nog iets melden" en "Bekijk de meldkaart".

## Wat er in de Meldkamer binnenkomt
`src: publiek`, `type` en `prio` uit de tabel, `sub` (de gekozen knop), `place` (`club` | `onderweg`), `geo` {lat,lng} bij Op straat, `occurred` (tijdstip van het voorval), `loc`, `text` met de knoptitel ervoor, `photos`, `contact` ({anon:true} of {naam, telefoon}). Status Nieuw, tag PUBLIEK.

## Regels
- Geen login; alleen strikt noodzakelijke cookies. Anoniem: geen IP en geen toestellocatie opslaan (de pin is wat de melder zelf aanwijst).
- Rate limit per toestel en IP (5 per 10 min); CAPTCHA alleen bij misbruik.
- URL: `/{opdrachtgever}/{project}` of een eigen domein per klant (zie infra). QR-code per project uit Beheer.
- De kaart gebruikt dezelfde tegeldienst als de meldkaart (zie `10-meldkaart.md`).
