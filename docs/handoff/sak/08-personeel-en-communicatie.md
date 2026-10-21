# 08 · Personeelsaccount en communicatie meldkamer ↔ personeel

Prototype: `prototype/SAK Mobiel.dc.html` (personeel) en `prototype/SAK Meldkamer.dc.html` (centrale). Schermafbeeldingen: `screens/mobiel-06…09`. De twee prototypes delen dezelfde data via `sak-store.js`. Open ze naast elkaar om de wisselwerking te zien.

## Wie
Personeelsaccount voor: **Beveiliger, Portier, EHBO'er, Interventie, Teamleider**. Een teamleider ziet extra het blok "Mijn team" (zie onder).

## Inloggen en dienst
1. Personeel heeft een **eigen account** in de suite (e-mail, wachtwoord, tweestaps; zie `../suite/00-suite-start.md`). Dat gebeurt één keer per toestel. Na het inloggen gaat SAK Mobiel direct open, zonder programmakeuze.
2. Bij elke dienst verschijnt het scherm **Dienst starten**: naam (26/700), rol · project (14 `#8a949e`), een tabel met Post en Teamleider (rand `#232a31`, regels 12 px padding), daarna "Kies een pincode van 4 cijfers voor deze dienst", vier vakjes van 18 × 18 (rand 2 px `#3a434c`; ingevuld vlak en rand `#f2b33d`), een toetsenblok en de knop **Start dienst** (60 hoog, amber, grijs `#5b646d` tot er 4 cijfers zijn). Daaronder in 13 px `#6b757f`: "De pincode geldt alleen voor deze dienst. Na 2 minuten zonder gebruik vergrendelt de app."
3. **Toetsenblok:** grid van 3 kolommen, gap 8. Knoppen min-hoogte 64, bg `#12161a`, rand 1 px `#2c343c`, cijfers JetBrains Mono 700 26 px. Onderste rij: `close` (wissen), `0`, `backspace`, als Material Symbols.
4. **Vergrendeld:** na 2 minuten inactiviteit of via het slotje rechtsboven in de kop. Hetzelfde scherm met "VERGRENDELD", "Voer je pincode in" en geen knop; de app ontgrendelt bij 4 juiste cijfers. Fout: "Onjuiste pincode. Nog N pogingen." in `#ff5f57`. Na 5 fouten: "5 keer onjuist. Log opnieuw in met je account." en het account moet opnieuw inloggen. Onderaan: "Pincode vergeten? Log opnieuw in met je account."
5. Komt er een opdracht binnen terwijl de app vergrendeld is, dan toont het vergrendelscherm een geel blok (rand 2 px `#f2d64b`, bg `rgba(242,214,75,.08)`): "1 nieuwe opdracht · ontgrendel om te bevestigen". De inhoud van de opdracht is pas na ontgrendelen te zien. De push-melding op het toestel bevat geen persoonsgegevens, alleen "Nieuwe opdracht · M-1045".
6. Uitklokken beëindigt de dienst en wist de pincode.

## Wat personeel ziet
- Eigen opdrachten, eigen post, alle actieve BOLO's, onveilige situaties en lopende meldingen van het eigen project.
- **Kaart:** de plattegrond met alle posten en wie er staat. Daarmee ziet het personeel het eigen team. Andere projecten zien ze niet.
- **Deur (register):** alleen het oordeel (Toegang / Let op / Geen toegang), de reden met einddatum, **foto en signalement**. Geen personalia: geen geboortedatum, adres, telefoon of legitimatie. Onder de zoekhint staat in 12 px `#6b757f`: "Je ziet toegang, foto en signalement. Personalia staan alleen bij de meldkamer." Het signalement staat in een vak (rand `#2c343c`, bg `#0a0c0e`) met het label "SIGNALEMENT".
- De API moet dit afdwingen. Het verbergen in de interface is niet genoeg: het endpoint voor de mobiele rol geeft personalia niet terug.

## Communicatie: de portofoon blijft het hoofdkanaal, de app legt vast
De meldkamer geeft een opdracht **mondeling via de portofoon** en zet hem tegelijk in SAK. De app is het schriftelijke bewijs: wie kreeg wat, wanneer, en wanneer bevestigd.

### Statussen van een opdracht
`Uitgezet` → **`Ontvangen`** → `Onderweg` → `Ter plaatse` → `Afgerond`

| Status | Kleur | Gezet door |
|---|---|---|
| Uitgezet | `#f2d64b` | meldkamer (knop Uitzetten) |
| Ontvangen | `#f2b33d` | personeel (knop Ontvangen), teamleider ("Bevestigd via portofoon" of "Overnemen"), of meldkamer (statusknop, als het via de portofoon is bevestigd) |
| Onderweg | `#5cc8ff` | personeel |
| Ter plaatse | `#c792ea` | personeel |
| Afgerond | `#4fd18b` | personeel of meldkamer |

Elke statuswijziging krijgt een tijd (`times[status]`), een regel in de terugkoppeling ("Status → …") en een regel in het logboek van de melding of het incident.

