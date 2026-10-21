# Verbeteringen ten opzichte van de eerdere pakketten

Alles hieronder is verwerkt in de documenten, prototypes, specs en schermafbeeldingen van dit pakket.

## Suite
- Gedeelde documenten (Suite Start, programmawisselaar, repo en infra) staan één keer in `suite/` in plaats van dubbel.
- Infra-tabel uitgebreid met: kaarttegels (publieke OSM-tegels werken niet vanaf een eigen site, zie onder), white-label domeinen per klant, en de anonimiseringstaak.

## SAK · Mobiel en Meldkamer (`sak/08-personeel-en-communicatie.md`)
- Eigen personeelsaccount, pincode van 4 cijfers per dienst, vergrendelen na 2 minuten.
- Nieuwe opdrachtstatus **Ontvangen** tussen Uitgezet en Onderweg. Volledig scherm "Nieuwe opdracht" met knop Ontvangen en een klok van 3:00.
- Na 180 s zonder ontvangst gaat de opdracht naar de teamleider ("Bevestigd via portofoon" of "Overnemen").
- Meldkamer toont "Wacht op ontvangst · nog m:ss" en daarna in rood dat de opdracht is doorgezet.
- Deurcontrole op de telefoon: alleen toegang, foto en signalement, geen personalia (ook niet in het API-antwoord).
- Offline: optimistische wachtrij, geen sms.
- Bugfix in het prototype: acties werken op de opdracht die op het scherm staat (op id, niet op positie in de lijst).

## SAK · Publieke meldpagina (`sak/09-publieke-meldpagina.md`)
- **White-label:** elke vereniging of club krijgt de pagina in de eigen huisstijl (logo, sfeerfoto, kleuren, lettertype, vormtaal). Referentie-implementatie: `SAK Publiek melden Club HiFi.dc.html` (Club HiFi, de studentendiscotheek van L.S.V. Minerva).
- **Meldpunt voor iedereen:** bezoekers, leden én buurtbewoners. Nieuw type "Overlast in de buurt" (kots, glas, lawaai).
- **Waar:** "In de club" (vaste plekken) of "Op straat" (plek aantikken op een kaart of huidige locatie, plus wanneer: net, eerder vannacht, andere dag).
- **Soorten melding** afgestemd op het uitgaansleven: lastiggevallen of ongewenst aangeraakt, nageroepen of gevolgd, iets in een drankje, ruzie of agressie, onwel, onveilige situatie, overlast in de buurt, iets anders.
- **Zo werkt het** met de teksten van de opdrachtgever: jij meldt het, wij kijken wat er nodig is, er komt actie.
- **Contact standaard aan**, met uitleg waarom. Anoniem kan, maar dan kunnen we niet terugbellen.
- **Geen 112-balk** in de klantversie: het gaat om kleinere dingen in het uitgaansleven. Instelbaar per klant, standaard uit.
- Toon vriendelijk en informeel.

## SAK · Meldkaart (`sak/10-meldkaart.md`, nieuw)
- Openbare pagina in dezelfde huisstijl. Meldingen per blok van ongeveer 150 × 150 m, pas zichtbaar vanaf 3 meldingen, nooit losse punten.
- Doel: awareness, plekken kunnen mijden, en met data bewijzen dat het ergens structureel niet goed is (voor het gesprek met gemeente, politie of wijkagent).
- Tellers, filters op periode en soort, lijst met de meeste meldingen, verdeling per soort, uitleg over anonimiseren.

## SAK · Bewaren (`sak/11-bewaren-en-anonimiseren.md`, nieuw)
- Meldingen worden **niet** na 3 maanden verwijderd. Ze blijven voor statistiek, plannen en als voorbeeld van wat er kan gebeuren en hoe je het oplost.
- Na 3 maanden worden niet-anonieme meldingen **geanonimiseerd**: naam, telefoonnummer en andere herleidbare gegevens eraf.

## Pitch
- De pitch (`Pitch Veilig Uit.dc.html` in het project) hoort niet bij de bouw, maar de uitsnedes in `sak/screens/pitch-uitsnedes/` laten zien hoe de onderdelen samen het verhaal vertellen. De teksten in de pitch zijn leidend voor de positionering.
