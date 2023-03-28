import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AppState from './context/AppState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppState>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AppState>
  </React.StrictMode>
);