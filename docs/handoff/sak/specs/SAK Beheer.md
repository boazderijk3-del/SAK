# Pixelspec · SAK Beheer

Gegenereerd uit `prototype/SAK Beheer.dc.html`. Volledige elementboom met **exacte inline-stijlen** en teksten; normatief. `{{ … }}` = dynamische waarde uit de logica onderaan het prototype. `▸ ALS` = alleen zichtbaar als de waarde waar is; `▸ VOOR ELK` = herhaald per item.

```
- div
    ⟨display:grid;grid-template-columns:230px minmax(0,1fr);height:100vh;background:#0a0c0e⟩
  - nav
      ⟨display:flex;flex-direction:column;gap:4px;border-right:1px solid #232a31;background:#0d1013;padding:16px 12px⟩
    - div
        ⟨position:relative;padding:0 0 12px⟩
      - button (onclick="{{ toggleApps }}" title="Wissel van programma" style-hover="background:#12161a")
          ⟨width:100%;display:flex;align-items:baseline;gap:8px;background:transparent;border:0;padding:4px 6px;cursor:pointer;color:inherit;text-align:left⟩
        - span
            ⟨font:700 22px 'JetBrains Mono',monospace;color:#f2b33d;letter-spacing:.06em⟩
            "SAK"
        - span
            ⟨font:600 13px 'Barlow Condensed',sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#8a949e⟩
            "Beheer"
        - span
            ⟨flex:1⟩
        - span
            ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;color:#8a949e;align-self:center;font-feature-settings:'liga'⟩
            "expand_more"
      ▸ ALS {{ appsOpen }}
        - div
            ⟨position:absolute;top:calc(100% + 10px);left:0;width:290px;z-index:40;background:#12161a;border:1px solid #2c343c;padding:6px;display:flex;flex-direction:column;gap:2px;box-shadow:0 16px 40px rgba(0,0,0,.5)⟩
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
    ▸ VOOR ELK n IN {{ navItems }}
      - button (onclick="{{ n.onClick }}")
          ⟨display:flex;align-items:center;gap:10px;width:100%;border:0;border-left:2px solid {{ n.bd }};background:{{ n.bg }};color:{{ n.fg }};padding:10px 10px;cursor:pointer;text-align:left;font-size:14px⟩
        - span
            ⟨font-family:'Material Symbols Sharp';font-size:19px;line-height:1;font-feature-settings:'liga'⟩
            "{{ n.icon }}"
        - span
            ⟨flex:1⟩
            "{{ n.label }}"
        - span
            ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
            "{{ n.n }}"
    - div
        ⟨flex:1⟩
    - a (href="SAK Meldkamer.dc.html")
        ⟨display:flex;align-items:center;gap:8px;padding:9px 10px;font-size:13px;text-decoration:none;border:1px solid #232a31⟩
      - span
          ⟨font-family:'Material Symbols Sharp';font-size:17px;line-height:1;font-feature-settings:'liga'⟩
          "folder_open"
      "Meldkamer · registraties"
    - a (href="SAK Kaart.dc.html")
        ⟨display:flex;align-items:center;gap:8px;padding:9px 10px;font-size:13px;text-decoration:none;border:1px solid #232a31⟩
      - span
          ⟨font-family:'Material Symbols Sharp';font-size:17px;line-height:1;font-feature-settings:'liga'⟩
          "map"
      "Kaart"
    - button (onclick="{{ onReset }}")
        ⟨border:0;background:transparent;color:#6b757f;padding:8px 10px;font-size:12px;text-align:left;cursor:pointer⟩
        "{{ resetLabel }}"
  - main
      ⟨min-width:0;overflow-y:auto⟩
    ▸ ALS {{ ready }}
      - div
          ⟨max-width:1280px;padding:24px 28px 60px;display:flex;flex-direction:column;gap:20px⟩
        ▸ ALS {{ isRoles }}
          - div
              ⟨display:flex;flex-direction:column;gap:20px⟩
            - div
              - h1
                  ⟨margin:0;font:700 28px 'Barlow Condensed',sans-serif;letter-spacing:.04em;text-transform:uppercase⟩
                  "Rollen & personeel"
              - div
                  ⟨font-size:14px;color:#8a949e;margin-top:4px;text-wrap:pretty⟩
                  "Geef rollen jullie eigen naam en afkorting. Een rol die nog in gebruik is, zet je bij het verwijderen eerst over naar een andere rol."
            - div
                ⟨display:flex;flex-wrap:wrap;gap:20px;align-items:flex-start⟩
              - section
                  ⟨flex:1 1 520px;min-width:0;border:1px solid #232a31;background:#12161a⟩
                - div
                    ⟨display:grid;grid-template-columns:34px 96px minmax(0,1fr) 100px 40px;gap:8px;padding:10px 14px;border-bottom:1px solid #232a31;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                  - span
                      "Kleur"
                  - span
                      "Afkorting"
                  - span
                      "Rolnaam"
                  - span
                      "In gebruik"
                  - span
                ▸ VOOR ELK r IN {{ roleRows }}
                  - div
                      ⟨border-bottom:1px solid #1b2127⟩
                    - div
                        ⟨display:grid;grid-template-columns:34px 96px minmax(0,1fr) 100px 40px;gap:8px;align-items:center;padding:8px 14px⟩
                      - button (onclick="{{ r.cycleColor }}" title="Andere kleur")
                          ⟨width:22px;height:22px;border:1px solid #0a0c0e;outline:1px solid #2c343c;background:{{ r.color }};cursor:pointer;padding:0⟩
                      - input (value="{{ r.code }}" onchange="{{ r.onCode }}")
                          ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font:600 13px 'JetBrains Mono',monospace⟩
                      - input (value="{{ r.name }}" onchange="{{ r.onName }}")
                          ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:14px⟩
                      - span
                          ⟨font:500 12px 'JetBrains Mono',monospace;color:#8a949e⟩
                          "{{ r.countLabel }}"
                      - button (onclick="{{ r.onDel }}" title="Rol verwijderen")
                          ⟨border:0;background:transparent;color:#8a949e;cursor:pointer;padding:4px⟩
                        - span
                            ⟨font-family:'Material Symbols Sharp';font-size:19px;line-height:1;font-feature-settings:'liga'⟩
                            "delete"
                    ▸ ALS {{ r.confirming }}
                      - div
                          ⟨display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:0 14px 10px;padding:10px 12px;border:1px solid #ff5f57;background:rgba(255,95,87,.07);font-size:13px⟩
                        - span
                            ⟨flex:1 1 220px⟩
                            "{{ r.confirmText }}"
                        - select (value="{{ r.to }}" data-v="{{ r.to }}" onchange="{{ r.onTo }}")
                            ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font-size:13px⟩
                          ▸ VOOR ELK o IN {{ r.others }}
                            - option (value="{{ o.id }}")
                                "{{ o.name }}"
                        - button (onclick="{{ r.onConfirm }}")
                            ⟨border:0;background:#ff5f57;color:#0a0c0e;padding:7px 10px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                            "Overzetten en verwijderen"
                        - button (onclick="{{ r.onCancel }}")
                            ⟨border:1px solid #2c343c;background:transparent;color:#e6e9ec;padding:6px 10px;cursor:pointer;font-size:13px⟩
                            "Annuleren"
                - div
                    ⟨display:grid;grid-template-columns:34px 96px minmax(0,1fr) 140px;gap:8px;align-items:center;padding:12px 14px;background:#0f1215⟩
                  - button (onclick="{{ cycleNewColor }}" title="Kleur")
                      ⟨width:22px;height:22px;border:1px solid #0a0c0e;outline:1px solid #2c343c;background:{{ newRole.color }};cursor:pointer;padding:0⟩
                  - input (value="{{ newRole.code }}" onchange="{{ onNrCode }}" placeholder="{{ nrCodePh }}")
                      ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font:600 13px 'JetBrains Mono',monospace⟩
                  - input (value="{{ newRole.name }}" onchange="{{ onNrName }}" onkeydown="{{ onNrKey }}" placeholder="Nieuwe rol, bijv. Toezichthouder")
                      ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:14px⟩
                  - button (onclick="{{ addRole }}")
                      ⟨border:0;background:#f2b33d;color:#0a0c0e;padding:8px 10px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                      "+ Rol toevoegen"
                ▸ ALS {{ hasRoleErr }}
                  - div
                      ⟨padding:0 14px 12px;background:#0f1215;font-size:13px;color:#ff5f57⟩
                      "{{ roleErr }}"
              - section
                  ⟨flex:1 1 340px;min-width:0;border:1px solid #232a31;background:#12161a⟩
                - div
                    ⟨padding:10px 14px;border-bottom:1px solid #232a31;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                    "Personeel · rol per medewerker"
                ▸ VOOR ELK p IN {{ staffRows }}
                  - div
                      ⟨display:grid;grid-template-columns:8px minmax(0,1fr) 160px;gap:10px;align-items:center;padding:7px 14px;border-bottom:1px solid #1b2127⟩
                    - span
                        ⟨width:8px;height:8px;background:{{ p.col }}⟩
                    - span
                        ⟨font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap⟩
                        "{{ p.name }}"
                    - select (value="{{ p.role }}" data-v="{{ p.role }}" onchange="{{ p.onRole }}")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font-size:13px⟩
                      ▸ VOOR ELK o IN {{ roleOpts }}
                        - option (value="{{ o.id }}")
                            "{{ o.label }}"
        ▸ ALS {{ isInv }}
          - div
              ⟨display:flex;flex-direction:column;gap:18px⟩
            - div
              - h1
                  ⟨margin:0;font:700 28px 'Barlow Condensed',sans-serif;letter-spacing:.04em;text-transform:uppercase⟩
                  "Inventaris"
              - div
                  ⟨font-size:14px;color:#8a949e;margin-top:4px;text-wrap:pretty⟩
                  "Alles wat jullie kunnen uitgeven, met jullie eigen nummering. Alleen items op deze lijst kunnen in de meldkamer en op de telefoon worden uitgegeven."
            - div
                ⟨display:flex;flex-wrap:wrap;gap:6px⟩
              ▸ VOOR ELK c IN {{ catChips }}
                - button (onclick="{{ c.onClick }}")
                    ⟨display:flex;align-items:center;gap:7px;border:1px solid {{ c.bd }};background:{{ c.bg }};color:{{ c.fg }};padding:7px 11px;cursor:pointer;font-size:13px⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:17px;line-height:1;font-feature-settings:'liga'⟩
                      "{{ c.icon }}"
                  "{{ c.name }}"
                  - span
                      ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                      "{{ c.n }}"
              - button (onclick="{{ toggleCatForm }}")
                  ⟨border:1px dashed #f2b33d;background:transparent;color:#f2b33d;padding:7px 11px;cursor:pointer;font-size:13px⟩
                  "+ Categorie"
            ▸ ALS {{ catForm }}
              - div
                  ⟨display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr) 110px minmax(0,1fr) auto;gap:8px;align-items:end;padding:12px;border:1px dashed #2c343c⟩
                - label
                    ⟨display:flex;flex-direction:column;gap:5px⟩
                  - span
                      ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                      "Naam"
                  - input (value="{{ newCat.name }}" onchange="{{ onNcName }}" placeholder="bijv. Zaklamp")
                      ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:14px⟩
                - label
                    ⟨display:flex;flex-direction:column;gap:5px⟩
                  - span
                      ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                      "Prefix nummering"
                  - input (value="{{ newCat.prefix }}" onchange="{{ onNcPrefix }}" placeholder="ZL-")
                      ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font:500 13px 'JetBrains Mono',monospace⟩
                - label
                    ⟨display:flex;flex-direction:column;gap:5px⟩
                  - span
                      ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                      "Cijfers"
                  - select (value="{{ newCat.pad }}" data-v="{{ newCat.pad }}" onchange="{{ onNcPad }}")
                      ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px⟩
                    ▸ VOOR ELK o IN {{ padOpts }}
                      - option (value="{{ o.v }}")
                          "{{ o.label }}"
                - label
                    ⟨display:flex;flex-direction:column;gap:5px⟩
                  - span
                      ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                      "Pictogram"
                  - div
                      ⟨display:flex;flex-wrap:wrap;gap:3px⟩
                    ▸ VOOR ELK ic IN {{ ncIcons }}
                      - button (onclick="{{ ic.onClick }}")
                          ⟨width:30px;height:30px;border:1px solid {{ ic.bd }};background:#0a0c0e;color:{{ ic.fg }};cursor:pointer;padding:0;font-family:'Material Symbols Sharp';font-size:17px;line-height:1;font-feature-settings:'liga'⟩
                          "{{ ic.icon }}"
                - button (onclick="{{ addCat }}")
                    ⟨border:0;background:#f2b33d;color:#0a0c0e;padding:9px 12px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                    "Toevoegen"
            ▸ ALS {{ catSel }}
              - div
                  ⟨display:flex;flex-wrap:wrap;gap:10px;align-items:end;padding:12px;border:1px solid #232a31;background:#0f1215⟩
                - label
                    ⟨display:flex;flex-direction:column;gap:5px;flex:1 1 180px⟩
                  - span
                      ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                      "Categorienaam"
                  - input (value="{{ selCat.name }}" onchange="{{ selCat.onName }}")
                      ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:14px⟩
                - label
                    ⟨display:flex;flex-direction:column;gap:5px;flex:0 1 140px⟩
                  - span
                      ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                      "Prefix"
                  - input (value="{{ selCat.prefix }}" onchange="{{ selCat.onPrefix }}")
                      ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font:500 13px 'JetBrains Mono',monospace⟩
                - label
                    ⟨display:flex;flex-direction:column;gap:5px;flex:0 1 110px⟩
                  - span
                      ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                      "Cijfers"
                  - select (value="{{ selCat.pad }}" data-v="{{ selCat.pad }}" onchange="{{ selCat.onPad }}")
                      ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px⟩
                    ▸ VOOR ELK o IN {{ padOpts }}
                      - option (value="{{ o.v }}")
                          "{{ o.label }}"
                - span
                    ⟨flex:1 1 200px;font-size:12px;color:#8a949e;padding-bottom:8px⟩
                    "{{ selCat.hint }}"
                - button (onclick="{{ selCat.onDelete }}")
                    ⟨border:1px solid #2c343c;background:transparent;color:{{ selCat.delFg }};padding:7px 10px;cursor:pointer;font-size:13px⟩
                    "{{ selCat.delLabel }}"
            - div
                ⟨display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px⟩
              ▸ VOOR ELK st IN {{ invStats }}
                - div
                    ⟨background:#12161a;border:1px solid #232a31;padding:10px 12px⟩
                  - div
                      ⟨font:600 24px 'JetBrains Mono',monospace;color:{{ st.col }}⟩
                      "{{ st.value }}"
                  - div
                      ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-top:2px⟩
                      "{{ st.label }}"
            - section
                ⟨border:1px solid #232a31;background:#12161a;padding:14px;display:flex;flex-direction:column;gap:12px⟩
              - div
                  ⟨display:flex;align-items:center;gap:12px;flex-wrap:wrap⟩
                - span
                    ⟨font:600 13px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase⟩
                    "Items toevoegen"
                - div
                    ⟨display:flex;gap:2px;background:#0a0c0e;border:1px solid #232a31;padding:3px⟩
                  ▸ VOOR ELK m IN {{ addModes }}
                    - button (onclick="{{ m.onClick }}")
                        ⟨border:0;background:{{ m.bg }};color:{{ m.fg }};padding:5px 12px;cursor:pointer;font-size:13px⟩
                        "{{ m.label }}"
              ▸ ALS {{ isReeks }}
                - div
                    ⟨display:grid;grid-template-columns:minmax(0,1.2fr) 110px 90px 90px minmax(0,1.6fr) auto;gap:8px;align-items:end⟩
                  - label
                      ⟨display:flex;flex-direction:column;gap:5px⟩
                    - span
                        ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                        "Categorie"
                    - select (value="{{ nr.cat }}" data-v="{{ nr.cat }}" onchange="{{ onNrCat }}")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px⟩
                      ▸ VOOR ELK o IN {{ catOpts }}
                        - option (value="{{ o.id }}")
                            "{{ o.name }}"
                  - label
                      ⟨display:flex;flex-direction:column;gap:5px⟩
                    - span
                        ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                        "Prefix"
                    - input (value="{{ nr.prefix }}" onchange="{{ onNrPrefix }}" placeholder="{{ nrPrefixPh }}")
                        ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font:500 13px 'JetBrains Mono',monospace⟩
                  - label
                      ⟨display:flex;flex-direction:column;gap:5px⟩
                    - span
                        ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                        "Van nr."
                    - input (value="{{ nr.from }}" onchange="{{ onNrFrom }}" placeholder="{{ nrFromPh }}" inputmode="numeric")
                        ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font:500 13px 'JetBrains Mono',monospace⟩
                  - label
                      ⟨display:flex;flex-direction:column;gap:5px⟩
                    - span
                        ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                        "Tot en met"
                    - input (value="{{ nr.to }}" onchange="{{ onNrTo }}" placeholder="{{ nrToPh }}" inputmode="numeric")
                        ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font:500 13px 'JetBrains Mono',monospace⟩
                  - label
                      ⟨display:flex;flex-direction:column;gap:5px⟩
                    - span
                        ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                        "Omschrijving"
                    - input (value="{{ nr.label }}" onchange="{{ onNrLabel }}" placeholder="bijv. Motorola DP4400e")
                        ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:14px⟩
                  - button (onclick="{{ addRange }}")
                      ⟨border:0;background:{{ rangeBtnBg }};color:#0a0c0e;padding:9px 12px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                      "Toevoegen"
                - div
                    ⟨font:500 12px 'JetBrains Mono',monospace;color:{{ rangePrevCol }}⟩
                    "{{ rangePreview }}"
              ▸ ALS {{ isEnkel }}
                - div
                    ⟨display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr) minmax(0,1.8fr) auto;gap:8px;align-items:end⟩
                  - label
                      ⟨display:flex;flex-direction:column;gap:5px⟩
                    - span
                        ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                        "Categorie"
                    - select (value="{{ one.cat }}" data-v="{{ one.cat }}" onchange="{{ onOneCat }}")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px⟩
                      ▸ VOOR ELK o IN {{ catOpts }}
                        - option (value="{{ o.id }}")
                            "{{ o.name }}"
                  - label
                      ⟨display:flex;flex-direction:column;gap:5px⟩
                    - span
                        ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                        "Eigen nummer / code"
                    - input (value="{{ one.code }}" onchange="{{ onOneCode }}" onkeydown="{{ onOneKey }}" placeholder="{{ oneCodePh }}")
                        ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font:500 13px 'JetBrains Mono',monospace⟩
                  - label
                      ⟨display:flex;flex-direction:column;gap:5px⟩
                    - span
                        ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                        "Omschrijving"
                    - input (value="{{ one.label }}" onchange="{{ onOneLabel }}" onkeydown="{{ onOneKey }}" placeholder="optioneel")
                        ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:14px⟩
                  - button (onclick="{{ addOne }}")
                      ⟨border:0;background:#f2b33d;color:#0a0c0e;padding:9px 12px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                      "Toevoegen"
              ▸ ALS {{ hasInvErr }}
                - div
                    ⟨font-size:13px;color:#ff5f57⟩
                    "{{ invErr }}"
              ▸ ALS {{ hasInvMsg }}
                - div
                    ⟨font-size:13px;color:#4fd18b⟩
                    "{{ invMsg }}"
            - section
                ⟨border:1px solid #232a31;background:#12161a⟩
              - div
                  ⟨display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding:10px 14px;border-bottom:1px solid #232a31⟩
                - div
                    ⟨display:flex;align-items:center;gap:6px;flex:1 1 240px;background:#0a0c0e;border:1px solid #2c343c;padding:0 8px⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga';color:#8a949e⟩
                      "search"
                  - input (value="{{ q }}" onchange="{{ onQ }}" placeholder="Zoek op nummer, omschrijving of opmerking")
                      ⟨flex:1;min-width:0;border:0;background:transparent;color:#e6e9ec;padding:8px 0;font-size:14px;outline:none⟩
                - div
                    ⟨display:flex;flex-wrap:wrap;gap:2px;background:#0a0c0e;border:1px solid #232a31;padding:3px⟩
                  ▸ VOOR ELK f IN {{ stFilters }}
                    - button (onclick="{{ f.onClick }}")
                        ⟨border:0;background:{{ f.bg }};color:{{ f.fg }};padding:5px 9px;cursor:pointer;font-size:12px⟩
                        "{{ f.label }}"
                - span
                    ⟨font:500 12px 'JetBrains Mono',monospace;color:#8a949e⟩
                    "{{ invCount }}"
              - div
                  ⟨display:grid;grid-template-columns:24px 140px minmax(0,1.3fr) 140px minmax(0,1.3fr) 36px;gap:8px;padding:8px 14px;border-bottom:1px solid #232a31;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                - span
                - span
                    "Nummer"
                - span
                    "Omschrijving"
                - span
                    "Status"
                - span
                    "Opmerking"
                - span
              ▸ ALS {{ noInv }}
                - div
                    ⟨padding:16px 14px;font-size:13px;color:#8a949e⟩
                    "Geen items gevonden."
              ▸ VOOR ELK i IN {{ invRows }}
                - div
                    ⟨display:grid;grid-template-columns:24px 140px minmax(0,1.3fr) 140px minmax(0,1.3fr) 36px;gap:8px;align-items:center;padding:5px 14px;border-bottom:1px solid #1b2127⟩
                  - span (title="{{ i.catName }}")
                      ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga';color:#8a949e⟩
                      "{{ i.icon }}"
                  - input (value="{{ i.code }}" onchange="{{ i.onCode }}" title="{{ i.codeTitle }}")
                      ⟨width:100%;background:#0a0c0e;border:1px solid {{ i.codeBd }};color:#e6e9ec;padding:6px 8px;font:600 13px 'JetBrains Mono',monospace⟩
                  - input (value="{{ i.label }}" onchange="{{ i.onLabel }}")
                      ⟨width:100%;background:transparent;border:1px solid #232a31;color:#c3cad1;padding:6px 8px;font-size:13px⟩
                  - select (value="{{ i.status }}" data-v="{{ i.status }}" onchange="{{ i.onStatus }}")
                      ⟨background:#0a0c0e;border:1px solid #2c343c;color:{{ i.stCol }};padding:6px 8px;font-size:13px⟩
                    ▸ VOOR ELK o IN {{ statusOpts }}
                      - option (value="{{ o }}")
                          "{{ o }}"
                  - input (value="{{ i.note }}" onchange="{{ i.onNote }}" placeholder="—")
                      ⟨width:100%;background:transparent;border:1px solid #232a31;color:#c3cad1;padding:6px 8px;font-size:13px⟩
                  - button (onclick="{{ i.onDel }}" title="Verwijderen")
                      ⟨border:0;background:transparent;color:#6b757f;cursor:pointer;padding:4px⟩
                    - span
                        ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                        "delete"
        ▸ ALS {{ isPlans }}
          - div
              ⟨display:flex;flex-direction:column;gap:16px⟩
            - div
                ⟨display:flex;flex-wrap:wrap;gap:16px;align-items:flex-end;justify-content:space-between⟩
              - div
                - h1
                    ⟨margin:0;font:700 28px 'Barlow Condensed',sans-serif;letter-spacing:.04em;text-transform:uppercase⟩
                    "Plattegronden & posities"
                - div
                    ⟨font-size:14px;color:#8a949e;margin-top:4px;text-wrap:pretty⟩
                    "Per opdrachtgever of project. Voeg per verdieping een plattegrond toe en zet daar de posities op."
              - label
                  ⟨display:flex;flex-direction:column;gap:5px;min-width:280px⟩
                - span
                    ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                    "Opdrachtgever / project"
                - select (value="{{ owner }}" data-v="{{ owner }}" onchange="{{ onOwner }}")
                    ⟨background:#0a0c0e;border:1px solid #f2b33d;color:#e6e9ec;padding:8px 10px;font-size:14px⟩
                  ▸ VOOR ELK o IN {{ ownerOpts }}
                    - option (value="{{ o.id }}")
                        "{{ o.label }}"
            - div
                ⟨display:flex;flex-wrap:wrap;gap:2px;align-items:stretch;border-bottom:1px solid #232a31⟩
              ▸ VOOR ELK t IN {{ planTabs }}
                - button (onclick="{{ t.onClick }}")
                    ⟨display:flex;align-items:center;gap:8px;border:1px solid #232a31;border-bottom:2px solid {{ t.bd }};background:{{ t.bg }};color:{{ t.fg }};padding:9px 14px;cursor:pointer;font-size:14px⟩
                  - span
                      ⟨font:600 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                      "{{ t.nr }}"
                  "{{ t.name }}"
                  - span
                      ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                      "{{ t.n }}"
              - label
                  ⟨display:flex;align-items:center;gap:6px;border:1px dashed #f2b33d;color:#f2b33d;padding:8px 14px;cursor:pointer;font-size:14px;margin-left:4px⟩
                - input (type="file" accept="image/*" onchange="{{ onUpload }}")
                    ⟨display:none⟩
                - span
                    ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                    "upload"
                "Plattegrond toevoegen"
            ▸ ALS {{ hasPlanErr }}
              - div
                  ⟨font-size:13px;color:#ff5f57⟩
                  "{{ planErr }}"
            - div
                ⟨display:flex;flex-wrap:wrap;gap:16px;align-items:flex-start⟩
              - div
                  ⟨flex:1 1 560px;min-width:0;display:flex;flex-direction:column;gap:10px⟩
                ▸ ALS {{ noPlans }}
                  - div
                      ⟨border:1px dashed #2c343c;padding:48px 24px;text-align:center;color:#8a949e;font-size:14px;text-wrap:pretty⟩
                      "Nog geen plattegrond voor {{ ownerName }}. Voeg er een toe als PNG of JPG; bij meerdere verdiepingen voeg je er meerdere toe. Posities kun je ook zonder plattegrond aanmaken."
                ▸ ALS {{ hasPlan }}
                  - div
                      ⟨display:flex;flex-direction:column;gap:10px⟩
                    - div
                        ⟨display:flex;flex-wrap:wrap;gap:6px;align-items:center⟩
                      - input (value="{{ cur.name }}" onchange="{{ onPlanName }}")
                          ⟨flex:1 1 200px;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 9px;font-size:14px⟩
                      - button (onclick="{{ planUp }}" title="Eerder in volgorde")
                          ⟨border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;padding:6px;cursor:pointer⟩
                        - span
                            ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                            "arrow_back"
                      - button (onclick="{{ planDown }}" title="Later in volgorde")
                          ⟨border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;padding:6px;cursor:pointer⟩
                        - span
                            ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                            "arrow_forward"
                      - button (onclick="{{ togglePlace }}")
                          ⟨display:flex;align-items:center;gap:6px;border:1px solid {{ placeBd }};background:{{ placeBg }};color:{{ placeFg }};padding:7px 12px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                        - span
                            ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                            "add_location_alt"
                        "{{ placeLabel }}"
                      - button (onclick="{{ onDelPlan }}")
                          ⟨border:1px solid #2c343c;background:transparent;color:{{ delPlanFg }};padding:7px 10px;cursor:pointer;font-size:13px⟩
                          "{{ delPlanLabel }}"
                    ▸ ALS {{ placing }}
                      - div
                          ⟨font-size:13px;color:#f2b33d⟩
                          "{{ placeHint }}"
                    - div (ref="{{ planRef }}" onclick="{{ onPlanClick }}")
                        ⟨position:relative;border:1px solid #232a31;background:#0c1014;cursor:{{ planCursor }};user-select:none;touch-action:none⟩
                      ▸ ALS {{ hasSrc }}
                        - img (ref="{{ imgRef }}" alt="{{ cur.name }}" draggable="false")
                            ⟨display:block;width:100%;height:auto;pointer-events:none⟩
                      ▸ VOOR ELK m IN {{ markers }}
                        - div (onpointerdown="{{ m.onDown }}" onclick="{{ m.onClick }}" title="Sleep om te verplaatsen")
                            ⟨position:absolute;left:{{ m.left }};top:{{ m.top }};transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:3px;cursor:grab;z-index:{{ m.z }}⟩
                          - div
                              ⟨width:30px;height:30px;border-radius:50%;background:{{ m.col }};color:#0a0c0e;display:flex;align-items:center;justify-content:center;box-shadow:{{ m.ring }}⟩
                            - span
                                ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                                "{{ m.icon }}"
                          - div
                              ⟨background:rgba(10,12,14,.9);border:1px solid {{ m.lblBd }};padding:2px 6px;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase;white-space:nowrap;color:#e6e9ec⟩
                              "{{ m.name }}"
                      ▸ ALS {{ hasPending }}
                        - div
                            ⟨position:absolute;left:{{ pendLeft }};top:{{ pendTop }};transform:translate(-50%,-50%);width:30px;height:30px;border-radius:50%;border:2px dashed #f2b33d;background:rgba(242,179,61,.2)⟩
              - aside
                  ⟨flex:1 1 300px;max-width:420px;min-width:0;display:flex;flex-direction:column;gap:12px⟩
                ▸ ALS {{ hasPending }}
                  - div
                      ⟨border:1px solid #f2b33d;background:#12161a;padding:12px;display:flex;flex-direction:column;gap:8px⟩
                    - div
                        ⟨font:600 13px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#f2b33d⟩
                        "Nieuwe positie op deze plek"
                    - input (value="{{ newPos.name }}" onchange="{{ onNpName }}" onkeydown="{{ onNpKey }}" placeholder="Naam, bijv. Deur 2 · zij-ingang")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 9px;font-size:14px⟩
                    - div
                        ⟨display:flex;flex-wrap:wrap;gap:4px⟩
                      ▸ VOOR ELK t IN {{ npTypes }}
                        - button (onclick="{{ t.onClick }}")
                            ⟨display:flex;align-items:center;gap:5px;border:1px solid {{ t.bd }};background:{{ t.bg }};color:{{ t.fg }};padding:5px 8px;cursor:pointer;font-size:12px⟩
                          - span
                              ⟨font-family:'Material Symbols Sharp';font-size:15px;line-height:1;font-feature-settings:'liga';color:{{ t.col }}⟩
                              "{{ t.icon }}"
                          "{{ t.name }}"
                    - div
                        ⟨display:flex;gap:6px⟩
                      - button (onclick="{{ createPos }}")
                          ⟨flex:1;border:0;background:#f2b33d;color:#0a0c0e;padding:8px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                          "Positie plaatsen"
                      - button (onclick="{{ cancelPending }}")
                          ⟨border:1px solid #2c343c;background:transparent;color:#e6e9ec;padding:7px 10px;cursor:pointer;font-size:13px⟩
                          "Annuleren"
                    ▸ ALS {{ hasUnplaced }}
                      - select (value="" onchange="{{ placeExisting }}")
                          ⟨background:#0a0c0e;border:1px dashed #2c343c;color:#c3cad1;padding:7px 8px;font-size:13px⟩
                        - option (value="")
                            "…of een bestaande positie hier plaatsen"
                        ▸ VOOR ELK o IN {{ unplacedOpts }}
                          - option (value="{{ o.id }}")
                              "{{ o.name }}"
                ▸ ALS {{ hasSel }}
                  - div
                      ⟨border:1px solid #232a31;background:#12161a;padding:12px;display:flex;flex-direction:column;gap:10px⟩
                    - div
                        ⟨display:flex;align-items:center;gap:8px⟩
                      - span
                          ⟨width:26px;height:26px;border-radius:50%;background:{{ sel.col }};color:#0a0c0e;display:flex;align-items:center;justify-content:center;font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga'⟩
                          "{{ sel.icon }}"
                      - span
                          ⟨flex:1;font:500 12px 'JetBrains Mono',monospace;color:#8a949e⟩
                          "{{ sel.where }}"
                      - button (onclick="{{ sel.onClose }}")
                          ⟨border:0;background:transparent;color:#8a949e;cursor:pointer;padding:2px⟩
                        - span
                            ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                            "close"
                    - input (value="{{ sel.name }}" onchange="{{ sel.onName }}")
                        ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 9px;font-size:15px;font-weight:600⟩
                    - div
                        ⟨display:flex;flex-wrap:wrap;gap:4px⟩
                      ▸ VOOR ELK t IN {{ sel.types }}
                        - button (onclick="{{ t.onClick }}")
                            ⟨display:flex;align-items:center;gap:5px;border:1px solid {{ t.bd }};background:{{ t.bg }};color:{{ t.fg }};padding:5px 8px;cursor:pointer;font-size:12px⟩
                          - span
                              ⟨font-family:'Material Symbols Sharp';font-size:15px;line-height:1;font-feature-settings:'liga';color:{{ t.col }}⟩
                              "{{ t.icon }}"
                          "{{ t.name }}"
                    - div
                      - div
                          ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:6px⟩
                          "Bezetting"
                      - div
                          ⟨display:flex;flex-direction:column;gap:4px⟩
                        ▸ ALS {{ sel.noStaff }}
                          - div
                              ⟨font-size:13px;color:#8a949e⟩
                              "Nog niemand ingedeeld."
                        ▸ VOOR ELK p IN {{ sel.staff }}
                          - div
                              ⟨display:flex;align-items:center;gap:8px;padding:6px 8px;border:1px solid #232a31;font-size:13px⟩
                            - span
                                ⟨font:600 10px 'JetBrains Mono',monospace;color:{{ p.col }};min-width:34px⟩
                                "{{ p.code }}"
                            - span
                                ⟨flex:1⟩
                                "{{ p.name }}"
                            - button (onclick="{{ p.onRemove }}")
                                ⟨border:0;background:transparent;color:#8a949e;cursor:pointer;padding:0⟩
                              - span
                                  ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga'⟩
                                  "close"
                      - select (value="" onchange="{{ sel.onAddStaff }}")
                          ⟨margin-top:6px;width:100%;background:#0a0c0e;border:1px dashed #f2b33d;color:#f2b33d;padding:7px 8px;font-size:13px⟩
                        - option (value="")
                            "+ Medewerker indelen…"
                        ▸ VOOR ELK o IN {{ sel.staffOpts }}
                          - option (value="{{ o.id }}")
                              "{{ o.label }}"
                    - div
                        ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                      ▸ ALS {{ sel.canPlace }}
                        - button (onclick="{{ sel.onPlace }}")
                            ⟨border:1px solid #f2b33d;background:transparent;color:#f2b33d;padding:6px 10px;cursor:pointer;font-size:13px⟩
                            "Op deze plattegrond zetten"
                      ▸ ALS {{ sel.placed }}
                        - button (onclick="{{ sel.onUnplace }}")
                            ⟨border:1px solid #2c343c;background:transparent;color:#e6e9ec;padding:6px 10px;cursor:pointer;font-size:13px⟩
                            "Van plattegrond halen"
                      - button (onclick="{{ sel.onDelete }}")
                          ⟨border:1px solid #2c343c;background:transparent;color:{{ sel.delFg }};padding:6px 10px;cursor:pointer;font-size:13px⟩
                          "{{ sel.delLabel }}"
                - div
                    ⟨border:1px solid #232a31;background:#12161a⟩
                  - div
                      ⟨display:flex;justify-content:space-between;padding:10px 12px;border-bottom:1px solid #232a31;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                    - span
                        "Posities · {{ ownerName }}"
                    - span
                        ⟨font-family:'JetBrains Mono',monospace⟩
                        "{{ posCount }}"
                  ▸ VOOR ELK p IN {{ posRows }}
                    - button (onclick="{{ p.onClick }}")
                        ⟨display:flex;align-items:center;gap:10px;width:100%;border:0;border-bottom:1px solid #1b2127;border-left:2px solid {{ p.bd }};background:{{ p.bg }};color:#e6e9ec;padding:8px 12px;cursor:pointer;text-align:left⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga';color:{{ p.col }}⟩
                          "{{ p.icon }}"
                      - span
                          ⟨flex:1;min-width:0⟩
                        - span
                            ⟨display:block;font-size:14px⟩
                            "{{ p.name }}"
                        - span
                            ⟨display:block;font-size:12px;color:{{ p.subCol }}⟩
                            "{{ p.sub }}"
                      - span
                          ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                          "{{ p.staffN }}"
                  - div
                      ⟨display:flex;gap:6px;padding:10px 12px⟩
                    - input (value="{{ looseName }}" onchange="{{ onLoose }}" onkeydown="{{ onLooseKey }}" placeholder="Positie zonder plattegrond")
                        ⟨flex:1;min-width:0;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px⟩
                    - button (onclick="{{ addLoose }}")
                        ⟨border:1px solid #f2b33d;background:transparent;color:#f2b33d;padding:6px 10px;cursor:pointer;font-size:13px⟩
                        "+ Toevoegen"
```
