# 01 · Functionele specificatie

## A. Phylax-schil

Alles hangt onder een **opdrachtgever**. Alles is overal vindbaar.

### Zijmenu
- Opdrachtgever-wisselaar bovenaan (dropdown). Opties: elke opdrachtgever met bron-tag (SAK, Ophanim, Phylax), plus "Alle opdrachtgevers". Onderaan "+ Nieuw bedrijf of opdrachtgever": inline formulier met naam, rol (keuze uit 3) en knop Aanmaken (pas actief als naam is ingevuld).
- "Zoek overal" met sneltoets `/`.
- Menu in drie groepen: Overzicht · Invoer · Werkbak / Casussen · Locaties · Dingen / Onderzoek · Rapporten (+ "Kennis", later, uitgegrijsd). Elk item kan rechts een teller tonen.
- Onderaan statuskaart: groene stip "Verbonden met SSOT", daaronder "live: Phylax · SAK · Ophanim".

### Kop (52 px)
Links het kruimelpad, rechts de URL van de huidige view (mono) en de primaire knop "+ Invoer".

### Schermen
- **Overzicht:** samenvatting van de gekozen opdrachtgever: casussen, locaties, open punten.
- **Invoer:** vrij tekstveld. "Typ of plak wat je weet. Phylax labelt het en zet het bij de juiste casus. Je controleert rechts." Rechts verschijnen de herkende labels en de voorgestelde casus; de gebruiker bevestigt en slaat op.
- **Werkbak:** wachtrij van voorgestelde labels en koppelingen uit alle programma's. Per item Bevestig / Wijs af; na besluit een statusregel met "terug". Bevestigen of afwijzen is het leersignaal.
- **Casussen:** lijst + detail. Typen: Onderzoek (CAS), Incident (INC), Backgroundcheck (BGC). Detail: inhoud-tellers, betrokkenen, voorgestelde koppelingen met andere casussen (Koppel / Niet), notities.
- **Locaties:** lijst + detail met blusmiddelen (keuringsdatum met kleurstatus: verlopen rood, ≤ 45 dagen amber, in orde groen), installaties, bedrijven op de locatie.
- **Dingen:** gedeelde entiteiten over alle opdrachtgevers. Een persoon bestaat één keer, ook als hij bij drie klanten opduikt.
- **Onderzoek:** onderwerpen met tabs Vastgelegd, Tijdlijn, Netwerk; bronnen-checklist (Gevonden / Niets gevonden / Opnieuw inplannen); vervolgzoekopdrachten. Bevat het onderdeel **Analyse** (deel B).
- **Zoek:** één zoekveld over alles: naam, kenteken, adres, telefoon, casus, blusmiddel. Resultaten gegroepeerd per soort.
- **Rapporten:** rapport genereren per opdrachtgever, onderwerp of incident. Papierpreview rechts. Na vaststellen is een rapport bevroren (hash), wijzigen maakt een nieuwe versie.

Exacte layout en copy staan in `prototype/Phylax v3.dc.html`.

## B. Analyse

### Plaats
Analyse is een onderdeel binnen **Onderzoek**; het menu groeit niet. Pad: `Onderzoek / <onderzoek-id> / Analyse`. Een analyse hoort bij precies één onderzoek, en dat onderzoek bij één casus en opdrachtgever.

Vaste kop boven elk Analyse-scherm:
- onderzoek-id · type · status (mono, klein), titel (22 px)
- rechts, paars mono: grondslag en toestemming (wie, datum), doel, bewaartermijn, of derden gepseudonimiseerd worden. Alleen-lezen, uit de casus.
- tabs: Materiaal · Herkend · Gesprekken · Tijdlijn · Gegevens · Verbanden · Rapport, elk met teller. De teller van Herkend is amber zolang er open voorstellen zijn.

Zonder vastgelegde grondslag in de casus kan er geen materiaal worden toegevoegd. De knop is dan uitgeschakeld en verwijst naar de casus.

### Rollen

| Actie | Onderzoeker | Reviewer | FG |
|---|---|---|---|
| Materiaal toevoegen | ja | nee | nee |
| Gegeven bevestigen / afwijzen | ja | nee | nee |
| Bevestigd gegeven akkoord / terugsturen | nee | ja | nee |
| Label bevestigen | ja | ja | nee |
| Verband bevestigen | ja | ja | nee |
| Rapport opstellen, aanbieden voor review | ja | nee | nee |
| Rapport goedkeuren / terugsturen | nee | ja (niet eigen rapport) | nee |
| Exporteren | na goedkeuring | na goedkeuring | nee |
| Inzage, inclusief toegangslog | eigen onderzoeken | toegewezen | alles, alleen-lezen |

Vier-ogen-principe: wie het rapport opstelde kan het niet zelf goedkeuren. In het prototype wissel je rol rechtsboven in de kop; in productie volgt de rol uit de login.

