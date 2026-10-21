# 03 · Datamodel SAK

Afgeleid van `prototype/sak-store.js` (seed-data). Ids zijn SSOT-ids zodat Phylax en Ophanim naar dezelfde opdrachtgever en hetzelfde project verwijzen.

- **Opdrachtgever** · id, naam, soort (Studentenvereniging, Evenementenorganisatie…), contact, telefoon
- **Project** · id, opdrachtgever_id, naam, type (Deurbeleid, Festival…), rooster/periode, locatie, status, teams[]
- **Rol** · id, naam, afkorting, kleur
- **Medewerker** · id, naam, rol_id
- **Team / eenheid** · id, naam, post (lat, lng, naam), leden[]; eenheid-status (Online, Onderweg, Offline), positie
- **Dienst** · medewerker_id, project_id, ingeklokt, uitgeklokt
- **Inventariscategorie** · id, naam, prefix, cijfers, icoon
- **Item** · id, categorie_id, code (PORTO-03), omschrijving, status (Beschikbaar, Uitgegeven, Defect, Kwijt, Onderhoud), opmerking
- **Uitgifte** · item_id, medewerker_id, project_id, uitgegeven, ingeleverd
- **Plattegrond** · project_id, afbeelding, verdieping, dekking, hoekpunten (uitlijning)
- **Positie/post** · plattegrond_id, naam, type, x %, y %
- **Melding** (M-nnnn) · tijd, voorval_tijd (`occurred`), bron (medewerker | publiek), soort (`sub`, de knop op de publieke pagina), plaats (`place`: club | onderweg), geo {lat, lng}?, door, type, prioriteit (P1–P3), project_id, positie_id | vrije plek | lat/lng, tekst, foto's[], medisch?, status (Nieuw, In behandeling, Opgelost), in_behandeling {door, tijd}, taken[], personen[{persoon_id, rol}], log[], opgelost {door, tijd, notitie}, incident_id?, contact? (publiek: {anon:true} | {naam, telefoon}; na anonimiseren {anon:true, geanonimiseerd: datum})
- **Taak/actie** · id, titel, toegewezen[] (medewerker of team), status (Uitgezet, Ontvangen, Onderweg, Ter plaatse, Afgerond), ontvangen {door, tijd} met tijd per status, terugkoppeling[]
- **Incident** (INC-jjjj-nnnn) · tijd, titel, type, status (Lopend, Afgesloten), scope (project | org), project_id, opdrachtgever_id, melding_id?, toedracht, medisch?, personen[{persoon_id, rol}], taken[], bolo?, rapport {opsteller, aanleiding, maatregelen, afloop, politie{reg, eenheid}, ambulance{vervoerd, ziekenhuis}, camerabeelden, geweld{toelichting}, nazorg, overig}, foto's[], log[]
- **Persoon** (register) · id, naam, lid (ja/nee), ledennummer, foto, signalement, geboortedatum, telefoon, adres, woonplaats, legitimatie (soort + laatste 4)
- **Sanctie** · persoon_id, incident_id?, type (Ontzegging, Boete, Royement, Geweigerd), bedrag, doorgegeven_aan, van, tot, scope (project | org), reden, door, ingetrokken?
- **BOLO** · incident_id, persoon_id?, titel, signalement, foto, status (Actief, Gevonden, Ingetrokken), gezien-meldingen[]
- **Bulletin** · titel, tekst, prioriteit, geldig_tot, gebied, scope (iedereen | team), bijlagen, gelezen_door[]
- **Bericht/chat** · kanaal, van, tijd, tekst, bijlagen
- **Kaartobject** · soort (marker, route, zone, import), affiliatie, geometrie
- **Auditlog** · operator, actie, object, tijd
- **Thema publieke pagina** · opdrachtgever_id, naam, logo, sfeerfoto, font, kleuren {primair, inkt, tekst2, vlak, rand, uit}, verloop, toon, toon112, plekken[], kaartMidden {lat, lng}, bewaartermijn_maanden, domein? (zie `09-…`)
- **Meldkaart-cel** (afgeleid, gecachet) · opdrachtgever_id, i, j, periode, soort, aantal, onderweg, straatnaam (zie `10-…`)

Regels: een sanctie is actief als `van ≤ nu ≤ tot` (royement zonder einde) en niet ingetrokken. Deurcontrole toont actieve sancties met scope = dit project of de hele organisatie.

Anonimiseren: zie `11-bewaren-en-anonimiseren.md`. Meldingen worden niet verwijderd; contactgegevens wel, na de termijn.
