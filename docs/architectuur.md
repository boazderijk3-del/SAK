# Architectuur: waarom het zo wordt gebouwd

Dit document legt de ontwerpkeuzes vast en de reden erachter. Een keuze zonder
reden is over een half jaar niet te herzien, want dan weet niemand meer wat het
probleem was.

---

## 1. Wat dit product is

**Gereedschap voor beveiligingsbedrijven en particulier onderzoekers, dat één
keten ondersteunt:**

```
  signaal  ──►  duiding  ──►  actie  ──►  incident  ──►  onderzoek
  melding       meldkamer     opdracht    INC-nummer     Phylax
  (telefoon,    neemt aan     naar een    registratie    bewijs, herkomst,
   publiek,     en beoordeelt medewerker  + maatregel    review, rapport
   waarneming)                of team
```

Links in die keten staat snelheid: een melding moet in seconden bij de juiste
persoon liggen. Rechts staat zorgvuldigheid: een gegeven in een rapport moet
maanden later nog aantoonbaar ergens vandaan komen.

**SAK** is de linkerhelft: meldingen aannemen, opdrachten uitzetten, voortgang
volgen, en weten waar je mensen en spullen zijn.
**Phylax** is de rechterhelft: uit een incident een onderzoek maken, materiaal
inlezen, gegevens herkennen, laten toetsen, en er een rapport van maken dat
bevroren wordt met een hash.
**Ophanim** is de derde — ontwerpen volgen nog; er wordt niets geraden.

### Wat binnen SAK waar hoort
- **Meldkamer** — de centralist. Alles komt hier binnen en wordt hier
  aangenomen. Meldingen, incidenten, BOLO, sancties, personenregister.
- **Beheer** — de parameters. Rollen, personeel, en inventaris: portofoons en
  ander materiaal uitgeven en innemen, zodat je op elk moment weet waar een
  stuk gereedschap is en bij wie.
- **Kaart** — dispatch: teams, taken, posten, zones, plattegronden.
- **Mobiel** — de medewerker in het veld: dienst, opdracht, melden, deurcontrole.
- **Publiek** — de meldpagina in de huisstijl van de klant, zonder login.

### Drie formaten, niet drie producten
SAK draait op telefoon, tablet en computer. De meldkamer bestaat in twee
uitvoeringen: de volledige voor achter een bureau, en een **sobere voor op de
telefoon**, zodat een centralist ook onderweg kan aannemen.

Dat is één gegevensbron met meerdere presentaties. Daarom geldt vanaf de eerste
regel code: **ophalen en tonen zijn gescheiden.** De gegevenslaag (hooks,
queries, websocket-abonnementen) weet niet hoe iets eruitziet; de
schermcomponenten halen niets zelf op. Anders krijg je drie keer dezelfde logica
die uit elkaar loopt — en dan is "sober" een tweede waarheid in plaats van een
tweede weergave.

---

## 2. De twee helften schrijven verschillend, en dat is opzet

|  | SAK | Phylax |
|---|---|---|
| tempo | seconden | dagen |
| schrijven | veel kleine, tegelijk | weinig, groot |
| waarheid | *wat gebeurt er nu* | *wat is vastgesteld, en waaruit* |
| corrigeren | status overschrijven | nooit overschrijven — nieuwe versie |
| ergste fout | centralist ziet een eenheid niet | herkomst klopt niet → bewijs waardeloos |

Bouw je ze hetzelfde, dan is er één verkeerd. Dus: **één database, twee
schrijfpatronen.**

- **SAK** houdt de huidige stand in gewone tabellen, met **naast elke melding,
  taak en incident een append-only logboek** (`log[]` staat al in het
  datamodel). De stand is daarmee een afleiding die je kunt herbouwen; het
  logboek is wat er werkelijk is gebeurd, en wie het deed.
- **Phylax** is van nature append-only. Een `Gegeven` is uniek op de
  genormaliseerde waarde en krijgt er `Vindplaats`-rijen bij. Een nieuwe
  vindplaats maakt geen nieuw gegeven. Een rapport wordt bevroren met een hash;
  wijzigen maakt versie 2.

### De brug ertussen is de belangrijkste beslissing in het hele systeem

Een melding die een incident wordt, en een incident dat een onderzoek wordt,
**draagt id's mee, nooit kopieën.**

