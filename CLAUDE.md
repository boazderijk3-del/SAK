# Werkafspraken

Nieuwe repo, schone bouw. De CODE uit de vorige Phylax komt hier niet in —
dat is Boaz' eis en die staat in `docs/beslissingen.md`. De LESSEN wel: die
zijn met geld en uren betaald.

## De bronnen, in deze volgorde

1. `docs/handoff/*/specs/*.md` — **bindend voor het uiterlijk**, tot op de pixel.
2. `docs/handoff/*/0*.md` + `design-tokens.json` — het systeem erachter. Voor
   **gedrag** gaat de tekst vóór het prototype.
3. `docs/handoff/*/screens/*.png` — alleen om visueel te vergelijken.

**Tegenstrijdig of ontbrekend? Vragen, niet gokken.** Dat staat zo in het
pakket en het geldt hier onverkort.

## Fouten komen hier direct in

Maak je een fout, dan schrijf je hem NU in dit bestand — niet aan het eind,
niet in een samenvatting. Eén regel is genoeg: wat je aannam, en wat het was.
Daarna pas een test die hem vangt, in dezelfde commit als de reparatie.

| wat er mis was | hoe het is vastgesteld |
|---|---|
| **een gefilterd invoerveld verloor stil cijfers** | 2FA-veld: `value={code}` + filter in `onChange` + `maxLength`. Strip je een letter, dan blijft de state gelijk, dus React trekt de DOM NIET bij — en `maxLength` telt die letter wél mee. `a1b2c3d4e5f6` gaf `123` in plaats van `123456`. Precies in het veld waar iemand niet kan inloggen en niet weet waarom. Oplossing: `e.target.value` meteen gelijktrekken, niet op een render rekenen |
| **een `<button>` binnen een `<label>`** | "Wachtwoord vergeten?" stond in het label van het wachtwoordveld. Dubbel stuk: de klik gaat door naar het invoerveld, én de knop valt uit de toegankelijkheidsboom omdat de labeltekst de naam van het VELD wordt. Gevonden doordat S6 de knop niet kon vinden |
| initialen afgeleid uit het e-mailadres | `m.devries@…` gaf "MD", de spec toont "MV". Nederlandse achternamen hebben tussenvoegsels; die horen er niet in. Nu uit de NAAM: eerste woord + laatste woord |
| ik las mijn eigen uitvoer af met `head` erachter | in het vorige project: 275 treffers, ik hield er 40 en noemde de rest afwezig. **Een afgekapte uitvoer is geen uitvoer** — tel bij een brede zoekopdracht eerst hoeveel treffers er zijn |

## Vijf regels die het ontwerp dragen

Uit `docs/architectuur.md`. Een scherm dat deze overtreedt is niet af.

1. **Een leeg vak is een antwoord.** "Niets gevonden" blijft staan, mét wat
   leeg daar betekent.
2. **Een storing ziet er nooit uit als leegte.** Elk scherm dat gegevens toont
   kan drie standen: gevuld, leeg, en stuk. Een meldkamer met een lege lijst
   door een dode websocket is de gevaarlijkste fout die dit product kan maken.
3. **Elke waarde draagt zijn herkomst.** Melding → incident → onderzoek dragen
   **id's, nooit kopieën**.
4. **Goud betekent: hier moet nog een mens naar kijken.** De vijf tokenrollen
   (teal, paars, goud, groen, rood) dragen betekenis, geen smaak.
5. **Geen verzonnen cijfers.** Geen risicoscore. Geen getal dat zich als
   oordeel voordoet.

## Hoe je controleert

```bash
npm run tokens              # design-tokens.json -> css-variabelen
npm run build -w @sak/suite # typecheck + bundel
npm run test  -w @sak/suite # acceptatietests S1-S7
```

**Een script draaien is geen controleren.** Een test die groen is zegt dat die
test slaagt. Open het scherm, kijk ernaar, en leg het naast `screens/`.

**Deze Mac draait macOS 12 en Playwright levert daar geen eigen browsers.** De
tests draaien tegen de geïnstalleerde Chrome (`channel: 'chrome'`).
Schermvergelijkingen (acceptatietest V1) horen daarom op één vaste omgeving,
niet op de laptop — anders vergelijk je twee verschillende Chromes.

## Waar wat staat

```
apps/suite        Suite Start: inloggen, tweestaps, programmakeuze, account
packages/tokens   design-tokens.json -> css-variabelen + ts-constanten (gegenereerd)
docs/handoff      het ontwerppakket, ongewijzigd
docs/architectuur.md   de keten, de twee helften, de vier soorten opslag
docs/opslag.md         waar bestanden heen gaan, en de val met het bewaarslot
docs/native.md         waarom native, en wat er zonder Apple-account kan
docs/beslissingen.md   wat besloten is en wat bewust OPEN staat
```

Staat een beslissing op **OPEN**, bouw dan niets dat die keuze vastlegt — zet
er een interface tussen.
