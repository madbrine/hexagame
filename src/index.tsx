import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createCtx } from '@reatom/core'
import { reatomContext } from '@reatom/npm-react'
import Main from './Main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const ctx = createCtx();

root.render(
  <reatomContext.Provider value={ctx}>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </reatomContext.Provider>
);

