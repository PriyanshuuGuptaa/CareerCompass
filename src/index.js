import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes } from 'react-router-dom';
import AppRoutes from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    <AppRoutes />
  </BrowserRouter>,
  document.getElementById('root')
);

