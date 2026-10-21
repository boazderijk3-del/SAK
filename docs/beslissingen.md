# Beslissingen

Eén regel per beslissing: datum, keuze, reden. Gevraagd door
`docs/handoff/suite/02-repo-en-infra.md`.

Een beslissing die hier niet staat, is niet genomen. Staat er "OPEN", bouw dan
niets dat die keuze vastlegt — zet er een interface tussen.

| datum | # | onderwerp | keuze | reden |
|---|---|---|---|---|
| 21-10-2026 | — | scope eerste build | **M0 + Phylax M1 + SAK M1** | Boaz: *"ik wil eerst een clean programma waarmee ik kan werken"* |
| 21-10-2026 | — | code uit de oude Phylax | **niets overnemen** | Boaz: *"we gaan nog geen scrips of parsers toevoegen uit de vorige phylax"*. Geldt ook voor ontleders waar veel werk in zit. De LESSEN uit het oude `CLAUDE.md` gelden wel |
| 21-10-2026 | 1 | inloggen | **eigen accounts + TOTP**, SSO later | Zoals het pakket voorstelt. De SSO-knop staat al in het ontwerp maar verschijnt alleen als SSO is ingesteld, dus die kan erbij zonder het scherm te verbouwen |
| 21-10-2026 | — | Ophanim | **wacht op ontwerpen** | Er zit geen Ophanim-ontwerp in het pakket; Boaz levert het aan. Tot die tijd: de gestippelde "later"-kaart, niet klikbaar. Er wordt niets geraden |
| — | 2 | hosting | **OPEN** | hangt samen met #3 |
| — | 3 | database | **OPEN** | zie `docs/database-keuze.md` |
| — | 4 | bestandsopslag (WORM) | **OPEN** | blokkeert pas bij M3 (materiaal). Tot die tijd achter een interface |
| — | 5 | realtime | **OPEN** | blokkeert pas bij SAK Meldkamer |
| — | 6 | mobiel | **OPEN** | blokkeert pas bij SAK M3 |
| — | 7 | taalmodel | **OPEN** | blokkeert pas bij Phylax M6. Achter een interface |
| — | 8 | OCR | **OPEN** | blokkeert pas bij M3. Achter een interface |
| — | 9 | kaarttegels | **OPEN** | blokkeert pas bij SAK Kaart |
| — | 10 | logging en audit | **OPEN** | blokkeert bij M2; de tabelvorm wordt bij M0 al goed neergezet (append-only) |
| — | 11 | white-label domeinen | **OPEN** | blokkeert pas bij de publieke meldpagina |
| — | 12 | geocoding meldkaart | **OPEN** | blokkeert pas bij de meldkaart |

## Waarom de meeste hier OPEN staan

Het pakket zet twaalf keuzes open en vraagt ze vooraf te bespreken. Van die
twaalf blokkeren er maar twee de eerste build: inloggen (want Suite Start ís
het inlogscherm) en de database (want bij M0 liggen de schema's vast).

De rest te vroeg vastleggen is duurder dan hem openhouden: een keuze die je
maakt voordat je het probleem hebt, maak je op een aanname. Elk OPEN punt dat
later code raakt, krijgt nu een interface, zodat de aanbieder kan wisselen
zonder het scherm te verbouwen. Dat is wat het pakket zelf voorstelt voor
taalmodel en OCR, en het geldt net zo goed voor opslag en kaarttegels.
