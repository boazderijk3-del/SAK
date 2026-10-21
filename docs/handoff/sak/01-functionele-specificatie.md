# 01 · Functionele specificatie SAK

Hiërarchie: **opdrachtgever** (bv. S.V. Odysseus, Mojo Concerts) → **project** (bv. "Soos · deurbeleid", "Lustrumfestival Odysseus") → posten, personeel, inventaris, meldingen, incidenten. Bijna elk scherm heeft een projectkeuze.

Rollen zijn door de klant zelf te benoemen in Beheer. Standaard: Teamleider (TL), Beveiliger (BEV), Portier (POR), Interventie (INT), EHBO'er (EHBO), Meldkamer (MK), Coördinator (COO). Elke rol heeft een kleur.

## 1. Meldkamer (desktop)

**Kop:** woordmerk + programmawisselaar, projectkeuze, operatorkeuze ("Wie bedient de meldkamer: wordt bij elke handeling vastgelegd"), zoekveld "Zoek alles: naam, ledennummer, INC-, M-, BOLO, signalement, plek…" met resultaten gegroepeerd per soort, knop "Breed" (extra kolom), links naar Kaart en Beheer.

**Linkermenu:** Meldingen · Incidenten · BOLO · Sanctieregister · Register · Berichten, met tellers in eigen kleur (meldingen geel `#f2d64b`, incidenten blauw `#5cc8ff`, BOLO rood `#ff5f57`, sancties grijs). Daaronder links naar Kaart, Beheer, Publieke meldpagina, Mobiele app.

**Layout:** lijstkolom(men) + detailkolom. Zonder selectie: "Kies een melding, incident of persoon."

**Meldingen** (M-nnnn): filter open/alle, "+ Melding" (type met icoon, prioriteit P1–P3, positie, tekst). Per melding: icoon, type, PUBLIEK-tag als het via de publieke pagina kwam, medisch-icoon, tijd geleden, nummer · plek, tekst, status, door wie. Detail: contact (bij publiek), plek, tekst, foto's toevoegen, tijdlijn, "In behandeling nemen", acties uitzetten naar personen/groepen met terugkoppeling, oplossen met notitie, **omzetten naar incident**.

**Incidenten** (INC-jjjj-nnnn): titel, type, geldt voor (project of hele organisatie), toedracht, medische info (bij bewustzijn, ademhaling, letsel, behandeling, overige; "zichtbaar voor iedereen die je inzet"), betrokken personen met rol (dader, slachtoffer, getuige) en per persoon "Sanctie opleggen", acties en terugkoppeling, BOLO uitzetten, **incidentrapport** (opsteller, aanleiding, genomen maatregelen, afloop, politie ingeschakeld + registratienummer en eenheid, ambulance + vervoerd naar, camerabeelden veiliggesteld, geweld toegepast door beveiliging + verantwoording, nazorg, overige), foto's en logboek.

**BOLO** ("be on the lookout"): voor een dader die gevlucht of in het publiek opgegaan is. Gezochte persoon (optioneel), titel, signalement, foto. "Verspreiden naar alle telefoons". Daarna: Gevonden / Intrekken.

**Sanctieregister:** soorten Ontzegging (met duur t/m), Boete (bedrag, "doorgeven aan"; "Wij innen de boete niet…"), Royement (permanent tot intrekking), Geweigerd. Geldt voor project of organisatie. Filter actief/alle. Intrekken mogelijk.

**Register (personen):** zoeken op naam of ledennummer, "+ Persoon". Persoonskaart: foto, signalement/notities, personalia (geboortedatum, telefoon, adres, woonplaats, legitimatie: soort + laatste 4 cijfers), sancties, historie.

**Berichten:** kanaal "iedereen", tekstveld "Bericht aan iedereen…".

## 2. Kaart (tablet/telefoon)

**Bovenbalk:** woordmerk SAK (+ "SECURITY AWARENESS KIT" in veldmodus), "Bekijk als" (OPS-1 · Dispatch of een eenheid), weergaveknoppen Kaart · Bord · Rapport, projectkeuze, waarschuwingsbalk bij een nieuwe melding ("NIEUW · M-… · titel · door"), GPS-status ("3D ±4 m"), MESH-indicator, aantal online, klok.

**Dispatch-gereedschap** (rail/dock): Project · Team · Taken · Meldingen · Bulletin · Chat · Lagen · Offline, met badges. Kaartgereedschap: Marker, Meten, Route, Zone. Links naar Meldkamer ("Registr.") en Beheer.

