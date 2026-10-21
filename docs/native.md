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
