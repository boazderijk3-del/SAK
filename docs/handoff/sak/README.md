# SAK: overdrachtspakket voor Claude Code

SAK (Security Awareness Kit) is het programma voor beveiliging op locatie: meldkamer, kaart met teams en taken, beheer, een mobiele app voor beveiligers en een publieke meldpagina. Het hoort bij hetzelfde geheel als Phylax en Ophanim (één login, één SSOT) en heeft een eigen uiterlijk.

## Waar bouwen
Bouw vanaf nul in de lege repo **`boazderijk3-del/SAK`**, als één monorepo met Phylax en de suite-start. Zie `../suite/02-repo-en-infra.md`. De infrastructuur is nog niet besloten; bespreek die eerst.

## Over de ontwerpbestanden

De bestanden in `prototype/` zijn **ontwerpreferenties gemaakt in HTML**: klikbare prototypes die uiterlijk en gedrag laten zien. Het is geen productiecode om over te nemen. De opdracht is ze **opnieuw te bouwen** in de doelstack (React + TypeScript, Python-backend) met de gangbare patronen daarvan.

Open een prototype door het `.dc.html`-bestand in een browser te openen; `support.js`, `sak-store.js`, `sak-pin-picker.js`, `image-slot.js` en de map `assets/` moeten ernaast staan. `sak-store.js` is een gedeelde opslag in `localStorage` (sleutel `sak.v2`): wat je in de Meldkamer doet, zie je in Beheer en Mobiel. In productie wordt dat de backend met realtime updates. Het gedrag staat precies in de logica onderaan elk bestand (`class Component`); lees die bij twijfel.

## Fidelity: geen ruimte voor interpretatie

**High-fidelity en normatief.** Er zijn drie bronnen, in deze rangorde:
1. `specs/*.md`: de volledige elementboom van elk prototype, met elke CSS-waarde en elke tekst letterlijk. **Bindend voor het uiterlijk.** Dynamische stijlen (`{{ … }}`) staan in de logica van het prototype; die van de Kaart-layout staan uitgeschreven in `02-ontwerp.md`.
2. `02-ontwerp.md` en `design-tokens.json`: het systeem erachter.
3. `screens/*.png`: schermafbeeldingen om visueel te vergelijken. Ze zijn gemaakt op de breedte van het voorbeeldvenster; maten haal je uit de spec.

Voor functionaliteit gaat de tekst vóór het prototype. Kom je een tegenstrijdigheid tegen, of iets dat niet in de spec staat? **Vraag het dan; gok niet.**

## Lees in deze volgorde

0. `../suite/00-suite-start.md` en `../suite/01-programmawisselaar.md` · gedeeld, eerst lezen
1. `01-functionele-specificatie.md` · wat elk onderdeel doet
2. `02-ontwerp.md` · visuele taal, layout, componenten, Kaart ingeklapt/uitgeklapt
3. `design-tokens.json` · dezelfde waarden, machineleesbaar
4. `03-datamodel.md` · entiteiten en relaties
5. `04-bouwvolgorde.md` · milestones
6. `../suite/02-repo-en-infra.md` · repo-structuur, infrabeslissingen, werkwijze
7. `07-acceptatietests.md` · controles per milestone
8. `08-personeel-en-communicatie.md` · personeelsaccount, pincode per dienst, opdracht ontvangen, doorzetten naar teamleider, offline wachtrij
9. `09-publieke-meldpagina.md` · meldpagina per klant in de eigen huisstijl (white-label), Club HiFi als referentie
10. `10-meldkaart.md` · openbare kaart met geanonimiseerde meldingen per blok
11. `11-bewaren-en-anonimiseren.md` · na 3 maanden contactgegevens eraf, melding blijft
12. `specs/` en `screens/` · pixelspec en schermafbeeldingen per prototype

## Prototypes

| Bestand | Voor wie | Apparaat |
|---|---|---|
| `SAK Meldkamer.dc.html` | meldkamer-operator | desktop, volle breedte |
| `SAK Kaart.dc.html` | dispatch (OPS-1) en veldeenheden | tablet 1194 × 834, telefoon 402 × 874 |
| `SAK Beheer.dc.html` | teamleider / beheerder | desktop |
| `SAK Mobiel.dc.html` | beveiliger, portier, EHBO | telefoon, max 440 breed |
| `SAK Publiek melden Club HiFi.dc.html` | bezoekers, leden, buurt (via QR-code) | telefoon; **referentie** voor de white-label meldpagina |
| `SAK Meldkaart Club HiFi.html` | iedereen (openbaar) | telefoon en desktop |
| `SAK Publiek melden.dc.html` | klanten zonder eigen huisstijl | telefoon, neutraal licht thema |

`SAK Kaart` heeft **één layout met twee standen**: ingeklapt (A · Rail, standaard) en uitgeklapt (C · Command), te wisselen met de bovenste knop in de rail. Variant B is vervallen. De balk "SAK · KAARTINTERFACE" en de apparaatkeuze zijn alleen voor het prototype en horen niet in het product.

## Uitgangspunten
- **Stack:** React + TypeScript, Python-backend, realtime via WebSocket. Kaart met Leaflet (of MapLibre). Tegels van een tegeldienst met account; publieke OSM-tegels werken niet vanaf een eigen site (zie `10-meldkaart.md`).
- **Offline:** de kaart en de mobiele app moeten werken met slecht bereik: kaartgebieden downloaden, meldingen in een wachtrij tot er verbinding is.
- **Logging:** elke handeling in de meldkamer wordt vastgelegd met de operator die is ingesteld ("Wie bedient de meldkamer").
- **Privacy:** personen in het register en sancties zijn persoonsgegevens. Bewaartermijnen per opdrachtgever; sancties met einddatum vervallen automatisch uit "actief".
- **Publiek melden:** voor bezoekers, leden en buurt, in de huisstijl van de klant. Contact standaard aan, anoniem kan. Geen 112-balk tenzij de klant dat wil.
- **Bewaren:** meldingen blijven bewaard voor statistiek; na 3 maanden worden contactgegevens verwijderd (`11-…`).

## Assets
- Icoonset: **Material Symbols Sharp** (Google Fonts, `opsz,wght,FILL,GRAD@20..48,300..500,0..1,0`). Iconnamen staan in de prototypes (bv. `notifications`, `folder_open`, `person_search`, `gavel`, `menu_book`, `forum`, `map`, `settings`).
- Fonts: Barlow (400–700), Barlow Condensed (500–700), JetBrains Mono (400–700). Publieke pagina's: font uit het thema (Club HiFi: Ubuntu 400/500/700).
- Logo Club HiFi: `prototype/assets/logo-hifi.png` (wit op transparant). Sfeerfoto levert de klant aan.
- Plattegronden in het prototype zijn gegenereerde voorbeeld-SVG's; in productie uploadt Beheer echte PNG/JPG.
