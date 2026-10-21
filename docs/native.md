# Native app: ja, en voor SAK Mobiel is het geen keuze

Infrabeslissing #6 uit `handoff/suite/02-repo-en-infra.md`. Het pakket noemt al
de drie redenen: *"push-meldingen op iOS, offline kaart, achtergrond-GPS"*.

---

## Waarom een PWA hier niet voldoet

Dit is geen smaak. De eigen spec van SAK zet drie eisen neer die een webapp op
iOS niet kan waarmaken.

### 1. Push op een vergrendeld toestel draagt de opdrachtketen
`08-personeel-en-communicatie.md` zegt letterlijk: de push bevat geen
persoonsgegevens, alleen *"Nieuwe opdracht · M-1045"*, en na 180 seconden zonder
`Ontvangen` krijgt de teamleider een push.

De hele escalatie hangt daarop. Komt die melding niet aan, dan gaat een opdracht
stil verloren — en dat is precies de fout die deze klok moest voorkomen.

Op iOS kan een webapp wél pushen (sinds 16.4), maar **alleen als de gebruiker
hem eerst aan het beginscherm heeft toegevoegd**, en zonder de dingen die hier
juist nodig zijn: geen eigen geluid dat door de stille stand heen komt, geen
*critical alert*, minder grip op de aflevering.

**Een beveiliger in een volle zaal heeft zijn telefoon op stil.** Een PWA kan
niet garanderen dat die opdracht hem bereikt. Een native app wel.

### 2. Achtergrond-GPS
De Kaart laat zien waar je eenheden staan. Zit de telefoon in een broekzak met
het scherm uit, dan stuurt een webapp **niets** meer. Dan klopt de kaart niet,
en een kaart die er goed uitziet maar achterloopt is gevaarlijker dan geen
kaart.

### 3. Opslag die blijft staan
De offline-wachtrij uit het pakket (*"N wijzigingen in de wachtrij"*) moet een
avond zonder bereik overleven. Browseropslag op iOS kan door het systeem worden
opgeruimd. Een gewiste wachtrij is **verloren meldingen** — niet een leeg
scherm, maar werk dat nooit is aangekomen.

---

## Hoe dat kan zonder drie keer hetzelfde te bouwen

**Eén React-codebase, drie schillen.**

```
            ┌──────────── gedeeld ────────────┐
            │  api-client (uit OpenAPI)       │
            │  domeintypes + validatie        │
            │  gegevenslaag (hooks, sockets)  │
            │  tokens uit design-tokens.json  │
            └─────────────────────────────────┘
                 │             │            │
         ┌───────┘             │            └────────┐
    Capacitor              Tauri             gewone browser
    iOS + Android       meldkamer-pc       publieke meldpagina
    push, GPS,          meerdere monitoren  geen installatie,
    echte opslag        OS-meldingen        werkt vanaf een QR
```

**Capacitor voor mobiel.** De schermen uit `SAK Mobiel` worden één keer in React
gebouwd en draaien in een native schil die wél echte push, achtergrondlocatie en
echte schijfopslag heeft. Je komt in de App Store en Play Store.

Waarom niet meteen React Native: dan bouw je de mobiele schermen in een andere
techniek dan de rest, en de winst is *gevoel* — niet de drie dingen hierboven,
want die lost Capacitor ook op. Blijkt het gevoel later toch te knellen, dan is
het herschrijven van één app, niet van het systeem.

**Tauri voor de meldkamer-pc.** Jij wil meerdere schermen op meerdere monitoren.
In een browser kan dat (`window.open`), maar een desktop-schil geeft wat een
24-uurs meldkamerpositie echt nodig heeft: vensters die hun plek per monitor
onthouden, OS-meldingen met geluid, automatisch starten bij het opstarten, en
geen *"wie heeft dat tabblad gesloten"*. Tauri gebruikt de webview van het
besturingssysteem, dus het is dezelfde React-code en een klein installatiebestand.

**De publieke meldpagina blijft gewoon web.** Die moet vanaf een QR-code open
kunnen zonder dat iemand iets installeert. Een app zou daar de drempel zijn die
je juist wil weghalen.

