# 04 · Herkenningsregels

## Parsers per formaat

| Formaat | Detectie | Uitvoer |
|---|---|---|
| WhatsApp .txt (Android) | regels `dd-mm-jjjj hh:mm - Naam: tekst` | berichten; multiline voortzetten tot volgende kopregel |
| WhatsApp .txt (iOS) | regels `[dd-mm-jjjj hh:mm:ss] Naam: tekst` | idem; let op U+200E-tekens |
| Telegram JSON | `result.json` met `messages[]` | `from`, `date`, `text` (string of array van delen) |
| Signal | JSON-export | afzender, tijd, body |
| Instagram/Facebook | zip met `messages/inbox/*/message_*.json` of HTML | `sender_name`, `timestamp_ms`, `content`; let op mojibake (latin-1 → utf-8 herstellen) |
| E-mail .eml/.mbox | MIME-kop | From, To, Date, Subject, body (text/plain voorkeur), alle `Received`-headers apart bewaren |
| Screenshot | png/jpg | OCR (bv. Tesseract `nld+eng`); OCR-zekerheid opslaan en tonen ("OCR 96%") |
| CSV/Excel | extensie | kolomkoppeling-stap; onthoud per bronsoort |
| PDF | extensie | tekstlaag per pagina; zonder tekstlaag → OCR |
| Geplakte tekst | handmatig | één notitie |

Faalt herkenning: status `fout` + melding, opties "opnieuw verwerken" en "verwerken als platte tekst".

## Gegevens (patroon + validatie)

| Soort | Categorie | Regel | Normalisatie | Validatietekst |
|---|---|---|---|---|
| Telefoonnummer | Identiteit | NL/intl. patronen | E.164 (libphonenumber) | "NL mobiel · E.164 +316… · geldig" |
| E-mailadres | Identiteit | RFC-light | lowercase | "Syntax geldig · From-header" |
| Handle | Identiteit | `@[\w.]{2,30}` + platform uit bron | lowercase | "Instagram · uit datadownload" |
| IPv4 / IPv6 | Technisch | `ipaddress` module | canonical | "IPv4 · publiek · Received-header, 2e hop" |
| MAC-adres | Technisch | 6 octetten | `AA:BB:..` hoofdletters | "MAC · unicast · OUI …" |
| Domein / URL | Technisch | TLD-lijst | lowercase host | "Domein · .nl · genoemd in bericht" |
| Kenteken | Fysiek | NL sidecodes 1–14 | zonder streepjes opslaan, met tonen | "NL kenteken · sidecode 9 (XX-999-X)" |
| IMEI | Technisch | 15 cijfers + Luhn | cijfers | "IMEI · 15 cijfers · Luhn geldig" |
| IBAN | Identiteit | mod-97 | zonder spaties | "IBAN · NL · mod-97 geldig" |
| Locatie | Fysiek | taalmodel | — | "Plaatsaanduiding · in bericht" |

Documentatie- en voorbeeldbereiken (192.0.2.0/24, 198.51.100.0/24, 203.0.113.0/24, 2001:db8::/32, `.example`) markeren als testdata.

## Taalmodel
- Labels per bericht: dreiging, intimidatie, observatie, locatie, contactpoging, nieuw nummer, nieuw account. Met zekerheid 0–1.
- Samenvatting per onderzoek, verbandvoorstellen (schrijfstijl, tijdsamenval) met reden in één zin.
- Alles komt binnen als `voorstel`. Nooit automatisch bevestigen.
- Uitschakelbaar per onderzoek.

## Opzoekingen
Alleen handmatig gestart, alleen officiële/offline bronnen: RDW open data (voertuig, geen houder), WHOIS/DNS, OUI-lijst, TAC-lijst, nummerportering via gecontracteerde bron. Elke opzoeking gelogd.