Waarom dit zo zwaar weegt: kopieer je de tekst van een melding in een incident,
en die van het incident in een onderzoek, dan heb je drie versies van hetzelfde
feit die stil uit elkaar lopen. In een rapport dat een rechter of een
opdrachtgever leest, is dat fataal — je kunt niet meer laten zien waar iets
vandaan komt. Met id's is er één feit, en de keten is navolgbaar:

```
  Melding M-0042 ──id──► Incident INC-2026-0007 ──id──► Onderzoek ONZ-014
       │                        │                             │
    log[]                    log[]                        Vindplaats →  Bron (hash)
```

---

## 3. Opslag: vier soorten, en ze niet door elkaar halen

De klassieke fout is "opslag" als één ding behandelen. Het zijn er vier, met
verschillende eisen:

| wat | waar | waarom |
|---|---|---|
| **1. Operationele gegevens** — meldingen, taken, personeel, inventaris, sancties | **Postgres** | kleine rijen, veel schrijvers tegelijk, transacties nodig (een item kan niet aan twee mensen tegelijk uitgegeven zijn) |
| **2. Bewijs** — Phylax-bronnen: exports, pdf's, foto's bij een onderzoek | **objectopslag met object lock (WORM)** | onveranderlijk, gehasht bij binnenkomst. Nooit in Postgres: een database is geen bewijskluis en een dump van 40 GB is onwerkbaar |
| **3. Operationele media** — foto bij een melding, BOLO-foto, plattegronden | **gewone objectopslag** | dit is nog geen bewijs. WORM voor elke wazige foto is duur en traag |
| **4. Levende stand** — wie is online, waar staat een eenheid, ongelezen tellers | **niet in Postgres** (Redis of geheugen) | verandert elke paar seconden. Vijftig eenheden die hun positie schrijven is een schrijfstroom die je hoofddatabase niet hoort te raken |

### De promotie van 3 naar 2 is waar bewijswaarde ontstaat
Wordt een melding een incident en dat incident een onderzoek, dan wordt de foto
op dát moment **gekopieerd naar de WORM-bak, met hash en tijdstempel**. Niet bij
het uploaden (dan betaal je bewijsprijs voor alles), niet nooit (dan is er geen
bewijs). Dat moment wordt gelogd.

