// <sak-pin-picker lat lng> — tik om een plek te kiezen. Stuurt window-event 'sak-pin' {lat,lng}; luistert naar 'sak-pin-set'.
(function(){
  const CSS={href:'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',integrity:'sha384-sHL9NAb7lN7rfvG5lfHpm643Xkcjzp4jFvuavGOndn6pjVqS6ny56CAt3nsEVT4H'};
  const JS={src:'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',integrity:'sha384-cxOPjt7s7Iz04uaHJceBmS+qpjv2JkIHNVcuOrM+YHwZOmJGBXI00mdUXEq65HTH'};
  let loading=null;
  function loadLeaflet(){
    if(window.L)return Promise.resolve();
    if(loading)return loading;
    loading=new Promise((res,rej)=>{
      if(!document.querySelector('link[href="'+CSS.href+'"]')){const l=document.createElement('link');l.rel='stylesheet';l.href=CSS.href;l.integrity=CSS.integrity;l.crossOrigin='anonymous';document.head.appendChild(l);}
      const s=document.createElement('script');s.src=JS.src;s.integrity=JS.integrity;s.crossOrigin='anonymous';s.onload=()=>res();s.onerror=rej;document.head.appendChild(s);
    });
    return loading;
  }
  class PinPicker extends HTMLElement{
    connectedCallback(){
      if(this._init)return;this._init=true;
      this.style.display='block';this.style.position='relative';this.style.width='100%';this.style.height=this.getAttribute('height')||'100%';this.style.minHeight='280px';
      const box=document.createElement('div');box.style.cssText='position:absolute;inset:0;background:#e9eef4';this.appendChild(box);
      const st=document.createElement('style');st.textContent='sak-pin-picker .leaflet-tile-pane{filter:saturate(.25) brightness(1.04)}';this.appendChild(st);
      loadLeaflet().then(()=>{
        const c=[parseFloat(this.getAttribute('lat'))||52.1578,parseFloat(this.getAttribute('lng'))||4.4862];
        const map=L.map(box,{zoomControl:true,attributionControl:true}).setView(c,16);
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',{maxZoom:19,attribution:'Kaart © Esri, HERE, Garmin, © OpenStreetMap contributors'}).addTo(map);
        const icon=L.divIcon({className:'',html:'<div style="width:22px;height:22px;background:#2c5aa0;border:3px solid #fff;box-shadow:2px 2px 0 #14161c;transform:rotate(45deg)"></div>',iconSize:[22,22],iconAnchor:[11,11]});
        let m=null;
        const put=(lat,lng,emit)=>{if(m)m.setLatLng([lat,lng]);else m=L.marker([lat,lng],{icon}).addTo(map);if(emit)window.dispatchEvent(new CustomEvent('sak-pin',{detail:{lat,lng}}));};
        map.on('click',e=>put(e.latlng.lat,e.latlng.lng,true));
        this._set=e=>{const {lat,lng}=e.detail;put(lat,lng,false);map.setView([lat,lng],17);};
        window.addEventListener('sak-pin-set',this._set);
        setTimeout(()=>map.invalidateSize(),200);
      });
    }
    disconnectedCallback(){if(this._set)window.removeEventListener('sak-pin-set',this._set);}
  }
  if(!customElements.get('sak-pin-picker'))customElements.define('sak-pin-picker',PinPicker);
})();
