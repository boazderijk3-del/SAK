// Voorbeelddata uit het prototype (docs/handoff/suite/prototype/Suite Start.dc.html).
// Het pakket zegt: "Voorbeelddata is verzonnen. Gebruik die als seed- en testdata."
// Zodra de API er is komt dit daarvandaan; de vorm blijft gelijk.

export type Opdrachtgever = { id: string; naam: string };
export type Programma = 'phylax' | 'sak' | 'ophanim';

export const OPDRACHTGEVERS: Opdrachtgever[] = [
  { id: 'all', naam: 'Alle opdrachtgevers' },
  { id: 'K-ODY', naam: 'S.V. Odysseus' },
  { id: 'K-MOJO', naam: 'Mojo Concerts' },
];

export const SAK_TEGELS = [
  { naam: 'Meldkamer', onder: 'Meldingen, incidenten, register', pad: '/sak/meldkamer' },
  { naam: 'Kaart', onder: 'Teams, taken, dispatch', pad: '/sak/kaart' },
  { naam: 'Beheer', onder: 'Rollen, inventaris, plattegronden', pad: '/sak/beheer' },
  { naam: 'Mobiel', onder: 'App voor beveiligers', pad: '/sak/mobiel' },
];

export const ACCOUNT_RIJEN = (email: string) => [
  { k: 'Naam', v: 'M. de Vries', a: '' },
  { k: 'E-mailadres', v: email, a: '' },
  { k: 'Wachtwoord', v: 'Laatst gewijzigd 14 aug 2026', a: 'Wijzigen' },
  { k: 'Tweestapsverificatie', v: 'Aan · authenticator-app', a: 'Beheren' },
  { k: 'Toegang', v: 'Phylax: onderzoeker · SAK: meldkamer', a: '' },
];

export const SESSIES = [
  { apparaat: 'Chrome op macOS', meta: 'deze sessie · Utrecht · nu', actie: 'Huidig', huidig: true },
  { apparaat: 'SAK Mobiel op iPhone', meta: 'Rotterdam · 2 uur geleden', actie: 'Afmelden', huidig: false },
];
