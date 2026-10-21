# 11 · Bewaren en anonimiseren van meldingen

## Uitgangspunt
Meldingen worden **niet verwijderd** na de bewaartermijn. We gebruiken ze voor:
- statistiek en de meldkaart,
- plannen die we maken (bijvoorbeeld met gemeente en politie),
- voorbeelden van wat er kan gebeuren en hoe je dat oplost.

Wat wel gebeurt: na de termijn (standaard **3 maanden**, per opdrachtgever instelbaar) worden niet-anonieme meldingen **geanonimiseerd**.

## Wat er gebeurt bij anonimiseren
Een dagelijkse taak in de worker zoekt meldingen met `src = publiek`, `contact.anon = false` en `ts` ouder dan de termijn, en:
1. Verwijdert `contact.naam` en `contact.telefoon`; zet `contact = {anon: true, geanonimiseerd: <datum>}`.
2. Haalt herleidbare gegevens uit de vrije tekst die het systeem herkent (telefoonnummers, e-mailadressen) en vervangt ze door `[verwijderd]`.
3. Laat type, soort, prioriteit, plek (`place`, `geo`, `loc`), tijdstip, omschrijving en afhandeling staan.
4. Schrijft een regel in het auditlog: "Melding M-nnnn geanonimiseerd na {termijn}".

## Open punten (beslissen met de FG vóór livegang)
- **Foto's:** daarop kunnen gezichten staan. Voorstel: na de termijn verwijderen, of alleen bewaren als ze aan een incident hangen.
- **Personen gekoppeld in de Meldkamer** (register, sancties) vallen onder de eigen bewaarregels van het register, niet onder deze taak.
- Geldt dezelfde termijn voor meldingen van personeel (`src = medewerker`)?
- De privacytekst op de meldpagina noemt de termijn; die komt uit hetzelfde thema-veld `bewaartermijn`.

## Acceptatie
Zie `07-acceptatietests.md`, AN1–AN4.