**Daarom staat opslag vanaf dag één achter een interface.** Welke aanbieder het
wordt is nog niet besloten (`beslissingen.md` #4), en die keuze mag geen
verbouwing worden.

---

## 4. De snelle weg: melding → verwerking → opdracht

Dit is de kern van SAK en hier zit de tijdsdruk.

### De telefoon maakt het id, niet de server
Een melding krijgt zijn id **op het toestel** (UUID v7 — tijdgeordend). Drie
dingen worden daardoor gratis:

1. De melder ziet zijn melding meteen staan, zonder op het netwerk te wachten.
2. Opnieuw versturen is veilig: hetzelfde id is dezelfde rij, geen dubbele
   melding. Dat maakt de offline-wachtrij uit het pakket werkbaar in plaats van
   een bron van duplicaten.
3. Komt een melding van een kelder met slecht bereik tien minuten later binnen,
   dan staat hij alsnog op de juiste plek in de tijd.

Zonder dit is "offline" een pleister. Met dit is het de normale werking.

### Uitzetten is slepen, en de klok is onderdeel van het product
Een taak gaat door **Uitgezet → Ontvangen → Onderweg → Ter plaatse → Afgerond**,
met een tijdstempel per stap. De stap `Ontvangen` is de belangrijkste: hij
bewijst dat er een mens heeft gekeken.

Krijgt de medewerker de opdracht niet bevestigd binnen **180 seconden**, dan
gaat hij naar de teamleider. **Die controle hoort in de backend, niet in het
scherm.** Sluit de centralist zijn tabblad, dan moet de escalatie nog steeds
gebeuren. Een beloofde escalatie die van een open browser afhangt, is geen
escalatie.

### Realtime: begin klein, maar met een stekker
Een melding die bij proces A binnenkomt moet op een websocket bij proces B
aankomen zodra er meer dan één API-proces draait.

**Keuze: Postgres `LISTEN/NOTIFY`, achter een interface.** Geen extra dienst,
geen extra ding dat stuk kan, en ruim genoeg voor tientallen tot enkele
honderden gelijktijdige eenheden. Wordt het meer, dan is het één adapter naar
Redis of NATS. Nu al een broker neerzetten is een keuze maken op een aanname
over belasting die er nog niet is.

---

## 5. Meerdere schermen op meerdere monitoren

Voor een meldkamer is dit echt: meldingenlijst op het ene scherm, kaart op het
tweede, incidentdetail op het derde. Deze eis stuurt de frontend meer dan wat
ook, en is **achteraf heel duur** om in te bouwen.

Drie regels die eruit volgen:

1. **Elk scherm heeft een URL.** Een tweede venster is letterlijk
   `window.open('/meldkamer/meldingen')`. Daarmee is routing geen luxe maar de
   dragende constructie. *(Dit is precies het tegenovergestelde van de oude
   Phylax, die nul routes had: niets was te delen, te bookmarken of te openen in
   een tweede venster.)*
2. **De stand leeft buiten het venster.** De server is de waarheid; elk venster
   luistert naar dezelfde stroom. Wat je geselecteerd hebt is wél van het
   venster — dat is het enige dat lokaal blijft.
3. **Vensters weten van elkaar waar het telt.** `BroadcastChannel` meldt "ik heb
   M-0042 open", en serverkant staat `in_behandeling {door, tijd}` al in het
   datamodel. Twee centralisten in hetzelfde record zonder het te weten is een
   operationele fout, geen schoonheidsfoutje.

---

## 6. Opschalen

De eerlijke versie: de schaal-as hier is **niet** verzoeken per seconde. Het is:

- het aantal **opdrachtgevers** (dit is de belangrijkste);
- gelijktijdige eenheden per evenement (een festival is honderden);
- opgeslagen media over de jaren.

**Keuze: één Postgres, `opdrachtgever_id` op elke rij, afgedwongen in de
API-laag — niet optioneel en niet per query.**

Waarom niet een database per klant, wat veiliger klinkt: omdat het datamodel van
Phylax `Ding` expliciet omschrijft als *"gedeelde entiteit, over opdrachtgevers
heen"*. Een persoon die bij drie klanten opduikt, is één persoon. Met gescheiden
databases kan dat niet, en juist dat is de reden dat dit product bestaat.

De uitwegen als het groeit, in de volgorde waarin je ze nodig hebt:
1. leesreplica voor kaart- en rapportagequery's;
2. levende stand naar Redis;
3. `melding` en de logboeken partitioneren per maand — dat zijn de tabellen die
   groeien;
4. pas daarna de worker eruit trekken.

Niets daarvan hoeft nu. Het hoort hier zodat het later geen verbouwing is.

---

## 7. Stabiliteit: wat deze soort systemen echt sloopt

- **Een rapportagequery die de tabel vastzet waar de meldkamer in schrijft.**
  Scheiden: rapportage leest van een replica of met een harde `statement_timeout`.
- **Een telefoon die na drie uur offline terugkomt met veertig meldingen.**
  Opgelost door het id van de client: hetzelfde id is dezelfde rij.
- **Een websocket die stil doodgaat en een bevroren scherm achterlaat.**

Die laatste is de gevaarlijkste van de drie, en de regel ertegen komt
onverkort uit het vorige project:

> **Een storing mag er nooit uitzien als een leeg resultaat.**

Een meldkamer die een lege lijst toont omdat de verbinding weg is, is erger dan
een meldkamer die niets toont. Dus: hartslag op de verbinding, en een zichtbare
stand *"verbinding kwijt — dit is geen lege lijst"*. Elk scherm dat gegevens
toont, moet drie standen kunnen: gevuld, leeg (en wat leeg betekent), en stuk.

---

## 8. Wat hier bewust anders gaat dan in de oude Phylax

| oud | nieuw | waarom |
|---|---|---|
| geen routes, navigatie was `useState` | elk scherm een URL | anders geen tweede monitor, geen deelbare link |
| browser praat rechtstreeks met de database | FastAPI ertussen | rollen, auditlog en de 180-seconden-escalatie horen serverkant |
| 5.599 inline stijlen, 27 lettergroottes | tokens uit `design-tokens.json`, gegenereerd | de spec en de code kunnen niet uit elkaar lopen |
| storingen zagen eruit als lege lijsten | drie standen op elk scherm | zie hierboven; dit is de duurste les uit dat project |
