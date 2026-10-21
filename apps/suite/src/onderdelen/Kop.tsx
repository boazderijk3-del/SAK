import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSessie } from '../sessie/sessie';

export function Kop() {
  const { gebruiker, uitloggen } = useSessie();
  const navigeer = useNavigate();
  const [open, setOpen] = useState(false);
  const vak = useRef<HTMLDivElement>(null);

  // Esc en een klik buiten het paneel sluiten het (W3 doet dezelfde eis aan de
  // programmawisselaar; een paneel dat alleen met de knop dichtgaat is een val).
  useEffect(() => {
    if (!open) return;
    const opToets = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const opKlik = (e: MouseEvent) => {
      if (vak.current && !vak.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', opToets);
    document.addEventListener('mousedown', opKlik);
    return () => {
      document.removeEventListener('keydown', opToets);
      document.removeEventListener('mousedown', opKlik);
    };
  }, [open]);

  return (
    <header className="kop">
      <div className="kop-links">
        <div className="merktekens" aria-hidden="true">
          <span className="merk-phylax" />
          <span className="merk-sak" />
          <span className="merk-ophanim" />
        </div>
        <div className="woordmerk">Phylax · SAK · Ophanim</div>
      </div>

      {gebruiker && (
        <div className="gebruiker" ref={vak}>
          <button className="gebruiker-knop" onClick={() => setOpen(o => !o)} aria-expanded={open}>
            <span className="initialen">{gebruiker.initialen}</span>
            <span className="gebruiker-naam">{gebruiker.naam}</span>
            <span className="gebruiker-pijl">▾</span>
          </button>
          {open && (
            <div className="gebruiker-paneel">
              <div className="gebruiker-hoofd">
                <b>{gebruiker.naam}</b>
                <span>{gebruiker.email}</span>
              </div>
              <button className="menu-regel" onClick={() => { setOpen(false); navigeer('/account'); }}>
                Account en beveiliging
              </button>
              <button className="menu-regel" onClick={() => { setOpen(false); uitloggen(); navigeer('/inloggen', { replace: true }); }}>
                Uitloggen
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
