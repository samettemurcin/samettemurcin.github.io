import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// On localhost, .env.development sets PUBLIC_URL=/ so scripts load from /static/...
// not /Portfolio/static/... (see package.json homepage for production asset paths).
// HashRouter uses #/ routes so GitHub Pages serves index.html for all paths.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to measure performance, pass a function to reportWebVitals (e.g. console.log)
reportWebVitals();
