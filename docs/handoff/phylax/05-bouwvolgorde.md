# 05 · Bouwvolgorde

Elke milestone is pas af als de schermen er pixelgetrouw uitzien zoals het prototype (zelfde maten, kleuren, fonts, copy) op 1440 × 900.

**M0 · Fundament.** Monorepo in `boazderijk3-del/SAK` (zie `../suite/02-repo-en-infra.md`), infrabeslissingen vastgelegd, React + TS frontend, Python backend (FastAPI), Postgres, objectopslag voor bronnen. Design tokens uit `design-tokens.json` als CSS-variabelen. Fonts geladen. **Suite Start** (inloggen, tweestaps, programmakeuze, account) en programmawisselaar.
✔ Acceptatietests S1–S7 en W1–W5. Lege app-schil (zijmenu 240, kop 52) identiek aan het prototype.

**M1 · Schil.** Opdrachtgever-wisselaar + aanmaken, menu, Casussen, Locaties (keuringsstatus), Dingen, Zoek overal (`/`).
✔ Alle schermen uit `Phylax v3` met seed-data klikbaar.

**M2 · Rollen en log.** Login, rollen onderzoeker/reviewer/FG, auditlog op elke inzage en wijziging.
✔ FG ziet alles alleen-lezen; log toont wie, wat, wanneer.

**M3 · Materiaal.** Upload, hash, read-only opslag, parsers WhatsApp (beide), e-mail, PDF, platte tekst. Daarna Telegram, Signal, Instagram/Facebook, CSV (kolomkoppeling), OCR.
✔ Voorbeeldbestanden geven juiste aantallen; foutpad werkt; geen upload zonder grondslag.

**M4 · Herkend + Gegevens.** Patroonherkenning met validatie, normalisatie en samenvoegen, wachtrij met besluiten per rol, doorspringen naar volgend voorstel, "→ Dingen".
✔ `06-12345678` en `+31 6 1234 5678` worden één gegeven met twee vindplaatsen.

**M5 · Gesprekken + Tijdlijn.** Berichtenweergave, labelfilter, staafdiagram, patronen, tijdlijn met filters.
✔ Nachtmarkering 23:00–06:00; labels bevestigen/terugzetten.

**M6 · Taalmodel.** Labels, samenvatting, verbandvoorstellen; aan/uit-schakelaar.
✔ Uit = geen enkel taalmodel-element zichtbaar.

**M7 · Verbanden.** Netwerkweergave (bv. React Flow of eigen SVG) met vaste stijlen uit `02-ontwerp.md`.

**M8 · Rapport.** Onderdelen, statusflow met vier-ogen, papierpreview, PDF-rapport en bewijspakket (originelen + hashes + log), vergrendelen met hash, nieuwe versie bij wijziging.
✔ Opsteller kan niet goedkeuren; export pas na goedkeuring.