### Personeel: scherm Nieuwe opdracht
Een opdracht met de status Uitgezet neemt het hele scherm over (boven alles, behalve het vergrendelscherm).
- **Band bovenaan:** padding 14 16, bg `#f2d64b` (na 3 minuten `#ff5f57`), tekst `#0a0c0e`. Icoon `campaign` 26, "NIEUWE OPDRACHT" in Barlow Condensed 700 20 met .1em, rechts de klok in JetBrains Mono 700 18. Die telt af van 3:00 en telt daarna op als `+0:24`.
- **Body:** padding 18 16, gap 12. Mono 12 `#8a949e`: "M-1045 · van Meldkamer · 18:09". Titel 26/700. Omschrijving 16 `#c3cad1`. Plek met icoon `location_on` in amber. Medisch vak indien nodig. Portofoonregel (icoon `settings_input_antenna`, 14 `#8a949e`): "Ook via de portofoon doorgegeven. Druk op Ontvangen, dan staat vast dat je hem hebt."
- **Na 3 minuten** komt er een vak bij (rand 2 px `#ff5f57`): "Niet binnen 3 minuten bevestigd. De opdracht is doorgezet naar teamleider {naam}. Bevestig alsnog, dan weet de meldkamer dat je hem hebt."
- **Voet:** knop **ONTVANGEN**, volle breedte, 72 hoog, amber, Barlow Condensed 700 24, .12em. Zijn er meer opdrachten: "Daarna nog N nieuwe opdracht(en)".
- Het scherm is niet weg te klikken zonder Ontvangen. Bij meerdere opdrachten komt eerst de oudste.
- Het toestel trilt en speelt een eigen geluid, ook als het op stil staat (kritieke melding, iOS-recht "Critical Alerts" aanvragen).

### Meldkamer: wachten op ontvangst
- Onder de knop Uitzetten (12 px `#8a949e`, icoon `settings_input_antenna`): "Geef de opdracht ook door via de portofoon. De app legt hem vast en vraagt om ontvangst. Zonder ontvangst binnen 3 minuten gaat hij naar de teamleider."
- Bij elke opdracht met de status Uitgezet een regel in JetBrains Mono 600 12, met icoon `hourglass_top`, padding 5 8, rand 1 px:
  - binnen 3 minuten: "Wacht op ontvangst · nog 2:41", in `#f2d64b` met rand `#2c343c`
  - daarna: "Niet bevestigd na 3:24 · doorgezet naar teamleider Sanne de Vries", in `#ff5f57` met rand `#ff5f57`
- Bevestigt iemand via de portofoon? Dan klikt de operator op de statusknop Ontvangen. Het log noteert dan de operator als bevestiger.
- Ontvangen komt in de tijdlijn van de melding met het icoon `mark_chat_read`.

### Doorzetten naar de teamleider (na 180 seconden)
- De server bepaalt de termijn, niet het toestel. Na 180 s zonder Ontvangen krijgt de teamleider van het project een push en een kaart bovenaan "Mijn team".
- **Kaart bij de teamleider:** rand 2 px `#ff5f57`, bg `rgba(255,95,87,.08)`, padding 12. Kop "NIET BEVESTIGD" plus de verstreken tijd (mono 700 14). Daaronder titel 17/700 en "→ {naam} · {nummer}". Twee knoppen van 52 hoog:
  - **Bevestigd via portofoon:** rand amber, transparant. Zet de opdracht op Ontvangen met de teamleider als bevestiger, en de tekst "Ontvangst bevestigd via portofoon door teamleider".
  - **Overnemen:** vlak amber. Voegt de teamleider toe aan de opdracht en zet hem op Ontvangen, met de tekst "Overgenomen door teamleider".
- **Teamlijst** eronder: per teamlid een stip in statuskleur, naam 15/600, post · huidige opdracht (12 px, ellipsis) en rechts de status. "Vrij" is groen; "Niet bevestigd" is rood.
- Bevestigt niemand, ook de teamleider niet? Dan blijft de opdracht rood bij de meldkamer. Er is geen verdere automatische stap.
- De termijn van 180 s is per opdrachtgever instelbaar in Beheer (later). Voor P1 kan hij korter; stel dat per opdrachtgever in.

## Geen verbinding: alleen een wachtrij
- **Kop:** rechts een stip met "ONLINE" in `#4fd18b`, of "OFFLINE" in `#f2b33d` (JetBrains Mono 600 11).
- **Offline:** een balk onder de kop (bg `rgba(242,179,61,.1)`, onderrand amber, icoon `cloud_off`): "Geen verbinding. N wijzigingen in de wachtrij. Ze gaan automatisch mee zodra er weer verbinding is."
- Alles wat personeel doet (melden, Ontvangen, status, terugkoppeling) gaat in een lokale wachtrij en is **direct zichtbaar** in de eigen app (optimistisch). Zodra er weer verbinding is, gaat de wachtrij in volgorde naar de server, met de oorspronkelijke tijdstempels.
- De bevestiging bij een melding wordt: "Staat in de wachtrij. Wordt verstuurd zodra er weer verbinding is."
- Geen sms als terugvaloptie.
- De meldkamer ziet een toestel zonder hartslag langer dan 60 s als "Geen verbinding" bij die persoon.

## Prototype-hulpmiddelen
- De keuze van de gebruiker in de kop (naam · rol) is alleen voor het prototype. In productie volgt die uit het account.
- Tweaks: `startLocked` (begin op Dienst starten) en `offline` (simuleer geen verbinding).
