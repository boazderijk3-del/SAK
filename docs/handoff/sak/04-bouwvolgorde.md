# 04 · Bouwvolgorde SAK

Een milestone is af als de schermen er pixelgetrouw uitzien zoals het prototype.

- **M0 · Fundament.** React + TS, Python-backend, Postgres, WebSocket. Tokens uit `design-tokens.json`, fonts en Material Symbols. Gedeeld component programmawisselaar (zie `../suite/01-programmawisselaar.md`) en SSO met Phylax.
- **M1 · Beheer.** Opdrachtgevers, projecten, rollen en personeel, inventaris (reeksen), plattegronden met posten.
- **M2 · Meldkamer.** Meldingen, omzetten naar incident, incidentrapport, register, sancties, BOLO, berichten, zoeken, auditlog per operator.
- **M3 · Mobiel.** Personeelsaccount, pincode per dienst, opdracht Ontvangen met doorzetten naar de teamleider na 180 s, offline wachtrij (`08-…`). Melden in 3 stappen, deurcontrole zonder personalia, BOLO ontvangen, taken met terugkoppeling.
- **M3b · Publieke meldpagina (white-label).** Thema per opdrachtgever in Beheer, meldpagina volgens `09-…` met Club HiFi als referentie, QR per project, eigen domein (optioneel).
- **M3c · Meldkaart en anonimiseren.** Aggregatie per cel server-side, openbare meldkaart volgens `10-…`, nachtelijke anonimiseringstaak volgens `11-…`.
- **M4 · Kaart dispatch.** Ingeklapt/uitgeklapt (A/C) volgens `02-ontwerp.md`, teams, taken met slepen, meldingen, bulletin met gelezen-bevestiging, chat, lagen en plattegrond uitlijnen, import GPX/KML/GeoJSON.
- **M5 · Kaart veld + offline.** Veldmodus (Nu, Melden, BOLO, Kaart), in-/uitklokken, materiaal, kaartgebieden downloaden.
- **M6 · Rapportage.** Rapport met filters, afdrukken/PDF.
- **M7 · Statistiek.** Export van geanonimiseerde meldingen per periode, gebied en soort, voor plannen met gemeente en politie.
