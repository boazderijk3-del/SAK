import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSessie } from '../sessie/sessie';

export function Inloggen() {
  const { inloggen, ssoInloggen } = useSessie();
  const navigeer = useNavigate();
  const plek = useLocation();
  const [email, setEmail] = useState('m.devries@voorbeeld.nl');
  const [wachtwoord, setWachtwoord] = useState('');
  const [fout, setFout] = useState('');

  // S1: na het inloggen terug naar de URL waar je heen wilde.
  const terugNaar = (plek.state as { van?: string } | null)?.van ?? '/';

  async function verstuur() {
    const uit = await inloggen(email, wachtwoord);
    if (uit === 'fout') {
      // S2: de velden blijven gevuld. De tekst zegt NIET welk van de twee fout
      // is -- dat zou verklappen of een adres bestaat.
      setFout('Vul je e-mailadres en wachtwoord in.');
      return;
    }
    setFout('');
    if (uit === 'twofa') navigeer('/inloggen/code', { state: { email, van: terugNaar } });
    else navigeer(terugNaar, { replace: true });
  }

  return (
    <div className="auth-kolom">
      <div className="titelblok">
        <h1>Inloggen</h1>
        <p>Eén account voor Phylax, SAK en Ophanim.</p>
      </div>

      {fout && <div className="vak-fout" role="alert">{fout}</div>}

      <div className="velden">
        <label className="veld">
          <span className="veld-label">E-mailadres</span>
          <input className="invoer" value={email} placeholder="naam@organisatie.nl"
                 onChange={e => setEmail(e.target.value)} />
        </label>
        {/* "Wachtwoord vergeten?" staat NAAST het label, niet erin.
            Een knop binnen een <label> is stuk op twee manieren: een klik
            erop gaat door naar het invoerveld (dus je typt in plaats van dat
            je navigeert), en de knop verdwijnt uit de toegankelijkheidsboom
            omdat de labeltekst de naam van het VELD wordt. Gevonden doordat
            acceptatietest S6 de knop niet kon vinden. */}
        <div className="veld">
          <span className="veld-label-rij">
            <label htmlFor="wachtwoord">Wachtwoord</label>
            <button type="button" className="tekstknop" onClick={() => navigeer('/wachtwoord-vergeten')}>
              Wachtwoord vergeten?
            </button>
          </span>
          <input id="wachtwoord" className="invoer" type="password" value={wachtwoord}
                 onChange={e => setWachtwoord(e.target.value)}
                 onKeyDown={e => { if (e.key === 'Enter') verstuur(); }} />
        </div>
        <button className="knop-primair" onClick={verstuur}>Inloggen</button>
      </div>

      <div className="scheiding"><span />OF<span /></div>
      <button className="knop-tweede" onClick={async () => { await ssoInloggen(); navigeer(terugNaar, { replace: true }); }}>
        Inloggen met organisatieaccount
      </button>

      <p className="voetregel">Geen account? Je beheerder maakt er een voor je aan.</p>
    </div>
  );
}
