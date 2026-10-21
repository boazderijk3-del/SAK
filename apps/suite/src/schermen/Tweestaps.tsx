import { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useSessie } from '../sessie/sessie';

export function Tweestaps() {
  const { codeBevestigen } = useSessie();
  const navigeer = useNavigate();
  const plek = useLocation();
  const staat = plek.state as { email?: string; van?: string } | null;
  const [code, setCode] = useState('');
  const [fout, setFout] = useState('');

  // Rechtstreeks op /inloggen/code landen zonder eerst in te loggen heeft geen
  // betekenis. Terug naar het begin in plaats van een half scherm tonen.
  if (!staat?.email) return <Navigate to="/inloggen" replace />;

  async function bevestig() {
    if (!(await codeBevestigen(code))) { setFout('De code bestaat uit 6 cijfers.'); return; }
    setFout('');
    navigeer(staat?.van ?? '/', { replace: true });
  }

  return (
    <div className="auth-kolom">
      <div className="titelblok">
        <h1>Bevestig dat jij het bent</h1>
        <p>Vul de 6-cijferige code uit je authenticator-app in.</p>
      </div>

      {fout && <div className="vak-fout" role="alert">{fout}</div>}

      {/* S3: letters typen kan niet.
          LET OP -- hier zat een echte fout in. Eerst stond er alleen
          `value={code}` met een filter in onChange en `maxLength={6}`. Dat
          lijkt te werken en is stuk: strip je een letter, dan blijft de state
          gelijk, dus React trekt de DOM NIET bij en blijft die letter staan.
          maxLength telt hem vervolgens wel mee, en dan worden er cijfers
          geweigerd die je wel typte. Gemeten: "a1b2c3d4e5f6" leverde "123" op
          in plaats van "123456" -- drie cijfers stil weg, precies in het veld
          waar iemand niet kan inloggen en niet weet waarom.
          De oplossing is de DOM meteen gelijktrekken in plaats van op een
          nieuwe render te rekenen. Werkt ook bij plakken ("12 34 56"). */}
      <input className="code-invoer" value={code} placeholder="000000" inputMode="numeric"
             autoComplete="one-time-code"
             onChange={e => {
               const schoon = e.target.value.replace(/\D/g, '').slice(0, 6);
               e.target.value = schoon;
               setCode(schoon);
             }}
             onKeyDown={e => { if (e.key === 'Enter') bevestig(); }} />
      <button className="knop-primair" onClick={bevestig}>Bevestigen</button>

      <div className="onderrij">
        <button type="button" className="tekstknop" onClick={() => navigeer('/inloggen')}>← Ander account</button>
        <span className="mono">{staat.email}</span>
      </div>
    </div>
  );
}
