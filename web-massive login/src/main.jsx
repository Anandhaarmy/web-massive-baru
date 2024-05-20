// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Pastikan ini mengimpor Tailwind CSS
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
