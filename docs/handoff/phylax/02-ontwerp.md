# 02 · Ontwerp

Donker, rustig, informatiedicht. Geen schaduwen (behalve dropdowns), geen verlopen, geen iconen. Hiërarchie komt uit kleur van tekst, mono vs. sans, en dunne lijnen. Kleur heeft betekenis; gebruik hem niet decoratief.

## Kleuren

### Ondergronden (van donker naar licht)
| Token | Hex | Gebruik |
|---|---|---|
| `bg.canvas` | `#07080b` | pagina achter de app, achter rapportpapier |
| `bg.app` | `#0b0d12` | hoofdvlak van de app, cellen in rasters, invoervelden |
| `bg.panel` | `#0e1117` | zijmenu en rechter zijpanelen |
| `bg.segment` | `#12151c` | segmented control-bak, netwerkknopen |
| `bg.card` | `#151922` | opdrachtgeverkaart, dropdown, berichtballon andere partij |
| `bg.rowSelected` | `#151a23` | geselecteerde lijstregel, actief filter in lijst |
| `bg.navActive` | `#1a1f29` | actief menu-item |
| `bg.segmentActive` | `#1f2430` | actieve optie in segmented control |
| `bg.bubbleSelf` | `#15232a` | berichtballon melder (rechts) |
| `bg.llm` | `#14121c` | kader taalmodel-samenvatting (rand `rgba(185,140,255,.25)`) |

### Lijnen
| Token | Waarde | Gebruik |
|---|---|---|
| `line.row` | `rgba(255,255,255,.05)` | scheiding tussen tabelregels |
| `line.divider` | `rgba(255,255,255,.06)` | paneelranden, kopranden, kaartranden |
| `line.frame` | `rgba(255,255,255,.08)` | buitenrand app, kaarten |
| `line.control` | `rgba(255,255,255,.12)`–`.14` | knoppen secundair, chips, inputs |
| `line.dashed` | `rgba(255,255,255,.18)` dashed | sleepvlak |
| `line.timeline` | `rgba(255,255,255,.1)` | verticale tijdlijn |

### Tekst
| Token | Hex | Gebruik |
|---|---|---|
| `text.primary` | `#e8eaf0` | hoofdtekst, titels, actief |
| `text.secondary` | `#b6bcc6` | lopende tekst in tabellen, kruimelpad |
| `text.muted` | `#8b909b` | labels, kolomkoppen, metadata, inactieve tabs |
| `text.faint` | `#5c616b` | uitgeschakeld, tellers zonder belang, placeholders |

### Betekeniskleuren
| Token | Hex | Betekenis |
|---|---|---|
| `accent.teal` | `#35d0c4` | primaire actie, actieve tab-onderstreep, selectie, "Bericht" in tijdlijn. Tekst op teal: `#04211f`. Link hover `#7fe6dd` |
| `accent.amber` | `#e2ab44` | **herkende waarde** (altijd mono), status `voorstel`, open teller, "Gegeven", keuring bijna verlopen |
| `accent.purple` | `#b98cff` | **taalmodel / voorstel / AVG-context**: grondslagregel, "nacht", gestippelde verbanden, persoonsknopen, samenvatting |
| `status.green` | `#56d38a` | `bevestigd`, `verwerkt`, in orde, verbonden |
| `status.red` | `#f0706a` (Analyse) / `#f2564d` (schil) | dreiging, intimidatie, fout, verlopen. **Kies één: `#f0706a`.** |
| `status.akkoord` | `#35d0c4` | reviewer-akkoord |
| `status.afgewezen` | `#5c616b` | afgewezen |

Labelkleuren (Gesprekken/Tijdlijn): dreiging, intimidatie → rood; observatie, locatie → amber; contactpoging → `#b6bcc6`; nieuw nummer, nieuw account → paars.

### Rapportpapier
Papier `#f2f1ed`, tekst `#1b1d22`, metadata `#6b6f78`, regellijn `#dddbd4`, radius 4 px.

## Typografie

- **Space Grotesk** (400, 500, 600) voor alle UI-tekst. `-webkit-font-smoothing: antialiased`.
- **JetBrains Mono** (400, 500) voor: alle herkende waarden, id's, hashes, tijden, datums, tellers, bestandsinhoud-aantallen, sectiekoppen in hoofdletters, statuspillen.

