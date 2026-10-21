# 02 · Ontwerp SAK

Operationeel, hoekig, hoog contrast. Werkt in het donker (nachtdiensten, evenementen) en op een tablet in de hand. Rechte hoeken, dunne randen, amber als enige merkkleur. Kleur op kaart en lijsten volgt een vaste betekenis.

## Kleuren

### Ondergronden
| Token | Hex | Gebruik |
|---|---|---|
| `bg.void` | `#050607` | achter het apparaat (Kaart, Mobiel) |
| `bg.app` | `#0a0c0e` | hoofdvlak, invoervelden, select-opties |
| `bg.bar` | `#0d1013` | kop, zijmenu |
| `bg.panel` | `rgba(13,16,19,.96)` | zwevende panelen op de kaart |
| `bg.raised` | `#12161a` | kaarten, dropdown, hover op kop |
| `bg.raised2` | `#151a1f` | geselecteerde regel |
| `bg.hover` | `#1a1f24` / `#1b2127` | hover, actieve tool (variant C) |
| `bg.activeNav` | `rgba(242,179,61,.08)` | actief menu-item; actieve tool A/B `rgba(242,179,61,.16)` |

### Lijnen
`#232a31` scheidingslijn (kop, panelen) · `#2c343c` rand van velden en knoppen · `#3a434c` sterkere rand.

### Tekst
`#e6e9ec` primair · `#c3cad1` secundair · `#9aa4ad` tertiair · `#8a949e` muted/labels · `#6b757f` placeholder · `#5b646d` faint.

### Betekenis
| Token | Hex | Betekenis |
|---|---|---|
| `amber` | `#f2b33d` | merk, actief, primaire knop (tekst `#0a0c0e`), links. Hover `#ffd27a` |
| `blue` | `#5cc8ff` | vriendelijk / eigen eenheid, incidenten, Beveiliger |
| `red` | `#ff5f57` | vijandig, BOLO, P1, medisch, Interventie |
| `green` | `#4fd18b` | neutraal, opgelost, online, EHBO |
| `yellow` | `#f2d64b` | onbekend, nieuwe melding, Coördinator |
| `purple` | `#c792ea` | Meldkamer-rol |
| `orange` | `#ff9f43` | waarschuwing tussen geel en rood |

### Publieke pagina's (meldpagina en meldkaart)
Deze pagina's gebruiken **niet** het SAK-uiterlijk maar het thema van de opdrachtgever (white-label). Zie `09-publieke-meldpagina.md` voor de themasleutels en de Club HiFi-waarden. De neutrale basisversie gebruikt: bg `#f3f1ec`, kaart `#fff`, tekst `#16191c`, secundair `#4a4f54`/`#6a6f74`, rand `#d6d2ca`, placeholder `#8a8f94`, accent `#b5361d`, succes `#2f9e5f`.

## Typografie
- **Barlow** 400/500/600/700: alle UI-tekst.
- **Barlow Condensed** 500/600/700: labels, sectiekoppen, tabs, statussen. Altijd HOOFDLETTERS, letter-spacing .12–.16em.
- **JetBrains Mono** 400–700: woordmerk "SAK", nummers (M-1020, INC-2026-0172, PORTO-03), coördinaten, klok.
- **Material Symbols Sharp**: iconen, 17–20 px, `font-feature-settings:'liga'`.

| Rol | Stijl |
|---|---|
| Woordmerk desktop | JetBrains Mono 700 20 px (Beheer 22), `#f2b33d`, letter-spacing .06em |
| Woordmerk Kaart | Barlow Condensed 700 20 px, letter-spacing .12em, amber |
| Programmanaam naast woordmerk | Barlow Condensed 600 13 px, HOOFDLETTERS, .16em, `#8a949e` |
| Paginatitel (Beheer h1) | Barlow 600 22–26 px |
| Detailtitel | Barlow 600 18–20 px |
| Lijsttitel | Barlow 600 14 px |
| Body | Barlow 13–14 px (desktop), 15–16 px (telefoon) |
| Meta | 12 px `#8a949e` |
| Sectiekop | Barlow Condensed 600 11–13 px HOOFDLETTERS .16em `#8a949e` |
| Publiek h1 | Barlow 700 24 px |

## Vormen en maten
- **Geen border-radius** op knoppen, velden, panelen en kaarten in Meldkamer, Beheer en Mobiel. Uitzonderingen: stippen en markers (50 %), enkele elementen in Kaart (6–9 px).
- Kop desktop: min. hoogte 52, padding 8 14, onderrand `#232a31`, bg `#0d1013`.
- Beheer: grid `230px 1fr`, zijmenu padding 16 12.
- Velden: bg `#0a0c0e`, rand 1 px `#2c343c`, padding 6 8, 13 px.
- Telefoon: hit targets minimaal 44 px; tabbalk onderaan; middenknop Melden amber.
- Kaartapparaat: tablet 1194 × 834, telefoon 402 × 874; geschaald om in het venster te passen.
- Schaduw alleen op zwevende panelen en dropdowns: `0 16px 40px rgba(0,0,0,.5)`.
- Scrollbalk 8 px, duim `#232a31`.

