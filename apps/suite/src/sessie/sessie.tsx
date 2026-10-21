// De sessie zit achter een INTERFACE, niet achter een directe aanroep.
//
// Reden: inloggen wordt eigen accounts met TOTP (beslissingen.md #1) en komt
// straks van de API. Tot die tijd draait er een nepversie. Door nu al door een
// interface te praten, is dat later een andere implementatie en niet een
// verbouwing van elk scherm.
import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Programma } from '../seed';

export type Gebruiker = {
  naam: string;
  email: string;
  initialen: string;
  /** Een programma zonder rol verschijnt NIET op de keuze en niet in de
   *  wisselaar (suite/00-suite-start.md). Daarom rollen per programma. */
  rollen: Partial<Record<Programma, string>>;
};

export type Sessie = {
  gebruiker: Gebruiker | null;
  /** null = nog niet bepaald. Belangrijk: dat is iets anders dan "niet
   *  ingelogd". Een scherm dat die twee door elkaar haalt stuurt je naar het
   *  inlogscherm terwijl je sessie nog aan het laden is. */
  bezig: boolean;
  inloggen: (email: string, wachtwoord: string) => Promise<'twofa' | 'klaar' | 'fout'>;
  codeBevestigen: (code: string) => Promise<boolean>;
  ssoInloggen: () => Promise<void>;
  uitloggen: () => void;
};

const NEP_GEBRUIKER: Gebruiker = {
  naam: 'M. de Vries',
  email: 'm.devries@voorbeeld.nl',
  initialen: 'MV',
  rollen: { phylax: 'onderzoeker', sak: 'meldkamer' },
};

const Ctx = createContext<Sessie | null>(null);

/** ALLEEN TIJDENS ONTWIKKELEN. `?tweak-rollen=sak` logt je in met alleen een
 *  SAK-rol, zodat acceptatietest S4 ("ik heb alleen een SAK-rol: dan zie ik de
 *  Phylax-kaart niet") echt te toetsen is.
 *
 *  De prototypes in het pakket doen dit ook, met tweaks als `startLocked` en
 *  `offline`. In de productiebouw bestaat dit niet: `import.meta.env.DEV` is
 *  dan false en de hele tak valt weg bij het bundelen. */
function tweakRollen(): Gebruiker['rollen'] | null {
  if (!import.meta.env.DEV) return null;
  const t = new URLSearchParams(window.location.search).get('tweak-rollen');
  if (!t) return null;
  const uit: Gebruiker['rollen'] = {};
  if (t.includes('phylax')) uit.phylax = 'onderzoeker';
  if (t.includes('sak')) uit.sak = 'meldkamer';
  return uit;
}

export function SessieProvider({ children }: { children: ReactNode }) {
  const [gebruiker, setGebruiker] = useState<Gebruiker | null>(null);
  const [bezig] = useState(false);
  const [wacht, setWacht] = useState<Gebruiker | null>(null);

  const waarde: Sessie = {
    gebruiker,
    bezig,
    async inloggen(email, wachtwoord) {
      if (!/^\S+@\S+\.\S+$/.test(email) || !wachtwoord) return 'fout';
      // Nepversie: tweestaps staat aan. De echte API bepaalt dit straks.
      setWacht({ ...NEP_GEBRUIKER, email, initialen: initialenUit(NEP_GEBRUIKER.naam),
                 rollen: tweakRollen() ?? NEP_GEBRUIKER.rollen });
      return 'twofa';
    },
    async codeBevestigen(code) {
      if (!/^\d{6}$/.test(code)) return false;
      setGebruiker(wacht ?? NEP_GEBRUIKER);
      setWacht(null);
      return true;
    },
    async ssoInloggen() { setGebruiker(NEP_GEBRUIKER); },
    uitloggen() { setGebruiker(null); setWacht(null); },
  };
  return <Ctx.Provider value={waarde}>{children}</Ctx.Provider>;
}

export function useSessie(): Sessie {
  const s = useContext(Ctx);
  if (!s) throw new Error('useSessie buiten SessieProvider — de schil ontbreekt');
  return s;
}

/** Initialen uit de NAAM, niet uit het e-mailadres.
 *
 *  Eerst leidde ik ze af uit het adres: m.devries@... gaf "MD", terwijl de
 *  spec "MV" toont. Nederlandse achternamen hebben tussenvoegsels, en die
 *  horen er niet in: "M. de Vries" is MV, "Boaz de Rijk" is BR.
 *  Eerste letter van het eerste woord + eerste letter van het LAATSTE woord
 *  doet dat zonder een lijst met tussenvoegsels bij te houden. */
export function initialenUit(naam: string): string {
  const woorden = naam.replace(/\./g, ' ').split(/\s+/).filter(Boolean);
  if (!woorden.length) return 'XX';
  const eerste = woorden[0][0];
  const laatste = woorden[woorden.length - 1][0];
  return (eerste + (woorden.length > 1 ? laatste : '')).toUpperCase();
}
