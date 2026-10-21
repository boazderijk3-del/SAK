# Pixelspec · SAK Publiek melden Club HiFi

Gegenereerd uit `prototype/SAK Publiek melden Club HiFi.dc.html`. Volledige elementboom met **exacte inline-stijlen** en teksten; normatief. `{{ … }}` = dynamische waarde uit de logica onderaan het prototype. `▸ ALS` = alleen zichtbaar als de waarde waar is; `▸ VOOR ELK` = herhaald per item.

```
- div
    ⟨min-height:100vh;display:flex;flex-direction:column;background:#fff⟩
  - div
      ⟨position:relative;height:400px;overflow:hidden;background:#3d6fb6;flex:none⟩
    - image-slot (id="hifi-hero" shape="rect" fit="cover" placeholder="Sfeerfoto van de club")
        ⟨position:absolute;inset:0;width:100%;height:100%⟩
    - div
        ⟨position:absolute;inset:0;pointer-events:none;background:linear-gradient(160deg,rgba(127,211,214,.72) 0%,rgba(61,111,182,.7) 50%,rgba(106,84,170,.62) 100%)⟩
    - div
        ⟨position:absolute;inset:0;pointer-events:none;background:rgba(220,228,238,.55);clip-path:polygon(0 72%,22% 92%,48% 74%,86% 52%,100% 64%,100% 100%,0 100%)⟩
    - div
        ⟨position:absolute;inset:0;pointer-events:none;background:#fff;clip-path:polygon(0 100%,38% 84%,66% 94%,100% 82%,100% 100%)⟩
    - div
        ⟨position:relative;max-width:480px;margin:0 auto;padding:18px 20px 0;display:flex;flex-direction:column;gap:56px⟩
      - img (src="assets/logo-hifi.png" alt="Club HiFi")
          ⟨width:100px;height:64px;object-fit:contain;flex:none;align-self:flex-start⟩
      - div
          ⟨display:flex;gap:18px;pointer-events:none⟩
        - div
            ⟨width:10px;background:#fff;flex:none⟩
        - div
            ⟨display:flex;flex-direction:column;gap:8px;min-width:0⟩
          - h1
              ⟨margin:0;font:700 54px/0.95 Ubuntu,sans-serif;color:#fff;text-transform:uppercase;letter-spacing:-.01em;text-shadow:4px 4px 0 #14161c⟩
              "{{ clubName }}"
          - div
              ⟨font:700 22px/1.12 Ubuntu,sans-serif;color:#fff;text-transform:uppercase;text-wrap:balance;text-shadow:2px 2px 0 rgba(20,22,28,.55)⟩
              "Voelt iets niet goed? Laat het ons weten."
  - div
      ⟨width:100%;max-width:480px;margin:0 auto;padding:4px 20px 48px;display:flex;flex-direction:column;gap:30px⟩
    - div
        ⟨font-size:17px;line-height:1.5;color:#3a4866;text-wrap:pretty⟩
        "In de club, onderweg naar huis of bij jou in de buurt: als iets niet klopt, willen we het weten. Ook als het klein lijkt. De crew van {{ clubName }} leest elke melding."
    ▸ ALS {{ form }}
      - div
          ⟨display:flex;flex-direction:column;gap:14px⟩
        - div
            ⟨display:flex;align-items:stretch;gap:10px⟩
          - span
              ⟨width:6px;background:#2c5aa0⟩
          - span
              ⟨font:700 20px Ubuntu,sans-serif;text-transform:uppercase⟩
              "Zo werkt het"
        - div
            ⟨display:flex;flex-direction:column;gap:2px⟩
          - div
              ⟨display:flex;gap:16px;padding:16px;background:#eef3f9⟩
            - span
                ⟨font:700 34px/1 Ubuntu,sans-serif;color:#2c5aa0;width:24px;flex:none⟩
                "1"
            - div
                ⟨display:flex;flex-direction:column;gap:4px⟩
              - span
                  ⟨font-size:16px;font-weight:700⟩
                  "Jij meldt het"
              - span
                  ⟨font-size:14px;line-height:1.45;color:#3a4866⟩
                  "Klopt er iets niet of geeft iets je een vervelend gevoel? Meld het, in de club of onderweg naar huis. Voel je je op dit moment niet veilig? Loop dan naar de beveiliging of de bar."
          - div
              ⟨display:flex;gap:16px;padding:16px;background:#eef3f9⟩
            - span
                ⟨font:700 34px/1 Ubuntu,sans-serif;color:#2c5aa0;width:24px;flex:none⟩
                "2"
            - div
                ⟨display:flex;flex-direction:column;gap:4px⟩
              - span
                  ⟨font-size:16px;font-weight:700⟩
                  "Wij kijken wat er nodig is"
              - span
                  ⟨font-size:14px;line-height:1.45;color:#3a4866⟩
                  "We bekijken wat er nodig is om jou te helpen, of om te voorkomen dat het nog eens gebeurt."
          - div
              ⟨display:flex;gap:16px;padding:16px;background:#eef3f9⟩
            - span
                ⟨font:700 34px/1 Ubuntu,sans-serif;color:#2c5aa0;width:24px;flex:none⟩
                "3"
            - div
                ⟨display:flex;flex-direction:column;gap:4px⟩
              - span
                  ⟨font-size:16px;font-weight:700⟩
                  "Er komt actie"
              - span
                  ⟨font-size:14px;line-height:1.45;color:#3a4866⟩
                  "De beveiliging grijpt in, we houden een plek of persoon extra in de gaten, of we zorgen ervoor dat het de volgende keer niet meer gebeurt."
      - div
          ⟨display:flex;flex-direction:column;gap:28px⟩
        - div
            ⟨display:flex;flex-direction:column;gap:10px⟩
          - div
              ⟨display:flex;align-items:stretch;gap:10px⟩
            - span
                ⟨width:6px;background:#2c5aa0⟩
            - span
                ⟨font:700 20px Ubuntu,sans-serif;text-transform:uppercase⟩
                "Wat is er gebeurd?"
          - div
              ⟨display:flex;flex-direction:column;gap:8px⟩
            ▸ VOOR ELK t IN {{ types }}
              - button (onclick="{{ t.onClick }}")
                  ⟨min-height:64px;display:flex;align-items:center;gap:14px;border:2px solid {{ t.bd }};background:{{ t.bg }};color:{{ t.fg }};padding:10px 14px;cursor:pointer;text-align:left⟩
                - span
                    ⟨font-family:'Material Symbols Sharp';font-size:28px;line-height:1;font-feature-settings:'liga';flex:none⟩
                    "{{ t.icon }}"
                - span
                    ⟨display:flex;flex-direction:column;gap:3px;min-width:0⟩
                  - span
                      ⟨font-size:16px;font-weight:700⟩
                      "{{ t.label }}"
                  - span
                      ⟨font-size:13px;line-height:1.35;color:{{ t.sub }}⟩
                      "{{ t.example }}"
          - div
              ⟨font-size:13px;line-height:1.45;color:#56637d⟩
              "Jas kwijt of een vraag over de muziek? Daarvoor kun je terecht bij de garderobe of de bar."
        - div
            ⟨display:flex;flex-direction:column;gap:10px⟩
          - div
              ⟨display:flex;align-items:stretch;gap:10px⟩
            - span
                ⟨width:6px;background:#2c5aa0⟩
            - span
                ⟨font:700 20px Ubuntu,sans-serif;text-transform:uppercase⟩
                "Waar was het?"
          - div
              ⟨display:grid;grid-template-columns:1fr 1fr;gap:8px⟩
            ▸ VOOR ELK b IN {{ placeBtns }}
              - button (onclick="{{ b.onClick }}")
                  ⟨min-height:56px;display:flex;align-items:center;justify-content:center;gap:8px;border:2px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};cursor:pointer;font-size:15px;font-weight:700⟩
                - span
                    ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga'⟩
                    "{{ b.icon }}"
                "{{ b.label }}"
          ▸ ALS {{ inClub }}
            - div
                ⟨display:flex;flex-wrap:wrap;gap:6px⟩
              ▸ VOOR ELK c IN {{ spots }}
                - button (onclick="{{ c.onClick }}")
                    ⟨min-height:44px;padding:0 14px;border:2px solid {{ c.bd }};background:{{ c.bg }};color:{{ c.fg }};cursor:pointer;font-size:14px;font-weight:500⟩
                    "{{ c.label }}"
            - input (value="{{ loc }}" onchange="{{ onLoc }}" placeholder="Of beschrijf de plek")
                ⟨min-height:52px;border:2px solid #d5deea;background:#fff;color:#1d2b4a;padding:10px 12px;font-size:16px⟩
          ▸ ALS {{ onRoute }}
            - div
                ⟨display:flex;flex-direction:column;gap:8px⟩
              - div
                  ⟨font-size:14px;line-height:1.45;color:#3a4866⟩
                  "Tik op de kaart waar het gebeurde. Ongeveer is goed genoeg."
              - x-import (component-from-global-scope="sak-pin-picker" from="./sak-pin-picker.js" lat="52.1578" lng="4.4862")
                  ⟨width:100%;height:280px;border:2px solid #d5deea⟩
              - div
                  ⟨display:flex;align-items:center;gap:10px;flex-wrap:wrap⟩
                - button (onclick="{{ useGps }}")
                    ⟨min-height:44px;display:flex;align-items:center;gap:6px;padding:0 14px;border:2px solid #1d2b4a;background:#fff;color:#1d2b4a;cursor:pointer;font-size:14px;font-weight:700⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga'⟩
                      "my_location"
                  "Ik ben er nu"
                - span
                    ⟨font-size:13px;color:{{ pinCol }}⟩
                    "{{ pinText }}"
              - input (value="{{ loc }}" onchange="{{ onLoc }}" placeholder="Straat of herkenningspunt (mag)")
                  ⟨min-height:52px;border:2px solid #d5deea;background:#fff;color:#1d2b4a;padding:10px 12px;font-size:16px⟩
            - div
                ⟨display:flex;flex-direction:column;gap:8px;padding-top:8px⟩
              - span
                  ⟨font-size:15px;font-weight:700⟩
                  "Wanneer?"
              - div
                  ⟨display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px⟩
                ▸ VOOR ELK w IN {{ whenBtns }}
                  - button (onclick="{{ w.onClick }}")
                      ⟨min-height:48px;border:2px solid {{ w.bd }};background:{{ w.bg }};color:{{ w.fg }};cursor:pointer;font-size:14px;font-weight:500⟩
                      "{{ w.label }}"
              ▸ ALS {{ otherDay }}
                - input (type="date" value="{{ date }}" onchange="{{ onDate }}")
                    ⟨min-height:52px;border:2px solid #d5deea;background:#fff;color:#1d2b4a;padding:10px 12px;font-size:16px⟩
        - div
            ⟨display:flex;flex-direction:column;gap:10px⟩
          - div
              ⟨display:flex;align-items:stretch;gap:10px⟩
            - span
                ⟨width:6px;background:#2c5aa0⟩
            - span
                ⟨font:700 20px Ubuntu,sans-serif;text-transform:uppercase⟩
                "Vertel wat je zag"
          - textarea (value="{{ text }}" onchange="{{ onText }}" rows="4" placeholder="Wat gebeurde er? Hoe zag de persoon eruit, en welke kant ging hij of zij op?")
              ⟨border:2px solid #d5deea;background:#fff;color:#1d2b4a;padding:10px 12px;font-size:16px;line-height:1.4;resize:vertical⟩
          - div
              ⟨display:flex;flex-wrap:wrap;gap:8px;align-items:center⟩
            "{{ thumbs }}"
            - label
                ⟨min-height:48px;display:flex;align-items:center;gap:8px;border:2px solid #d5deea;background:#fff;padding:0 16px;cursor:pointer;font-size:14px;font-weight:500⟩
              - input (type="file" accept="image/*" capture="environment" multiple="" onchange="{{ onPhoto }}")
                  ⟨display:none⟩
              - span
                  ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga'⟩
                  "photo_camera"
              "Foto toevoegen (mag)"
        - div
            ⟨display:flex;flex-direction:column;gap:10px⟩
          - div
              ⟨display:flex;align-items:stretch;gap:10px⟩
            - span
                ⟨width:6px;background:#2c5aa0⟩
            - span
                ⟨font:700 20px Ubuntu,sans-serif;text-transform:uppercase⟩
                "Mogen we je nog iets vragen?"
          - div
              ⟨font-size:14px;line-height:1.5;color:#3a4866⟩
              "Soms hebben we nog vragen over een melding. Met je gegevens kunnen we contact met je opnemen. Zonder gegevens kan dat niet, maar je melding telt natuurlijk wel mee."
          - div
              ⟨display:grid;grid-template-columns:1fr 1fr;gap:8px⟩
            ▸ VOOR ELK b IN {{ contactBtns }}
              - button (onclick="{{ b.onClick }}")
                  ⟨min-height:52px;border:2px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};cursor:pointer;font-size:15px;font-weight:700⟩
                  "{{ b.label }}"
          ▸ ALS {{ withContact }}
            - div
                ⟨display:grid;grid-template-columns:1fr 1.3fr;gap:8px⟩
              - input (value="{{ name }}" onchange="{{ onName }}" placeholder="Voornaam")
                  ⟨min-height:52px;border:2px solid #d5deea;background:#fff;color:#1d2b4a;padding:10px 12px;font-size:16px⟩
              - input (value="{{ phone }}" onchange="{{ onPhone }}" type="tel" placeholder="06-nummer")
                  ⟨min-height:52px;border:2px solid #d5deea;background:#fff;color:#1d2b4a;padding:10px 12px;font-size:16px⟩
            - div
                ⟨font-size:13px;color:#56637d⟩
                "Alleen de beveiliging ziet je gegevens. We gebruiken ze alleen voor deze melding."
        - div
            ⟨display:flex;flex-direction:column;gap:8px⟩
          - button (onclick="{{ send }}")
              ⟨min-height:62px;border:0;background:{{ sendBg }};color:#fff;cursor:pointer;font:700 20px Ubuntu,sans-serif;text-transform:uppercase;box-shadow:4px 4px 0 #14161c⟩
              "Melding versturen"
          ▸ ALS {{ showMissing }}
            - div
                ⟨font-size:13px;color:#56637d;text-align:center;padding-top:6px⟩
                "{{ missing }}"
    ▸ ALS {{ done }}
      - div
          ⟨display:flex;flex-direction:column;gap:18px⟩
        - div
            ⟨display:flex;gap:16px;padding-top:6px⟩
          - div
              ⟨width:10px;background:#2c5aa0;flex:none⟩
          - div
              ⟨display:flex;flex-direction:column;gap:6px⟩
            - div
                ⟨font:700 32px/1 Ubuntu,sans-serif;text-transform:uppercase;text-wrap:balance⟩
                "Dankjewel voor je melding"
            - div
                ⟨font:500 14px Ubuntu,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#56637d⟩
                "Meldnummer {{ doneNo }}"
        - div
            ⟨display:flex;flex-direction:column;background:#eef3f9⟩
          ▸ VOOR ELK a IN {{ after }}
            - div
                ⟨display:flex;gap:12px;padding:14px;border-bottom:2px solid #fff⟩
              - span
                  ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga';color:#2c5aa0;flex:none⟩
                  "{{ a.icon }}"
              - span
                  ⟨font-size:15px;line-height:1.45⟩
                  "{{ a.text }}"
        - div
            ⟨display:grid;grid-template-columns:1fr 1fr;gap:8px⟩
          - button (onclick="{{ again }}")
              ⟨min-height:52px;padding:0 12px;border:2px solid #1d2b4a;background:transparent;color:#1d2b4a;cursor:pointer;font-size:14px;font-weight:700;text-transform:uppercase⟩
              "Nog iets melden"
          - a (href="SAK Meldkaart Club HiFi.html")
              ⟨min-height:52px;display:flex;align-items:center;justify-content:center;gap:6px;background:#1d2b4a;color:#fff;text-decoration:none;font-size:14px;font-weight:700;text-transform:uppercase⟩
            - span
                ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga'⟩
                "map"
            "Bekijk de meldkaart"
    - a (href="SAK Meldkaart Club HiFi.html")
        ⟨display:flex;align-items:center;gap:14px;padding:16px;border:2px solid #d5deea;color:#1d2b4a;text-decoration:none⟩
      - span
          ⟨font-family:'Material Symbols Sharp';font-size:30px;line-height:1;font-feature-settings:'liga';color:#6a54aa;flex:none⟩
          "map"
      - span
          ⟨display:flex;flex-direction:column;gap:3px;flex:1⟩
        - span
            ⟨font-size:16px;font-weight:700⟩
            "Meldkaart"
        - span
            ⟨font-size:13px;line-height:1.4;color:#56637d⟩
            "Zie waar rond {{ clubName }} de meeste overlast wordt gemeld. Anoniem en per blok."
      - span
          ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga';color:#8b97ab⟩
          "chevron_right"
  - div
      ⟨margin-top:auto;position:relative;background:#1d2b4a;color:#fff;padding:60px 0 36px;clip-path:polygon(0 22px,34% 0,72% 30px,100% 8px,100% 100%,0 100%)⟩
    - div
        ⟨max-width:480px;margin:0 auto;padding:0 20px;display:flex;flex-direction:column;gap:12px⟩
      - div
          ⟨font:700 18px Ubuntu,sans-serif;text-transform:uppercase⟩
          "Wat we met je melding doen"
      ▸ VOOR ELK p IN {{ privacy }}
        - div
            ⟨display:flex;gap:10px;font-size:14px;line-height:1.5;color:#d3dae6⟩
          - span
              ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1.3;font-feature-settings:'liga';color:#7fd3d6;flex:none⟩
              "{{ p.icon }}"
          - span
              "{{ p.text }}"
      - div
          ⟨font-size:12px;color:#8b97ab;line-height:1.5;padding-top:12px⟩
          "Beveiliging van {{ clubName }}. Meldingen worden verwerkt met SAK."
```
