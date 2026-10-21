import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function WachtwoordVergeten() {
  const navigeer = useNavigate();
  const [email, setEmail] = useState('');
  const [verstuurd, setVerstuurd] = useState(false);

  return (
    <div className="auth-kolom">
      <div className="titelblok">
        <h1>Wachtwoord herstellen</h1>
        <p>We sturen een link naar je e-mailadres. De link is 30 minuten geldig.</p>
      </div>

      {/* S6: een onbekend adres geeft PRECIES dezelfde bevestiging als een
          bekend adres. Anders is dit scherm een manier om te achterhalen wie
          er een account heeft. */}
      {verstuurd && (
        <div className="vak-goed">Als dit adres bij ons bekend is, staat de link nu in je inbox.</div>
      )}

      <label className="veld">
        <span className="veld-label">E-mailadres</span>
        <input className="invoer" value={email} placeholder="naam@organisatie.nl"
               onChange={e => setEmail(e.target.value)} />
      </label>
      <button className="knop-primair" onClick={() => setVerstuurd(true)}>Stuur herstellink</button>
      <button type="button" className="tekstknop" style={{ fontSize: 12 }} onClick={() => navigeer('/inloggen')}>
        ← Terug naar inloggen
      </button>
    </div>
  );
}
