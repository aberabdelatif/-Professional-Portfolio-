import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.css';
import App from './App';
import './utils/i18n'; // Import i18n configuration

const root = ReactDOM.createRoot(document.getElementById('root'));

// Loading component
const LoadingScreen = () => (
  <div className="loading">
    <div className="loading-spinner"></div>
  </div>
);

// Render app with loading state
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<LoadingScreen />}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);