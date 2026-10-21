import { useNavigate } from 'react-router-dom';
import { useSessie } from '../sessie/sessie';
import { ACCOUNT_RIJEN, SESSIES } from '../seed';

export function Account() {
  const { gebruiker } = useSessie();
  const navigeer = useNavigate();

  return (
    <main className="account">
      <button className="terug" onClick={() => navigeer('/')}>← Programma's</button>
      <h1>Account en beveiliging</h1>

      <div className="rijen">
        {ACCOUNT_RIJEN(gebruiker?.email ?? '').map(r => (
          <div className="rij" key={r.k}>
            <span className="rij-k">{r.k}</span>
            <span className="rij-v">{r.v}</span>
            <span className="rij-a">{r.a}</span>
          </div>
        ))}
      </div>

      <div className="sessies">
        <div className="eyebrow">ACTIEVE SESSIES</div>
        {SESSIES.map(s => (
          <div className="sessie" key={s.apparaat}>
            <div className="sessie-naam">
              <b>{s.apparaat}</b>
              <span>{s.meta}</span>
            </div>
            <span style={{
              fontSize: 'var(--font-size-md)',
              color: s.huidig ? 'var(--color-status-bevestigd)' : 'var(--color-text-muted)',
            }}>{s.actie}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
