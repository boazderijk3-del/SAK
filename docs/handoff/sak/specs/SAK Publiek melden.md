# Pixelspec · SAK Publiek melden

Gegenereerd uit `prototype/SAK Publiek melden.dc.html`. Volledige elementboom met **exacte inline-stijlen** en teksten; normatief. `{{ … }}` = dynamische waarde uit de logica onderaan het prototype. `▸ ALS` = alleen zichtbaar als de waarde waar is; `▸ VOOR ELK` = herhaald per item.

```
- div
    ⟨min-height:100vh;display:flex;flex-direction:column⟩
  - div
      ⟨height:6px;background:{{ accent }};flex:none⟩
  - div
      ⟨width:100%;max-width:480px;margin:0 auto;padding:18px 16px 40px;display:flex;flex-direction:column;gap:22px⟩
    - div
        ⟨display:flex;align-items:center;gap:12px⟩
      - image-slot (id="publiek-logo" shape="rect" fit="contain" placeholder="Logo")
          ⟨width:52px;height:52px;flex:none;background:#fff;border:1px solid #d6d2ca⟩
      - div
          ⟨display:flex;flex-direction:column;gap:2px;min-width:0⟩
        - span
            ⟨font:700 15px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
            "{{ orgName }}"
        - span
            ⟨font-size:13px;color:#6a6f74⟩
            "{{ projName }}"
    - div
        ⟨display:flex;flex-direction:column;gap:8px⟩
      - h1
          ⟨margin:0;font:700 32px/1.02 'Barlow Condensed',sans-serif;letter-spacing:.02em;text-transform:uppercase;text-wrap:balance⟩
          "{{ copy.h1 }}"
      - div
          ⟨font-size:16px;line-height:1.45;color:#4a4f54;text-wrap:pretty⟩
          "{{ copy.intro }}"
    - a (href="tel:112")
        ⟨display:flex;align-items:center;gap:12px;padding:14px;background:#16191c;color:#fff;text-decoration:none;font-size:16px⟩
      - span
          ⟨font-family:'Material Symbols Sharp';font-size:26px;line-height:1;font-feature-settings:'liga';color:#ff6b5e⟩
          "call"
      - span
          ⟨flex:1⟩
        "Levensgevaar? Bel eerst"
        - strong
            "112"
        "."
      - span
          ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga';color:#8a8f94⟩
          "chevron_right"
    ▸ ALS {{ form }}
      - div
          ⟨display:flex;flex-direction:column;gap:12px⟩
        - div
            ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#6a6f74⟩
            "Zo werkt het"
        - div
            ⟨display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px⟩
          ▸ VOOR ELK st IN {{ steps }}
            - div
                ⟨display:flex;flex-direction:column;gap:8px;padding:12px 10px;background:#fff;border:1px solid #d6d2ca⟩
              - span
                  ⟨width:26px;height:26px;display:flex;align-items:center;justify-content:center;background:{{ accent }};color:#fff;font:700 15px 'Barlow Condensed',sans-serif⟩
                  "{{ st.n }}"
              - span
                  ⟨font-size:14px;font-weight:600;line-height:1.3⟩
                  "{{ st.title }}"
              - span
                  ⟨font-size:13px;line-height:1.35;color:#6a6f74⟩
                  "{{ st.text }}"
      - div
          ⟨display:flex;flex-direction:column;gap:18px⟩
        - div
            ⟨display:flex;flex-direction:column;gap:8px⟩
          - div
              ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.14em;text-transform:uppercase⟩
              "1 · Wat is er aan de hand?"
          - div
              ⟨display:flex;flex-direction:column;gap:8px⟩
            ▸ VOOR ELK t IN {{ types }}
              - button (onclick="{{ t.onClick }}")
                  ⟨min-height:64px;display:flex;align-items:center;gap:12px;border:2px solid {{ t.bd }};background:{{ t.bg }};color:{{ t.fg }};padding:10px 12px;cursor:pointer;text-align:left⟩
                - span
                    ⟨font-family:'Material Symbols Sharp';font-size:26px;line-height:1;font-feature-settings:'liga';flex:none⟩
                    "{{ t.icon }}"
                - span
                    ⟨display:flex;flex-direction:column;gap:2px;min-width:0⟩
                  - span
                      ⟨font-size:16px;font-weight:700⟩
                      "{{ t.label }}"
                  - span
                      ⟨font-size:13px;line-height:1.35;color:{{ t.sub }}⟩
                      "{{ t.example }}"
          - div
              ⟨font-size:13px;line-height:1.45;color:#6a6f74⟩
              "{{ copy.notFor }}"
        - label
            ⟨display:flex;flex-direction:column;gap:6px⟩
          - span
              ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.14em;text-transform:uppercase⟩
              "2 · Waar?"
          - input (value="{{ loc }}" onchange="{{ onLoc }}" placeholder="Bijv. bij de bar, toiletten, ingang")
              ⟨min-height:50px;border:2px solid #d6d2ca;background:#fff;color:#16191c;padding:10px 12px;font-size:16px⟩
        - label
            ⟨display:flex;flex-direction:column;gap:6px⟩
          - span
              ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.14em;text-transform:uppercase⟩
              "3 · Wat zie je?"
          - textarea (value="{{ text }}" onchange="{{ onText }}" rows="4" placeholder="Wat gebeurt er, hoeveel mensen, hoe zien ze eruit?")
              ⟨border:2px solid #d6d2ca;background:#fff;color:#16191c;padding:10px 12px;font-size:16px;resize:vertical⟩
        - div
            ⟨display:flex;flex-wrap:wrap;gap:8px;align-items:center⟩
          "{{ thumbs }}"
          - label
              ⟨min-height:50px;display:flex;align-items:center;gap:8px;border:2px solid #d6d2ca;background:#fff;padding:0 16px;cursor:pointer;font-size:15px;font-weight:600⟩
            - input (type="file" accept="image/*" capture="environment" multiple="" onchange="{{ onPhoto }}")
                ⟨display:none⟩
            - span
                ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga'⟩
                "photo_camera"
            "Foto toevoegen (mag)"
        - div
            ⟨display:flex;flex-direction:column;gap:8px⟩
          - div
              ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.14em;text-transform:uppercase⟩
              "4 · Mogen we je terugbellen?"
          - div
              ⟨display:grid;grid-template-columns:1fr 1fr;gap:8px⟩
            ▸ VOOR ELK b IN {{ anonBtns }}
              - button (onclick="{{ b.onClick }}")
                  ⟨min-height:52px;border:2px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};cursor:pointer;font-size:15px;font-weight:600⟩
                  "{{ b.label }}"
          ▸ ALS {{ withContact }}
            - div
                ⟨display:grid;grid-template-columns:1fr 1.3fr;gap:8px⟩
              - input (value="{{ name }}" onchange="{{ onName }}" placeholder="Voornaam")
                  ⟨min-height:50px;border:2px solid #d6d2ca;background:#fff;color:#16191c;padding:10px 12px;font-size:16px⟩
              - input (value="{{ phone }}" onchange="{{ onPhone }}" type="tel" placeholder="06-nummer")
                  ⟨min-height:50px;border:2px solid #d6d2ca;background:#fff;color:#16191c;padding:10px 12px;font-size:16px⟩
          - div
              ⟨font-size:13px;color:#6a6f74⟩
              "{{ anonNote }}"
        - div
            ⟨display:flex;flex-direction:column;gap:8px⟩
          - button (onclick="{{ send }}")
              ⟨min-height:60px;border:0;background:{{ sendBg }};color:#fff;cursor:pointer;font:700 18px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
              "Melding versturen"
          ▸ ALS {{ showMissing }}
            - div
                ⟨font-size:13px;color:#6a6f74;text-align:center⟩
                "{{ missing }}"
    ▸ ALS {{ done }}
      - div
          ⟨display:flex;flex-direction:column;gap:16px⟩
        - div
            ⟨display:flex;flex-direction:column;align-items:center;gap:10px;padding:22px 10px 6px;text-align:center⟩
          - span
              ⟨font-family:'Material Symbols Sharp';font-size:64px;line-height:1;font-feature-settings:'liga';color:#2f9e5f⟩
              "check_circle"
          - div
              ⟨font:700 28px 'Barlow Condensed',sans-serif;text-transform:uppercase⟩
              "{{ copy.doneTitle }}"
          - div
              ⟨font:600 14px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#6a6f74⟩
              "Meldnummer {{ doneNo }}"
        - div
            ⟨display:flex;flex-direction:column;background:#fff;border:1px solid #d6d2ca⟩
          ▸ VOOR ELK a IN {{ after }}
            - div
                ⟨display:flex;gap:12px;padding:14px;border-bottom:1px solid #ebe8e1⟩
              - span
                  ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga';color:{{ accent }};flex:none⟩
                  "{{ a.icon }}"
              - span
                  ⟨font-size:15px;line-height:1.4⟩
                  "{{ a.text }}"
        - button (onclick="{{ again }}")
            ⟨min-height:52px;padding:0 20px;border:2px solid #16191c;background:transparent;cursor:pointer;font-size:15px;font-weight:600⟩
            "Nog iets melden"
    - div
        ⟨display:flex;flex-direction:column;gap:10px;padding-top:6px;border-top:1px solid #d6d2ca⟩
      - div
          ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#6a6f74;padding-top:14px⟩
          "Wat we met je melding doen"
      ▸ VOOR ELK p IN {{ privacy }}
        - div
            ⟨display:flex;gap:10px;font-size:14px;line-height:1.45;color:#4a4f54⟩
          - span
              ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1.3;font-feature-settings:'liga';color:#6a6f74;flex:none⟩
              "{{ p.icon }}"
          - span
              "{{ p.text }}"
    - div
        ⟨font-size:12px;color:#8a8f94;line-height:1.5⟩
        "Beveiliging van {{ projName }} in opdracht van {{ orgName }}. Meldingen worden verwerkt met SAK."
```
