import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.tsx';
import './assets/styles/index.scss';
import 'normalize.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
