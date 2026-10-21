# 06 · Repo en infrastructuur

## Repo
We bouwen alles vanaf nul in de nieuwe, lege repo **`boazderijk3-del/SAK`** (branch `main`). Phylax, SAK en de suite-start komen in **één monorepo**, zodat de programmawisselaar, login, tokens en het datamodel gedeeld worden.

Voorgestelde structuur (mag Claude Code verfijnen, niet zonder overleg omgooien):

```
/apps
  /suite        inloggen, programmakeuze, account (Suite Start)
  /phylax       Phylax + Analyse
  /sak-web      Meldkamer, Kaart, Beheer
  /sak-mobile   app voor beveiligers (PWA eerst)
  /sak-public   publieke meldpagina en meldkaart, white-label per opdrachtgever (thema uit de API), zonder login
/packages
  /tokens       design-tokens.json → CSS-variabelen, één set per programma (phylax, sak, sak-public, suite)
  /ui-shared    SuiteSwitcher, gebruikersmenu, basiscomponenten zonder programma-stijl
  /api-client   gegenereerde types en client uit de OpenAPI van de backend
/services
  /api          Python (FastAPI): auth, SSOT, Phylax, SAK
  /worker       Python: parsers, hashing, OCR, herkenning, taalmodel-taken, meldkaart-aggregatie, nachtelijk anonimiseren
/docs/handoff   dit pakket (handoff-master)
```

Zet de map `handoff-master` als `/docs/handoff/` in de repo. De prototypes (`*.dc.html`) blijven daar als referentie; ze worden niet gebouwd of uitgerold.

## Infrastructuur: nog te beslissen
Deze keuzes zijn bewust nog open. Bespreek ze met Claude Code **voordat M0 begint** en leg de uitkomst vast in `/docs/beslissingen.md` (één regel per beslissing: datum, keuze, reden).

| # | Vraag | Opties om te bespreken | Waar het van afhangt |
|---|---|---|---|
| 1 | Inloggen | eigen accounts + TOTP, of een identiteitsdienst (Keycloak, Entra ID, Auth0) met SSO | of klanten met hun eigen organisatieaccount inloggen |
| 2 | Hosting | Nederlandse/EU-cloud (bv. Scaleway, OVH, Azure NL), of on-premise per klant | AVG, eisen van opdrachtgevers, beheerlast |
| 3 | Database | één Postgres met schema's per domein, of per programma een eigen database | hoe strak SSOT moet zijn |
| 4 | Bestandsopslag | S3-compatibele opslag met object lock (WORM) voor bronnen | bewijswaarde van bronnen in Phylax |
| 5 | Realtime | WebSocket via de API, of een broker (NATS, Redis Streams) | aantal gelijktijdige veldeenheden |
| 6 | Mobiel | PWA, of native (React Native) | push-meldingen op iOS, offline kaart, achtergrond-GPS |
| 7 | Taalmodel | API van een aanbieder met verwerkersovereenkomst, of een model in eigen beheer | gevoeligheid van het materiaal |
| 8 | OCR | Tesseract in de worker, of een clouddienst | kwaliteit tegenover data buiten de deur |
| 9 | Kaarttegels | tegeldienst met account (MapTiler, Stadia, Esri), of eigen tegelserver. **Publieke OSM-tegels vallen af:** ze weigeren verzoeken vanaf eigen sites | offline gebruik, licentie, volume, huisstijl van de kaart |
| 10 | Logging en audit | append-only tabel, of een aparte audit-opslag | eisen FG, bewaartermijn |
| 11 | White-label domeinen | pad per klant (`/{opdrachtgever}/{project}`), subdomein (`melden.clubhifi.nl` via CNAME), of beide | wens van de klant, TLS-certificaten automatisch |
| 12 | Geocoding straatnamen meldkaart | PDOK Locatieserver (NL, gratis), of de tegeldienst | kosten, nauwkeurigheid |

**Voorstel om mee te beginnen** (geen besluit): eigen accounts met TOTP en later SSO erbij; EU-cloud; één Postgres met schema's `auth`, `ssot`, `phylax`, `sak`; S3-opslag met object lock; WebSocket via de API; eerst een PWA; taalmodel en OCR achter een interface, zodat de aanbieder later kan wisselen.

## Werkwijze met Claude Code
1. Laat Claude Code eerst `README.md` en alle documenten lezen en een samenvatting en vragenlijst teruggeven. Begin pas met bouwen als die vragen beantwoord zijn.
2. Bespreek de tabel hierboven en leg de beslissingen vast.
3. Bouw per milestone (`../phylax/05-bouwvolgorde.md` en `../sak/04-bouwvolgorde.md`). Elke milestone eindigt met de acceptatietests uit `07-acceptatietests.md` (per programma) en een visuele vergelijking met `screens/` en `specs/`.
4. Eén pull request per milestone. Jij keurt goed voordat de volgende begint.
