import { defineConfig, devices } from '@playwright/test';

// LET OP — deze Mac draait macOS 12. Playwright levert daar GEEN eigen
// browsers meer voor ("does not support chromium on mac12"). Daarom draaien
// de tests tegen de GEÏNSTALLEERDE Chrome (channel: 'chrome').
//
// Gevolg voor de schermvergelijking (acceptatietest V1): een referentieplaatje
// dat hier wordt gemaakt is van deze Chrome op deze Mac. Draai je dat later
// op een andere machine, dan wijkt de weergave af. Schermvergelijkingen horen
// dus op ÉÉN vaste omgeving (straks een bouwstraat), niet op de laptop.
export default defineConfig({
  testDir: './e2e',
  // 1440 x 900 is de ontwerpmaat uit design-tokens.json (layout.frame).
  use: { ...devices['Desktop Chrome'], channel: 'chrome', viewport: { width: 1440, height: 900 }, baseURL: 'http://127.0.0.1:5177' },
  webServer: {
    command: 'npm run dev -- --port 5177 --host 127.0.0.1',
    url: 'http://127.0.0.1:5177',
    reuseExistingServer: true,
    timeout: 60_000,
  },
  reporter: [['list']],
});