---

## Wat dit kost — eerlijk

Native zijn is werk dat je erbij neemt:

- **Apple Developer Program**, jaarlijks, plus beoordeling bij elke uitgave.
- **Achtergrondlocatie wordt streng bekeken** door Apple. Een dispatchsysteem
  voor beveiligers heeft een goed verhaal, maar je moet het wél voeren.
- **Critical alerts** (geluid door de stille stand heen) vragen een aparte
  toestemming van Apple die je moet aanvragen en niet zeker krijgt. Lukt dat
  niet, dan is *time-sensitive* het alternatief — dat komt door een Focus-stand
  heen, maar niet door de stille schakelaar.
- **Versies in omloop.** Een native app betekent dat er mensen op een oude
  versie zitten. De API moet daartegen kunnen: nooit een veld weghalen zonder
  overgangsperiode.
- **Ondertekenen en uitrollen**: certificaten, profielen, bouwstraat.
- **Uitgifte aan personeel**: eigen telefoons (dan via de stores) of
  bedrijfstelefoons (dan via MDM / Apple Business Manager). Dat bepaalt hoe je
  distribueert en is een vraag voor de opdrachtgever.

---

## Kan het zonder Apple-ontwikkelaarsaccount?

Op **iOS: niet werkbaar**, en de reden is uitgerekend de functie waarvoor we
native wilden.

| weg | kost | push? | praktisch |
|---|---|---|---|
| gratis Apple ID, zelf ondertekenen via Xcode | €0 | **nee** | profiel verloopt na **7 dagen**, dan stopt de app. Per toestel een Mac en een kabel |
| Developer Program | ~€99/jaar | ja | App Store, TestFlight (90 dagen per bouw), Ad Hoc (100 toestellen) |
| Enterprise Program | ~€299/jaar | ja | alleen voor **eigen personeel** van een groot bedrijf; Apple eist 100+ werknemers. Wij vallen er niet onder, en oneigenlijk gebruik kost je het certificaat |
| EU-webdistributie (DMA) | — | ja | klinkt als een uitweg maar is het niet: je moet al jaren lid zijn van het Developer Program én een app met zeer veel installaties hebben |

**Gratis ondertekenen kan dus wel, maar levert een app zonder push die na een
week stopt.** Dat is precies het tegenovergestelde van wat deze app moet doen.

### Android is een ander verhaal: gratis én mét push
Een Android-build kun je als APK rechtstreeks installeren — via een link, MDM
of een kabel. **Push werkt daarbij gewoon**, want Firebase Cloud Messaging
hangt niet aan distributie via de Play Store; een gratis Firebase-project is
genoeg. Een Play-ontwikkelaarsaccount (eenmalig, ~€25) heb je pas nodig als je
in de Play Store wil staan.

Dat is een echte asymmetrie, en hij valt goed uit voor dit product:
beveiligingsbedrijven werken vaak met goedkopere bedrijfstelefoons op Android.

### Desktop
Tauri op **Windows en Linux kost niets**. Voor macOS wil je ondertekenen en
notariseren, en dat loopt via hetzelfde betaalde Apple-account — anders krijgt
de gebruiker een waarschuwing van Gatekeeper en moet hij de app met
rechtermuisknop openen.

### Wat dit betekent voor de volgorde
1. **Android-schil eerst.** Gratis, push werkt, en je kunt de hele
   opdrachtketen inclusief de 180-secondenklok echt beproeven.
2. **iOS voorlopig als webapp op het beginscherm.** Push werkt daar beperkt
   (iOS 16.4+), zonder geluid door de stille stand. Goed genoeg om mee te
   werken, niet goed genoeg voor productie.
3. **Het Developer Program zodra er een betalende opdrachtgever is.** Dan is
   €99 per jaar geen afweging meer.

### En waarom die tussenstand niet gevaarlijk is
Omdat het ontwerp **push al niet volledig vertrouwt**. Blijft `Ontvangen` uit,
dan gaat de opdracht na 180 seconden naar de teamleider, met "Bevestigd via
portofoon" of "Overnemen" als uitweg. De portofoon is de achtervang.

