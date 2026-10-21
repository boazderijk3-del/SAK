import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SessieProvider } from './sessie/sessie';
import { App } from './App';
import './stijl/basis.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SessieProvider>
        <App />
      </SessieProvider>
    </BrowserRouter>
  </StrictMode>,
);