### 1. Materiaal
- Tabel bronnen: bestandsnaam + "aangeleverd door X · datum", soort, inhoud (aantal berichten/regels/pagina's), SHA-256 (verkort `9f2c…a71e`, volledig op hover), status (`ontvangen`, `verwerken` amber, `verwerkt` groen, `fout` rood).
- Rechterpaneel: sleepvlak "Sleep bestanden hierheen / Phylax herkent het formaat zelf", daaronder formaatknoppen als uitweg: WhatsApp .txt, Telegram JSON, Signal, Instagram/Facebook, E-mail .eml/.mbox, Screenshot, CSV/Excel, PDF, Geplakte tekst.
- Verwerking per bron, in deze volgorde (ook zo getoond als genummerde lijst "BIJ ELKE BRON"): (1) origineel opslaan, alleen-lezen, met SHA-256 en tijdstempel; (2) formaat herkennen en splitsen in berichten, afzenders, tijden; (3) gegevens herkennen met patronen en validatie; (4) labels en samenvatting voorstellen met het taalmodel.
- Nieuwe bron verschijnt bovenaan met status `verwerken` en hash "berekenen", en gaat naar `verwerkt` zodra klaar.
- CSV/Excel: stap waarin de gebruiker kolommen koppelt (tijd, afzender, tekst, vrij). Phylax onthoudt de koppeling per bronsoort.
- Fout: bron blijft staan met foutmelding en opties "opnieuw verwerken" of "verwerken als platte tekst".

### 2. Herkend
- Links (400 px) lijst, filter Alle / Identiteit / Technisch / Fysiek. Per regel: soort (klein grijs), waarde (mono amber), statuspil rechts. Kop toont "N te beoordelen" in amber.
- Rechts detail: soort · categorie + statuspil; waarde groot (mono 28 px amber); validatieregel (bv. "IMEI · 15 cijfers · Luhn geldig"); drie velden in een raster: Hoort bij, Eerst / laatst gezien, Herkend door (Patroon, Taalmodel, Patroon + taalmodel); **Gevonden in**: elke vindplaats met bron + tijd en het citaat; **Opzoeking**: één regel wat een externe bron kan zeggen en of de koppeling actief is.
- Knoppen: onderzoeker "Bevestig" (primair) / "Wijs af"; reviewer "Akkoord" / "Terug naar onderzoeker"; FG ziet alleen: "Alleen inzage. De FG ziet wat er is vastgelegd en waarom, maar beslist niet over gegevens."
- Na een besluit springt de selectie naar het volgende open voorstel.
- Statussen: `voorstel` → `bevestigd` | `afgewezen`; reviewer: `bevestigd` → `akkoord` of terug naar `voorstel`.
- Samenvoegen: waarden die na normalisatie gelijk zijn (`06-12345678` en `+31 6 1234 5678`) worden één gegeven met meerdere vindplaatsen.

### 3. Gesprekken
- Links (250 px) gesprekken: kanaal (mono klein, hoofdletters) + account + aantal. Bovenaan "Alle gesprekken" (alles chronologisch).
- Midden: labelfilter (Alle, dreiging, intimidatie, observatie, locatie, contactpoging, nieuw nummer, nieuw account), daaronder berichten. Melder rechts, andere partij links. Per bericht: afzender, datum, tijd, "nacht" in paars tussen 23:00 en 06:00; ballon max 520 px; daaronder labels en herkende gegevens.
- Label-chip: voorstel = stippelrand + percentage zekerheid; bevestigd = doorgetrokken rand + ✓. Klik wisselt (niet voor FG).
- Rechts (330 px): staafdiagram berichten per dag (opvallende dagen paars), patronen (berichten andere partij, % tussen 23–06, nieuwe nummers/accounts na blokkade, reactietijd na blokkade, bevestigde labels), samenvatting van het taalmodel in een paars kader met "Controleer tegen de berichten. Wordt pas onderdeel van het dossier na bevestiging."

### 4. Tijdlijn
- Links (240 px) filters: Soort (Bericht, Gegeven, Gebeurtenis, met aantallen), Afzender / account, checkbox "Alleen met label".
- Rechts per dag: dag ("vr 5 sep") + "N items", verticale lijn met stippen (bericht teal, gegeven amber, gebeurtenis grijs, dreiging rood). Per item: tijd, tekst, afzender · soort, labels, bron rechts.

### 5. Gegevens
- Alleen bevestigde gegevens. Filter op categorie. Kolommen: Soort, Waarde, Hoort bij, Eerst → laatst, bronnen, Dingen.
- Actie "→ Dingen" zet het gegeven in de gedeelde entiteiten van Phylax; daarna "in Dingen ✓" groen.
- Leeg: "Nog niets bevestigd in deze categorie. Bevestig gegevens bij Herkend."

### 6. Verbanden
- Netwerk: knopen (personen paars, gegevens amber mono), lijnen bevestigd (grijs, doorgetrokken) of voorstel (paars, gestippeld). Klik op knoop selecteert; niet-buren vervagen naar 45 %.
- Rechts (320 px): soort, naam, "VERBANDEN · N", per verband: naar, BEVESTIGD/VOORSTEL, reden.
- Vaste tekst: "Een voorstel van het taalmodel (schrijfstijl, tijdsamenval) is een aanwijzing, geen bewijs. Het rapport toont het apart."

### 7. Rapport
- Links (300 px): Onderdelen (checkboxes: Samenvatting, Bronnen en integriteit, Tijdlijn, Gegevens, Verbanden, Methode en beperkingen), Status (Concept · onderzoeker → Ter review · reviewer → Goedgekeurd), actieknop afhankelijk van rol en status, toelichting, Export (PDF-rapport, Bewijspakket; pas actief na goedkeuring).
- Rechts: papierpreview 620 px breed, lichte achtergrond. Alleen bevestigde gegevens; voorstellen van het taalmodel in een aparte bijlage.
- Na goedkeuring: vergrendeld en gehasht. Wijzigen maakt een nieuwe versie.

### Logging
Elke inzage, bevestiging, afwijzing, statuswijziging en export: wie, wat, wanneer, rol. Inzichtelijk voor FG.

### Instelling: taalmodel aan/uit
Als het taalmodel uit staat verdwijnen alle voorstellen van het taalmodel (labelvoorstellen, samenvatting, voorgestelde verbanden); alleen bevestigde en patroon-herkende items blijven.
