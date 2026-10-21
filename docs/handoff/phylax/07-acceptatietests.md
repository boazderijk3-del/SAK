# 07 · Acceptatietests Phylax en Suite

Elke test is "gegeven / als / dan". Voer ze uit met de seed-data uit de prototypes. Een milestone is af als alle tests van die milestone slagen **en** de schermen visueel overeenkomen met `screens/` en `specs/`. Maak hier waar mogelijk Playwright-tests van (`/apps/*/e2e`).

## Visueel (bij elke milestone)
- V1. Op 1440 × 900 komt elk scherm overeen met de pixelspec. Maten, kleuren, lettertypes, gewichten en teksten wijken niet af. Controleer met een screenshotvergelijking (Playwright `toHaveScreenshot`, drempel ≤ 0,1 %) tegen een referentie die je eenmalig van het prototype maakt.
- V2. Fonts: Space Grotesk en JetBrains Mono worden echt geladen (`document.fonts.check`), er is geen fallback te zien.
- V3. Geen schaduw behalve bij dropdowns. Geen radius die niet in de spec staat.
- V4. Alle teksten zijn letterlijk gelijk aan het prototype, inclusief interpunctie.

## Suite Start
- S1. Niet ingelogd en ik open een willekeurige URL: dan kom ik op Inloggen, en na het inloggen terug op die URL.
- S2. Ik klik Inloggen met een leeg wachtwoord: dan verschijnt het foutvak met "Vul je e-mailadres en wachtwoord in." en blijven de velden gevuld.
- S3. Ik vul juiste gegevens in en heb tweestapsverificatie aan: dan zie ik het codescherm. Letters typen kan niet; na 6 cijfers en Enter kom ik op de programmakeuze.
- S4. Ik heb alleen een SAK-rol: dan zie ik de Phylax-kaart niet, en ook Phylax niet in de wisselaar.
- S5. Ik kies opdrachtgever "S.V. Odysseus" en open Meldkamer: dan bevat de URL `?opdrachtgever=K-ODY` en staat de Meldkamer op dat project.
- S6. Wachtwoord vergeten met een onbekend adres: dan dezelfde bevestiging als bij een bekend adres.
- S7. Uitloggen: dan is de sessie ongeldig, en geeft de terugknop van de browser geen toegang.

## Programmawisselaar
- W1. Klik op het logo in Phylax: dan opent een paneel van 290 breed, 8 px onder het logo, met PROGRAMMA, drie regels, de voetregel en "Alle programma's".
- W2. Phylax heeft het vinkje ✓ en is niet klikbaar. Ophanim staat op 50 % met "later".
- W3. Esc of een klik buiten het paneel sluit het.
- W4. Klik op SAK: dan opent de SAK Meldkamer met dezelfde opdrachtgever, zonder opnieuw in te loggen.
- W5. In SAK heeft het paneel geen radius, Barlow-typografie en "HUIDIG" in amber.

## Phylax-schil
- P1. Ik maak via de wisselaar een nieuwe opdrachtgever aan: de knop Aanmaken is pas actief als de naam is ingevuld. Daarna staat de opdrachtgever in de lijst en is hij gekozen.
- P2. `/` vanuit elk scherm zet de focus in Zoek overal.
- P3. Zoek op een kenteken: dan zijn de resultaten gegroepeerd per soort, en opent een klik het object.
- P4. Werkbak: na Bevestig verschijnt de statusregel met "terug". "Terug" zet het item terug in de wachtrij.
- P5. Locaties: een keuringsdatum in het verleden is rood, ≤ 45 dagen is amber, verder groen.
- P6. Rapporten: na vaststellen is het rapport niet meer te wijzigen. "Wijzigen" maakt versie 2 met een nieuwe hash.

## Analyse
- A1. Een casus zonder grondslag: dan is "Materiaal toevoegen" uitgeschakeld en verwijst de tekst naar de casus.
- A2. Ik upload een WhatsApp-export: dan verschijnt de bron bovenaan met `verwerken` en de hash "berekenen". Daarna `verwerkt` met de juiste aantallen en een SHA-256 die overeenkomt met `sha256sum` van het bestand.
- A3. Een kapot bestand: dan `fout`, een melding, en de opties "opnieuw verwerken" en "verwerken als platte tekst".
- A4. `06-12345678` en `+31 6 1234 5678` in twee bronnen: dan één gegeven met twee vindplaatsen.
- A5. Als onderzoeker klik ik Bevestig: de status wordt `bevestigd` en de selectie springt naar het volgende open voorstel. De teller van Herkend daalt; bij 0 is de teller niet meer amber.
- A6. Als reviewer zie ik bij een bevestigd gegeven "Akkoord" en "Terug naar onderzoeker". De FG ziet alleen de tekst over inzage.
- A7. Gesprekken: berichten tussen 23:00 en 06:00 tonen "nacht" in paars. Een klik op een voorgestelde label-chip maakt hem bevestigd (doorgetrokken rand, ✓). Een tweede klik zet hem terug.
- A8. Gegevens toont alleen bevestigde gegevens. "→ Dingen" maakt er "in Dingen ✓" van, en het gegeven is daarna vindbaar onder Dingen en via Zoek.
- A9. Verbanden: een klik op een knoop vervaagt de niet-buren naar 45 %. Een voorstel is gestippeld en paars.
- A10. Rapport: de opsteller kan niet goedkeuren. Export is uitgeschakeld tot de status Goedgekeurd is. Het rapport bevat geen voorstellen behalve in de bijlage.
- A11. Elke actie hierboven staat in het auditlog met wie, wat, wanneer en rol. De FG kan het log inzien.
- A12. Zet het taalmodel uit: dan zijn alle labelvoorstellen, de samenvatting en de voorgestelde verbanden weg.