## Componenten
- **Menu-item:** icoon + label + teller-pil in betekeniskleur (tekst donker). Actief: bg `rgba(242,179,61,.08)`, tekst amber.
- **Meldingsregel:** icoon in typekleur, type 14/600, tags (PUBLIEK, medisch), tijd geleden rechts, regel nummer · plek, tekst (2 regels), status + door. Linkerrand in prioriteitskleur.
- **Prioriteit:** P1 rood, P2 amber, P3 grijs.
- **Status-tag:** Barlow Condensed hoofdletters, rand of vlak in statuskleur.
- **Kaartmarker:** cirkel in affiliatiekleur, code erbij in mono.
- **Toolrail (Kaart):** knoppen 60 breed (46 op telefoon en variant C), icoon + label, badge rechtsboven.
- **Waarschuwingsbalk:** vlak `rgba(242,214,75,…)`, label "NIEUW" + nummer + titel.
- **Programmawisselaar:** zie `00-programmawisselaar.md`.

## Kaart: ingeklapt (A · Rail) en uitgeklapt (C · Command)

De Kaart heeft één layout met twee standen. **Uitgeklapt is de uitgeklapte versie van ingeklapt.** Variant B (Dock) is vervallen. De bovenste uitklapknop in de rail wisselt tussen de twee standen: icoon `left_panel_open` met "UITKLAP" als hij ingeklapt is, `left_panel_close` met "INKLAP" als hij uitgeklapt is, in kleur `#8a949e`. Op de telefoon is er geen uitklapknop; daar geldt altijd ingeklapt.

Maten op de tablet (1194 × 834). TB = hoogte van de bovenbalk = 48 (telefoon 44). Alle elementen zijn `position:absolute` boven de kaart.

| Element | Ingeklapt (A) | Uitgeklapt (C) |
|---|---|---|
| Rail / kolom | top TB, left 0, bottom 0, **width 68**, bg `rgba(13,16,19,.96)`, rechterrand `#232a31`, z 9 | top TB, left 0, bottom 0, **width 400**, zelfde bg en rand |
| Programmatools | verticaal, top TB+8, left 4, gap 2; knop **60 × 52** | horizontaal, top TB+6, left 8, width 384, `space-between`; knop **46 × 52** |
| Kaarttools (Marker, Meten, Route, Zone) | verticaal onderaan de rail, bottom 12, left 4 | zwevend rechtsboven: top TB+8, right 12, bg paneel, rand `#232a31`, padding 4, radius 12, schaduw `0 8px 24px rgba(0,0,0,.45)` |
| Paneel | rechts: top TB, right 0, bottom 0, width 380, linkerrand; alleen open na een klik op een tool; sluitknop ✕ | in de kolom: top TB+66, left 0, bottom 0, width 400, bovenrand; **altijd open** (standaard Meldingen); geen sluitknop |
| Selectiekaart (eenheid/marker) | top TB+12, left 80, width 300 | top TB+12, left 412, width 300 |
| Hint (tekenmodus) | top TB+10, left 68, right 380 of 0 | top TB+10, left 400, right 84 |
| Zoom/locatie-knoppen | right 392 (paneel open) of 12, bottom 28 | right 12, bottom 28 |
| Coördinaten | left 80, bottom 12 | left 412, bottom 12 |

Toolknop: kolom, gap 3, radius 8, icoon 22 px, label Barlow Condensed 600 10 px, HOOFDLETTERS, .08em. Actief: ingeklapt bg `rgba(242,179,61,.16)`, uitgeklapt bg `#1b2127`, in beide gevallen tekst amber. Badge rechtsboven: Taken amber, Meldingen geel `#f2d64b` als er nieuwe zijn en anders rood, Bulletin rood.

Paneelkop: padding 14 16 12, onderrand `#232a31`. Titel Barlow Condensed 600 17 px HOOFDLETTERS .08em, sub 12 px `#8a949e`. Body padding 14 16 18, scrolt.

Gedrag: ingeklapt opent en sluit een klik op een tool het paneel. Uitgeklapt wisselt een klik op een tool alleen het paneel. Uitklappen zonder open paneel opent Meldingen. Inklappen houdt het actieve paneel open, rechts. De stand wordt per gebruiker onthouden.

De balk "SAK · KAARTINTERFACE" boven het apparaat is alleen voor het prototype, net als de apparaatkeuze.

## Schrijfstijl
Nederlands, kort en feitelijk, gebiedende wijs op knoppen ("Melding aanmaken", "Verspreiden naar alle telefoons", "In behandeling nemen"). Placeholders geven een concreet voorbeeld ("bijv. Interventieteam naar bar beneden").
