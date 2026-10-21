# 07 · Acceptatietests SAK

Gegeven / als / dan, met de seed-data uit `prototype/sak-store.js`. Een milestone is af als alle tests van die milestone slagen **en** de schermen visueel overeenkomen met `screens/` en `specs/`. Maak hier waar mogelijk Playwright-tests van.

## Visueel
- V1. Meldkamer en Beheer op 1440 × 900, Kaart op 1194 × 834 en 402 × 874, Mobiel en Publiek op 402 × 874: elk scherm komt overeen met de pixelspec. Screenshotvergelijking met drempel ≤ 0,1 %.
- V2. Barlow, Barlow Condensed, JetBrains Mono en Material Symbols Sharp worden geladen. Iconen tonen het symbool, niet de naam als tekst.
- V3. Geen border-radius op knoppen, velden en panelen in Meldkamer, Beheer en Mobiel.
- V4. Op de telefoon zijn alle klikdoelen ≥ 44 × 44 px.

## Meldkamer
- M1. Zonder gekozen operator: dan vraagt de Meldkamer eerst "Wie bedient de meldkamer". Elke handeling wordt daarna met die naam gelogd.
- M2. Een publieke melding komt binnen: dan staat ze binnen 2 s bovenaan Meldingen met de tag PUBLIEK, en hoogt de gele teller op.
- M3. "In behandeling nemen": dan staan status, wie en tijd in de tijdlijn.
- M4. Ik zet een melding om naar een incident: dan wordt er een INC-nummer aangemaakt, de melding linkt ernaar, en de tekst, plek en personen zijn overgenomen.
- M5. Ik leg een ontzegging op tot een datum: dan staat die in het Sanctieregister onder actief. Na de einddatum staat ze onder alle, niet meer onder actief.
- M6. BOLO "Verspreiden naar alle telefoons": dan ziet elke ingelogde mobiel binnen 2 s de BOLO-balk. Gevonden of Intrekken haalt hem weg.
- M7. Zoek "Odysseus" of een ledennummer: dan zijn de resultaten gegroepeerd per soort.

## Kaart
- K1. Standaard staat de Kaart ingeklapt (A · Rail): rail van 68 breed met de uitklapknop bovenaan. Een klik op een tool opent het paneel van 380 rechts. Een tweede klik op dezelfde tool sluit het.
- K2. Uitklappen: de kolom wordt 400 breed, de tools staan horizontaal bovenaan, en er is altijd een paneel open (standaard Meldingen). Het paneel heeft geen sluitknop. De kaarttools zweven rechtsboven.
- K3. Inklappen vanuit uitgeklapt: het actieve paneel blijft open, rechts.
- K4. De keuze ingeklapt/uitgeklapt wordt per gebruiker onthouden.
- K5. Op de telefoon is er geen uitklapknop.
- K6. Sleep een teamlid op een taak: dan is de taak toegewezen en ziet het teamlid hem in zijn veldmodus.
- K7. Bulletin met "Gelezen bevestigen": dan telt de meldkamer de bevestigingen mee.
- K8. Een plattegrond uitlijnen door de hoeken te slepen: na herladen staat hij nog op dezelfde plek.
- K9. Offline: na het downloaden van een gebied toont de kaart dat gebied ook zonder netwerk. Een melding die offline is gedaan, wordt verstuurd zodra er weer verbinding is.

## Beheer
- B1. Ik verwijder een rol die in gebruik is: dan moet ik eerst een vervangende rol kiezen.
- B2. Een reeks PORTO-01 t/m PORTO-12: dan staan er 12 items in, met een voorbeeld vooraf.
- B3. Een post slepen op de plattegrond: dan wordt de nieuwe positie opgeslagen in procenten en is hij in Mobiel → Kaart te zien.

## Mobiel
- MO1. Melden in 3 stappen. Met "Direct als incident registreren" staat er een INC in de Meldkamer, anders een M-melding.
- MO2. Deurcontrole: een persoon met een actieve ontzegging toont dat direct en duidelijk, met de einddatum.
- MO3. Een actie van de meldkamer: dan verschijnt die bij Taken. De terugkoppeling (Onderweg, Ter plaatse, Afgerond) is binnen 2 s zichtbaar in de Meldkamer.

