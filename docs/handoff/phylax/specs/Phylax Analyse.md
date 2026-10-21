# Pixelspec · Phylax Analyse

Gegenereerd uit `prototype/Phylax Analyse.dc.html`. Volledige elementboom met **exacte inline-stijlen** en teksten; normatief. `{{ … }}` = dynamische waarde uit de logica onderaan het prototype. `▸ ALS` = alleen zichtbaar als de waarde waar is; `▸ VOOR ELK` = herhaald per item.

```
- section (id="t1")
    ⟨padding:48px 56px 64px;display:flex;flex-direction:column;gap:28px⟩
  - div
      ⟨display:flex;flex-direction:column;gap:12px;max-width:1100px⟩
    - div
        ⟨display:flex;align-items:baseline;gap:10px⟩
      - a (href="#t1")
          ⟨font-family:'JetBrains Mono',monospace;font-size:11px;padding:3px 7px;background:#e8eaf0;color:#07080b;border-radius:4px⟩
          "1"
      - span
          ⟨font-family:'JetBrains Mono',monospace;font-size:12px;color:#8b909b⟩
          "PHYLAX · ONDERZOEK → ANALYSE · KLIKBAAR PROTOTYPE"
    - h1
        ⟨margin:0;font-size:36px;line-height:1.15;font-weight:600;letter-spacing:-.02em;text-wrap:balance⟩
        "Materiaal erin, Phylax herkent en labelt, de onderzoeker beslist."
    - div
        ⟨font-size:14px;line-height:1.55;color:#b6bcc6;max-width:820px⟩
        "Analyse is een onderdeel van Onderzoek, dus het menu groeit niet. Voorbeeldzaak is verzonnen: stalking via WhatsApp, Instagram en e-mail, aangeleverd door de melder met toestemming. Wissel rechtsboven van rol om te zien wat onderzoeker, reviewer en FG kunnen."
  - div (id="1a")
      ⟨display:flex;flex-direction:column;gap:10px⟩
    - div
        ⟨display:flex;align-items:baseline;gap:8px⟩
      - a (href="#1a")
          ⟨font-family:'JetBrains Mono',monospace;font-size:11px;padding:3px 7px;background:rgba(255,255,255,.1);color:#e8eaf0;border-radius:4px⟩
          "1a"
      - span
          ⟨font-size:13px;color:#8b909b⟩
          "Computer · 1440 × 900"
    - div
        ⟨width:1440px;height:900px;background:#0b0d12;border:1px solid rgba(255,255,255,.08);border-radius:10px;overflow:hidden;display:grid;grid-template-columns:220px minmax(0,1fr)⟩
      - aside
          ⟨background:#0e1117;border-right:1px solid rgba(255,255,255,.06);display:flex;flex-direction:column;padding:18px 14px;gap:18px⟩
        - div
            ⟨display:flex;align-items:center;gap:10px;padding:0 6px⟩
          - div
              ⟨width:22px;height:22px;border-radius:6px;border:2px solid #35d0c4⟩
          - div
              ⟨font-size:18px;font-weight:600;letter-spacing:.02em⟩
              "Phylax"
        - div
            ⟨padding:10px 12px;border-radius:8px;background:#151922;border:1px solid rgba(255,255,255,.08);display:flex;flex-direction:column;gap:3px⟩
          - div
              ⟨font-family:'JetBrains Mono',monospace;font-size:10px;color:#8b909b;letter-spacing:.06em⟩
              "OPDRACHTGEVER"
          - div
              ⟨font-size:13px;font-weight:500⟩
              "Particulier · melder"
        - nav
            ⟨display:flex;flex-direction:column;gap:2px⟩
          ▸ VOOR ELK n IN {{ nav }}
            - div
                ⟨display:flex;justify-content:space-between;padding:9px 12px;border-radius:7px;font-size:13px;background:{{ n.bg }};color:{{ n.col }}⟩
              - span
                  "{{ n.label }}"
              - span
                  ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                  "{{ n.count }}"
        - div
            ⟨margin-top:auto;padding:12px;border-radius:8px;border:1px solid rgba(255,255,255,.06);display:flex;flex-direction:column;gap:6px⟩
          - div
              ⟨font-family:'JetBrains Mono',monospace;font-size:10px;color:#8b909b;letter-spacing:.06em⟩
              "INGELOGD ALS"
          - div
              ⟨font-size:13px⟩
              "{{ roleName }}"
          - div
              ⟨font-size:11px;color:#8b909b;line-height:1.5⟩
              "{{ roleHint }}"
      - div
          ⟨display:flex;flex-direction:column;min-width:0;min-height:0⟩
        - header
            ⟨height:52px;flex:none;border-bottom:1px solid rgba(255,255,255,.06);display:flex;align-items:center;justify-content:space-between;padding:0 20px;gap:16px⟩
          - div
              ⟨font-size:13px;color:#b6bcc6⟩
            "Onderzoek / ONZ-014 /"
            - span
                ⟨color:#e8eaf0⟩
                "Analyse"
          - div
              ⟨display:flex;gap:4px;padding:3px;border-radius:8px;background:#12151c⟩
            ▸ VOOR ELK r IN {{ roles }}
              - div (onclick="{{ r.pick }}")
                  ⟨font-size:12px;padding:5px 10px;border-radius:6px;cursor:pointer;background:{{ r.bg }};color:{{ r.col }}⟩
                  "{{ r.label }}"
        - div
            ⟨flex:none;padding:18px 28px 0;display:flex;flex-direction:column;gap:14px;border-bottom:1px solid rgba(255,255,255,.06)⟩
          - div
              ⟨display:flex;justify-content:space-between;align-items:flex-end;gap:20px⟩
            - div
                ⟨display:flex;flex-direction:column;gap:6px;min-width:0⟩
              - div
                  ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                  "ONZ-014 · STALKING · LOPEND"
              - div
                  ⟨font-size:22px;font-weight:600;letter-spacing:-.01em⟩
                  "Berichten van onbekende afzender aan melder"
            - div
                ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#b98cff;line-height:1.6;text-align:right⟩
              "toestemming melder · 03-10-2026 · doel: patroon en herkomst berichten"
              - br
              "bewaartermijn tot 03-10-2027 · derden gepseudonimiseerd"
          - div
              ⟨display:flex;gap:2px⟩
            ▸ VOOR ELK t IN {{ tabs }}
              - div (onclick="{{ t.go }}")
                  ⟨display:flex;align-items:center;gap:8px;padding:10px 14px;font-size:13px;cursor:pointer;color:{{ t.col }};border-bottom:2px solid {{ t.bd }}⟩
                - span
                    "{{ t.label }}"
                - span
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:{{ t.ccol }}⟩
                    "{{ t.count }}"
        ▸ ALS {{ vMat }}
          - div
              ⟨flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) 360px⟩
            - div
                ⟨overflow:auto;padding:24px 28px;display:flex;flex-direction:column;gap:14px⟩
              - div
                  ⟨display:flex;justify-content:space-between;align-items:baseline⟩
                - div
                    ⟨font-size:15px;font-weight:600⟩
                    "Bronnen"
                - div
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                    "origineel bewaard · alleen-lezen · hash bij binnenkomst"
              - div
                  ⟨display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.06)⟩
                - div
                    ⟨display:grid;grid-template-columns:minmax(0,1fr) 170px 150px 110px 90px;gap:12px;padding:8px 0;font-size:11px;color:#8b909b;border-bottom:1px solid rgba(255,255,255,.05)⟩
                  - span
                      "Bestand"
                  - span
                      "Soort"
                  - span
                      "Inhoud"
                  - span
                      "SHA-256"
                  - span
                      ⟨text-align:right⟩
                      "Status"
                ▸ VOOR ELK s IN {{ sources }}
                  - div
                      ⟨display:grid;grid-template-columns:minmax(0,1fr) 170px 150px 110px 90px;gap:12px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.05);align-items:baseline⟩
                    - div
                        ⟨display:flex;flex-direction:column;gap:3px;min-width:0⟩
                      - span
                          ⟨font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap⟩
                          "{{ s.naam }}"
                      - span
                          ⟨font-size:11px;color:#8b909b⟩
                          "aangeleverd door {{ s.door }} · {{ s.datum }}"
                    - span
                        ⟨font-size:12px;color:#b6bcc6⟩
                        "{{ s.fmt }}"
                    - span
                        ⟨font-family:'JetBrains Mono',monospace;font-size:12px⟩
                        "{{ s.items }}"
                    - span
                        ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                        "{{ s.hash }}"
                    - span
                        ⟨font-family:'JetBrains Mono',monospace;font-size:11px;text-align:right;color:{{ s.scol }}⟩
                        "{{ s.st }}"
            - div
                ⟨border-left:1px solid rgba(255,255,255,.06);background:#0e1117;overflow:auto;padding:24px 22px;display:flex;flex-direction:column;gap:18px⟩
              - div
                  ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                  "MATERIAAL TOEVOEGEN"
              - div
                  ⟨border:1px dashed rgba(255,255,255,.18);border-radius:12px;padding:26px 18px;display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center⟩
                - div
                    ⟨font-size:14px⟩
                    "Sleep bestanden hierheen"
                - div
                    ⟨font-size:12px;color:#8b909b⟩
                    "Phylax herkent het formaat zelf"
              - div
                  ⟨display:flex;flex-direction:column;gap:6px⟩
                - div
                    ⟨font-size:12px;color:#8b909b⟩
                    "Of kies een formaat"
                - div
                    ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                  ▸ VOOR ELK f IN {{ formats }}
                    - div (onclick="{{ f.add }}" style-hover="border-color:#35d0c4;color:#e8eaf0")
                        ⟨font-size:12px;padding:6px 10px;border-radius:6px;border:1px solid rgba(255,255,255,.14);color:#b6bcc6;cursor:pointer⟩
                        "{{ f.label }}"
              - div
                  ⟨display:flex;flex-direction:column;gap:8px;padding-top:6px;border-top:1px solid rgba(255,255,255,.06)⟩
                - div
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b;padding-top:10px⟩
                    "BIJ ELKE BRON"
                ▸ VOOR ELK i IN {{ intakeSteps }}
                  - div
                      ⟨display:grid;grid-template-columns:18px minmax(0,1fr);gap:8px;font-size:13px;line-height:1.45;color:#b6bcc6⟩
                    - span
                        ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#35d0c4⟩
                        "{{ i.n }}"
                    - span
                        "{{ i.t }}"
        ▸ ALS {{ vHerk }}
          - div
              ⟨flex:1;min-height:0;display:grid;grid-template-columns:400px minmax(0,1fr)⟩
            - div
                ⟨border-right:1px solid rgba(255,255,255,.06);display:flex;flex-direction:column;min-height:0⟩
              - div
                  ⟨padding:14px 16px;display:flex;flex-direction:column;gap:10px;border-bottom:1px solid rgba(255,255,255,.06)⟩
                - div
                    ⟨display:flex;justify-content:space-between;align-items:baseline⟩
                  - div
                      ⟨font-size:15px;font-weight:600⟩
                      "Herkend"
                  - div
                      ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#e2ab44⟩
                      "{{ openCount }} te beoordelen"
                - div
                    ⟨display:flex;gap:4px;padding:3px;border-radius:8px;background:#12151c⟩
                  ▸ VOOR ELK f IN {{ catFilters }}
                    - div (onclick="{{ f.pick }}")
                        ⟨flex:1;text-align:center;font-size:12px;padding:6px 4px;border-radius:6px;cursor:pointer;background:{{ f.bg }};color:{{ f.col }}⟩
                        "{{ f.label }}"
              - div
                  ⟨overflow:auto;display:flex;flex-direction:column⟩
                ▸ VOOR ELK e IN {{ entList }}
                  - div (onclick="{{ e.pick }}")
                      ⟨display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;padding:11px 16px;border-bottom:1px solid rgba(255,255,255,.05);cursor:pointer;background:{{ e.bg }};align-items:center⟩
                    - div
                        ⟨display:flex;flex-direction:column;gap:3px;min-width:0⟩
                      - span
                          ⟨font-size:11px;color:#8b909b⟩
                          "{{ e.soort }}"
                      - span
                          ⟨font-family:'JetBrains Mono',monospace;font-size:13px;color:#e2ab44;overflow:hidden;text-overflow:ellipsis;white-space:nowrap⟩
                          "{{ e.v }}"
                    - span
                        ⟨font-family:'JetBrains Mono',monospace;font-size:10px;padding:2px 6px;border-radius:4px;border:1px solid {{ e.scol }};color:{{ e.scol }}⟩
                        "{{ e.st }}"
            - div
                ⟨overflow:auto;padding:28px 36px;display:flex;flex-direction:column;gap:22px⟩
              - div
                  ⟨display:flex;flex-direction:column;gap:8px⟩
                - div
                    ⟨display:flex;gap:10px;align-items:center;font-family:'JetBrains Mono',monospace;font-size:11px⟩
                  - span
                      ⟨color:#8b909b⟩
                      "{{ ent.soort }} · {{ ent.cat }}"
                  - span
                      ⟨padding:2px 7px;border-radius:4px;border:1px solid {{ ent.scol }};color:{{ ent.scol }}⟩
                      "{{ ent.st }}"
                - div
                    ⟨font-family:'JetBrains Mono',monospace;font-size:28px;color:#e2ab44;word-break:break-all⟩
                    "{{ ent.v }}"
                - div
                    ⟨font-family:'JetBrains Mono',monospace;font-size:12px;color:#b6bcc6⟩
                    "{{ ent.val }}"
              - div
                  ⟨display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.06);border-radius:10px;overflow:hidden⟩
                - div
                    ⟨background:#0b0d12;padding:12px 14px;display:flex;flex-direction:column;gap:4px⟩
                  - span
                      ⟨font-size:11px;color:#8b909b⟩
                      "Hoort bij"
                  - span
                      ⟨font-size:13px⟩
                      "{{ ent.persoon }}"
                - div
                    ⟨background:#0b0d12;padding:12px 14px;display:flex;flex-direction:column;gap:4px⟩
                  - span
                      ⟨font-size:11px;color:#8b909b⟩
                      "Eerst / laatst gezien"
                  - span
                      ⟨font-family:'JetBrains Mono',monospace;font-size:13px⟩
                      "{{ ent.first }} → {{ ent.last }}"
                - div
                    ⟨background:#0b0d12;padding:12px 14px;display:flex;flex-direction:column;gap:4px⟩
                  - span
                      ⟨font-size:11px;color:#8b909b⟩
                      "Herkend door"
                  - span
                      ⟨font-size:13px⟩
                      "{{ ent.door }}"
              - div
                  ⟨display:flex;flex-direction:column;gap:10px⟩
                - div
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                    "GEVONDEN IN"
                - div
                    ⟨display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.06)⟩
                  ▸ VOOR ELK c IN {{ ent.ctx }}
                    - div
                        ⟨display:grid;grid-template-columns:200px minmax(0,1fr);gap:14px;padding:11px 0;border-bottom:1px solid rgba(255,255,255,.05)⟩
                      - span
                          ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                          "{{ c.b }}"
                      - span
                          ⟨font-size:14px;line-height:1.45⟩
                          "{{ c.q }}"
              - div
                  ⟨padding:12px 14px;border-radius:8px;border:1px solid rgba(255,255,255,.08);display:grid;grid-template-columns:120px minmax(0,1fr);gap:10px;align-items:baseline⟩
                - span
                    ⟨font-size:12px;color:#8b909b⟩
                    "Opzoeking"
                - span
                    ⟨font-size:13px;color:#b6bcc6;line-height:1.45⟩
                    "{{ ent.lookup }}"
              - div
                  ⟨display:flex;gap:8px;align-items:center⟩
                ▸ ALS {{ canDecide }}
                  - div (onclick="{{ confirmEnt }}")
                      ⟨padding:10px 16px;border-radius:8px;background:#35d0c4;color:#04211f;font-size:13px;font-weight:600;cursor:pointer⟩
                      "{{ okLabel }}"
                  - div (onclick="{{ rejectEnt }}")
                      ⟨padding:10px 16px;border-radius:8px;border:1px solid rgba(255,255,255,.14);font-size:13px;cursor:pointer⟩
                      "{{ noLabel }}"
                ▸ ALS {{ readOnly }}
                  - div
                      ⟨font-size:13px;color:#8b909b⟩
                      "Alleen inzage. De FG ziet wat er is vastgelegd en waarom, maar beslist niet over gegevens."
        ▸ ALS {{ vGesp }}
          - div
              ⟨flex:1;min-height:0;display:grid;grid-template-columns:250px minmax(0,1fr) 330px⟩
            - div
                ⟨border-right:1px solid rgba(255,255,255,.06);overflow:auto;display:flex;flex-direction:column;padding:10px 0⟩
              ▸ VOOR ELK t IN {{ threads }}
                - div (onclick="{{ t.pick }}")
                    ⟨padding:10px 16px;display:flex;flex-direction:column;gap:3px;cursor:pointer;background:{{ t.bg }}⟩
                  - span
                      ⟨font-family:'JetBrains Mono',monospace;font-size:10px;color:#8b909b;letter-spacing:.04em⟩
                      "{{ t.app }}"
                  - div
                      ⟨display:flex;justify-content:space-between;gap:8px⟩
                    - span
                        ⟨font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap⟩
                        "{{ t.naam }}"
                    - span
                        ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                        "{{ t.n }}"
            - div
                ⟨display:flex;flex-direction:column;min-height:0⟩
              - div
                  ⟨padding:12px 20px;border-bottom:1px solid rgba(255,255,255,.06);display:flex;flex-wrap:wrap;gap:6px;align-items:center⟩
                - span
                    ⟨font-size:12px;color:#8b909b;margin-right:4px⟩
                    "Label"
                ▸ VOOR ELK l IN {{ labelFilters }}
                  - div (onclick="{{ l.pick }}")
                      ⟨font-size:12px;padding:4px 9px;border-radius:6px;cursor:pointer;border:1px solid {{ l.bd }};color:{{ l.col }}⟩
                      "{{ l.label }}"
              - div
                  ⟨flex:1;min-height:0;overflow:auto;padding:16px 20px;display:flex;flex-direction:column;gap:12px⟩
                ▸ VOOR ELK m IN {{ msgs }}
                  - div
                      ⟨display:flex;flex-direction:column;gap:6px;align-items:{{ m.align }}⟩
                    - div
                        ⟨display:flex;gap:8px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                      - span
                          "{{ m.wie }}"
                      - span
                          "{{ m.d }} {{ m.t }}"
                      - span
                          ⟨color:#b98cff⟩
                          "{{ m.nacht }}"
                    - div
                        ⟨max-width:520px;padding:10px 14px;border-radius:10px;font-size:14px;line-height:1.45;background:{{ m.bg }};border:1px solid rgba(255,255,255,.06)⟩
                        "{{ m.x }}"
                    - div
                        ⟨display:flex;flex-wrap:wrap;gap:5px;justify-content:{{ m.align }}⟩
                      ▸ VOOR ELK l IN {{ m.labels }}
                        - div (onclick="{{ l.toggle }}")
                            ⟨font-size:11px;padding:3px 8px;border-radius:5px;cursor:pointer;border:1px {{ l.bs }} {{ l.col }};color:{{ l.col }};background:{{ l.bg }}⟩
                            "{{ l.k }} {{ l.c }}"
                      ▸ VOOR ELK e IN {{ m.ents }}
                        - span
                            ⟨font-family:'JetBrains Mono',monospace;font-size:11px;padding:3px 8px;border-radius:5px;background:rgba(226,171,68,.1);color:#e2ab44⟩
                            "{{ e }}"
            - div
                ⟨border-left:1px solid rgba(255,255,255,.06);background:#0e1117;overflow:auto;padding:22px 20px;display:flex;flex-direction:column;gap:22px⟩
              - div
                  ⟨display:flex;flex-direction:column;gap:10px⟩
                - div
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                    "BERICHTEN PER DAG · SEP 2026"
                - div
                    ⟨height:90px;display:flex;align-items:flex-end;gap:3px⟩
                  ▸ VOOR ELK b IN {{ bars }}
                    - div
                        ⟨flex:1;border-radius:2px 2px 0 0;height:{{ b.h }};background:{{ b.col }}⟩
                - div
                    ⟨display:flex;justify-content:space-between;font-family:'JetBrains Mono',monospace;font-size:10px;color:#5c616b⟩
                  - span
                      "1"
                  - span
                      "15"
                  - span
                      "30"
              - div
                  ⟨display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.06)⟩
                ▸ VOOR ELK p IN {{ patterns }}
                  - div
                      ⟨display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.05);align-items:baseline⟩
                    - span
                        ⟨font-size:13px;color:#b6bcc6⟩
                        "{{ p.k }}"
                    - span
                        ⟨font-family:'JetBrains Mono',monospace;font-size:13px⟩
                        "{{ p.v }}"
              ▸ ALS {{ showLlm }}
                - div
                    ⟨display:flex;flex-direction:column;gap:8px;padding:14px;border-radius:10px;background:#14121c;border:1px solid rgba(185,140,255,.25)⟩
                  - div
                      ⟨display:flex;justify-content:space-between;font-family:'JetBrains Mono',monospace;font-size:11px⟩
                    - span
                        ⟨color:#b98cff⟩
                        "SAMENVATTING · VOORSTEL TAALMODEL"
                  - div
                      ⟨font-size:13px;line-height:1.55⟩
                      "{{ summary }}"
                  - div
                      ⟨font-size:11px;color:#8b909b;line-height:1.5⟩
                      "Controleer tegen de berichten. Wordt pas onderdeel van het dossier na bevestiging."
              - div
                  ⟨font-size:12px;color:#8b909b;line-height:1.5⟩
                  "Stippellijn is een voorstel. Klik op een label om het te bevestigen of terug te zetten."
        ▸ ALS {{ vTijd }}
          - div
              ⟨flex:1;min-height:0;display:grid;grid-template-columns:240px minmax(0,1fr)⟩
            - div
                ⟨border-right:1px solid rgba(255,255,255,.06);overflow:auto;padding:20px 18px;display:flex;flex-direction:column;gap:18px⟩
              - div
                  ⟨display:flex;flex-direction:column;gap:6px⟩
                - div
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                    "SOORT"
                ▸ VOOR ELK k IN {{ tlKinds }}
                  - div (onclick="{{ k.toggle }}")
                      ⟨display:flex;justify-content:space-between;padding:7px 10px;border-radius:6px;font-size:13px;cursor:pointer;background:{{ k.bg }};color:{{ k.col }}⟩
                    - span
                        "{{ k.label }}"
                    - span
                        ⟨font-family:'JetBrains Mono',monospace;font-size:11px⟩
                        "{{ k.n }}"
              - div
                  ⟨display:flex;flex-direction:column;gap:6px⟩
                - div
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                    "AFZENDER / ACCOUNT"
                ▸ VOOR ELK k IN {{ tlActors }}
                  - div (onclick="{{ k.toggle }}")
                      ⟨display:flex;justify-content:space-between;padding:7px 10px;border-radius:6px;font-size:12px;cursor:pointer;background:{{ k.bg }};color:{{ k.col }}⟩
                    - span
                        ⟨font-family:'JetBrains Mono',monospace⟩
                        "{{ k.label }}"
                    - span
                        ⟨font-family:'JetBrains Mono',monospace;font-size:11px⟩
                        "{{ k.n }}"
              - div (onclick="{{ toggleOnlyLab }}")
                  ⟨display:flex;gap:8px;align-items:center;font-size:13px;cursor:pointer;color:#b6bcc6⟩
                - span
                    ⟨width:14px;height:14px;border-radius:4px;border:1px solid {{ olBd }};background:{{ olBg }}⟩
                "Alleen met label"
            - div
                ⟨overflow:auto;padding:22px 36px;display:flex;flex-direction:column;gap:22px⟩
              ▸ VOOR ELK d IN {{ tlDays }}
                - div
                    ⟨display:grid;grid-template-columns:110px minmax(0,1fr);gap:20px⟩
                  - div
                      ⟨display:flex;flex-direction:column;gap:2px;padding-top:2px⟩
                    - span
                        ⟨font-size:14px;font-weight:600⟩
                        "{{ d.dag }}"
                    - span
                        ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                        "{{ d.n }} items"
                  - div
                      ⟨display:flex;flex-direction:column;border-left:1px solid rgba(255,255,255,.1)⟩
                    ▸ VOOR ELK i IN {{ d.items }}
                      - div
                          ⟨display:grid;grid-template-columns:14px 52px minmax(0,1fr) 170px;gap:10px;padding:8px 0 8px 0;align-items:baseline⟩
                        - span
                            ⟨width:9px;height:9px;border-radius:50%;margin-left:-5px;background:{{ i.dot }}⟩
                        - span
                            ⟨font-family:'JetBrains Mono',monospace;font-size:12px;color:#b6bcc6⟩
                            "{{ i.t }}"
                        - div
                            ⟨display:flex;flex-direction:column;gap:5px;min-width:0⟩
                          - div
                              ⟨font-size:14px;line-height:1.45⟩
                              "{{ i.x }}"
                          - div
                              ⟨display:flex;flex-wrap:wrap;gap:5px;align-items:center⟩
                            - span
                                ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                                "{{ i.wie }}"
                            ▸ VOOR ELK l IN {{ i.labels }}
                              - span
                                  ⟨font-size:11px;padding:2px 7px;border-radius:5px;border:1px {{ l.bs }} {{ l.col }};color:{{ l.col }}⟩
                                  "{{ l.k }}"
                        - span
                            ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b;text-align:right⟩
                            "{{ i.bron }}"
        ▸ ALS {{ vGeg }}
          - div
              ⟨flex:1;min-height:0;overflow:auto;padding:22px 28px;display:flex;flex-direction:column;gap:14px⟩
            - div
                ⟨display:flex;justify-content:space-between;align-items:center⟩
              - div
                  ⟨display:flex;gap:4px;padding:3px;border-radius:8px;background:#12151c⟩
                ▸ VOOR ELK f IN {{ catFilters }}
                  - div (onclick="{{ f.pick }}")
                      ⟨text-align:center;font-size:12px;padding:6px 12px;border-radius:6px;cursor:pointer;background:{{ f.bg }};color:{{ f.col }}⟩
                      "{{ f.label }}"
              - div
                  ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                  "alleen bevestigde gegevens · {{ gegCount }}"
            - div
                ⟨display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.06)⟩
              - div
                  ⟨display:grid;grid-template-columns:130px minmax(0,1.3fr) minmax(0,1fr) 150px 70px 110px;gap:12px;padding:8px 0;font-size:11px;color:#8b909b;border-bottom:1px solid rgba(255,255,255,.05)⟩
                - span
                    "Soort"
                - span
                    "Waarde"
                - span
                    "Hoort bij"
                - span
                    "Eerst → laatst"
                - span
                    ⟨text-align:right⟩
                    "bronnen"
                - span
                    ⟨text-align:right⟩
                    "Dingen"
              ▸ VOOR ELK g IN {{ gegRows }}
                - div
                    ⟨display:grid;grid-template-columns:130px minmax(0,1.3fr) minmax(0,1fr) 150px 70px 110px;gap:12px;padding:11px 0;border-bottom:1px solid rgba(255,255,255,.05);align-items:baseline⟩
                  - span
                      ⟨font-size:12px;color:#8b909b⟩
                      "{{ g.soort }}"
                  - span
                      ⟨font-family:'JetBrains Mono',monospace;font-size:13px;color:#e2ab44;overflow:hidden;text-overflow:ellipsis;white-space:nowrap⟩
                      "{{ g.v }}"
                  - span
                      ⟨font-size:13px⟩
                      "{{ g.persoon }}"
                  - span
                      ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#b6bcc6⟩
                      "{{ g.first }} → {{ g.last }}"
                  - span
                      ⟨font-family:'JetBrains Mono',monospace;font-size:12px;text-align:right⟩
                      "{{ g.nb }}"
                  - span (onclick="{{ g.send }}")
                      ⟨font-size:12px;text-align:right;cursor:pointer;color:{{ g.dcol }}⟩
                      "{{ g.dlabel }}"
            ▸ ALS {{ gegEmpty }}
              - div
                  ⟨font-size:13px;color:#8b909b;padding:20px 0⟩
                  "Nog niets bevestigd in deze categorie. Bevestig gegevens bij Herkend."
        ▸ ALS {{ vVerb }}
          - div
              ⟨flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) 320px⟩
            - div
                ⟨position:relative;overflow:hidden⟩
              - div
                  ⟨position:absolute;left:30px;top:24px;width:900px;height:560px⟩
                "{{ edgeSvg }}"
                ▸ VOOR ELK n IN {{ nodes }}
                  - div (onclick="{{ n.pick }}")
                      ⟨position:absolute;left:{{ n.left }};top:{{ n.top }};width:150px;transform:translate(-50%,-50%);padding:8px 10px;border-radius:8px;background:#12151c;border:1px solid {{ n.bd }};display:flex;flex-direction:column;gap:2px;cursor:pointer;opacity:{{ n.op }}⟩
                    - span
                        ⟨font-size:10px;color:#8b909b;font-family:'JetBrains Mono',monospace⟩
                        "{{ n.soort }}"
                    - span
                        ⟨font-size:12px;color:{{ n.col }};font-family:{{ n.font }};overflow:hidden;text-overflow:ellipsis;white-space:nowrap⟩
                        "{{ n.lbl }}"
              - div
                  ⟨position:absolute;left:30px;bottom:18px;display:flex;gap:18px;font-size:12px;color:#8b909b⟩
                - span
                    ⟨display:flex;align-items:center;gap:6px⟩
                  - span
                      ⟨width:22px;border-top:1.5px solid #8b909b⟩
                  "bevestigd"
                - span
                    ⟨display:flex;align-items:center;gap:6px⟩
                  - span
                      ⟨width:22px;border-top:1.5px dashed #b98cff⟩
                  "voorstel"
            - div
                ⟨border-left:1px solid rgba(255,255,255,.06);background:#0e1117;overflow:auto;padding:22px 20px;display:flex;flex-direction:column;gap:16px⟩
              - div
                  ⟨display:flex;flex-direction:column;gap:6px⟩
                - span
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                    "{{ node.soort }}"
                - span
                    ⟨font-size:20px;font-weight:600;word-break:break-all⟩
                    "{{ node.lbl }}"
              - div
                  ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                  "VERBANDEN · {{ node.n }}"
              - div
                  ⟨display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.06)⟩
                ▸ VOOR ELK l IN {{ node.links }}
                  - div
                      ⟨display:flex;flex-direction:column;gap:4px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.05)⟩
                    - div
                        ⟨display:flex;justify-content:space-between;gap:8px⟩
                      - span
                          ⟨font-size:13px⟩
                          "{{ l.naar }}"
                      - span
                          ⟨font-family:'JetBrains Mono',monospace;font-size:10px;color:{{ l.col }}⟩
                          "{{ l.st }}"
                    - span
                        ⟨font-size:12px;color:#8b909b;line-height:1.45⟩
                        "{{ l.why }}"
              - div
                  ⟨font-size:12px;color:#8b909b;line-height:1.5⟩
                  "Een voorstel van het taalmodel (schrijfstijl, tijdsamenval) is een aanwijzing, geen bewijs. Het rapport toont het apart."
        ▸ ALS {{ vRap }}
          - div
              ⟨flex:1;min-height:0;display:grid;grid-template-columns:300px minmax(0,1fr)⟩
            - div
                ⟨border-right:1px solid rgba(255,255,255,.06);overflow:auto;padding:22px 20px;display:flex;flex-direction:column;gap:20px⟩
              - div
                  ⟨display:flex;flex-direction:column;gap:6px⟩
                - div
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                    "ONDERDELEN"
                ▸ VOOR ELK s IN {{ rapSecs }}
                  - div (onclick="{{ s.toggle }}")
                      ⟨display:flex;gap:10px;align-items:center;padding:7px 4px;font-size:13px;cursor:pointer⟩
                    - span
                        ⟨width:14px;height:14px;border-radius:4px;border:1px solid {{ s.bd }};background:{{ s.bg }}⟩
                    "{{ s.label }}"
              - div
                  ⟨display:flex;flex-direction:column;gap:10px⟩
                - div
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                    "STATUS"
                - div
                    ⟨display:flex;flex-direction:column;gap:6px⟩
                  ▸ VOOR ELK f IN {{ rapFlow }}
                    - div
                        ⟨display:flex;gap:10px;align-items:center;font-size:13px;color:{{ f.col }}⟩
                      - span
                          ⟨width:8px;height:8px;border-radius:50%;background:{{ f.dot }}⟩
                      "{{ f.label }}"
                ▸ ALS {{ rapAct }}
                  - div (onclick="{{ rapGo }}")
                      ⟨text-align:center;padding:10px;border-radius:8px;background:#35d0c4;color:#04211f;font-size:13px;font-weight:600;cursor:pointer⟩
                      "{{ rapActLabel }}"
                - div
                    ⟨font-size:12px;color:#8b909b;line-height:1.5⟩
                    "{{ rapHint }}"
              - div
                  ⟨display:flex;flex-direction:column;gap:6px⟩
                - div
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                    "EXPORT"
                - div
                    ⟨display:flex;gap:6px⟩
                  - div
                      ⟨flex:1;text-align:center;font-size:12px;padding:8px;border-radius:7px;border:1px solid {{ expBd }};color:{{ expCol }}⟩
                      "PDF-rapport"
                  - div
                      ⟨flex:1;text-align:center;font-size:12px;padding:8px;border-radius:7px;border:1px solid {{ expBd }};color:{{ expCol }}⟩
                      "Bewijspakket"
            - div
                ⟨overflow:auto;padding:28px;background:#07080b;display:flex;justify-content:center⟩
              - div
                  ⟨width:620px;background:#f2f1ed;color:#1b1d22;border-radius:4px;padding:44px 48px;display:flex;flex-direction:column;gap:22px;height:max-content⟩
                - div
                    ⟨display:flex;justify-content:space-between;font-family:'JetBrains Mono',monospace;font-size:10px;color:#6b6f78⟩
                  - span
                      "PHYLAX · ONZ-014"
                  - span
                      "VERTROUWELIJK · {{ rapStatus }}"
                - div
                    ⟨font-size:24px;font-weight:600;letter-spacing:-.01em;line-height:1.2⟩
                    "Analyse berichten aan melder, september 2026"
                ▸ VOOR ELK b IN {{ rapBody }}
                  - div
                      ⟨display:flex;flex-direction:column;gap:8px⟩
                    - div
                        ⟨font-size:11px;font-family:'JetBrains Mono',monospace;color:#6b6f78;letter-spacing:.04em⟩
                        "{{ b.kop }}"
                    - div
                        ⟨font-size:13px;line-height:1.6⟩
                        "{{ b.tekst }}"
                    ▸ VOOR ELK r IN {{ b.rows }}
                      - div
                          ⟨display:grid;grid-template-columns:120px minmax(0,1fr);gap:10px;font-size:12px;padding:5px 0;border-bottom:1px solid #dddbd4⟩
                        - span
                            ⟨color:#6b6f78⟩
                            "{{ r.k }}"
                        - span
                            ⟨font-family:'JetBrains Mono',monospace⟩
                            "{{ r.v }}"
```
