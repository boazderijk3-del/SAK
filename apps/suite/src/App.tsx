import { Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';
import { Kop } from './onderdelen/Kop';
import { Inloggen } from './schermen/Inloggen';
import { Tweestaps } from './schermen/Tweestaps';
import { WachtwoordVergeten } from './schermen/WachtwoordVergeten';
import { Programmakeuze } from './schermen/Programmakeuze';
import { Account } from './schermen/Account';
import { useSessie } from './sessie/sessie';

/** S1. Niet ingelogd en je opent een willekeurige URL: dan kom je op Inloggen,
 *  en na het inloggen terug op DIE url. De bestemming gaat mee in de
 *  navigatiestaat; hem in de URL zetten zou hem in serverlogs laten belanden. */
function Beveiligd() {
  const { gebruiker, bezig } = useSessie();
  const plek = useLocation();
  // "Nog aan het laden" is iets anders dan "niet ingelogd". Die twee door
  // elkaar halen stuurt iemand met een geldige sessie naar het inlogscherm.
  if (bezig) return null;
  if (!gebruiker) return <Navigate to="/inloggen" replace state={{ van: plek.pathname + plek.search }} />;
  return <Outlet />;
}

function AuthSchil() {
  return <main className="auth"><Outlet /></main>;
}

export function App() {
  return (
    <div className="schil">
      <Kop />
      <Routes>
        <Route element={<AuthSchil />}>
          <Route path="/inloggen" element={<Inloggen />} />
          <Route path="/inloggen/code" element={<Tweestaps />} />
          <Route path="/wachtwoord-vergeten" element={<WachtwoordVergeten />} />
        </Route>
        <Route element={<Beveiligd />}>
          <Route path="/" element={<Programmakeuze />} />
          <Route path="/account" element={<Account />} />
        </Route>
        {/* Een onbekende URL is geen reden voor een leeg scherm. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
