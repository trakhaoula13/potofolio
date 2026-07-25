import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

document.documentElement.setAttribute('data-bs-theme', 'light'); // ✅ au lieu de 'somber'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);