import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createCtx } from '@reatom/core'
import { reatomContext } from '@reatom/npm-react'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const ctx = createCtx();

root.render(
  <reatomContext.Provider value={ctx}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </reatomContext.Provider>
);

