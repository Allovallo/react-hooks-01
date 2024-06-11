// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './userContext';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <App />
  </UserProvider>
);
