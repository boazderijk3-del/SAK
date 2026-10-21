# Pixelspec · SAK Mobiel

Gegenereerd uit `prototype/SAK Mobiel.dc.html`. Volledige elementboom met **exacte inline-stijlen** en teksten; normatief. `{{ … }}` = dynamische waarde uit de logica onderaan het prototype. `▸ ALS` = alleen zichtbaar als de waarde waar is; `▸ VOOR ELK` = herhaald per item.

```
- div
    ⟨height:100vh;display:flex;justify-content:center;background:#050607⟩
  - div
      ⟨position:relative;width:100%;max-width:440px;height:100%;display:flex;flex-direction:column;background:#0a0c0e;border-left:1px solid #161b20;border-right:1px solid #161b20⟩
    - header
        ⟨display:flex;align-items:center;gap:10px;padding:10px 14px;border-bottom:1px solid #232a31;background:#0d1013;flex:none⟩
      - span
          ⟨font:700 18px 'JetBrains Mono',monospace;color:#f2b33d⟩
          "SAK"
      - div
          ⟨flex:1;min-width:0;display:flex;flex-direction:column⟩
        - select (value="{{ me }}" data-v="{{ me }}" onchange="{{ onMe }}")
            ⟨background:transparent;border:0;color:#e6e9ec;font-size:15px;font-weight:600;padding:0;max-width:100%⟩
          ▸ VOOR ELK o IN {{ meOpts }}
            - option (value="{{ o.id }}")
                "{{ o.label }}"
        - select (value="{{ proj }}" data-v="{{ proj }}" onchange="{{ onProj }}")
            ⟨background:transparent;border:0;color:#8a949e;font-size:12px;padding:0;max-width:100%⟩
          ▸ VOOR ELK o IN {{ projOpts }}
            - option (value="{{ o.id }}")
                "{{ o.label }}"
      - span
          ⟨font:600 11px 'JetBrains Mono',monospace;color:#8a949e⟩
          "{{ myPos }}"
      - span (title="{{ connTitle }}")
          ⟨display:flex;align-items:center;gap:5px;font:600 11px 'JetBrains Mono',monospace;color:{{ connCol }}⟩
        - span
            ⟨width:8px;height:8px;border-radius:50%;background:{{ connCol }}⟩
        "{{ connLabel }}"
      - button (onclick="{{ lockNow }}" title="Vergrendelen")
          ⟨min-width:44px;min-height:44px;margin:-6px -8px -6px 0;border:0;background:transparent;color:#8a949e;cursor:pointer⟩
        - span
            ⟨font-family:'Material Symbols Sharp';line-height:1;font-feature-settings:'liga';font-size:22px⟩
            "lock"
    ▸ ALS {{ offline }}
      - div
          ⟨display:flex;align-items:flex-start;gap:10px;padding:10px 14px;background:rgba(242,179,61,.1);border-bottom:1px solid #f2b33d;font-size:14px;color:#e6e9ec;line-height:1.4;flex:none⟩
        - span
            ⟨font-family:'Material Symbols Sharp';line-height:1;font-feature-settings:'liga';font-size:22px;color:#f2b33d⟩
            "cloud_off"
        - span
            "Geen verbinding. {{ queueText }}"
    ▸ ALS {{ ready }}
      - main
          ⟨flex:1;min-height:0;overflow-y:auto;padding:14px 14px 110px;display:flex;flex-direction:column;gap:14px⟩
        ▸ ALS {{ hasBoloAlert }}
          - button (onclick="{{ toBolo }}")
              ⟨flex:none;display:flex;align-items:center;gap:10px;width:100%;min-height:56px;border:2px solid #ff5f57;background:rgba(255,95,87,.1);color:#ff5f57;padding:10px 12px;cursor:pointer;text-align:left⟩
            - span
                ⟨font-family:'Material Symbols Sharp';font-size:26px;line-height:1;font-feature-settings:'liga'⟩
                "person_search"
            - span
                ⟨flex:1⟩
              - span
                  ⟨display:block;font:700 15px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                  "{{ boloAlert.title }}"
              - span
                  ⟨display:block;font-size:13px;color:#e6e9ec⟩
                  "{{ boloAlert.desc }}"
        ▸ ALS {{ isTaken }}
          - div
              ⟨flex:none;display:flex;flex-direction:column;gap:14px⟩
            ▸ ALS {{ isTL }}
              - div
                  ⟨display:flex;flex-direction:column;gap:10px⟩
                - div
                    ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8a949e⟩
                    "Mijn team"
                ▸ VOOR ELK e IN {{ escTasks }}
                  - div
                      ⟨border:2px solid #ff5f57;background:rgba(255,95,87,.08);padding:12px;display:flex;flex-direction:column;gap:8px⟩
                    - div
                        ⟨display:flex;align-items:center;gap:8px⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';line-height:1;font-feature-settings:'liga';font-size:20px;color:#ff5f57⟩
                          "notification_important"
                      - span
                          ⟨font:700 14px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#ff5f57⟩
                          "Niet bevestigd"
                      - span
                          ⟨flex:1⟩
                      - span
                          ⟨font:700 14px 'JetBrains Mono',monospace;color:#ff5f57⟩
                          "{{ e.elapsed }}"
                    - div
                        ⟨font-size:17px;font-weight:700;line-height:1.25⟩
                        "{{ e.title }}"
                    - div
                        ⟨font-size:13px;color:#c3cad1⟩
                        "→ {{ e.who }} · {{ e.incNo }}"
                    - div
                        ⟨display:grid;grid-template-columns:1fr 1fr;gap:6px⟩
                      - button (onclick="{{ e.viaRadio }}")
                          ⟨min-height:52px;border:2px solid #f2b33d;background:transparent;color:#f2b33d;cursor:pointer;font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase⟩
                          "Bevestigd via portofoon"
                      - button (onclick="{{ e.takeOver }}")
                          ⟨min-height:52px;border:0;background:#f2b33d;color:#0a0c0e;cursor:pointer;font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase⟩
                          "Overnemen"
                - div
                    ⟨display:flex;flex-direction:column;border-top:1px solid #232a31⟩
                  ▸ VOOR ELK r IN {{ teamRows }}
                    - div
                        ⟨display:flex;align-items:center;gap:10px;min-height:52px;padding:6px 0;border-bottom:1px solid #232a31⟩
                      - span
                          ⟨width:10px;height:10px;border-radius:50%;background:{{ r.col }};flex:none⟩
                      - div
                          ⟨flex:1;min-width:0⟩
                        - div
                            ⟨font-size:15px;font-weight:600⟩
                            "{{ r.name }}"
                        - div
                            ⟨font-size:12px;color:#8a949e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                            "{{ r.post }}"
                      - span
                          ⟨font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:{{ r.col }};text-align:right⟩
                          "{{ r.status }}"
            - div
                ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8a949e⟩
                "Mijn acties"
            ▸ ALS {{ noTasks }}
              - div
                  ⟨padding:18px;border:1px dashed #2c343c;color:#8a949e;font-size:15px;text-align:center⟩
                  "Geen acties voor jou. Blijf op je post."
            ▸ VOOR ELK t IN {{ myTasks }}
              - div
                  ⟨border:2px solid {{ t.col }};background:#12161a;padding:14px;display:flex;flex-direction:column;gap:10px⟩
                - div
                    ⟨display:flex;align-items:center;gap:8px⟩
                  - span
                      ⟨font:600 12px 'JetBrains Mono',monospace;color:#8a949e⟩
                      "{{ t.incNo }}"
                  - span
                      ⟨flex:1⟩
                  - span
                      ⟨font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:{{ t.col }}⟩
                      "{{ t.status }}"
                - div
                    ⟨font-size:20px;font-weight:700;line-height:1.2⟩
                    "{{ t.title }}"
                - div
                    ⟨font-size:14px;color:#c3cad1⟩
                    "{{ t.inc }}"
                ▸ ALS {{ t.hasMed }}
                  - div
                      ⟨display:flex;gap:8px;padding:10px;border:1px solid #ff5f57;background:rgba(255,95,87,.08);font-size:14px⟩
                    - span
                        ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga';color:#ff5f57⟩
                        "emergency"
                    - span
                        "{{ t.med }}"
                - div
                    ⟨display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px⟩
                  ▸ VOOR ELK b IN {{ t.steps }}
                    - button (onclick="{{ b.onClick }}")
                        ⟨min-height:52px;border:2px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};cursor:pointer;font:700 14px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase⟩
                        "{{ b.name }}"
                - div
                    ⟨display:flex;gap:6px⟩
                  - input (value="{{ t.fb }}" onchange="{{ t.onFb }}" placeholder="Terugkoppeling…")
                      ⟨flex:1;min-width:0;min-height:48px;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:10px;font-size:16px⟩
                  - button (onclick="{{ t.addFb }}")
                      ⟨min-width:52px;border:0;background:#f2b33d;color:#0a0c0e;cursor:pointer⟩
                    - span
                        ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga'⟩
                        "send"
                ▸ VOOR ELK f IN {{ t.feedback }}
                  - div
                      ⟨font-size:13px;color:#8a949e⟩
                    - span
                        ⟨font-family:'JetBrains Mono',monospace⟩
                        "{{ f.when }}"
                    "{{ f.by }}:"
                    - span
                        ⟨color:#c3cad1⟩
                        "{{ f.text }}"
            - div
                ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8a949e;margin-top:6px⟩
                "Onveilige situaties · afvinken"
            ▸ ALS {{ noUnsafe }}
              - div
                  ⟨font-size:14px;color:#8a949e⟩
                  "Niets open."
            ▸ VOOR ELK u IN {{ unsafe }}
              - div
                  ⟨border:1px solid #f2d64b;background:#12161a;padding:12px;display:flex;flex-direction:column;gap:8px⟩
                - div
                    ⟨display:flex;gap:8px;align-items:center⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga';color:#f2d64b⟩
                      "warning"
                  - span
                      ⟨flex:1;font-size:15px;font-weight:600⟩
                      "{{ u.where }}"
                  - span
                      ⟨font:500 12px 'JetBrains Mono',monospace;color:#8a949e⟩
                      "{{ u.ago }}"
                - div
                    ⟨font-size:15px;color:#c3cad1⟩
                    "{{ u.text }}"
                - div
                    ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                    "{{ u.thumbs }}"
                - button (onclick="{{ u.resolve }}")
                    ⟨display:flex;align-items:center;justify-content:center;gap:8px;min-height:52px;border:0;background:#4fd18b;color:#0a0c0e;cursor:pointer;font:700 15px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga'⟩
                      "check_box"
                  "Opgelost"
            - div
                ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8a949e;margin-top:6px⟩
                "Lopende meldingen"
            ▸ VOOR ELK r IN {{ openReports }}
              - button (onclick="{{ r.onClick }}")
                  ⟨display:flex;flex-direction:column;gap:6px;width:100%;border:1px solid #232a31;border-left:4px solid {{ r.prioCol }};background:#12161a;color:#e6e9ec;padding:12px;cursor:pointer;text-align:left⟩
                - div
                    ⟨display:flex;gap:8px;align-items:center;width:100%⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga';color:{{ r.col }}⟩
                      "{{ r.icon }}"
                  - span
                      ⟨flex:1;font-size:16px;font-weight:600⟩
                      "{{ r.type }}"
                  ▸ ALS {{ r.hasMed }}
                    - span
                        ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga';color:#ff5f57⟩
                        "emergency"
                  - span
                      ⟨font:500 12px 'JetBrains Mono',monospace;color:#8a949e⟩
                      "{{ r.ago }}"
                - div
                    ⟨font-size:14px;color:#c3cad1⟩
                    "{{ r.where }} · {{ r.text }}"
        ▸ ALS {{ isKaart }}
          - div
              ⟨flex:none;display:flex;flex-direction:column;gap:10px⟩
            - div
                ⟨display:flex;gap:4px;overflow-x:auto⟩
              ▸ VOOR ELK t IN {{ planTabs }}
                - button (onclick="{{ t.onClick }}")
                    ⟨flex:none;min-height:44px;border:1px solid {{ t.bd }};background:{{ t.bg }};color:{{ t.fg }};padding:0 14px;cursor:pointer;font-size:15px⟩
                    "{{ t.name }}"
            ▸ ALS {{ noPlan }}
              - div
                  ⟨padding:18px;border:1px dashed #2c343c;color:#8a949e;text-align:center⟩
                  "Geen plattegrond voor dit project."
            ▸ ALS {{ hasPlan }}
              - div
                  ⟨position:relative;border:1px solid #232a31⟩
                "{{ planImg }}"
                ▸ VOOR ELK m IN {{ markers }}
                  - div
                      ⟨position:absolute;left:{{ m.left }};top:{{ m.top }};transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:2px;pointer-events:none⟩
                    - div
                        ⟨width:{{ m.size }};height:{{ m.size }};border-radius:50%;background:{{ m.col }};box-shadow:{{ m.ring }};display:flex;align-items:center;justify-content:center;color:#0a0c0e;font-family:'Material Symbols Sharp';font-size:14px;line-height:1;font-feature-settings:'liga'⟩
                        "{{ m.icon }}"
                    - div
                        ⟨background:rgba(10,12,14,.9);padding:1px 4px;font:600 9px 'Barlow Condensed',sans-serif;letter-spacing:.04em;text-transform:uppercase;white-space:nowrap;color:{{ m.fg }}⟩
                        "{{ m.name }}"
            - div
                ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#8a949e;margin-top:4px⟩
                "Posten"
            ▸ VOOR ELK p IN {{ posts }}
              - div
                  ⟨display:flex;gap:10px;align-items:center;min-height:52px;padding:8px 12px;border:1px solid {{ p.bd }};background:#12161a⟩
                - span
                    ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga';color:{{ p.col }}⟩
                    "{{ p.icon }}"
                - span
                    ⟨flex:1;min-width:0⟩
                  - span
                      ⟨display:block;font-size:16px;font-weight:600⟩
                      "{{ p.name }}"
                  - span
                      ⟨display:block;font-size:13px;color:#8a949e⟩
                      "{{ p.staff }}"
                - span
                    ⟨font-size:12px;color:#8a949e⟩
                    "{{ p.plan }}"
        ▸ ALS {{ isBer }}
          - div
              ⟨flex:none;display:flex;flex-direction:column;gap:8px⟩
            ▸ VOOR ELK m IN {{ msgRows }}
              - div
                  ⟨align-self:{{ m.align }};max-width:88%;background:{{ m.bg }};border:1px solid #232a31;padding:9px 12px⟩
                - div
                    ⟨display:flex;gap:8px;font-size:12px⟩
                  - span
                      ⟨color:{{ m.col }};font-weight:700⟩
                      "{{ m.from }}"
                  - span
                      ⟨font-family:'JetBrains Mono',monospace;color:#6b757f⟩
                      "{{ m.when }}"
                - div
                    ⟨font-size:16px;line-height:1.35⟩
                    "{{ m.text }}"
            - div
                ⟨display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;margin-top:6px⟩
              ▸ VOOR ELK q IN {{ quickMsgs }}
                - button (onclick="{{ q.onClick }}")
                    ⟨min-height:48px;border:1px solid #2c343c;background:#12161a;color:#e6e9ec;cursor:pointer;font-size:14px⟩
                    "{{ q.text }}"
            - div
                ⟨display:flex;gap:6px⟩
              - input (value="{{ msgText }}" onchange="{{ onMsg }}" onkeydown="{{ onMsgKey }}" placeholder="Bericht aan iedereen…")
                  ⟨flex:1;min-width:0;min-height:52px;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:10px;font-size:16px⟩
              - button (onclick="{{ sendMsg }}")
                  ⟨min-width:56px;border:0;background:#f2b33d;color:#0a0c0e;cursor:pointer⟩
                - span
                    ⟨font-family:'Material Symbols Sharp';font-size:24px;line-height:1;font-feature-settings:'liga'⟩
                    "send"
        ▸ ALS {{ isReg }}
          - div
              ⟨flex:none;display:flex;flex-direction:column;gap:12px⟩
            - div
                ⟨display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:3px;background:#0d1013;border:1px solid #232a31;padding:3px⟩
              ▸ VOOR ELK t IN {{ regTabs }}
                - button (onclick="{{ t.onClick }}")
                    ⟨min-height:44px;border:0;background:{{ t.bg }};color:{{ t.fg }};cursor:pointer;font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase⟩
                    "{{ t.name }}"
            ▸ ALS {{ isDeur }}
              - div
                  ⟨display:flex;flex-direction:column;gap:10px⟩
                - div
                    ⟨display:flex;align-items:center;gap:8px;background:#0a0c0e;border:2px solid #f2b33d;padding:0 12px⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:24px;line-height:1;font-feature-settings:'liga';color:#f2b33d⟩
                      "badge"
                  - input (value="{{ dq }}" onchange="{{ onDq }}" placeholder="Naam of ledennummer")
                      ⟨flex:1;min-width:0;min-height:56px;border:0;background:transparent;color:#e6e9ec;font-size:18px;outline:none⟩
                ▸ ALS {{ deurHint }}
                  - div
                      ⟨font-size:14px;color:#8a949e⟩
                      "Zoek iemand aan de deur. Je ziet direct of er een ontzegging, royement of openstaande boete is voor {{ projName }}."
                  - div
                      ⟨font-size:12px;color:#6b757f;margin-top:4px⟩
                      "Je ziet toegang, foto en signalement. Personalia staan alleen bij de meldkamer."
                ▸ VOOR ELK p IN {{ deurRows }}
                  - div
                      ⟨border:3px solid {{ p.col }};background:#12161a;display:flex;flex-direction:column⟩
                    - div
                        ⟨display:flex;align-items:center;gap:12px;padding:14px;background:{{ p.band }}⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:34px;line-height:1;font-feature-settings:'liga';color:{{ p.col }}⟩
                          "{{ p.icon }}"
                      - div
                          ⟨flex:1⟩
                        - div
                            ⟨font:700 22px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase;color:{{ p.col }}⟩
                            "{{ p.verdict }}"
                        - div
                            ⟨font-size:14px;color:#e6e9ec⟩
                            "{{ p.reason }}"
                    - div
                        ⟨padding:12px 14px;display:flex;flex-direction:column;gap:8px⟩
                      - div
                          ⟨display:flex;gap:10px;align-items:center⟩
                        "{{ p.photo }}"
                        - div
                            ⟨flex:1⟩
                          - div
                              ⟨font-size:18px;font-weight:700⟩
                              "{{ p.name }}"
                          - div
                              ⟨font:500 13px 'JetBrains Mono',monospace;color:#8a949e⟩
                              "{{ p.member }}"
                      ▸ ALS {{ p.hasDesc }}
                        - div
                            ⟨display:flex;flex-direction:column;gap:3px;padding:8px 10px;border:1px solid #2c343c;background:#0a0c0e⟩
                          - span
                              ⟨font:700 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                              "Signalement"
                          - span
                              ⟨font-size:15px;line-height:1.4⟩
                              "{{ p.desc }}"
                      ▸ VOOR ELK h IN {{ p.history }}
                        - div
                            ⟨font-size:13px;color:{{ h.col }}⟩
                            "● {{ h.text }}"
                      - div
                          ⟨display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:4px⟩
                        - button (onclick="{{ p.refuse }}")
                            ⟨min-height:52px;border:2px solid #ff5f57;background:transparent;color:#ff5f57;cursor:pointer;font:700 14px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase⟩
                            "Weigeren"
                        - button (onclick="{{ p.incident }}")
                            ⟨min-height:52px;border:0;background:#f2b33d;color:#0a0c0e;cursor:pointer;font:700 14px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase⟩
                            "Incident melden"
                      ▸ ALS {{ p.refused }}
                        - div
                            ⟨font-size:13px;color:#4fd18b⟩
                            "Weigering geregistreerd."
                ▸ ALS {{ deurNew }}
                  - div
                      ⟨border:1px dashed #2c343c;padding:12px;display:flex;flex-direction:column;gap:8px⟩
                    - div
                        ⟨font-size:14px;color:#8a949e⟩
                        "Niet gevonden. Nieuw registreren:"
                    - div
                        ⟨display:grid;grid-template-columns:1fr 1fr;gap:6px⟩
                      ▸ VOOR ELK b IN {{ dnKinds }}
                        - button (onclick="{{ b.onClick }}")
                            ⟨min-height:48px;border:2px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};cursor:pointer;font-size:15px;font-weight:600⟩
                            "{{ b.name }}"
                    ▸ ALS {{ dn.member }}
                      - input (value="{{ dn.no }}" onchange="{{ onDnNo }}" placeholder="Ledennummer")
                          ⟨min-height:48px;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:10px;font:500 16px 'JetBrains Mono',monospace⟩
                    - button (onclick="{{ addDeurPerson }}")
                        ⟨min-height:52px;border:0;background:#f2b33d;color:#0a0c0e;cursor:pointer;font:700 15px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                        "“{{ dq }}” registreren"
            ▸ ALS {{ isRBolo }}
              - div
                  ⟨display:flex;flex-direction:column;gap:10px⟩
                ▸ ALS {{ noBolo }}
                  - div
                      ⟨font-size:15px;color:#8a949e;text-align:center;padding:18px⟩
                      "Geen actieve BOLO."
                ▸ VOOR ELK b IN {{ bolos }}
                  - div
                      ⟨border:2px solid {{ b.col }};background:#12161a;padding:12px;display:flex;flex-direction:column;gap:8px;opacity:{{ b.op }}⟩
                    - div
                        ⟨display:flex;gap:8px;align-items:center⟩
                      - span
                          ⟨font:700 13px 'JetBrains Mono',monospace;color:{{ b.col }}⟩
                          "{{ b.no }}"
                      - span
                          ⟨font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:{{ b.col }}⟩
                          "{{ b.status }}"
                      - span
                          ⟨flex:1⟩
                      - span
                          ⟨font:500 12px 'JetBrains Mono',monospace;color:#8a949e⟩
                          "{{ b.ago }}"
                    "{{ b.photo }}"
                    - div
                        ⟨font-size:19px;font-weight:700⟩
                        "{{ b.title }}"
                    - div
                        ⟨font-size:16px;line-height:1.4;color:#e6e9ec⟩
                        "{{ b.desc }}"
                    ▸ ALS {{ b.active }}
                      - button (onclick="{{ b.seen }}")
                          ⟨min-height:52px;border:0;background:#ff5f57;color:#0a0c0e;cursor:pointer;font:700 15px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                          "Gezien · melden aan meldkamer"
            ▸ ALS {{ isRSanc }}
              - div
                  ⟨display:flex;flex-direction:column;gap:6px⟩
                - input (value="{{ sq }}" onchange="{{ onSq }}" placeholder="Zoek in sancties")
                    ⟨min-height:48px;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:10px;font-size:16px⟩
                ▸ VOOR ELK sn IN {{ sancs }}
                  - div
                      ⟨display:flex;gap:10px;align-items:center;min-height:56px;padding:8px 12px;border:1px solid #232a31;border-left:4px solid {{ sn.col }};background:#12161a⟩
                    - span
                        ⟨flex:1;min-width:0⟩
                      - span
                          ⟨display:block;font-size:16px;font-weight:600⟩
                          "{{ sn.name }}"
                      - span
                          ⟨display:block;font-size:13px;color:#8a949e⟩
                          "{{ sn.member }} · {{ sn.text }}"
                    - span
                        ⟨font:700 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:{{ sn.col }}⟩
                        "{{ sn.scope }}"
            ▸ ALS {{ isRInc }}
              - div
                  ⟨display:flex;flex-direction:column;gap:6px⟩
                ▸ VOOR ELK i IN {{ incs }}
                  - div
                      ⟨padding:12px;border:1px solid #232a31;background:#12161a;display:flex;flex-direction:column;gap:4px⟩
                    - div
                        ⟨display:flex;gap:8px;align-items:center⟩
                      - span
                          ⟨font:600 12px 'JetBrains Mono',monospace;color:#f2b33d⟩
                          "{{ i.no }}"
                      - span
                          ⟨flex:1⟩
                      - span
                          ⟨font:700 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:{{ i.stCol }}⟩
                          "{{ i.status }}"
                    - div
                        ⟨font-size:16px;font-weight:600⟩
                        "{{ i.title }}"
                    - div
                        ⟨font-size:13px;color:#8a949e⟩
                        "{{ i.when }} · {{ i.persons }}"
    - nav
        ⟨position:absolute;left:0;right:0;bottom:0;display:grid;grid-template-columns:1fr 1fr 84px 1fr 1fr;align-items:end;background:#0d1013;border-top:1px solid #232a31;padding:0 4px 6px;z-index:3⟩
      ▸ VOOR ELK t IN {{ tabsL }}
        - button (onclick="{{ t.onClick }}")
            ⟨position:relative;min-height:62px;border:0;background:transparent;color:{{ t.fg }};cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px⟩
          - span
              ⟨font-family:'Material Symbols Sharp';font-size:26px;line-height:1;font-feature-settings:'liga'⟩
              "{{ t.icon }}"
          - span
              ⟨font:700 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
              "{{ t.label }}"
          ▸ ALS {{ t.hasN }}
            - span
                ⟨position:absolute;top:6px;right:18%;min-width:18px;height:18px;padding:0 4px;border-radius:9px;background:#ff5f57;color:#0a0c0e;font:700 11px 'JetBrains Mono',monospace;display:flex;align-items:center;justify-content:center⟩
                "{{ t.n }}"
      - button (onclick="{{ openMeld }}")
          ⟨justify-self:center;width:72px;height:72px;margin-bottom:6px;border-radius:50%;border:4px solid #0a0c0e;background:#f2b33d;color:#0a0c0e;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;transform:translateY(-12px);box-shadow:0 6px 20px rgba(0,0,0,.5)⟩
        - span
            ⟨font-family:'Material Symbols Sharp';font-size:32px;line-height:1;font-feature-settings:'liga'⟩
            "add"
        - span
            ⟨font:700 10px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase;margin-top:-2px⟩
            "Melden"
      ▸ VOOR ELK t IN {{ tabsR }}
        - button (onclick="{{ t.onClick }}")
            ⟨position:relative;min-height:62px;border:0;background:transparent;color:{{ t.fg }};cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px⟩
          - span
              ⟨font-family:'Material Symbols Sharp';font-size:26px;line-height:1;font-feature-settings:'liga'⟩
              "{{ t.icon }}"
          - span
              ⟨font:700 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
              "{{ t.label }}"
          ▸ ALS {{ t.hasN }}
            - span
                ⟨position:absolute;top:6px;right:18%;min-width:18px;height:18px;padding:0 4px;border-radius:9px;background:#ff5f57;color:#0a0c0e;font:700 11px 'JetBrains Mono',monospace;display:flex;align-items:center;justify-content:center⟩
                "{{ t.n }}"
    ▸ ALS {{ meldOpen }}
      - div
          ⟨position:absolute;inset:0;background:#0a0c0e;z-index:6;display:flex;flex-direction:column⟩
        - div
            ⟨display:flex;align-items:center;gap:10px;padding:12px 14px;border-bottom:1px solid #232a31⟩
          - button (onclick="{{ meldBack }}")
              ⟨min-width:44px;min-height:44px;border:0;background:transparent;color:#e6e9ec;cursor:pointer⟩
            - span
                ⟨font-family:'Material Symbols Sharp';font-size:26px;line-height:1;font-feature-settings:'liga'⟩
                "{{ backIcon }}"
          - span
              ⟨flex:1;font:700 18px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
              "{{ meldTitle }}"
        - div
            ⟨flex:1;min-height:0;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:14px⟩
          ▸ ALS {{ step1 }}
            - div
                ⟨display:grid;grid-template-columns:1fr 1fr;gap:8px⟩
              ▸ VOOR ELK t IN {{ typeBtns }}
                - button (onclick="{{ t.onClick }}")
                    ⟨min-height:96px;border:2px solid {{ t.col }};background:#12161a;color:#e6e9ec;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;font-size:16px;font-weight:700⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:34px;line-height:1;font-feature-settings:'liga';color:{{ t.col }}⟩
                      "{{ t.icon }}"
                  "{{ t.name }}"
          ▸ ALS {{ step2 }}
            - div
                ⟨display:flex;flex-direction:column;gap:14px⟩
              - div
                - div
                    ⟨font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:6px⟩
                    "Waar?"
                - div
                    ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                  ▸ VOOR ELK b IN {{ posBtns }}
                    - button (onclick="{{ b.onClick }}")
                        ⟨min-height:46px;border:2px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:0 12px;cursor:pointer;font-size:15px⟩
                        "{{ b.name }}"
              - div
                - div
                    ⟨font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:6px⟩
                    "Wat is er aan de hand?"
                - textarea (value="{{ mf.text }}" onchange="{{ onMfText }}" rows="3" placeholder="Kort en feitelijk")
                    ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:12px;font-size:17px;resize:vertical⟩
              - div
                  ⟨display:flex;flex-wrap:wrap;gap:8px;align-items:center⟩
                "{{ mfThumbs }}"
                - label
                    ⟨min-height:52px;display:flex;align-items:center;gap:8px;border:2px solid #2c343c;padding:0 16px;cursor:pointer;font-size:16px;font-weight:600⟩
                  - input (type="file" accept="image/*" capture="environment" multiple="" onchange="{{ onMfPhoto }}")
                      ⟨display:none⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:24px;line-height:1;font-feature-settings:'liga'⟩
                      "photo_camera"
                  "Foto"
              - div
                  ⟨display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px⟩
                ▸ VOOR ELK b IN {{ prioBtns }}
                  - button (onclick="{{ b.onClick }}")
                      ⟨min-height:48px;border:2px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};cursor:pointer;font-size:14px;font-weight:700⟩
                      "{{ b.name }}"
              - button (onclick="{{ toggleMed }}")
                  ⟨display:flex;align-items:center;gap:10px;min-height:56px;border:2px solid #ff5f57;background:{{ medBg }};color:{{ medFg }};padding:0 14px;cursor:pointer;font-size:16px;font-weight:700⟩
                - span
                    ⟨font-family:'Material Symbols Sharp';font-size:24px;line-height:1;font-feature-settings:'liga'⟩
                    "emergency"
                "Gewonde of onwel"
              ▸ ALS {{ mf.medOn }}
                - div
                    ⟨border:1px solid #ff5f57;padding:12px;display:flex;flex-direction:column;gap:10px⟩
                  - div
                    - div
                        ⟨font-size:14px;color:#c3cad1;margin-bottom:5px⟩
                        "Bij bewustzijn?"
                    - div
                        ⟨display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px⟩
                      ▸ VOOR ELK b IN {{ mConsc }}
                        - button (onclick="{{ b.onClick }}")
                            ⟨min-height:48px;border:2px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};cursor:pointer;font-size:15px;font-weight:600⟩
                            "{{ b.name }}"
                  - div
                    - div
                        ⟨font-size:14px;color:#c3cad1;margin-bottom:5px⟩
                        "Ademhaling"
                    - div
                        ⟨display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px⟩
                      ▸ VOOR ELK b IN {{ mBreath }}
                        - button (onclick="{{ b.onClick }}")
                            ⟨min-height:48px;border:2px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};cursor:pointer;font-size:15px;font-weight:600⟩
                            "{{ b.name }}"
                  - input (value="{{ mf.injury }}" onchange="{{ onMfInjury }}" placeholder="Letsel / klachten")
                      ⟨min-height:48px;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:10px;font-size:16px⟩
              - div
                - div
                    ⟨font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:6px⟩
                    "Betrokken personen (optioneel)"
                - div
                    ⟨display:flex;flex-direction:column;gap:6px⟩
                  ▸ VOOR ELK p IN {{ mfPersons }}
                    - div
                        ⟨display:flex;align-items:center;gap:8px;min-height:48px;padding:6px 10px;border:1px solid #2c343c;background:#12161a⟩
                      - span
                          ⟨flex:1;font-size:15px⟩
                        "{{ p.name }}"
                        - span
                            ⟨font:500 12px 'JetBrains Mono',monospace;color:#8a949e⟩
                            "{{ p.member }}"
                      - button (onclick="{{ p.cycleRole }}")
                          ⟨min-height:36px;border:1px solid {{ p.col }};background:transparent;color:{{ p.col }};padding:0 10px;cursor:pointer;font-size:13px⟩
                          "{{ p.role }}"
                      - button (onclick="{{ p.remove }}")
                          ⟨border:0;background:transparent;color:#8a949e;cursor:pointer;min-width:36px;min-height:36px⟩
                        - span
                            ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga'⟩
                            "close"
                  - input (value="{{ mpq }}" onchange="{{ onMpq }}" placeholder="+ Naam of ledennummer")
                      ⟨min-height:48px;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:10px;font-size:16px⟩
                  ▸ VOOR ELK x IN {{ mpqRows }}
                    - button (onclick="{{ x.onClick }}")
                        ⟨display:flex;align-items:center;gap:8px;min-height:48px;border:1px solid #232a31;background:#12161a;color:#e6e9ec;padding:0 10px;cursor:pointer;font-size:15px;text-align:left⟩
                      - span
                          ⟨flex:1⟩
                          "{{ x.name }}"
                      - span
                          ⟨font-size:12px;color:{{ x.col }}⟩
                          "{{ x.st }}"
                  ▸ ALS {{ mpqNew }}
                    - button (onclick="{{ addMpNew }}")
                        ⟨min-height:48px;border:1px dashed #f2b33d;background:transparent;color:#f2b33d;cursor:pointer;font-size:15px⟩
                        "“{{ mpq }}” als nieuwe persoon"
              - button (onclick="{{ toggleAsInc }}")
                  ⟨display:flex;align-items:center;gap:10px;min-height:52px;border:1px solid #2c343c;background:transparent;color:#e6e9ec;padding:0 12px;cursor:pointer;font-size:15px;text-align:left⟩
                - span
                    ⟨font-family:'Material Symbols Sharp';font-size:24px;line-height:1;font-feature-settings:'liga';color:{{ asIncCol }}⟩
                    "{{ asIncIcon }}"
                "Direct als incident registreren (bijv. aan de deur)"
          ▸ ALS {{ step3 }}
            - div
                ⟨display:flex;flex-direction:column;align-items:center;gap:14px;padding:40px 10px;text-align:center⟩
              - span
                  ⟨font-family:'Material Symbols Sharp';font-size:64px;line-height:1;font-feature-settings:'liga';color:#4fd18b⟩
                  "check_circle"
              - div
                  ⟨font:700 24px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase⟩
                  "{{ sentTitle }}"
              - div
                  ⟨font-size:16px;color:#c3cad1⟩
                  "{{ sentText }}"
              - button (onclick="{{ closeMeld }}")
                  ⟨min-height:56px;width:100%;border:0;background:#f2b33d;color:#0a0c0e;cursor:pointer;font:700 16px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                  "Klaar"
        ▸ ALS {{ step2 }}
          - div
              ⟨padding:12px 14px;border-top:1px solid #232a31⟩
            - button (onclick="{{ sendMeld }}")
                ⟨width:100%;min-height:60px;border:0;background:{{ sendBg }};color:#0a0c0e;cursor:pointer;font:700 18px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                "{{ sendLabel }}"
    ▸ ALS {{ hasAck }}
      - div
          ⟨position:absolute;inset:0;z-index:8;background:#0a0c0e;display:flex;flex-direction:column⟩
        - div
            ⟨display:flex;align-items:center;gap:10px;padding:14px 16px;background:{{ ack.band }};color:#0a0c0e;flex:none⟩
          - span
              ⟨font-family:'Material Symbols Sharp';line-height:1;font-feature-settings:'liga';font-size:26px⟩
              "campaign"
          - span
              ⟨flex:1;font:700 20px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
              "Nieuwe opdracht"
          - span
              ⟨font:700 18px 'JetBrains Mono',monospace⟩
              "{{ ack.clock }}"
        - div
            ⟨flex:1;min-height:0;overflow-y:auto;padding:18px 16px;display:flex;flex-direction:column;gap:12px⟩
          - div
              ⟨font:600 12px 'JetBrains Mono',monospace;color:#8a949e⟩
              "{{ ack.incNo }} · van {{ ack.from }} · {{ ack.at }}"
          - div
              ⟨font-size:26px;font-weight:700;line-height:1.15;text-wrap:pretty⟩
              "{{ ack.title }}"
          - div
              ⟨font-size:16px;color:#c3cad1;line-height:1.4⟩
              "{{ ack.inc }}"
          - div
              ⟨display:flex;align-items:center;gap:8px;font-size:16px⟩
            - span
                ⟨font-family:'Material Symbols Sharp';line-height:1;font-feature-settings:'liga';font-size:22px;color:#f2b33d⟩
                "location_on"
            "{{ ack.where }}"
          ▸ ALS {{ ack.hasMed }}
            - div
                ⟨display:flex;gap:8px;padding:10px;border:1px solid #ff5f57;background:rgba(255,95,87,.08);font-size:15px;line-height:1.4⟩
              - span
                  ⟨font-family:'Material Symbols Sharp';line-height:1;font-feature-settings:'liga';font-size:20px;color:#ff5f57⟩
                  "emergency"
              - span
                  "{{ ack.med }}"
          - div
              ⟨display:flex;align-items:flex-start;gap:8px;font-size:14px;color:#8a949e;line-height:1.45⟩
            - span
                ⟨font-family:'Material Symbols Sharp';line-height:1;font-feature-settings:'liga';font-size:20px⟩
                "settings_input_antenna"
            - span
                "Ook via de portofoon doorgegeven. Druk op Ontvangen, dan staat vast dat je hem hebt."
          ▸ ALS {{ ack.escalated }}
            - div
                ⟨padding:12px;border:2px solid #ff5f57;font-size:15px;line-height:1.45⟩
                "Niet binnen 3 minuten bevestigd. De opdracht is doorgezet naar teamleider {{ ack.tl }}. Bevestig alsnog, dan weet de meldkamer dat je hem hebt."
        - div
            ⟨padding:14px 16px 20px;border-top:1px solid #232a31;display:flex;flex-direction:column;gap:8px;flex:none⟩
          - button (onclick="{{ ack.onAck }}")
              ⟨width:100%;min-height:72px;border:0;background:#f2b33d;color:#0a0c0e;cursor:pointer;font:700 24px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase⟩
              "Ontvangen"
          ▸ ALS {{ ack.hasMore }}
            - div
                ⟨text-align:center;font-size:13px;color:#8a949e⟩
                "{{ ack.more }}"
    ▸ ALS {{ isLocked }}
      - div
          ⟨position:absolute;inset:0;z-index:9;background:#0a0c0e;display:flex;flex-direction:column;padding:22px 18px 20px;gap:18px;overflow-y:auto⟩
        - div
            ⟨display:flex;align-items:baseline;gap:8px⟩
          - span
              ⟨font:700 18px 'JetBrains Mono',monospace;color:#f2b33d⟩
              "SAK"
          - span
              ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#8a949e⟩
              "{{ lockTitle }}"
        - div
            ⟨flex:none;display:flex;flex-direction:column;gap:4px⟩
          - div
              ⟨font-size:26px;font-weight:700;line-height:1.15⟩
              "{{ meName }}"
          - div
              ⟨font-size:14px;color:#8a949e⟩
              "{{ meRole }} · {{ projName }}"
        ▸ ALS {{ isStart }}
          - div
              ⟨display:flex;flex-direction:column;border:1px solid #232a31⟩
            - div
                ⟨display:flex;justify-content:space-between;gap:10px;padding:12px;border-bottom:1px solid #232a31;font-size:15px⟩
              - span
                  ⟨color:#8a949e⟩
                  "Post"
              - span
                  ⟨font-weight:600;text-align:right⟩
                  "{{ myPostName }}"
            - div
                ⟨display:flex;justify-content:space-between;gap:10px;padding:12px;font-size:15px⟩
              - span
                  ⟨color:#8a949e⟩
                  "Teamleider"
              - span
                  ⟨font-weight:600;text-align:right⟩
                  "{{ tlName }}"
        ▸ ALS {{ hasLockTasks }}
          - div
              ⟨display:flex;align-items:center;gap:10px;padding:12px;border:2px solid #f2d64b;background:rgba(242,214,75,.08);font-size:15px⟩
            - span
                ⟨font-family:'Material Symbols Sharp';line-height:1;font-feature-settings:'liga';font-size:24px;color:#f2d64b⟩
                "campaign"
            "{{ lockTasks }}"
        - div
            ⟨display:flex;flex-direction:column;align-items:center;gap:12px;margin-top:4px⟩
          - div
              ⟨font-size:15px;color:#c3cad1;text-align:center⟩
              "{{ pinPrompt }}"
          - div
              ⟨display:flex;gap:14px⟩
            ▸ VOOR ELK p IN {{ pinDots }}
              - span
                  ⟨width:18px;height:18px;border:2px solid {{ p.bd }};background:{{ p.bg }}⟩
          - div
              ⟨min-height:20px;font-size:14px;color:#ff5f57;text-align:center⟩
              "{{ pinError }}"
        - div
            ⟨display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px⟩
          ▸ VOOR ELK k IN {{ keys }}
            - button (onclick="{{ k.onClick }}")
                ⟨min-height:64px;border:1px solid #2c343c;background:{{ k.bg }};color:#e6e9ec;cursor:pointer;font:700 {{ k.fs }} 'JetBrains Mono',monospace;display:flex;align-items:center;justify-content:center⟩
              - span
                  ⟨font-family:{{ k.ff }};font-feature-settings:'liga';line-height:1⟩
                  "{{ k.label }}"
        ▸ ALS {{ isStart }}
          - button (onclick="{{ startShift }}")
              ⟨min-height:60px;border:0;background:{{ startBg }};color:#0a0c0e;cursor:pointer;font:700 18px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
              "Start dienst"
          - div
              ⟨font-size:13px;color:#6b757f;line-height:1.45;text-align:center⟩
              "De pincode geldt alleen voor deze dienst. Na 2 minuten zonder gebruik vergrendelt de app."
        ▸ ALS {{ isPinLock }}
          - div
              ⟨font-size:13px;color:#6b757f;text-align:center⟩
              "Pincode vergeten? Log opnieuw in met je account."
    ▸ ALS {{ hasSheet }}
      - div (onclick="{{ closeSheet }}")
          ⟨position:absolute;inset:0;background:rgba(0,0,0,.6);z-index:5;display:flex;align-items:flex-end⟩
        - div (onclick="{{ stop }}")
            ⟨width:100%;max-height:85%;overflow-y:auto;background:#12161a;border-top:2px solid {{ sh.col }};padding:16px;display:flex;flex-direction:column;gap:10px⟩
          - div
              ⟨display:flex;gap:10px;align-items:center⟩
            - span
                ⟨font-family:'Material Symbols Sharp';font-size:28px;line-height:1;font-feature-settings:'liga';color:{{ sh.col }}⟩
                "{{ sh.icon }}"
            - div
                ⟨flex:1⟩
              - div
                  ⟨font:700 20px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase⟩
                  "{{ sh.type }}"
              - div
                  ⟨font:500 12px 'JetBrains Mono',monospace;color:#8a949e⟩
                  "{{ sh.no }} · {{ sh.when }}"
          - div
              ⟨font-size:16px;color:#c3cad1⟩
              "{{ sh.where }}"
          - div
              ⟨font-size:17px;line-height:1.4⟩
              "{{ sh.text }}"
          ▸ ALS {{ sh.hasMed }}
            - div
                ⟨border:1px solid #ff5f57;background:rgba(255,95,87,.08);padding:12px;font-size:15px;line-height:1.5⟩
              - div
                  ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#ff5f57;margin-bottom:4px⟩
                  "Medisch"
              "{{ sh.med }}"
          - div
              ⟨display:flex;flex-wrap:wrap;gap:6px⟩
              "{{ sh.thumbs }}"
          - button (onclick="{{ closeSheet }}")
              ⟨min-height:52px;border:1px solid #2c343c;background:transparent;color:#e6e9ec;cursor:pointer;font-size:16px⟩
              "Sluiten"
```
