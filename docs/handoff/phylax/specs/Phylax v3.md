# Pixelspec · Phylax v3

Gegenereerd uit `prototype/Phylax v3.dc.html`. Volledige elementboom met **exacte inline-stijlen** en teksten; normatief. `{{ … }}` = dynamische waarde uit de logica onderaan het prototype. `▸ ALS` = alleen zichtbaar als de waarde waar is; `▸ VOOR ELK` = herhaald per item.

```
- section (id="t2")
    ⟨padding:48px 56px 64px;display:flex;flex-direction:column;gap:36px⟩
  - div
      ⟨display:flex;flex-direction:column;gap:16px;max-width:1200px⟩
    - div
        ⟨display:flex;align-items:baseline;gap:10px⟩
      - a (href="#t2")
          ⟨font-family:'JetBrains Mono',monospace;font-size:11px;padding:3px 7px;background:#e8eaf0;color:#07080b;border-radius:4px⟩
          "2"
      - span
          ⟨font-family:'JetBrains Mono',monospace;font-size:12px;color:#8b909b⟩
          "PHYLAX · VOORSTEL 3 · SECURITY AWARENESS · VOORTBOUWEND OP 1"
    - h1
        ⟨margin:0;font-size:40px;line-height:1.1;font-weight:600;letter-spacing:-.02em;text-wrap:balance⟩
        "Alles hangt onder een opdrachtgever. Alles is overal vindbaar."
    - div
        ⟨display:flex;flex-wrap:wrap;align-items:stretch;gap:8px;margin-top:4px⟩
      - div
          ⟨padding:12px 16px;border-radius:8px;border:1px solid rgba(53,208,196,.4);display:flex;flex-direction:column;gap:3px⟩
        - div
            ⟨font-size:14px;font-weight:600⟩
            "Opdrachtgever"
        - div
            ⟨font-size:12px;color:#8b909b⟩
            "uit SAK, Ophanim of hier aangemaakt"
      - div
          ⟨display:flex;align-items:center;color:#5c616b;font-family:'JetBrains Mono',monospace⟩
          "→"
      - div
          ⟨padding:12px 16px;border-radius:8px;border:1px solid rgba(255,255,255,.12);display:flex;flex-direction:column;gap:3px⟩
        - div
            ⟨font-size:14px;font-weight:600⟩
            "Locatie"
        - div
            ⟨font-size:12px;color:#8b909b⟩
            "met blusmiddelen, installaties, keuringen"
      - div
          ⟨display:flex;align-items:center;color:#5c616b;font-family:'JetBrains Mono',monospace⟩
          "→"
      - div
          ⟨padding:12px 16px;border-radius:8px;border:1px solid rgba(255,255,255,.12);display:flex;flex-direction:column;gap:3px⟩
        - div
            ⟨font-size:14px;font-weight:600⟩
            "Casus"
        - div
            ⟨font-size:12px;color:#8b909b⟩
            "onderzoek · incident · backgroundcheck"
      - div
          ⟨display:flex;align-items:center;color:#5c616b;font-family:'JetBrains Mono',monospace⟩
          "→"
      - div
          ⟨padding:12px 16px;border-radius:8px;border:1px solid rgba(255,255,255,.12);display:flex;flex-direction:column;gap:3px⟩
        - div
            ⟨font-size:14px;font-weight:600⟩
            "Notitie"
        - div
            ⟨font-size:12px;color:#8b909b⟩
            "automatisch gelabeld en geplaatst"
      - div
          ⟨width:1px;background:rgba(255,255,255,.08);margin:0 8px⟩
      - div
          ⟨padding:12px 16px;border-radius:8px;border:1px dashed rgba(185,140,255,.45);display:flex;flex-direction:column;gap:3px⟩
        - div
            ⟨font-size:14px;font-weight:600;color:#b98cff⟩
            "Dingen"
        - div
            ⟨font-size:12px;color:#8b909b⟩
            "personen, kentekens, bedrijven, accounts: gedeeld over alle opdrachtgevers"
    - div
        ⟨display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;margin-top:4px⟩
      - div
          ⟨font-size:14px;line-height:1.55;color:#b6bcc6⟩
        - span
            ⟨color:#e8eaf0⟩
            "Het menu groeit niet."
        "Acht vaste regels. Nieuwe functies worden een onderdeel binnen een pagina, een soort binnen Dingen of een sjabloon binnen Rapporten."
      - div
          ⟨font-size:14px;line-height:1.55;color:#b6bcc6⟩
        - span
            ⟨color:#e8eaf0⟩
            "Bovenaan kies je de opdrachtgever."
        "Elke pagina filtert mee. Op "Alle" zie je alles door elkaar, met de opdrachtgever als kolom."
      - div
          ⟨font-size:14px;line-height:1.55;color:#b6bcc6⟩
        - span
            ⟨color:#e8eaf0⟩
            "Overzicht is proactief."
        "Het laat zien wat aandacht vraagt voordat het een incident wordt: verlopen keuringen, terugkerende personen, stijgende patronen."
  - div (id="2a")
      ⟨display:flex;flex-direction:column;gap:10px⟩
    - div
        ⟨display:flex;align-items:baseline;gap:8px⟩
      - a (href="#2a")
          ⟨font-family:'JetBrains Mono',monospace;font-size:11px;padding:3px 7px;background:rgba(255,255,255,.1);color:#e8eaf0;border-radius:4px⟩
          "2a"
      - span
          ⟨font-size:13px;color:#8b909b⟩
          "Computer · alles klikbaar: opdrachtgever wisselen of aanmaken, invoer typen, casussen, locaties, zoeken, rapport draaien"
    - div
        ⟨width:1440px;height:900px;background:#0b0d12;border:1px solid rgba(255,255,255,.08);border-radius:10px;overflow:hidden;display:grid;grid-template-columns:240px minmax(0,1fr)⟩
      - aside
          ⟨background:#0e1117;border-right:1px solid rgba(255,255,255,.06);display:flex;flex-direction:column;padding:18px 14px;gap:18px;position:relative⟩
        - div
            ⟨position:relative⟩
          - div (onclick="{{ toggleApps }}" title="Wissel van programma" style-hover="background:#151922")
              ⟨display:flex;align-items:center;gap:10px;padding:4px 6px;margin:-4px 0;border-radius:7px;cursor:pointer⟩
            - div
                ⟨width:22px;height:22px;border-radius:6px;border:2px solid #35d0c4⟩
            - div
                ⟨font-size:18px;font-weight:600;letter-spacing:.02em⟩
                "Phylax"
            - div
                ⟨margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                "▾"
          ▸ ALS {{ appsOpen }}
            - div
                ⟨position:absolute;top:calc(100% + 8px);left:0;width:290px;z-index:20;background:#151922;border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:6px;display:flex;flex-direction:column;gap:2px;box-shadow:0 16px 40px rgba(0,0,0,.5)⟩
              - div
                  ⟨padding:6px 10px 4px;font-family:'JetBrains Mono',monospace;font-size:10px;color:#8b909b;letter-spacing:.06em⟩
                  "PROGRAMMA"
              ▸ VOOR ELK a IN {{ apps }}
                - a (href="{{ a.href }}" style-hover="background:#1f2531")
                    ⟨display:grid;grid-template-columns:18px minmax(0,1fr) auto;gap:10px;align-items:center;padding:8px 10px;border-radius:6px;color:#e8eaf0;text-decoration:none;background:{{ a.bg }};opacity:{{ a.op }};pointer-events:{{ a.pe }}⟩
                  - span
                      ⟨width:16px;height:16px;border-radius:{{ a.rad }};border:2px solid {{ a.col }};background:{{ a.fill }}⟩
                  - span
                      ⟨display:flex;flex-direction:column;gap:2px;min-width:0⟩
                    - span
                        ⟨font-size:13px;font-weight:600⟩
                        "{{ a.name }}"
                    - span
                        ⟨font-size:11px;color:#8b909b⟩
                        "{{ a.desc }}"
                  - span
                      ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#35d0c4⟩
                      "{{ a.mark }}"
              - div
                  ⟨padding:8px 10px 4px;border-top:1px solid rgba(255,255,255,.06);margin-top:4px;font-size:11px;color:#8b909b;line-height:1.5;display:flex;flex-direction:column;gap:6px⟩
                - span
                    "{{ appsFoot }}"
                - a (href="Suite Start.dc.html" style-hover="color:#7fe6dd")
                    ⟨color:#35d0c4;text-decoration:none⟩
                    "Alle programma's"
        - div
            ⟨position:relative⟩
          - div (onclick="{{ toggleScope }}")
              ⟨padding:10px 12px;border-radius:8px;background:#151922;border:1px solid rgba(255,255,255,.08);display:flex;justify-content:space-between;align-items:center;gap:8px;cursor:pointer⟩
            - div
                ⟨display:flex;flex-direction:column;gap:3px;min-width:0⟩
              - div
                  ⟨font-family:'JetBrains Mono',monospace;font-size:10px;color:#8b909b;letter-spacing:.06em⟩
                  "OPDRACHTGEVER"
              - div
                  ⟨font-size:13px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                  "{{ scopeName }}"
            - div
                ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                "▾"
          ▸ ALS {{ scopeOpen }}
            - div
                ⟨position:absolute;top:calc(100% + 6px);left:0;right:0;z-index:10;background:#151922;border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:6px;display:flex;flex-direction:column;gap:2px;box-shadow:0 16px 40px rgba(0,0,0,.5)⟩
              ▸ VOOR ELK s IN {{ scopeList }}
                - div (onclick="{{ s.pick }}")
                    ⟨display:flex;justify-content:space-between;align-items:center;gap:8px;padding:8px 10px;border-radius:6px;cursor:pointer;background:{{ s.bg }}⟩
                  - span
                      ⟨font-size:13px⟩
                      "{{ s.label }}"
                  - span
                      ⟨font-family:'JetBrains Mono',monospace;font-size:10px;color:#8b909b⟩
                      "{{ s.tag }}"
              ▸ ALS {{ newClosed }}
                - div (onclick="{{ openNew }}")
                    ⟨padding:8px 10px;border-radius:6px;border-top:1px solid rgba(255,255,255,.06);margin-top:4px;font-size:13px;color:#35d0c4;cursor:pointer⟩
                    "+ Nieuw bedrijf of opdrachtgever"
              ▸ ALS {{ newOpen }}
                - div
                    ⟨display:flex;flex-direction:column;gap:8px;padding:10px;border-top:1px solid rgba(255,255,255,.06);margin-top:4px⟩
                  - input (value="{{ newName }}" onchange="{{ onNewName }}" placeholder="Naam")
                      ⟨height:34px;border-radius:6px;border:1px solid rgba(255,255,255,.14);background:#0b0d12;color:#e8eaf0;padding:0 10px;font-size:13px;outline:none⟩
                  - div
                      ⟨display:flex;flex-direction:column;gap:4px⟩
                    ▸ VOOR ELK r IN {{ roles }}
                      - div (onclick="{{ r.pick }}")
                          ⟨font-size:12px;padding:6px 8px;border-radius:6px;cursor:pointer;border:1px solid {{ r.bd }};color:{{ r.col }}⟩
                          "{{ r.label }}"
                  - div (onclick="{{ createClient }}")
                      ⟨text-align:center;padding:8px;border-radius:6px;font-size:13px;font-weight:600;cursor:pointer;background:{{ createBg }};color:{{ createCol }}⟩
                      "Aanmaken"
        - div (onclick="{{ goZoek }}")
            ⟨display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border-radius:8px;border:1px solid rgba(255,255,255,.1);color:#8b909b;font-size:13px;cursor:pointer⟩
          - span
              "Zoek overal"
          - span
              ⟨font-family:'JetBrains Mono',monospace;font-size:11px;padding:1px 6px;border:1px solid rgba(255,255,255,.12);border-radius:4px⟩
              "/"
        - nav
            ⟨display:flex;flex-direction:column;gap:14px⟩
          - div
              ⟨display:flex;flex-direction:column;gap:2px⟩
            ▸ VOOR ELK n IN {{ navA }}
              - div (onclick="{{ n.go }}")
                  ⟨display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border-radius:7px;cursor:pointer;font-size:13px;background:{{ n.bg }};color:{{ n.col }}⟩
                - span
                    "{{ n.label }}"
                - span
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:{{ n.ccol }}⟩
                    "{{ n.count }}"
          - div
              ⟨display:flex;flex-direction:column;gap:2px⟩
            ▸ VOOR ELK n IN {{ navB }}
              - div (onclick="{{ n.go }}")
                  ⟨display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border-radius:7px;cursor:pointer;font-size:13px;background:{{ n.bg }};color:{{ n.col }}⟩
                - span
                    "{{ n.label }}"
                - span
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:{{ n.ccol }}⟩
                    "{{ n.count }}"
          - div
              ⟨display:flex;flex-direction:column;gap:2px⟩
            ▸ VOOR ELK n IN {{ navC }}
              - div (onclick="{{ n.go }}")
                  ⟨display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border-radius:7px;cursor:pointer;font-size:13px;background:{{ n.bg }};color:{{ n.col }}⟩
                - span
                    "{{ n.label }}"
                - span
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:{{ n.ccol }}⟩
                    "{{ n.count }}"
        - div
            ⟨margin-top:auto;padding:12px;border-radius:8px;border:1px solid rgba(255,255,255,.06);display:flex;flex-direction:column;gap:6px⟩
          - div
              ⟨display:flex;align-items:center;gap:8px;font-size:12px⟩
            - span
                ⟨width:7px;height:7px;border-radius:50%;background:#56d38a⟩
            "Verbonden met SSOT"
          - div
              ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b;line-height:1.6⟩
              "live: Phylax · SAK · Ophanim"
      - div
          ⟨display:flex;flex-direction:column;min-width:0;min-height:0⟩
        - header
            ⟨height:52px;flex:none;border-bottom:1px solid rgba(255,255,255,.06);display:flex;align-items:center;justify-content:space-between;padding:0 20px;gap:16px⟩
          - div
              ⟨font-size:13px;color:#b6bcc6⟩
              "{{ crumb }}"
          - div
              ⟨display:flex;align-items:center;gap:14px⟩
            - div
                ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                "{{ url }}"
            - div (onclick="{{ goInvoer }}")
                ⟨font-size:12px;padding:6px 10px;border-radius:6px;background:#35d0c4;color:#04211f;font-weight:600;cursor:pointer⟩
                "+ Invoer"
        ▸ ALS {{ vOverzicht }}
          - div
              ⟨flex:1;min-height:0;overflow:auto;padding:28px 36px;display:flex;flex-direction:column;gap:26px⟩
            - div
                ⟨display:flex;flex-direction:column;gap:4px⟩
              - div
                  ⟨font-size:26px;font-weight:600;letter-spacing:-.01em⟩
                  "{{ scopeName }}"
              - div
                  ⟨font-size:13px;color:#8b909b⟩
                  "{{ ovSub }}"
            - div
                ⟨display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:28px;align-items:start⟩
              - div
                  ⟨display:flex;flex-direction:column;gap:10px⟩
                - div
                    ⟨display:flex;justify-content:space-between;align-items:baseline⟩
                  - div
                      ⟨font-size:15px;font-weight:600⟩
                      "Vraagt aandacht"
                  - div
                      ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                      "{{ attnCount }}"
                - div
                    ⟨display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.06)⟩
                  ▸ VOOR ELK a IN {{ attn }}
                    - div (onclick="{{ a.go }}")
                        ⟨display:grid;grid-template-columns:10px minmax(0,1fr) auto;gap:14px;padding:13px 0;border-bottom:1px solid rgba(255,255,255,.05);cursor:pointer;align-items:start⟩
                      - span
                          ⟨width:8px;height:8px;border-radius:50%;margin-top:6px;background:{{ a.col }}⟩
                      - div
                          ⟨display:flex;flex-direction:column;gap:4px;min-width:0⟩
                        - div
                            ⟨font-size:14px;line-height:1.4⟩
                            "{{ a.titel }}"
                        - div
                            ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                            "{{ a.detail }}"
                      - div
                          ⟨font-size:12px;color:#8b909b;white-space:nowrap⟩
                          "{{ a.waar }}"
              - div
                  ⟨display:flex;flex-direction:column;gap:26px⟩
                - div
                    ⟨display:flex;flex-direction:column;gap:10px⟩
                  - div
                      ⟨font-size:15px;font-weight:600⟩
                      "Per locatie"
                  - div
                      ⟨display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.06)⟩
                    - div
                        ⟨display:grid;grid-template-columns:minmax(0,1fr) 60px 70px 110px;gap:10px;padding:8px 0;font-size:11px;color:#8b909b;border-bottom:1px solid rgba(255,255,255,.05)⟩
                      - span
                          "Locatie"
                      - span
                          ⟨text-align:right⟩
                          "casussen"
                      - span
                          ⟨text-align:right⟩
                          "meld. 30d"
                      - span
                          ⟨text-align:right⟩
                          "keuringen"
                    ▸ VOOR ELK r IN {{ locRows }}
                      - div (onclick="{{ r.go }}")
                          ⟨display:grid;grid-template-columns:minmax(0,1fr) 60px 70px 110px;gap:10px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.05);cursor:pointer;align-items:baseline⟩
                        - div
                            ⟨display:flex;flex-direction:column;gap:2px;min-width:0⟩
                          - span
                              ⟨font-size:13px⟩
                              "{{ r.naam }}"
                          - span
                              ⟨font-size:11px;color:#8b909b⟩
                              "{{ r.client }}"
                        - span
                            ⟨font-family:'JetBrains Mono',monospace;font-size:12px;text-align:right⟩
                            "{{ r.cases }}"
                        - span
                            ⟨font-family:'JetBrains Mono',monospace;font-size:12px;text-align:right⟩
                            "{{ r.meld }}"
                        - span
                            ⟨font-family:'JetBrains Mono',monospace;font-size:11px;text-align:right;color:{{ r.kcol }}⟩
                            "{{ r.keur }}"
                - div
                    ⟨display:flex;flex-direction:column;gap:10px⟩
                  - div
                      ⟨font-size:15px;font-weight:600⟩
                      "Binnengekomen"
                  - div
                      ⟨display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.06)⟩
                    ▸ VOOR ELK i IN {{ inbox }}
                      - div
                          ⟨display:flex;flex-direction:column;gap:3px;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.05)⟩
                        - div
                            ⟨display:flex;justify-content:space-between;gap:8px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                          - span
                              "{{ i.app }}"
                          - span
                              "{{ i.tijd }}"
                        - div
                            ⟨font-size:13px⟩
                            "{{ i.tekst }}"
                        - div
                            ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#35d0c4⟩
                            "→ {{ i.casus }}"
        ▸ ALS {{ vInvoer }}
          - div
              ⟨flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) 400px⟩
            - div
                ⟨padding:28px 36px;display:flex;flex-direction:column;gap:16px;min-height:0⟩
              - div
                  ⟨display:flex;flex-direction:column;gap:4px⟩
                - div
                    ⟨font-size:26px;font-weight:600;letter-spacing:-.01em⟩
                    "Invoer"
                - div
                    ⟨font-size:13px;color:#8b909b⟩
                    "Typ of plak wat je weet. Phylax labelt het en zet het bij de juiste casus. Je controleert rechts."
              - textarea (value="{{ itext }}" onchange="{{ onIText }}" placeholder="Bijvoorbeeld: 22:15 Fietsenstalling Noord, twee jongens bij de rekken…")
                  ⟨flex:1;min-height:0;width:100%;resize:none;background:#12151c;border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:22px 24px;color:#e8eaf0;font-size:17px;line-height:1.7;outline:none⟩
              - div
                  ⟨display:flex;justify-content:space-between;align-items:center;gap:12px⟩
                - div
                    ⟨display:flex;gap:8px⟩
                  - div
                      ⟨font-size:12px;padding:8px 12px;border-radius:7px;border:1px solid rgba(255,255,255,.12);color:#b6bcc6⟩
                      "Bestand"
                  - div
                      ⟨font-size:12px;padding:8px 12px;border-radius:7px;border:1px solid rgba(255,255,255,.12);color:#b6bcc6⟩
                      "Webpagina vastleggen"
                  - div
                      ⟨font-size:12px;padding:8px 12px;border-radius:7px;border:1px solid rgba(255,255,255,.12);color:#b6bcc6⟩
                      "CSV / export"
                - div (onclick="{{ saveInvoer }}")
                    ⟨display:flex;align-items:center;gap:10px;padding:11px 18px;border-radius:8px;background:#35d0c4;color:#04211f;font-size:14px;font-weight:600;cursor:pointer⟩
                  "Opslaan"
                  - span
                      ⟨font-family:'JetBrains Mono',monospace;font-size:11px;opacity:.7⟩
                      "⌘↵"
            - div
                ⟨border-left:1px solid rgba(255,255,255,.06);background:#0e1117;overflow:auto;padding:24px 22px;display:flex;flex-direction:column;gap:22px⟩
              ▸ ALS {{ invSaved }}
                - div
                    ⟨padding:14px;border-radius:10px;border:1px solid rgba(53,208,196,.4);background:#0f1a1a;display:flex;flex-direction:column;gap:6px⟩
                  - div
                      ⟨font-size:14px;font-weight:600;color:#35d0c4⟩
                      "{{ invSavedTitle }}"
                  - div
                      ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#b6bcc6;line-height:1.6⟩
                      "{{ invSavedText }}"
                  - div (onclick="{{ invAgain }}")
                      ⟨font-size:12px;color:#8b909b;cursor:pointer;padding-top:4px⟩
                      "Nieuwe invoer"
              - div
                  ⟨display:flex;flex-direction:column;gap:10px⟩
                - div
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                    "HOORT BIJ"
                - div
                    ⟨display:flex;flex-direction:column;border:1px solid rgba(185,140,255,.35);border-radius:10px;overflow:hidden⟩
                  - div
                      ⟨display:grid;grid-template-columns:96px minmax(0,1fr);gap:10px;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.06)⟩
                    - span
                        ⟨font-size:12px;color:#8b909b⟩
                        "Opdrachtgever"
                    - span
                        ⟨font-size:13px⟩
                        "{{ route.client }}"
                  - div
                      ⟨display:grid;grid-template-columns:96px minmax(0,1fr);gap:10px;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.06)⟩
                    - span
                        ⟨font-size:12px;color:#8b909b⟩
                        "Locatie"
                    - span
                        ⟨font-size:13px⟩
                        "{{ route.loc }}"
                  - div
                      ⟨display:grid;grid-template-columns:96px minmax(0,1fr) auto;gap:10px;padding:10px 12px;align-items:baseline⟩
                    - span
                        ⟨font-size:12px;color:#8b909b⟩
                        "Casus"
                    - span
                        ⟨font-size:13px⟩
                        "{{ route.casus }}"
                    - span (onclick="{{ cycleCase }}")
                        ⟨font-size:12px;color:#35d0c4;cursor:pointer⟩
                        "wijzig"
                - div
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#b98cff;line-height:1.6⟩
                    "{{ route.basis }}"
              - div
                  ⟨display:flex;flex-direction:column;gap:10px⟩
                - div
                    ⟨display:flex;justify-content:space-between⟩
                  - div
                      ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                      "HERKEND"
                  - div
                      ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#e2ab44⟩
                      "{{ chipCount }}"
                - div
                    ⟨display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.06)⟩
                  ▸ VOOR ELK c IN {{ chips }}
                    - div
                        ⟨display:grid;grid-template-columns:104px minmax(0,1fr);gap:10px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.05)⟩
                      - span
                          ⟨font-size:12px;color:#8b909b⟩
                          "{{ c.soort }}"
                      - div
                          ⟨display:flex;flex-direction:column;gap:2px;min-width:0⟩
                        - span
                            ⟨font-family:'JetBrains Mono',monospace;font-size:13px;color:#e2ab44⟩
                            "{{ c.v }}"
                        - span
                            ⟨font-size:11px;color:{{ c.rcol }}⟩
                            "{{ c.ref }}"
              - div
                  ⟨display:flex;flex-direction:column;gap:8px⟩
                - div
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                    "CATEGORIE"
                - div
                    ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                  ▸ VOOR ELK c IN {{ cats }}
                    - span
                        ⟨font-size:12px;padding:5px 9px;border-radius:6px;border:1px solid rgba(255,255,255,.14)⟩
                        "{{ c }}"
              ▸ ALS {{ hasAlso }}
                - div
                    ⟨display:flex;flex-direction:column;gap:8px⟩
                  - div
                      ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                      "OOK GEVONDEN"
                  ▸ VOOR ELK a IN {{ also }}
                    - div
                        ⟨padding:10px 12px;border-radius:8px;background:#14121c;border:1px solid rgba(185,140,255,.25);font-size:13px;line-height:1.45⟩
                        "{{ a }}"
        ▸ ALS {{ vCasussen }}
          - div
              ⟨flex:1;min-height:0;display:grid;grid-template-columns:380px minmax(0,1fr)⟩
            - div
                ⟨border-right:1px solid rgba(255,255,255,.06);display:flex;flex-direction:column;min-height:0⟩
              - div
                  ⟨padding:14px 16px;display:flex;flex-direction:column;gap:12px;border-bottom:1px solid rgba(255,255,255,.06)⟩
                - div
                    ⟨display:flex;justify-content:space-between;align-items:center⟩
                  - div
                      ⟨font-size:15px;font-weight:600⟩
                      "Casussen"
                  - div
                      ⟨font-size:12px;padding:6px 10px;border-radius:6px;border:1px solid rgba(255,255,255,.14);cursor:pointer⟩
                      "+ Nieuwe casus"
                - div
                    ⟨display:flex;gap:4px;padding:3px;border-radius:8px;background:#12151c⟩
                  ▸ VOOR ELK f IN {{ caseFilters }}
                    - div (onclick="{{ f.pick }}")
                        ⟨flex:1;text-align:center;font-size:12px;padding:6px 4px;border-radius:6px;cursor:pointer;background:{{ f.bg }};color:{{ f.col }}⟩
                        "{{ f.label }}"
              - div
                  ⟨overflow:auto;display:flex;flex-direction:column⟩
                ▸ VOOR ELK c IN {{ caseList }}
                  - div (onclick="{{ c.pick }}")
                      ⟨padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.05);display:flex;flex-direction:column;gap:5px;cursor:pointer;background:{{ c.bg }}⟩
                    - div
                        ⟨display:flex;justify-content:space-between;gap:8px;font-family:'JetBrains Mono',monospace;font-size:11px⟩
                      - span
                          ⟨color:#8b909b⟩
                          "{{ c.id }} · {{ c.type }}"
                      - span
                          ⟨color:{{ c.scol }}⟩
                          "{{ c.st }}"
                    - div
                        ⟨font-size:14px⟩
                        "{{ c.titel }}"
                    - div
                        ⟨font-size:12px;color:#8b909b⟩
                        "{{ c.waar }}"
            - div
                ⟨overflow:auto;padding:28px 36px;display:flex;flex-direction:column;gap:24px⟩
              - div
                  ⟨display:flex;flex-direction:column;gap:8px⟩
                - div
                    ⟨display:flex;gap:10px;align-items:center;font-family:'JetBrains Mono',monospace;font-size:11px⟩
                  - span
                      ⟨color:#8b909b⟩
                      "{{ cs.id }} · {{ cs.type }}"
                  - span
                      ⟨padding:2px 7px;border-radius:4px;border:1px solid {{ cs.scol }};color:{{ cs.scol }}⟩
                      "{{ cs.st }}"
                  - span
                      ⟨color:#8b909b⟩
                      "bron {{ cs.bron }}"
                - div
                    ⟨font-size:26px;font-weight:600;letter-spacing:-.01em⟩
                    "{{ cs.titel }}"
              - div
                  ⟨display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.06);border-radius:10px;overflow:hidden⟩
                - div
                    ⟨background:#0b0d12;padding:12px 14px;display:flex;flex-direction:column;gap:3px⟩
                  - span
                      ⟨font-size:11px;color:#8b909b⟩
                      "Opdrachtgever"
                  - span
                      ⟨font-size:13px⟩
                      "{{ cs.client }}"
                - div
                    ⟨background:#0b0d12;padding:12px 14px;display:flex;flex-direction:column;gap:3px⟩
                  - span
                      ⟨font-size:11px;color:#8b909b⟩
                      "Locatie"
                  - span
                      ⟨font-size:13px⟩
                      "{{ cs.loc }}"
                - div
                    ⟨background:#0b0d12;padding:12px 14px;display:flex;flex-direction:column;gap:3px⟩
                  - span
                      ⟨font-size:11px;color:#8b909b⟩
                      "Geopend"
                  - span
                      ⟨font-size:13px⟩
                      "{{ cs.open }}"
                - div
                    ⟨background:#0b0d12;padding:12px 14px;display:flex;flex-direction:column;gap:3px⟩
                  - span
                      ⟨font-size:11px;color:#8b909b⟩
                      "Eigenaar"
                  - span
                      ⟨font-size:13px⟩
                      "{{ cs.eig }}"
              - div
                  ⟨display:flex;gap:28px;flex-wrap:wrap⟩
                ▸ VOOR ELK i IN {{ cs.inh }}
                  - div
                      ⟨display:flex;flex-direction:column;gap:2px⟩
                    - span
                        ⟨font-family:'JetBrains Mono',monospace;font-size:20px⟩
                        "{{ i.n }}"
                    - span
                        ⟨font-size:12px;color:#8b909b⟩
                        "{{ i.k }}"
              ▸ ALS {{ cs.hasLinks }}
                - div
                    ⟨display:flex;flex-direction:column;gap:10px⟩
                  - div
                      ⟨font-size:15px;font-weight:600;color:#b98cff⟩
                      "Phylax vond mogelijke koppelingen"
                  ▸ VOOR ELK l IN {{ cs.links }}
                    - div
                        ⟨padding:14px 16px;border-radius:10px;background:#14121c;border:1px solid {{ l.bd }};display:grid;grid-template-columns:minmax(0,1fr) auto;gap:16px;align-items:center;opacity:{{ l.op }}⟩
                      - div
                          ⟨display:flex;flex-direction:column;gap:4px⟩
                        - div
                            ⟨font-size:14px;line-height:1.45⟩
                            "{{ l.t }}"
                        - div
                            ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                            "rust op: {{ l.b }}"
                      ▸ ALS {{ l.pending }}
                        - div
                            ⟨display:flex;gap:6px⟩
                          - div (onclick="{{ l.ok }}")
                              ⟨font-size:12px;padding:7px 11px;border-radius:6px;background:#35d0c4;color:#04211f;font-weight:600;cursor:pointer⟩
                              "Koppel"
                          - div (onclick="{{ l.no }}")
                              ⟨font-size:12px;padding:7px 11px;border-radius:6px;border:1px solid rgba(255,255,255,.14);color:#b6bcc6;cursor:pointer⟩
                              "Niet"
                      ▸ ALS {{ l.done }}
                        - div
                            ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:{{ l.dcol }}⟩
                            "{{ l.dlabel }}"
              - div
                  ⟨display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:28px⟩
                - div
                    ⟨display:flex;flex-direction:column;gap:8px⟩
                  - div
                      ⟨font-size:15px;font-weight:600⟩
                      "Betrokken"
                  - div
                      ⟨display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.06)⟩
                    ▸ VOOR ELK b IN {{ cs.bet }}
                      - div
                          ⟨display:flex;flex-direction:column;gap:2px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.05)⟩
                        - span
                            ⟨font-size:13px⟩
                            "{{ b.n }}"
                        - span
                            ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                            "{{ b.r }} · {{ b.s }}"
                - div
                    ⟨display:flex;flex-direction:column;gap:8px⟩
                  - div
                      ⟨font-size:15px;font-weight:600⟩
                      "Laatste notities"
                  - div
                      ⟨display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.06)⟩
                    ▸ VOOR ELK n IN {{ cs.notes }}
                      - div
                          ⟨display:grid;grid-template-columns:86px minmax(0,1fr);gap:10px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.05)⟩
                        - span
                            ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b;padding-top:2px⟩
                            "{{ n.t }}"
                        - span
                            ⟨font-size:13px⟩
                            "{{ n.x }}"
        ▸ ALS {{ vLocaties }}
          - div
              ⟨flex:1;min-height:0;display:grid;grid-template-columns:300px minmax(0,1fr)⟩
            - div
                ⟨border-right:1px solid rgba(255,255,255,.06);display:flex;flex-direction:column;min-height:0⟩
              - div
                  ⟨padding:14px 16px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(255,255,255,.06)⟩
                - div
                    ⟨font-size:15px;font-weight:600⟩
                    "Locaties"
                - div
                    ⟨font-size:12px;padding:6px 10px;border-radius:6px;border:1px solid rgba(255,255,255,.14);cursor:pointer⟩
                    "+ Locatie"
              - div
                  ⟨overflow:auto;display:flex;flex-direction:column⟩
                ▸ VOOR ELK l IN {{ locList }}
                  - div (onclick="{{ l.pick }}")
                      ⟨padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.05);display:flex;flex-direction:column;gap:4px;cursor:pointer;background:{{ l.bg }}⟩
                    - div
                        ⟨font-size:14px⟩
                        "{{ l.naam }}"
                    - div
                        ⟨display:flex;justify-content:space-between;gap:8px⟩
                      - span
                          ⟨font-size:12px;color:#8b909b⟩
                          "{{ l.client }}"
                      - span
                          ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:{{ l.kcol }}⟩
                          "{{ l.keur }}"
            - div
                ⟨overflow:auto;padding:28px 36px;display:flex;flex-direction:column;gap:26px⟩
              - div
                  ⟨display:flex;justify-content:space-between;align-items:flex-end;gap:20px⟩
                - div
                    ⟨display:flex;flex-direction:column;gap:6px⟩
                  - div
                      ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                      "{{ lc.id }} · {{ lc.client }}"
                  - div
                      ⟨font-size:26px;font-weight:600;letter-spacing:-.01em⟩
                      "{{ lc.naam }}"
                  - div
                      ⟨font-size:13px;color:#8b909b⟩
                      "{{ lc.soort }}"
                - div
                    ⟨display:flex;gap:26px⟩
                  ▸ VOOR ELK s IN {{ lc.stats }}
                    - div
                        ⟨display:flex;flex-direction:column;gap:2px;align-items:flex-end⟩
                      - span
                          ⟨font-family:'JetBrains Mono',monospace;font-size:20px⟩
                          "{{ s.n }}"
                      - span
                          ⟨font-size:12px;color:#8b909b⟩
                          "{{ s.k }}"
              - div
                  ⟨display:flex;flex-direction:column;gap:10px⟩
                - div
                    ⟨display:flex;justify-content:space-between;align-items:baseline;gap:12px⟩
                  - div
                      ⟨display:flex;gap:14px;align-items:baseline⟩
                    - div
                        ⟨font-size:15px;font-weight:600⟩
                        "Blusmiddelen"
                    - div
                        ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                        "{{ lc.sum }}"
                  - div
                      ⟨font-size:12px;padding:6px 10px;border-radius:6px;border:1px solid rgba(255,255,255,.14);cursor:pointer⟩
                      "Keuring registreren"
                - div
                    ⟨display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.06)⟩
                  - div
                      ⟨display:grid;grid-template-columns:70px minmax(0,1.2fr) minmax(0,1.2fr) 100px 100px 130px;gap:12px;padding:8px 0;font-size:11px;color:#8b909b;border-bottom:1px solid rgba(255,255,255,.05)⟩
                    - span
                        "ID"
                    - span
                        "Type"
                    - span
                        "Plek"
                    - span
                        "Gekeurd"
                    - span
                        "Volgende"
                    - span
                        ⟨text-align:right⟩
                        "Status"
                  ▸ VOOR ELK b IN {{ lc.blus }}
                    - div
                        ⟨display:grid;grid-template-columns:70px minmax(0,1.2fr) minmax(0,1.2fr) 100px 100px 130px;gap:12px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.05);align-items:baseline⟩
                      - span
                          ⟨font-family:'JetBrains Mono',monospace;font-size:12px;color:#8b909b⟩
                          "{{ b.id }}"
                      - span
                          ⟨font-size:13px⟩
                          "{{ b.type }}"
                      - span
                          ⟨font-size:13px;color:#b6bcc6⟩
                          "{{ b.plek }}"
                      - span
                          ⟨font-family:'JetBrains Mono',monospace;font-size:12px;color:#8b909b⟩
                          "{{ b.vorig }}"
                      - span
                          ⟨font-family:'JetBrains Mono',monospace;font-size:12px⟩
                          "{{ b.volg }}"
                      - span
                          ⟨font-family:'JetBrains Mono',monospace;font-size:11px;text-align:right;color:{{ b.col }}⟩
                          "{{ b.st }}"
              - div
                  ⟨display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:28px⟩
                - div
                    ⟨display:flex;flex-direction:column;gap:10px⟩
                  - div
                      ⟨font-size:15px;font-weight:600⟩
                      "Installaties en documenten"
                  - div
                      ⟨display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.06)⟩
                    ▸ VOOR ELK i IN {{ lc.inst }}
                      - div
                          ⟨display:grid;grid-template-columns:minmax(0,1fr) 100px 120px;gap:12px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.05);align-items:baseline⟩
                        - div
                            ⟨display:flex;flex-direction:column;gap:2px;min-width:0⟩
                          - span
                              ⟨font-size:13px⟩
                              "{{ i.n }}"
                          - span
                              ⟨font-size:11px;color:#8b909b⟩
                              "{{ i.d }}"
                        - span
                            ⟨font-family:'JetBrains Mono',monospace;font-size:12px⟩
                            "{{ i.volg }}"
                        - span
                            ⟨font-family:'JetBrains Mono',monospace;font-size:11px;text-align:right;color:{{ i.col }}⟩
                            "{{ i.st }}"
                - div
                    ⟨display:flex;flex-direction:column;gap:10px⟩
                  - div
                      ⟨font-size:15px;font-weight:600⟩
                      "Bedrijven op deze locatie"
                  - div
                      ⟨display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.06)⟩
                    ▸ VOOR ELK b IN {{ lc.bedr }}
                      - div
                          ⟨display:flex;flex-direction:column;gap:2px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.05)⟩
                        - span
                            ⟨font-size:13px⟩
                            "{{ b.n }}"
                        - span
                            ⟨font-size:11px;color:#8b909b⟩
                            "{{ b.r }}"
        ▸ ALS {{ vDingen }}
          - div
              ⟨flex:1;min-height:0;overflow:auto;padding:28px 36px;display:flex;flex-direction:column;gap:18px⟩
            - div
                ⟨display:flex;justify-content:space-between;align-items:flex-end;gap:16px⟩
              - div
                  ⟨display:flex;flex-direction:column;gap:4px⟩
                - div
                    ⟨font-size:26px;font-weight:600;letter-spacing:-.01em⟩
                    "Dingen"
                - div
                    ⟨font-size:13px;color:#8b909b⟩
                    "Gedeeld over alle opdrachtgevers. Een persoon bestaat één keer, ook als hij bij drie klanten opduikt."
              - div
                  ⟨display:flex;gap:4px;padding:3px;border-radius:8px;background:#12151c⟩
                ▸ VOOR ELK f IN {{ dingFilters }}
                  - div (onclick="{{ f.pick }}")
                      ⟨font-size:12px;padding:6px 12px;border-radius:6px;cursor:pointer;background:{{ f.bg }};color:{{ f.col }}⟩
                      "{{ f.label }}"
            - div
                ⟨display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.06)⟩
              - div
                  ⟨display:grid;grid-template-columns:minmax(0,1fr) 100px minmax(0,1.3fr) minmax(0,1fr) 100px;gap:14px;padding:8px 0;font-size:11px;color:#8b909b;border-bottom:1px solid rgba(255,255,255,.05)⟩
                - span
                    "Naam"
                - span
                    "Soort"
                - span
                    "Komt voor bij"
                - span
                    "Status"
                - span
                    ⟨text-align:right⟩
                    "Laatst"
              ▸ VOOR ELK d IN {{ dingRows }}
                - div (onclick="{{ d.go }}")
                    ⟨display:grid;grid-template-columns:minmax(0,1fr) 100px minmax(0,1.3fr) minmax(0,1fr) 100px;gap:14px;padding:11px 0;border-bottom:1px solid rgba(255,255,255,.05);align-items:baseline;cursor:pointer⟩
                  - span
                      ⟨font-size:14px⟩
                      "{{ d.n }}"
                  - span
                      ⟨font-size:12px;color:#8b909b⟩
                      "{{ d.s }}"
                  - span
                      ⟨font-size:13px;color:{{ d.ccol }}⟩
                      "{{ d.c }}"
                  - span
                      ⟨font-size:13px;color:#b6bcc6⟩
                      "{{ d.st }}"
                  - span
                      ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b;text-align:right⟩
                      "{{ d.t }}"
        ▸ ALS {{ vOnderzoek }}
          - div
              ⟨flex:1;min-height:0;display:grid;grid-template-columns:300px minmax(0,1fr) 360px⟩
            - div
                ⟨border-right:1px solid rgba(255,255,255,.06);display:flex;flex-direction:column;min-height:0⟩
              - div
                  ⟨padding:16px;border-bottom:1px solid rgba(255,255,255,.06);display:flex;flex-direction:column;gap:3px⟩
                - div
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                    "ONDERWERP · {{ curSoort }}"
                - div
                    ⟨font-size:18px;font-weight:600⟩
                    "{{ osName }}"
                - div
                    ⟨font-size:12px;color:#8b909b⟩
                    "{{ curSub }}"
              - div
                  ⟨overflow:auto;display:flex;flex-direction:column⟩
                - div
                    ⟨padding:12px 16px 6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                    "WISSEL ONDERWERP"
                ▸ VOOR ELK s IN {{ osSubjList }}
                  - div (onclick="{{ s.pick }}")
                      ⟨padding:9px 16px;display:flex;justify-content:space-between;gap:8px;cursor:pointer;background:{{ s.bg }}⟩
                    - span
                        ⟨font-size:13px⟩
                        "{{ s.label }}"
                    - span
                        ⟨font-size:11px;color:#8b909b⟩
                        "{{ s.tag }}"
                - div
                    ⟨display:flex;flex-direction:column;gap:8px;padding:16px 16px 10px⟩
                  - div
                      ⟨display:flex;justify-content:space-between⟩
                    - span
                        ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                        "BRONNEN"
                    - span
                        ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                        "{{ osFoundSum }}"
                  - div
                      ⟨display:flex;height:6px;border-radius:3px;overflow:hidden;background:#12151c⟩
                    ▸ VOOR ELK b IN {{ osBar }}
                      - span
                          ⟨width:{{ b.w }};background:{{ b.c }}⟩
                  - div
                      ⟨display:flex;flex-wrap:wrap;gap:4px 10px⟩
                    ▸ VOOR ELK b IN {{ osBar }}
                      - span
                          ⟨display:flex;align-items:center;gap:5px;font-size:11px;color:#8b909b⟩
                        - span
                            ⟨width:6px;height:6px;border-radius:50%;background:{{ b.c }}⟩
                        "{{ b.t }}"
                ▸ VOOR ELK s IN {{ osSources }}
                  - div (onclick="{{ s.pick }}")
                      ⟨padding:10px 16px;border-top:1px solid rgba(255,255,255,.04);display:flex;flex-direction:column;gap:4px;cursor:pointer;background:{{ s.bg }}⟩
                    - div
                        ⟨display:flex;justify-content:space-between;gap:8px;align-items:center⟩
                      - span
                          ⟨font-size:13px⟩
                          "{{ s.plat }}"
                      - span
                          ⟨display:flex;align-items:center;gap:6px;font-size:11px;color:{{ s.col }}⟩
                        - span
                            ⟨width:7px;height:7px;border-radius:50%;background:{{ s.dot }}⟩
                        "{{ s.st }}"
                    - div
                        ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                        "{{ s.q }}{{ s.metaSep }}{{ s.meta }}"
                    ▸ ALS {{ s.isTodo }}
                      - div
                          ⟨display:flex;gap:6px;padding-top:2px⟩
                        - span (onclick="{{ s.markFound }}")
                            ⟨font-size:11px;padding:4px 8px;border-radius:5px;border:1px solid rgba(53,208,196,.4);color:#35d0c4⟩
                            "Gevonden"
                        - span (onclick="{{ s.markNone }}")
                            ⟨font-size:11px;padding:4px 8px;border-radius:5px;border:1px solid rgba(255,255,255,.14);color:#b6bcc6⟩
                            "Niets gevonden"
                    ▸ ALS {{ s.isErr }}
                      - div
                          ⟨display:flex;gap:6px;padding-top:2px⟩
                        - span (onclick="{{ s.retry }}")
                            ⟨font-size:11px;padding:4px 8px;border-radius:5px;border:1px solid rgba(242,86,77,.4);color:#f2564d⟩
                            "Opnieuw inplannen"
            - div
                ⟨overflow:auto;padding:22px 28px;display:flex;flex-direction:column;gap:18px;min-width:0⟩
              - div
                  ⟨display:flex;flex-direction:column;gap:12px⟩
                - div
                    ⟨display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap⟩
                  - div
                      ⟨display:flex;gap:4px;padding:3px;border-radius:8px;background:#12151c⟩
                    ▸ VOOR ELK m IN {{ osMeths }}
                      - div (onclick="{{ m.pick }}")
                          ⟨padding:6px 12px;border-radius:6px;font-size:13px;cursor:pointer;background:{{ m.bg }};color:{{ m.col }}⟩
                          "{{ m.label }}"
                  - div
                      ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                      "{{ osStepSum }}"
                - div
                    ⟨font-size:12px;color:#8b909b⟩
                    "{{ osMethDesc }}"
                - div
                    ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                  ▸ VOOR ELK s IN {{ osSteps }}
                    - div (onclick="{{ s.pick }}")
                        ⟨display:flex;align-items:center;gap:8px;padding:7px 11px 7px 7px;border-radius:8px;cursor:pointer;border:1px solid {{ s.bd }};background:{{ s.bg }}⟩
                      - span
                          ⟨width:18px;height:18px;border-radius:50%;border:1px solid {{ s.bd }};display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace;font-size:10px;color:{{ s.col }}⟩
                          "{{ s.mark }}"
                      - span
                          ⟨font-size:12px;color:{{ s.col }}⟩
                          "{{ s.label }}"
              - div
                  ⟨display:flex;gap:22px;border-bottom:1px solid rgba(255,255,255,.06)⟩
                ▸ VOOR ELK t IN {{ osTabs }}
                  - div (onclick="{{ t.pick }}")
                      ⟨padding-bottom:10px;margin-bottom:-1px;font-size:14px;cursor:pointer;color:{{ t.col }};border-bottom:2px solid {{ t.bd }}⟩
                      "{{ t.label }}"
              ▸ ALS {{ tabVast }}
                ▸ ALS {{ notSig }}
                  - div
                      ⟨display:flex;flex-direction:column;gap:10px⟩
                    - div
                        ⟨display:flex;gap:8px;align-items:center⟩
                      - input (value="{{ osUrl }}" onchange="{{ onOsUrl }}" placeholder="Plak een URL om vast te leggen")
                          ⟨flex:1;min-width:0;height:44px;border-radius:10px;border:1px solid rgba(255,255,255,.12);background:#12151c;color:#e8eaf0;padding:0 14px;font-size:13px;outline:none⟩
                      - div (onclick="{{ saveCapture }}")
                          ⟨height:44px;padding:0 16px;display:flex;align-items:center;border-radius:10px;background:#35d0c4;color:#04211f;font-size:13px;font-weight:600;cursor:pointer⟩
                          "Leg vast"
                    - div
                        ⟨display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap⟩
                      - div
                          ⟨display:flex;gap:6px⟩
                        ▸ VOOR ELK c IN {{ osCaps }}
                          - div (onclick="{{ c.pick }}")
                              ⟨font-size:12px;padding:5px 10px;border-radius:6px;cursor:pointer;border:1px solid {{ c.bd }};color:{{ c.col }}⟩
                              "{{ c.label }}"
                      - div
                          ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                          "bewaart URL · schermafdruk · WARC · tijdstip · sha256"
                  - div
                      ⟨display:flex;justify-content:space-between;align-items:baseline⟩
                    - div
                        ⟨font-size:15px;font-weight:600⟩
                        "Vastgelegd"
                    - div
                        ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                        "{{ osFindCount }}"
                  ▸ VOOR ELK f IN {{ osFindings }}
                    - div
                        ⟨background:#12151c;border:1px solid rgba(255,255,255,.07);border-radius:10px;overflow:hidden;display:grid;grid-template-columns:150px minmax(0,1fr)⟩
                      - div
                          ⟨background:#0e1117;border-right:1px solid rgba(255,255,255,.06);min-height:150px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#5c616b;text-align:center;padding:10px⟩
                        - span
                            "schermafdruk"
                        - span
                            ⟨font-size:10px⟩
                            "{{ f.methode }}"
                      - div
                          ⟨padding:14px 16px;display:flex;flex-direction:column;gap:9px;min-width:0⟩
                        - div
                            ⟨display:flex;justify-content:space-between;gap:8px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                          - span
                              "{{ f.src }} · {{ f.id }}"
                          - span
                              "{{ f.tijd }}"
                        - div
                            ⟨font-size:14px;font-weight:500⟩
                            "{{ f.titel }}"
                        - div
                            ⟨font-size:13px;line-height:1.5;color:#b6bcc6⟩
                            "{{ f.note }}"
                        - div
                            ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                          ▸ VOOR ELK l IN {{ f.labels }}
                            - span (onclick="{{ l.confirm }}")
                                ⟨display:inline-flex;align-items:center;gap:6px;font-size:12px;padding:5px 9px;border-radius:6px;cursor:pointer;border:1px solid {{ l.col }};background:{{ l.bg }};color:{{ l.col }};text-decoration:{{ l.dec }}⟩
                              "{{ l.mark }}{{ l.soort }}: {{ l.v }}"
                              - span (onclick="{{ l.reject }}")
                                  ⟨color:#8b909b;padding-left:2px⟩
                                  "✕"
                        - div
                            ⟨display:flex;flex-direction:column;border-radius:6px;overflow:hidden;border:1px solid rgba(255,255,255,.05)⟩
                          - div
                              ⟨padding:7px 10px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#b6bcc6;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-bottom:1px solid rgba(255,255,255,.05)⟩
                              "{{ f.url }}"
                          - div
                              ⟨display:grid;grid-template-columns:repeat(4,minmax(0,1fr))⟩
                            - div
                                ⟨padding:7px 10px;display:flex;flex-direction:column;gap:2px⟩
                              - span
                                  ⟨font-size:10px;color:#5c616b⟩
                                  "opgehaald"
                              - span
                                  ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#b6bcc6⟩
                                  "{{ f.tijd }}"
                            - div
                                ⟨padding:7px 10px;display:flex;flex-direction:column;gap:2px⟩
                              - span
                                  ⟨font-size:10px;color:#5c616b⟩
                                  "door"
                              - span
                                  ⟨font-size:11px;color:#b6bcc6⟩
                                  "{{ f.door }}"
                            - div
                                ⟨padding:7px 10px;display:flex;flex-direction:column;gap:2px⟩
                              - span
                                  ⟨font-size:10px;color:#5c616b⟩
                                  "archief"
                              - span
                                  ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#b6bcc6⟩
                                  "{{ f.arch }}"
                            - div
                                ⟨padding:7px 10px;display:flex;flex-direction:column;gap:2px⟩
                              - span
                                  ⟨font-size:10px;color:#5c616b⟩
                                  "sha256"
                              - span
                                  ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#b6bcc6⟩
                                  "{{ f.hash }}"
                        - div
                            ⟨display:flex;align-items:center;gap:6px;font-size:11px;color:#8b909b⟩
                          - span
                              ⟨width:6px;height:6px;border-radius:50%;background:#35d0c4⟩
                          "{{ f.integ }}"
                  ▸ ALS {{ osEmpty }}
                    - div
                        ⟨padding:24px;border:1px dashed rgba(255,255,255,.12);border-radius:10px;font-size:13px;color:#8b909b;text-align:center⟩
                        "Nog niets vastgelegd voor dit onderwerp. Plak hierboven een URL of begin bij een bron links."
                ▸ ALS {{ isSig }}
                  - div
                      ⟨display:flex;justify-content:space-between;align-items:baseline⟩
                    - div
                        ⟨font-size:15px;font-weight:600⟩
                        "Binnengekomen over {{ osName }}"
                    - div
                        ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                        "telefoon · portofoon · SAK"
                  - div
                      ⟨display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.06)⟩
                    ▸ VOOR ELK m IN {{ osSig }}
                      - div
                          ⟨display:grid;grid-template-columns:96px minmax(0,1fr) auto;gap:14px;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.05);align-items:baseline⟩
                        - span
                            ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                            "{{ m.tijd }}"
                        - div
                            ⟨display:flex;flex-direction:column;gap:3px;min-width:0⟩
                          - span
                              ⟨font-size:14px;line-height:1.45⟩
                              "{{ m.t }}"
                          - span
                              ⟨font-size:11px;color:#8b909b⟩
                              "{{ m.app }} · {{ m.ref }}"
                        - span
                            ⟨font-size:11px;color:#e2ab44⟩
                            "naar tijdlijn"
                  ▸ ALS {{ osSigEmpty }}
                    - div
                        ⟨padding:24px;border:1px dashed rgba(255,255,255,.12);border-radius:10px;font-size:13px;color:#8b909b;text-align:center⟩
                        "Geen berichten over dit onderwerp via telefoon, portofoon of SAK."
              ▸ ALS {{ tabTijd }}
                - div
                    ⟨display:flex;gap:14px;flex-wrap:wrap⟩
                  - span
                      ⟨display:flex;align-items:center;gap:6px;font-size:11px;color:#8b909b⟩
                    - span
                        ⟨width:7px;height:7px;border-radius:50%;background:#35d0c4⟩
                    "vastgelegd online"
                  - span
                      ⟨display:flex;align-items:center;gap:6px;font-size:11px;color:#8b909b⟩
                    - span
                        ⟨width:7px;height:7px;border-radius:50%;background:#e2ab44⟩
                    "telefoon, portofoon, SAK"
                  - span
                      ⟨display:flex;align-items:center;gap:6px;font-size:11px;color:#8b909b⟩
                    - span
                        ⟨width:7px;height:7px;border-radius:50%;background:#8b909b⟩
                    "notitie in casus"
                - div
                    ⟨display:flex;flex-direction:column;gap:18px⟩
                  ▸ VOOR ELK g IN {{ osTime }}
                    - div
                        ⟨display:grid;grid-template-columns:96px minmax(0,1fr);gap:16px⟩
                      - div
                          ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b;padding-top:2px⟩
                          "{{ g.d }}"
                      - div
                          ⟨display:flex;flex-direction:column;border-left:1px solid rgba(255,255,255,.1)⟩
                        ▸ VOOR ELK e IN {{ g.items }}
                          - div
                              ⟨display:grid;grid-template-columns:52px minmax(0,1fr);gap:10px;padding:0 0 14px 0;position:relative⟩
                            - span
                                ⟨position:absolute;left:-4px;top:5px;width:7px;height:7px;border-radius:50%;background:{{ e.col }}⟩
                            - span
                                ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b;padding-left:14px⟩
                                "{{ e.uur }}"
                            - div
                                ⟨display:flex;flex-direction:column;gap:2px;min-width:0⟩
                              - span
                                  ⟨font-size:13px;line-height:1.45⟩
                                  "{{ e.t }}"
                              - span
                                  ⟨font-size:11px;color:#8b909b⟩
                                  "{{ e.soort }} · {{ e.ref }}"
              ▸ ALS {{ tabNet }}
                - div
                    ⟨position:relative;height:480px;border-radius:12px;background:#0e1117;border:1px solid rgba(255,255,255,.06);overflow:hidden⟩
                  "{{ osEdges }}"
                  - div
                      ⟨position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);padding:12px 16px;border-radius:10px;background:#1a1f29;border:1px solid #35d0c4;display:flex;flex-direction:column;align-items:center;gap:2px;text-align:center⟩
                    - span
                        ⟨font-size:10px;color:#8b909b⟩
                        "{{ curSoort }}"
                    - span
                        ⟨font-size:14px;font-weight:600⟩
                        "{{ osName }}"
                  ▸ VOOR ELK n IN {{ osNodes }}
                    - div (onclick="{{ n.go }}")
                        ⟨position:absolute;left:{{ n.left }};top:{{ n.top }};transform:translate(-50%,-50%);max-width:150px;padding:7px 10px;border-radius:8px;background:#12151c;border:1px {{ n.bs }} {{ n.c }};display:flex;flex-direction:column;gap:1px;text-align:center;cursor:{{ n.cur }}⟩
                      - span
                          ⟨font-size:10px;color:#8b909b⟩
                          "{{ n.soort }}"
                      - span
                          ⟨font-size:12px;line-height:1.3⟩
                          "{{ n.label }}"
                - div
                    ⟨display:flex;gap:16px;flex-wrap:wrap;font-size:11px;color:#8b909b⟩
                  - span
                      ⟨display:flex;align-items:center;gap:6px⟩
                    - span
                        ⟨width:16px;border-top:1px solid #35d0c4⟩
                    "bevestigd"
                  - span
                      ⟨display:flex;align-items:center;gap:6px⟩
                    - span
                        ⟨width:16px;border-top:1px dashed #e2ab44⟩
                    "label voorgesteld"
                  - span
                      ⟨display:flex;align-items:center;gap:6px⟩
                    - span
                        ⟨width:16px;border-top:1px dashed #b98cff⟩
                    "verband voorgesteld"
                  - span
                      ⟨display:flex;align-items:center;gap:6px⟩
                    - span
                        ⟨width:16px;border-top:1px solid #b6bcc6⟩
                    "casus"
                  - span
                      ⟨display:flex;align-items:center;gap:6px⟩
                    - span
                        ⟨width:16px;border-top:1px dotted #5c616b⟩
                    "afgewezen"
                - div
                    ⟨font-size:12px;color:#8b909b⟩
                    "Bevestig of wijs labels af bij Vastgelegd; de lijnen volgen. Klik op een casus of onderwerp om ernaartoe te gaan."
            - div
                ⟨border-left:1px solid rgba(255,255,255,.06);background:#0e1117;overflow:auto;padding:22px;display:flex;flex-direction:column;gap:20px⟩
              - div
                  ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                  "ASSISTENT"
              ▸ ALS {{ osHasVer }}
                - div
                    ⟨display:flex;flex-direction:column;gap:10px;padding:14px;border-radius:10px;border:1px solid rgba(185,140,255,.3);background:#14121c⟩
                  - div
                      ⟨font-size:12px;color:#b98cff⟩
                      "Verband · voorstel"
                  - div
                      ⟨font-size:14px;line-height:1.5⟩
                      "{{ osVerband.t }}"
                  - div
                      ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b;line-height:1.6⟩
                      "rust op: {{ osVerband.b }}"
                  ▸ ALS {{ osVerband.pending }}
                    - div
                        ⟨display:flex;gap:8px⟩
                      - div (onclick="{{ osVerband.ok }}")
                          ⟨flex:1;text-align:center;padding:9px;border-radius:7px;background:#35d0c4;color:#04211f;font-size:13px;font-weight:600;cursor:pointer⟩
                          "Bevestig"
                      - div (onclick="{{ osVerband.no }}")
                          ⟨flex:1;text-align:center;padding:9px;border-radius:7px;border:1px solid rgba(242,86,77,.5);color:#f2564d;font-size:13px;cursor:pointer⟩
                          "Wijs af"
                  ▸ ALS {{ osVerband.done }}
                    - div
                        ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b;color:{{ osVerband.dcol }}⟩
                        "{{ osVerband.dlabel }}"
              - div
                  ⟨display:flex;flex-direction:column;gap:8px⟩
                - div
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                    "VOORGESTELDE ZOEKOPDRACHTEN"
                ▸ VOOR ELK q IN {{ osSugg }}
                  - div
                      ⟨display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center;padding:10px 12px;border-radius:8px;background:#12151c⟩
                    - div
                        ⟨display:flex;flex-direction:column;gap:3px;min-width:0⟩
                      - span
                          ⟨font-size:13px⟩
                        "{{ q.plat }}:"
                        - span
                            ⟨font-family:'JetBrains Mono',monospace;font-size:12px;color:#b6bcc6⟩
                            "{{ q.q }}"
                      - span
                          ⟨font-size:11px;color:#8b909b⟩
                          "{{ q.why }}"
                    - div (onclick="{{ q.run }}")
                        ⟨font-size:12px;padding:6px 10px;border-radius:6px;border:1px solid rgba(53,208,196,.4);color:#35d0c4;cursor:pointer⟩
                        "Naar bronnen"
                ▸ ALS {{ osSuggEmpty }}
                  - div
                      ⟨font-size:12px;line-height:1.5;color:#8b909b⟩
                      "Bevestig labels bij Vastgelegd, dan stel ik vervolgzoekopdrachten voor."
              - div
                  ⟨display:flex;flex-direction:column;gap:10px⟩
                - div
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                    "NOG TE CONTROLEREN"
                ▸ VOOR ELK c IN {{ osChecks }}
                  - div (onclick="{{ c.pick }}")
                      ⟨display:flex;align-items:center;gap:10px;cursor:pointer;font-size:13px;color:{{ c.col }};text-decoration:{{ c.dec }}⟩
                    - span
                        ⟨width:14px;height:14px;border-radius:4px;flex:none;border:1px solid rgba(255,255,255,.18);background:{{ c.box }}⟩
                    "{{ c.label }}"
              - div
                  ⟨display:flex;flex-direction:column;gap:6px⟩
                - div
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                    "AL GEZOCHT"
                - div
                    ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                  ▸ VOOR ELK q IN {{ osQueries }}
                    - span
                        ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b;padding:4px 8px;border-radius:5px;background:#12151c⟩
                        "{{ q }}"
              - div
                  ⟨display:flex;flex-direction:column;gap:8px⟩
                - div
                    ⟨display:flex;justify-content:space-between;align-items:center⟩
                  - span
                      ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                      "GEKOPPELD AAN"
                  - span (onclick="{{ toggleLink }}")
                      ⟨font-size:12px;color:#35d0c4;cursor:pointer⟩
                      "+ Koppel casus"
                ▸ VOOR ELK c IN {{ osLinked }}
                  - div (onclick="{{ c.go }}")
                      ⟨display:flex;justify-content:space-between;gap:10px;padding:9px 12px;border-radius:8px;border:1px solid rgba(255,255,255,.08);cursor:pointer⟩
                    - div
                        ⟨display:flex;flex-direction:column;gap:2px;min-width:0⟩
                      - span
                          ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                          "{{ c.id }} · {{ c.type }}"
                      - span
                          ⟨font-size:13px⟩
                          "{{ c.titel }}"
                    - span
                        ⟨font-size:13px;color:#8b909b⟩
                        "→"
                ▸ ALS {{ osLinkOpen }}
                  - div
                      ⟨display:flex;flex-direction:column;gap:2px;padding:6px;border-radius:8px;background:#151922;border:1px solid rgba(255,255,255,.1)⟩
                    ▸ VOOR ELK c IN {{ osLinkable }}
                      - div (onclick="{{ c.pick }}" style-hover="background:#1f2531")
                          ⟨padding:7px 8px;border-radius:6px;font-size:12px;cursor:pointer;color:#b6bcc6⟩
                          "{{ c.id }} · {{ c.titel }}"
                - div
                    ⟨font-size:12px;line-height:1.5;color:#8b909b⟩
                    "{{ osConfCount }}"
              - div (onclick="{{ goReport }}")
                  ⟨display:flex;justify-content:space-between;align-items:center;gap:10px;padding:12px 14px;border-radius:10px;border:1px solid rgba(255,255,255,.12);cursor:pointer⟩
                - div
                    ⟨display:flex;flex-direction:column;gap:3px⟩
                  - span
                      ⟨font-size:13px⟩
                      "Onderzoeksrapport"
                  - span
                      ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                      "{{ repCount }}"
                - span
                    ⟨font-size:13px;color:#35d0c4⟩
                    "Open →"
              - div
                  ⟨font-size:12px;line-height:1.55;color:#8b909b;border-top:1px solid rgba(255,255,255,.06);padding-top:14px⟩
                  "Bevindingen zijn voorstellen tot je ze bevestigt. Wat je bevestigt wordt een bewering op {{ osName }}, met de vastgelegde pagina als bron."
        ▸ ALS {{ vWerkbak }}
          - div
              ⟨flex:1;min-height:0;overflow:auto;padding:28px 36px;display:flex;flex-direction:column;gap:18px⟩
            - div
                ⟨display:flex;flex-direction:column;gap:4px;max-width:980px⟩
              - div
                  ⟨font-size:26px;font-weight:600;letter-spacing:-.01em⟩
                  "Werkbak"
              - div
                  ⟨font-size:13px;color:#8b909b⟩
                  "Labels en koppelingen die Phylax voorstelt, uit alle programma's. Bevestigen of afwijzen is het leersignaal."
            - div
                ⟨display:flex;flex-direction:column;gap:10px;max-width:980px⟩
              ▸ VOOR ELK q IN {{ queue }}
                - div
                    ⟨background:#12151c;border:1px solid {{ q.bd }};border-radius:10px;padding:16px 18px;display:grid;grid-template-columns:minmax(0,1fr) 210px;gap:20px;align-items:center;opacity:{{ q.op }}⟩
                  - div
                      ⟨display:flex;flex-direction:column;gap:6px;min-width:0⟩
                    - div
                        ⟨display:flex;gap:8px;flex-wrap:wrap;font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                      - span
                          "{{ q.app }}"
                      - span
                          "·"
                      - span
                          "{{ q.client }}"
                      - span
                          "·"
                      - span
                          "{{ q.tijd }}"
                    - div
                        ⟨font-size:15px;line-height:1.45⟩
                        "{{ q.t }}"
                    - div
                        ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                        "rust op: {{ q.b }}"
                  ▸ ALS {{ q.pending }}
                    - div
                        ⟨display:flex;gap:8px⟩
                      - div (onclick="{{ q.ok }}")
                          ⟨flex:1;text-align:center;padding:9px;border-radius:7px;background:#35d0c4;color:#04211f;font-size:13px;font-weight:600;cursor:pointer⟩
                          "Bevestig"
                      - div (onclick="{{ q.no }}")
                          ⟨flex:1;text-align:center;padding:9px;border-radius:7px;border:1px solid rgba(242,86,77,.5);color:#f2564d;font-size:13px;cursor:pointer⟩
                          "Wijs af"
                  ▸ ALS {{ q.done }}
                    - div
                        ⟨display:flex;justify-content:space-between;gap:8px⟩
                      - span
                          ⟨font-family:'JetBrains Mono',monospace;font-size:12px;color:{{ q.dcol }}⟩
                          "{{ q.dlabel }}"
                      - span (onclick="{{ q.undo }}")
                          ⟨font-size:12px;color:#8b909b;cursor:pointer⟩
                          "terug"
        ▸ ALS {{ vZoek }}
          - div
              ⟨flex:1;min-height:0;overflow:auto;padding:28px 36px;display:flex;flex-direction:column;gap:20px⟩
            - input (value="{{ q }}" onchange="{{ onQ }}" placeholder="Naam, kenteken, adres, telefoon, casus, blusmiddel…")
                ⟨height:56px;border-radius:12px;border:1px solid rgba(53,208,196,.45);background:#12151c;color:#e8eaf0;padding:0 20px;font-size:20px;outline:none;max-width:980px⟩
            - div
                ⟨display:flex;gap:8px;flex-wrap:wrap;font-size:12px;color:#8b909b⟩
              - span
                  "{{ resSum }}"
              ▸ VOOR ELK c IN {{ resCounts }}
                - span
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;padding:2px 7px;border-radius:4px;border:1px solid rgba(255,255,255,.12);color:#b6bcc6⟩
                    "{{ c }}"
            - div
                ⟨display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:28px;align-items:start;max-width:1160px⟩
              - div
                  ⟨display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.06)⟩
                ▸ VOOR ELK r IN {{ results }}
                  - div (onclick="{{ r.go }}")
                      ⟨display:grid;grid-template-columns:110px minmax(0,1fr) minmax(0,.8fr);gap:14px;padding:11px 0;border-bottom:1px solid rgba(255,255,255,.05);align-items:baseline;cursor:pointer⟩
                    - span
                        ⟨font-size:12px;color:#8b909b⟩
                        "{{ r.soort }}"
                    - div
                        ⟨display:flex;flex-direction:column;gap:2px;min-width:0⟩
                      - span
                          ⟨font-size:14px⟩
                          "{{ r.titel }}"
                      - span
                          ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                          "{{ r.sub }}"
                    - span
                        ⟨font-size:12px;color:#b6bcc6;text-align:right⟩
                        "{{ r.client }}"
              ▸ ALS {{ showLinks }}
                - div
                    ⟨display:flex;flex-direction:column;gap:10px⟩
                  - div
                      ⟨font-size:15px;font-weight:600;color:#b98cff⟩
                      "Kan gekoppeld worden"
                  ▸ VOOR ELK l IN {{ zlinks }}
                    - div
                        ⟨padding:12px 14px;border-radius:10px;background:#14121c;border:1px solid rgba(185,140,255,.25);display:flex;flex-direction:column;gap:4px⟩
                      - div
                          ⟨font-size:13px;line-height:1.45⟩
                          "{{ l.t }}"
                      - div
                          ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                          "{{ l.b }}"
                  - div (onclick="{{ goWerkbak }}")
                      ⟨font-size:12px;color:#35d0c4;cursor:pointer⟩
                      "Beoordelen in werkbak →"
        ▸ ALS {{ vRapporten }}
          - div
              ⟨flex:1;min-height:0;display:grid;grid-template-columns:250px 280px minmax(0,1fr)⟩
            - div
                ⟨border-right:1px solid rgba(255,255,255,.06);display:flex;flex-direction:column;min-height:0⟩
              - div
                  ⟨padding:14px 16px;border-bottom:1px solid rgba(255,255,255,.06);font-size:15px;font-weight:600⟩
                  "Rapporten"
              ▸ VOOR ELK t IN {{ tpls }}
                - div (onclick="{{ t.pick }}")
                    ⟨padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.05);display:flex;flex-direction:column;gap:3px;cursor:pointer;background:{{ t.bg }}⟩
                  - span
                      ⟨font-size:14px⟩
                      "{{ t.n }}"
                  - span
                      ⟨font-size:12px;color:#8b909b⟩
                      "{{ t.d }}"
            - div
                ⟨border-right:1px solid rgba(255,255,255,.06);padding:18px 18px;display:flex;flex-direction:column;gap:20px;overflow:auto⟩
              ▸ ALS {{ notOnd }}
                - div
                    ⟨display:flex;flex-direction:column;gap:6px⟩
                  - div
                      ⟨font-size:12px;color:#8b909b⟩
                      "Opdrachtgever"
                  - div
                      ⟨font-size:14px⟩
                      "{{ scopeName }}"
              ▸ ALS {{ isOnd }}
                - div
                    ⟨display:flex;flex-direction:column;gap:6px⟩
                  - div
                      ⟨font-size:12px;color:#8b909b⟩
                      "Onderwerp"
                  ▸ VOOR ELK s IN {{ osSubjList }}
                    - div (onclick="{{ s.pick }}")
                        ⟨display:flex;justify-content:space-between;gap:8px;padding:7px 10px;border-radius:6px;cursor:pointer;background:{{ s.bg }}⟩
                      - span
                          ⟨font-size:13px⟩
                          "{{ s.label }}"
                      - span
                          ⟨font-size:11px;color:#8b909b⟩
                          "{{ s.tag }}"
                  - div
                      ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b;padding-top:4px⟩
                      "{{ repCount }}"
              ▸ ALS {{ isInc }}
                - div
                    ⟨display:flex;flex-direction:column;gap:6px⟩
                  - div
                      ⟨font-size:12px;color:#8b909b⟩
                      "Incident"
                  ▸ VOOR ELK i IN {{ incList }}
                    - div (onclick="{{ i.pick }}")
                        ⟨display:flex;flex-direction:column;gap:2px;padding:7px 10px;border-radius:6px;cursor:pointer;background:{{ i.bg }}⟩
                      - div
                          ⟨display:flex;justify-content:space-between;gap:8px;font-family:'JetBrains Mono',monospace;font-size:11px⟩
                        - span
                            ⟨color:#8b909b⟩
                            "{{ i.id }}"
                        - span
                            ⟨color:{{ i.scol }}⟩
                            "{{ i.sum }}"
                      - span
                          ⟨font-size:13px⟩
                          "{{ i.titel }}"
                - div
                    ⟨display:flex;flex-direction:column;gap:4px;padding:12px 0;border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06)⟩
                  - div
                      ⟨font-size:14px;color:{{ scoreCol }}⟩
                      "{{ score }}"
                  - div
                      ⟨font-size:11px;color:#8b909b;line-height:1.5⟩
                      "{{ scoreOpen }}"
                ▸ ALS {{ tenseBad }}
                  - div
                      ⟨display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:8px;border:1px solid rgba(226,171,68,.45);background:#1a1710⟩
                    - div
                        ⟨font-size:13px;color:#e2ab44⟩
                        "{{ tenseTitle }}"
                    - div
                        ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#b6bcc6;line-height:1.6⟩
                        "{{ tenseWords }}"
                    - div (onclick="{{ fixTense }}")
                        ⟨text-align:center;padding:7px;border-radius:6px;background:#e2ab44;color:#1a1306;font-size:12px;font-weight:600;cursor:pointer⟩
                        "Zet in verleden tijd"
                ▸ VOOR ELK g IN {{ chkGroups }}
                  - div
                      ⟨display:flex;flex-direction:column;gap:2px⟩
                    - div
                        ⟨display:flex;justify-content:space-between;align-items:baseline;padding-bottom:2px⟩
                      - span
                          ⟨font-size:12px;color:#8b909b⟩
                          "{{ g.label }}"
                      - span
                          ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:{{ g.pcol }}⟩
                          "{{ g.pts }}"
                    ▸ VOOR ELK r IN {{ g.items }}
                      - div (onclick="{{ r.pick }}")
                          ⟨display:grid;grid-template-columns:14px minmax(0,1fr) auto;gap:10px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.04);cursor:{{ r.cur }};align-items:start⟩
                        - span
                            ⟨width:14px;height:14px;border-radius:4px;margin-top:2px;border:1px solid {{ r.bd }};background:{{ r.bg }}⟩
                        - span
                            ⟨font-size:12px;line-height:1.4;color:{{ r.col }}⟩
                            "{{ r.label }}"
                        - span
                            ⟨font-size:11px;color:{{ r.acol }}⟩
                            "{{ r.act }}"
                - div (onclick="{{ toggleEdit }}")
                    ⟨text-align:center;padding:8px;border-radius:8px;border:1px solid rgba(255,255,255,.14);font-size:12px;color:#b6bcc6;cursor:pointer⟩
                    "{{ editLabel }}"
              ▸ ALS {{ notInc }}
                - div
                    ⟨display:flex;flex-direction:column;gap:8px⟩
                  - div
                      ⟨font-size:12px;color:#8b909b⟩
                      "Periode"
                  - div
                      ⟨display:flex;gap:4px;padding:3px;border-radius:8px;background:#12151c⟩
                    ▸ VOOR ELK p IN {{ periods }}
                      - div (onclick="{{ p.pick }}")
                          ⟨flex:1;text-align:center;font-size:12px;padding:6px 4px;border-radius:6px;cursor:pointer;background:{{ p.bg }};color:{{ p.col }}⟩
                          "{{ p.label }}"
                - div
                    ⟨display:flex;flex-direction:column;gap:6px⟩
                  - div
                      ⟨font-size:12px;color:#8b909b⟩
                      "Onderdelen"
                  ▸ VOOR ELK s IN {{ secToggles }}
                    - div (onclick="{{ s.pick }}")
                        ⟨display:flex;align-items:center;gap:10px;padding:7px 0;cursor:pointer;font-size:13px;color:{{ s.col }}⟩
                      - span
                          ⟨width:14px;height:14px;border-radius:4px;border:1px solid {{ s.bd }};background:{{ s.bg }}⟩
                      "{{ s.label }}"
              - div
                  ⟨display:flex;flex-direction:column;gap:8px;margin-top:auto⟩
                - div (onclick="{{ draai }}")
                    ⟨text-align:center;padding:11px;border-radius:8px;background:#35d0c4;color:#04211f;font-size:13px;font-weight:600;cursor:pointer⟩
                    "Draai rapport"
                - div (onclick="{{ bevries }}")
                    ⟨text-align:center;padding:10px;border-radius:8px;border:1px solid {{ frzBd }};font-size:13px;color:{{ frzCol }};cursor:{{ frzCur }}⟩
                    "{{ frzLabel }}"
                - div
                    ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b;line-height:1.6;text-align:center⟩
                    "{{ genLabel }}"
            - div
                ⟨overflow:auto;padding:28px;background:#07080b;display:flex;justify-content:center⟩
              ▸ ALS {{ isInc }}
                - div
                    ⟨width:100%;max-width:600px;background:#f3f2ee;color:#16181d;border-radius:4px;padding:44px 52px;display:flex;flex-direction:column;gap:18px;align-self:flex-start;font-size:13px;line-height:1.6⟩
                  ▸ ALS {{ ip.frozen }}
                    - div
                        ⟨padding:8px 12px;border:1px solid #16181d;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.04em⟩
                        "{{ ip.frozenText }}"
                  - div
                      ⟨display:grid;grid-template-columns:1fr 1fr;gap:20px;font-size:12px;line-height:1.5;color:#33363d⟩
                    - div
                        ⟨white-space:pre-line;color:{{ ip.afzCol }}⟩
                        "{{ ip.afz1 }}"
                    - div
                        ⟨white-space:pre-line;text-align:right;color:{{ ip.afzCol }}⟩
                        "{{ ip.afz2 }}"
                  - div
                      ⟨display:flex;flex-direction:column⟩
                    ▸ VOOR ELK k IN {{ ip.kop }}
                      - div
                          ⟨display:grid;grid-template-columns:96px minmax(0,1fr);gap:10px;padding:1px 0⟩
                        - span
                            ⟨color:#4a4e57⟩
                            "{{ k.l }}:"
                        - span
                            ⟨color:{{ k.col }}⟩
                            "{{ k.v }}"
                  - div
                      ⟨font-weight:600;font-size:14px;padding-top:6px;border-top:1px solid #d9d7d0⟩
                      "Rapport"
                  - div
                      ⟨display:flex;flex-direction:column;gap:6px⟩
                    - div
                        ⟨font-weight:600⟩
                        "A. Inleiding"
                    - div
                        ⟨color:{{ ip.openCol }}⟩
                        "{{ ip.open }}"
                  - div
                      ⟨display:flex;flex-direction:column;gap:6px⟩
                    - div
                        ⟨font-weight:600⟩
                        "A2. Kerngegevens incident"
                    - div
                        ⟨color:#4a4e57⟩
                        "Tijdstippen"
                    ▸ VOOR ELK t IN {{ ip.tijd }}
                      - div
                          ⟨padding-left:14px⟩
                          "· {{ t }}"
                    - div
                        ⟨color:#4a4e57⟩
                        "Locatie"
                    - div
                        ⟨padding-left:14px⟩
                        "{{ ip.loc }}"
                    - div
                        ⟨color:#4a4e57⟩
                        "Betrokkenen"
                    ▸ VOOR ELK b IN {{ ip.bet }}
                      - div
                          ⟨padding-left:14px⟩
                          "· {{ b.n }}: {{ b.r }}"
                    ▸ VOOR ELK m IN {{ ip.missA2 }}
                      - div
                          ⟨color:#b3261e⟩
                          "Ontbreekt: {{ m }}"
                  - div
                      ⟨display:flex;flex-direction:column;gap:8px⟩
                    - div
                        ⟨font-weight:600⟩
                        "B. Gedetailleerd feitenrelaas"
                    ▸ ALS {{ editing }}
                      - textarea (value="{{ relText }}" onchange="{{ onRel }}")
                          ⟨width:100%;min-height:360px;resize:vertical;border:1px solid #b9b6ad;border-radius:4px;background:#fbfaf7;color:#16181d;padding:12px 14px;font-size:13px;line-height:1.6;outline:none⟩
                    ▸ ALS {{ notEditing }}
                      ▸ VOOR ELK p IN {{ ip.paras }}
                        - div
                            ⟨margin:0⟩
                          ▸ VOOR ELK g IN {{ p.segs }}
                            - span
                                ⟨background:{{ g.bg }};font-style:{{ g.fs }}⟩
                                "{{ g.t }}"
                    ▸ VOOR ELK m IN {{ ip.missB }}
                      - div
                          ⟨color:#b3261e⟩
                          "Ontbreekt: {{ m }}"
                  - div
                      ⟨display:flex;flex-direction:column;gap:6px⟩
                    - div
                        ⟨font-weight:600⟩
                        "Verklaringen en opvolging"
                    ▸ VOOR ELK v IN {{ ip.verkl }}
                      - div
                          "{{ v }}"
                    ▸ VOOR ELK m IN {{ ip.missV }}
                      - div
                          ⟨color:#b3261e⟩
                          "Ontbreekt: {{ m }}"
                  - div
                      ⟨display:flex;flex-direction:column;gap:6px⟩
                    - div
                        ⟨font-weight:600⟩
                        "C. Afhandeling"
                    ▸ VOOR ELK v IN {{ ip.afh }}
                      - div
                          "{{ v }}"
                    ▸ VOOR ELK m IN {{ ip.missC }}
                      - div
                          ⟨color:#b3261e⟩
                          "Ontbreekt: {{ m }}"
                  - div
                      ⟨display:flex;flex-direction:column;gap:2px;padding-top:8px;color:{{ ip.sluitCol }}⟩
                    - div
                        "{{ ip.sluit }}"
                    - div
                        ⟨padding-top:18px⟩
                        "{{ ip.naam }}"
                    - div
                        "{{ ip.functie }}"
                  - div
                      ⟨font-weight:600⟩
                      "Einde rapport"
                  - div
                      ⟨padding-top:12px;border-top:1px solid #d9d7d0;font-family:'JetBrains Mono',monospace;font-size:10px;line-height:1.6;color:#6b6f78⟩
                      "{{ ip.foot }}"
              ▸ ALS {{ notInc }}
                - div
                    ⟨width:100%;max-width:560px;background:#f3f2ee;color:#16181d;border-radius:4px;padding:44px 48px;display:flex;flex-direction:column;gap:22px;align-self:flex-start⟩
                  - div
                      ⟨display:flex;justify-content:space-between;font-family:'JetBrains Mono',monospace;font-size:10px;color:#6b6f78;letter-spacing:.06em⟩
                    - span
                        "PHYLAX · VERTROUWELIJK"
                    - span
                        "{{ paper.periode }}"
                  ▸ ALS {{ paper.frozen }}
                    - div
                        ⟨padding:8px 12px;border:1px solid #16181d;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.04em;color:#16181d⟩
                        "{{ paper.frozenText }}"
                  - div
                      ⟨display:flex;flex-direction:column;gap:6px⟩
                    - div
                        ⟨font-size:24px;font-weight:600;letter-spacing:-.01em;line-height:1.2⟩
                        "{{ paper.title }}"
                    - div
                        ⟨font-size:13px;color:#4a4e57⟩
                        "{{ paper.sub }}"
                  ▸ VOOR ELK s IN {{ paper.secs }}
                    - div
                        ⟨display:flex;flex-direction:column;gap:6px;padding-top:14px;border-top:1px solid #d9d7d0⟩
                      - div
                          ⟨font-size:14px;font-weight:600⟩
                          "{{ s.h }}"
                      - div
                          ⟨font-size:13px;line-height:1.55;color:{{ s.tcol }}⟩
                          "{{ s.t }}"
                      ▸ VOOR ELK it IN {{ s.items }}
                        - div
                            ⟨display:grid;grid-template-columns:22px minmax(0,1fr);gap:8px;padding:6px 0⟩
                          - span
                              ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#6b6f78;padding-top:2px⟩
                              "{{ it.n }}"
                          - div
                              ⟨display:flex;flex-direction:column;gap:3px;min-width:0⟩
                            - div
                                ⟨font-size:13px;line-height:1.5;color:#16181d⟩
                                "{{ it.t }}"
                            - div
                                ⟨font-size:12px;line-height:1.5;color:#4a4e57⟩
                                "{{ it.w }}"
                            - div
                                ⟨font-family:'JetBrains Mono',monospace;font-size:10px;color:#6b6f78;word-break:break-all⟩
                                "{{ it.b }}"
                      - div
                          ⟨font-family:'JetBrains Mono',monospace;font-size:10px;color:#6b6f78⟩
                          "{{ s.b }}"
                  ▸ ALS {{ paper.hasFoot }}
                    - div
                        ⟨padding-top:14px;border-top:1px solid #d9d7d0;font-family:'JetBrains Mono',monospace;font-size:10px;color:#6b6f78⟩
                        "{{ paper.foot }}"
  - p
      ⟨margin:0;font-size:12px;color:#8b909b;max-width:1200px⟩
    "Telefoon blijft zoals in"
    - a (href="Phylax v2.dc.html")
        "voorstel 1b"
    ", met opdrachtgever als extra keuze bij "Hoort bij". Volgende stap: "werk de OSINT-werkplek uit" · "maak het casus-aanmaken uit" · "laat zien hoe Overzicht er op Alle opdrachtgevers uitziet als dreigingsbeeld""
```
