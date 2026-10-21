import { test, expect, type Page } from '@playwright/test';

// Acceptatietests S1 t/m S7 uit docs/handoff/phylax/07-acceptatietests.md.
// Letterlijk overgenomen in de testnamen, zodat je ze naast de spec kunt leggen.

/** Het hele inlogpad in een keer: wachtwoord, versturen, code, bevestigen.
 *  De tests die OVER iets anders gaan hoeven dat pad dan niet te herhalen. */
async function logIn(page: Page, { code = '123456' } = {}) {
  await page.locator('input[type=password]').fill('geheim123');
  await page.getByRole('button', { name: 'Inloggen', exact: true }).click();
  await expect(page.getByPlaceholder('000000')).toBeVisible();
  await page.getByPlaceholder('000000').fill(code);
  await page.getByRole('button', { name: 'Bevestigen' }).click();
  await expect(page.locator('.initialen')).toBeVisible();
}

test('S1 · niet ingelogd op een willekeurige URL → inloggen, daarna terug op die URL', async ({ page }) => {
  await page.goto('/account');
  await expect(page).toHaveURL(/\/inloggen$/);
  await logIn(page);
  // de bestemming is bewaard en we komen er alsnog
  await expect(page).toHaveURL(/\/account$/);
  await expect(page.getByRole('heading', { name: 'Account en beveiliging' })).toBeVisible();
});

test('S2 · leeg wachtwoord → foutvak, velden blijven gevuld', async ({ page }) => {
  await page.goto('/inloggen');
  await page.getByRole('button', { name: 'Inloggen', exact: true }).click();
  await expect(page.getByRole('alert')).toHaveText('Vul je e-mailadres en wachtwoord in.');
  // "blijven de velden gevuld" -- het e-mailadres mag niet gewist zijn
  await expect(page.getByPlaceholder('naam@organisatie.nl')).toHaveValue('m.devries@voorbeeld.nl');
});

test('S3 · codescherm: letters kunnen niet, 6 cijfers + Enter → programmakeuze', async ({ page }) => {
  await page.goto('/inloggen');
  await page.locator('input[type=password]').fill('geheim123');
  await page.getByRole('button', { name: 'Inloggen', exact: true }).click();
  const veld = page.getByPlaceholder('000000');
  await expect(veld).toBeVisible();

  // DE FOUT DIE HIER ZAT: met alleen een filter in onChange plus maxLength
  // verdwenen er cijfers. "a1b2c3d4e5f6" gaf "123" in plaats van "123456" --
  // stil, in het veld waar iemand niet kan inloggen en niet weet waarom.
  await veld.pressSequentially('a1b2c3d4e5f6');
  await expect(veld).toHaveValue('123456');

  await veld.press('Enter');
  await expect(page.getByRole('heading', { name: 'Waar ga je aan werken?' })).toBeVisible();
});

test('S3b · een te korte code wordt geweigerd met de tekst uit de spec', async ({ page }) => {
  await page.goto('/inloggen');
  await page.locator('input[type=password]').fill('geheim123');
  await page.getByRole('button', { name: 'Inloggen', exact: true }).click();
  await page.getByPlaceholder('000000').fill('123');
  await page.getByRole('button', { name: 'Bevestigen' }).click();
  await expect(page.getByRole('alert')).toHaveText('De code bestaat uit 6 cijfers.');
});

test('S5 · opdrachtgever kiezen zet hem in de URL én in de programmalinks', async ({ page }) => {
  await page.goto('/inloggen');
  await logIn(page);
  await page.getByLabel('OPDRACHTGEVER').selectOption('K-ODY');
  await expect(page).toHaveURL(/\?opdrachtgever=K-ODY/);
  // de gekozen opdrachtgever gaat MEE naar het programma dat je opent
  await expect(page.getByRole('link', { name: /Open Phylax/ })).toHaveAttribute('href', '/phylax?opdrachtgever=K-ODY');
  await expect(page.getByRole('link', { name: /Meldkamer/ })).toHaveAttribute('href', '/sak/meldkamer?opdrachtgever=K-ODY');
});

test('S6 · wachtwoord vergeten geeft bij elk adres dezelfde bevestiging', async ({ page }) => {
  await page.goto('/inloggen');
  await page.getByRole('button', { name: 'Wachtwoord vergeten?' }).click();
  const tekst = 'Als dit adres bij ons bekend is, staat de link nu in je inbox.';

  await page.getByPlaceholder('naam@organisatie.nl').fill('bestaat.echt@voorbeeld.nl');
  await page.getByRole('button', { name: 'Stuur herstellink' }).click();
  await expect(page.getByText(tekst)).toBeVisible();

  await page.getByPlaceholder('naam@organisatie.nl').fill('bestaat-niet-xyz@voorbeeld.nl');
  await page.getByRole('button', { name: 'Stuur herstellink' }).click();
  // zelfde tekst: dit scherm mag niet verklappen wie een account heeft
  await expect(page.getByText(tekst)).toBeVisible();
});

test('S7 · uitloggen maakt de sessie ongeldig; terug in de browser geeft geen toegang', async ({ page }) => {
  await page.goto('/inloggen');
  await logIn(page);
  await page.getByRole('button', { name: /M\. de Vries/ }).click();
  await page.getByRole('button', { name: 'Uitloggen' }).click();
  await expect(page).toHaveURL(/\/inloggen$/);

  await page.goBack();
  await expect(page).toHaveURL(/\/inloggen$/);
  await expect(page.getByRole('heading', { name: 'Inloggen' })).toBeVisible();
});

test('de initialen komen uit de naam, niet uit het e-mailadres', async ({ page }) => {
  await page.goto('/inloggen');
  await logIn(page);
  // "M. de Vries" -> MV. Uit het adres afgeleid gaf dit "MD": het
  // tussenvoegsel hoort er niet in.
  await expect(page.locator('.initialen')).toHaveText('MV');
});

test('S4 · alleen een SAK-rol → geen Phylax-kaart en geen Phylax in de wisselaar', async ({ page }) => {
  await page.goto('/inloggen?tweak-rollen=sak');
  await logIn(page);

  // De SAK-kaart staat er wel ...
  await expect(page.getByText('SECURITY AWARENESS KIT')).toBeVisible();
  // ... en Phylax staat er NIET. Hem tonen en dan bij de klik weigeren is een
  // belofte die je daarna breekt.
  await expect(page.getByRole('link', { name: /Open Phylax/ })).toHaveCount(0);

  // Ophanim blijft wel staan: die is er voor iedereen nog niet, en dat is
  // iets anders dan "jij mag er niet bij".
  await expect(page.getByText('Nog niet beschikbaar.')).toBeVisible();
});