Een zwakkere pushkanaal betekent dus **meer escalaties naar de teamleider**,
niet stil verloren opdrachten. Dat is precies het verschil tussen een systeem
dat netjes terugvalt en een systeem dat omvalt — en het is hier ingebouwd.

---

## De vorm: één webinterface, een schil eromheen

Dit is de werkwijze. Dezelfde React-build is tegelijk:

- **een website op een URL** — iedereen kan meekijken en meetesten zonder iets
  te installeren. Een link sturen is genoeg;
- **de inhoud van een Android-app** — dezelfde schermen, maar met echte push,
  achtergrondlocatie en echte opslag.

Er is dus geen "webversie" en "appversie" die uit elkaar lopen. Er is één
programma, en de schil voegt alleen toestelmogelijkheden toe.

### Twee manieren om de webinterface in de schil te zetten

| | hoe | bijwerken | offline |
|---|---|---|---|
| **meegebakken** | html/js/css zit ín de APK | nieuwe APK | **werkt** |
| op afstand | de schil laadt de live site | direct | **werkt niet** |

"Op afstand" klinkt aantrekkelijk tijdens het testen — je past de site aan en
iedereen heeft het meteen. Maar dan komt de hele interface van het netwerk, en
**een beveiliger zonder bereik ziet dan niets**. Dat sloopt juist de
eigenschap waar dit product op staat. Apple kijkt er bovendien kritisch naar
bij een app die niet meer is dan een venster op een website.

**Dus: meegebakken.** Tijdens het bouwen mag de schil naar een draaiende
ontwikkelserver wijzen; wat je uitgeeft bevat de interface zelf.

### De regel die hieruit volgt
**De webbouw moet op zichzelf volledig werken.** De native mogelijkheden zijn
een versterking, geen voorwaarde. Elk scherm doet het in een gewone browser,
met de web-variant eronder: `Notification`/Web Push, `navigator.geolocation`
(alleen op de voorgrond), IndexedDB.

En het scherm **zegt eerlijk wat het niet kan**. Draait de app in een browser,
dan staat er bij de kaart: *"je positie wordt alleen bijgewerkt zolang dit
scherm open staat"*. Een beperking die je niet ziet is erger dan een beperking
die er staat — dat is dezelfde regel als "een storing mag er nooit uitzien als
een leeg resultaat".

### Live gaan om te testen: wat daarvoor nodig is
1. **De webinterface op een URL.** Statische build, EU, gratis te hosten.
2. **De API ergens die lang openstaande verbindingen aankan.** Dit is de
   beperking die de keuze stuurt: wij gebruiken WebSockets, en die hebben een
   proces nodig dat blijft draaien. Functie-gebaseerde hosting (het
   "serverless" model) valt daarmee af. Het wordt een container of een kleine
   VPS in de EU.
3. **Een PWA-manifest en service worker.** Kost weinig zodra de webapp er is,
   en geeft op iOS "aan beginscherm toevoegen" met beperkte push. Genoeg om
   mee te testen.

Daarmee kun je live met testers **vóór** er één app-winkel aan te pas komt, en
komt het Apple-account er pas bij als iemand het echt wil afnemen.

---

## Wat we NU doen

**Ontwerpen voor native, eerst web opleveren.**

Vandaag kost dat bijna niets; achteraf is het een verbouwing. Concreet drie
regels die vanaf nu gelden:

1. **Elke toestelmogelijkheid achter een interface**: push, locatie, opslag,
   camera. De webbouw gebruikt de browser-API, de native bouw de plugin. Het
   scherm merkt het verschil niet.
2. **De offline-wachtrij leunt niet op browseropslag-gedrag.** Het id komt van
   de client (UUID v7, zie `architectuur.md`), opnieuw versturen is veilig, en
   de wachtrij is een gewone tabel in lokale opslag die we zelf beheren.
3. **Geen aanname dat de app op een ingetypte URL staat.** Navigatie via routes
   die ook binnen een schil werken; geen harde verwijzingen naar een domein.

Daarmee verandert de bouwvolgorde niet. SAK M3 (Mobiel) is het moment waarop de
schil erbij komt — dan is er iets om in te schillen.
