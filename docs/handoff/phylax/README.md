# Phylax: overdrachtspakket voor Claude Code

Dit pakket beschrijft de suite-start (inloggen en programmakeuze), Phylax (de applicatie-schil) en het onderdeel **Analyse**. Het is volledig genoeg om ze te bouwen: wat ze doen, hoe ze eruitzien tot op de pixel, hoe de data in elkaar zit, in welke volgorde je bouwt en hoe je controleert of het klopt. SAK staat in `../sak/`.

## Waar bouwen
Bouw vanaf nul in de lege repo **`boazderijk3-del/SAK`**, als monorepo voor alle programma's. Zie `../suite/02-repo-en-infra.md`. De infrastructuur is nog niet besloten; bespreek die eerst (zelfde document).

## Over de ontwerpbestanden
De bestanden in `prototype/` zijn **ontwerpreferenties gemaakt in HTML**: klikbare prototypes. Het is geen productiecode om over te nemen. Bouw ze **opnieuw** in de doelstack (React + TypeScript, Python-backend). Open een prototype door het `.dc.html`-bestand in een browser te openen; `support.js` moet ernaast staan. Het gedrag staat precies in de logica onderaan elk bestand (`class Component`).

## Fidelity: geen ruimte voor interpretatie
**High-fidelity en normatief.** Er zijn drie bronnen, in deze rangorde:
1. `specs/*.md`: de volledige elementboom van elk prototype, met elke CSS-waarde en elke tekst letterlijk. **Bindend voor het uiterlijk.**
2. `02-ontwerp.md` en `design-tokens.json`: het systeem erachter (tokens, componenten, layout per scherm). Gebruik dit om de spec te begrijpen en om tokens te benoemen.
3. `screens/*.png`: schermafbeeldingen om visueel te vergelijken. Ze zijn gemaakt op de breedte van het voorbeeldvenster, niet op 1440. Maten haal je dus uit de spec, niet uit de afbeelding.

Voor functionaliteit gaat de tekst in `01-functionele-specificatie.md` vóór het prototype. Kom je een tegenstrijdigheid tegen, of iets dat niet in de spec staat? **Vraag het dan; gok niet.**

## Lees in deze volgorde
0. `../suite/00-suite-start.md` en `../suite/01-programmawisselaar.md` · gedeeld, eerst lezen
1. `01-functionele-specificatie.md` · wat het systeem doet, per scherm en per rol
2. `02-ontwerp.md` · visuele taal, layout, componenten, statussen
3. `design-tokens.json` · de ontwerpwaarden, machineleesbaar
4. `03-datamodel.md` · entiteiten, velden, relaties
5. `04-herkenningsregels.md` · parsers en herkenning per datatype
6. `05-bouwvolgorde.md` · milestones
7. `../suite/02-repo-en-infra.md` · repo-structuur, open infrabeslissingen, werkwijze
8. `07-acceptatietests.md` · controles per milestone
9. `specs/` en `screens/` · pixelspec en schermafbeeldingen per prototype

## Prototypes
- `../suite/prototype/Suite Start.dc.html` · inloggen en programmakeuze
- `prototype/Phylax v3.dc.html` · de applicatie-schil: programmawisselaar onder het logo, zijmenu met opdrachtgever-wisselaar, Overzicht, Invoer, Werkbak, Casussen, Locaties, Dingen, Onderzoek, Zoek, Rapporten
- `prototype/Phylax Analyse.dc.html` · Analyse binnen Onderzoek: 7 tabs en rolwissel (onderzoeker, reviewer, FG)

De voorbeelddata is verzonnen; gebruik die als seed- en testdata.

## Uitgangspunten
- **Stack:** React + TypeScript (frontend), Python (backend en verwerking).
- **Platform:** desktop-webapp, ontworpen op 1440 × 900. Minimale breedte 1280.
- **Rollen:** onderzoeker, reviewer, FG. Eén account voor de hele suite, met rollen per programma.
- **Materiaal:** alleen materiaal dat met toestemming of op een andere rechtmatige grondslag is verkregen.
- **AVG:** elk onderzoek hangt aan een casus met grondslag, doel en bewaartermijn. Elke inzage en wijziging wordt gelogd.
- **Mens beslist:** het systeem stelt voor; pas na bevestiging door een mens komt iets in het dossier.
- **Buiten scope:** toegang tot systemen of accounts van anderen, de-anonimiseren, origin-IP's achter CDN of proxy blootleggen, en zonder grondslag data van profielen verzamelen. Externe opzoekingen alleen via officiële bronnen en altijd handmatig gestart.

## Assets
Geen afbeeldingen of iconensets. Logo: een vierkant van 22 × 22 met een rand van 2 px `#35d0c4` en radius 6, naast "Phylax" in 18/600. Fonts via Google Fonts: Space Grotesk (400/500/600) en JetBrains Mono (400/500).