## Personeel en communicatie
- PC1. Na inloggen op een nieuw toestel: Dienst starten. Start dienst is pas actief na 4 cijfers.
- PC2. 2 minuten zonder gebruik, of een tik op het slotje: dan vergrendeld. Juiste pincode: verder waar je was. 5 keer fout: opnieuw inloggen met het account.
- PC3. De meldkamer zet een opdracht uit: dan neemt binnen 2 s Nieuwe opdracht het scherm over, met een klok die aftelt vanaf 3:00. Vergrendeld: alleen het gele blok, zonder inhoud.
- PC4. Ontvangen: status Ontvangen met tijd, en bij de meldkamer verdwijnt "Wacht op ontvangst" binnen 2 s.
- PC5. 180 s zonder Ontvangen: de band wordt rood, de klok telt op, en de meldkamer toont "Niet bevestigd na … · doorgezet naar teamleider …". De teamleider krijgt een push en de kaart in Mijn team.
- PC6. Teamleider "Bevestigd via portofoon": Ontvangen, met de teamleider als bevestiger in het log. "Overnemen": de teamleider staat bij de opdracht en de opdracht is Ontvangen.
- PC7. De operator klikt bij een wachtende opdracht op Ontvangen: dan staat de operator als bevestiger in het log.
- PC8. Deur: het API-antwoord voor de mobiele rol bevat geen geboortedatum, adres, telefoon of legitimatie. Signalement en foto wel.
- PC9. Vliegtuigmodus: OFFLINE en de wachtrijbalk. Melden, Ontvangen en status zijn direct zichtbaar in de app. Netwerk terug: alles komt in volgorde en met de oorspronkelijke tijden bij de meldkamer.

## Publiek melden (white-label)
- PU1. Zonder login te openen via `/{opdrachtgever}/{project}` of het eigen domein. Logo, sfeerfoto, kleuren, lettertype, naam en toon komen uit het thema van de opdrachtgever; de opbouw is gelijk aan `SAK Publiek melden Club HiFi.dc.html`.
- PU2. Met `toon112 = false` (standaard) staat er nergens een 112-balk. Met `true` staat hij onder de intro als `tel:112`-link.
- PU3. Acht soorten melding in de volgorde en met de iconen uit `09-…`. Type en prioriteit in de Meldkamer volgen de tabel.
- PU4. "In de club" toont de plekken uit het thema. "Op straat" toont de kaart; tikken zet de pin, "Ik ben er nu" zet de pin op de toestellocatie (of toont de foutmelding).
- PU5. Contact staat standaard op "Ja, neem contact op". Met "Liever anoniem" worden geen naam, nummer, IP of toestellocatie opgeslagen.
- PU6. Versturen met ontbrekende velden: "Vul nog in: …" met precies de ontbrekende onderdelen (type, plek bij Op straat, datum bij Andere dag, omschrijving of foto, 06-nummer bij contact).
- PU7. De melding staat binnen 2 s in de Meldkamer met tag PUBLIEK, `sub`, `place`, `geo` en `occurred`.
- PU8. Na versturen: meldnummer, de drie regels die horen bij contact/anoniem en club/straat, en de knoppen "Nog iets melden" en "Bekijk de meldkaart".
- PU9. Beheer weigert een thema waarbij witte tekst op `kleur.primair` of `kleur.inkt` minder dan 4,5:1 contrast heeft.

## Meldkaart
- MK1. Het openbare endpoint geeft alleen cellen terug (i, j, aantal, onderweg, per soort). Geen enkel veld van een losse melding.
- MK2. Een cel met 2 meldingen in de periode verschijnt niet; met 3 wel.
- MK3. Periode wisselen en soort filteren verandert tellers, kaart, lijst en legenda tegelijk.
- MK4. Klik op een plek in "Meeste meldingen" zoomt de kaart naar die cel.
- MK5. Een nieuwe publieke melding met pin telt binnen 5 minuten mee.
- MK6. Kaarttegels komen van de gekozen tegeldienst, met bronvermelding.

## Bewaren en anonimiseren
- AN1. Een publieke melding met contact, ouder dan de termijn, heeft na de nachtelijke taak geen naam en geen telefoonnummer meer, en `contact.geanonimiseerd` is gezet.
- AN2. Type, soort, plek, tijdstip, omschrijving en afhandeling zijn ongewijzigd.
- AN3. Telefoonnummers en e-mailadressen in de omschrijving zijn vervangen door `[verwijderd]`.
- AN4. Het auditlog bevat per geanonimiseerde melding één regel.
