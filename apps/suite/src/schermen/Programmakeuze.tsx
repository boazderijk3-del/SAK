import { useSearchParams } from 'react-router-dom';
import { useSessie } from '../sessie/sessie';
import { OPDRACHTGEVERS, SAK_TEGELS } from '../seed';

export function Programmakeuze() {
  const { gebruiker } = useSessie();
  // De gekozen opdrachtgever staat in de URL, niet in state. Dan kun je dit
  // scherm delen, bookmarken, en in een tweede venster openen op dezelfde
  // opdrachtgever -- de eis uit architectuur.md over meerdere monitoren.
  const [zoek, zetZoek] = useSearchParams();
  const gekozen = zoek.get('opdrachtgever') ?? 'all';
  const vraag = gekozen === 'all' ? '' : '?opdrachtgever=' + gekozen;

  const magPhylax = !!gebruiker?.rollen.phylax;
  const magSak = !!gebruiker?.rollen.sak;

  return (
    <main className="keuze">
      <div className="keuze-kop">
        <div className="titelblok">
          <div className="eyebrow">KIES EEN PROGRAMMA</div>
          <h1>Waar ga je aan werken?</h1>
        </div>
        <label className="opdrachtgever">
          <span className="eyebrow">OPDRACHTGEVER</span>
          <select className="keuzelijst" value={gekozen}
                  onChange={e => {
                    const v = e.target.value;
                    zetZoek(v === 'all' ? {} : { opdrachtgever: v }, { replace: true });
                  }}>
            {OPDRACHTGEVERS.map(o => <option key={o.id} value={o.id}>{o.naam}</option>)}
          </select>
        </label>
      </div>

      <div className="kaarten">
        {/* S4: een programma zonder rol verschijnt hier NIET. Hem tonen en
            dan weigeren bij de klik is een belofte die je daarna breekt. */}
        {magPhylax && (
          <a className="kaart kaart-phylax" href={'/phylax' + vraag}>
            <div className="kaart-kop">
              <div className="kaart-merk">
                <span className="kaart-merk-phylax" />
                <span className="kaart-naam">Phylax</span>
              </div>
              <span className="kaart-rol">{gebruiker?.rollen.phylax}</span>
            </div>
            <p className="kaart-tekst">
              Onderzoek, casussen en rapportage. Materiaal analyseren, gegevens bevestigen, rapporten vaststellen.
            </p>
            <div className="tellers">
              <div className="teller"><span className="teller-naam">Werkbak</span><span className="teller-open">12 open</span></div>
              <div className="teller"><span className="teller-naam">Lopende onderzoeken</span><span className="teller-waarde">3</span></div>
            </div>
            <span className="kaart-open">Open Phylax →</span>
          </a>
        )}

        {magSak && (
          <div className="kaart kaart-sak">
            <div className="kaart-kop">
              <div className="sak-woordmerk">
                <b>SAK</b>
                <span>SECURITY AWARENESS KIT</span>
              </div>
              <span className="kaart-rol">{gebruiker?.rollen.sak}</span>
            </div>
            <p className="kaart-tekst">
              Beveiliging op locatie. Meldingen en incidenten, teams op de kaart, personeel en materiaal.
            </p>
            <div className="sak-tegels">
              {SAK_TEGELS.map(t => (
                <a key={t.pad} className="sak-tegel" href={t.pad + vraag}>
                  <b>{t.naam}</b>
                  <span>{t.onder}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Ophanim staat er wel, maar gedempt en niet klikbaar. Er is nog geen
            ontwerp (beslissingen.md) en er wordt niets geraden. */}
        <div className="kaart kaart-later">
          <div className="kaart-kop">
            <div className="kaart-merk">
              <span className="kaart-merk-ophanim" />
              <span className="kaart-naam">Ophanim</span>
            </div>
            <span className="kaart-rol">later</span>
          </div>
          <p className="kaart-tekst-dim">Nog niet beschikbaar.</p>
        </div>
      </div>

      <p className="voetregel">
        Je ziet alleen de programma's waar je toegang toe hebt. De gekozen opdrachtgever gaat mee naar het programma dat je opent.
      </p>
    </main>
  );
}
