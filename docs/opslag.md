# Opslag: wat, waar en waarom

Vervolg op `architectuur.md` §3, waar staat dat opslag vier dingen zijn. Hier
staat per soort waar hij heen gaat, wat er eerst nagekeken moet worden, en
welke val erin zit.

---

## De asymmetrie die de keuze bepaalt

Eén ding vooraf, want het stuurt alles:

**Postgres kun je verhuizen. Bewijs niet.**

Een database verplaatsen is een `pg_dump`, een middag werk. Maar zit er straks
500 GB bewijsmateriaal onder een bewaarslot, dan is dat eruit halen duur, traag
en soms tijdelijk onmogelijk — dat slot zit er juist om dat te verhinderen.

Dus: zet het **onomkeerbare** deel bij de aanbieder waar je over vijf jaar nog
wil zitten, en het **omkeerbare** deel bij degene waar je nu het snelst mee
vooruit komt.

---

## 1. Operationele gegevens → Supabase Postgres (Frankfurt)

Meldingen, taken, personeel, inventaris, sancties, incidenten, en de
Phylax-tabellen.

**Twee projecten: `sak-dev` en `sak-prod`.** Nooit tegen productie ontwikkelen.

Waarom Supabase, terwijl we er bijna niets van gebruiken: beheerde Postgres met
back-ups die iemand anders draaiende houdt, is voor een eenmansbedrijf de
grootste risicoverlaging die er te koop is. En omdat we **nul
Supabase-eigenschappen** gebruiken — geen auth (jij koos eigen accounts met
TOTP), geen RLS vanuit de browser, geen edge functions, geen Supabase-realtime —
blijft het een gewone connectiestring. Weg willen is een dump.

**Let op bij het aanzetten:**
- **Een betaald plan zodra er echte gegevens in gaan.** Het gratis plan heeft
  geen fatsoenlijke back-ups. Een database zonder back-up is geen database.
- **Daarnaast je eigen `pg_dump`** naar de objectopslag, wekelijks. "De
  aanbieder heeft back-ups" faalt precies op het moment dat het account zelf
  het probleem is.
- Regio **Frankfurt**.
- **Verwerkersovereenkomst tekenen.** Persoonsgegevens uit onderzoeken.

---

## 2 en 3. Bestanden → S3-compatibele objectopslag, EU

Hier zit het verschil tussen bewijs en gewone media, en het is een echt
verschil.

| bak | wat erin gaat | slot | bewaren |
|---|---|---|---|
| `sak-media` | foto bij een melding, BOLO-foto, plattegronden | versioning aan, geen slot | volgt de melding |
| `phylax-bewijs` | Phylax-bronnen: exports, pdf's, foto's bij een onderzoek | **object lock, governance** | = `bewaartermijn` van de casus |
| `klant-thema` | logo's en sfeerfoto's van de publieke meldpagina | publiek leesbaar | tot de klant weg is |
| `phylax-export` | gegenereerde rapporten en bewijspakketten | versioning | kort; opnieuw te maken |

**Padindeling**, zodat alles van één opdrachtgever te vinden én te verwijderen
is:

```
phylax-bewijs/<opdrachtgever_id>/<onderzoek_id>/<sha256>.<ext>
sak-media/<opdrachtgever_id>/<project_id>/<melding_id>/<uuid>.<ext>
```

Het bestand heet naar zijn **hash**, niet naar de oorspronkelijke bestandsnaam.
Twee keer hetzelfde bestand uploaden levert dan één object op, en de naam is
zelf de controle.

### De promotie van media naar bewijs
Wordt een melding een incident en dat een onderzoek, dan wordt de foto op dat
moment gekopieerd van `sak-media` naar `phylax-bewijs`, met hash en tijdstempel,
en dat wordt gelogd. Niet bij het uploaden, niet nooit. **Dat moment is waar
bewijswaarde ontstaat.**

### Waar: Scaleway, OVH of Hetzner — EU, en S3
Alle drie zijn Europees en spreken S3. Scaleway (Frans, Parijs/Amsterdam) is de
voorkeur: EU-eigendom, EU-recht, en dat is het antwoord dat je aan een
opdrachtgever wil kunnen geven als die vraagt waar zijn gegevens staan.

