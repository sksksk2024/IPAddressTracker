import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const sendToAnalytics = (metric: any): void => {
  // Ensure the 'ev' (event value) is a string
  const params = {
    v: '1', // API version
    tid: 'UA-XXXXXX-Y', // Google Analytics Tracking ID
    cid: '555', // Client ID
    t: 'event', // Event type
    ec: 'Web Vitals', // Event category
    ea: metric.name, // Event action (e.g., LCP, FID)
    el: metric.id, // Event label
    ev: String(Math.round(metric.value)), // Convert 'ev' value to string
  };

  const queryString = new URLSearchParams(params).toString();

  fetch(`https://www.google-analytics.com/collect?${queryString}`, {
    method: 'POST',
  })
    .then(() => {
      console.log('Web Vitals data sent to Google Analytics');
    })
    .catch((error) => {
      console.error('Error sending metric to Google Analytics:', error);
    });
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Pass 'sendToAnalytics' function to reportWebVitals
reportWebVitals(sendToAnalytics);
