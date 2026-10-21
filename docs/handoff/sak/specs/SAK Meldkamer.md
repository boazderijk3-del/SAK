# Pixelspec · SAK Meldkamer

Gegenereerd uit `prototype/SAK Meldkamer.dc.html`. Volledige elementboom met **exacte inline-stijlen** en teksten; normatief. `{{ … }}` = dynamische waarde uit de logica onderaan het prototype. `▸ ALS` = alleen zichtbaar als de waarde waar is; `▸ VOOR ELK` = herhaald per item.

```
- div
    ⟨display:flex;flex-direction:column;height:100vh;background:#0a0c0e⟩
  - header
      ⟨display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;min-height:52px;flex:none;padding:8px 14px;border-bottom:1px solid #232a31;background:#0d1013;position:relative;z-index:5⟩
    - div
        ⟨position:relative⟩
      - button (onclick="{{ toggleApps }}" title="Wissel van programma" style-hover="background:#12161a")
          ⟨display:flex;align-items:baseline;gap:8px;background:transparent;border:0;padding:4px 6px;margin:-4px -6px;cursor:pointer;color:inherit⟩
        - span
            ⟨font:700 20px 'JetBrains Mono',monospace;color:#f2b33d;letter-spacing:.06em⟩
            "SAK"
        - span
            ⟨font:600 13px 'Barlow Condensed',sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#8a949e⟩
            "Meldkamer"
        - span
            ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;color:#8a949e;align-self:center;font-feature-settings:'liga'⟩
            "expand_more"
      ▸ ALS {{ appsOpen }}
        - div
            ⟨position:absolute;top:calc(100% + 10px);left:-6px;width:290px;z-index:40;background:#12161a;border:1px solid #2c343c;padding:6px;display:flex;flex-direction:column;gap:2px;box-shadow:0 16px 40px rgba(0,0,0,.5)⟩
          - div
              ⟨padding:6px 10px 4px;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#8a949e⟩
              "Programma"
          ▸ VOOR ELK a IN {{ apps }}
            - a (href="{{ a.href }}" style-hover="background:#1a1f24")
                ⟨display:grid;grid-template-columns:18px minmax(0,1fr) auto;gap:10px;align-items:center;padding:9px 10px;color:#e6e9ec;text-decoration:none;background:{{ a.bg }};opacity:{{ a.op }};pointer-events:{{ a.pe }}⟩
              - span
                  ⟨width:16px;height:16px;border-radius:{{ a.rad }};border:2px solid {{ a.col }};background:{{ a.fill }}⟩
              - span
                  ⟨display:flex;flex-direction:column;gap:2px;min-width:0⟩
                - span
                    ⟨font-size:14px;font-weight:600⟩
                    "{{ a.name }}"
                - span
                    ⟨font-size:12px;color:#8a949e⟩
                    "{{ a.desc }}"
              - span
                  ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#f2b33d⟩
                  "{{ a.mark }}"
          - div
              ⟨padding:8px 10px 4px;border-top:1px solid #232a31;margin-top:4px;font-size:12px;color:#8a949e;line-height:1.5;display:flex;flex-direction:column;gap:6px⟩
            - span
                "{{ appsFoot }}"
            - a (href="Suite Start.dc.html" style-hover="color:#ffd27a")
                ⟨color:#f2b33d;text-decoration:none⟩
                "Alle programma's"
    - select (value="{{ proj }}" data-v="{{ proj }}" onchange="{{ onProj }}")
        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font-size:13px;max-width:260px⟩
      ▸ VOOR ELK o IN {{ projOpts }}
        - option (value="{{ o.id }}")
            "{{ o.label }}"
    - select (value="{{ op }}" data-v="{{ op }}" onchange="{{ onOp }}" title="Wie bedient de meldkamer: wordt bij elke handeling vastgelegd")
        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#c3cad1;padding:6px 8px;font-size:13px;max-width:200px⟩
      ▸ VOOR ELK o IN {{ opOpts }}
        - option (value="{{ o.id }}")
            "{{ o.label }}"
    - div
        ⟨position:relative;flex:1 1 220px;min-width:0;max-width:560px⟩
      - div
          ⟨display:flex;align-items:center;gap:6px;background:#0a0c0e;border:1px solid #2c343c;padding:0 8px⟩
        - span
            ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga';color:#8a949e⟩
            "search"
        - input (value="{{ q }}" onchange="{{ onQ }}" placeholder="Zoek alles: naam, ledennummer, INC-, M-, BOLO, signalement, plek…")
            ⟨flex:1;min-width:0;border:0;background:transparent;color:#e6e9ec;padding:8px 0;font-size:14px;outline:none⟩
        ▸ ALS {{ hasQ }}
          - button (onclick="{{ clearQ }}")
              ⟨border:0;background:transparent;color:#8a949e;cursor:pointer;padding:0⟩
            - span
                ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                "close"
      ▸ ALS {{ hasSR }}
        - div
            ⟨position:absolute;top:40px;left:0;right:0;max-height:70vh;overflow-y:auto;background:#12161a;border:1px solid #f2b33d;box-shadow:0 12px 40px rgba(0,0,0,.6)⟩
          - div
              ⟨padding:8px 12px;font:500 12px 'JetBrains Mono',monospace;color:#8a949e;border-bottom:1px solid #232a31⟩
              "{{ srTotal }}"
          ▸ VOOR ELK g IN {{ srGroups }}
            - div
              - div
                  ⟨padding:8px 12px 4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#f2b33d⟩
                  "{{ g.label }}"
              ▸ VOOR ELK r IN {{ g.rows }}
                - button (onclick="{{ r.onClick }}")
                    ⟨display:flex;align-items:center;gap:10px;width:100%;border:0;border-top:1px solid #1b2127;background:transparent;color:#e6e9ec;padding:8px 12px;cursor:pointer;text-align:left⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga';color:{{ r.col }}⟩
                      "{{ r.icon }}"
                  - span
                      ⟨flex:1;min-width:0⟩
                    - span
                        ⟨display:block;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap⟩
                        "{{ r.title }}"
                    - span
                        ⟨display:block;font-size:12px;color:#8a949e;overflow:hidden;text-overflow:ellipsis;white-space:nowrap⟩
                        "{{ r.sub }}"
                  ▸ ALS {{ r.hasBadge }}
                    - span
                        ⟨flex:none;max-width:45%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:700 10px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:2px 6px;background:{{ r.badgeCol }};color:#0a0c0e⟩
                        "{{ r.badge }}"
    ▸ VOOR ELK c IN {{ counters }}
      - button (onclick="{{ c.onClick }}" title="{{ c.label }}")
          ⟨display:flex;align-items:center;gap:6px;border:1px solid {{ c.bd }};background:transparent;color:{{ c.col }};padding:5px 9px;cursor:pointer;font-size:12px;white-space:nowrap⟩
        - span
            ⟨font:700 14px 'JetBrains Mono',monospace⟩
            "{{ c.n }}"
        "{{ c.label }}"
    - button (onclick="{{ toggleWide }}" title="Breed overzicht voor groot of tweede scherm")
        ⟨display:flex;align-items:center;gap:6px;border:1px solid {{ wideBd }};background:{{ wideBg }};color:{{ wideFg }};padding:6px 10px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
      - span
          ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
          "view_week"
      "Breed"
    - button (onclick="{{ openSecond }}" title="Open een tweede venster (blijft gesynchroniseerd)")
        ⟨border:1px solid #2c343c;background:transparent;color:#c3cad1;padding:6px;cursor:pointer⟩
      - span
          ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
          "open_in_new"
    - a (href="SAK Kaart.dc.html" title="Kaart")
        ⟨display:flex;color:#c3cad1;border:1px solid #2c343c;padding:6px;text-decoration:none⟩
      - span
          ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
          "map"
    - a (href="SAK Beheer.dc.html" title="Beheer")
        ⟨display:flex;color:#c3cad1;border:1px solid #2c343c;padding:6px;text-decoration:none⟩
      - span
          ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
          "settings"
  ▸ ALS {{ ready }}
    - div
        ⟨flex:1;min-height:0;display:grid;grid-template-columns:{{ gridCols }};background:#0a0c0e⟩
      ▸ ALS {{ showNav }}
        - nav
            ⟨display:flex;flex-direction:column;gap:2px;padding:10px 8px;border-right:1px solid #232a31;background:#0d1013;min-height:0;overflow-y:auto⟩
          ▸ VOOR ELK n IN {{ navItems }}
            - button (onclick="{{ n.onClick }}")
                ⟨display:flex;align-items:center;gap:10px;border:0;border-left:2px solid {{ n.bd }};background:{{ n.bg }};color:{{ n.fg }};padding:10px;cursor:pointer;text-align:left;font-size:14px⟩
              - span
                  ⟨font-family:'Material Symbols Sharp';font-size:19px;line-height:1;font-feature-settings:'liga'⟩
                  "{{ n.icon }}"
              - span
                  ⟨flex:1⟩
                  "{{ n.label }}"
              ▸ ALS {{ n.hasN }}
                - span
                    ⟨min-width:20px;padding:1px 5px;background:{{ n.nBg }};color:#0a0c0e;font:700 11px 'JetBrains Mono',monospace;text-align:center⟩
                    "{{ n.n }}"
          - div
              ⟨flex:1⟩
          - a (href="SAK Kaart.dc.html")
              ⟨display:flex;align-items:center;gap:8px;padding:8px 10px;font-size:12px;text-decoration:none;color:#8a949e⟩
            - span
                ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga'⟩
                "map"
            "Kaart"
          - a (href="SAK Beheer.dc.html")
              ⟨display:flex;align-items:center;gap:8px;padding:8px 10px;font-size:12px;text-decoration:none;color:#8a949e⟩
            - span
                ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga'⟩
                "settings"
            "Beheer"
          - a (href="SAK Publiek melden.dc.html" target="_blank")
              ⟨display:flex;align-items:center;gap:8px;padding:8px 10px;font-size:12px;text-decoration:none;color:#8a949e⟩
            - span
                ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga'⟩
                "qr_code_2"
            "Publieke meldpagina"
          - a (href="SAK Mobiel.dc.html" target="_blank")
              ⟨display:flex;align-items:center;gap:8px;padding:8px 10px;font-size:12px;text-decoration:none;color:#8a949e⟩
            - span
                ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga'⟩
                "smartphone"
            "Mobiele app"
      ▸ ALS {{ showMeld }}
        - section
            ⟨display:flex;flex-direction:column;min-height:0;border-right:1px solid #232a31;background:#0d1013⟩
          - div
              ⟨display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid #232a31⟩
            - span
                ⟨font:700 14px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;flex:1⟩
                "Meldingen"
            - button (onclick="{{ toggleNm }}")
                ⟨border:1px solid #f2b33d;background:transparent;color:#f2b33d;padding:4px 9px;cursor:pointer;font:700 11px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                "+ Melding"
          - div
              ⟨display:flex;gap:2px;padding:6px 12px;border-bottom:1px solid #232a31⟩
            ▸ VOOR ELK f IN {{ meldFilters }}
              - button (onclick="{{ f.onClick }}")
                  ⟨border:0;background:{{ f.bg }};color:{{ f.fg }};padding:4px 8px;cursor:pointer;font-size:12px⟩
                "{{ f.label }}"
                - span
                    ⟨font-family:'JetBrains Mono',monospace;color:#8a949e⟩
                    "{{ f.n }}"
          - div
              ⟨flex:1;min-height:0;overflow-y:auto;padding:8px 10px;display:flex;flex-direction:column;gap:6px⟩
            ▸ ALS {{ nmOpen }}
              - div
                  ⟨border:1px solid #f2b33d;background:#12161a;padding:10px;display:flex;flex-direction:column;gap:8px⟩
                - div
                    ⟨display:flex;flex-wrap:wrap;gap:4px⟩
                  ▸ VOOR ELK t IN {{ nmTypes }}
                    - button (onclick="{{ t.onClick }}")
                        ⟨display:flex;align-items:center;gap:4px;border:1px solid {{ t.bd }};background:{{ t.bg }};color:{{ t.fg }};padding:4px 7px;cursor:pointer;font-size:12px⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:14px;line-height:1;font-feature-settings:'liga'⟩
                          "{{ t.icon }}"
                      "{{ t.name }}"
                - div
                    ⟨display:grid;grid-template-columns:auto minmax(0,1fr);gap:6px⟩
                  - div
                      ⟨display:flex;gap:2px⟩
                    ▸ VOOR ELK p IN {{ nmPrios }}
                      - button (onclick="{{ p.onClick }}")
                          ⟨border:1px solid {{ p.bd }};background:{{ p.bg }};color:{{ p.fg }};padding:5px 8px;cursor:pointer;font:600 12px 'JetBrains Mono',monospace⟩
                          "{{ p.name }}"
                  - select (value="{{ nm.pos }}" data-v="{{ nm.pos }}" onchange="{{ onNmPos }}")
                      ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font-size:13px⟩
                    - option (value="")
                        "Positie / plek…"
                    ▸ VOOR ELK o IN {{ posOpts }}
                      - option (value="{{ o.id }}")
                          "{{ o.name }}"
                - textarea (value="{{ nm.text }}" onchange="{{ onNmText }}" rows="3" placeholder="Wat is er aan de hand?")
                    ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:14px;resize:vertical⟩
                - div
                    ⟨display:flex;gap:6px⟩
                  - button (onclick="{{ createReport }}")
                      ⟨flex:1;border:0;background:#f2b33d;color:#0a0c0e;padding:8px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                      "Melding aanmaken"
                  - button (onclick="{{ toggleNm }}")
                      ⟨border:1px solid #2c343c;background:transparent;color:#e6e9ec;padding:6px 10px;cursor:pointer;font-size:13px⟩
                      "Annuleren"
            ▸ ALS {{ noMeld }}
              - div
                  ⟨padding:16px 4px;font-size:13px;color:#8a949e⟩
                  "Geen meldingen in deze lijst."
            ▸ VOOR ELK m IN {{ meldRows }}
              - button (onclick="{{ m.onClick }}")
                  ⟨display:flex;flex-direction:column;gap:5px;width:100%;border:1px solid {{ m.bd }};border-left:3px solid {{ m.prioCol }};background:{{ m.bg }};color:#e6e9ec;padding:9px 10px;cursor:pointer;text-align:left⟩
                - div
                    ⟨display:flex;align-items:center;gap:6px;width:100%⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:17px;line-height:1;font-feature-settings:'liga';color:{{ m.col }}⟩
                      "{{ m.icon }}"
                  - span
                      ⟨font-size:14px;font-weight:600;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap⟩
                      "{{ m.type }}"
                  ▸ ALS {{ m.isPub }}
                    - span
                        ⟨font:700 10px 'Barlow Condensed',sans-serif;letter-spacing:.08em;padding:1px 5px;background:#c792ea;color:#0a0c0e⟩
                        "PUBLIEK"
                  ▸ ALS {{ m.hasMed }}
                    - span (title="Medische info")
                        ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga';color:#ff5f57⟩
                        "emergency"
                  - span
                      ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                      "{{ m.ago }}"
                - div
                    ⟨font-size:12px;color:#8a949e⟩
                    "{{ m.no }} · {{ m.where }}"
                - div
                    ⟨font-size:13px;color:#c3cad1;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden⟩
                    "{{ m.text }}"
                - div
                    ⟨display:flex;gap:6px;align-items:center⟩
                  - span
                      ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:{{ m.stCol }}⟩
                      "{{ m.status }}"
                  - span
                      ⟨font-size:11px;color:#6b757f⟩
                      "{{ m.by }}"
      ▸ ALS {{ showInc }}
        - section
            ⟨display:flex;flex-direction:column;min-height:0;border-right:1px solid #232a31;background:#0d1013⟩
          - div
              ⟨display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid #232a31⟩
            - span
                ⟨font:700 14px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;flex:1⟩
                "Incidenten"
            - button (onclick="{{ newIncident }}")
                ⟨border:1px solid #f2b33d;background:transparent;color:#f2b33d;padding:4px 9px;cursor:pointer;font:700 11px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                "+ Incident"
          - div
              ⟨display:flex;gap:2px;padding:6px 12px;border-bottom:1px solid #232a31⟩
            ▸ VOOR ELK f IN {{ incFilters }}
              - button (onclick="{{ f.onClick }}")
                  ⟨border:0;background:{{ f.bg }};color:{{ f.fg }};padding:4px 8px;cursor:pointer;font-size:12px⟩
                "{{ f.label }}"
                - span
                    ⟨font-family:'JetBrains Mono',monospace;color:#8a949e⟩
                    "{{ f.n }}"
          - div
              ⟨flex:1;min-height:0;overflow-y:auto;padding:8px 10px;display:flex;flex-direction:column;gap:6px⟩
            ▸ ALS {{ noInc }}
              - div
                  ⟨padding:16px 4px;font-size:13px;color:#8a949e⟩
                  "Geen incidenten."
            ▸ VOOR ELK i IN {{ incRows }}
              - button (onclick="{{ i.onClick }}")
                  ⟨display:flex;flex-direction:column;gap:5px;width:100%;border:1px solid {{ i.bd }};background:{{ i.bg }};color:#e6e9ec;padding:9px 10px;cursor:pointer;text-align:left⟩
                - div
                    ⟨display:flex;align-items:center;gap:6px;width:100%⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:17px;line-height:1;font-feature-settings:'liga';color:{{ i.col }}⟩
                      "{{ i.icon }}"
                  - span
                      ⟨font-size:14px;font-weight:600;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap⟩
                      "{{ i.title }}"
                  - span
                      ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:{{ i.stCol }}⟩
                      "{{ i.status }}"
                - div
                    ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                    "{{ i.no }} · {{ i.when }}"
                - div
                    ⟨display:flex;flex-wrap:wrap;gap:4px⟩
                  ▸ VOOR ELK t IN {{ i.tags }}
                    - span
                        ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:1px 5px;border:1px solid {{ t.col }};color:{{ t.col }}⟩
                        "{{ t.label }}"
      - section
          ⟨display:flex;flex-direction:column;min-height:0;border-right:1px solid #232a31;background:#0a0c0e;position:relative;order:{{ detailOrder }}⟩
        - div
            ⟨flex:1;min-height:0;overflow-y:auto⟩
          ▸ ALS {{ noSel }}
            - div
                ⟨height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:#6b757f;padding:40px;text-align:center⟩
              - span
                  ⟨font-family:'Material Symbols Sharp';font-size:40px;line-height:1;font-feature-settings:'liga'⟩
                  "touch_app"
              - span
                  ⟨font-size:14px⟩
                  "Kies een melding, incident of persoon."
          ▸ ALS {{ isR }}
            - div
                ⟨padding:16px 18px;display:flex;flex-direction:column;gap:14px⟩
              - div
                  ⟨display:flex;align-items:flex-start;gap:10px⟩
                - span
                    ⟨width:38px;height:38px;flex:none;display:flex;align-items:center;justify-content:center;background:{{ r.col }};color:#0a0c0e;font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga'⟩
                    "{{ r.icon }}"
                - div
                    ⟨flex:1;min-width:0⟩
                  - div
                      ⟨font:700 22px 'Barlow Condensed',sans-serif;letter-spacing:.03em;text-transform:uppercase⟩
                      "{{ r.type }}"
                  - div
                      ⟨font:500 12px 'JetBrains Mono',monospace;color:#8a949e⟩
                      "{{ r.no }} · {{ r.when }} · {{ r.by }}"
                - span
                    ⟨font:700 12px 'JetBrains Mono',monospace;padding:3px 7px;background:{{ r.prioCol }};color:#0a0c0e⟩
                    "{{ r.prio }}"
                - span
                    ⟨font:700 11px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase;padding:3px 7px;border:1px solid {{ r.stCol }};color:{{ r.stCol }}⟩
                    "{{ r.status }}"
              ▸ ALS {{ r.isPub }}
                - div
                    ⟨display:flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid #c792ea;background:rgba(199,146,234,.07);font-size:13px⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga';color:#c792ea⟩
                      "{{ r.contactIcon }}"
                  - span
                      ⟨flex:1⟩
                      "{{ r.contact }}"
              - div
                  ⟨display:flex;align-items:center;gap:6px;font-size:14px;color:#c3cad1⟩
                - span
                    ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga';color:#8a949e⟩
                    "location_on"
                "{{ r.where }}"
              - div
                  ⟨font-size:16px;line-height:1.45;text-wrap:pretty⟩
                  "{{ r.text }}"
              - div
                  ⟨display:flex;flex-wrap:wrap;gap:6px;align-items:center⟩
                "{{ r.thumbs }}"
                - label
                    ⟨width:72px;height:72px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;border:1px dashed #2c343c;color:#8a949e;cursor:pointer;font-size:11px⟩
                  - input (type="file" accept="image/*" multiple="" onchange="{{ r.onPhoto }}")
                      ⟨display:none⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga'⟩
                      "add_a_photo"
                  "Foto"
              ▸ ALS {{ r.isResolved }}
                - div
                    ⟨display:flex;gap:8px;align-items:flex-start;padding:10px 12px;border:1px solid #4fd18b;background:rgba(79,209,139,.07);font-size:13px⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga';color:#4fd18b⟩
                      "task_alt"
                  - span
                      "{{ r.resolvedText }}"
              ▸ ALS {{ r.isConverted }}
                - button (onclick="{{ r.openInc }}")
                    ⟨display:flex;align-items:center;gap:8px;border:1px solid #2c343c;background:#12161a;color:#e6e9ec;padding:9px 12px;cursor:pointer;font-size:14px;text-align:left⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga';color:#f2b33d⟩
                      "folder_open"
                  "Omgezet naar {{ r.incNo }} · openen"
          ▸ ALS {{ isI }}
            - div
                ⟨padding:16px 18px 0;display:flex;flex-direction:column;gap:12px⟩
              - div
                  ⟨display:flex;align-items:center;gap:8px;font:500 12px 'JetBrains Mono',monospace;color:#8a949e⟩
                - span
                    ⟨color:#f2b33d⟩
                    "{{ i.no }}"
                - span
                    "· {{ i.when }}"
                ▸ ALS {{ i.hasReport }}
                  - button (onclick="{{ i.openReport }}")
                      ⟨border:0;background:transparent;color:#5cc8ff;cursor:pointer;padding:0;font:500 12px 'JetBrains Mono',monospace⟩
                      "· vanuit {{ i.reportNo }}"
              - input (value="{{ i.title }}" onchange="{{ i.onTitle }}")
                  ⟨background:transparent;border:0;border-bottom:1px solid #2c343c;color:#e6e9ec;padding:4px 0;font:700 24px 'Barlow Condensed',sans-serif;letter-spacing:.03em;text-transform:uppercase;outline:none⟩
              - div
                  ⟨display:flex;flex-wrap:wrap;gap:10px;align-items:center⟩
                - div
                    ⟨display:flex;gap:2px⟩
                  ▸ VOOR ELK b IN {{ i.statuses }}
                    - button (onclick="{{ b.onClick }}")
                        ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:5px 10px;cursor:pointer;font-size:12px⟩
                        "{{ b.name }}"
                - select (value="{{ i.type }}" data-v="{{ i.type }}" onchange="{{ i.onType }}")
                    ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:5px 8px;font-size:13px⟩
                  ▸ VOOR ELK o IN {{ typeOpts }}
                    - option (value="{{ o }}")
                        "{{ o }}"
                - div
                    ⟨display:flex;align-items:center;gap:2px⟩
                  - span
                      ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-right:6px⟩
                      "Geldt voor"
                  ▸ VOOR ELK b IN {{ i.scopes }}
                    - button (onclick="{{ b.onClick }}")
                        ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:5px 10px;cursor:pointer;font-size:12px⟩
                        "{{ b.name }}"
              - div
                - div
                    ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:5px⟩
                    "Toedracht"
                - textarea (value="{{ i.toedracht }}" onchange="{{ i.onToedracht }}" rows="4" placeholder="Wat is er gebeurd, in welke volgorde, wie deed wat?")
                    ⟨width:100%;background:#0d1013;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;line-height:1.45;resize:vertical⟩
          ▸ ALS {{ showMed }}
            - div
                ⟨padding:0 18px 14px⟩
              ▸ ALS {{ med.none }}
                - button (onclick="{{ med.onAdd }}")
                    ⟨display:flex;align-items:center;gap:6px;border:1px dashed #ff5f57;background:transparent;color:#ff5f57;padding:7px 10px;cursor:pointer;font-size:13px⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:17px;line-height:1;font-feature-settings:'liga'⟩
                      "emergency"
                  "Medische info toevoegen"
              ▸ ALS {{ med.has }}
                - div
                    ⟨border:1px solid #ff5f57;background:rgba(255,95,87,.05);padding:10px 12px;display:flex;flex-direction:column;gap:8px⟩
                  - div
                      ⟨display:flex;align-items:center;gap:6px⟩
                    - span
                        ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga';color:#ff5f57⟩
                        "emergency"
                    - span
                        ⟨font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#ff5f57;flex:1⟩
                        "Medische info · zichtbaar voor iedereen die je inzet"
                  - div
                      ⟨display:flex;flex-wrap:wrap;gap:14px⟩
                    - div
                        ⟨display:flex;align-items:center;gap:4px⟩
                      - span
                          ⟨font-size:12px;color:#8a949e;margin-right:4px⟩
                          "Bij bewustzijn"
                      ▸ VOOR ELK b IN {{ med.conscious }}
                        - button (onclick="{{ b.onClick }}")
                            ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:3px 8px;cursor:pointer;font-size:12px⟩
                            "{{ b.name }}"
                    - div
                        ⟨display:flex;align-items:center;gap:4px⟩
                      - span
                          ⟨font-size:12px;color:#8a949e;margin-right:4px⟩
                          "Ademhaling"
                      ▸ VOOR ELK b IN {{ med.breathing }}
                        - button (onclick="{{ b.onClick }}")
                            ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:3px 8px;cursor:pointer;font-size:12px⟩
                            "{{ b.name }}"
                  - div
                      ⟨display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:6px⟩
                    - input (value="{{ med.injury }}" onchange="{{ med.onInjury }}" placeholder="Letsel")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font-size:13px⟩
                    - input (value="{{ med.treated }}" onchange="{{ med.onTreated }}" placeholder="Behandeling / wie is erbij")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font-size:13px⟩
                  - input (value="{{ med.notes }}" onchange="{{ med.onNotes }}" placeholder="Overige info (middelen, allergieën, overdracht…)")
                      ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font-size:13px⟩
          ▸ ALS {{ isR }}
            - div
                ⟨padding:0 18px 28px;display:flex;flex-direction:column;gap:20px⟩
              - div
                - div
                    ⟨display:flex;align-items:center;gap:8px;border-bottom:1px solid #232a31;padding-bottom:6px;margin-bottom:8px⟩
                  - span
                      ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;flex:1⟩
                      "Tijdlijn"
                  ▸ ALS {{ r.canTake }}
                    - button (onclick="{{ r.take }}")
                        ⟨display:flex;align-items:center;gap:5px;border:1px solid #5cc8ff;background:transparent;color:#5cc8ff;padding:5px 10px;cursor:pointer;font-size:12px⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:15px;line-height:1;font-feature-settings:'liga'⟩
                          "pan_tool"
                      "In behandeling nemen"
                - div
                    ⟨display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1px;background:#232a31;border:1px solid #232a31;margin-bottom:8px⟩
                  ▸ VOOR ELK c IN {{ r.metrics }}
                    - div
                        ⟨background:#0d1013;padding:7px 9px;min-width:0⟩
                      - div
                          ⟨font:700 15px 'JetBrains Mono',monospace;color:{{ c.col }};white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                          "{{ c.val }}"
                      - div
                          ⟨font-size:11px;color:#8a949e⟩
                          "{{ c.label }}"
                - div
                    ⟨display:flex;flex-direction:column⟩
                  ▸ VOOR ELK e IN {{ r.timeline }}
                    - div
                        ⟨display:grid;grid-template-columns:44px 20px minmax(0,1fr) auto;gap:8px;align-items:start;padding:6px 0;border-bottom:1px solid #161b20⟩
                      - span
                          ⟨font:600 12px 'JetBrains Mono',monospace;color:#e6e9ec⟩
                          "{{ e.time }}"
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:17px;line-height:1;font-feature-settings:'liga';color:{{ e.col }}⟩
                          "{{ e.icon }}"
                      - span
                          ⟨min-width:0⟩
                        - span
                            ⟨display:block;font-size:13px⟩
                            "{{ e.label }}"
                        - span
                            ⟨display:block;font-size:12px;color:#8a949e;text-wrap:pretty⟩
                            "{{ e.sub }}"
                      - span
                          ⟨font:500 11px 'JetBrains Mono',monospace;color:#6b757f⟩
                          "{{ e.rel }}"
              - div
                - div
                    ⟨display:flex;align-items:center;gap:8px;border-bottom:1px solid #232a31;padding-bottom:6px;margin-bottom:8px⟩
                  - span
                      ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;flex:1⟩
                      "Uitgezet naar"
                  - span
                      ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                      "{{ r.taskCount }}"
                - div
                    ⟨display:flex;flex-direction:column;gap:8px⟩
                  ▸ ALS {{ r.noTasks }}
                    - div
                        ⟨font-size:13px;color:#8a949e⟩
                        "Nog niemand naar deze melding gestuurd."
                  ▸ VOOR ELK t IN {{ r.tasks }}
                    - div
                        ⟨border:1px solid #232a31;border-left:3px solid {{ t.col }};background:#0d1013;padding:9px 10px;display:flex;flex-direction:column;gap:7px⟩
                      - div
                          ⟨display:flex;gap:8px;align-items:baseline⟩
                        - span
                            ⟨flex:1;font-size:14px;font-weight:600⟩
                            "{{ t.title }}"
                        - span
                            ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                            "{{ t.when }}"
                      - div
                          ⟨font-size:12px;color:#8a949e⟩
                          "→ {{ t.who }}"
                      ▸ ALS {{ t.hasTimes }}
                        - div
                            ⟨font:500 11px 'JetBrains Mono',monospace;color:#6b757f⟩
                            "{{ t.times }}"
                      ▸ ALS {{ t.waiting }}
                        - div
                            ⟨display:flex;align-items:center;gap:6px;padding:5px 8px;border:1px solid {{ t.ackBd }};font:600 12px 'JetBrains Mono',monospace;color:{{ t.ackCol }}⟩
                          - span
                              ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga'⟩
                              "hourglass_top"
                          "{{ t.ackText }}"
                      - div
                          ⟨display:flex;flex-wrap:wrap;gap:3px⟩
                        ▸ VOOR ELK b IN {{ t.statuses }}
                          - button (onclick="{{ b.onClick }}")
                              ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:3px 8px;cursor:pointer;font-size:12px⟩
                              "{{ b.name }}"
                      ▸ VOOR ELK f IN {{ t.feedback }}
                        - div
                            ⟨display:flex;gap:8px;font-size:13px;padding-left:8px;border-left:1px solid #2c343c⟩
                          - span
                              ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e;flex:none⟩
                              "{{ f.when }}"
                          - span
                            - span
                                ⟨color:#5cc8ff⟩
                                "{{ f.by }}"
                            "{{ f.text }}"
                      - div
                          ⟨display:flex;gap:6px⟩
                        - input (value="{{ t.fb }}" onchange="{{ t.onFb }}" onkeydown="{{ t.onFbKey }}" placeholder="Terugkoppeling toevoegen…")
                            ⟨flex:1;min-width:0;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font-size:13px⟩
                        - button (onclick="{{ t.addFb }}")
                            ⟨border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;padding:5px 9px;cursor:pointer;font-size:12px⟩
                            "Toevoegen"
                  ▸ ALS {{ r.isOpen }}
                    - div
                        ⟨border:1px dashed #f2b33d;padding:10px;display:flex;flex-direction:column;gap:7px⟩
                      - input (value="{{ tf.title }}" onchange="{{ onTfTitle }}" placeholder="Opdracht (optioneel), bijv. Interventieteam naar bar beneden")
                          ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:14px⟩
                      - div
                          ⟨display:flex;flex-wrap:wrap;gap:4px⟩
                        - span
                            ⟨font-size:12px;color:#8a949e;align-self:center;margin-right:4px⟩
                            "Groep:"
                        ▸ VOOR ELK b IN {{ tfGroups }}
                          - button (onclick="{{ b.onClick }}")
                              ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:3px 8px;cursor:pointer;font-size:12px⟩
                              "{{ b.name }}"
                      - div
                          ⟨display:flex;flex-wrap:wrap;gap:4px⟩
                        ▸ VOOR ELK b IN {{ tfStaff }}
                          - button (onclick="{{ b.onClick }}")
                              ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:3px 8px;cursor:pointer;font-size:12px⟩
                              "{{ b.name }}"
                      - button (onclick="{{ addTask }}")
                          ⟨align-self:flex-start;border:0;background:{{ tfBtnBg }};color:#0a0c0e;padding:8px 14px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                          "Uitzetten"
                      - div
                          ⟨display:flex;align-items:flex-start;gap:6px;font-size:12px;color:#8a949e;line-height:1.45⟩
                        - span
                            ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga'⟩
                            "settings_input_antenna"
                        - span
                            "Geef de opdracht ook door via de portofoon. De app legt hem vast en vraagt om ontvangst. Zonder ontvangst binnen 3 minuten gaat hij naar de teamleider."
              - div
                - div
                    ⟨display:flex;align-items:center;gap:8px;border-bottom:1px solid #232a31;padding-bottom:6px;margin-bottom:8px⟩
                  - span
                      ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;flex:1⟩
                      "Betrokkenen"
                  - span
                      ⟨font-size:12px;color:#8a949e⟩
                      "melder, zorgvrager, getuige, dader…"
                  - span
                      ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                      "{{ r.personCount }}"
                - div
                    ⟨display:flex;flex-direction:column;gap:6px⟩
                  ▸ VOOR ELK p IN {{ r.persons }}
                    - div
                        ⟨border:1px solid #232a31;border-left:3px solid {{ p.roleCol }};background:#0d1013;padding:8px 10px;display:flex;flex-direction:column;gap:6px⟩
                      - div
                          ⟨display:flex;align-items:center;gap:8px;flex-wrap:wrap⟩
                        - button (onclick="{{ p.open }}")
                            ⟨border:0;background:transparent;color:#e6e9ec;padding:0;cursor:pointer;font-size:15px;font-weight:600;text-align:left⟩
                            "{{ p.name }}"
                        - span
                            ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                            "{{ p.member }}"
                        - span
                            ⟨flex:1⟩
                        - span
                            ⟨font:700 10px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:2px 6px;border:1px solid {{ p.stCol }};color:{{ p.stCol }}⟩
                            "{{ p.stLabel }}"
                        - button (onclick="{{ p.remove }}" title="Ontkoppelen")
                            ⟨border:0;background:transparent;color:#8a949e;padding:0;cursor:pointer⟩
                          - span
                              ⟨font-family:'Material Symbols Sharp';font-size:17px;line-height:1;font-feature-settings:'liga'⟩
                              "close"
                      ▸ ALS {{ p.hasPrior }}
                        - button (onclick="{{ p.open }}")
                            ⟨display:flex;align-items:center;gap:6px;border:0;background:transparent;color:#f2b33d;padding:0;cursor:pointer;font-size:12px;text-align:left⟩
                          - span
                              ⟨font-family:'Material Symbols Sharp';font-size:15px;line-height:1;font-feature-settings:'liga'⟩
                              "history"
                          "Eerder: {{ p.prior }}"
                      - div
                          ⟨display:flex;flex-wrap:wrap;gap:3px⟩
                        ▸ VOOR ELK b IN {{ p.roles }}
                          - button (onclick="{{ b.onClick }}")
                              ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:3px 8px;cursor:pointer;font-size:12px⟩
                              "{{ b.name }}"
                  - div
                      ⟨border:1px dashed #2c343c;padding:9px 10px;display:flex;flex-direction:column;gap:6px⟩
                    - div
                        ⟨display:flex;gap:6px⟩
                      - input (value="{{ pq }}" onchange="{{ onPq }}" placeholder="+ Persoon toevoegen: zoek op naam of ledennummer")
                          ⟨flex:1;min-width:0;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px⟩
                    ▸ VOOR ELK x IN {{ pqRows }}
                      - button (onclick="{{ x.onClick }}")
                          ⟨display:flex;align-items:center;gap:8px;border:1px solid #232a31;background:#12161a;color:#e6e9ec;padding:6px 8px;cursor:pointer;text-align:left;font-size:13px⟩
                        - span
                            ⟨flex:1⟩
                            "{{ x.name }}"
                        - span
                            ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                            "{{ x.member }}"
                        - span
                            ⟨font-size:11px;color:{{ x.stCol }}⟩
                            "{{ x.st }}"
                    ▸ ALS {{ pqNew }}
                      - div
                          ⟨display:flex;flex-wrap:wrap;gap:6px;align-items:center;padding-top:4px⟩
                        - span
                            ⟨font-size:12px;color:#8a949e⟩
                            "Nieuw:"
                        - div
                            ⟨display:flex;gap:2px⟩
                          ▸ VOOR ELK b IN {{ npKinds }}
                            - button (onclick="{{ b.onClick }}")
                                ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:4px 8px;cursor:pointer;font-size:12px⟩
                                "{{ b.name }}"
                        ▸ ALS {{ np.member }}
                          - input (value="{{ np.memberNo }}" onchange="{{ onNpNo }}" placeholder="Ledennummer")
                              ⟨width:130px;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:5px 8px;font:500 12px 'JetBrains Mono',monospace⟩
                        - input (value="{{ np.desc }}" onchange="{{ onNpDesc }}" placeholder="Signalement (optioneel)")
                            ⟨flex:1 1 160px;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:5px 8px;font-size:12px⟩
                        - button (onclick="{{ addNewPerson }}")
                            ⟨border:0;background:#f2b33d;color:#0a0c0e;padding:6px 10px;cursor:pointer;font:700 11px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                            "“{{ pq }}” toevoegen"
              ▸ ALS {{ r.isOpen }}
                - div
                  - div
                      ⟨display:flex;align-items:center;gap:8px;border-bottom:1px solid #232a31;padding-bottom:6px;margin-bottom:8px⟩
                    - span
                        ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;flex:1⟩
                        "Afhandeling"
                  - div
                      ⟨display:flex;flex-direction:column;gap:8px;padding:10px;border:1px solid #4fd18b;background:rgba(79,209,139,.04)⟩
                    - textarea (value="{{ resolveNote }}" onchange="{{ onResolveNote }}" rows="3" placeholder="Wat is er gedaan om de melding op te lossen?")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;line-height:1.45;resize:vertical⟩
                    - div
                        ⟨display:flex;flex-wrap:wrap;gap:6px;align-items:center⟩
                      - span
                          ⟨font-size:12px;color:#8a949e⟩
                          "Opgelost door"
                      - select (value="{{ resolveBy }}" data-v="{{ resolveBy }}" onchange="{{ onResolveBy }}")
                          ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:5px 8px;font-size:13px;max-width:100%⟩
                        ▸ VOOR ELK o IN {{ staffOpts }}
                          - option (value="{{ o.id }}")
                              "{{ o.label }}"
                      - span
                          ⟨flex:1⟩
                      - button (onclick="{{ r.resolve }}")
                          ⟨display:flex;align-items:center;gap:6px;border:0;background:{{ r.resolveBg }};color:#0a0c0e;padding:8px 12px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                        - span
                            ⟨font-family:'Material Symbols Sharp';font-size:17px;line-height:1;font-feature-settings:'liga'⟩
                            "check_box"
                        "Afsluiten: opgelost"
                  - div
                      ⟨display:flex;flex-wrap:wrap;gap:6px;margin-top:10px⟩
                    - button (onclick="{{ r.convert }}")
                        ⟨display:flex;align-items:center;gap:6px;border:0;background:#f2b33d;color:#0a0c0e;padding:10px 14px;cursor:pointer;font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                          "create_new_folder"
                      "Omzetten naar incident"
                    ▸ ALS {{ r.isPub }}
                      - button (onclick="{{ r.reject }}")
                          ⟨border:1px solid #2c343c;background:transparent;color:#8a949e;padding:9px 12px;cursor:pointer;font-size:13px⟩
                          "Afwijzen"
                  - div
                      ⟨font-size:12px;color:#8a949e;margin-top:6px⟩
                      "Bij omzetten gaan betrokkenen, medische info en foto's mee en moet er een incidentrapport worden opgesteld."
          ▸ ALS {{ isI }}
            - div
                ⟨padding:0 18px 28px;display:flex;flex-direction:column;gap:20px⟩
              - div
                - div
                    ⟨display:flex;align-items:center;gap:8px;border-bottom:1px solid #232a31;padding-bottom:6px;margin-bottom:8px⟩
                  - span
                      ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;flex:1⟩
                      "Betrokkenen"
                  - span
                      ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                      "{{ i.personCount }}"
                - div
                    ⟨display:flex;flex-direction:column;gap:6px⟩
                  ▸ VOOR ELK p IN {{ i.persons }}
                    - div
                        ⟨border:1px solid #232a31;border-left:3px solid {{ p.roleCol }};background:#0d1013;padding:9px 10px;display:flex;flex-direction:column;gap:7px⟩
                      - div
                          ⟨display:flex;align-items:center;gap:8px;flex-wrap:wrap⟩
                        - button (onclick="{{ p.open }}")
                            ⟨border:0;background:transparent;color:#e6e9ec;padding:0;cursor:pointer;font-size:15px;font-weight:600;text-align:left⟩
                            "{{ p.name }}"
                        - span
                            ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                            "{{ p.member }}"
                        - span
                            ⟨flex:1⟩
                        - span
                            ⟨font:700 10px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:2px 6px;border:1px solid {{ p.stCol }};color:{{ p.stCol }}⟩
                            "{{ p.stLabel }}"
                      - div
                          ⟨display:flex;flex-wrap:wrap;gap:3px⟩
                        ▸ VOOR ELK b IN {{ p.roles }}
                          - button (onclick="{{ b.onClick }}")
                              ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:3px 8px;cursor:pointer;font-size:12px⟩
                              "{{ b.name }}"
                      - div
                          ⟨display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.6fr);gap:6px⟩
                        - input (value="{{ p.injury }}" onchange="{{ p.onInjury }}" placeholder="Letsel")
                            ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font-size:13px⟩
                        - input (value="{{ p.statement }}" onchange="{{ p.onStatement }}" placeholder="Verklaring / rol in toedracht")
                            ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font-size:13px⟩
                      ▸ ALS {{ p.hasPrior }}
                        - button (onclick="{{ p.open }}")
                            ⟨display:flex;align-items:center;gap:6px;border:0;background:transparent;color:#f2b33d;padding:0;cursor:pointer;font-size:12px;text-align:left⟩
                          - span
                              ⟨font-family:'Material Symbols Sharp';font-size:15px;line-height:1;font-feature-settings:'liga'⟩
                              "history"
                          "Eerder: {{ p.prior }}"
                      ▸ VOOR ELK sn IN {{ p.sancs }}
                        - div
                            ⟨font-size:12px;color:{{ sn.col }}⟩
                            "● {{ sn.text }}"
                      ▸ ALS {{ p.pxOpen }}
                        - div
                            ⟨display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:6px⟩
                          - label
                              ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                            "Geboortedatum"
                            - input (type="date" value="{{ p.px.dob }}" onchange="{{ p.px.onDob }}")
                                ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font:400 13px Barlow,sans-serif;letter-spacing:0;text-transform:none;color-scheme:dark⟩
                          - label
                              ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                            "Telefoon"
                            - input (value="{{ p.px.phone }}" onchange="{{ p.px.onPhone }}")
                                ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font:400 13px Barlow,sans-serif;letter-spacing:0;text-transform:none⟩
                          - label
                              ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                            "Adres"
                            - input (value="{{ p.px.address }}" onchange="{{ p.px.onAddress }}")
                                ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font:400 13px Barlow,sans-serif;letter-spacing:0;text-transform:none⟩
                          - label
                              ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                            "Woonplaats"
                            - input (value="{{ p.px.city }}" onchange="{{ p.px.onCity }}")
                                ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font:400 13px Barlow,sans-serif;letter-spacing:0;text-transform:none⟩
                          - label
                              ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                            "Legitimatie"
                            - input (value="{{ p.px.idDoc }}" onchange="{{ p.px.onIdDoc }}" placeholder="Soort + laatste 4 cijfers")
                                ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font:400 13px Barlow,sans-serif;letter-spacing:0;text-transform:none⟩
                      - div
                          ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                        - button (onclick="{{ p.togglePx }}")
                            ⟨border:1px solid #2c343c;background:transparent;color:{{ p.pxCol }};padding:5px 9px;cursor:pointer;font-size:12px⟩
                            "{{ p.pxLabel }}"
                        - button (onclick="{{ p.sanction }}")
                            ⟨border:1px solid #ff5f57;background:transparent;color:#ff5f57;padding:5px 9px;cursor:pointer;font-size:12px⟩
                            "Sanctie opleggen"
                        - button (onclick="{{ p.remove }}")
                            ⟨border:1px solid #2c343c;background:transparent;color:#8a949e;padding:5px 9px;cursor:pointer;font-size:12px⟩
                            "Ontkoppelen"
                  - div
                      ⟨border:1px dashed #2c343c;padding:9px 10px;display:flex;flex-direction:column;gap:6px⟩
                    - div
                        ⟨display:flex;gap:6px⟩
                      - input (value="{{ pq }}" onchange="{{ onPq }}" placeholder="+ Persoon toevoegen: zoek op naam of ledennummer")
                          ⟨flex:1;min-width:0;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px⟩
                    ▸ VOOR ELK x IN {{ pqRows }}
                      - button (onclick="{{ x.onClick }}")
                          ⟨display:flex;align-items:center;gap:8px;border:1px solid #232a31;background:#12161a;color:#e6e9ec;padding:6px 8px;cursor:pointer;text-align:left;font-size:13px⟩
                        - span
                            ⟨flex:1⟩
                            "{{ x.name }}"
                        - span
                            ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                            "{{ x.member }}"
                        - span
                            ⟨font-size:11px;color:{{ x.stCol }}⟩
                            "{{ x.st }}"
                    ▸ ALS {{ pqNew }}
                      - div
                          ⟨display:flex;flex-wrap:wrap;gap:6px;align-items:center;padding-top:4px⟩
                        - span
                            ⟨font-size:12px;color:#8a949e⟩
                            "Nieuw:"
                        - div
                            ⟨display:flex;gap:2px⟩
                          ▸ VOOR ELK b IN {{ npKinds }}
                            - button (onclick="{{ b.onClick }}")
                                ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:4px 8px;cursor:pointer;font-size:12px⟩
                                "{{ b.name }}"
                        ▸ ALS {{ np.member }}
                          - input (value="{{ np.memberNo }}" onchange="{{ onNpNo }}" placeholder="Ledennummer")
                              ⟨width:130px;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:5px 8px;font:500 12px 'JetBrains Mono',monospace⟩
                        - input (value="{{ np.desc }}" onchange="{{ onNpDesc }}" placeholder="Signalement (optioneel)")
                            ⟨flex:1 1 160px;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:5px 8px;font-size:12px⟩
                        - button (onclick="{{ addNewPerson }}")
                            ⟨border:0;background:#f2b33d;color:#0a0c0e;padding:6px 10px;cursor:pointer;font:700 11px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                            "“{{ pq }}” toevoegen"
              - div
                - div
                    ⟨display:flex;align-items:center;gap:8px;border-bottom:1px solid #232a31;padding-bottom:6px;margin-bottom:8px⟩
                  - span
                      ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;flex:1⟩
                      "Acties & terugkoppeling"
                  - span
                      ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                      "{{ i.taskCount }}"
                - div
                    ⟨display:flex;flex-direction:column;gap:8px⟩
                  ▸ VOOR ELK t IN {{ i.tasks }}
                    - div
                        ⟨border:1px solid #232a31;border-left:3px solid {{ t.col }};background:#0d1013;padding:9px 10px;display:flex;flex-direction:column;gap:7px⟩
                      - div
                          ⟨display:flex;gap:8px;align-items:baseline⟩
                        - span
                            ⟨flex:1;font-size:14px;font-weight:600⟩
                            "{{ t.title }}"
                        - span
                            ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                            "{{ t.when }}"
                      - div
                          ⟨font-size:12px;color:#8a949e⟩
                          "→ {{ t.who }}"
                      ▸ ALS {{ t.hasTimes }}
                        - div
                            ⟨font:500 11px 'JetBrains Mono',monospace;color:#6b757f⟩
                            "{{ t.times }}"
                      ▸ ALS {{ t.waiting }}
                        - div
                            ⟨display:flex;align-items:center;gap:6px;padding:5px 8px;border:1px solid {{ t.ackBd }};font:600 12px 'JetBrains Mono',monospace;color:{{ t.ackCol }}⟩
                          - span
                              ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga'⟩
                              "hourglass_top"
                          "{{ t.ackText }}"
                      - div
                          ⟨display:flex;flex-wrap:wrap;gap:3px⟩
                        ▸ VOOR ELK b IN {{ t.statuses }}
                          - button (onclick="{{ b.onClick }}")
                              ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:3px 8px;cursor:pointer;font-size:12px⟩
                              "{{ b.name }}"
                      ▸ VOOR ELK f IN {{ t.feedback }}
                        - div
                            ⟨display:flex;gap:8px;font-size:13px;padding-left:8px;border-left:1px solid #2c343c⟩
                          - span
                              ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e;flex:none⟩
                              "{{ f.when }}"
                          - span
                            - span
                                ⟨color:#5cc8ff⟩
                                "{{ f.by }}"
                            "{{ f.text }}"
                      - div
                          ⟨display:flex;gap:6px⟩
                        - input (value="{{ t.fb }}" onchange="{{ t.onFb }}" onkeydown="{{ t.onFbKey }}" placeholder="Terugkoppeling toevoegen…")
                            ⟨flex:1;min-width:0;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font-size:13px⟩
                        - button (onclick="{{ t.addFb }}")
                            ⟨border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;padding:5px 9px;cursor:pointer;font-size:12px⟩
                            "Toevoegen"
                  - div
                      ⟨border:1px dashed #f2b33d;padding:10px;display:flex;flex-direction:column;gap:7px⟩
                    - input (value="{{ tf.title }}" onchange="{{ onTfTitle }}" placeholder="Actie uitzetten, bijv. Interventieteam naar bar beneden")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:14px⟩
                    - div
                        ⟨display:flex;flex-wrap:wrap;gap:4px⟩
                      - span
                          ⟨font-size:12px;color:#8a949e;align-self:center;margin-right:4px⟩
                          "Groep:"
                      ▸ VOOR ELK b IN {{ tfGroups }}
                        - button (onclick="{{ b.onClick }}")
                            ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:3px 8px;cursor:pointer;font-size:12px⟩
                            "{{ b.name }}"
                    - div
                        ⟨display:flex;flex-wrap:wrap;gap:4px⟩
                      ▸ VOOR ELK b IN {{ tfStaff }}
                        - button (onclick="{{ b.onClick }}")
                            ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:3px 8px;cursor:pointer;font-size:12px⟩
                            "{{ b.name }}"
                    - button (onclick="{{ addTask }}")
                        ⟨align-self:flex-start;border:0;background:{{ tfBtnBg }};color:#0a0c0e;padding:8px 14px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                        "Actie uitzetten"
              - div
                - div
                    ⟨display:flex;align-items:center;gap:8px;border-bottom:1px solid #232a31;padding-bottom:6px;margin-bottom:8px⟩
                  - span
                      ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;flex:1⟩
                      "BOLO"
                ▸ ALS {{ i.hasBolo }}
                  - div
                      ⟨display:flex;gap:10px;border:1px solid {{ i.boloCol }};padding:10px;background:#0d1013⟩
                    "{{ i.boloThumb }}"
                    - div
                        ⟨flex:1;min-width:0;display:flex;flex-direction:column;gap:4px⟩
                      - div
                          ⟨display:flex;gap:8px;align-items:center⟩
                        - span
                            ⟨font:600 12px 'JetBrains Mono',monospace;color:{{ i.boloCol }}⟩
                            "{{ i.boloNo }}"
                        - span
                            ⟨font:700 10px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:{{ i.boloCol }}⟩
                            "{{ i.boloStatus }}"
                      - div
                          ⟨font-size:14px;font-weight:600⟩
                          "{{ i.boloTitle }}"
                      - div
                          ⟨font-size:13px;color:#c3cad1⟩
                          "{{ i.boloDesc }}"
                      ▸ ALS {{ i.boloActive }}
                        - div
                            ⟨display:flex;gap:6px;margin-top:4px⟩
                          - button (onclick="{{ i.boloFound }}")
                              ⟨border:0;background:#4fd18b;color:#0a0c0e;padding:5px 10px;cursor:pointer;font-size:12px;font-weight:600⟩
                              "Gevonden"
                          - button (onclick="{{ i.boloCancel }}")
                              ⟨border:1px solid #2c343c;background:transparent;color:#8a949e;padding:5px 10px;cursor:pointer;font-size:12px⟩
                              "Intrekken"
                ▸ ALS {{ i.noBolo }}
                  ▸ ALS {{ boloFormClosed }}
                    - button (onclick="{{ openBoloForm }}")
                        ⟨display:flex;align-items:center;gap:6px;border:1px dashed #ff5f57;background:transparent;color:#ff5f57;padding:8px 12px;cursor:pointer;font-size:13px⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                          "person_search"
                      "BOLO uitzetten: dader gevlucht of in publiek opgegaan"
                  ▸ ALS {{ boloFormOpen }}
                    - div
                        ⟨border:1px solid #ff5f57;padding:10px;display:flex;flex-direction:column;gap:7px;background:rgba(255,95,87,.04)⟩
                      - select (value="{{ bf.person }}" data-v="{{ bf.person }}" onchange="{{ onBfPerson }}")
                          ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font-size:13px⟩
                        - option (value="")
                            "Gezochte persoon (optioneel)"
                        ▸ VOOR ELK o IN {{ bfPersons }}
                          - option (value="{{ o.id }}")
                              "{{ o.name }}"
                      - input (value="{{ bf.title }}" onchange="{{ onBfTitle }}" placeholder="Titel, bijv. Dader vechtpartij · gevlucht")
                          ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:14px⟩
                      - textarea (value="{{ bf.desc }}" onchange="{{ onBfDesc }}" rows="3" placeholder="Signalement: geslacht, leeftijd, lengte, kleding, kenmerken, looprichting")
                          ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:14px;resize:vertical⟩
                      - div
                          ⟨display:flex;gap:8px;align-items:center⟩
                        "{{ bfThumb }}"
                        - label
                            ⟨display:flex;align-items:center;gap:6px;border:1px solid #2c343c;padding:6px 10px;cursor:pointer;font-size:13px;color:#c3cad1⟩
                          - input (type="file" accept="image/*" onchange="{{ onBfPhoto }}")
                              ⟨display:none⟩
                          - span
                              ⟨font-family:'Material Symbols Sharp';font-size:17px;line-height:1;font-feature-settings:'liga'⟩
                              "add_a_photo"
                          "Foto"
                        - span
                            ⟨flex:1⟩
                        - button (onclick="{{ closeBoloForm }}")
                            ⟨border:1px solid #2c343c;background:transparent;color:#e6e9ec;padding:6px 10px;cursor:pointer;font-size:13px⟩
                            "Annuleren"
                        - button (onclick="{{ createBolo }}")
                            ⟨border:0;background:#ff5f57;color:#0a0c0e;padding:7px 12px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                            "Verspreiden naar alle telefoons"
              - div
                - div
                    ⟨display:flex;align-items:center;gap:8px;border-bottom:1px solid #232a31;padding-bottom:6px;margin-bottom:10px⟩
                  - span
                      ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;flex:1⟩
                      "Incidentrapport"
                  - span
                      ⟨font:700 10px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:{{ i.rap.col }}⟩
                      "{{ i.rap.state }}"
                - div
                    ⟨display:flex;flex-direction:column;gap:10px⟩
                  - div
                      ⟨display:flex;gap:6px;align-items:center;flex-wrap:wrap⟩
                    - span
                        ⟨font-size:12px;color:#8a949e⟩
                        "Opgesteld door"
                    - select (value="{{ i.rap.by }}" data-v="{{ i.rap.by }}" onchange="{{ i.rap.onBy }}")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:5px 8px;font-size:13px⟩
                      - option (value="")
                          "Kies opsteller…"
                      ▸ VOOR ELK o IN {{ staffOpts }}
                        - option (value="{{ o.id }}")
                            "{{ o.label }}"
                  - label
                      ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                    "Aanleiding"
                    - textarea (value="{{ i.rap.aanleiding }}" onchange="{{ i.rap.onAanleiding }}" rows="2" placeholder="Wat was de directe aanleiding?")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font:400 13px Barlow,sans-serif;letter-spacing:0;text-transform:none;font-size:14px;line-height:1.45;padding:8px 10px;resize:vertical;background:#0d1013⟩
                  - label
                      ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                    "Genomen maatregelen"
                    - textarea (value="{{ i.rap.maatregelen }}" onchange="{{ i.rap.onMaatregelen }}" rows="3" placeholder="Wat heeft de beveiliging gedaan? Scheiden, verwijderen, vasthouden, EHBO…")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font:400 13px Barlow,sans-serif;letter-spacing:0;text-transform:none;font-size:14px;line-height:1.45;padding:8px 10px;resize:vertical;background:#0d1013⟩
                  - label
                      ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                    "Afloop"
                    - textarea (value="{{ i.rap.afloop }}" onchange="{{ i.rap.onAfloop }}" rows="2" placeholder="Hoe is het geëindigd? Wie is vertrokken, overgedragen of aangehouden?")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font:400 13px Barlow,sans-serif;letter-spacing:0;text-transform:none;font-size:14px;line-height:1.45;padding:8px 10px;resize:vertical;background:#0d1013⟩
                  - div
                      ⟨display:flex;flex-direction:column;gap:1px;background:#232a31;border:1px solid #232a31⟩
                    - div
                        ⟨background:#0d1013;padding:8px 10px;display:flex;flex-direction:column;gap:6px⟩
                      - div
                          ⟨display:flex;align-items:center;gap:8px;flex-wrap:wrap⟩
                        - span
                            ⟨flex:1;min-width:160px;font-size:13px⟩
                            "Politie ingeschakeld"
                        - div
                            ⟨display:flex;flex-wrap:wrap;gap:2px⟩
                          ▸ VOOR ELK b IN {{ i.rap.polYn }}
                            - button (onclick="{{ b.onClick }}")
                                ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:3px 10px;cursor:pointer;font-size:12px⟩
                                "{{ b.name }}"
                      ▸ ALS {{ i.rap.polJa }}
                        - div
                            ⟨display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:6px⟩
                          - input (value="{{ i.rap.polReg }}" onchange="{{ i.rap.onPolReg }}" placeholder="Registratienummer politie")
                              ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font:400 13px Barlow,sans-serif;letter-spacing:0;text-transform:none⟩
                          - input (value="{{ i.rap.polEenheid }}" onchange="{{ i.rap.onPolEenheid }}" placeholder="Eenheid / naam agent")
                              ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font:400 13px Barlow,sans-serif;letter-spacing:0;text-transform:none⟩
                    - div
                        ⟨background:#0d1013;padding:8px 10px;display:flex;flex-direction:column;gap:6px⟩
                      - div
                          ⟨display:flex;align-items:center;gap:8px;flex-wrap:wrap⟩
                        - span
                            ⟨flex:1;min-width:160px;font-size:13px⟩
                            "Ambulance ter plaatse"
                        - div
                            ⟨display:flex;flex-wrap:wrap;gap:2px⟩
                          ▸ VOOR ELK b IN {{ i.rap.ambYn }}
                            - button (onclick="{{ b.onClick }}")
                                ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:3px 10px;cursor:pointer;font-size:12px⟩
                                "{{ b.name }}"
                      ▸ ALS {{ i.rap.ambJa }}
                        - div
                            ⟨display:flex;flex-wrap:wrap;gap:8px;align-items:center⟩
                          - span
                              ⟨font-size:12px;color:#8a949e⟩
                              "Vervoerd"
                          - div
                              ⟨display:flex;flex-wrap:wrap;gap:2px⟩
                            ▸ VOOR ELK b IN {{ i.rap.vervYn }}
                              - button (onclick="{{ b.onClick }}")
                                  ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:3px 10px;cursor:pointer;font-size:12px⟩
                                  "{{ b.name }}"
                          - input (value="{{ i.rap.ziekenhuis }}" onchange="{{ i.rap.onZiekenhuis }}" placeholder="Naar welk ziekenhuis")
                              ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font:400 13px Barlow,sans-serif;letter-spacing:0;text-transform:none;flex:1 1 160px⟩
                    - div
                        ⟨background:#0d1013;padding:8px 10px;display:flex;flex-direction:column;gap:6px⟩
                      - div
                          ⟨display:flex;align-items:center;gap:8px;flex-wrap:wrap⟩
                        - span
                            ⟨flex:1;min-width:160px;font-size:13px⟩
                            "Camerabeelden veiliggesteld"
                        - div
                            ⟨display:flex;flex-wrap:wrap;gap:2px⟩
                          ▸ VOOR ELK b IN {{ i.rap.camYn }}
                            - button (onclick="{{ b.onClick }}")
                                ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:3px 10px;cursor:pointer;font-size:12px⟩
                                "{{ b.name }}"
                    - div
                        ⟨background:#0d1013;padding:8px 10px;display:flex;flex-direction:column;gap:6px⟩
                      - div
                          ⟨display:flex;align-items:center;gap:8px;flex-wrap:wrap⟩
                        - span
                            ⟨flex:1;min-width:160px;font-size:13px⟩
                            "Geweld toegepast door beveiliging"
                        - div
                            ⟨display:flex;flex-wrap:wrap;gap:2px⟩
                          ▸ VOOR ELK b IN {{ i.rap.gewYn }}
                            - button (onclick="{{ b.onClick }}")
                                ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:3px 10px;cursor:pointer;font-size:12px⟩
                                "{{ b.name }}"
                      ▸ ALS {{ i.rap.gewJa }}
                        - textarea (value="{{ i.rap.gewText }}" onchange="{{ i.rap.onGewText }}" rows="2" placeholder="Welk geweld, door wie, en waarom was het noodzakelijk?")
                            ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font:400 13px Barlow,sans-serif;letter-spacing:0;text-transform:none;resize:vertical⟩
                  - label
                      ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                    "Nazorg / opvolging"
                    - textarea (value="{{ i.rap.nazorg }}" onchange="{{ i.rap.onNazorg }}" rows="2" placeholder="Bijv. gesprek met bestuur, aangifte, contact ouders, schadeafhandeling")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font:400 13px Barlow,sans-serif;letter-spacing:0;text-transform:none;font-size:14px;line-height:1.45;padding:8px 10px;resize:vertical;background:#0d1013⟩
                  - label
                      ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                    "Overige opmerkingen"
                    - textarea (value="{{ i.rap.text }}" onchange="{{ i.rap.onText }}" rows="2" placeholder="")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font:400 13px Barlow,sans-serif;letter-spacing:0;text-transform:none;font-size:14px;line-height:1.45;padding:8px 10px;resize:vertical;background:#0d1013⟩
                  ▸ ALS {{ i.rap.hasNeed }}
                    - div
                        ⟨border:1px solid #c792ea;padding:10px 12px;display:flex;flex-direction:column;gap:4px⟩
                      - div
                          ⟨font:700 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#c792ea⟩
                          "{{ i.rap.needTitle }}"
                      ▸ VOOR ELK n IN {{ i.rap.need }}
                        - div
                            ⟨font-size:13px;color:#c3cad1⟩
                            "○ {{ n.t }}"
                  - button (onclick="{{ i.rap.toggle }}")
                      ⟨align-self:flex-start;border:1px solid {{ i.rap.btnBd }};background:{{ i.rap.btnBg }};color:{{ i.rap.btnFg }};padding:8px 14px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                      "{{ i.rap.btn }}"
              - div
                - div
                    ⟨display:flex;align-items:center;gap:8px;border-bottom:1px solid #232a31;padding-bottom:6px;margin-bottom:8px⟩
                  - span
                      ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;flex:1⟩
                      "Foto's & logboek"
                - div
                    ⟨display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px⟩
                  "{{ i.thumbs }}"
                  - label
                      ⟨width:72px;height:72px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;border:1px dashed #2c343c;color:#8a949e;cursor:pointer;font-size:11px⟩
                    - input (type="file" accept="image/*" multiple="" onchange="{{ i.onPhoto }}")
                        ⟨display:none⟩
                    - span
                        ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga'⟩
                        "add_a_photo"
                    "Foto"
                - div
                    ⟨display:flex;flex-direction:column;gap:5px⟩
                  ▸ VOOR ELK l IN {{ i.log }}
                    - div
                        ⟨display:flex;gap:10px;font-size:13px⟩
                      - span
                          ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e;flex:none;width:86px⟩
                          "{{ l.when }}"
                      - span
                          ⟨color:#5cc8ff;flex:none⟩
                          "{{ l.by }}"
                      - span
                          ⟨color:#c3cad1⟩
                          "{{ l.text }}"
                - div
                    ⟨display:flex;gap:6px;margin-top:8px⟩
                  - input (value="{{ noteText }}" onchange="{{ onNote }}" onkeydown="{{ onNoteKey }}" placeholder="Notitie aan logboek toevoegen…")
                      ⟨flex:1;min-width:0;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px⟩
                  - button (onclick="{{ addNote }}")
                      ⟨border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;padding:6px 10px;cursor:pointer;font-size:13px⟩
                      "Toevoegen"
          ▸ ALS {{ isP }}
            - div
                ⟨padding:16px 18px 28px;display:flex;flex-direction:column;gap:14px⟩
              - div
                  ⟨display:flex;gap:12px;align-items:flex-start⟩
                - div
                    ⟨flex:none⟩
                    "{{ p.photoEl }}"
                - div
                    ⟨flex:1;min-width:0;display:flex;flex-direction:column;gap:6px⟩
                  - input (value="{{ p.name }}" onchange="{{ p.onName }}")
                      ⟨background:transparent;border:0;border-bottom:1px solid #2c343c;color:#e6e9ec;padding:2px 0;font:700 24px 'Barlow Condensed',sans-serif;letter-spacing:.03em;outline:none⟩
                  - div
                      ⟨display:flex;flex-wrap:wrap;gap:6px;align-items:center⟩
                    ▸ VOOR ELK b IN {{ p.kinds }}
                      - button (onclick="{{ b.onClick }}")
                          ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:3px 8px;cursor:pointer;font-size:12px⟩
                          "{{ b.name }}"
                    ▸ ALS {{ p.member }}
                      - input (value="{{ p.memberNo }}" onchange="{{ p.onNo }}" placeholder="Ledennummer")
                          ⟨width:130px;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:4px 8px;font:500 12px 'JetBrains Mono',monospace⟩
                    - span
                        ⟨font-size:12px;color:#8a949e⟩
                        "{{ p.client }}"
              - div
                  ⟨display:flex;align-items:center;gap:10px;padding:12px 14px;border:2px solid {{ p.stCol }};background:#0d1013⟩
                - span
                    ⟨font-family:'Material Symbols Sharp';font-size:26px;line-height:1;font-feature-settings:'liga';color:{{ p.stCol }}⟩
                    "{{ p.stIcon }}"
                - div
                    ⟨flex:1⟩
                  - div
                      ⟨font:700 16px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase;color:{{ p.stCol }}⟩
                      "{{ p.stLabel }}"
                  - div
                      ⟨font-size:12px;color:#8a949e⟩
                      "{{ p.stSub }}"
                - button (onclick="{{ p.sanction }}")
                    ⟨border:1px solid #ff5f57;background:transparent;color:#ff5f57;padding:6px 10px;cursor:pointer;font-size:13px⟩
                    "Sanctie opleggen"
              - div
                - div
                    ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:5px⟩
                    "Signalement / notities"
                - textarea (value="{{ p.desc }}" onchange="{{ p.onDesc }}" rows="2")
                    ⟨width:100%;background:#0d1013;border:1px solid #2c343c;color:#e6e9ec;padding:7px 9px;font-size:14px;resize:vertical⟩
                - label
                    ⟨display:inline-flex;align-items:center;gap:6px;margin-top:6px;border:1px solid #2c343c;padding:5px 9px;cursor:pointer;font-size:12px;color:#c3cad1⟩
                  - input (type="file" accept="image/*" onchange="{{ p.onPhoto }}")
                      ⟨display:none⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga'⟩
                      "add_a_photo"
                  "Foto wijzigen"
              - div
                - div
                    ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:5px⟩
                    "Personalia"
                - div
                    ⟨display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:6px⟩
                  - label
                      ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                    "Geboortedatum"
                    - input (type="date" value="{{ p.px.dob }}" onchange="{{ p.px.onDob }}")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font:400 13px Barlow,sans-serif;letter-spacing:0;text-transform:none;color-scheme:dark⟩
                  - label
                      ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                    "Telefoon"
                    - input (value="{{ p.px.phone }}" onchange="{{ p.px.onPhone }}")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font:400 13px Barlow,sans-serif;letter-spacing:0;text-transform:none⟩
                  - label
                      ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                    "Adres"
                    - input (value="{{ p.px.address }}" onchange="{{ p.px.onAddress }}")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font:400 13px Barlow,sans-serif;letter-spacing:0;text-transform:none⟩
                  - label
                      ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                    "Woonplaats"
                    - input (value="{{ p.px.city }}" onchange="{{ p.px.onCity }}")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font:400 13px Barlow,sans-serif;letter-spacing:0;text-transform:none⟩
                  - label
                      ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                    "Legitimatie"
                    - input (value="{{ p.px.idDoc }}" onchange="{{ p.px.onIdDoc }}" placeholder="Soort + laatste 4 cijfers")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font:400 13px Barlow,sans-serif;letter-spacing:0;text-transform:none⟩
              - div
                - div
                    ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;border-bottom:1px solid #232a31;padding-bottom:6px;margin-bottom:6px⟩
                    "Sancties"
                ▸ ALS {{ p.noSanc }}
                  - div
                      ⟨font-size:13px;color:#8a949e⟩
                      "Geen sancties."
                ▸ VOOR ELK sn IN {{ p.sancs }}
                  - div
                      ⟨display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding:8px 0;border-bottom:1px solid #1b2127⟩
                    - span
                        ⟨width:8px;height:8px;background:{{ sn.col }}⟩
                    - span
                        ⟨flex:1 1 200px;min-width:0⟩
                      - span
                          ⟨display:block;font-size:14px⟩
                          "{{ sn.text }}"
                      - span
                          ⟨display:block;font-size:12px;color:#8a949e⟩
                          "{{ sn.sub }}"
                    - span
                        ⟨font:700 10px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:{{ sn.col }}⟩
                        "{{ sn.state }}"
                    ▸ ALS {{ sn.hasInc }}
                      - button (onclick="{{ sn.openInc }}")
                          ⟨border:0;background:transparent;color:#5cc8ff;cursor:pointer;padding:0;font:500 11px 'JetBrains Mono',monospace⟩
                          "{{ sn.incNo }}"
                    ▸ ALS {{ sn.isFine }}
                      - button (onclick="{{ sn.togglePaid }}")
                          ⟨border:1px solid #2c343c;background:transparent;color:#e6e9ec;padding:3px 8px;cursor:pointer;font-size:12px⟩
                          "{{ sn.paidLabel }}"
                    ▸ ALS {{ sn.active }}
                      - button (onclick="{{ sn.revoke }}")
                          ⟨border:1px solid #2c343c;background:transparent;color:#8a949e;padding:3px 8px;cursor:pointer;font-size:12px⟩
                          "Intrekken"
              - div
                - div
                    ⟨font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;border-bottom:1px solid #232a31;padding-bottom:6px;margin-bottom:8px⟩
                    "Historie"
                - div
                    ⟨display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1px;background:#232a31;border:1px solid #232a31;margin-bottom:8px⟩
                  ▸ VOOR ELK c IN {{ p.sum }}
                    - div
                        ⟨background:#0d1013;padding:8px 10px;min-width:0⟩
                      - div
                          ⟨font:700 20px 'JetBrains Mono',monospace;color:{{ c.col }}⟩
                          "{{ c.n }}"
                      - div
                          ⟨font-size:11px;color:#8a949e⟩
                          "{{ c.label }}"
                ▸ ALS {{ p.noLinks }}
                  - div
                      ⟨font-size:13px;color:#8a949e⟩
                      "Geen eerdere meldingen of incidenten."
                ▸ VOOR ELK l IN {{ p.links }}
                  - button (onclick="{{ l.onClick }}")
                      ⟨display:grid;grid-template-columns:76px minmax(0,1fr) auto;gap:10px;align-items:center;width:100%;border:0;border-bottom:1px solid #1b2127;background:transparent;color:#e6e9ec;padding:8px 0;cursor:pointer;text-align:left⟩
                    - span
                        ⟨display:flex;flex-direction:column;gap:2px⟩
                      - span
                          ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                          "{{ l.when }}"
                      - span
                          ⟨font:500 11px 'JetBrains Mono',monospace;color:#f2b33d⟩
                          "{{ l.no }}"
                    - span
                        ⟨min-width:0⟩
                      - span
                          ⟨display:block;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap⟩
                          "{{ l.title }}"
                      - span
                          ⟨display:block;font-size:11px;color:#8a949e⟩
                          "{{ l.kind }}"
                    - span
                        ⟨display:flex;gap:4px;align-items:center⟩
                      - span
                          ⟨font:700 10px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:1px 5px;border:1px solid {{ l.col }};color:{{ l.col }}⟩
                          "{{ l.role }}"
                      - span
                          ⟨font:700 10px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:{{ l.actCol }}⟩
                          "{{ l.act }}"
        ▸ ALS {{ sfOpen }}
          - div
              ⟨position:absolute;inset:0;background:rgba(5,6,7,.75);display:flex;align-items:flex-start;justify-content:center;padding:40px 16px;z-index:4⟩
            - div
                ⟨width:100%;max-width:520px;background:#12161a;border:1px solid #ff5f57;padding:16px;display:flex;flex-direction:column;gap:12px⟩
              - div
                  ⟨display:flex;align-items:center;gap:8px⟩
                - span
                    ⟨font:700 18px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase;flex:1⟩
                    "Sanctie · {{ sf.personName }}"
                - button (onclick="{{ closeSf }}")
                    ⟨border:0;background:transparent;color:#8a949e;cursor:pointer⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga'⟩
                      "close"
              ▸ ALS {{ sf.hasInc }}
                - div
                    ⟨font:500 12px 'JetBrains Mono',monospace;color:#8a949e⟩
                    "Naar aanleiding van {{ sf.incNo }}"
              - div
                  ⟨display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px⟩
                ▸ VOOR ELK b IN {{ sfTypes }}
                  - button (onclick="{{ b.onClick }}")
                      ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:9px 4px;cursor:pointer;font-size:13px;font-weight:600⟩
                      "{{ b.name }}"
              ▸ ALS {{ sfIsBan }}
                - div
                    ⟨display:flex;flex-direction:column;gap:6px⟩
                  - span
                      ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                      "Duur"
                  - div
                      ⟨display:flex;flex-wrap:wrap;gap:4px⟩
                    ▸ VOOR ELK b IN {{ sfDurs }}
                      - button (onclick="{{ b.onClick }}")
                          ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:5px 9px;cursor:pointer;font-size:12px⟩
                          "{{ b.name }}"
                  - div
                      ⟨display:flex;align-items:center;gap:8px;font-size:13px;color:#c3cad1⟩
                    - span
                        "t/m"
                    - input (type="date" value="{{ sfUntil }}" onchange="{{ onSfUntil }}")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:5px 8px;font-size:13px;color-scheme:dark⟩
              ▸ ALS {{ sfIsFine }}
                - div
                    ⟨display:flex;flex-direction:column;gap:8px⟩
                  - div
                      ⟨display:flex;align-items:center;gap:8px⟩
                    - span
                        ⟨font-size:13px;color:#c3cad1⟩
                        "Bedrag €"
                    - input (value="{{ sf.amount }}" onchange="{{ onSfAmount }}" inputmode="numeric")
                        ⟨width:100px;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font:500 14px 'JetBrains Mono',monospace⟩
                  - label
                      ⟨display:flex;flex-direction:column;gap:4px;font-size:12px;color:#8a949e⟩
                    "Doorgeven aan"
                    - input (value="{{ sf.forwardTo }}" onchange="{{ onSfFwd }}")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:14px⟩
                  - div
                      ⟨font-size:12px;color:#8a949e⟩
                      "Wij innen de boete niet. Na doorgeven is de afhandeling bij de ontvanger; de boete blijft in het register staan."
              ▸ ALS {{ sfIsRoy }}
                - div
                    ⟨font-size:13px;color:#f2b33d⟩
                    "Royement geldt permanent, tot het wordt ingetrokken."
              - div
                  ⟨display:flex;flex-direction:column;gap:6px⟩
                - span
                    ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                    "Geldt voor"
                - div
                    ⟨display:flex;gap:4px⟩
                  ▸ VOOR ELK b IN {{ sfScopes }}
                    - button (onclick="{{ b.onClick }}")
                        ⟨flex:1;border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:7px;cursor:pointer;font-size:13px⟩
                        "{{ b.name }}"
              - input (value="{{ sf.reason }}" onchange="{{ onSfReason }}" placeholder="Reden")
                  ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px;font-size:14px⟩
              - div
                  ⟨font-size:13px;color:#c3cad1⟩
                  "{{ sfSummary }}"
              - button (onclick="{{ saveSf }}")
                  ⟨border:0;background:#ff5f57;color:#0a0c0e;padding:10px;cursor:pointer;font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                  "Sanctie opleggen"
      ▸ ALS {{ showSide }}
        - section
            ⟨display:flex;flex-direction:column;min-height:0;border-right:1px solid #232a31;background:#0d1013⟩
          ▸ ALS {{ showBolo }}
            - div
                ⟨display:flex;flex-direction:column;min-height:0;flex:1 1 50%⟩
              - div
                  ⟨display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid #232a31⟩
                - span
                    ⟨font:700 14px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;flex:1⟩
                    "BOLO"
                - span
                    ⟨font:500 11px 'JetBrains Mono',monospace;color:#ff5f57⟩
                    "{{ boloActiveN }}"
              - div
                  ⟨flex:1;min-height:0;overflow-y:auto;padding:8px 10px;display:flex;flex-direction:column;gap:6px⟩
                ▸ ALS {{ noBolos }}
                  - div
                      ⟨padding:12px 4px;font-size:13px;color:#8a949e⟩
                      "Geen BOLO's."
                ▸ VOOR ELK b IN {{ boloRows }}
                  - div
                      ⟨display:flex;gap:8px;border:1px solid {{ b.bd }};background:#12161a;padding:8px;opacity:{{ b.op }}⟩
                    "{{ b.thumb }}"
                    - div
                        ⟨flex:1;min-width:0;display:flex;flex-direction:column;gap:3px⟩
                      - div
                          ⟨display:flex;gap:6px;align-items:center⟩
                        - span
                            ⟨font:600 11px 'JetBrains Mono',monospace;color:{{ b.col }}⟩
                            "{{ b.no }}"
                        - span
                            ⟨font:700 10px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:{{ b.col }}⟩
                            "{{ b.status }}"
                        - span
                            ⟨flex:1⟩
                        - span
                            ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                            "{{ b.ago }}"
                      - div
                          ⟨font-size:14px;font-weight:600⟩
                          "{{ b.title }}"
                      - div
                          ⟨font-size:12px;color:#c3cad1⟩
                          "{{ b.desc }}"
                      ▸ ALS {{ b.hasInc }}
                        - button (onclick="{{ b.openInc }}")
                            ⟨align-self:flex-start;border:0;background:transparent;color:#5cc8ff;padding:0;cursor:pointer;font:500 11px 'JetBrains Mono',monospace⟩
                            "{{ b.incNo }} →"
          ▸ ALS {{ showSanc }}
            - div
                ⟨display:flex;flex-direction:column;min-height:0;flex:1 1 50%;border-top:1px solid #232a31⟩
              - div
                  ⟨display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid #232a31⟩
                - span
                    ⟨font:700 14px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;flex:1⟩
                    "Sanctieregister"
              - div
                  ⟨display:flex;gap:2px;padding:6px 12px;border-bottom:1px solid #232a31⟩
                ▸ VOOR ELK f IN {{ sancFilters }}
                  - button (onclick="{{ f.onClick }}")
                      ⟨border:0;background:{{ f.bg }};color:{{ f.fg }};padding:4px 8px;cursor:pointer;font-size:12px⟩
                    "{{ f.label }}"
                    - span
                        ⟨font-family:'JetBrains Mono',monospace;color:#8a949e⟩
                        "{{ f.n }}"
              - div
                  ⟨flex:1;min-height:0;overflow-y:auto⟩
                ▸ VOOR ELK sn IN {{ sancRows }}
                  - button (onclick="{{ sn.onClick }}")
                      ⟨display:flex;gap:8px;align-items:center;width:100%;border:0;border-bottom:1px solid #1b2127;background:transparent;color:#e6e9ec;padding:8px 12px;cursor:pointer;text-align:left⟩
                    - span
                        ⟨width:8px;height:8px;flex:none;background:{{ sn.col }}⟩
                    - span
                        ⟨flex:1;min-width:0⟩
                      - span
                          ⟨display:block;font-size:14px⟩
                        "{{ sn.name }}"
                        - span
                            ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                            "{{ sn.memberNo }}"
                      - span
                          ⟨display:block;font-size:12px;color:#8a949e⟩
                          "{{ sn.text }} · {{ sn.scope }}"
                    - span
                        ⟨font:700 10px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:{{ sn.col }}⟩
                        "{{ sn.state }}"
          ▸ ALS {{ showPers }}
            - div
                ⟨display:flex;flex-direction:column;min-height:0;flex:1⟩
              - div
                  ⟨display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid #232a31⟩
                - span
                    ⟨font:700 14px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;flex:1⟩
                    "Register"
                - span
                    ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                    "{{ persCount }}"
              - div
                  ⟨display:flex;flex-wrap:wrap;gap:2px;padding:6px 12px;border-bottom:1px solid #232a31⟩
                ▸ VOOR ELK f IN {{ regFilters }}
                  - button (onclick="{{ f.onClick }}")
                      ⟨border:0;background:{{ f.bg }};color:{{ f.fg }};padding:4px 8px;cursor:pointer;font-size:12px⟩
                    "{{ f.label }}"
                    - span
                        ⟨font-family:'JetBrains Mono',monospace;color:#8a949e⟩
                        "{{ f.n }}"
              - div
                  ⟨padding:8px 12px;border-bottom:1px solid #232a31;display:flex;gap:6px⟩
                - input (value="{{ persQ }}" onchange="{{ onPersQ }}" placeholder="Filter op naam of ledennummer")
                    ⟨flex:1;min-width:0;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font-size:13px⟩
                - button (onclick="{{ addPersonQuick }}")
                    ⟨border:1px solid #f2b33d;background:transparent;color:#f2b33d;padding:4px 9px;cursor:pointer;font-size:12px⟩
                    "+ Persoon"
              - div
                  ⟨flex:1;min-height:0;overflow-y:auto⟩
                ▸ VOOR ELK p IN {{ persRows }}
                  - button (onclick="{{ p.onClick }}")
                      ⟨display:flex;gap:8px;align-items:center;width:100%;border:0;border-bottom:1px solid #1b2127;border-left:2px solid {{ p.selBd }};background:transparent;color:#e6e9ec;padding:8px 12px;cursor:pointer;text-align:left⟩
                    - span
                        ⟨width:8px;height:8px;flex:none;background:{{ p.col }}⟩
                    - span
                        ⟨flex:1;min-width:0⟩
                      - span
                          ⟨display:block;font-size:14px⟩
                          "{{ p.name }}"
                      - span
                          ⟨display:block;font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                          "{{ p.member }}"
                      - span
                          ⟨display:block;font-size:11px;color:#8a949e⟩
                          "{{ p.hist }}"
                    - span
                        ⟨font-size:11px;color:{{ p.col }};max-width:40%;text-align:right⟩
                        "{{ p.st }}"
      ▸ ALS {{ showMsg }}
        - section
            ⟨display:flex;flex-direction:column;min-height:0;background:#0d1013⟩
          - div
              ⟨display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid #232a31⟩
            - span
                ⟨font:700 14px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;flex:1⟩
                "Berichten · iedereen"
          - div
              ⟨flex:1;min-height:0;overflow-y:auto;padding:10px 12px;display:flex;flex-direction:column;gap:8px⟩
            ▸ VOOR ELK m IN {{ msgRows }}
              - div
                  ⟨display:flex;flex-direction:column;gap:2px;align-self:{{ m.align }};max-width:90%;background:{{ m.bg }};border:1px solid #232a31;padding:7px 10px⟩
                - div
                    ⟨display:flex;gap:8px;font-size:11px⟩
                  - span
                      ⟨color:{{ m.col }};font-weight:600⟩
                      "{{ m.from }}"
                  - span
                      ⟨font-family:'JetBrains Mono',monospace;color:#6b757f⟩
                      "{{ m.when }}"
                - div
                    ⟨font-size:14px⟩
                    "{{ m.text }}"
          - div
              ⟨display:flex;gap:6px;padding:10px 12px;border-top:1px solid #232a31⟩
            - input (value="{{ msgText }}" onchange="{{ onMsg }}" onkeydown="{{ onMsgKey }}" placeholder="Bericht aan iedereen…")
                ⟨flex:1;min-width:0;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px;font-size:14px⟩
            - button (onclick="{{ sendMsg }}")
                ⟨border:0;background:#f2b33d;color:#0a0c0e;padding:6px 12px;cursor:pointer⟩
              - span
                  ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                  "send"
  ▸ ALS {{ hasLightbox }}
    - div (onclick="{{ closeLightbox }}")
        ⟨position:fixed;inset:0;background:rgba(0,0,0,.9);display:flex;align-items:center;justify-content:center;z-index:20;cursor:zoom-out⟩
        "{{ lightboxEl }}"
```
