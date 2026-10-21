# Programmawisselaar: Phylax · SAK · Ophanim

Phylax, SAK en Ophanim zijn drie programma's met één login en één bron van waarheid (SSOT). Elk programma houdt zijn eigen uiterlijk. De wisselaar is in alle drie hetzelfde onderdeel, opgemaakt in de stijl van het programma waarin hij staat.

## Plaats
- **Phylax:** het logo linksboven in het zijmenu (vierkantje + "Phylax" + ▾) is de knop.
- **SAK Meldkamer:** het woordmerk "SAK MELDKAMER" linksboven in de kop, met `expand_more`-icoon.
- **SAK Beheer:** het woordmerk bovenaan het zijmenu, icoon rechts uitgelijnd.
- **SAK Kaart:** nog niet in het prototype; bouw hem wel. Zelfde plek: het woordmerk links in de bovenbalk. Alleen tonen in dispatch-modus (OPS-1), niet in veldmodus.
- **SAK Mobiel en Publiek melden:** geen wisselaar. Veldpersoneel en publiek wisselen niet van programma.
- **Ophanim:** zelfde patroon in zijn eigen kop of zijmenu.

## Inhoud van het menu
Kop "PROGRAMMA", dan drie regels, dan een voetregel.

| Programma | Merkteken (16 × 16) | Omschrijving | Link |
|---|---|---|---|
| Phylax | vierkant, rand 2 px `#35d0c4`, radius 5, leeg | Onderzoek, casussen en rapportage | Phylax-startpagina |
| SAK | vierkant, rand + vulling `#f2b33d`, radius 3 | Meldkamer, kaart en beheer op locatie | SAK Meldkamer |
| Ophanim | cirkel, rand 2 px `#8a949e`, leeg | (nog in te vullen) | Ophanim-startpagina |

- Het huidige programma heeft een achtergrond en een markering rechts (Phylax: `✓` teal mono; SAK: `HUIDIG` amber, Barlow Condensed). Niet klikbaar.
- Een programma waartoe de gebruiker geen toegang heeft, staat er niet in. Een programma dat nog niet live is, staat op 50 % opacity met markering "later" en is niet klikbaar.
- Onder de voetregel de link "Alle programma's" (Phylax: teal, hover `#7fe6dd`; SAK: amber, hover `#ffd27a`). Die gaat naar de programmakeuze van Suite Start (`00-suite-start.md`).
- Voetregel: "Zelfde login. De gekozen opdrachtgever gaat mee naar SAK." (in Phylax) of "Zelfde login. Het gekozen project gaat mee naar Phylax als opdrachtgever." (in SAK).

## Opmaak per programma

**In Phylax:** paneel 290 breed, 8 px onder de knop, links uitgelijnd. bg `#151922`, rand 1 px `rgba(255,255,255,.12)`, radius 10, padding 6, gap 2, schaduw `0 16px 40px rgba(0,0,0,.5)`. Kop JetBrains Mono 10 px `#8b909b` letter-spacing .06em. Regel: grid `18px 1fr auto`, gap 10, padding 8 10, radius 6; naam Space Grotesk 13/600, omschrijving 11 px `#8b909b`; huidig bg `#1f2531`; hover bg `#1f2531`. Voetregel 11 px muted, bovenrand `rgba(255,255,255,.06)`. Knop hover bg `#151922`, radius 7.

**In SAK:** paneel 290 breed, 10 px onder de knop. bg `#12161a`, rand 1 px `#2c343c`, **geen radius**, padding 6, zelfde schaduw. Kop Barlow Condensed 600 11 px hoofdletters, letter-spacing .16em, `#8a949e`. Regel: zelfde grid, padding 9 10; naam Barlow 14/600, omschrijving 12 px `#8a949e`; huidig en hover bg `#1a1f24`. Voetregel 12 px, bovenrand `#232a31`. Knop hover bg `#12161a`.

## Gedrag
- Klik op de knop opent of sluit het menu. Esc of klik erbuiten sluit het.
- Keuze opent het andere programma in hetzelfde tabblad (bij aparte domeinen: gewone navigatie, de SSO-sessie blijft geldig).
- Context gaat mee via de URL: `?opdrachtgever=<ssot-id>` of `?project=<ssot-id>`. Het doelprogramma opent die opdrachtgever of dat project als het bestaat, anders zijn startscherm.
- Koppeling: een SAK-opdrachtgever (bv. `K-ODY` S.V. Odysseus) is in Phylax dezelfde opdrachtgever (zie de bron-tag SAK/Ophanim/Phylax in de opdrachtgever-lijst van Phylax). Beide gebruiken het SSOT-id.
- Toetsenbord: knop is focusbaar, Enter/Spatie opent, pijltjes bewegen, Enter kiest.

## Bouw
Maak één gedeeld component (`<SuiteSwitcher current="phylax" theme="phylax" />`) met twee thema's. De lijst programma's en de rechten komen uit de SSOT/identity-service, niet hardcoded.
