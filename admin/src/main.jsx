import React from 'react';
import ReactDOM from 'react-dom/client';  // Make sure this is imported
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from "react-router-dom";

// Import createRoot from ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