- **Project:** opdrachtgevers en projecten aanmaken (naam, type, opdrachtgever, start/einde, locatie, teams), projectfilter ("Kaart, meldingen en taken tonen alleen …"), status, rapport. Tabbladen personeel (in-/uitklokken, uren) en materiaal (uitgeven aan medewerker, inleveren; waarschuwing bij niet-ingeleverd).
- **Team:** teams en teamleden, online/onderweg.
- **Taken:** nieuwe taak, toewijzen door een team of teamlid op een taak of melding te **slepen**, kanbanbord (Bord-weergave).
- **Meldingen:** lijst en detail, op kaart, taak maken, toewijzen, foto's en documenten, gekoppelde taken, logboek.
- **Bulletin:** bericht uitsturen (titel, omschrijving, prioriteit, geldig tot, gebied op kaartmidden, bijlagen). Ontvangers bevestigen "Gelezen".
- **Chat:** kanalen per team en iedereen, bijlagen.
- **Lagen:** basiskaart kiezen of eigen bron toevoegen; eigen plattegronden laden (PNG/JPG), verdieping, dekking (10–100 %), **uitlijnen** door hoekpunten te slepen; routes en zones importeren (GPX, KML, KMZ, GeoJSON).
- **Offline:** huidige weergave downloaden, gedownloade gebieden beheren.
- **Markers** met affiliatie: Vriendelijk (blauw), Vijandig (rood), Neutraal (groen), Onbekend (geel).
- **Rapport:** samenstellen met filters (van/tot, project, team, teamlid, type melding, gebied), secties Meldingen, Personeel, Materiaal, Tijdlijn; afdrukken/PDF.

**Veldmodus** (Bekijk als een eenheid, telefoon): tabs Nu · Melden · BOLO · Kaart. Nu: dienst (in-/uitklokken, "Lever je materiaal in bij de meldkamer voordat je uitklokt."), mijn status, huidige opdracht (Navigeer, Ter plaatse, Foto), mijn taken. Melden: type, urgentie, titel, tekst, foto, locatie = eigen positie, "Versturen naar meldkamer".

## 3. Beheer (desktop)

Zijmenu met woordmerk + wisselaar en secties, links naar Meldkamer en Kaart, knop om de voorbeelddata te herstellen (alleen prototype).
- **Rollen & personeel:** rollen met kleur, afkorting, naam, aantal in gebruik. Verwijderen van een rol in gebruik: eerst overzetten naar een andere rol. Per medewerker een rol.
- **Inventaris:** categorieën (naam, prefix, aantal cijfers, pictogram), items toevoegen als reeks (prefix, van–tot, omschrijving, met voorbeeld) of enkel; tabel met nummer, omschrijving, status (Beschikbaar, Uitgegeven, Defect, Kwijt, Onderhoud), opmerking. "Alleen items op deze lijst kunnen in de meldkamer en op de telefoon worden uitgegeven."
- **Plattegronden:** per project een plattegrond, posten plaatsen door te klikken en te slepen, posten benoemen (type Post…).

## 4. Mobiel (telefoon)

Zie ook `08-personeel-en-communicatie.md` (dienst starten met pincode, vergrendelen, Nieuwe opdracht, Mijn team voor de teamleider, offline wachtrij).

Kop: woordmerk, wie ben ik, project, mijn post. BOLO-waarschuwing bovenaan als er een actieve is.
Tabs onderaan met grote middenknop "+ Melden":
- **Taken:** mijn acties met terugkoppeling, onveilige situaties afvinken, lopende meldingen.
- **Kaart:** plattegrond met posten en bezetting.
- **Berichten:** kanaal iedereen.
- **Registers:** Deur (zoek naam of ledennummer: direct zien of er een ontzegging, royement of openstaande boete is; Weigeren / Incident melden; nieuw registreren), BOLO (Gezien · melden aan meldkamer), Sancties, Incidenten.
- **Melden** (3 stappen): type → plek, tekst, foto, prioriteit, "Gewonde of onwel" (bewustzijn, ademhaling, letsel), betrokken personen, "Direct als incident registreren" → bevestiging.

## 5. Publieke meldpagina en meldkaart

Meldpunt voor bezoekers, leden en buurtbewoners, in de huisstijl van de klant: `09-publieke-meldpagina.md`. Openbare kaart met geanonimiseerde meldingen: `10-meldkaart.md`. Bewaren en anonimiseren: `11-bewaren-en-anonimiseren.md`.