**Nakijken vóór je tekent — ik ga dit niet beweren:**
1. Ondersteunt de aanbieder **Object Lock** op een bak, en in welke standen
   (governance / compliance)?
2. Staat er een **verwerkersovereenkomst** klaar?
3. Welke regio's, en kun je de regio vastzetten?

---

## DE VAL: een bewaarslot kan botsen met je wettelijke wisplicht

Dit is het belangrijkste punt van dit hele document.

Object lock kent twee standen:

- **compliance** — niemand kan het object verwijderen vóór het einde van de
  termijn. Ook jij niet. Ook de eigenaar van het account niet.
- **governance** — een bevoegd account kan het slot opheffen, en dát wordt
  gelogd.

Kies je **compliance** met een termijn van tien jaar, en de AVG of een rechter
zegt na twee jaar *verwijderen*, dan **kun je niet voldoen**. Je hebt jezelf
klemgezet met een technische maatregel die bedoeld was om je te beschermen.

Daarom:

- **Gebruik governance, niet compliance.** Het verschil met "geen slot" is dat
  weghalen een bewuste, gelogde handeling is in plaats van een ongelukje.
- **Zet de termijn gelijk aan de `bewaartermijn` van de casus.** Dat veld staat
  al in het Phylax-datamodel, naast `grondslag` en `doel`. Bewaren is daar dus
  geen bijzaak maar onderdeel van het model — gebruik dat, verzin geen tweede
  termijn in de infrastructuur.

### En waar de bewijswaarde écht op rust
Niet op het slot. Op de **hashketen**: SHA-256 bij binnenkomst, vastgelegd in
het auditlog, en het bewijspakket bij een rapport bestaat uit originelen +
hashes + log (zo staat het al in `phylax/05-bouwvolgorde.md` M8).

Het slot beschermt tegen *jezelf* — tegen per ongeluk of kwaadwillend wissen.
De hash beschermt tegen *onopgemerkte wijziging*. Dat zijn twee verschillende
dreigingen en de tweede is de belangrijkste. **Lukt object lock niet bij een
aanbieder, dan ben je niet zonder bewijswaarde**: met een hashketen plus
inloggegevens die alleen mogen schrijven en niet verwijderen, kom je ver. Het
slot is de volgende stap, niet de eerste.

---

## 4. Levende stand → voorlopig niets

Wie is online, waar staat een eenheid, ongelezen tellers.

**Nu: in het geheugen van het API-proces, fan-out via Postgres
`LISTEN/NOTIFY`.** Geen Redis, geen broker. Eén dienst minder die stuk kan, en
ruim genoeg voor tientallen tot enkele honderden gelijktijdige eenheden.

**Later: Redis**, zodra er een tweede API-proces draait of de posities te zwaar
worden. Dat is één adapter, want het zit achter een interface.

Nu al een broker neerzetten is een keuze maken op een aanname over belasting die
er nog niet is.

---

## Wat dit alles omkeerbaar houdt

**Eén interface, S3 eronder.** De code praat S3 (boto3) en krijgt endpoint,
sleutel en bak uit de omgeving. Supabase Storage, Scaleway, Hetzner, OVH, AWS en
MinIO spreken dat allemaal.

Gevolg: je kunt vandaag beginnen op Supabase Storage en bewijs later naar een
WORM-bak verhuizen **zonder één regel toepassingscode te wijzigen**. Dat is de
reden dat deze keuze nu niet definitief hoeft te zijn.

Voor lokaal ontwikkelen draait dezelfde interface tegen **MinIO** in Docker, of
tegen een map op schijf. Geen sleutels nodig om te kunnen bouwen.

---

## Volgorde van aanzetten

| | wanneer | wat |
|---|---|---|
| 1 | nu | `sak-dev` + `sak-prod` op Supabase, Frankfurt. Lokaal bestanden op schijf |
| 2 | M1 | opslaginterface + `sak-media` bij de EU-aanbieder |
| 3 | vóór M3 | `phylax-bewijs` met governance-slot, termijn uit `bewaartermijn` |
| 4 | vóór echte gegevens | betaald plan, eigen `pg_dump`, verwerkersovereenkomsten |
| 5 | bij het tweede API-proces | Redis voor de levende stand |