| Rol | Font | Size | Weight | Overig |
|---|---|---|---|---|
| Schermtitel (kop onderzoek) | Sans | 22 | 600 | letter-spacing -.01em |
| Waarde groot (Herkend detail) | Mono | 28 | 400 | amber, word-break: break-all |
| Knooptitel (Verbanden) | Sans | 20 | 600 | |
| Rapporttitel | Sans | 24 | 600 | -.01em, line-height 1.2 |
| Logo "Phylax" | Sans | 18 | 600 | letter-spacing .02em |
| Paneeltitel ("Bronnen", "Herkend") | Sans | 15 | 600 | |
| Bericht / citaat / tijdlijntekst | Sans | 14 | 400 | line-height 1.45 |
| Body, menu, tabs, knoppen | Sans | 13 | 400 (knop primair 600) | |
| Klein / secundair | Sans | 12 | 400 | |
| Metadata, kolomkop | Sans | 11 | 400 | muted |
| Sectiekop | Mono | 11 | 400 | HOOFDLETTERS, muted, bv. "GEVONDEN IN" |
| Eyebrow (ONZ-014 · STALKING · LOPEND) | Mono | 11 | 400 | muted |
| Kaartlabel ("OPDRACHTGEVER") | Mono | 10 | 400 | letter-spacing .06em |
| Kanaal in lijst ("WHATSAPP") | Mono | 10 | 400 | letter-spacing .04em |
| Statuspil | Mono | 10 | 400 | |

Getallen in tabellen: mono. Lange regels: line-height 1.5–1.6.

## Afstanden en vormen

- Raster van 2 / 4 / 6 / 8 / 10 / 12 / 14 / 16 / 18 / 20 / 22 / 24 / 28 / 36 px. Panelen hebben padding 22–28 px, lijstregels 9–12 px verticaal.
- Radius: 4 (pil, rapportpapier, kleine tag), 5 (label-chip), 6 (chip, segment-optie, kleine knop), 7 (menu-item), 8 (knop, kaart, segment-bak), 10 (grote kaart, berichtballon, appframe), 12 (sleepvlak).
- Schaduw: alleen dropdown `0 16px 40px rgba(0,0,0,.5)`.
- Tabellen zijn geen kaarten: bovenrand `line.divider`, regels gescheiden door `line.row`, geen achtergrond.

## App-layout

```
┌──────────┬──────────────────────────────────────────────┐
│ zijmenu  │ kop 52px: kruimelpad ............ acties     │
│ 240px    ├──────────────────────────────────────────────┤
│ #0e1117  │ (Analyse) onderzoekskop + tabs               │
│          ├──────────────────────────────────────────────┤
│          │ inhoud: per scherm 2 of 3 kolommen,          │
│          │ elke kolom scrollt zelf                      │
└──────────┴──────────────────────────────────────────────┘
```
- Zijmenu: 240 px in de schil (Analyse-prototype gebruikt 220 px; **bouw 240**). Padding 18/14, gap 18.
- Kop: hoogte 52, padding 0 20, onderrand `line.divider`.
- Onderzoekskop: padding 18 28 0, gap 14. Eyebrow + titel links, AVG-regel rechts (paars mono 11, line-height 1.6, rechts uitgelijnd).
- Inhoud vult de rest; kolommen met `min-height:0` en eigen `overflow:auto`. Rechter zijpanelen hebben `bg.panel` en linkerrand `line.divider`.

### Kolommen per Analyse-tab
| Tab | Kolommen |
|---|---|
| Materiaal | `1fr` · 360 (paneel) |
| Herkend | 400 · `1fr` |
| Gesprekken | 250 · `1fr` · 330 (paneel) |
| Tijdlijn | 240 · `1fr` |
| Gegevens | 1 kolom, padding 22 28 |
| Verbanden | `1fr` (canvas) · 320 (paneel) |
| Rapport | 300 · `1fr` (canvas `#07080b`, papier 620 gecentreerd, padding 44 48) |

Tabelkolommen:
- Materiaal: `1fr 170 150 110 90`, gap 12
- Gegevens: `130 1.3fr 1fr 150 70 110`, gap 12
- Gevonden in: `200 1fr`, gap 14
- Tijdlijnitem: `14 52 1fr 170`, gap 10; dagkolom 110, gap 20

## Componenten

**Menu-item.** padding 9 12, radius 7, 13 px, `space-between` met mono-teller 11 px muted. Actief: bg `#1a1f29`, tekst primary. Inactief: secondary. Uitgeschakeld (Kennis): faint.

**Opdrachtgeverkaart.** padding 10 12, radius 8, bg `#151922`, rand `line.frame`. Mono label 10 px + naam 13/500. Met ▾ rechts als dropdown.

