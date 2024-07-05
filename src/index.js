import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AuthProvider from './contexts/auth/Provider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Router>
  // </BrowserRouter>
);
