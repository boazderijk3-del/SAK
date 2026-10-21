# Pixelspec · Suite Start

Gegenereerd uit `prototype/Suite Start.dc.html`. Volledige elementboom met **exacte inline-stijlen** en teksten; normatief. `{{ … }}` = dynamische waarde uit de logica onderaan het prototype. `▸ ALS` = alleen zichtbaar als de waarde waar is; `▸ VOOR ELK` = herhaald per item.

```
- div
    ⟨min-height:100vh;display:flex;flex-direction:column;background:#08090b⟩
  - header
      ⟨height:56px;flex:none;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:0 28px;border-bottom:1px solid rgba(255,255,255,.06)⟩
    - div
        ⟨display:flex;align-items:center;gap:14px⟩
      - div
          ⟨display:flex;align-items:center;gap:6px⟩
        - span
            ⟨width:14px;height:14px;border-radius:4px;border:2px solid #35d0c4⟩
        - span
            ⟨width:14px;height:14px;border-radius:2px;background:#f2b33d⟩
        - span
            ⟨width:14px;height:14px;border-radius:50%;border:2px solid #8a949e⟩
      - div
          ⟨font-size:14px;font-weight:600;letter-spacing:.01em⟩
          "Phylax · SAK · Ophanim"
    ▸ ALS {{ loggedIn }}
      - div
          ⟨position:relative⟩
        - button (onclick="{{ toggleUser }}" style-hover="background:#12151c")
            ⟨display:flex;align-items:center;gap:10px;background:transparent;border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:5px 10px 5px 5px;color:#e8eaf0;cursor:pointer;font:inherit⟩
          - span
              ⟨width:26px;height:26px;border-radius:6px;background:#1f2430;display:flex;align-items:center;justify-content:center;font-family:'JetBrains Mono',monospace;font-size:11px;color:#b6bcc6⟩
              "MV"
          - span
              ⟨font-size:13px⟩
              "M. de Vries"
          - span
              ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
              "▾"
        ▸ ALS {{ userOpen }}
          - div
              ⟨position:absolute;right:0;top:calc(100% + 8px);width:260px;z-index:20;background:#151922;border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:6px;box-shadow:0 16px 40px rgba(0,0,0,.5);display:flex;flex-direction:column;gap:2px⟩
            - div
                ⟨padding:8px 10px 10px;border-bottom:1px solid rgba(255,255,255,.06);margin-bottom:4px;display:flex;flex-direction:column;gap:3px⟩
              - span
                  ⟨font-size:13px;font-weight:600⟩
                  "M. de Vries"
              - span
                  ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                  "m.devries@voorbeeld.nl"
            - button (onclick="{{ openAccount }}" style-hover="background:#1f2531")
                ⟨text-align:left;background:transparent;border:0;border-radius:6px;padding:8px 10px;color:#e8eaf0;font:inherit;font-size:13px;cursor:pointer⟩
                "Account en beveiliging"
            - button (onclick="{{ logout }}" style-hover="background:#1f2531")
                ⟨text-align:left;background:transparent;border:0;border-radius:6px;padding:8px 10px;color:#e8eaf0;font:inherit;font-size:13px;cursor:pointer⟩
                "Uitloggen"
  ▸ ALS {{ isAuth }}
    - main
        ⟨flex:1;display:flex;align-items:center;justify-content:center;padding:48px 20px⟩
      - div
          ⟨width:100%;max-width:380px;display:flex;flex-direction:column;gap:24px⟩
        ▸ ALS {{ isLogin }}
          - div
              ⟨display:flex;flex-direction:column;gap:6px⟩
            - h1
                ⟨margin:0;font-size:22px;font-weight:600;letter-spacing:-.01em⟩
                "Inloggen"
            - p
                ⟨margin:0;font-size:13px;color:#8b909b;line-height:1.5⟩
                "Eén account voor Phylax, SAK en Ophanim."
          ▸ ALS {{ hasError }}
            - div
                ⟨font-size:13px;color:#f0706a;border:1px solid rgba(240,112,106,.4);border-radius:8px;padding:10px 12px;line-height:1.45⟩
                "{{ error }}"
          - div
              ⟨display:flex;flex-direction:column;gap:14px⟩
            - label
                ⟨display:flex;flex-direction:column;gap:6px⟩
              - span
                  ⟨font-size:12px;color:#b6bcc6⟩
                  "E-mailadres"
              - input (value="{{ email }}" onchange="{{ onEmail }}" placeholder="naam@organisatie.nl")
                  ⟨height:40px;border-radius:8px;border:1px solid rgba(255,255,255,.14);background:#0b0d12;color:#e8eaf0;padding:0 12px;font:inherit;font-size:14px;outline:none⟩
            - label
                ⟨display:flex;flex-direction:column;gap:6px⟩
              - span
                  ⟨display:flex;justify-content:space-between;font-size:12px;color:#b6bcc6⟩
                - span
                    "Wachtwoord"
                - span (onclick="{{ goForgot }}" style-hover="color:#e8eaf0")
                    ⟨color:#8b909b;cursor:pointer⟩
                    "Wachtwoord vergeten?"
              - input (type="password" value="{{ pw }}" onchange="{{ onPw }}" onkeydown="{{ onPwKey }}")
                  ⟨height:40px;border-radius:8px;border:1px solid rgba(255,255,255,.14);background:#0b0d12;color:#e8eaf0;padding:0 12px;font:inherit;font-size:14px;outline:none⟩
            - button (onclick="{{ submitLogin }}" style-hover="background:#ffffff")
                ⟨height:40px;border-radius:8px;border:0;background:#e8eaf0;color:#08090b;font:inherit;font-size:14px;font-weight:600;cursor:pointer⟩
                "Inloggen"
          ▸ ALS {{ showSso }}
            - div
                ⟨display:flex;align-items:center;gap:12px;font-family:'JetBrains Mono',monospace;font-size:11px;color:#5c616b⟩
              - span
                  ⟨flex:1;height:1px;background:rgba(255,255,255,.08)⟩
              "OF"
              - span
                  ⟨flex:1;height:1px;background:rgba(255,255,255,.08)⟩
            - button (onclick="{{ ssoLogin }}" style-hover="background:#12151c")
                ⟨height:40px;border-radius:8px;border:1px solid rgba(255,255,255,.14);background:transparent;color:#e8eaf0;font:inherit;font-size:14px;cursor:pointer⟩
                "Inloggen met organisatieaccount"
          - p
              ⟨margin:0;font-size:12px;color:#5c616b;line-height:1.5⟩
              "Geen account? Je beheerder maakt er een voor je aan."
        ▸ ALS {{ isTwofa }}
          - div
              ⟨display:flex;flex-direction:column;gap:6px⟩
            - h1
                ⟨margin:0;font-size:22px;font-weight:600;letter-spacing:-.01em⟩
                "Bevestig dat jij het bent"
            - p
                ⟨margin:0;font-size:13px;color:#8b909b;line-height:1.5⟩
                "Vul de 6-cijferige code uit je authenticator-app in."
          ▸ ALS {{ hasError }}
            - div
                ⟨font-size:13px;color:#f0706a;border:1px solid rgba(240,112,106,.4);border-radius:8px;padding:10px 12px;line-height:1.45⟩
                "{{ error }}"
          - input (value="{{ code }}" onchange="{{ onCode }}" onkeydown="{{ onCodeKey }}" placeholder="000000" maxlength="6" inputmode="numeric")
              ⟨height:56px;border-radius:8px;border:1px solid rgba(255,255,255,.14);background:#0b0d12;color:#e8eaf0;padding:0 16px;font-family:'JetBrains Mono',monospace;font-size:26px;letter-spacing:.4em;text-align:center;outline:none⟩
          - button (onclick="{{ submitCode }}" style-hover="background:#ffffff")
              ⟨height:40px;border-radius:8px;border:0;background:#e8eaf0;color:#08090b;font:inherit;font-size:14px;font-weight:600;cursor:pointer⟩
              "Bevestigen"
          - div
              ⟨display:flex;justify-content:space-between;font-size:12px;color:#8b909b⟩
            - span (onclick="{{ backToLogin }}" style-hover="color:#e8eaf0")
                ⟨cursor:pointer⟩
                "← Ander account"
            - span
                ⟨font-family:'JetBrains Mono',monospace⟩
                "{{ email }}"
        ▸ ALS {{ isForgot }}
          - div
              ⟨display:flex;flex-direction:column;gap:6px⟩
            - h1
                ⟨margin:0;font-size:22px;font-weight:600;letter-spacing:-.01em⟩
                "Wachtwoord herstellen"
            - p
                ⟨margin:0;font-size:13px;color:#8b909b;line-height:1.5⟩
                "We sturen een link naar je e-mailadres. De link is 30 minuten geldig."
          ▸ ALS {{ forgotSent }}
            - div
                ⟨font-size:13px;color:#56d38a;border:1px solid rgba(86,211,138,.35);border-radius:8px;padding:10px 12px;line-height:1.45⟩
                "Als dit adres bij ons bekend is, staat de link nu in je inbox."
          - label
              ⟨display:flex;flex-direction:column;gap:6px⟩
            - span
                ⟨font-size:12px;color:#b6bcc6⟩
                "E-mailadres"
            - input (value="{{ email }}" onchange="{{ onEmail }}" placeholder="naam@organisatie.nl")
                ⟨height:40px;border-radius:8px;border:1px solid rgba(255,255,255,.14);background:#0b0d12;color:#e8eaf0;padding:0 12px;font:inherit;font-size:14px;outline:none⟩
          - button (onclick="{{ sendReset }}" style-hover="background:#ffffff")
              ⟨height:40px;border-radius:8px;border:0;background:#e8eaf0;color:#08090b;font:inherit;font-size:14px;font-weight:600;cursor:pointer⟩
              "Stuur herstellink"
          - span (onclick="{{ backToLogin }}" style-hover="color:#e8eaf0")
              ⟨font-size:12px;color:#8b909b;cursor:pointer⟩
              "← Terug naar inloggen"
  ▸ ALS {{ isHome }}
    - main
        ⟨flex:1;width:100%;max-width:1120px;margin:0 auto;padding:56px 28px;display:flex;flex-direction:column;gap:36px⟩
      - div
          ⟨display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap⟩
        - div
            ⟨display:flex;flex-direction:column;gap:6px⟩
          - div
              ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b;letter-spacing:.06em⟩
              "KIES EEN PROGRAMMA"
          - h1
              ⟨margin:0;font-size:28px;font-weight:600;letter-spacing:-.01em⟩
              "Waar ga je aan werken?"
        - label
            ⟨display:flex;flex-direction:column;gap:6px;min-width:260px⟩
          - span
              ⟨font-family:'JetBrains Mono',monospace;font-size:10px;color:#8b909b;letter-spacing:.06em⟩
              "OPDRACHTGEVER"
          - select (value="{{ client }}" onchange="{{ onClient }}")
              ⟨height:38px;border-radius:8px;border:1px solid rgba(255,255,255,.14);background:#0b0d12;color:#e8eaf0;padding:0 10px;font:inherit;font-size:13px;outline:none⟩
            ▸ VOOR ELK c IN {{ clients }}
              - option (value="{{ c.id }}")
                  "{{ c.name }}"
      - div
          ⟨display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px⟩
        - a (href="{{ phylaxHref }}" style-hover="border-color:#35d0c4")
            ⟨display:flex;flex-direction:column;gap:22px;padding:24px;border-radius:12px;border:1px solid rgba(255,255,255,.08);background:#0e1117;color:#e8eaf0;text-decoration:none;min-height:300px⟩
          - div
              ⟨display:flex;align-items:center;justify-content:space-between⟩
            - div
                ⟨display:flex;align-items:center;gap:10px⟩
              - span
                  ⟨width:22px;height:22px;border-radius:6px;border:2px solid #35d0c4⟩
              - span
                  ⟨font-size:20px;font-weight:600;letter-spacing:.02em⟩
                  "Phylax"
            - span
                ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                "onderzoeker"
          - p
              ⟨margin:0;font-size:14px;color:#b6bcc6;line-height:1.5⟩
              "Onderzoek, casussen en rapportage. Materiaal analyseren, gegevens bevestigen, rapporten vaststellen."
          - div
              ⟨margin-top:auto;display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.06)⟩
            - div
                ⟨display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:13px⟩
              - span
                  ⟨color:#b6bcc6⟩
                  "Werkbak"
              - span
                  ⟨font-family:'JetBrains Mono',monospace;color:#e2ab44⟩
                  "12 open"
            - div
                ⟨display:flex;justify-content:space-between;padding:10px 0;font-size:13px⟩
              - span
                  ⟨color:#b6bcc6⟩
                  "Lopende onderzoeken"
              - span
                  ⟨font-family:'JetBrains Mono',monospace;color:#8b909b⟩
                  "3"
          - span
              ⟨font-size:13px;font-weight:600;color:#35d0c4⟩
              "Open Phylax →"
        - div
            ⟨display:flex;flex-direction:column;gap:22px;padding:24px;border-radius:12px;border:1px solid rgba(255,255,255,.08);background:#0d1013;min-height:300px⟩
          - div
              ⟨display:flex;align-items:center;justify-content:space-between⟩
            - div
                ⟨display:flex;align-items:baseline;gap:8px⟩
              - span
                  ⟨font:700 20px 'JetBrains Mono',monospace;color:#f2b33d;letter-spacing:.06em⟩
                  "SAK"
              - span
                  ⟨font:600 12px 'Barlow Condensed',sans-serif;letter-spacing:.16em;color:#8a949e⟩
                  "SECURITY AWARENESS KIT"
            - span
                ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                "meldkamer"
          - p
              ⟨margin:0;font-size:14px;color:#b6bcc6;line-height:1.5⟩
              "Beveiliging op locatie. Meldingen en incidenten, teams op de kaart, personeel en materiaal."
          - div
              ⟨margin-top:auto;display:grid;grid-template-columns:1fr 1fr;gap:8px⟩
            ▸ VOOR ELK l IN {{ sakLinks }}
              - a (href="{{ l.href }}" style-hover="border-color:#f2b33d")
                  ⟨display:flex;flex-direction:column;gap:3px;padding:10px 12px;border:1px solid #2c343c;color:#e6e9ec;text-decoration:none⟩
                - span
                    ⟨font:600 14px Barlow,sans-serif⟩
                    "{{ l.name }}"
                - span
                    ⟨font-size:11px;color:#8a949e⟩
                    "{{ l.sub }}"
        - div
            ⟨display:flex;flex-direction:column;gap:22px;padding:24px;border-radius:12px;border:1px dashed rgba(255,255,255,.12);min-height:300px;opacity:.6⟩
          - div
              ⟨display:flex;align-items:center;justify-content:space-between⟩
            - div
                ⟨display:flex;align-items:center;gap:10px⟩
              - span
                  ⟨width:22px;height:22px;border-radius:50%;border:2px solid #8a949e⟩
              - span
                  ⟨font-size:20px;font-weight:600⟩
                  "Ophanim"
            - span
                ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                "later"
          - p
              ⟨margin:0;font-size:14px;color:#8b909b;line-height:1.5⟩
              "Nog niet beschikbaar."
      - p
          ⟨margin:0;font-size:12px;color:#5c616b;line-height:1.5⟩
          "Je ziet alleen de programma's waar je toegang toe hebt. De gekozen opdrachtgever gaat mee naar het programma dat je opent."
  ▸ ALS {{ isAccount }}
    - main
        ⟨flex:1;width:100%;max-width:720px;margin:0 auto;padding:56px 28px;display:flex;flex-direction:column;gap:28px⟩
      - span (onclick="{{ goHome }}" style-hover="color:#e8eaf0")
          ⟨font-size:12px;color:#8b909b;cursor:pointer⟩
          "← Programma's"
      - h1
          ⟨margin:0;font-size:22px;font-weight:600;letter-spacing:-.01em⟩
          "Account en beveiliging"
      - div
          ⟨display:flex;flex-direction:column;border-top:1px solid rgba(255,255,255,.06)⟩
        ▸ VOOR ELK r IN {{ accountRows }}
          - div
              ⟨display:grid;grid-template-columns:180px minmax(0,1fr) auto;gap:16px;align-items:center;padding:14px 0;border-bottom:1px solid rgba(255,255,255,.05)⟩
            - span
                ⟨font-size:12px;color:#8b909b⟩
                "{{ r.k }}"
            - span
                ⟨font-size:13px;color:#e8eaf0⟩
                "{{ r.v }}"
            - span
                ⟨font-size:12px;color:#8b909b⟩
                "{{ r.a }}"
      - div
          ⟨display:flex;flex-direction:column;gap:10px⟩
        - div
            ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b;letter-spacing:.06em⟩
            "ACTIEVE SESSIES"
        ▸ VOOR ELK s IN {{ sessions }}
          - div
              ⟨display:grid;grid-template-columns:minmax(0,1fr) auto;gap:16px;align-items:center;padding:12px 14px;border:1px solid rgba(255,255,255,.08);border-radius:8px⟩
            - div
                ⟨display:flex;flex-direction:column;gap:3px⟩
              - span
                  ⟨font-size:13px⟩
                  "{{ s.device }}"
              - span
                  ⟨font-family:'JetBrains Mono',monospace;font-size:11px;color:#8b909b⟩
                  "{{ s.meta }}"
            - span
                ⟨font-size:12px;color:{{ s.col }}⟩
                "{{ s.action }}"
```
