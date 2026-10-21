# Master-handoff: suite (Phylax · SAK · Ophanim) voor Claude Code

Dit is het complete overdrachtspakket voor de hele suite. Het vervangt de losse mappen `handoff/` en `handoff-sak/`. Alles wat sindsdien is verbeterd, zit erin (zie `VERBETERINGEN.md`).

## Waar bouwen
Lege repo **`boazderijk3-del/SAK`**, branch `main`. Eén monorepo voor alle programma's. Zet deze map in de repo als `/docs/handoff/`. Repo-structuur, open infrabeslissingen en werkwijze: `suite/02-repo-en-infra.md`.

## Indeling van dit pakket
```
handoff-master/
  README.md               dit bestand: leesvolgorde en spelregels
  VERBETERINGEN.md        wat er nieuw of anders is dan in de eerdere pakketten
  suite/                  gedeeld: inloggen, programmakeuze, programmawisselaar, repo en infra
  phylax/                 Phylax (applicatie-schil) en Analyse
  sak/                    SAK: Meldkamer, Kaart, Beheer, Mobiel, publieke meldpagina, meldkaart
```
Elke programmamap heeft dezelfde opbouw: genummerde documenten, `design-tokens.json`, `prototype/`, `specs/` (pixelspec per prototype) en `screens/` (schermafbeeldingen).

## Spelregels: geen ruimte voor interpretatie
1. **Uiterlijk:** `specs/*.md` is bindend. Daarin staat de volledige elementboom van elk prototype met elke CSS-waarde en elke tekst letterlijk. Daarna komen `02-ontwerp.md` en `design-tokens.json` (het systeem erachter). Daarna `screens/*.png`, alleen om visueel te vergelijken; maten haal je uit de spec.
2. **Gedrag:** de tekst in de documenten gaat vóór het prototype. Bij twijfel lees je de logica onderaan het prototype (`class Component`).
3. **Tegenstrijdig of ontbrekend?** Vraag het. Gok niet.
4. **Prototypes zijn referentie, geen productiecode.** De `.dc.html`-bestanden zijn klikbare HTML-prototypes. Bouw ze opnieuw in de doelstack. Openen: dubbelklik het bestand, met `support.js` ernaast (SAK ook `sak-store.js`, `sak-pin-picker.js`, `image-slot.js` en `assets/`).
5. **Voorbeelddata is verzonnen.** Gebruik die als seed- en testdata.

## Leesvolgorde
**Eerst gedeeld (`suite/`)**
1. `00-suite-start.md`: inloggen, tweestaps, programmakeuze, account
2. `01-programmawisselaar.md`: wisselen tussen Phylax, SAK en Ophanim
3. `02-repo-en-infra.md`: monorepo, infrabeslissingen (eerst bespreken), werkwijze

**Dan Phylax (`phylax/`)**: `README.md`, daarna 01 t/m 07.

**Dan SAK (`sak/`)**: `README.md`, daarna 01 t/m 11. Nieuw sinds de vorige versie:
- `09-publieke-meldpagina.md`: meldpagina per klant in de eigen huisstijl (white-label), met Club HiFi (L.S.V. Minerva) als referentie
- `10-meldkaart.md`: openbare kaart met geanonimiseerde meldingen per blok
- `11-bewaren-en-anonimiseren.md`: na 3 maanden naam en nummer eraf, melding blijft voor statistiek

## Uitgangspunten voor de hele suite
- **Stack:** React + TypeScript (frontend), Python/FastAPI (backend), Postgres, realtime via WebSocket.
- **Eén account, één SSOT:** opdrachtgevers en projecten hebben één id voor alle programma's. Rollen per programma.
- **Elk programma een eigen uiterlijk:** Phylax (Space Grotesk, teal), SAK (Barlow, amber, donker, hoekig), publieke pagina's in de huisstijl van de klant. De suite-start is neutraal.
- **Logging:** elke inzage en wijziging wordt vastgelegd met wie, wat en wanneer.
- **Mens beslist:** het systeem stelt voor, een mens bevestigt.

## Bouwvolgorde in één oogopslag
| Fase | Wat | Waar beschreven |
|---|---|---|
| M0 | Fundament: monorepo, infrabeslissingen, tokens, Suite Start, programmawisselaar | `suite/`, `phylax/05-bouwvolgorde.md` M0 |
| Phylax M1–M8 | Schil, rollen, materiaal, herkenning, gesprekken, taalmodel, verbanden, rapport | `phylax/05-bouwvolgorde.md` |
| SAK M1–M7 | Beheer, Meldkamer, Mobiel, publieke meldpagina en meldkaart, Kaart, veld, rapportage | `sak/04-bouwvolgorde.md` |

Phylax en SAK kunnen na M0 parallel. Elke milestone eindigt met de acceptatietests (`07-acceptatietests.md` per programma) en een visuele vergelijking met `specs/` en `screens/`. Eén pull request per milestone.