**Segmented control** (rolwissel, categoriefilter). Bak: padding 3, gap 4, radius 8, bg `#12151c`. Optie: 12 px, padding 5–6 × 10–12, radius 6. Actief bg `#1f2430` + primary; inactief transparant + muted.

**Tab.** padding 10 14, 13 px, gap 8 met mono-teller 11 px. Actief: primary + onderrand 2 px teal. Inactief: muted, onderrand transparant.

**Knop primair.** padding 10 16, radius 8, bg teal, tekst `#04211f` 13/600. Klein (kop): padding 6 10, radius 6, 12/600.
**Knop secundair.** zelfde maat, rand 1 px `rgba(255,255,255,.14)`, transparant.
**Uitgeschakeld.** rand `rgba(255,255,255,.1)`, tekst faint.

**Formaatchip.** 12 px, padding 6 10, radius 6, rand `.14`, tekst secondary. Hover: rand teal, tekst primary.

**Statuspil.** mono 10–11, padding 2 6–7, radius 4, rand 1 px + tekst in statuskleur, geen vulling.

**Label-chip.** 11 px, padding 3 8, radius 5. Voorstel: `1px dashed <kleur>`, tekst `<label> 88%`. Bevestigd: `1px solid <kleur>`, bg `rgba(255,255,255,.04)`, tekst `<label> ✓`.

**Gegeven-chip in bericht.** mono 11, padding 3 8, radius 5, bg `rgba(226,171,68,.1)`, tekst amber.

**Berichtballon.** max-width 520, padding 10 14, radius 10, 14/1.45, rand `line.divider`. Andere partij links bg `#151922`; melder rechts bg `#15232a`. Metaregel erboven mono 11 muted.

**Infoveldraster** (Herkend detail). 3 kolommen, gap 1 px op bg `line.divider` (geeft haarlijnen), radius 10, cellen bg `#0b0d12`, padding 12 14, label 11 muted + waarde 13.

**Sleepvlak.** rand 1 px dashed `.18`, radius 12, padding 26 18, gecentreerd, 14 + 12 muted.

**Taalmodel-kader.** padding 14, radius 10, bg `#14121c`, rand `rgba(185,140,255,.25)`. Kop mono 11 paars "SAMENVATTING · VOORSTEL TAALMODEL".

**Staafdiagram.** hoogte 90, gap 3, staaf radius 2 2 0 0, min 2 px. Kleur `rgba(53,208,196,.55)`; uitschieters paars. As-labels mono 10 faint.

**Tijdlijn.** linkerrand 1 px `.1`; stip 9 × 9 rond, `margin-left:-5px` zodat hij op de lijn valt.

**Netwerkknoop.** 150 breed, gecentreerd op punt, padding 8 10, radius 8, bg `#12151c`. Rand: geselecteerd teal, persoon `rgba(185,140,255,.5)`, gegeven `.12`. Soort mono 10 muted, label 12 (persoon sans paars, gegeven mono amber). Lijnen: bevestigd `rgba(255,255,255,.22)` (actief `#e8eaf0`, 1.6 px), voorstel `rgba(185,140,255,.4)` dash `5 4` (actief paars). Legenda linksonder.

**Checkbox.** 14 × 14, radius 4, rand `.2`–`.25`; aan: rand en vulling teal.

**Dropdown.** absoluut onder trigger +6 px, bg `#151922`, rand `.12`, radius 10, padding 6, schaduw. Opties padding 8 10, radius 6.

**Input.** hoogte 34, radius 6, rand `.14`, bg `#0b0d12`, 13 px, geen focus-outline; placeholder faint.

## Gedrag

- Hover: alleen waar aangegeven (chips, links). Klikbare elementen `cursor:pointer`.
- Geen animaties nodig. Status `verwerken` → `verwerkt` mag zonder overgang wisselen.
- Na besluit in Herkend: selectie naar volgend open voorstel.
- Lege staten: één regel muted tekst, padding 20 0. Geen illustraties.
- Lange waarden in lijsten: één regel met ellipsis; in detail breken (`break-all`).
- Tekst wordt nooit afgekort in berichten of citaten.

## Schrijfstijl

Nederlands, zakelijk, kort. Werkwoord voorop op knoppen ("Bevestig", "Wijs af", "Aanbieden voor review"). Geen uitroeptekens, geen emoji. Taalmodel-uitvoer altijd benoemd als voorstel.
