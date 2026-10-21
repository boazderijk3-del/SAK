# 10 · Meldkaart (openbaar)

Prototype: **`prototype/SAK Meldkaart Club HiFi.html`** (gewone HTML; de CSS bovenin en het script onderaan zijn de spec). Schermafbeeldingen: `screens/meldkaart-01…03`.

## Doel
Een openbare kaart die laat zien waar rond de club en de vereniging meldingen worden gedaan. Drie doelen:
1. **Awareness:** zichtbaar maken hoe vaak iets gebeurt.
2. **Mijden:** wie ziet dat er op een plek steeds iemand wordt lastiggevallen, kan die plek vermijden.
3. **Bewijs:** met data laat je zien dat de veiligheid ergens structureel niet goed is. Daarmee ga je in gesprek met gemeente, politie of wijkagent, die verdere acties kunnen uitzetten.
De kaart is **niet** bedoeld om te laten zien waar extra beveiliging staat.

## Anonimiseren (server-side, niet in de browser)
- De server stuurt **nooit losse meldingen** naar de openbare kaart, alleen samengevoegde blokken.
- **Raster:** vaste cellen van 0,00135° breedte × 0,00219° lengte (≈ 150 × 150 m op 52° NB). Cel-index `i = floor(lat / 0,00135)`, `j = floor(lng / 0,00219)`.
- **Drempel:** een cel wordt alleen getoond als hij in de gekozen periode en filter **minstens 3 meldingen** heeft.
- Per cel alleen: aantal, aantal onderweg, aantal per soort. Geen tijden, geen teksten, geen namen.
- Meldingen zonder `geo` (in de club, of op straat zonder pin) tellen mee in de tellers en de verdeling per soort, niet op de kaart.
- Totale tellers en de verdeling per soort gelden voor het hele gebied en mogen ook meldingen uit cellen onder de drempel bevatten.

## Opbouw (max 960 breed, gecentreerd)
1. **Kop** in de huisstijl (zie `09-…`): verloop, schuine vlakken, logo, knop "Melden" (rechtsboven, 44 hoog, `rgba(20,22,28,.35)`), titel "MELDKAART" 700 48 met schaduw, ondertitel "WAAR WORDT ROND DE CLUB OVERLAST GEMELD?".
2. **Intro** 17/1.5: wie er meldt, waarom (mijden, wijkagent) en dat je nooit een precieze plek of persoon ziet. Letterlijk in het prototype.
3. **Tellers:** drie vakken (bg `#eef3f9`, gap 2): totaal meldingen in de periode, daarvan onderweg naar huis, blokken met 3 of meer meldingen. Getal 700 40 `#2c5aa0`.
4. **Filters:** periode (Laatste 30 dagen, **Laatste 3 maanden** = standaard, Laatste 12 maanden) en soort (Alles + de acht soorten uit `09-…`, behalve Iemand is onwel). Chips 44 hoog, rand 2; gekozen periode `#1d2b4a`, gekozen soort `#2c5aa0`. Eén soort aantikken terwijl Alles aan staat = alleen die soort.
5. **Kaart** 520 hoog (mobiel 420), rand 2. Scrollwiel zoomt niet. Tegels gedesatureerd (`saturate(.25) brightness(1.04)`).
   - Cel: rechthoek, witte rand 1, `fillOpacity .72`, kleur op aantal: 3–4 `#7fd3d6`, 5–6 `#3d8fc4`, 7–11 `#2c5aa0`, 12–19 `#6a54aa`, 20+ `#a63d8f`. Aantal in het midden (700 13 wit met schaduw).
   - Popup: straatnaam, "N meldingen", top 3 soorten met aantallen.
   - Clubmarker: ruit 18 `#1d2b4a` met witte rand en label "CLUB HIFI".
6. **Legenda:** kleurstrook + "3 tot {max}" + "Blokken met minder dan 3 meldingen tonen we niet."
7. **Twee kolommen** (mobiel onder elkaar):
   - **Meeste meldingen:** top 6 cellen: aantal (700 26), straatnaam, "Meest gemeld: {soort}". Klik = kaart zoomt naar de cel (zoom 17).
   - **Wat wordt er gemeld:** balk per soort (`#6a54aa`, track `#eef3f9`).
   - **Zo maken we het anoniem:** drie regels (blok van 150 m, vanaf 3 meldingen, geen namen/tijden/omschrijvingen).
   - Knop **Zelf iets melden** (stijl van Versturen).
8. **Voet** in de huisstijl, met bronvermelding van de kaart.

## Straatnamen bij cellen
Het prototype gebruikt een vaste lijst plekken. In productie: reverse geocoding van het celmidden (straat of buurt), server-side gecachet per cel. Nooit het adres van een losse melding.

## Kaarttegels
Publieke OpenStreetMap-tegels (`tile.openstreetmap.org`) **weigeren verzoeken vanaf deze sites** en zijn niet bedoeld voor productieverkeer. Het prototype gebruikt Esri World Street Map. In productie een tegeldienst met account (bijv. MapTiler, Stadia, Esri) of een eigen tegelserver: infrabeslissing #9 in `suite/02-repo-en-infra.md`. Altijd met bronvermelding.

## Realtime
Een nieuwe publieke melding met `geo` telt mee zodra de cache van de aggregatie is ververst (maximaal 5 minuten). Geen live-updates per melding, om herleidbaarheid te voorkomen.

## Prototype-only
`?embed` en `?bg` in de URL zijn alleen voor de pitch en horen niet in het product. De voorbeeldmeldingen zijn gegenereerd op looproutes in Leiden.
