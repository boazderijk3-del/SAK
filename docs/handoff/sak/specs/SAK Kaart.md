# Pixelspec · SAK Kaart

Gegenereerd uit `prototype/SAK Kaart.dc.html`. Volledige elementboom met **exacte inline-stijlen** en teksten; normatief. `{{ … }}` = dynamische waarde uit de logica onderaan het prototype. `▸ ALS` = alleen zichtbaar als de waarde waar is; `▸ VOOR ELK` = herhaald per item.

```
- div (data-root="1")
    ⟨width:100vw;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:#050607⟩
  ▸ ALS {{ showSwitcher }}
    - div (data-sak-app="1")
        ⟨display:flex;align-items:center;gap:18px;flex-wrap:wrap;justify-content:center⟩
      - div
          ⟨font:700 16px 'Barlow Condensed',sans-serif;letter-spacing:.14em;color:#e6e9ec⟩
        "SAK"
        - span
            ⟨color:#8a949e;font-weight:500⟩
            "· KAARTINTERFACE"
      - div
          ⟨display:flex;gap:2px;background:#0f1215;border:1px solid #232a31;padding:3px;border-radius:8px⟩
        ▸ VOOR ELK o IN {{ variants }}
          - button (onclick="{{ o.onClick }}")
              ⟨border:0;border-radius:6px;padding:6px 12px;cursor:pointer;font:600 13px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase;background:{{ o.bg }};color:{{ o.fg }}⟩
              "{{ o.label }}"
      - div
          ⟨display:flex;gap:2px;background:#0f1215;border:1px solid #232a31;padding:3px;border-radius:8px⟩
        ▸ VOOR ELK o IN {{ devices }}
          - button (onclick="{{ o.onClick }}")
              ⟨border:0;border-radius:6px;padding:6px 12px;cursor:pointer;font:600 13px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase;background:{{ o.bg }};color:{{ o.fg }}⟩
              "{{ o.label }}"
  - div (data-sak-app="1")
      ⟨{{ outerStyle }}⟩
    - div
        ⟨{{ deviceStyle }}⟩
      - div (ref="{{ mapRef }}")
          ⟨position:absolute;inset:0;z-index:0⟩
      - div
          ⟨{{ topStyle }}⟩
        - div
            ⟨display:flex;align-items:baseline;gap:10px⟩
          - div
              ⟨font:700 20px 'Barlow Condensed',sans-serif;letter-spacing:.12em;color:#f2b33d⟩
              "SAK"
          ▸ ALS {{ showAsRole }}
            - div
                ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.16em;color:#8a949e;white-space:nowrap⟩
                "SECURITY AWARENESS KIT"
        - div
            ⟨width:1px;height:22px;background:#232a31⟩
        - div
            ⟨display:flex;align-items:center;gap:8px⟩
          - select (value="{{ as }}" onchange="{{ onAs }}" title="Bekijk als")
              ⟨background:#12161a;border:1px solid #2c343c;color:#5cc8ff;padding:4px 6px;font:600 12px 'JetBrains Mono',monospace;max-width:{{ asMax }}px⟩
            ▸ VOOR ELK o IN {{ asOptions }}
              - option (value="{{ o.id }}")
                  "{{ o.label }}"
          ▸ ALS {{ showAsRole }}
            - span
                ⟨font-size:13px;color:#8a949e;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:230px⟩
                "{{ asRole }}"
        ▸ ALS {{ showViewBtns }}
          - div
              ⟨display:flex;gap:2px;background:#0f1215;border:1px solid #232a31;padding:2px⟩
            ▸ VOOR ELK o IN {{ viewBtns }}
              - button (onclick="{{ o.onClick }}" title="{{ o.label }}")
                  ⟨display:flex;align-items:center;gap:5px;border:0;padding:4px 8px;cursor:pointer;background:{{ o.bg }};color:{{ o.fg }};font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                - span
                    ⟨font-family:'Material Symbols Sharp';font-size:17px;line-height:1;font-feature-settings:'liga'⟩
                    "{{ o.icon }}"
                ▸ ALS {{ showViewLabels }}
                  - span
                      "{{ o.label }}"
        ▸ ALS {{ showProjSel }}
          - select (value="{{ proj }}" onchange="{{ onProj }}" title="Project")
              ⟨flex:0 1 auto;min-width:0;max-width:210px;background:#12161a;border:1px solid {{ projBd }};color:{{ projFg }};padding:4px 6px;font:600 13px 'Barlow Condensed',sans-serif;letter-spacing:.04em⟩
            ▸ VOOR ELK o IN {{ projOpts }}
              - option (value="{{ o.id }}")
                  "{{ o.label }}"
        - div
            ⟨flex:1⟩
        ▸ ALS {{ showAlert }}
          - button (onclick="{{ alert.onClick }}")
              ⟨display:flex;align-items:center;gap:8px;white-space:nowrap;min-width:0;max-width:300px;flex:0 1 auto;overflow:hidden;border:1px solid {{ alert.col }};background:{{ alert.bg }};color:{{ alert.col }};padding:4px 10px;cursor:pointer;font:600 12px 'JetBrains Mono',monospace⟩
            - span
                ⟨width:7px;height:7px;border-radius:50%;background:{{ alert.col }}⟩
            "{{ alert.label }} · {{ alert.id }}"
            - span
                ⟨font-family:Barlow,sans-serif;font-weight:500;color:#e6e9ec;overflow:hidden;text-overflow:ellipsis;flex:1 1 auto;min-width:0⟩
                "{{ alert.title }}"
        ▸ ALS {{ showGps }}
          - div
              ⟨display:flex;align-items:center;gap:6px;flex:none;white-space:nowrap;font:500 11px 'JetBrains Mono',monospace;color:#c3cad1⟩
            - span
                ⟨width:7px;height:7px;border-radius:50%;background:#4fd18b⟩
            "GPS"
            ▸ ALS {{ notPhone }}
              - span
                  ⟨color:#8a949e⟩
                  "3D ±4 m"
        ▸ ALS {{ showMesh }}
          - div
              ⟨font:500 11px 'JetBrains Mono',monospace;color:#c3cad1;white-space:nowrap;flex:none⟩
            "MESH"
            - span
                ⟨color:#4fd18b⟩
                "{{ onlineCount }}"
        - div (ref="{{ clockRef }}")
            ⟨font:600 13px 'JetBrains Mono',monospace;color:#e6e9ec;min-width:64px;text-align:right⟩
            "--:--:--"
      - div
          ⟨{{ railStyle }}⟩
      - div
          ⟨{{ ptoolsStyle }}⟩
        ▸ VOOR ELK t IN {{ ptools }}
          - button (onclick="{{ t.onClick }}" title="{{ t.label }}")
              ⟨position:relative;width:{{ t.w }}px;height:52px;flex:none;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;border:0;border-radius:8px;cursor:pointer;padding:0;background:{{ t.bg }};color:{{ t.fg }}⟩
            - span
                ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga'⟩
                "{{ t.icon }}"
            - span
                ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                "{{ t.label }}"
            ▸ ALS {{ t.hasBadge }}
              - span
                  ⟨position:absolute;top:4px;right:6px;min-width:16px;height:16px;padding:0 4px;border-radius:8px;background:{{ t.badgeBg }};color:#0a0c0e;font:700 10px 'JetBrains Mono',monospace;display:flex;align-items:center;justify-content:center⟩
                  "{{ t.badge }}"
        ▸ ALS {{ isDispatch }}
          - a (href="SAK Meldkamer.dc.html" title="Incidenten, sancties, BOLO, publieksmeldingen")
              ⟨width:60px;height:52px;flex:none;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;border-radius:8px;text-decoration:none;color:#c3cad1⟩
            - span
                ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga'⟩
                "folder_open"
            - span
                ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                "Registr."
          - a (href="SAK Beheer.dc.html" title="Beheer: rollen, inventaris, plattegronden")
              ⟨width:60px;height:52px;flex:none;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;border-radius:8px;text-decoration:none;color:#c3cad1⟩
            - span
                ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga'⟩
                "settings"
            - span
                ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                "Beheer"
      - div
          ⟨{{ mtoolsStyle }}⟩
        ▸ VOOR ELK t IN {{ mtools }}
          - button (onclick="{{ t.onClick }}" title="{{ t.label }}")
              ⟨width:{{ t.w }}px;height:52px;flex:none;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;border:0;border-radius:8px;cursor:pointer;padding:0;background:{{ t.bg }};color:{{ t.fg }}⟩
            - span
                ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga'⟩
                "{{ t.icon }}"
            - span
                ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                "{{ t.label }}"
      ▸ ALS {{ hasTool }}
        - div
            ⟨{{ hintStyle }}⟩
          - div
              ⟨pointer-events:auto;display:flex;flex-direction:column;gap:8px;background:rgba(13,16,19,.96);border:1px solid #f2b33d;padding:10px 12px;box-shadow:0 10px 30px rgba(0,0,0,.5);max-width:92%⟩
            - div
                ⟨display:flex;align-items:center;gap:14px;flex-wrap:wrap⟩
              - div
                - div
                    ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#f2b33d⟩
                    "{{ hint.title }}"
                - div
                    ⟨font:600 14px 'JetBrains Mono',monospace;color:#e6e9ec;margin-top:2px⟩
                    "{{ hint.readout }}"
              - div
                  ⟨display:flex;gap:6px⟩
                ▸ VOOR ELK b IN {{ hint.btns }}
                  - button (onclick="{{ b.onClick }}")
                      ⟨border:1px solid {{ b.bd }};background:{{ b.bg }};color:{{ b.fg }};padding:6px 12px;cursor:pointer;font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                      "{{ b.label }}"
            ▸ ALS {{ hint.isMarker }}
              - div
                  ⟨display:flex;gap:4px;flex-wrap:wrap⟩
                ▸ VOOR ELK m IN {{ markerTypes }}
                  - button (onclick="{{ m.onClick }}")
                      ⟨display:flex;align-items:center;gap:7px;padding:5px 9px;cursor:pointer;background:{{ m.bg }};border:1px solid {{ m.bd }};color:#e6e9ec;font-size:12px⟩
                    - span
                        ⟨width:12px;height:12px;border:2px solid {{ m.col }};border-radius:{{ m.radius }};transform:rotate({{ m.rot }})⟩
                    "{{ m.label }}"
      ▸ ALS {{ hasEditOverlay }}
        - div
            ⟨{{ hintStyle }}⟩
          - div
              ⟨pointer-events:auto;display:flex;align-items:center;gap:14px;background:rgba(13,16,19,.96);border:1px solid #5cc8ff;padding:10px 12px;box-shadow:0 10px 30px rgba(0,0,0,.5)⟩
            - div
              - div
                  ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#5cc8ff⟩
                  "Plattegrond uitlijnen"
              - div
                  ⟨font-size:13px;color:#c3cad1;margin-top:2px⟩
                  "Sleep de hoekpunten of het midden naar de juiste plek"
            - button (onclick="{{ stopEditOverlay }}")
                ⟨border:1px solid #5cc8ff;background:#5cc8ff;color:#0a0c0e;padding:6px 12px;cursor:pointer;font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                "Klaar"
      ▸ ALS {{ hasSel }}
        - div
            ⟨{{ cardStyle }}⟩
          - div
              ⟨display:flex;align-items:flex-start;justify-content:space-between;gap:10px⟩
            - div
                ⟨display:flex;gap:12px;align-items:center⟩
              - div
                  ⟨width:34px;height:24px;border:2px solid #5cc8ff;background:rgba(10,30,44,.9);display:flex;align-items:center;justify-content:center;font:600 10px 'JetBrains Mono',monospace;color:#5cc8ff⟩
                  "{{ sel.code }}"
              - div
                - div
                    ⟨font:700 16px 'JetBrains Mono',monospace;color:#e6e9ec⟩
                    "{{ sel.id }}"
                - div
                    ⟨font-size:13px;color:#8a949e⟩
                    "{{ sel.name }}"
            - button (onclick="{{ closeSel }}")
                ⟨border:0;background:transparent;color:#8a949e;cursor:pointer;padding:2px⟩
              - span
                  ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga'⟩
                  "close"
          - div
              ⟨display:grid;grid-template-columns:1fr 1fr;gap:10px 14px;margin-top:14px⟩
            ▸ VOOR ELK f IN {{ sel.fields }}
              - div
                - div
                    ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                    "{{ f.k }}"
                - div
                    ⟨font:500 13px 'JetBrains Mono',monospace;color:#e6e9ec;margin-top:2px⟩
                    "{{ f.v }}"
          - div
              ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e;margin-top:12px;padding-top:10px;border-top:1px solid #232a31⟩
              "{{ sel.pos }}"
          - div
              ⟨display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:12px⟩
            ▸ VOOR ELK a IN {{ sel.actions }}
              - button (onclick="{{ a.onClick }}" style-hover="border-color:#f2b33d")
                  ⟨display:flex;flex-direction:column;align-items:center;gap:3px;padding:8px 4px;border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;cursor:pointer;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                - span
                    ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga';color:#f2b33d⟩
                    "{{ a.icon }}"
                "{{ a.label }}"
      - div
          ⟨{{ ctrlStyle }}⟩
        ▸ VOOR ELK c IN {{ ctrls }}
          - button (onclick="{{ c.onClick }}" title="{{ c.label }}" style-hover="color:#f2b33d")
              ⟨width:40px;height:40px;display:flex;align-items:center;justify-content:center;border:1px solid #232a31;background:rgba(13,16,19,.95);color:#e6e9ec;cursor:pointer;padding:0⟩
            - span
                ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga'⟩
                "{{ c.icon }}"
      - div
          ⟨{{ coordStyle }}⟩
        - span (ref="{{ cursorRef }}")
            "52.17000° N 4.75000° E"
        - span
            ⟨color:#5b646d⟩
            "|"
        - span (ref="{{ zoomRef }}")
            "Z10"
      ▸ ALS {{ panelOpen }}
        - div
            ⟨{{ panelStyle }}⟩
          - div
              ⟨display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 16px 12px;border-bottom:1px solid #232a31;flex:none⟩
            - div
              - div
                  ⟨font:600 17px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#e6e9ec⟩
                  "{{ panelTitle }}"
              - div
                  ⟨font-size:12px;color:#8a949e;margin-top:1px⟩
                  "{{ panelSub }}"
            ▸ ALS {{ canClose }}
              - button (onclick="{{ closePanel }}")
                  ⟨border:0;background:transparent;color:#8a949e;cursor:pointer;padding:4px⟩
                - span
                    ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga'⟩
                    "close"
          - div (ref="{{ bodyRef }}")
              ⟨flex:1;min-height:0;overflow-y:auto;padding:14px 16px 18px⟩
            ▸ ALS {{ isProject }}
              - div
                  ⟨display:flex;flex-direction:column;gap:14px⟩
                - div
                    ⟨display:flex;gap:2px;background:#0f1215;border:1px solid #232a31;padding:3px⟩
                  ▸ VOOR ELK f IN {{ projTabs }}
                    - button (onclick="{{ f.onClick }}")
                        ⟨flex:1;border:0;padding:7px 4px;cursor:pointer;font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;background:{{ f.bg }};color:{{ f.fg }}⟩
                        "{{ f.label }}"
                ▸ ALS {{ isPjList }}
                  - div
                      ⟨display:flex;flex-direction:column;gap:14px⟩
                    ▸ ALS {{ hasProjFilter }}
                      - div
                          ⟨display:flex;align-items:center;gap:8px;padding:8px 10px;border:1px solid #f2b33d;background:rgba(242,179,61,.06)⟩
                        - span
                            ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga';color:#f2b33d⟩
                            "filter_alt"
                        - span
                            ⟨flex:1;min-width:0;font-size:13px;color:#e6e9ec⟩
                          "Kaart, meldingen en taken tonen alleen"
                          - strong
                              "{{ projLabel }}"
                        - button (onclick="{{ clearProj }}")
                            ⟨border:1px solid #3a434c;background:transparent;color:#e6e9ec;padding:8px 12px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                            "Alle"
                    - div
                        ⟨display:grid;grid-template-columns:1fr 1fr;gap:6px⟩
                      - button (onclick="{{ openClientForm }}")
                          ⟨display:flex;align-items:center;justify-content:center;gap:6px;border:1px dashed #f2b33d;background:rgba(242,179,61,.06);color:#f2b33d;padding:9px;cursor:pointer;font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                        - span
                            ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                            "domain_add"
                        "Opdrachtgever"
                      - button (onclick="{{ openProjForm }}")
                          ⟨display:flex;align-items:center;justify-content:center;gap:6px;border:1px dashed #f2b33d;background:rgba(242,179,61,.06);color:#f2b33d;padding:9px;cursor:pointer;font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                        - span
                            ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                            "add_box"
                        "Project"
                    ▸ ALS {{ showClientForm }}
                      - div
                          ⟨display:flex;flex-direction:column;gap:8px;padding:12px;background:#12161a;border:1px solid #f2b33d⟩
                        - div
                            ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;color:#f2b33d⟩
                            "Nieuwe opdrachtgever"
                        - input (value="{{ newClient.name }}" onchange="{{ onNcName }}" placeholder="Naam organisatie")
                            ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;outline:none⟩
                        - div
                            ⟨display:grid;grid-template-columns:1fr 1fr;gap:6px⟩
                          - input (value="{{ newClient.contact }}" onchange="{{ onNcContact }}" placeholder="Contactpersoon")
                              ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;outline:none⟩
                          - input (value="{{ newClient.phone }}" onchange="{{ onNcPhone }}" placeholder="Telefoon")
                              ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;outline:none⟩
                        - div
                            ⟨display:flex;gap:6px;justify-content:flex-end⟩
                          - button (onclick="{{ cancelProjForm }}")
                              ⟨border:1px solid #3a434c;background:transparent;color:#e6e9ec;padding:8px 12px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                              "Annuleren"
                          - button (onclick="{{ createClient }}")
                              ⟨border:0;background:#f2b33d;color:#0a0c0e;padding:8px 12px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                              "Aanmaken"
                    ▸ ALS {{ showProjForm }}
                      - div
                          ⟨display:flex;flex-direction:column;gap:8px;padding:12px;background:#12161a;border:1px solid #f2b33d⟩
                        - div
                            ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;color:#f2b33d⟩
                            "Nieuw project"
                        - input (value="{{ newProj.name }}" onchange="{{ onNpName }}" placeholder="Naam, bijv. Zomerfestival Haagse Bos")
                            ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;outline:none⟩
                        - div
                            ⟨display:grid;grid-template-columns:1fr 1fr;gap:6px⟩
                          - select (value="{{ newProj.type }}" onchange="{{ onNpType }}")
                              ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px;min-width:0⟩
                            ▸ VOOR ELK o IN {{ projTypes }}
                              - option (value="{{ o }}")
                                  "{{ o }}"
                          - select (value="{{ newProj.client }}" onchange="{{ onNpClient }}")
                              ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px;min-width:0⟩
                            ▸ VOOR ELK o IN {{ clientOpts }}
                              - option (value="{{ o.id }}")
                                  "{{ o.label }}"
                        - div
                            ⟨display:grid;grid-template-columns:1fr 1fr;gap:6px⟩
                          - label
                              ⟨display:flex;flex-direction:column;gap:3px;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;font-size:10px⟩
                            "Start"
                            - input (type="datetime-local" value="{{ newProj.start }}" onchange="{{ onNpStart }}")
                                ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px;min-width:0;color-scheme:dark⟩
                          - label
                              ⟨display:flex;flex-direction:column;gap:3px;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;font-size:10px⟩
                            "Einde"
                            - input (type="datetime-local" value="{{ newProj.end }}" onchange="{{ onNpEnd }}")
                                ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px;min-width:0;color-scheme:dark⟩
                        - input (value="{{ newProj.loc }}" onchange="{{ onNpLoc }}" placeholder="Locatie, bijv. Malieveld Den Haag")
                            ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;outline:none⟩
                        - div
                          - div
                              ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;font-size:10px;margin-bottom:5px⟩
                              "Teams"
                          - div
                              ⟨display:flex;flex-wrap:wrap;gap:4px⟩
                            ▸ VOOR ELK t IN {{ npTeams }}
                              - button (onclick="{{ t.onClick }}")
                                  ⟨border:1px solid {{ t.bd }};background:{{ t.bg }};color:{{ t.fg }};padding:4px 9px;cursor:pointer;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                                  "{{ t.label }}"
                        - div
                            ⟨font-size:12px;color:#8a949e⟩
                            "Het project wordt op het midden van de kaart geplaatst."
                        - div
                            ⟨display:flex;gap:6px;justify-content:flex-end⟩
                          - button (onclick="{{ cancelProjForm }}")
                              ⟨border:1px solid #3a434c;background:transparent;color:#e6e9ec;padding:8px 12px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                              "Annuleren"
                          - button (onclick="{{ createProject }}")
                              ⟨border:0;background:#f2b33d;color:#0a0c0e;padding:8px 12px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                              "Aanmaken"
                    ▸ VOOR ELK cl IN {{ clientList }}
                      - div
                          ⟨display:flex;flex-direction:column;gap:8px⟩
                        - div
                            ⟨display:flex;align-items:baseline;justify-content:space-between;gap:10px;padding-bottom:6px;border-bottom:1px solid #232a31⟩
                          - div
                              ⟨min-width:0⟩
                            - div
                                ⟨font:600 15px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#e6e9ec⟩
                                "{{ cl.name }}"
                            - div
                                ⟨font-size:12px;color:#8a949e⟩
                                "{{ cl.sub }}"
                          - span
                              ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e;white-space:nowrap⟩
                              "{{ cl.n }}"
                        ▸ ALS {{ cl.empty }}
                          - div
                              ⟨font-size:13px;color:#5b646d⟩
                              "Nog geen projecten."
                        ▸ VOOR ELK pj IN {{ cl.projects }}
                          - div
                              ⟨display:flex;flex-direction:column;gap:7px;padding:12px;background:{{ pj.bg }};border:1px solid {{ pj.bd }};border-left:3px solid {{ pj.stCol }}⟩
                            - div
                                ⟨display:flex;align-items:center;gap:8px;flex-wrap:wrap⟩
                              - span
                                  ⟨font:700 10px 'JetBrains Mono',monospace;color:#0a0c0e;background:#c3cad1;padding:1px 5px;text-transform:uppercase⟩
                                  "{{ pj.type }}"
                              - span
                                  ⟨display:flex;align-items:center;gap:5px;font-size:12px;color:{{ pj.stCol }}⟩
                                - span
                                    ⟨width:6px;height:6px;border-radius:50%;background:{{ pj.stCol }}⟩
                                "{{ pj.status }}"
                              - span
                                  ⟨flex:1⟩
                              - span
                                  ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                                  "{{ pj.period }}"
                            - div
                                ⟨font-size:15px;font-weight:600;color:#e6e9ec⟩
                                "{{ pj.name }}"
                            - div
                                ⟨font-size:12px;color:#8a949e⟩
                                "{{ pj.loc }}"
                            - div
                                ⟨font:500 11px 'JetBrains Mono',monospace;color:#c3cad1⟩
                                "{{ pj.stats }}"
                            - div
                                ⟨display:flex;flex-wrap:wrap;gap:4px⟩
                              ▸ VOOR ELK t IN {{ pj.teams }}
                                - button (onclick="{{ t.onClick }}" title="Team koppelen of loskoppelen")
                                    ⟨border:1px solid {{ t.bd }};background:{{ t.bg }};color:{{ t.fg }};padding:2px 8px;cursor:pointer;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                                    "{{ t.label }}"
                            - div
                                ⟨display:flex;align-items:center;gap:6px;flex-wrap:wrap;padding-top:7px;border-top:1px solid #1f252b⟩
                              - button (onclick="{{ pj.onSelect }}")
                                  ⟨border:1px solid {{ pj.selBd }};background:{{ pj.selBg }};color:{{ pj.selFg }};padding:5px 9px;cursor:pointer;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap⟩
                                  "{{ pj.selLabel }}"
                              - button (onclick="{{ pj.onMap }}" title="Op kaart")
                                  ⟨border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;padding:4px 6px;cursor:pointer;display:flex⟩
                                - span
                                    ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga'⟩
                                    "location_searching"
                              - button (onclick="{{ pj.onReport }}")
                                  ⟨display:flex;align-items:center;gap:4px;border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;padding:4px 8px;cursor:pointer;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                                - span
                                    ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga'⟩
                                    "summarize"
                                "Rapport"
                              - span
                                  ⟨flex:1⟩
                              - select (value="{{ pj.status }}" onchange="{{ pj.onStatus }}")
                                  ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:4px 6px;font-size:12px⟩
                                ▸ VOOR ELK o IN {{ pj.statuses }}
                                  - option (value="{{ o }}")
                                      "{{ o }}"
                ▸ ALS {{ isPjStaff }}
                  - div
                      ⟨display:flex;flex-direction:column;gap:16px⟩
                    - div
                        ⟨display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px⟩
                      ▸ VOOR ELK st IN {{ staffStats }}
                        - div
                            ⟨background:#12161a;border:1px solid #232a31;padding:10px 12px⟩
                          - div
                              ⟨font:600 18px 'JetBrains Mono',monospace;color:{{ st.col }}⟩
                              "{{ st.value }}"
                          - div
                              ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-top:2px⟩
                              "{{ st.label }}"
                    ▸ VOOR ELK g IN {{ staffGroups }}
                      - div
                        - div
                            ⟨display:flex;align-items:baseline;justify-content:space-between;gap:10px;padding-bottom:6px;border-bottom:1px solid #232a31⟩
                          - div
                              ⟨font:600 15px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#e6e9ec⟩
                              "{{ g.name }}"
                          - div
                              ⟨font-size:12px;color:#8a949e;text-align:right⟩
                              "{{ g.project }}"
                        ▸ VOOR ELK m IN {{ g.members }}
                          - div
                              ⟨display:flex;flex-direction:column;gap:4px;padding:9px 2px;border-bottom:1px solid #1a1f24⟩
                            - div
                                ⟨display:grid;grid-template-columns:8px 36px minmax(0,1fr) auto auto;align-items:center;gap:8px⟩
                              - span
                                  ⟨width:8px;height:8px;border-radius:50%;background:{{ m.dot }}⟩
                              - span
                                  ⟨font:600 12px 'JetBrains Mono',monospace;color:#5cc8ff⟩
                                  "{{ m.id }}"
                              - div
                                  ⟨min-width:0⟩
                                - div
                                    ⟨font-size:14px;color:#e6e9ec;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                                    "{{ m.name }}"
                                - div
                                    ⟨font:500 11px 'JetBrains Mono',monospace;color:{{ m.labelCol }}⟩
                                    "{{ m.label }}"
                              ▸ ALS {{ m.hasItems }}
                                - span (title="Materiaal in bezit")
                                    ⟨display:flex;align-items:center;gap:3px;border:1px solid {{ m.itemsBd }};color:{{ m.itemsCol }};padding:2px 5px;font:600 11px 'JetBrains Mono',monospace⟩
                                  - span
                                      ⟨font-family:'Material Symbols Sharp';font-size:14px;line-height:1;font-feature-settings:'liga'⟩
                                      "inventory_2"
                                  "{{ m.nItems }}"
                              - button (onclick="{{ m.onToggle }}")
                                  ⟨border:1px solid {{ m.btnBd }};background:{{ m.btnBg }};color:{{ m.btnFg }};padding:5px 9px;cursor:pointer;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap⟩
                                  "{{ m.btn }}"
                            ▸ ALS {{ m.warn }}
                              - div
                                  ⟨font-size:12px;color:#ff5f57;padding-left:52px⟩
                                  "{{ m.warnText }}"
                ▸ ALS {{ isPjMat }}
                  - div
                      ⟨display:flex;flex-direction:column;gap:14px⟩
                    - div
                        ⟨display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px⟩
                      ▸ VOOR ELK st IN {{ matStats }}
                        - div
                            ⟨background:#12161a;border:1px solid #232a31;padding:10px 12px⟩
                          - div
                              ⟨font:600 18px 'JetBrains Mono',monospace;color:{{ st.col }}⟩
                              "{{ st.value }}"
                          - div
                              ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-top:2px⟩
                              "{{ st.label }}"
                    - div
                        ⟨display:flex;flex-direction:column;gap:6px;padding:10px;background:#12161a;border:1px solid #232a31⟩
                      - div
                          ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                          "Uitgeven"
                      - select (value="{{ issueItem }}" onchange="{{ onIssueItem }}")
                          ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px;min-width:0⟩
                        ▸ VOOR ELK o IN {{ issueItemOpts }}
                          - option (value="{{ o.id }}")
                              "{{ o.label }}"
                      - div
                          ⟨display:flex;gap:6px⟩
                        - select (value="{{ issueTo }}" onchange="{{ onIssueTo }}")
                            ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px;min-width:0;flex:1⟩
                          ▸ VOOR ELK o IN {{ issueToOpts }}
                            - option (value="{{ o.id }}")
                                "{{ o.label }}"
                        - button (onclick="{{ doIssue }}")
                            ⟨border:0;background:#f2b33d;color:#0a0c0e;padding:8px 12px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                            "Uitgeven"
                    - div
                        ⟨display:flex;gap:2px;background:#0f1215;border:1px solid #232a31;padding:3px⟩
                      ▸ VOOR ELK f IN {{ matFilters }}
                        - button (onclick="{{ f.onClick }}")
                            ⟨flex:1;border:0;padding:6px 4px;cursor:pointer;font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;background:{{ f.bg }};color:{{ f.fg }}⟩
                          "{{ f.label }}"
                          - span
                              ⟨font-family:'JetBrains Mono',monospace⟩
                              "{{ f.n }}"
                    ▸ ALS {{ isMatList }}
                      - div
                        ▸ ALS {{ noMat }}
                          - div
                              ⟨font-size:13px;color:#8a949e;padding:8px 0⟩
                              "Niets in deze lijst."
                        ▸ VOOR ELK it IN {{ matList }}
                          - div
                              ⟨display:grid;grid-template-columns:22px 52px minmax(0,1fr) auto;align-items:center;gap:8px;padding:9px 2px;border-bottom:1px solid #1a1f24⟩
                            - span
                                ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga';color:#8a949e⟩
                                "{{ it.icon }}"
                            - span
                                ⟨font:600 12px 'JetBrains Mono',monospace;color:#e6e9ec⟩
                                "{{ it.code }}"
                            - div
                                ⟨min-width:0⟩
                              - div
                                  ⟨font-size:13px;color:#e6e9ec;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                                  "{{ it.name }}"
                              - div
                                  ⟨font:500 11px 'JetBrains Mono',monospace;color:{{ it.holderCol }};white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                                  "{{ it.holder }}"
                            ▸ ALS {{ it.isOut }}
                              - button (onclick="{{ it.onReturn }}")
                                  ⟨border:1px solid #4fd18b;background:transparent;color:#4fd18b;padding:4px 9px;cursor:pointer;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                                  "Retour"
                            ▸ ALS {{ it.isIn }}
                              - button (onclick="{{ it.onIssue }}")
                                  ⟨border:1px solid #3a434c;background:transparent;color:#e6e9ec;padding:4px 9px;cursor:pointer;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                                  "Kies"
                    ▸ ALS {{ isMatPerson }}
                      - div
                          ⟨display:flex;flex-direction:column;gap:10px⟩
                        ▸ ALS {{ noMatPersons }}
                          - div
                              ⟨font-size:13px;color:#8a949e⟩
                              "Niemand heeft materiaal in bezit."
                        ▸ VOOR ELK mp IN {{ matPersons }}
                          - div
                              ⟨padding:10px 12px;background:#12161a;border:1px solid {{ mp.bd }}⟩
                            - div
                                ⟨display:flex;align-items:center;gap:8px⟩
                              - span
                                  ⟨font:600 12px 'JetBrains Mono',monospace;color:#5cc8ff⟩
                                  "{{ mp.id }}"
                              - span
                                  ⟨flex:1;font-size:14px;color:#e6e9ec⟩
                                  "{{ mp.name }}"
                              - span
                                  ⟨font-size:12px;color:{{ mp.stCol }}⟩
                                  "{{ mp.status }}"
                            ▸ VOOR ELK it IN {{ mp.items }}
                              - div
                                  ⟨display:grid;grid-template-columns:20px 48px minmax(0,1fr) auto;align-items:center;gap:8px;padding:6px 0 0⟩
                                - span
                                    ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga';color:#8a949e⟩
                                    "{{ it.icon }}"
                                - span
                                    ⟨font:600 11px 'JetBrains Mono',monospace;color:#e6e9ec⟩
                                    "{{ it.code }}"
                                - span
                                    ⟨font-size:12px;color:#c3cad1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                                    "{{ it.name }}"
                                - button (onclick="{{ it.onReturn }}")
                                    ⟨border:1px solid #4fd18b;background:transparent;color:#4fd18b;padding:3px 8px;cursor:pointer;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                                    "Retour"
                    - div
                        ⟨display:flex;flex-direction:column;gap:6px;padding:10px;border:1px dashed #2c343c⟩
                      - div
                          ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                          "Item toevoegen aan voorraad"
                      - div
                          ⟨display:grid;grid-template-columns:1fr 80px;gap:6px⟩
                        - select (value="{{ newItem.type }}" onchange="{{ onNiType }}")
                            ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px;min-width:0⟩
                          ▸ VOOR ELK o IN {{ matTypes }}
                            - option (value="{{ o }}")
                                "{{ o }}"
                        - input (value="{{ newItem.code }}" onchange="{{ onNiCode }}" placeholder="Code")
                            ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;outline:none;padding:7px 8px;font-size:13px⟩
                      - div
                          ⟨display:flex;gap:6px⟩
                        - input (value="{{ newItem.name }}" onchange="{{ onNiName }}" placeholder="Omschrijving, bijv. maat XL")
                            ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;outline:none;padding:7px 8px;font-size:13px;flex:1⟩
                        - button (onclick="{{ addItem }}")
                            ⟨border:1px solid #3a434c;background:transparent;color:#e6e9ec;padding:8px 12px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                            "Toevoegen"
            ▸ ALS {{ isTeam }}
              - div
                  ⟨display:flex;flex-direction:column;gap:18px⟩
                - div
                    ⟨display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px⟩
                  ▸ VOOR ELK st IN {{ teamStats }}
                    - div
                        ⟨background:#12161a;border:1px solid #232a31;padding:10px 12px⟩
                      - div
                          ⟨font:600 20px 'JetBrains Mono',monospace;color:#e6e9ec⟩
                          "{{ st.value }}"
                      - div
                          ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-top:2px⟩
                          "{{ st.label }}"
                ▸ ALS {{ isDispatch }}
                  - div
                      ⟨display:grid;grid-template-columns:1fr 1fr;gap:6px⟩
                    - button (onclick="{{ openTeamForm }}")
                        ⟨display:flex;align-items:center;justify-content:center;gap:6px;border:1px dashed #f2b33d;background:rgba(242,179,61,.06);color:#f2b33d;padding:9px;cursor:pointer;font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                          "group_add"
                      "Team"
                    - button (onclick="{{ openMemberForm }}")
                        ⟨display:flex;align-items:center;justify-content:center;gap:6px;border:1px dashed #f2b33d;background:rgba(242,179,61,.06);color:#f2b33d;padding:9px;cursor:pointer;font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                          "person_add"
                      "Teamlid"
                ▸ ALS {{ showTeamForm }}
                  - div
                      ⟨display:flex;flex-direction:column;gap:10px;padding:12px;background:#12161a;border:1px solid #f2b33d⟩
                    - div
                        ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#f2b33d⟩
                        "Nieuw team"
                    - input (value="{{ newTeam.name }}" onchange="{{ onNewTeamName }}" placeholder="Teamnaam, bijv. Echo")
                        ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;outline:none⟩
                    - input (value="{{ newTeam.city }}" onchange="{{ onNewTeamCity }}" placeholder="Gebied, bijv. Den Haag")
                        ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;outline:none⟩
                    - div
                        ⟨font-size:12px;color:#8a949e⟩
                        "Na aanmaken tik je op de kaart om de standplaats aan te wijzen."
                    - div
                        ⟨display:flex;gap:6px;justify-content:flex-end⟩
                      - button (onclick="{{ cancelTeamForm }}")
                          ⟨border:1px solid #3a434c;background:transparent;color:#e6e9ec;padding:7px 12px;cursor:pointer;font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                          "Annuleren"
                      - button (onclick="{{ createTeam }}")
                          ⟨border:0;background:#f2b33d;color:#0a0c0e;padding:8px 12px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                          "Aanmaken"
                ▸ ALS {{ showMemberForm }}
                  - div
                      ⟨display:flex;flex-direction:column;gap:10px;padding:12px;background:#12161a;border:1px solid #f2b33d⟩
                    - div
                        ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#f2b33d⟩
                        "Nieuw teamlid"
                    - input (value="{{ newMember.name }}" onchange="{{ onNewMemberName }}" placeholder="Volledige naam")
                        ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;outline:none⟩
                    - div
                        ⟨display:grid;grid-template-columns:1fr 1fr;gap:6px⟩
                      - select (value="{{ newMember.role }}" onchange="{{ onNewMemberRole }}")
                          ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px⟩
                        ▸ VOOR ELK r IN {{ roles }}
                          - option (value="{{ r }}")
                              "{{ r }}"
                      - select (value="{{ newMember.team }}" onchange="{{ onNewMemberTeam }}")
                          ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px⟩
                        ▸ VOOR ELK o IN {{ teamOptions }}
                          - option (value="{{ o.id }}")
                              "{{ o.label }}"
                    - div
                        ⟨font-size:12px;color:#8a949e⟩
                      "Roepnaam"
                      - span
                          ⟨font:600 12px 'JetBrains Mono',monospace;color:#5cc8ff⟩
                          "{{ memberCallsign }}"
                      "· start op de standplaats van het team"
                    - div
                        ⟨display:flex;gap:6px;justify-content:flex-end⟩
                      - button (onclick="{{ cancelTeamForm }}")
                          ⟨border:1px solid #3a434c;background:transparent;color:#e6e9ec;padding:7px 12px;cursor:pointer;font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                          "Annuleren"
                      - button (onclick="{{ createMember }}")
                          ⟨border:0;background:#f2b33d;color:#0a0c0e;padding:8px 12px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                          "Toevoegen"
                ▸ VOOR ELK g IN {{ teamGroups }}
                  - div
                    - div
                        ⟨display:flex;align-items:baseline;justify-content:space-between;padding-bottom:6px;border-bottom:1px solid #232a31⟩
                      - div
                          ⟨font:600 15px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#e6e9ec⟩
                        "{{ g.name }}"
                        - span
                            ⟨color:#8a949e;font-weight:500⟩
                            "· {{ g.city }}"
                      - div
                          ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                          "{{ g.count }}"
                    - div
                        ⟨display:flex;align-items:center;gap:8px;padding:7px 0 3px⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga';color:{{ g.postCol }}⟩
                          "flag"
                      - span
                          ⟨flex:1;min-width:0;font-size:12px;color:#c3cad1⟩
                          "{{ g.post }}"
                      ▸ ALS {{ isDispatch }}
                        - button (onclick="{{ g.onAssign }}")
                            ⟨border:1px solid #2c343c;background:#151a1f;color:#4fd18b;padding:3px 8px;cursor:pointer;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                            "{{ g.assignLabel }}"
                    ▸ VOOR ELK m IN {{ g.members }}
                      - div (onclick="{{ m.onClick }}" style-hover="background:#161b20")
                          ⟨display:grid;grid-template-columns:8px 40px minmax(0,1fr) auto auto;align-items:center;gap:10px;padding:9px 4px;border-bottom:1px solid #1a1f24;cursor:pointer⟩
                        - div
                            ⟨width:8px;height:8px;border-radius:50%;background:{{ m.dot }}⟩
                        - div
                            ⟨font:600 12px 'JetBrains Mono',monospace;color:#5cc8ff⟩
                            "{{ m.id }}"
                        - div
                            ⟨min-width:0⟩
                          - div
                              ⟨font-size:14px;font-weight:500;color:#e6e9ec⟩
                              "{{ m.name }}"
                          - div
                              ⟨font-size:12px;color:#8a949e⟩
                              "{{ m.role }} · {{ m.status }}"
                        - div
                            ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e;text-align:right⟩
                            "{{ m.dist }}"
                        ▸ ALS {{ isDispatch }}
                          - button (onclick="{{ m.onAssign }}" title="Locatie toewijzen" style-hover="color:#4fd18b")
                              ⟨border:0;background:transparent;color:#8a949e;cursor:pointer;padding:2px⟩
                            - span
                                ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                                "flag"
                - div
                  - div
                      ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:8px⟩
                      "Rollen"
                  - div
                      ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                    ▸ VOOR ELK r IN {{ roleStats }}
                      - div
                          ⟨display:flex;align-items:center;gap:6px;border:1px solid #232a31;padding:4px 8px;font-size:12px;color:#c3cad1⟩
                        - span
                            ⟨font:600 10px 'JetBrains Mono',monospace;color:#5cc8ff⟩
                            "{{ r.code }}"
                        "{{ r.label }}"
                        - span
                            ⟨font-family:'JetBrains Mono',monospace;color:#8a949e⟩
                            "{{ r.n }}"
            ▸ ALS {{ isTasks }}
              - div
                  ⟨display:flex;flex-direction:column;gap:12px⟩
                - div
                    ⟨display:flex;gap:2px;background:#0f1215;border:1px solid #232a31;padding:3px⟩
                  ▸ VOOR ELK f IN {{ taskFilters }}
                    - button (onclick="{{ f.onClick }}")
                        ⟨flex:1;border:0;padding:6px 4px;cursor:pointer;font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;background:{{ f.bg }};color:{{ f.fg }}⟩
                      "{{ f.label }}"
                      - span
                          ⟨font-family:'JetBrains Mono',monospace⟩
                          "{{ f.count }}"
                - div
                    ⟨display:flex;flex-direction:column;gap:8px;padding:10px;background:#12161a;border:1px solid #232a31⟩
                  - input (value="{{ newTaskTitle }}" onchange="{{ onNewTaskTitle }}" onkeydown="{{ onTaskKey }}" placeholder="Nieuwe taak klaarzetten…")
                      ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;outline:none⟩
                  - div
                      ⟨display:flex;gap:6px;align-items:center;flex-wrap:wrap⟩
                    - select (value="{{ newTaskWho }}" onchange="{{ onNewTaskWho }}")
                        ⟨flex:1;min-width:140px;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px⟩
                      ▸ VOOR ELK o IN {{ assigneeOptions }}
                        - option (value="{{ o.id }}")
                            "{{ o.label }}"
                    ▸ ALS {{ hasTaskInc }}
                      - button (onclick="{{ clearTaskInc }}")
                          ⟨display:flex;align-items:center;gap:4px;border:1px solid #f2b33d;background:transparent;color:#f2b33d;padding:6px 8px;cursor:pointer;font:500 11px 'JetBrains Mono',monospace⟩
                          "{{ newTaskInc }} ✕"
                    - button (onclick="{{ addTask }}")
                        ⟨border:0;background:#f2b33d;color:#0a0c0e;padding:8px 12px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                        "Toewijzen"
                - div
                  ▸ VOOR ELK t IN {{ visibleTasks }}
                    - div
                        ⟨display:grid;grid-template-columns:24px minmax(0,1fr);gap:10px;padding:10px 2px;border-bottom:1px solid #1a1f24⟩
                      - button (onclick="{{ t.onToggle }}")
                          ⟨width:22px;height:22px;border:1.5px solid {{ t.boxBorder }};background:{{ t.boxBg }};display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;color:#0a0c0e⟩
                        - span
                            ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga';font-weight:600⟩
                            "{{ t.check }}"
                      - div
                          ⟨min-width:0⟩
                        - div
                            ⟨font-size:14px;font-weight:500;color:{{ t.titleColor }};text-decoration:{{ t.deco }}⟩
                            "{{ t.title }}"
                        - div
                            ⟨display:flex;flex-wrap:wrap;gap:8px;margin-top:5px;align-items:center⟩
                          - span
                              ⟨font:700 10px 'JetBrains Mono',monospace;color:{{ t.prioCol }};border:1px solid {{ t.prioCol }};padding:0 4px⟩
                              "{{ t.prio }}"
                          - span
                              ⟨font:600 11px 'JetBrains Mono',monospace;color:#5cc8ff⟩
                              "{{ t.assignee }}"
                          - span
                              ⟨font-size:12px;color:#8a949e⟩
                              "{{ t.assigneeName }}"
                          ▸ ALS {{ t.hasInc }}
                            - span (onclick="{{ t.onInc }}")
                                ⟨font:500 11px 'JetBrains Mono',monospace;color:#f2b33d;cursor:pointer;text-decoration:underline⟩
                                "{{ t.inc }}"
                          - span
                              ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                              "{{ t.due }}"
                          - span
                              ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#8a949e⟩
                              "{{ t.st }}"
                          - label (title="Foto of document toevoegen")
                              ⟨display:flex;align-items:center;color:#8a949e;cursor:pointer⟩
                            - span
                                ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga'⟩
                                "attach_file"
                            - input (type="file" multiple="" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt" onchange="{{ t.onAtt }}")
                                ⟨display:none⟩
                        ▸ ALS {{ t.hasAtts }}
                          - div
                              ⟨margin-top:8px⟩
                            - div
                                ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                              ▸ VOOR ELK ta IN {{ t.atts }}
                                ▸ ALS {{ ta.isImg }}
                                  - button (onclick="{{ ta.onOpen }}" title="{{ ta.name }}")
                                      ⟨width:48px;height:48px;flex:none;padding:0;border:1px solid #2c343c;cursor:zoom-in;background-color:#0a0c0e;background-image:url({{ ta.url }});background-size:cover;background-position:center⟩
                                ▸ ALS {{ ta.isDoc }}
                                  - a (href="{{ ta.url }}" download="{{ ta.name }}")
                                      ⟨display:flex;align-items:center;gap:8px;height:48px;max-width:220px;padding:0 10px;border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;text-decoration:none⟩
                                    - span
                                        ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga';color:#5cc8ff⟩
                                        "description"
                                    - span
                                        ⟨display:flex;flex-direction:column;min-width:0⟩
                                      - span
                                          ⟨font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                                          "{{ ta.name }}"
                                      - span
                                          ⟨font:500 10px 'JetBrains Mono',monospace;color:#8a949e⟩
                                          "{{ ta.size }}"
            ▸ ALS {{ isIncList }}
              - div
                  ⟨display:flex;flex-direction:column;gap:10px⟩
                - button (onclick="{{ startNewInc }}")
                    ⟨display:flex;align-items:center;justify-content:center;gap:6px;border:1px dashed #f2b33d;background:rgba(242,179,61,.06);color:#f2b33d;padding:10px;cursor:pointer;font:600 13px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga'⟩
                      "add"
                  "{{ incNewLabel }}"
                ▸ VOOR ELK i IN {{ incList }}
                  - div (onclick="{{ i.onClick }}" style-hover="background:#171c21")
                      ⟨display:flex;flex-direction:column;gap:6px;padding:12px;background:#12161a;border:1px solid #232a31;border-left:3px solid {{ i.prioCol }};cursor:pointer⟩
                    - div
                        ⟨display:flex;align-items:center;gap:8px⟩
                      - span
                          ⟨font:700 10px 'JetBrains Mono',monospace;color:#0a0c0e;background:{{ i.prioCol }};padding:1px 5px⟩
                          "{{ i.prio }}"
                      - span
                          ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                          "{{ i.id }}"
                      - span
                          ⟨flex:1⟩
                      - span
                          ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                          "{{ i.time }}"
                    - div
                        ⟨font-size:15px;font-weight:600;color:#e6e9ec⟩
                        "{{ i.title }}"
                    - div
                        ⟨font-size:12px;color:#8a949e⟩
                        "{{ i.type }} · {{ i.loc }}"
                    - div
                        ⟨display:flex;align-items:center;gap:10px;font-size:12px⟩
                      - span
                          ⟨display:flex;align-items:center;gap:5px;color:{{ i.statusCol }}⟩
                        - span
                            ⟨width:6px;height:6px;border-radius:50%;background:{{ i.statusCol }}⟩
                        "{{ i.status }}"
                      - span
                          ⟨color:#8a949e⟩
                          "{{ i.nTasks }}"
                      - span
                          ⟨color:#8a949e⟩
                          "{{ i.nUnits }}"
                      - span
                          ⟨flex:1⟩
                      ▸ ALS {{ i.canAccept }}
                        - button (onclick="{{ i.onReject }}")
                            ⟨border:1px solid #3a434c;background:transparent;color:#c3cad1;padding:4px 8px;cursor:pointer;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                            "Afwijzen"
                        - button (onclick="{{ i.onAccept }}")
                            ⟨border:0;background:#f2d64b;color:#0a0c0e;padding:5px 9px;cursor:pointer;font:700 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                            "Accepteren"
            ▸ ALS {{ isIncNew }}
              - div
                  ⟨display:flex;flex-direction:column;gap:12px⟩
                - button (onclick="{{ backToList }}")
                    ⟨align-self:flex-start;display:flex;align-items:center;gap:4px;border:0;background:transparent;color:#8a949e;cursor:pointer;padding:0;font-size:13px⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                      "arrow_back"
                  "Alle meldingen"
                - div
                  - div
                      ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:5px⟩
                      "Titel"
                  - input (value="{{ newInc.title }}" onchange="{{ onNewIncTitle }}" placeholder="Korte omschrijving")
                      ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;outline:none⟩
                - div
                  - div
                      ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:5px⟩
                      "Type"
                  - select (value="{{ newInc.type }}" onchange="{{ onNewIncType }}")
                      ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px;font-size:13px⟩
                    ▸ VOOR ELK o IN {{ incTypes }}
                      - option (value="{{ o }}")
                          "{{ o }}"
                - div
                  - div
                      ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:5px⟩
                      "Prioriteit"
                  - div
                      ⟨display:flex;gap:6px⟩
                    ▸ VOOR ELK p IN {{ newIncPrios }}
                      - button (onclick="{{ p.onClick }}")
                          ⟨flex:1;padding:7px;cursor:pointer;border:1px solid {{ p.col }};background:{{ p.bg }};color:{{ p.fg }};font:700 12px 'JetBrains Mono',monospace⟩
                          "{{ p.label }}"
                - div
                  - div
                      ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:5px⟩
                      "Omschrijving"
                  - textarea (value="{{ newInc.desc }}" onchange="{{ onNewIncDesc }}" rows="4" placeholder="Wat is er aan de hand, wie is betrokken, wat is er nodig?")
                      ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;outline:none;resize:vertical⟩
                ▸ ALS {{ isDispatch }}
                  - div
                    - div
                        ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:5px⟩
                        "Toewijzen aan"
                    - div
                        ⟨display:flex;flex-wrap:wrap;gap:6px;margin-bottom:6px⟩
                      ▸ VOOR ELK w IN {{ niAssign }}
                        - span
                            ⟨display:flex;align-items:center;gap:2px;border:1px solid #2c343c;background:#151a1f;padding:3px 3px 3px 8px;font-size:12px;color:#e6e9ec⟩
                          "{{ w.label }}"
                          - button (onclick="{{ w.onRemove }}")
                              ⟨border:0;background:transparent;color:#8a949e;cursor:pointer;padding:0 2px;display:flex⟩
                            - span
                                ⟨font-family:'Material Symbols Sharp';font-size:14px;line-height:1;font-feature-settings:'liga'⟩
                                "close"
                    - select (value="" onchange="{{ onNiAssign }}")
                        ⟨width:100%;background:#0a0c0e;border:1px dashed #f2b33d;color:#f2b33d;padding:7px 8px;font-size:13px⟩
                      ▸ VOOR ELK o IN {{ niAssignOpts }}
                        - option (value="{{ o.id }}")
                            "{{ o.label }}"
                - div
                  - label
                      ⟨display:flex;align-items:center;gap:8px;border:1px dashed #2c343c;padding:9px 10px;cursor:pointer;font-size:13px;color:#c3cad1⟩
                    - span
                        ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga';color:#5cc8ff⟩
                        "attach_file"
                    "Foto's of documenten toevoegen"
                    - input (type="file" multiple="" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt" onchange="{{ onNiAtt }}")
                        ⟨display:none⟩
                  ▸ ALS {{ hasNiAtts }}
                    - div
                        ⟨margin-top:8px⟩
                      - div
                          ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                        ▸ VOOR ELK na IN {{ niAtts }}
                          ▸ ALS {{ na.isImg }}
                            - button (onclick="{{ na.onOpen }}" title="{{ na.name }}")
                                ⟨width:56px;height:56px;flex:none;padding:0;border:1px solid #2c343c;cursor:zoom-in;background-color:#0a0c0e;background-image:url({{ na.url }});background-size:cover;background-position:center⟩
                          ▸ ALS {{ na.isDoc }}
                            - a (href="{{ na.url }}" download="{{ na.name }}")
                                ⟨display:flex;align-items:center;gap:8px;height:56px;max-width:220px;padding:0 10px;border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;text-decoration:none⟩
                              - span
                                  ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga';color:#5cc8ff⟩
                                  "description"
                              - span
                                  ⟨display:flex;flex-direction:column;min-width:0⟩
                                - span
                                    ⟨font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                                    "{{ na.name }}"
                                - span
                                    ⟨font:500 10px 'JetBrains Mono',monospace;color:#8a949e⟩
                                    "{{ na.size }}"
                - div
                    ⟨font-size:12px;color:#8a949e⟩
                    "{{ newIncNote }}"
                - button (onclick="{{ createInc }}")
                    ⟨border:0;background:#f2b33d;color:#0a0c0e;padding:10px;cursor:pointer;font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                    "{{ newIncBtn }}"
            ▸ ALS {{ isIncDetail }}
              - div
                  ⟨display:flex;flex-direction:column;gap:16px⟩
                - button (onclick="{{ backToList }}")
                    ⟨align-self:flex-start;display:flex;align-items:center;gap:4px;border:0;background:transparent;color:#8a949e;cursor:pointer;padding:0;font-size:13px⟩
                  - span
                      ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                      "arrow_back"
                  "Alle meldingen"
                - div
                  - div
                      ⟨display:flex;align-items:center;gap:8px⟩
                    - span
                        ⟨font:700 10px 'JetBrains Mono',monospace;color:#0a0c0e;background:{{ inc.prioCol }};padding:1px 5px⟩
                        "{{ inc.prio }}"
                    - span
                        ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                        "{{ inc.id }} · {{ inc.type }}"
                  - div
                      ⟨font-size:20px;font-weight:600;color:#e6e9ec;margin-top:6px⟩
                      "{{ inc.title }}"
                  - div
                      ⟨font-size:14px;color:#c3cad1;line-height:1.45;margin-top:6px;text-wrap:pretty⟩
                      "{{ inc.desc }}"
                - div
                    ⟨display:flex;gap:4px;flex-wrap:wrap⟩
                  ▸ VOOR ELK st IN {{ inc.statuses }}
                    - button (onclick="{{ st.onClick }}")
                        ⟨padding:5px 9px;cursor:pointer;border:1px solid {{ st.bd }};background:{{ st.bg }};color:{{ st.fg }};font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                        "{{ st.label }}"
                - div
                    ⟨display:grid;grid-template-columns:1fr;gap:8px;padding:12px;background:#12161a;border:1px solid #232a31⟩
                  ▸ VOOR ELK f IN {{ inc.fields }}
                    - div
                        ⟨display:grid;grid-template-columns:96px minmax(0,1fr);gap:10px⟩
                      - div
                          ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;padding-top:2px⟩
                          "{{ f.k }}"
                      - div
                          ⟨font-size:13px;color:#e6e9ec⟩
                          "{{ f.v }}"
                - div
                    ⟨display:grid;grid-template-columns:1fr 1fr;gap:6px⟩
                  - button (onclick="{{ inc.onMap }}")
                      ⟨display:flex;align-items:center;justify-content:center;gap:6px;border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;padding:9px;cursor:pointer;font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                    - span
                        ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga';color:#f2b33d⟩
                        "location_searching"
                    "Op kaart"
                  - button (onclick="{{ inc.onTask }}")
                      ⟨display:flex;align-items:center;justify-content:center;gap:6px;border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;padding:9px;cursor:pointer;font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                    - span
                        ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga';color:#f2b33d⟩
                        "add_task"
                    "Taak maken"
                - div
                  - div
                      ⟨display:flex;align-items:center;justify-content:space-between;margin-bottom:8px⟩
                    - div
                        ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                        "Toegewezen aan"
                    - span
                        ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                        "{{ inc.nAssign }}"
                  - div
                      ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                    ▸ VOOR ELK u IN {{ inc.units }}
                      - div
                          ⟨display:flex;align-items:center;border:1px solid #2c343c;background:#151a1f⟩
                        - button (onclick="{{ u.onClick }}")
                            ⟨display:flex;align-items:center;gap:6px;border:0;background:transparent;color:#e6e9ec;padding:5px 4px 5px 8px;cursor:pointer;font-size:12px⟩
                          - span
                              ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga';color:{{ u.col }}⟩
                              "{{ u.icon }}"
                          - span
                              ⟨font:600 11px 'JetBrains Mono',monospace;color:{{ u.col }}⟩
                              "{{ u.id }}"
                          "{{ u.name }}"
                        ▸ ALS {{ isDispatch }}
                          - button (onclick="{{ u.onRemove }}" title="Ontkoppelen")
                              ⟨border:0;background:transparent;color:#8a949e;cursor:pointer;padding:4px 6px;display:flex⟩
                            - span
                                ⟨font-family:'Material Symbols Sharp';font-size:14px;line-height:1;font-feature-settings:'liga'⟩
                                "close"
                  ▸ ALS {{ isDispatch }}
                    - select (value="" onchange="{{ inc.onAddUnit }}")
                        ⟨margin-top:8px;width:100%;background:#0a0c0e;border:1px dashed #f2b33d;color:#f2b33d;padding:7px 8px;font-size:13px⟩
                      - option (value="")
                          "+ Toewijzen aan team of teamlid…"
                      ▸ VOOR ELK o IN {{ inc.addable }}
                        - option (value="{{ o.id }}")
                            "{{ o.label }}"
                - div
                  - div
                      ⟨display:flex;align-items:center;justify-content:space-between;margin-bottom:8px⟩
                    - div
                        ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                        "Foto's & documenten"
                    - label
                        ⟨display:flex;align-items:center;gap:4px;border:1px solid #2c343c;background:#151a1f;color:#5cc8ff;padding:4px 8px;cursor:pointer;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga'⟩
                          "attach_file"
                      "Toevoegen"
                      - input (type="file" multiple="" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt" onchange="{{ inc.onAtt }}")
                          ⟨display:none⟩
                  ▸ ALS {{ inc.hasAtts }}
                    - div
                        ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                      ▸ VOOR ELK ia IN {{ inc.atts }}
                        ▸ ALS {{ ia.isImg }}
                          - button (onclick="{{ ia.onOpen }}" title="{{ ia.name }}")
                              ⟨width:72px;height:72px;flex:none;padding:0;border:1px solid #2c343c;cursor:zoom-in;background-color:#0a0c0e;background-image:url({{ ia.url }});background-size:cover;background-position:center⟩
                        ▸ ALS {{ ia.isDoc }}
                          - a (href="{{ ia.url }}" download="{{ ia.name }}")
                              ⟨display:flex;align-items:center;gap:8px;height:72px;max-width:220px;padding:0 10px;border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;text-decoration:none⟩
                            - span
                                ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga';color:#5cc8ff⟩
                                "description"
                            - span
                                ⟨display:flex;flex-direction:column;min-width:0⟩
                              - span
                                  ⟨font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                                  "{{ ia.name }}"
                              - span
                                  ⟨font:500 10px 'JetBrains Mono',monospace;color:#8a949e⟩
                                  "{{ ia.size }}"
                  ▸ ALS {{ inc.noAtts }}
                    - div
                        ⟨font-size:13px;color:#8a949e⟩
                        "Nog geen bijlagen."
                - div
                  - div
                      ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:4px⟩
                      "Gekoppelde taken"
                  ▸ ALS {{ inc.noTasks }}
                    - div
                        ⟨font-size:13px;color:#8a949e;padding:6px 0⟩
                        "Nog geen taken."
                  ▸ VOOR ELK t IN {{ inc.tasks }}
                    - div
                        ⟨display:grid;grid-template-columns:24px minmax(0,1fr) auto;gap:10px;align-items:center;padding:8px 0;border-bottom:1px solid #1a1f24⟩
                      - button (onclick="{{ t.onToggle }}")
                          ⟨width:20px;height:20px;border:1.5px solid {{ t.boxBorder }};background:{{ t.boxBg }};display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;color:#0a0c0e⟩
                        - span
                            ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga';font-weight:600⟩
                            "{{ t.check }}"
                      - div
                          ⟨font-size:13px;color:{{ t.titleColor }};text-decoration:{{ t.deco }}⟩
                          "{{ t.title }}"
                      - div
                          ⟨font:600 11px 'JetBrains Mono',monospace;color:#5cc8ff⟩
                          "{{ t.assignee }}"
                - div
                  - div
                      ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:8px⟩
                      "Logboek"
                  - div
                      ⟨display:flex;gap:6px;margin-bottom:10px⟩
                    - input (value="{{ noteText }}" onchange="{{ onNoteText }}" onkeydown="{{ onNoteKey }}" placeholder="Notitie toevoegen…")
                        ⟨flex:1;min-width:0;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 10px;font-size:13px;outline:none⟩
                    - button (onclick="{{ addNote }}")
                        ⟨border:0;background:#f2b33d;color:#0a0c0e;padding:0 12px;cursor:pointer⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                          "send"
                  ▸ VOOR ELK l IN {{ inc.log }}
                    - div
                        ⟨display:grid;grid-template-columns:44px 48px minmax(0,1fr);gap:8px;padding:6px 0;border-bottom:1px solid #1a1f24;font-size:13px⟩
                      - span
                          ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e;padding-top:1px⟩
                          "{{ l.t }}"
                      - span
                          ⟨font:600 11px 'JetBrains Mono',monospace;color:#5cc8ff;padding-top:1px⟩
                          "{{ l.by }}"
                      - span
                          ⟨color:#c3cad1⟩
                          "{{ l.text }}"
            ▸ ALS {{ isBulletin }}
              - div
                  ⟨display:flex;flex-direction:column;gap:12px⟩
                - div
                    ⟨display:flex;gap:2px;background:#0f1215;border:1px solid #232a31;padding:3px⟩
                  ▸ VOOR ELK f IN {{ bulFilters }}
                    - button (onclick="{{ f.onClick }}")
                        ⟨flex:1;border:0;padding:6px 2px;cursor:pointer;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase;background:{{ f.bg }};color:{{ f.fg }}⟩
                      "{{ f.label }}"
                      - span
                          ⟨font-family:'JetBrains Mono',monospace⟩
                          "{{ f.count }}"
                ▸ ALS {{ showBulNewBtn }}
                  - button (onclick="{{ openBulForm }}")
                      ⟨display:flex;align-items:center;justify-content:center;gap:6px;border:1px dashed #f2b33d;background:rgba(242,179,61,.06);color:#f2b33d;padding:10px;cursor:pointer;font:600 13px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                    - span
                        ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga'⟩
                        "campaign"
                    "Nieuw bericht uitsturen"
                ▸ ALS {{ showBulForm }}
                  - div
                      ⟨display:flex;flex-direction:column;gap:10px;padding:12px;background:#12161a;border:1px solid #f2b33d⟩
                    - div
                        ⟨display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px⟩
                      ▸ VOOR ELK t IN {{ bulTypes }}
                        - button (onclick="{{ t.onClick }}")
                            ⟨padding:6px 2px;cursor:pointer;border:1px solid {{ t.col }};background:{{ t.bg }};color:{{ t.fg }};font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase⟩
                            "{{ t.label }}"
                    - div
                        ⟨display:flex;gap:4px⟩
                      ▸ VOOR ELK p IN {{ bulPrios }}
                        - button (onclick="{{ p.onClick }}")
                            ⟨flex:1;padding:6px;cursor:pointer;border:1px solid {{ p.bd }};background:{{ p.bg }};color:{{ p.fg }};font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                            "{{ p.label }}"
                    - input (value="{{ newBul.title }}" onchange="{{ onBulTitle }}" placeholder="Titel, bijv. signalement of voertuig")
                        ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;outline:none⟩
                    - textarea (value="{{ newBul.text }}" onchange="{{ onBulText }}" rows="4" placeholder="Omschrijving, kenmerken, instructie")
                        ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;outline:none;resize:vertical⟩
                    - div
                        ⟨display:grid;grid-template-columns:1fr 1fr;gap:6px⟩
                      - select (value="{{ newBul.scope }}" onchange="{{ onBulScope }}")
                          ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px⟩
                        ▸ VOOR ELK o IN {{ scopeOptions }}
                          - option (value="{{ o.id }}")
                              "{{ o.label }}"
                      - input (value="{{ newBul.until }}" onchange="{{ onBulUntil }}" placeholder="Geldig tot")
                          ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 10px;font-size:13px;outline:none;min-width:0⟩
                    - div
                        ⟨display:flex;align-items:center;gap:10px⟩
                      - div (onclick="{{ toggleBulLoc }}")
                          ⟨display:flex;align-items:center;gap:8px;cursor:pointer;flex:1⟩
                        - span
                            ⟨width:34px;height:18px;border-radius:9px;background:{{ locTrack }};display:flex;align-items:center;justify-content:{{ locJustify }};padding:2px⟩
                          - span
                              ⟨width:14px;height:14px;border-radius:50%;background:#e6e9ec⟩
                        - span
                            ⟨font-size:13px;color:#e6e9ec⟩
                            "Gebied op kaartmidden"
                      ▸ ALS {{ newBul.loc }}
                        - select (value="{{ newBul.radius }}" onchange="{{ onBulRadius }}")
                            ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:5px 6px;font-size:12px⟩
                          ▸ VOOR ELK r IN {{ radiusOptions }}
                            - option (value="{{ r.v }}")
                                "{{ r.label }}"
                    - label
                        ⟨display:flex;align-items:center;gap:8px;border:1px dashed #2c343c;padding:8px 10px;cursor:pointer;font-size:13px;color:#c3cad1⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga';color:#5cc8ff⟩
                          "add_photo_alternate"
                      "{{ bulImgLabel }}"
                      - input (type="file" multiple="" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt" onchange="{{ onBulImg }}")
                          ⟨display:none⟩
                    ▸ ALS {{ hasBulImg }}
                      - div
                          ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                        ▸ VOOR ELK ba IN {{ bulAtts }}
                          ▸ ALS {{ ba.isImg }}
                            - button (onclick="{{ ba.onOpen }}" title="{{ ba.name }}")
                                ⟨width:64px;height:64px;flex:none;padding:0;border:1px solid #2c343c;cursor:zoom-in;background-color:#0a0c0e;background-image:url({{ ba.url }});background-size:cover;background-position:center⟩
                          ▸ ALS {{ ba.isDoc }}
                            - a (href="{{ ba.url }}" download="{{ ba.name }}")
                                ⟨display:flex;align-items:center;gap:8px;height:64px;max-width:220px;padding:0 10px;border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;text-decoration:none⟩
                              - span
                                  ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga';color:#5cc8ff⟩
                                  "description"
                              - span
                                  ⟨display:flex;flex-direction:column;min-width:0⟩
                                - span
                                    ⟨font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                                    "{{ ba.name }}"
                                - span
                                    ⟨font:500 10px 'JetBrains Mono',monospace;color:#8a949e⟩
                                    "{{ ba.size }}"
                    - div
                        ⟨display:flex;gap:6px;justify-content:flex-end⟩
                      - button (onclick="{{ cancelBul }}")
                          ⟨border:1px solid #3a434c;background:transparent;color:#e6e9ec;padding:7px 12px;cursor:pointer;font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                          "Annuleren"
                      - button (onclick="{{ createBul }}")
                          ⟨border:0;background:#f2b33d;color:#0a0c0e;padding:8px 12px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                          "Publiceren"
                ▸ ALS {{ noBulletins }}
                  - div
                      ⟨font-size:13px;color:#8a949e;padding:10px 0;text-align:center⟩
                      "Geen berichten in deze categorie."
                ▸ VOOR ELK b IN {{ bulList }}
                  - div
                      ⟨display:flex;flex-direction:column;gap:7px;padding:12px;background:#12161a;border:1px solid #232a31;border-left:3px solid {{ b.col }}⟩
                    - div
                        ⟨display:flex;align-items:center;gap:8px⟩
                      - span
                          ⟨font:700 10px 'JetBrains Mono',monospace;color:#0a0c0e;background:{{ b.col }};padding:1px 5px;text-transform:uppercase⟩
                          "{{ b.type }}"
                      ▸ ALS {{ b.high }}
                        - span
                            ⟨font:700 10px 'JetBrains Mono',monospace;color:#ff5f57⟩
                            "HOOG"
                      - span
                          ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                          "{{ b.id }}"
                    - div
                        ⟨font-size:15px;font-weight:600;color:#e6e9ec⟩
                        "{{ b.title }}"
                    ▸ ALS {{ b.hasImg }}
                      - button (onclick="{{ b.onHero }}")
                          ⟨width:100%;height:160px;padding:0;cursor:zoom-in;background-color:#0a0c0e;background-image:url({{ b.img }});background-size:cover;background-position:center;border:1px solid #2c343c⟩
                    - div
                        ⟨font-size:13px;color:#c3cad1;line-height:1.45;text-wrap:pretty⟩
                        "{{ b.text }}"
                    ▸ ALS {{ b.hasDocs }}
                      - div
                          ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                        ▸ VOOR ELK bd IN {{ b.docs }}
                          ▸ ALS {{ bd.isImg }}
                            - button (onclick="{{ bd.onOpen }}" title="{{ bd.name }}")
                                ⟨width:48px;height:48px;flex:none;padding:0;border:1px solid #2c343c;cursor:zoom-in;background-color:#0a0c0e;background-image:url({{ bd.url }});background-size:cover;background-position:center⟩
                          ▸ ALS {{ bd.isDoc }}
                            - a (href="{{ bd.url }}" download="{{ bd.name }}")
                                ⟨display:flex;align-items:center;gap:8px;height:48px;max-width:220px;padding:0 10px;border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;text-decoration:none⟩
                              - span
                                  ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga';color:#5cc8ff⟩
                                  "description"
                              - span
                                  ⟨display:flex;flex-direction:column;min-width:0⟩
                                - span
                                    ⟨font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                                    "{{ bd.name }}"
                                - span
                                    ⟨font:500 10px 'JetBrains Mono',monospace;color:#8a949e⟩
                                    "{{ bd.size }}"
                    - div
                        ⟨font-size:11px;color:#8a949e⟩
                        "{{ b.meta }}"
                    - div
                        ⟨display:flex;align-items:center;gap:6px;flex-wrap:wrap;padding-top:6px;border-top:1px solid #1f252b⟩
                      - span
                          ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                          "{{ b.ack }}"
                      - span
                          ⟨flex:1⟩
                      ▸ ALS {{ b.hasLoc }}
                        - button (onclick="{{ b.onMap }}")
                            ⟨border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;padding:4px 8px;cursor:pointer;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                            "Op kaart"
                      ▸ ALS {{ isDispatch }}
                        - button (onclick="{{ b.onDelete }}")
                            ⟨border:1px solid #2c343c;background:transparent;color:#8a949e;padding:4px 8px;cursor:pointer;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                            "Intrekken"
                      ▸ ALS {{ b.canAck }}
                        - button (onclick="{{ b.onAck }}")
                            ⟨border:0;background:#f2b33d;color:#0a0c0e;padding:5px 9px;cursor:pointer;font:700 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                            "Gelezen bevestigen"
                      ▸ ALS {{ b.acked }}
                        - span
                            ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#4fd18b⟩
                            "✓ Gelezen"
            ▸ ALS {{ isChat }}
              - div
                  ⟨display:flex;flex-direction:column;gap:12px;min-height:100%⟩
                - div
                    ⟨display:flex;gap:2px;background:#0f1215;border:1px solid #232a31;padding:3px;position:sticky;top:-14px;z-index:1⟩
                  ▸ VOOR ELK c IN {{ channels }}
                    - button (onclick="{{ c.onClick }}")
                        ⟨flex:1;border:0;padding:6px 2px;cursor:pointer;font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase;background:{{ c.bg }};color:{{ c.fg }}⟩
                        "{{ c.label }}"
                - div
                    ⟨flex:1;display:flex;flex-direction:column;gap:10px⟩
                  ▸ ALS {{ noMsgs }}
                    - div
                        ⟨font-size:13px;color:#8a949e;text-align:center;padding:20px 0⟩
                        "Nog geen berichten in dit kanaal."
                  ▸ VOOR ELK m IN {{ msgs }}
                    - div
                        ⟨display:flex;flex-direction:column;align-items:{{ m.align }}⟩
                      - div
                          ⟨max-width:85%;background:{{ m.bg }};border:1px solid {{ m.bd }};padding:8px 10px⟩
                        - div
                            ⟨display:flex;gap:8px;align-items:baseline;margin-bottom:3px⟩
                          - span
                              ⟨font:600 11px 'JetBrains Mono',monospace;color:{{ m.byCol }}⟩
                              "{{ m.by }}"
                          - span
                              ⟨font-size:11px;color:#8a949e⟩
                              "{{ m.name }} · {{ m.t }}"
                        ▸ ALS {{ m.hasText }}
                          - div
                              ⟨font-size:14px;color:#e6e9ec;line-height:1.4⟩
                              "{{ m.text }}"
                        ▸ ALS {{ m.hasAtts }}
                          - div
                              ⟨margin-top:6px⟩
                            - div
                                ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                              ▸ VOOR ELK ma IN {{ m.atts }}
                                ▸ ALS {{ ma.isImg }}
                                  - button (onclick="{{ ma.onOpen }}" title="{{ ma.name }}")
                                      ⟨width:96px;height:96px;flex:none;padding:0;border:1px solid #2c343c;cursor:zoom-in;background-color:#0a0c0e;background-image:url({{ ma.url }});background-size:cover;background-position:center⟩
                                ▸ ALS {{ ma.isDoc }}
                                  - a (href="{{ ma.url }}" download="{{ ma.name }}")
                                      ⟨display:flex;align-items:center;gap:8px;height:96px;max-width:220px;padding:0 10px;border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;text-decoration:none⟩
                                    - span
                                        ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga';color:#5cc8ff⟩
                                        "description"
                                    - span
                                        ⟨display:flex;flex-direction:column;min-width:0⟩
                                      - span
                                          ⟨font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                                          "{{ ma.name }}"
                                      - span
                                          ⟨font:500 10px 'JetBrains Mono',monospace;color:#8a949e⟩
                                          "{{ ma.size }}"
                - div
                    ⟨display:flex;gap:6px;position:sticky;bottom:-18px;background:rgba(13,16,19,.98);padding:8px 0 4px⟩
                  - label (title="Foto of document")
                      ⟨display:flex;align-items:center;justify-content:center;width:40px;flex:none;border:1px solid #2c343c;background:#151a1f;color:#5cc8ff;cursor:pointer⟩
                    - span
                        ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga'⟩
                        "attach_file"
                    - input (type="file" multiple="" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt" onchange="{{ onChatAtt }}")
                        ⟨display:none⟩
                  - input (value="{{ chatText }}" onchange="{{ onChatText }}" onkeydown="{{ onChatKey }}" placeholder="Bericht aan {{ channelName }}…")
                      ⟨flex:1;min-width:0;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:9px 10px;font-size:14px;outline:none⟩
                  - button (onclick="{{ sendChat }}")
                      ⟨border:0;background:#f2b33d;color:#0a0c0e;padding:0 14px;cursor:pointer⟩
                    - span
                        ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga'⟩
                        "send"
            ▸ ALS {{ isLayers }}
              - div
                  ⟨display:flex;flex-direction:column;gap:20px⟩
                - div
                  - div
                      ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:8px⟩
                      "Basiskaart"
                  - div
                      ⟨display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px⟩
                    ▸ VOOR ELK b IN {{ basemaps }}
                      - button (onclick="{{ b.onClick }}")
                          ⟨display:flex;flex-direction:column;align-items:flex-start;gap:3px;text-align:left;padding:10px;cursor:pointer;background:{{ b.bg }};border:1px solid {{ b.bd }};color:#e6e9ec⟩
                        - span
                            ⟨width:100%;height:28px;background:{{ b.sw }};margin-bottom:4px⟩
                        - span
                            ⟨font:600 13px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase⟩
                            "{{ b.label }}"
                        - span
                            ⟨font-size:11px;color:#8a949e⟩
                            "{{ b.desc }}"
                  - div
                      ⟨display:flex;gap:6px;margin-top:8px⟩
                    - input (value="{{ tileUrl }}" onchange="{{ onTileUrl }}" onkeydown="{{ onTileKey }}" placeholder="{{ tilePh }}")
                        ⟨flex:1;min-width:0;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font:500 12px 'JetBrains Mono',monospace;outline:none⟩
                    - button (onclick="{{ addTile }}")
                        ⟨display:flex;align-items:center;gap:4px;border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;padding:6px 10px;cursor:pointer;font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga'⟩
                          "add"
                      "Bron"
                  ▸ ALS {{ hasTileErr }}
                    - div
                        ⟨font-size:12px;color:#ff5c5c;margin-top:6px⟩
                        "{{ tileErr }}"
                - div
                  - div
                      ⟨display:flex;align-items:center;justify-content:space-between;margin-bottom:8px⟩
                    - div
                        ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                        "Eigen kaarten & plattegronden"
                    - span
                        ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                        "{{ overlayCount }}"
                  - label
                      ⟨display:flex;flex-direction:column;align-items:center;gap:4px;border:1px dashed #5cc8ff;background:rgba(92,200,255,.05);color:#5cc8ff;padding:14px;cursor:pointer;text-align:center⟩
                    - span
                        ⟨font-family:'Material Symbols Sharp';font-size:24px;line-height:1;font-feature-settings:'liga'⟩
                        "upload_file"
                    - span
                        ⟨font:600 13px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                        "Plattegrond laden"
                    - span
                        ⟨font-size:11px;color:#8a949e⟩
                        "PNG of JPG van een gebouw, terrein of evenement"
                    - input (type="file" accept="image/*" onchange="{{ onOverlayFile }}")
                        ⟨display:none⟩
                  ▸ ALS {{ hasFloors }}
                    - div
                        ⟨display:flex;align-items:center;gap:6px;margin-top:10px;flex-wrap:wrap⟩
                      - span
                          ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                          "Verdieping"
                      ▸ VOOR ELK f IN {{ floorFilter }}
                        - button (onclick="{{ f.onClick }}")
                            ⟨min-width:34px;padding:4px 8px;cursor:pointer;border:1px solid {{ f.bd }};background:{{ f.bg }};color:{{ f.fg }};font:600 11px 'JetBrains Mono',monospace⟩
                            "{{ f.label }}"
                  - div
                      ⟨display:flex;flex-direction:column;gap:8px;margin-top:10px⟩
                    ▸ VOOR ELK o IN {{ overlayList }}
                      - div
                          ⟨display:flex;flex-direction:column;gap:8px;padding:10px;background:#12161a;border:1px solid {{ o.bd }}⟩
                        - div
                            ⟨display:flex;align-items:center;gap:8px⟩
                          - div
                              ⟨width:36px;height:36px;flex:none;background-image:url({{ o.url }});background-size:cover;background-position:center;border:1px solid #2c343c⟩
                          - input (value="{{ o.name }}" onchange="{{ o.onName }}")
                              ⟨flex:1;min-width:0;background:transparent;border:0;border-bottom:1px solid #2c343c;color:#e6e9ec;padding:4px 0;font-size:14px;outline:none⟩
                          - button (onclick="{{ o.onToggle }}" title="Zichtbaar")
                              ⟨border:0;background:transparent;color:{{ o.eyeCol }};cursor:pointer;padding:2px⟩
                            - span
                                ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga'⟩
                                "{{ o.eye }}"
                          - button (onclick="{{ o.onDelete }}" title="Verwijderen")
                              ⟨border:0;background:transparent;color:#8a949e;cursor:pointer;padding:2px⟩
                            - span
                                ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga'⟩
                                "delete"
                        - div
                            ⟨display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:8px;align-items:center⟩
                          - span
                              ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                              "Dekking"
                          - input (type="range" min="10" max="100" value="{{ o.opacity }}" onchange="{{ o.onOpacity }}")
                              ⟨width:100%;accent-color:#5cc8ff⟩
                          - span
                              ⟨font:500 11px 'JetBrains Mono',monospace;color:#c3cad1;width:34px;text-align:right⟩
                              "{{ o.opacity }}%"
                        - div
                            ⟨display:flex;gap:6px;align-items:center;flex-wrap:wrap⟩
                          - select (value="{{ o.kind }}" onchange="{{ o.onKind }}")
                              ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:5px 6px;font-size:12px⟩
                            ▸ VOOR ELK k IN {{ overlayKinds }}
                              - option (value="{{ k }}")
                                  "{{ k }}"
                          - select (value="{{ o.floor }}" onchange="{{ o.onFloor }}")
                              ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:5px 6px;font-size:12px⟩
                            ▸ VOOR ELK k IN {{ floors }}
                              - option (value="{{ k }}")
                                  "{{ k }}"
                          - span
                              ⟨flex:1⟩
                          - button (onclick="{{ o.onEdit }}")
                              ⟨display:flex;align-items:center;gap:4px;border:1px solid #5cc8ff;background:{{ o.editBg }};color:{{ o.editFg }};padding:5px 8px;cursor:pointer;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                            - span
                                ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga'⟩
                                "open_with"
                            "Uitlijnen"
                          - button (onclick="{{ o.onFit }}" title="Inzoomen")
                              ⟨border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;padding:4px 6px;cursor:pointer⟩
                            - span
                                ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga'⟩
                                "zoom_in_map"
                - div
                  - div
                      ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:4px⟩
                      "Lagen"
                  ▸ VOOR ELK o IN {{ overlayToggles }}
                    - div (onclick="{{ o.onClick }}")
                        ⟨display:flex;align-items:center;gap:10px;padding:10px 2px;border-bottom:1px solid #1a1f24;cursor:pointer⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga';color:#8a949e⟩
                          "{{ o.icon }}"
                      - span
                          ⟨flex:1;font-size:14px;color:#e6e9ec⟩
                          "{{ o.label }}"
                      - span
                          ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                          "{{ o.count }}"
                      - span
                          ⟨width:34px;height:18px;border-radius:9px;background:{{ o.track }};display:flex;align-items:center;justify-content:{{ o.justify }};padding:2px⟩
                        - span
                            ⟨width:14px;height:14px;border-radius:50%;background:#e6e9ec⟩
                - div
                  - div
                      ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:4px⟩
                      "Routes & zones"
                  - label
                      ⟨display:flex;align-items:center;gap:10px;border:1px dashed #5cc8ff;background:rgba(92,200,255,.05);color:#5cc8ff;padding:10px 12px;cursor:pointer;margin:6px 0 4px⟩
                    - span
                        ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga'⟩
                        "file_open"
                    - span
                        ⟨display:flex;flex-direction:column;gap:2px⟩
                      - span
                          ⟨font:600 13px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                          "Routes & kaartdata importeren"
                      - span
                          ⟨font-size:11px;color:#8a949e⟩
                          "GPX · KML · KMZ · GeoJSON — tracks, zones, waypoints, ground overlays"
                    - input (type="file" multiple="" accept=".gpx,.kml,.kmz,.geojson,.json" onchange="{{ onGeoFile }}")
                        ⟨display:none⟩
                  ▸ ALS {{ hasImportMsg }}
                    - div
                        ⟨font:500 11px 'JetBrains Mono',monospace;color:#c3cad1;padding:4px 0 6px;white-space:pre-line⟩
                        "{{ importMsg }}"
                  ▸ ALS {{ noDrawings }}
                    - div
                        ⟨font-size:13px;color:#8a949e;padding:6px 0⟩
                        "Gebruik Route of Zone om iets te tekenen, of importeer een bestand."
                  ▸ VOOR ELK d IN {{ drawingList }}
                    - div
                        ⟨display:flex;align-items:center;gap:10px;padding:8px 2px;border-bottom:1px solid #1a1f24⟩
                      - span
                          ⟨width:10px;height:10px;background:{{ d.col }}⟩
                      - span
                          ⟨flex:1;font-size:13px;color:#e6e9ec⟩
                          "{{ d.name }}"
                      - span
                          ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                          "{{ d.info }}"
                      - button (onclick="{{ d.onFit }}" title="Inzoomen")
                          ⟨border:0;background:transparent;color:#8a949e;cursor:pointer;padding:2px⟩
                        - span
                            ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                            "zoom_in_map"
                      - button (onclick="{{ d.onDelete }}")
                          ⟨border:0;background:transparent;color:#8a949e;cursor:pointer;padding:2px⟩
                        - span
                            ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                            "delete"
            ▸ ALS {{ isOffline }}
              - div
                  ⟨display:flex;flex-direction:column;gap:16px⟩
                - div
                    ⟨padding:12px;background:#12161a;border:1px solid #232a31⟩
                  - div
                      ⟨display:flex;justify-content:space-between;font-size:13px⟩
                    - span
                        ⟨color:#c3cad1⟩
                        "Opslag op apparaat"
                    - span
                        ⟨font-family:'JetBrains Mono',monospace;color:#e6e9ec⟩
                        "{{ storage.used }}"
                  - div
                      ⟨height:6px;background:#0a0c0e;margin-top:8px⟩
                    - div
                        ⟨height:6px;width:{{ storage.pct }};background:#f2b33d⟩
                ▸ ALS {{ isDownloading }}
                  - div
                      ⟨padding:12px;border:1px solid #f2b33d⟩
                    - div
                        ⟨display:flex;justify-content:space-between;font-size:13px⟩
                      - span
                          ⟨color:#f2b33d⟩
                          "Huidige weergave downloaden…"
                      - span
                          ⟨font-family:'JetBrains Mono',monospace⟩
                          "{{ dlPct }}"
                    - div
                        ⟨height:4px;background:#0a0c0e;margin-top:8px⟩
                      - div
                          ⟨height:4px;width:{{ dlPct }};background:#f2b33d⟩
                ▸ ALS {{ notDownloading }}
                  - button (onclick="{{ startDownload }}")
                      ⟨display:flex;align-items:center;justify-content:center;gap:6px;border:1px dashed #f2b33d;background:rgba(242,179,61,.06);color:#f2b33d;padding:10px;cursor:pointer;font:600 13px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                    - span
                        ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga'⟩
                        "download"
                    "Huidige weergave downloaden"
                - div
                  - div
                      ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:4px⟩
                      "Gedownloade gebieden"
                  ▸ VOOR ELK r IN {{ regions }}
                    - div
                        ⟨display:grid;grid-template-columns:minmax(0,1fr) auto;gap:4px 10px;padding:10px 2px;border-bottom:1px solid #1a1f24⟩
                      - div
                          ⟨font-size:14px;font-weight:500;color:#e6e9ec⟩
                          "{{ r.name }}"
                      - div
                          ⟨font:500 12px 'JetBrains Mono',monospace;color:#e6e9ec;text-align:right⟩
                          "{{ r.size }}"
                      - div
                          ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                          "{{ r.zoom }} · {{ r.base }}"
                      - div
                          ⟨font-size:11px;color:#8a949e;text-align:right⟩
                          "{{ r.date }}"
      ▸ ALS {{ isBoard }}
        - div
            ⟨{{ boardStyle }}⟩
          - div
              ⟨display:flex;flex-direction:column;min-height:0;border-right:1px solid #232a31;background:#0d1013⟩
            - div
                ⟨padding:14px 14px 10px;border-bottom:1px solid #232a31⟩
              - div
                  ⟨font:600 15px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#e6e9ec⟩
                  "Teams"
              - div
                  ⟨font-size:12px;color:#8a949e;margin-top:3px;text-wrap:pretty⟩
                  "Sleep een team of teamlid op een taak of melding om toe te wijzen. Klik om te filteren."
            - div
                ⟨flex:1;min-height:0;overflow-y:auto;padding:8px;display:flex;flex-direction:column;gap:8px⟩
              - button (onclick="{{ bAll }}")
                  ⟨width:100%;text-align:left;border:0;background:{{ bAllBg }};color:#e6e9ec;padding:8px 10px;cursor:pointer;font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                  "Alle teams"
              ▸ VOOR ELK g IN {{ bTeams }}
                - div
                    ⟨display:flex;flex-direction:column;gap:1px⟩
                  - div (draggable="true" ondragstart="{{ g.onDragStart }}" onclick="{{ g.onClick }}")
                      ⟨display:flex;align-items:center;gap:8px;padding:8px 10px;cursor:grab;background:{{ g.bg }};border:1px solid {{ g.bd }}⟩
                    - span
                        ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga';color:#f2b33d⟩
                        "groups"
                    - div
                        ⟨flex:1;min-width:0⟩
                      - div
                          ⟨font:600 14px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#e6e9ec⟩
                          "{{ g.name }}"
                      - div
                          ⟨font-size:11px;color:#8a949e⟩
                          "{{ g.city }}"
                    - span (title="Open taken")
                        ⟨font:600 11px 'JetBrains Mono',monospace;color:#f2b33d⟩
                        "{{ g.n }}"
                  ▸ VOOR ELK m IN {{ g.members }}
                    - div (draggable="true" ondragstart="{{ m.onDragStart }}" onclick="{{ m.onClick }}" style-hover="background:#161b20")
                        ⟨display:grid;grid-template-columns:8px 32px minmax(0,1fr) auto;align-items:center;gap:8px;padding:7px 10px 7px 16px;cursor:grab;background:{{ m.bg }};border:1px solid {{ m.bd }};opacity:{{ m.op }}⟩
                      - span
                          ⟨width:8px;height:8px;border-radius:50%;background:{{ m.dot }}⟩
                      - span
                          ⟨font:600 11px 'JetBrains Mono',monospace;color:#5cc8ff⟩
                          "{{ m.id }}"
                      - span
                          ⟨font-size:13px;color:#e6e9ec;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                          "{{ m.name }}"
                      - span
                          ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                          "{{ m.n }}"
          - div
              ⟨display:flex;flex-direction:column;min-height:0;min-width:0⟩
            - div
                ⟨padding:12px 14px;border-bottom:1px solid #232a31;display:flex;flex-direction:column;gap:10px⟩
              - div
                  ⟨font:600 15px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#e6e9ec⟩
                "Taken"
                - span
                    ⟨color:#8a949e;font-weight:500⟩
                    "· {{ bFocusLabel }}"
              - div
                  ⟨display:flex;gap:6px;flex-wrap:wrap⟩
                - input (value="{{ bTitle }}" onchange="{{ onBTitle }}" onkeydown="{{ onBKey }}" placeholder="Nieuwe taak…")
                    ⟨flex:2;min-width:160px;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;outline:none⟩
                - select (value="{{ bWho }}" onchange="{{ onBWho }}")
                    ⟨flex:1;min-width:120px;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px⟩
                  ▸ VOOR ELK o IN {{ assigneeOptions }}
                    - option (value="{{ o.id }}")
                        "{{ o.label }}"
                - select (value="{{ bInc }}" onchange="{{ onBInc }}")
                    ⟨flex:1;min-width:120px;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:7px 8px;font-size:13px⟩
                  ▸ VOOR ELK o IN {{ bIncOptions }}
                    - option (value="{{ o.id }}")
                        "{{ o.label }}"
                - button (onclick="{{ addB }}")
                    ⟨border:0;background:#f2b33d;color:#0a0c0e;padding:8px 12px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                    "Toevoegen"
              - div
                  ⟨display:flex;gap:6px;overflow-x:auto;padding-bottom:2px⟩
                ▸ VOOR ELK i IN {{ bIncs }}
                  - div (ondragover="{{ i.onDragOver }}" ondrop="{{ i.onDrop }}" onclick="{{ i.onClick }}" title="Sleep teamleden hierheen om toe te wijzen")
                      ⟨flex:none;width:188px;padding:8px 10px;background:#12161a;border:1px solid #232a31;border-left:3px solid {{ i.prioCol }};cursor:pointer⟩
                    - div
                        ⟨display:flex;gap:6px;align-items:center⟩
                      - span
                          ⟨font:700 10px 'JetBrains Mono',monospace;color:#0a0c0e;background:{{ i.prioCol }};padding:0 4px⟩
                          "{{ i.prio }}"
                      - span
                          ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                          "{{ i.id }}"
                      - span
                          ⟨flex:1⟩
                      - span (title="{{ i.status }}")
                          ⟨width:7px;height:7px;border-radius:50%;background:{{ i.statusCol }}⟩
                    - div
                        ⟨font-size:13px;font-weight:600;color:#e6e9ec;margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                        "{{ i.title }}"
                    - div
                        ⟨font:500 10px 'JetBrains Mono',monospace;color:#5cc8ff;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                        "{{ i.who }}"
            - div
                ⟨flex:1;min-height:0;display:grid;grid-template-columns:repeat(3,minmax(190px,1fr));gap:10px;padding:12px 14px;overflow:auto⟩
              ▸ VOOR ELK col IN {{ bCols }}
                - div (ondragover="{{ col.onDragOver }}" ondrop="{{ col.onDrop }}")
                    ⟨display:flex;flex-direction:column;min-height:0;background:#0f1215;border:1px solid #1d2329⟩
                  - div
                      ⟨display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:2px solid {{ col.col }}⟩
                    - span
                        ⟨font:600 14px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#e6e9ec⟩
                        "{{ col.st }}"
                    - span
                        ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                        "{{ col.n }}"
                  - div
                      ⟨flex:1;min-height:0;overflow-y:auto;padding:8px;display:flex;flex-direction:column;gap:8px⟩
                    ▸ ALS {{ col.empty }}
                      - div
                          ⟨font-size:12px;color:#5b646d;text-align:center;padding:16px 0;border:1px dashed #232a31⟩
                          "Sleep taken hierheen"
                    ▸ VOOR ELK k IN {{ col.cards }}
                      - div (draggable="true" ondragstart="{{ k.onDragStart }}" ondragover="{{ k.onDragOver }}" ondrop="{{ k.onDrop }}")
                          ⟨display:flex;flex-direction:column;gap:7px;padding:10px;background:#151a1f;border:1px solid #2a3239;cursor:grab⟩
                        - div
                            ⟨display:flex;align-items:center;gap:6px⟩
                          - span
                              ⟨font:700 10px 'JetBrains Mono',monospace;color:{{ k.prioCol }};border:1px solid {{ k.prioCol }};padding:0 4px⟩
                              "{{ k.prio }}"
                          ▸ ALS {{ k.hasInc }}
                            - span (onclick="{{ k.onInc }}")
                                ⟨font:500 11px 'JetBrains Mono',monospace;color:#f2b33d;cursor:pointer;text-decoration:underline⟩
                                "{{ k.inc }}"
                          - span
                              ⟨flex:1⟩
                          - span
                              ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                              "{{ k.due }}"
                        - div
                            ⟨font-size:14px;font-weight:500;color:{{ k.tcol }};text-decoration:{{ k.deco }};text-wrap:pretty⟩
                            "{{ k.title }}"
                        - div
                            ⟨display:flex;flex-wrap:wrap;gap:4px⟩
                          ▸ VOOR ELK w IN {{ k.who }}
                            - span
                                ⟨display:flex;align-items:center;gap:2px;border:1px solid #2c343c;padding:1px 2px 1px 6px;font:600 11px 'JetBrains Mono',monospace;color:{{ w.col }}⟩
                              "{{ w.label }}"
                              - button (onclick="{{ w.onRemove }}")
                                  ⟨border:0;background:transparent;color:#8a949e;cursor:pointer;padding:0 2px;display:flex⟩
                                - span
                                    ⟨font-family:'Material Symbols Sharp';font-size:13px;line-height:1;font-feature-settings:'liga'⟩
                                    "close"
                        ▸ ALS {{ k.hasAtts }}
                          - div
                              ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                            ▸ VOOR ELK ka IN {{ k.atts }}
                              ▸ ALS {{ ka.isImg }}
                                - button (onclick="{{ ka.onOpen }}" title="{{ ka.name }}")
                                    ⟨width:44px;height:44px;flex:none;padding:0;border:1px solid #2c343c;cursor:zoom-in;background-color:#0a0c0e;background-image:url({{ ka.url }});background-size:cover;background-position:center⟩
                              ▸ ALS {{ ka.isDoc }}
                                - a (href="{{ ka.url }}" download="{{ ka.name }}")
                                    ⟨display:flex;align-items:center;gap:8px;height:44px;max-width:220px;padding:0 10px;border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;text-decoration:none⟩
                                  - span
                                      ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga';color:#5cc8ff⟩
                                      "description"
                                  - span
                                      ⟨display:flex;flex-direction:column;min-width:0⟩
                                    - span
                                        ⟨font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                                        "{{ ka.name }}"
                                    - span
                                        ⟨font:500 10px 'JetBrains Mono',monospace;color:#8a949e⟩
                                        "{{ ka.size }}"
                        - div
                            ⟨display:flex;align-items:center;gap:6px;padding-top:6px;border-top:1px solid #1f252b⟩
                          - label (title="Foto of document toevoegen")
                              ⟨display:flex;align-items:center;gap:3px;color:#8a949e;cursor:pointer;font:500 11px 'JetBrains Mono',monospace⟩
                            - span
                                ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga'⟩
                                "attach_file"
                            "{{ k.nAtts }}"
                            - input (type="file" multiple="" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt" onchange="{{ k.onAtt }}")
                                ⟨display:none⟩
                          - span
                              ⟨flex:1⟩
                          - button (onclick="{{ k.onNext }}")
                              ⟨border:1px solid #3a434c;background:transparent;color:#e6e9ec;padding:3px 9px;cursor:pointer;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                              "{{ k.next }}"
          - div
              ⟨display:flex;flex-direction:column;min-height:0;border-left:1px solid #232a31;background:#0d1013⟩
            - div
                ⟨padding:14px 14px 10px;border-bottom:1px solid #232a31⟩
              - div
                  ⟨font:600 15px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#e6e9ec⟩
                  "Chat"
              - div
                  ⟨display:flex;gap:2px;margin-top:8px;background:#0a0c0e;border:1px solid #232a31;padding:2px⟩
                ▸ VOOR ELK c IN {{ channels }}
                  - button (onclick="{{ c.onClick }}")
                      ⟨flex:1;border:0;padding:5px 2px;cursor:pointer;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.06em;text-transform:uppercase;background:{{ c.bg }};color:{{ c.fg }}⟩
                      "{{ c.label }}"
            - div (ref="{{ boardChatRef }}")
                ⟨flex:1;min-height:0;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:10px⟩
              ▸ ALS {{ noMsgs }}
                - div
                    ⟨font-size:13px;color:#8a949e;text-align:center;padding:20px 0⟩
                    "Nog geen berichten in dit kanaal."
              ▸ VOOR ELK m IN {{ msgs }}
                - div
                    ⟨display:flex;flex-direction:column;align-items:{{ m.align }}⟩
                  - div
                      ⟨max-width:90%;background:{{ m.bg }};border:1px solid {{ m.bd }};padding:7px 9px⟩
                    - div
                        ⟨display:flex;gap:6px;align-items:center;margin-bottom:3px⟩
                      - span
                          ⟨font:600 11px 'JetBrains Mono',monospace;color:{{ m.byCol }}⟩
                          "{{ m.by }}"
                      - span
                          ⟨font-size:11px;color:#8a949e⟩
                          "{{ m.t }}"
                      - span
                          ⟨flex:1⟩
                      - button (onclick="{{ m.onTask }}" title="Taak maken van dit bericht" style-hover="color:#f2b33d")
                          ⟨border:0;background:transparent;color:#5b646d;cursor:pointer;padding:0;display:flex⟩
                        - span
                            ⟨font-family:'Material Symbols Sharp';font-size:15px;line-height:1;font-feature-settings:'liga'⟩
                            "add_task"
                    ▸ ALS {{ m.hasText }}
                      - div
                          ⟨font-size:13px;color:#e6e9ec;line-height:1.4⟩
                          "{{ m.text }}"
                    ▸ ALS {{ m.hasAtts }}
                      - div
                          ⟨margin-top:6px⟩
                        - div
                            ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                          ▸ VOOR ELK mb IN {{ m.atts }}
                            ▸ ALS {{ mb.isImg }}
                              - button (onclick="{{ mb.onOpen }}" title="{{ mb.name }}")
                                  ⟨width:72px;height:72px;flex:none;padding:0;border:1px solid #2c343c;cursor:zoom-in;background-color:#0a0c0e;background-image:url({{ mb.url }});background-size:cover;background-position:center⟩
                            ▸ ALS {{ mb.isDoc }}
                              - a (href="{{ mb.url }}" download="{{ mb.name }}")
                                  ⟨display:flex;align-items:center;gap:8px;height:72px;max-width:220px;padding:0 10px;border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;text-decoration:none⟩
                                - span
                                    ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga';color:#5cc8ff⟩
                                    "description"
                                - span
                                    ⟨display:flex;flex-direction:column;min-width:0⟩
                                  - span
                                      ⟨font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                                      "{{ mb.name }}"
                                  - span
                                      ⟨font:500 10px 'JetBrains Mono',monospace;color:#8a949e⟩
                                      "{{ mb.size }}"
            - div
                ⟨display:flex;gap:6px;padding:10px;border-top:1px solid #232a31⟩
              - label (title="Foto of document")
                  ⟨display:flex;align-items:center;justify-content:center;width:40px;flex:none;border:1px solid #2c343c;background:#151a1f;color:#5cc8ff;cursor:pointer⟩
                - span
                    ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga'⟩
                    "attach_file"
                - input (type="file" multiple="" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt" onchange="{{ onChatAtt }}")
                    ⟨display:none⟩
              - input (value="{{ chatText }}" onchange="{{ onChatText }}" onkeydown="{{ onChatKey }}" placeholder="Bericht aan {{ channelName }}…")
                  ⟨flex:1;min-width:0;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;outline:none⟩
              - button (onclick="{{ sendChat }}")
                  ⟨border:0;background:#f2b33d;color:#0a0c0e;padding:0 12px;cursor:pointer⟩
                - span
                    ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                    "send"
      ▸ ALS {{ isFieldPhone }}
        - div
            ⟨{{ fieldScreenStyle }}⟩
          ▸ ALS {{ isNu }}
            ▸ ALS {{ hasUnack }}
              - button (onclick="{{ toBolo }}")
                  ⟨display:flex;align-items:center;gap:10px;width:100%;min-height:48px;border:1px solid #ff5f57;background:rgba(255,95,87,.1);color:#ff5f57;padding:8px 12px;cursor:pointer;text-align:left⟩
                - span
                    ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga'⟩
                    "campaign"
                - span
                    ⟨flex:1;font:600 14px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                    "{{ unackLabel }}"
                - span
                    ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga'⟩
                    "chevron_right"
            - div
                ⟨display:flex;align-items:center;gap:12px⟩
              - div
                  ⟨width:52px;height:40px;border:2px solid #5cc8ff;background:rgba(10,30,44,.9);display:flex;align-items:center;justify-content:center;font:700 13px 'JetBrains Mono',monospace;color:#5cc8ff⟩
                  "{{ fMe.id }}"
              - div
                  ⟨min-width:0⟩
                - div
                    ⟨font-size:18px;font-weight:600;color:#e6e9ec⟩
                    "{{ fMe.name }}"
                - div
                    ⟨font-size:13px;color:#8a949e⟩
                    "{{ fMe.role }} · {{ fMe.team }} · {{ fMe.post }}"
            - div
                ⟨display:flex;flex-direction:column;gap:10px;padding:14px;background:#12161a;border:1px solid {{ fShift.bd }}⟩
              - div
                  ⟨display:flex;align-items:center;gap:10px⟩
                - span
                    ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga';color:#8a949e⟩
                    "schedule"
                - div
                    ⟨flex:1;min-width:0⟩
                  - div
                      ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
                      "Dienst · {{ fShift.project }}"
                  - div
                      ⟨font-size:16px;font-weight:600;color:#e6e9ec⟩
                      "{{ fShift.label }}"
              ▸ ALS {{ fShift.hasItems }}
                - div
                    ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                  ▸ VOOR ELK fi IN {{ fShift.items }}
                    - span
                        ⟨display:flex;align-items:center;gap:5px;border:1px solid #2c343c;padding:4px 8px;font-size:12px;color:#e6e9ec⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga';color:#8a949e⟩
                          "{{ fi.icon }}"
                      - span
                          ⟨font:600 11px 'JetBrains Mono',monospace⟩
                          "{{ fi.code }}"
                      "{{ fi.name }}"
              ▸ ALS {{ fShift.warn }}
                - div
                    ⟨font-size:13px;color:#ff5f57⟩
                    "Lever je materiaal in bij de meldkamer voordat je uitklokt."
              - button (onclick="{{ fShift.onToggle }}")
                  ⟨min-height:52px;border:1px solid {{ fShift.btnBd }};background:{{ fShift.btnBg }};color:{{ fShift.btnFg }};cursor:pointer;font:700 15px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                  "{{ fShift.btn }}"
            - div
              - div
                  ⟨font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:8px⟩
                  "Mijn status"
              - div
                  ⟨display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px⟩
                ▸ VOOR ELK o IN {{ fStatus }}
                  - button (onclick="{{ o.onClick }}")
                      ⟨min-height:52px;border:1px solid {{ o.bd }};background:{{ o.bg }};color:{{ o.fg }};cursor:pointer;font:700 14px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                      "{{ o.label }}"
            - div
              - div
                  ⟨font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:8px⟩
                  "Huidige opdracht"
              ▸ ALS {{ hasCur }}
                - div
                    ⟨display:flex;flex-direction:column;gap:10px;padding:14px;background:#12161a;border:1px solid #232a31;border-left:4px solid {{ cur.prioCol }}⟩
                  - div
                      ⟨display:flex;align-items:center;gap:8px⟩
                    - span
                        ⟨font:700 11px 'JetBrains Mono',monospace;color:#0a0c0e;background:{{ cur.prioCol }};padding:1px 6px⟩
                        "{{ cur.prio }}"
                    - span
                        ⟨font:500 12px 'JetBrains Mono',monospace;color:#8a949e⟩
                        "{{ cur.id }}"
                    - span
                        ⟨flex:1⟩
                    - span
                        ⟨display:flex;align-items:center;gap:5px;font-size:12px;color:{{ cur.statusCol }}⟩
                      - span
                          ⟨width:7px;height:7px;border-radius:50%;background:{{ cur.statusCol }}⟩
                      "{{ cur.status }}"
                  - div
                      ⟨font-size:20px;font-weight:600;color:#e6e9ec;line-height:1.2⟩
                      "{{ cur.title }}"
                  - div
                      ⟨font-size:13px;color:#8a949e⟩
                      "{{ cur.type }} · {{ cur.loc }}"
                  - div
                      ⟨font-size:14px;color:#c3cad1;line-height:1.45;text-wrap:pretty⟩
                      "{{ cur.desc }}"
                  - div
                      ⟨display:flex;align-items:baseline;justify-content:space-between;gap:10px;padding-top:8px;border-top:1px solid #1f252b⟩
                    - span
                        ⟨font:600 16px 'JetBrains Mono',monospace;color:#e6e9ec⟩
                        "{{ cur.dist }}"
                    - span
                        ⟨font-size:12px;color:#5cc8ff⟩
                        "{{ cur.via }}"
                  ▸ ALS {{ cur.hasAtts }}
                    - div
                        ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                      ▸ VOOR ELK ca IN {{ cur.atts }}
                        ▸ ALS {{ ca.isImg }}
                          - button (onclick="{{ ca.onOpen }}" title="{{ ca.name }}")
                              ⟨width:64px;height:64px;flex:none;padding:0;border:1px solid #2c343c;cursor:zoom-in;background-color:#0a0c0e;background-image:url({{ ca.url }});background-size:cover;background-position:center⟩
                        ▸ ALS {{ ca.isDoc }}
                          - a (href="{{ ca.url }}" download="{{ ca.name }}")
                              ⟨display:flex;align-items:center;gap:8px;height:64px;max-width:220px;padding:0 10px;border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;text-decoration:none⟩
                            - span
                                ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga';color:#5cc8ff⟩
                                "description"
                            - span
                                ⟨display:flex;flex-direction:column;min-width:0⟩
                              - span
                                  ⟨font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                                  "{{ ca.name }}"
                              - span
                                  ⟨font:500 10px 'JetBrains Mono',monospace;color:#8a949e⟩
                                  "{{ ca.size }}"
                  - div
                      ⟨display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px⟩
                    - button (onclick="{{ cur.onNav }}")
                        ⟨display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;min-height:56px;border:0;background:#f2b33d;color:#0a0c0e;cursor:pointer;font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga'⟩
                          "navigation"
                      "Navigeer"
                    - button (onclick="{{ cur.onArrive }}")
                        ⟨display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;min-height:56px;border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;cursor:pointer;font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga';color:#f2b33d⟩
                          "where_to_vote"
                      "Ter plaatse"
                    - label
                        ⟨display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;min-height:56px;border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;cursor:pointer;font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga';color:#f2b33d⟩
                          "add_a_photo"
                      "Foto"
                      - input (type="file" multiple="" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt" onchange="{{ cur.onAtt }}")
                          ⟨display:none⟩
              ▸ ALS {{ noCur }}
                - div
                    ⟨padding:16px;background:#12161a;border:1px solid #232a31;font-size:14px;color:#8a949e;line-height:1.45;text-wrap:pretty⟩
                    "Geen actieve opdracht. Zet je status op Beschikbaar, dan kan de meldkamer je inzetten."
              ▸ ALS {{ hasMoreCur }}
                - div
                    ⟨display:flex;flex-direction:column;margin-top:8px⟩
                  ▸ VOOR ELK i IN {{ moreCur }}
                    - div
                        ⟨display:flex;align-items:center;gap:10px;min-height:48px;border-bottom:1px solid #1a1f24⟩
                      - span
                          ⟨font:700 10px 'JetBrains Mono',monospace;color:#0a0c0e;background:{{ i.prioCol }};padding:1px 5px⟩
                          "{{ i.prio }}"
                      - span
                          ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                          "{{ i.id }}"
                      - span
                          ⟨flex:1;min-width:0;font-size:14px;color:#e6e9ec;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                          "{{ i.title }}"
                      - button (onclick="{{ i.onNav }}")
                          ⟨width:44px;height:44px;border:1px solid #2c343c;background:#151a1f;color:#f2b33d;cursor:pointer;display:flex;align-items:center;justify-content:center⟩
                        - span
                            ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga'⟩
                            "navigation"
            - div
              - div
                  ⟨font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:8px⟩
                "Mijn taken"
                - span
                    ⟨font-family:'JetBrains Mono',monospace;color:#c3cad1⟩
                    "{{ myTaskCount }}"
              ▸ ALS {{ noMyTasks }}
                - div
                    ⟨font-size:14px;color:#8a949e⟩
                    "Geen open taken."
              - div
                  ⟨display:flex;flex-direction:column;gap:6px⟩
                ▸ VOOR ELK t IN {{ myTasks }}
                  - div
                      ⟨display:flex;align-items:center;gap:10px;padding:10px 12px;background:#12161a;border:1px solid #232a31⟩
                    - div
                        ⟨flex:1;min-width:0⟩
                      - div
                          ⟨font-size:15px;font-weight:500;color:#e6e9ec;text-wrap:pretty⟩
                          "{{ t.title }}"
                      - div
                          ⟨display:flex;gap:8px;align-items:center;margin-top:4px;flex-wrap:wrap⟩
                        - span
                            ⟨font:700 10px 'JetBrains Mono',monospace;color:{{ t.prioCol }};border:1px solid {{ t.prioCol }};padding:0 4px⟩
                            "{{ t.prio }}"
                        - span
                            ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:{{ t.stCol }}⟩
                            "{{ t.st }}"
                        - span
                            ⟨font:500 11px 'JetBrains Mono',monospace;color:#f2b33d⟩
                            "{{ t.inc }}"
                        - span
                            ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                            "{{ t.due }}"
                    - label (title="Foto toevoegen")
                        ⟨width:44px;height:44px;flex:none;border:1px solid #2c343c;background:#151a1f;color:#8a949e;cursor:pointer;display:flex;align-items:center;justify-content:center⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga'⟩
                          "add_a_photo"
                      - input (type="file" multiple="" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt" onchange="{{ t.onAtt }}")
                          ⟨display:none⟩
                    - button (onclick="{{ t.onNext }}")
                        ⟨min-width:64px;height:44px;flex:none;border:0;background:{{ t.nextBg }};color:{{ t.nextFg }};cursor:pointer;font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                        "{{ t.next }}"
          ▸ ALS {{ isMelden }}
            ▸ ALS {{ hasSent }}
              - div
                  ⟨display:flex;align-items:center;gap:10px;padding:12px;border:1px solid #4fd18b;background:rgba(79,209,139,.08);color:#4fd18b;font-size:14px⟩
                - span
                    ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga'⟩
                    "check_circle"
                "{{ sentMsg }}"
            - div
              - div
                  ⟨font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:8px⟩
                  "Wat wil je melden?"
              - div
                  ⟨display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px⟩
                ▸ VOOR ELK o IN {{ fTypes }}
                  - button (onclick="{{ o.onClick }}")
                      ⟨display:flex;align-items:center;gap:10px;min-height:56px;padding:0 12px;border:1px solid {{ o.bd }};background:{{ o.bg }};color:{{ o.fg }};cursor:pointer;text-align:left;font-size:14px;font-weight:500⟩
                    - span
                        ⟨font-family:'Material Symbols Sharp';font-size:22px;line-height:1;font-feature-settings:'liga'⟩
                        "{{ o.icon }}"
                    "{{ o.label }}"
            - div
              - div
                  ⟨font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:8px⟩
                  "Urgentie"
              - div
                  ⟨display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px⟩
                ▸ VOOR ELK p IN {{ fPrios }}
                  - button (onclick="{{ p.onClick }}")
                      ⟨display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:52px;border:1px solid {{ p.bd }};background:{{ p.bg }};color:{{ p.fg }};cursor:pointer⟩
                    - span
                        ⟨font:700 14px 'JetBrains Mono',monospace⟩
                        "{{ p.label }}"
                    - span
                        ⟨font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                        "{{ p.sub }}"
            - input (value="{{ newInc.title }}" onchange="{{ onNewIncTitle }}" placeholder="Korte titel, bijv. zwarte fiets gestolen")
                ⟨width:100%;min-height:48px;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;outline:none;font-size:15px⟩
            - textarea (value="{{ newInc.desc }}" onchange="{{ onNewIncDesc }}" rows="4" placeholder="Wat zie je? Kenmerken, richting, betrokkenen…")
                ⟨width:100%;background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:8px 10px;font-size:14px;outline:none;font-size:15px;resize:vertical⟩
            - label
                ⟨display:flex;align-items:center;justify-content:center;gap:10px;min-height:64px;border:1px dashed #5cc8ff;background:rgba(92,200,255,.05);color:#5cc8ff;cursor:pointer;font:600 14px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
              - span
                  ⟨font-family:'Material Symbols Sharp';font-size:26px;line-height:1;font-feature-settings:'liga'⟩
                  "add_a_photo"
              "Foto maken of bestand kiezen"
              - input (type="file" multiple="" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt" onchange="{{ onFAtt }}")
                  ⟨display:none⟩
            ▸ ALS {{ hasFAtts }}
              - div
                  ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                ▸ VOOR ELK fa IN {{ fAtts }}
                  ▸ ALS {{ fa.isImg }}
                    - button (onclick="{{ fa.onOpen }}" title="{{ fa.name }}")
                        ⟨width:72px;height:72px;flex:none;padding:0;border:1px solid #2c343c;cursor:zoom-in;background-color:#0a0c0e;background-image:url({{ fa.url }});background-size:cover;background-position:center⟩
                  ▸ ALS {{ fa.isDoc }}
                    - a (href="{{ fa.url }}" download="{{ fa.name }}")
                        ⟨display:flex;align-items:center;gap:8px;height:72px;max-width:220px;padding:0 10px;border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;text-decoration:none⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga';color:#5cc8ff⟩
                          "description"
                      - span
                          ⟨display:flex;flex-direction:column;min-width:0⟩
                        - span
                            ⟨font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                            "{{ fa.name }}"
                        - span
                            ⟨font:500 10px 'JetBrains Mono',monospace;color:#8a949e⟩
                            "{{ fa.size }}"
            - div
                ⟨display:flex;align-items:center;gap:6px;font-size:13px;color:#8a949e⟩
              - span
                  ⟨font-family:'Material Symbols Sharp';font-size:16px;line-height:1;font-feature-settings:'liga';color:#4fd18b⟩
                  "my_location"
              "Locatie: jouw positie"
              - span
                  ⟨font-family:'JetBrains Mono',monospace;color:#c3cad1⟩
                  "{{ fPos }}"
            - button (onclick="{{ createInc }}")
                ⟨min-height:56px;border:0;background:#f2b33d;color:#0a0c0e;cursor:pointer;font:700 16px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase⟩
                "Versturen naar meldkamer"
            ▸ ALS {{ hasMyReports }}
              - div
                - div
                    ⟨font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e;margin-bottom:8px⟩
                    "Mijn meldingen"
                ▸ VOOR ELK r IN {{ myReports }}
                  - div
                      ⟨display:flex;align-items:center;gap:10px;min-height:48px;border-bottom:1px solid #1a1f24⟩
                    - span
                        ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                        "{{ r.time }}"
                    - span
                        ⟨flex:1;min-width:0;font-size:14px;color:#e6e9ec;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                        "{{ r.title }}"
                    - span
                        ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                        "{{ r.nAtts }}"
                    - span
                        ⟨font-size:12px;color:{{ r.statusCol }}⟩
                        "{{ r.status }}"
          ▸ ALS {{ isBolo }}
            ▸ ALS {{ noFBul }}
              - div
                  ⟨font-size:14px;color:#8a949e;text-align:center;padding:24px 0⟩
                  "Geen actieve berichten."
            ▸ VOOR ELK fb IN {{ fBul }}
              - div
                  ⟨display:flex;flex-direction:column;gap:9px;padding:14px;background:#12161a;border:1px solid {{ fb.bd }};border-left:4px solid {{ fb.col }}⟩
                - div
                    ⟨display:flex;align-items:center;gap:8px⟩
                  - span
                      ⟨font:700 11px 'JetBrains Mono',monospace;color:#0a0c0e;background:{{ fb.col }};padding:1px 6px;text-transform:uppercase⟩
                      "{{ fb.type }}"
                  ▸ ALS {{ fb.high }}
                    - span
                        ⟨font:700 11px 'JetBrains Mono',monospace;color:#ff5f57⟩
                        "HOOG"
                  - span
                      ⟨flex:1⟩
                  - span
                      ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                      "{{ fb.dist }}"
                - div
                    ⟨font-size:18px;font-weight:600;color:#e6e9ec;line-height:1.25⟩
                    "{{ fb.title }}"
                ▸ ALS {{ fb.hasImg }}
                  - button (onclick="{{ fb.onHero }}")
                      ⟨width:100%;height:200px;padding:0;cursor:zoom-in;background-color:#0a0c0e;background-image:url({{ fb.img }});background-size:cover;background-position:center;border:1px solid #2c343c⟩
                - div
                    ⟨font-size:15px;color:#c3cad1;line-height:1.5;text-wrap:pretty⟩
                    "{{ fb.text }}"
                ▸ ALS {{ fb.hasDocs }}
                  - div
                      ⟨display:flex;flex-wrap:wrap;gap:6px⟩
                    ▸ VOOR ELK fd IN {{ fb.docs }}
                      ▸ ALS {{ fd.isImg }}
                        - button (onclick="{{ fd.onOpen }}" title="{{ fd.name }}")
                            ⟨width:56px;height:56px;flex:none;padding:0;border:1px solid #2c343c;cursor:zoom-in;background-color:#0a0c0e;background-image:url({{ fd.url }});background-size:cover;background-position:center⟩
                      ▸ ALS {{ fd.isDoc }}
                        - a (href="{{ fd.url }}" download="{{ fd.name }}")
                            ⟨display:flex;align-items:center;gap:8px;height:56px;max-width:220px;padding:0 10px;border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;text-decoration:none⟩
                          - span
                              ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga';color:#5cc8ff⟩
                              "description"
                          - span
                              ⟨display:flex;flex-direction:column;min-width:0⟩
                            - span
                                ⟨font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                                "{{ fd.name }}"
                            - span
                                ⟨font:500 10px 'JetBrains Mono',monospace;color:#8a949e⟩
                                "{{ fd.size }}"
                - div
                    ⟨font-size:12px;color:#8a949e⟩
                    "{{ fb.meta }}"
                - div
                    ⟨display:grid;grid-template-columns:1fr 1fr;gap:6px⟩
                  ▸ ALS {{ fb.hasLoc }}
                    - button (onclick="{{ fb.onMap }}")
                        ⟨min-height:48px;border:1px solid #2c343c;background:#151a1f;color:#e6e9ec;cursor:pointer;font:600 13px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                        "Op kaart"
                  ▸ ALS {{ fb.canAck }}
                    - button (onclick="{{ fb.onAck }}")
                        ⟨min-height:48px;border:0;background:#f2b33d;color:#0a0c0e;cursor:pointer;font:700 13px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                        "Gelezen"
                  ▸ ALS {{ fb.acked }}
                    - div
                        ⟨min-height:48px;display:flex;align-items:center;justify-content:center;gap:6px;color:#4fd18b;font:600 13px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                      - span
                          ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                          "check"
                      "Gelezen"
        - div
            ⟨position:absolute;left:0;right:0;bottom:0;height:76px;z-index:16;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));background:rgba(10,12,14,.98);border-top:1px solid #232a31;padding-bottom:14px⟩
          ▸ VOOR ELK t IN {{ fTabs }}
            - button (onclick="{{ t.onClick }}")
                ⟨position:relative;border:0;border-top:2px solid {{ t.bar }};background:transparent;color:{{ t.fg }};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;cursor:pointer;padding:0⟩
              - span
                  ⟨font-family:'Material Symbols Sharp';font-size:24px;line-height:1;font-feature-settings:'liga'⟩
                  "{{ t.icon }}"
              - span
                  ⟨font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                  "{{ t.label }}"
              ▸ ALS {{ t.hasBadge }}
                - span
                    ⟨position:absolute;top:6px;left:calc(50% + 6px);min-width:18px;height:18px;padding:0 5px;border-radius:9px;background:#ff5f57;color:#0a0c0e;font:700 11px 'JetBrains Mono',monospace;display:flex;align-items:center;justify-content:center⟩
                    "{{ t.badge }}"
      ▸ ALS {{ hasViewer }}
        - div (onclick="{{ closeViewer }}")
            ⟨position:absolute;inset:0;z-index:40;background:rgba(5,6,7,.95);display:flex;flex-direction:column⟩
          - div
              ⟨display:flex;align-items:center;gap:10px;padding:12px 14px;border-bottom:1px solid #232a31⟩
            - span
                ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga';color:#5cc8ff⟩
                "image"
            - div
                ⟨flex:1;min-width:0⟩
              - div
                  ⟨font-size:14px;color:#e6e9ec;white-space:nowrap;overflow:hidden;text-overflow:ellipsis⟩
                  "{{ viewer.name }}"
              - div
                  ⟨font:500 11px 'JetBrains Mono',monospace;color:#8a949e⟩
                  "{{ viewer.by }} · {{ viewer.t }} · {{ viewer.size }}"
            - a (href="{{ viewer.url }}" download="{{ viewer.name }}" onclick="{{ stopProp }}" title="Downloaden")
                ⟨width:40px;height:40px;display:flex;align-items:center;justify-content:center;border:1px solid #2c343c;color:#e6e9ec⟩
              - span
                  ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga'⟩
                  "download"
            - button (onclick="{{ closeViewer }}" title="Sluiten")
                ⟨width:40px;height:40px;display:flex;align-items:center;justify-content:center;border:1px solid #2c343c;background:transparent;color:#e6e9ec;cursor:pointer⟩
              - span
                  ⟨font-family:'Material Symbols Sharp';font-size:20px;line-height:1;font-feature-settings:'liga'⟩
                  "close"
          - div
              ⟨flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:16px⟩
            - div (title="{{ viewer.name }}")
                ⟨width:100%;height:100%;background-image:url({{ viewer.url }});background-size:contain;background-position:center;background-repeat:no-repeat⟩
  ▸ ALS {{ hasReport }}
    - div (data-report="1")
        ⟨position:fixed;inset:0;z-index:100;background:#1a1d21;overflow-y:auto;display:flex;flex-direction:column;align-items:center⟩
      - div (data-noprint="1")
          ⟨position:sticky;top:0;z-index:2;width:100%;background:rgba(10,12,14,.98);border-bottom:1px solid #232a31;padding:12px 20px;display:flex;flex-direction:column;gap:10px⟩
        - div
            ⟨display:flex;align-items:center;gap:12px;flex-wrap:wrap⟩
          - div
              ⟨font:700 18px 'Barlow Condensed',sans-serif;letter-spacing:.12em;color:#f2b33d⟩
              "SAK"
          - div
              ⟨font:600 15px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#e6e9ec⟩
              "Rapport samenstellen"
          - span
              ⟨font:500 12px 'JetBrains Mono',monospace;color:#8a949e⟩
              "{{ rCount }} regels"
          - span
              ⟨flex:1⟩
          - button (onclick="{{ printReport }}")
              ⟨display:flex;align-items:center;gap:6px;border:0;background:#f2b33d;color:#0a0c0e;padding:8px 14px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
            - span
                ⟨font-family:'Material Symbols Sharp';font-size:18px;line-height:1;font-feature-settings:'liga'⟩
                "print"
            "Afdrukken / PDF"
          - button (onclick="{{ closeReport }}")
              ⟨border:1px solid #3a434c;background:transparent;color:#e6e9ec;padding:8px 12px;cursor:pointer;font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
              "Sluiten"
        - div
            ⟨display:flex;flex-wrap:wrap;gap:10px;align-items:flex-end⟩
          - label
              ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
            "Van"
            - input (type="datetime-local" value="{{ rFrom }}" onchange="{{ onRFrom }}")
                ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font-size:13px;min-width:130px;color-scheme:dark⟩
          - label
              ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
            "Tot"
            - input (type="datetime-local" value="{{ rTo }}" onchange="{{ onRTo }}")
                ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font-size:13px;min-width:130px;color-scheme:dark⟩
          - div
              ⟨display:flex;gap:4px;flex-wrap:wrap⟩
            ▸ VOOR ELK q IN {{ rQuick }}
              - button (onclick="{{ q.onClick }}")
                  ⟨border:1px solid {{ q.bd }};background:{{ q.bg }};color:{{ q.fg }};padding:6px 9px;cursor:pointer;font:600 11px 'Barlow Condensed',sans-serif;letter-spacing:.08em;text-transform:uppercase⟩
                  "{{ q.label }}"
          - label
              ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
            "Project"
            - select (value="{{ rProject }}" onchange="{{ onRProject }}")
                ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font-size:13px;min-width:130px⟩
              ▸ VOOR ELK o IN {{ rProjOpts }}
                - option (value="{{ o.id }}")
                    "{{ o.label }}"
          - label
              ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
            "Team"
            - select (value="{{ rTeam }}" onchange="{{ onRTeam }}")
                ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font-size:13px;min-width:130px⟩
              ▸ VOOR ELK o IN {{ rTeamOpts }}
                - option (value="{{ o.id }}")
                    "{{ o.label }}"
          - label
              ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
            "Teamlid"
            - select (value="{{ rMember }}" onchange="{{ onRMember }}")
                ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font-size:13px;min-width:130px⟩
              ▸ VOOR ELK o IN {{ rMemberOpts }}
                - option (value="{{ o.id }}")
                    "{{ o.label }}"
          - label
              ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
            "Type melding"
            - select (value="{{ rType }}" onchange="{{ onRType }}")
                ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font-size:13px;min-width:130px⟩
              ▸ VOOR ELK o IN {{ rTypeOpts }}
                - option (value="{{ o.id }}")
                    "{{ o.label }}"
          - label
              ⟨display:flex;flex-direction:column;gap:4px;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#8a949e⟩
            "Gebied"
            - select (value="{{ rArea }}" onchange="{{ onRArea }}")
                ⟨background:#0a0c0e;border:1px solid #2c343c;color:#e6e9ec;padding:6px 8px;font-size:13px;min-width:130px⟩
              ▸ VOOR ELK o IN {{ rAreaOpts }}
                - option (value="{{ o.id }}")
                    "{{ o.label }}"
        - div
            ⟨display:flex;flex-wrap:wrap;gap:4px;align-items:center⟩
          ▸ VOOR ELK x IN {{ rSecs }}
            - button (onclick="{{ x.onClick }}")
                ⟨display:flex;align-items:center;gap:5px;border:1px solid #2c343c;background:{{ x.bg }};color:{{ x.fg }};padding:4px 9px 4px 6px;cursor:pointer;font-size:12px⟩
              - span
                  ⟨font-family:'Material Symbols Sharp';font-size:17px;line-height:1;font-feature-settings:'liga'⟩
                  "{{ x.mark }}"
              "{{ x.label }}"
          - span
              ⟨width:1px;height:20px;background:#2c343c;margin:0 6px⟩
          ▸ VOOR ELK x IN {{ rOpts }}
            - button (onclick="{{ x.onClick }}")
                ⟨display:flex;align-items:center;gap:5px;border:1px solid #2c343c;background:{{ x.bg }};color:{{ x.fg }};padding:4px 9px 4px 6px;cursor:pointer;font-size:12px⟩
              - span
                  ⟨font-family:'Material Symbols Sharp';font-size:17px;line-height:1;font-feature-settings:'liga'⟩
                  "{{ x.mark }}"
              "{{ x.label }}"
      - div (data-paper="1")
          ⟨width:calc(100% - 32px);max-width:900px;margin:24px 16px 48px;background:#fff;color:#16191d;padding:48px 52px;box-shadow:0 20px 60px rgba(0,0,0,.5);font-family:Barlow,sans-serif;font-size:13px⟩
        - div
            ⟨display:flex;justify-content:space-between;align-items:flex-start;gap:20px;flex-wrap:wrap;border-bottom:2px solid #16191d;padding-bottom:16px⟩
          - div
            - div
                ⟨font:700 12px 'Barlow Condensed',sans-serif;letter-spacing:.2em;color:#9a6512⟩
                "SAK · SECURITY AWARENESS KIT"
            - div
                ⟨font:600 30px 'Barlow Condensed',sans-serif;letter-spacing:.04em;text-transform:uppercase;margin-top:4px;line-height:1.05⟩
                "Rapportage gebeurtenissen"
            - div
                ⟨font:500 14px 'JetBrains Mono',monospace;margin-top:8px⟩
                "{{ rPeriod }}"
            - div
                ⟨font-size:14px;margin-top:4px;color:#2a3138⟩
                "{{ rProjHead }}"
          - div
              ⟨text-align:right;font-size:12px;color:#4a5560;line-height:1.6⟩
            - div
                ⟨font:600 12px 'JetBrains Mono',monospace;color:#16191d⟩
                "{{ rNo }}"
            - div
                "Opgemaakt {{ rGen }}"
            - div
                "Filters: {{ rFilters }}"
        - div
            ⟨display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));border:1px solid #d5d9de;border-top:0⟩
          ▸ VOOR ELK x IN {{ rStats }}
            - div
                ⟨padding:10px 12px;border-top:1px solid #d5d9de;border-right:1px solid #e3e6e9⟩
              - div
                  ⟨font:600 22px 'JetBrains Mono',monospace⟩
                  "{{ x.n }}"
              - div
                  ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#5a646e⟩
                  "{{ x.label }}"
        ▸ ALS {{ rEmpty }}
          - div
              ⟨padding:40px 0;text-align:center;color:#5a646e⟩
              "Geen gebeurtenissen in deze periode met deze filters."
        ▸ ALS {{ hasRIncs }}
          - div
              ⟨font:600 13px 'Barlow Condensed',sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#16191d;border-bottom:1px solid #16191d;padding-bottom:6px;margin:30px 0 12px⟩
              "Meldingen"
          ▸ VOOR ELK ri IN {{ rIncs }}
            - div
                ⟨display:flex;gap:18px;flex-wrap:wrap;border:1px solid #d5d9de;padding:14px;margin-bottom:12px;break-inside:avoid⟩
              ▸ ALS {{ ri.hasMap }}
                - div
                    ⟨flex:none;width:220px⟩
                  - div
                      ⟨position:relative;width:220px;height:150px;overflow:hidden;background:#e8e6e1;border:1px solid #c9ced3⟩
                    ▸ VOOR ELK tl IN {{ ri.tiles }}
                      - div
                          ⟨position:absolute;left:{{ tl.x }}px;top:{{ tl.y }}px;width:256px;height:256px;background-image:url({{ tl.url }});background-size:256px 256px⟩
                    - div
                        ⟨position:absolute;left:103px;top:68px;width:14px;height:14px;border-radius:50%;background:#c0392b;border:3px solid #fff;box-shadow:0 0 0 1px #c0392b⟩
                  - div
                      ⟨font:500 10px 'JetBrains Mono',monospace;color:#5a646e;margin-top:4px⟩
                      "{{ ri.coords }}"
              - div
                  ⟨flex:1;min-width:260px;display:flex;flex-direction:column;gap:6px⟩
                - div
                    ⟨display:flex;gap:8px;align-items:center;flex-wrap:wrap;font:600 11px 'JetBrains Mono',monospace⟩
                  - span
                      ⟨border:1px solid #16191d;padding:0 5px⟩
                      "{{ ri.prio }}"
                  - span
                      "{{ ri.id }}"
                  - span
                      ⟨color:#5a646e⟩
                      "{{ ri.type }} · {{ ri.status }}"
                - div
                    ⟨font-size:18px;font-weight:600⟩
                    "{{ ri.title }}"
                - div
                    ⟨display:grid;grid-template-columns:110px minmax(0,1fr);gap:3px 10px;font-size:12.5px⟩
                  - span
                      ⟨color:#5a646e⟩
                      "Locatie"
                  - span
                      "{{ ri.loc }}"
                  - span
                      ⟨color:#5a646e⟩
                      "Gemeld"
                  - span
                      "{{ ri.when }} door {{ ri.by }}"
                  - span
                      ⟨color:#5a646e⟩
                      "Toegewezen aan"
                  - span
                      "{{ ri.who }}"
                - div
                    ⟨font-size:13px;line-height:1.45;color:#2a3138;text-wrap:pretty⟩
                    "{{ ri.desc }}"
                - div
                    ⟨border-top:1px solid #e3e6e9;margin-top:4px;padding-top:6px⟩
                  ▸ VOOR ELK ln IN {{ ri.lines }}
                    - div
                        ⟨display:grid;grid-template-columns:118px 46px minmax(0,1fr);gap:8px;padding:2px 0;font-size:12px⟩
                      - span
                          ⟨font-family:'JetBrains Mono',monospace;color:#5a646e⟩
                          "{{ ln.t }}"
                      - span
                          ⟨font:600 11px 'JetBrains Mono',monospace;color:#2b6cb0⟩
                          "{{ ln.by }}"
                      - span
                          "{{ ln.text }}"
                ▸ ALS {{ ri.hasAtts }}
                  - div
                      ⟨display:flex;flex-wrap:wrap;gap:6px;margin-top:6px⟩
                    ▸ VOOR ELK rx IN {{ ri.atts }}
                      ▸ ALS {{ rx.isImg }}
                        - div (title="{{ rx.name }}")
                            ⟨width:72px;height:72px;background-image:url({{ rx.url }});background-size:cover;background-position:center;border:1px solid #c9ced3⟩
                      ▸ ALS {{ rx.isDoc }}
                        - span
                            ⟨display:flex;align-items:center;gap:4px;border:1px solid #c9ced3;padding:3px 6px;font-size:11px;color:#16191d⟩
                          - span
                              ⟨font-family:'Material Symbols Sharp';font-size:14px;line-height:1;font-feature-settings:'liga';color:#2b6cb0⟩
                              "description"
                          "{{ rx.name }}"
        ▸ ALS {{ hasRShifts }}
          - div
              ⟨font:600 13px 'Barlow Condensed',sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#16191d;border-bottom:1px solid #16191d;padding-bottom:6px;margin:30px 0 12px⟩
            "Personeel"
            - span
                ⟨font-weight:500;letter-spacing:.06em;color:#5a646e;text-transform:none;font-family:Barlow,sans-serif⟩
                "· {{ rShiftSum }}"
          - div
              ⟨display:grid;grid-template-columns:44px minmax(0,1.3fr) minmax(0,1fr) 112px 112px 60px;gap:10px;padding:6px 0;border-bottom:1px solid #16191d;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#5a646e⟩
            - span
                "ID"
            - span
                "Naam · rol"
            - span
                "Team · project"
            - span
                "Ingeklokt"
            - span
                "Uitgeklokt"
            - span
                "Duur"
          ▸ VOOR ELK rs IN {{ rShifts }}
            - div
                ⟨display:grid;grid-template-columns:44px minmax(0,1.3fr) minmax(0,1fr) 112px 112px 60px;gap:10px;padding:6px 0;border-bottom:1px solid #e3e6e9;font-size:12.5px;break-inside:avoid⟩
              - span
                  ⟨font:600 11px 'JetBrains Mono',monospace⟩
                  "{{ rs.id }}"
              - span
                "{{ rs.name }}"
                - span
                    ⟨color:#5a646e⟩
                    "· {{ rs.role }}"
              - span
                  ⟨color:#3a434c⟩
                  "{{ rs.team }} · {{ rs.project }}"
              - span
                  ⟨font-family:'JetBrains Mono',monospace;font-size:12px⟩
                  "{{ rs.in }}"
              - span
                  ⟨font-family:'JetBrains Mono',monospace;font-size:12px;color:{{ rs.outCol }}⟩
                  "{{ rs.out }}"
              - span
                  ⟨font-family:'JetBrains Mono',monospace;font-size:12px⟩
                  "{{ rs.dur }}"
        ▸ ALS {{ hasRMat }}
          - div
              ⟨font:600 13px 'Barlow Condensed',sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#16191d;border-bottom:1px solid #16191d;padding-bottom:6px;margin:30px 0 12px⟩
            "Materiaal"
            - span
                ⟨font-weight:500;letter-spacing:.06em;color:#5a646e;text-transform:none;font-family:Barlow,sans-serif⟩
                "· {{ rMatSum }}"
          - div
              ⟨display:grid;grid-template-columns:52px minmax(0,1.2fr) minmax(0,1fr) 112px 112px;gap:10px;padding:6px 0;border-bottom:1px solid #16191d;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#5a646e⟩
            - span
                "Item"
            - span
                "Omschrijving"
            - span
                "Medewerker"
            - span
                "Uitgegeven"
            - span
                "Ingeleverd"
          ▸ VOOR ELK rm IN {{ rMat }}
            - div
                ⟨display:grid;grid-template-columns:52px minmax(0,1.2fr) minmax(0,1fr) 112px 112px;gap:10px;padding:6px 0;border-bottom:1px solid #e3e6e9;font-size:12.5px;break-inside:avoid⟩
              - span
                  ⟨font:600 11px 'JetBrains Mono',monospace⟩
                  "{{ rm.code }}"
              - span
                  "{{ rm.name }}"
              - span
                  "{{ rm.who }}"
              - span
                  ⟨font-family:'JetBrains Mono',monospace;font-size:12px⟩
                  "{{ rm.out }}"
              - span
                  ⟨font-family:'JetBrains Mono',monospace;font-size:12px;color:{{ rm.backCol }};font-weight:{{ rm.backW }}⟩
                  "{{ rm.back }}"
          ▸ ALS {{ hasRMatOpen }}
            - div
                ⟨margin-top:12px;padding:10px 12px;border:1.5px solid #b42318;color:#b42318;font-size:13px;break-inside:avoid⟩
              - strong
                  "Nog niet ingeleverd:"
              "{{ rMatOpenList }}"
        - div
            ⟨font:600 13px 'Barlow Condensed',sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#16191d;border-bottom:1px solid #16191d;padding-bottom:6px;margin:30px 0 12px⟩
            "Tijdlijn"
        - div
            ⟨display:grid;grid-template-columns:48px 76px 150px minmax(0,1fr) 160px;gap:10px;padding:6px 0;border-bottom:1px solid #16191d;font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#5a646e⟩
          - span
              "Tijd"
          - span
              "Soort"
          - span
              "Wie"
          - span
              "Wat"
          - span
              "Waar"
        ▸ VOOR ELK rr IN {{ rRows }}
          ▸ ALS {{ rr.newDay }}
            - div
                ⟨font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.12em;text-transform:uppercase;background:#eef0f2;padding:5px 8px;margin-top:8px⟩
                "{{ rr.day }}"
          - div
              ⟨display:grid;grid-template-columns:48px 76px 150px minmax(0,1fr) 160px;gap:10px;padding:6px 0;border-bottom:1px solid #e3e6e9;font-size:12.5px;break-inside:avoid⟩
            - span
                ⟨font-family:'JetBrains Mono',monospace⟩
                "{{ rr.time }}"
            - span
                ⟨font:600 10px 'Barlow Condensed',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:{{ rr.kcol }};padding-top:2px⟩
                "{{ rr.kind }}"
            - span
              - span
                  ⟨font:600 11px 'JetBrains Mono',monospace⟩
                  "{{ rr.by }}"
              - span
                  ⟨color:#5a646e⟩
                  "{{ rr.byName }}"
            - span
                ⟨min-width:0⟩
              - span
                  ⟨text-wrap:pretty⟩
                  "{{ rr.text }}"
              ▸ ALS {{ rr.hasAtts }}
                - div
                    ⟨display:flex;flex-wrap:wrap;gap:6px;margin-top:6px⟩
                  ▸ VOOR ELK ry IN {{ rr.atts }}
                    ▸ ALS {{ ry.isImg }}
                      - div (title="{{ ry.name }}")
                          ⟨width:72px;height:72px;background-image:url({{ ry.url }});background-size:cover;background-position:center;border:1px solid #c9ced3⟩
                    ▸ ALS {{ ry.isDoc }}
                      - span
                          ⟨display:flex;align-items:center;gap:4px;border:1px solid #c9ced3;padding:3px 6px;font-size:11px;color:#16191d⟩
                        - span
                            ⟨font-family:'Material Symbols Sharp';font-size:14px;line-height:1;font-feature-settings:'liga';color:#2b6cb0⟩
                            "description"
                        "{{ ry.name }}"
            - span
                ⟨color:#3a434c⟩
              "{{ rr.where }}"
              - br
              - span
                  ⟨font:500 10px 'JetBrains Mono',monospace;color:#7a848e⟩
                  "{{ rr.coords }}"
        - div
            ⟨display:flex;justify-content:space-between;gap:12px;margin-top:28px;padding-top:10px;border-top:2px solid #16191d;font-size:11px;color:#5a646e⟩
          - span
              "Einde rapport · {{ rCount }} regels"
          - span
              ⟨font-family:'JetBrains Mono',monospace⟩
              "{{ rNo }}"
```
