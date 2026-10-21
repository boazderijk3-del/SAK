// SAK gedeelde opslag (prototype): localStorage, gedeeld tussen Meldkamer, Beheer, Mobiel en Publiek.
(function(){
const KEY='sak.v2';
const uid=p=>(p||'X')+Date.now().toString(36)+Math.random().toString(36).slice(2,5);
function planSVG(title,rooms,w,h){w=w||1000;h=h||640;
  const r=rooms.map(([x,y,rw,rh,l,f])=>`<rect x="${x}" y="${y}" width="${rw}" height="${rh}" fill="${f||'#141a20'}" stroke="#4a5560" stroke-width="4"/><text x="${x+rw/2}" y="${y+rh/2}" fill="#7d8893" font-family="Arial" font-size="18" letter-spacing="2" text-anchor="middle" dominant-baseline="middle">${l.toUpperCase()}</text>`).join('');
  const s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"><rect width="${w}" height="${h}" fill="#0c1014"/><g opacity=".35" stroke="#1d242b" stroke-width="1">${Array.from({length:Math.ceil(w/40)},(_,i)=>`<line x1="${i*40}" y1="0" x2="${i*40}" y2="${h}"/>`).join('')}${Array.from({length:Math.ceil(h/40)},(_,i)=>`<line x1="0" y1="${i*40}" x2="${w}" y2="${i*40}"/>`).join('')}</g>${r}<text x="24" y="${h-22}" fill="#56606a" font-family="Arial" font-size="14" letter-spacing="3">${title.toUpperCase()} · VOORBEELD</text></svg>`;
  return 'data:image/svg+xml;utf8,'+encodeURIComponent(s);}
function seed(){
  const roles=[['R-TL','Teamleider','TL','#f2b33d'],['R-BEV','Beveiliger','BEV','#5cc8ff'],['R-POR','Portier','POR','#9aa4ad'],['R-INT','Interventie','INT','#ff5f57'],['R-EHBO','EHBO\'er','EHBO','#4fd18b'],['R-MK','Meldkamer','MK','#c792ea'],['R-COO','Coördinator','COO','#f2d64b']].map(([id,name,code,color])=>({id,name,code,color}));
  const staff=[['S1','Sanne de Vries','R-TL'],['S2','Mark Jansen','R-INT'],['S3','Lotte Bakker','R-EHBO'],['S4','Daan Visser','R-INT'],['S5','Fleur Smit','R-POR'],['S6','Ruben Mulder','R-POR'],['S7','Noor de Boer','R-BEV'],['S8','Tim Bos','R-BEV'],['S9','Eva Dekker','R-COO'],['S10','Joris van Dijk','R-EHBO'],['S11','Iris Meijer','R-MK'],['S12','Youssef El Amrani','R-INT']].map(([id,name,role])=>({id,name,role}));
  const invCats=[['C-PORTO','Portofoon','PORTO-','settings_input_antenna',3],['C-OOR','Oortje','OOR-','earbuds',3],['C-HES','Hesje','HES-','checkroom',3],['C-SLE','Sleutel','SL-','key',2],['C-BC','Bodycam','BC-','videocam',2],['C-EHBO','EHBO-tas','EHBO-','medical_services',2]].map(([id,name,prefix,icon,pad])=>({id,name,prefix,icon,pad}));
  const pad=(n,p)=>String(n).padStart(p,'0');
  const items=[];
  const add=(cat,n,label,st)=>{const c=invCats.find(x=>x.id===cat);for(let i=1;i<=n;i++)items.push({id:uid('I'),cat,code:c.prefix+pad(i,c.pad),label,status:(st&&st[i])||'Beschikbaar',note:''});};
  add('C-PORTO',16,'Motorola DP4400e',{3:'Uitgegeven',4:'Uitgegeven',7:'Uitgegeven',11:'Defect'});
  add('C-OOR',16,'Surveillance-oortje 1-draads',{3:'Uitgegeven',4:'Uitgegeven',9:'Kwijt'});
  add('C-HES',20,'Hesje geel, opdruk SECURITY',{1:'Uitgegeven',2:'Uitgegeven',5:'Uitgegeven'});
  add('C-SLE',6,'Sleutelbos soos');
  add('C-BC',4,'Bodycam',{2:'Onderhoud'});
  add('C-EHBO',3,'EHBO-tas groot');
  items.find(i=>i.code==='PORTO-011').note='Accu laadt niet op';
  items.find(i=>i.code==='OOR-009').note='Niet ingeleverd na dienst 2 okt';
  const clients=[{id:'K-ODY',name:'S.V. Odysseus',kind:'Studentenvereniging',contact:'Bestuur (ab-actis)',phone:'030 231 4455'},{id:'K2',name:'Mojo Concerts',kind:'Evenementenorganisatie',contact:'L. Verbeek',phone:'020 530 8800'}];
  const projects=[{id:'PJ-SOOS',client:'K-ODY',name:'Soos · deurbeleid',type:'Deurbeleid',schedule:'wo · do · za 22:00–04:00'},{id:'PJ-LUS',client:'K-ODY',name:'Lustrumfestival Odysseus',type:'Festival',schedule:'14–15 mei'},{id:'PJ-MOJO',client:'K2',name:'Zomerpark Live',type:'Festival',schedule:'juli'}];
  const plans=[
    {id:'PL1',owner:'PJ-SOOS',name:'Begane grond',order:0,src:planSVG('Soos · begane grond',[[40,60,220,180,'Entree'],[40,240,220,150,'Garderobe'],[260,60,480,420,'Grote zaal'],[740,60,220,200,'Bar'],[740,260,220,120,'Toiletten'],[740,380,220,100,'Rookruimte'],[40,390,220,90,'Trap']]),markers:[]},
    {id:'PL2',owner:'PJ-SOOS',name:'1e verdieping',order:1,src:planSVG('Soos · 1e verdieping',[[40,60,220,90,'Trap'],[260,60,460,300,'Bovenzaal'],[720,60,240,180,'Bar boven'],[720,240,240,120,'Bestuurskamer'],[40,150,220,210,'Gang']]),markers:[]},
    {id:'PL3',owner:'PJ-LUS',name:'Festivalterrein',order:0,src:planSVG('Lustrumfestival · terrein',[[360,40,320,160,'Hoofdpodium'],[60,240,200,140,'Bar 1'],[780,240,180,140,'Bar 2'],[420,260,200,120,'Publiek'],[60,470,240,120,'Ingang'],[720,470,140,120,'EHBO'],[880,470,100,120,'MK']]),markers:[]}];
  const positions=[];
  const pos=(owner,name,type,plan,x,y,staffIds)=>{const p={id:uid('P'),owner,name,type,staff:staffIds||[]};positions.push(p);if(plan)plans.find(q=>q.id===plan).markers.push({pos:p.id,x,y});};
  pos('PJ-SOOS','Deur 1 · hoofdingang','Deur','PL1',8,22,['S5','S6']);
  pos('PJ-SOOS','Garderobe','Post','PL1',22,48,[]);
  pos('PJ-SOOS','Zaal · vloer','Post','PL1',48,45,['S2']);
  pos('PJ-SOOS','Bar beneden','Bar','PL1',84,26,[]);
  pos('PJ-SOOS','Nooduitgang zaal','Nooduitgang','PL1',73,80,[]);
  pos('PJ-SOOS','Bovenzaal','Post','PL2',48,35,['S12']);
  pos('PJ-SOOS','Trap boven','Post','PL2',14,16,[]);
  pos('PJ-SOOS','Fietsenstalling','Post',null,0,0,[]);
  pos('PJ-LUS','Ingang · toegangscontrole','Deur','PL3',17,83,[]);
  pos('PJ-LUS','EHBO-post','EHBO','PL3',77,83,['S3']);
  pos('PJ-LUS','Meldkamer','Meldkamer','PL3',94,83,['S11']);
  pos('PJ-LUS','Front of stage','Post','PL3',52,36,['S4']);

  const now=Date.now(),M=6e4,H=36e5,D=864e5;
  const posId=n=>(positions.find(p=>p.name===n)||{}).id||null;
  const persons=[['PS1','Bas Koning',true,'ODY-21437','Lang, blond krullend haar. Lid sinds 2023.'],['PS2','Thijs Verbeek',true,'ODY-22018',''],['PS3','Onbekende man (dader 2)',false,'','Man, ±25 jaar, kaal, zwart trainingsjack met witte strepen, tattoo rechteronderarm.'],['PS4','Julia Hendriks',true,'ODY-20911',''],['PS5','Mees van Leeuwen',true,'ODY-19876',''],['PS6','Kevin de Groot',false,'','Introducé, kwam mee met lid ODY-20911.'],['PS7','Sophie Willems',true,'ODY-22340',''],['PS8','Daniël Kok',true,'ODY-18755',''],['PS9','Anouk Peters',true,'ODY-23102','']].map(([id,name,member,memberNo,desc])=>({id,name,member,memberNo,client:'K-ODY',desc,photo:null,dob:'',phone:'',address:'',city:'',idDoc:''}));
  const pp=id=>persons.find(p=>p.id===id);Object.assign(pp('PS1'),{dob:'2003-04-12',phone:'06 2345 6789',address:'Biltstraat 112',city:'Utrecht',idDoc:'Rijbewijs ···4471'});Object.assign(pp('PS2'),{dob:'2004-09-02',phone:'06 8765 4321',city:'Utrecht'});Object.assign(pp('PS7'),{phone:'06 1122 3344'});
  const med=(conscious,breathing,injury,treated,notes)=>({has:true,conscious,breathing,injury,treated,notes:notes||''});
  const TK=(id,title,to,status,ago,times,fb)=>({id,title,to,status,ts:now-ago*M,times:Object.fromEntries(Object.entries(times).map(([k,v])=>[k,now-v*M])),feedback:(fb||[]).map(([m,by,text])=>({ts:now-m*M,by,text}))});
  const D16=16*1440;
  const reports=[
    {id:'M1020',no:'M-1020',ts:now-D16*M,src:'medewerker',by:'S7',type:'Overlast',prio:'P3',project:'PJ-SOOS',pos:posId('Garderobe'),loc:'',text:'Lid maakt ruzie met garderobepersoneel over een kwijtgeraakte jas en scheldt personeel uit.',photos:[],medical:null,status:'Opgelost',taken:{by:'S11',ts:now-(D16-1)*M},tasks:[TK('T20','Naar garderobe, gemoederen bedaren',['S2'],'Afgerond',D16-1,{Uitgezet:D16-1,Onderweg:D16-2,'Ter plaatse':D16-4,Afgerond:D16-20})],persons:[{person:'PS1',role:'Dader'},{person:'PS7',role:'Getuige'}],log:[],resolved:{by:'S2',ts:now-(D16-20)*M,note:'Gesprek gevoerd, jas teruggevonden. Bas Koning mondeling gewaarschuwd.'}},
    {id:'M1036',no:'M-1036',ts:now-200*M,src:'medewerker',by:'S6',type:'Onveilige situatie',prio:'P2',project:'PJ-SOOS',pos:posId('Nooduitgang zaal'),loc:'',text:'Nooduitgang geblokkeerd door lege kratten.',photos:[],medical:null,status:'Opgelost',taken:{by:'S11',ts:now-199*M},tasks:[TK('T36','Nooduitgang vrijmaken',['S6'],'Afgerond',198,{Uitgezet:198,Onderweg:197,'Ter plaatse':195,Afgerond:188})],persons:[],log:[],resolved:{by:'S6',ts:now-188*M,note:'Kratten naar de opslag gebracht.'}},
    {id:'M1039',no:'M-1039',ts:now-150*M,src:'medewerker',by:'S7',type:'Onveilige situatie',prio:'P3',project:'PJ-SOOS',pos:posId('Nooduitgang zaal'),loc:'',text:'Losliggende kabel over de vloer bij de nooduitgang, struikelgevaar.',photos:[],medical:null,status:'In behandeling',tasks:[TK('T39','Kabel afplakken bij nooduitgang zaal',['S6'],'Uitgezet',5,{Uitgezet:5})],persons:[],log:[]},
    {id:'M1041',no:'M-1041',ts:now-95*M,src:'medewerker',by:'S5',type:'Vechtpartij',prio:'P1',project:'PJ-SOOS',pos:posId('Bar beneden'),loc:'',text:'Vechtpartij bij de bar beneden, drie man. Eén persoon bloedt aan het hoofd.',photos:[],medical:med('Ja','Normaal','Bloedende wond hoofd','EHBO onderweg'),status:'Omgezet',incident:'INC187',taken:{by:'S11',ts:now-94*M},
      tasks:[TK('T41','Interventie naar bar beneden',['S2','S12'],'Afgerond',94,{Uitgezet:94,Onderweg:94,'Ter plaatse':92,Afgerond:90},[[92,'S2','Ter plaatse, drie personen in gevecht.']]),TK('T41b','EHBO naar bar beneden',['S3'],'Afgerond',93,{Uitgezet:93,Onderweg:92,'Ter plaatse':89,Afgerond:75})],
      persons:[{person:'PS1',role:'Dader'},{person:'PS2',role:'Slachtoffer'},{person:'PS7',role:'Getuige'}],log:[]},
    {id:'M1042',no:'M-1042',ts:now-40*M,src:'medewerker',by:'S12',type:'Onwel',prio:'P2',project:'PJ-SOOS',pos:posId('Bovenzaal'),loc:'',text:'Jonge vrouw onwel geworden in de bovenzaal, zit op de grond.',photos:[],medical:med('Ja','Normaal','Geen zichtbaar letsel','Lotte (EHBO) ter plaatse','Vermoedelijk te veel alcohol. Vriendin is bij haar.'),status:'In behandeling',taken:{by:'S11',ts:now-39*M},
      tasks:[TK('T42','EHBO naar bovenzaal',['S3'],'Ter plaatse',39,{Uitgezet:39,Onderweg:38,'Ter plaatse':35},[[33,'S3','Aanspreekbaar, krijgt water. Vriendin blijft bij haar.']])],
      persons:[{person:'PS9',role:'Zorgvrager'},{person:'PS4',role:'Betrokkene'}],log:[]},
    {id:'M1044',no:'M-1044',ts:now-12*M,src:'publiek',by:null,contact:{anon:true},type:'Verdachte situatie',prio:'P2',project:'PJ-SOOS',pos:null,loc:'Toiletten beneden',text:'Iemand deelt pillen uit bij de toiletten. Jongen met rode pet.',photos:[],medical:null,status:'Nieuw',tasks:[],persons:[],log:[]},
    {id:'M1045',no:'M-1045',ts:now-4*M,src:'publiek',by:null,contact:{anon:false,name:'Emma',phone:'06 1234 5678'},type:'Onveilige situatie',prio:'P3',project:'PJ-SOOS',pos:null,loc:'Dansvloer, bij het podium',text:'Overal glasscherven op de dansvloer.',photos:[],medical:null,status:'In behandeling',tasks:[TK('T45','Glasscherven dansvloer: plek afzetten, bar om bezem vragen',['S5'],'Uitgezet',1,{Uitgezet:1})],persons:[],log:[]}];
  const incidents=[
    {id:'INC172',no:'INC-2026-0172',ts:now-14*D,title:'Agressie aan de deur',type:'Agressie',status:'Afgesloten',scope:'project',project:'PJ-SOOS',client:'K-ODY',report:null,toedracht:'Introducé werd geweigerd wegens dronkenschap en werd verbaal agressief tegen de portiers.',medical:null,persons:[{person:'PS6',role:'Dader',injury:'',statement:''},{person:'PS4',role:'Betrokkene',injury:'',statement:'Lid dat hem had meegenomen.'}],tasks:[],reportReq:true,rapport:{text:'',by:'S5',done:true,doneTs:now-14*D+2*H,aanleiding:'Introducé geweigerd wegens dronkenschap.',maatregelen:'Toegang geweigerd en verzocht te vertrekken.',afloop:'Na tien minuten vertrokken.',nazorg:'Lid ODY-20911 aangesproken door het bestuur.',politie:{ja:false,reg:'',eenheid:''},ambulance:{ja:false,vervoerd:null,ziekenhuis:''},camera:false,geweld:{ja:false,text:''}},log:[{ts:now-14*D,by:'S5',text:'Incident geregistreerd aan de deur.'},{ts:now-14*D+2*H,by:'S1',text:'Afgesloten.'}],photos:[],bolo:null},
    {id:'INC187',no:'INC-2026-0187',ts:now-93*M,title:'Vechtpartij bar beneden',type:'Vechtpartij',status:'Lopend',scope:'org',project:'PJ-SOOS',client:'K-ODY',report:'M1041',
      toedracht:'Ruzie aan de bar over voordringen. Bas Koning duwde Thijs Verbeek, waarna een onbekende man Thijs met een glas sloeg. Dader 2 vluchtte richting dansvloer en vertrok via de hoofdingang.',
      medical:med('Ja','Normaal','Snijwond boven linkerwenkbrauw (±2 cm)','Hechtstrips door Lotte (EHBO), advies huisarts'),
      persons:[{person:'PS1',role:'Dader',injury:'',statement:'Geeft duwen toe, ontkent slaan.'},{person:'PS2',role:'Slachtoffer',injury:'Snijwond wenkbrauw',statement:'Werd met een glas geslagen door een onbekende man.'},{person:'PS3',role:'Dader',injury:'',statement:'Gevlucht.'},{person:'PS7',role:'Getuige',injury:'',statement:'Zag dader 2 slaan met een glas.'}],
      tasks:[{id:'T1',title:'Partijen scheiden bij bar beneden',to:['S2','S12'],status:'Afgerond',ts:now-92*M,feedback:[{ts:now-89*M,by:'S2',text:'Ter plaatse. Twee personen gescheiden, één gevlucht richting dansvloer.'},{ts:now-80*M,by:'S12',text:'Bas Koning buiten gezet, gegevens genoteerd.'}]},{id:'T2',title:'Camerabeelden bar veiligstellen (laatste uur)',to:['S1'],status:'Ontvangen',ts:now-60*M,times:{Uitgezet:now-60*M,Ontvangen:now-59*M},ack:{by:'S1',ts:now-59*M},feedback:[{ts:now-59*M,by:'S1',text:'Ontvangen'}]}],
      reportReq:true,rapport:{text:'',by:'S1',done:false,aanleiding:'Ruzie aan de bar over voordringen.',maatregelen:'Partijen gescheiden door interventieteam. Bas Koning verwijderd. EHBO verleend aan slachtoffer. BOLO uitgezet voor dader 2.',afloop:'',nazorg:'',politie:{ja:null,reg:'',eenheid:''},ambulance:{ja:false,vervoerd:null,ziekenhuis:''},camera:null,geweld:{ja:true,text:'Bas Koning bij de arm naar buiten begeleid (lichte fysieke dwang).'}},
      log:[{ts:now-93*M,by:'MK',text:'Incident aangemaakt vanuit melding M-1041.'},{ts:now-75*M,by:'MK',text:'BOLO-031 uitgezet voor dader 2.'},{ts:now-70*M,by:'S1',text:'Sanctie: Bas Koning, ontzegging 3 maanden (hele organisatie).'}],photos:[],bolo:'BOLO1'}];
  const sanctions=[
    {id:'SN1',person:'PS1',incident:'INC187',type:'Ontzegging',amount:0,paid:false,from:now-70*M,until:now+91*D,scope:'org',project:'PJ-SOOS',client:'K-ODY',reason:'Betrokken bij vechtpartij (duwen).',by:'S1',ts:now-70*M},
    {id:'SN2',person:'PS6',incident:'INC172',type:'Geweigerd',amount:0,paid:false,from:now-14*D,until:now-14*D+6*H,scope:'project',project:'PJ-SOOS',client:'K-ODY',reason:'Dronken en agressief aan de deur.',by:'S5',ts:now-14*D},
    {id:'SN3',person:'PS5',incident:null,type:'Royement',amount:0,paid:false,from:now-200*D,until:null,scope:'org',project:null,client:'K-ODY',reason:'Geroyeerd door het bestuur na herhaald wangedrag.',by:'S9',ts:now-200*D},
    {id:'SN4',person:'PS8',incident:null,type:'Boete',amount:50,paid:false,forwardTo:'Bestuur (ab-actis) · S.V. Odysseus',forwarded:{ts:now-29*D,by:'S1'},from:now-30*D,until:null,scope:'org',project:null,client:'K-ODY',reason:'Schade aan meubilair bovenzaal.',by:'S1',ts:now-30*D},
    {id:'SN5',person:'PS4',incident:null,type:'Ontzegging',amount:0,paid:false,from:now-120*D,until:now-30*D,scope:'project',project:'PJ-SOOS',client:'K-ODY',reason:'Drank meegesmokkeld.',by:'S1',ts:now-120*D}];
  const bolos=[{id:'BOLO1',no:'BOLO-031',ts:now-75*M,incident:'INC187',person:'PS3',title:'Dader vechtpartij · gevlucht',desc:'Man, ±25 jaar, kaal, zwart trainingsjack met witte strepen, tattoo rechteronderarm. Vertrokken via hoofdingang richting Oudegracht.',photo:null,status:'Actief',scope:'org',project:'PJ-SOOS',client:'K-ODY'}];
  const messages=[{id:'MS1',ts:now-74*M,from:'MK',text:'Let op BOLO-031: dader vechtpartij mogelijk nog in de buurt. Deur 1 extra alert.'},{id:'MS2',ts:now-50*M,from:'S5',text:'Deur 1 rustig, wachtrij ±15 man.'},{id:'MS3',ts:now-22*M,from:'S3',text:'Persoon bovenzaal stabiel, vriendin brengt haar zo naar huis.'}];
  return {v:6,me:'MK',roles,staff,invCats,items,clients,projects,plans,positions,persons,reports,incidents,sanctions,bolos,messages,counters:{M:1045,INC:187,BOLO:31}};
}
function read(){try{const t=localStorage.getItem(KEY);if(t){const d=JSON.parse(t);if(d&&d.v===6)return norm(d);}}catch(e){}const d=norm(seed());write(d);return d;}
function norm(d){
  d.reports.forEach(r=>{r.tasks=r.tasks||[];r.persons=r.persons||[];r.log=r.log||[];r.photos=r.photos||[];});
  d.incidents.forEach(i=>{i.tasks=i.tasks||[];i.persons=i.persons||[];i.log=i.log||[];i.photos=i.photos||[];i.toedracht=i.toedracht||'';const R=i.rapport||{};
    i.rapport=Object.assign({by:null,done:false,doneTs:null,text:'',aanleiding:'',maatregelen:'',afloop:'',nazorg:'',camera:null},R,{politie:Object.assign({ja:null,reg:'',eenheid:''},R.politie||{}),ambulance:Object.assign({ja:null,vervoerd:null,ziekenhuis:''},R.ambulance||{}),geweld:Object.assign({ja:null,text:''},R.geweld||{})});});
  d.persons.forEach(p=>{['dob','phone','address','city','idDoc','desc'].forEach(k=>{if(p[k]==null)p[k]='';});});
  return d;}
function write(d){try{localStorage.setItem(KEY,JSON.stringify(d));return true;}catch(e){console.warn('SAK opslag vol',e);return false;}}

const SANC_LEVEL={Royement:3,Ontzegging:3,Boete:2,Geweigerd:1};
const H={
  isActive(sn,t){t=t||Date.now();if(sn.type==='Boete')return !sn.forwarded;return sn.from<=t&&(sn.until==null||sn.until>=t);},
  applies(sn,project,client){return sn.scope==='org'?sn.client===client:sn.project===project;},
  status(d,pid,project){const pj=d.projects.find(p=>p.id===project),client=pj?pj.client:project;const act=d.sanctions.filter(sn=>sn.person===pid&&H.isActive(sn)&&H.applies(sn,project,client));
    if(!act.length)return {level:0,label:'Geen actieve sanctie',col:'#4fd18b',act};const top=act.slice().sort((a,b)=>SANC_LEVEL[b.type]-SANC_LEVEL[a.type])[0];
    const lv=SANC_LEVEL[top.type];return {level:lv,label:top.type==='Boete'?'Boete €'+top.amount+' nog door te geven':top.type+(top.until?' t/m '+H.date(top.until):(top.type==='Royement'?' (permanent)':'')),col:lv>=3?'#ff5f57':'#f2b33d',act,top};},
  date(t){return new Date(t).toLocaleDateString('nl-NL',{day:'numeric',month:'short',year:'numeric'});},
  time(t){return new Date(t).toLocaleTimeString('nl-NL',{hour:'2-digit',minute:'2-digit'});},
  when(t){const d=new Date(t),n=new Date();return d.toDateString()===n.toDateString()?H.time(t):d.toLocaleDateString('nl-NL',{day:'numeric',month:'short'})+' '+H.time(t);},
  ago(t){const m=Math.round((Date.now()-t)/6e4);return m<1?'zojuist':m<60?m+' min':m<1440?Math.floor(m/60)+' u '+(m%60)+' m':Math.floor(m/1440)+' d';},
  dur(ms){const m=Math.max(0,Math.round(ms/6e4));return m<60?m+' min':Math.floor(m/60)+' u '+(m%60)+' min';},
  // historie van een persoon: active=true (dader), false (passief: melder, getuige, zorgvrager, slachtoffer, betrokkene), null (BOLO)
  history(d,pid){const out=[],act=r=>r==='Dader';
    d.incidents.forEach(i=>(i.persons||[]).forEach(x=>{if(x.person===pid)out.push({kind:'Incident',k:'i',id:i.id,no:i.no,title:i.title,role:x.role,ts:i.ts,active:act(x.role)});}));
    const inInc=new Set(out.map(e=>e.id));
    d.reports.forEach(r=>(r.persons||[]).forEach(x=>{if(x.person===pid&&!(r.incident&&inInc.has(r.incident)))out.push({kind:'Melding',k:'r',id:r.id,no:r.no,title:r.type+' · '+r.text,role:x.role,ts:r.ts,active:act(x.role)});}));
    d.bolos.forEach(b=>{if(b.person===pid)out.push({kind:'BOLO',k:'i',id:b.incident,no:b.no,title:b.title,role:'Gezocht',ts:b.ts,active:null});});
    return out.sort((a,b)=>b.ts-a.ts);},
  who(d,id){if(!id)return 'Publiek';if(id==='MK')return 'Meldkamer';const s=d.staff.find(x=>x.id===id);return s?s.name:id;},
  sancText(sn){return sn.type==='Boete'?'Boete €'+sn.amount+(sn.forwarded?' · doorgegeven':' · nog door te geven'):sn.type==='Royement'?'Royement':sn.type==='Geweigerd'?'Geweigerd '+H.date(sn.from):'Ontzegging '+H.date(sn.from)+' t/m '+(sn.until?H.date(sn.until):'onbepaald');},
  next(d,k){d.counters[k]=(d.counters[k]||0)+1;return d.counters[k];},
  search(d,q){q=(q||'').trim().toLowerCase();if(q.length<2)return null;const has=s=>(s||'').toLowerCase().includes(q);
    const persons=d.persons.filter(p=>has(p.name)||has(p.memberNo)||has(p.desc));const pids=new Set(persons.map(p=>p.id));
    const posName=id=>(d.positions.find(p=>p.id===id)||{}).name||'';
    const incidents=d.incidents.filter(i=>has(i.no)||has(i.title)||has(i.type)||has(i.toedracht)||i.persons.some(x=>pids.has(x.person)||has(x.statement)||has(x.injury))||i.tasks.some(t=>has(t.title)||t.feedback.some(f=>has(f.text)))||i.log.some(l=>has(l.text)));
    const reports=d.reports.filter(r=>(r.persons||[]).some(x=>pids.has(x.person))||has(r.no)||has(r.type)||has(r.text)||has(r.loc)||has(posName(r.pos))||has(H.who(d,r.by))||(r.contact&&(has(r.contact.name)||has(r.contact.phone))));
    const sanctions=d.sanctions.filter(s=>pids.has(s.person)||has(s.type)||has(s.reason));
    const bolos=d.bolos.filter(b=>has(b.no)||has(b.title)||has(b.desc)||pids.has(b.person));
    return {persons,incidents,reports,sanctions,bolos,total:persons.length+incidents.length+reports.length+sanctions.length+bolos.length};}
};
let cache=null;const subs=new Set();
const SAK={
  uid,h:H,
  get(){if(!cache)cache=read();return cache;},
  set(fn){const d=JSON.parse(JSON.stringify(SAK.get()));const r=norm(fn(d)||d);const ok=write(r);if(ok){cache=r;subs.forEach(f=>f(r));}return ok;},
  on(fn){subs.add(fn);return()=>subs.delete(fn);},
  reset(){cache=seed();write(cache);subs.forEach(f=>f(cache));},
  downscale(file,max){max=max||1800;return new Promise((res,rej)=>{const fr=new FileReader();fr.onerror=rej;fr.onload=()=>{const img=new Image();img.onerror=rej;img.onload=()=>{const k=Math.min(1,max/Math.max(img.width,img.height)),c=document.createElement('canvas');c.width=Math.round(img.width*k);c.height=Math.round(img.height*k);c.getContext('2d').drawImage(img,0,0,c.width,c.height);res(c.toDataURL('image/jpeg',.82));};img.src=fr.result;};fr.readAsDataURL(file);});}
};
window.addEventListener('storage',e=>{if(e.key===KEY){cache=null;const d=SAK.get();subs.forEach(f=>f(d));}});
window.SAK=SAK;window.dispatchEvent(new Event('sak-ready'));
})();
