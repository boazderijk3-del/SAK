# 03 · Datamodel

Alle tijden UTC opgeslagen, getoond in Europe/Amsterdam. Elke tabel heeft `id`, `created_at`, `created_by`.

## Schil

**Opdrachtgever** · naam, rol, bron (`SAK` | `Ophanim` | `Phylax`)
**Locatie** · code (LOC-01), naam, soort, opdrachtgever_id
  - **Blusmiddel** · code (BM-01), soort, plek, keuringsdatum
  - **Installatie** · soort, omschrijving, keuringsdatum
  - **Bedrijf op locatie** · naam, rol
**Casus** · code (CAS/INC/BGC-nnn), type (`Onderzoek` | `Incident` | `Backgroundcheck`), titel, opdrachtgever_id, locatie_id?, status, bron, geopend, eigenaar, categorie, **grondslag**, **doel**, **bewaartermijn**, **toestemming_door**, **toestemming_datum**, **pseudonimiseren_derden** (bool)
**Notitie** · casus_id, tijd, tekst
**Ding** (gedeelde entiteit, over opdrachtgevers heen) · soort, genormaliseerde_waarde, weergave, persoon_id?
**Koppelvoorstel** · van, naar, reden, status (`voorstel` | `bevestigd` | `afgewezen`), besloten_door

## Analyse

**Onderzoek** · code (ONZ-014), casus_id, type, status, titel
**Bron** · onderzoek_id, bestandsnaam, formaat, aangeleverd_door, ontvangen_op, sha256, opslagpad (read-only), status (`ontvangen` | `verwerken` | `verwerkt` | `fout`), foutmelding?, inhoud_samenvatting (bv. "214 berichten"), kolomkoppeling? (CSV)
**Actor** · onderzoek_id, weergave (+31 6 1234 5678, @nachtuil_0412), kanaal, is_melder, persoon_id?
**Gesprek** · onderzoek_id, bron_id, kanaal, actor_id
**Bericht** · gesprek_id, bron_id, afzender_actor_id, tijd, tekst, bron_positie (regel/pagina/offset)
**Label** · bericht_id, soort, zekerheid (0–1), herkomst (`taalmodel` | `mens`), status (`voorstel` | `bevestigd`), besloten_door, besloten_op
**Gegeven** · onderzoek_id, soort, categorie (`Identiteit` | `Technisch` | `Fysiek`), waarde_genormaliseerd, waarde_weergave, validatie (tekst), persoon_id?, herkend_door (`patroon` | `taalmodel` | `beide`), status (`voorstel` | `bevestigd` | `afgewezen` | `akkoord`), eerst_gezien, laatst_gezien, ding_id?
**Vindplaats** · gegeven_id, bron_id, bericht_id?, positie, citaat
**Persoon** (binnen onderzoek) · label ("Persoon A"), is_onbekend
**Gebeurtenis** · onderzoek_id, tijd, tekst, bron_id, actor_id?
**Verband** · onderzoek_id, van (persoon|gegeven), naar, reden, herkomst, status (`voorstel` | `bevestigd` | `afgewezen`)
**Rapport** · onderzoek_id, versie, onderdelen[], status (`concept` | `ter_review` | `goedgekeurd`), opgesteld_door, goedgekeurd_door (≠ opgesteld_door), goedgekeurd_op, sha256
**Auditlog** · gebruiker, rol, actie, object_type, object_id, tijd, details

## Regels
- Uniek: (onderzoek_id, soort, waarde_genormaliseerd) voor Gegeven. Nieuwe vindplaats voegt toe, maakt geen nieuw gegeven.
- Bron-bestanden zijn onveranderlijk; hash wordt bij binnenkomst berekend.
- Rapport bevat alleen Gegevens met status `bevestigd`/`akkoord` en Verbanden `bevestigd`.
- Geen Bron zonder grondslag op de casus.
