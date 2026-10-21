# 00 · Suite Start: inloggen en programmakeuze

Prototype: `prototype/Suite Start.dc.html`. Pixelspec: `specs/Suite Start.md` (deze map). Schermafbeeldingen: `screens/suite-*.png`.

Dit is de voordeur van alle programma's. Wie niet is ingelogd, komt hier altijd uit. Na het inloggen kies je een programma. De programmawisselaar in elk programma heeft onderaan de link "Alle programma's", die terugvoert naar dit scherm.

## Uiterlijk
Neutraal, zodat geen enkel programma voorgaat. Ondergrond `#08090b`. Space Grotesk, en JetBrains Mono voor labels. De primaire knop is lichtgrijs `#e8eaf0` met tekst `#08090b` en hover `#ffffff`, niet teal en niet amber. Elke programmakaart toont het merkteken en de typografie van het eigen programma.

- **Kop:** 56 hoog, padding 0 28, onderrand `rgba(255,255,255,.06)`. Links drie merktekens van 14 × 14 met gap 6 (Phylax-vierkant met teal rand en radius 4, SAK-vlak amber met radius 2, Ophanim-cirkel met grijze rand), daarnaast "Phylax · SAK · Ophanim" in 14/600. Rechts het gebruikersmenu als je bent ingelogd.
- **Authenticatieschermen:** één kolom, max 380 breed, horizontaal en verticaal gecentreerd, gap 24. Titel 22/600 met letter-spacing -.01em, subtekst 13 px `#8b909b`. Velden 40 hoog, radius 8, rand `.14`, bg `#0b0d12`, 14 px. Labels 12 px `#b6bcc6`.
- **Programmakeuze:** max 1120 breed, padding 56 28, gap 36. Eyebrow "KIES EEN PROGRAMMA" (mono 11), titel 28/600. Rechts de keuze voor de opdrachtgever (min 260 breed). Kaarten in een grid `repeat(auto-fit, minmax(300px, 1fr))`, gap 16, min-hoogte 300, padding 24, radius 12.
  - **Phylax-kaart:** bg `#0e1117`, rand `.08`, bij hover teal rand. Twee regels met tellers (Werkbak, Lopende onderzoeken), en "Open Phylax →" in teal 13/600. De hele kaart is één link.
  - **SAK-kaart:** bg `#0d1013`, woordmerk SAK (mono 700 20 amber) met "SECURITY AWARENESS KIT" ernaast. Vier tegels in 2 kolommen (Meldkamer, Kaart, Beheer, Mobiel), elk met een rand `#2c343c` en een amber rand bij hover, zonder radius (SAK-stijl).
  - **Ophanim-kaart:** gestippelde rand, opacity .6, "later", niet klikbaar.
  - Onder de kaarten, 12 px `#5c616b`: "Je ziet alleen de programma's waar je toegang toe hebt. De gekozen opdrachtgever gaat mee naar het programma dat je opent."

## Schermen en flow
1. **Inloggen:** e-mailadres, wachtwoord, "Wachtwoord vergeten?" rechts naast het label, knop Inloggen, scheiding "OF", knop "Inloggen met organisatieaccount" (SSO; alleen tonen als SSO is ingesteld), voetregel "Geen account? Je beheerder maakt er een voor je aan." Enter in het wachtwoordveld werkt als Inloggen.
   - Leeg of ongeldig: foutvak (rand `rgba(240,112,106,.4)`, tekst `#f0706a`) met "Vul je e-mailadres en wachtwoord in."
   - Verkeerde gegevens (in productie): "E-mailadres of wachtwoord klopt niet." Zeg nooit welk van de twee fout is.
   - Na 5 mislukte pogingen: 15 minuten geblokkeerd, met een melding van wanneer het weer kan.
2. **Tweestapsverificatie:** een veld voor 6 cijfers (56 hoog, mono 26, letter-spacing .4em, gecentreerd), knop Bevestigen, "← Ander account" en het e-mailadres in mono. Alleen cijfers zijn toegestaan, maximaal 6. Bij een fout: "De code bestaat uit 6 cijfers." of (in productie) "Deze code klopt niet."
3. **Wachtwoord vergeten:** e-mailveld en "Stuur herstellink". Daarna een groen vak met "Als dit adres bij ons bekend is, staat de link nu in je inbox." Zeg nooit of het adres bestaat.
4. **Programmakeuze:** zie Uiterlijk. Een link naar een programma krijgt `?opdrachtgever=<id>` mee als er een opdrachtgever is gekozen.
5. **Gebruikersmenu:** knop met initialen (26 × 26, radius 6, bg `#1f2430`), naam en ▾. Het paneel is 260 breed en toont naam, e-mail (mono), "Account en beveiliging" en "Uitloggen".
6. **Account en beveiliging:** rijen (180 | 1fr | actie) met naam, e-mail, wachtwoord, tweestapsverificatie en toegang per programma met rol. Daaronder actieve sessies met apparaat, plaats en tijd. De huidige sessie staat in het groen; andere sessies hebben de actie "Afmelden".

## Regels
- Eén account voor alle programma's. Rollen staan per programma (bv. Phylax: onderzoeker, SAK: meldkamer).
- Een programma zonder rol verschijnt niet op de programmakeuze en niet in de wisselaar.
- Heeft iemand maar één programma? Ga dan na het inloggen meteen door naar dat programma.
- Sessie: na 12 uur opnieuw inloggen, na 30 minuten inactiviteit vergrendelen (meldkamer: instelbaar, omdat een meldkamer de hele dienst open staat).
- Personeel van SAK Mobiel logt in met hetzelfde account. Voor hen is de programmakeuze overbodig: zij gaan direct naar SAK Mobiel.
