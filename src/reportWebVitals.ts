import type { Metric } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: (metric: Metric) => void): void => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals')
      .then(({ onCLS, onFID, onLCP, onFCP, onTTFB }) => {
        onCLS(onPerfEntry);
        onFID(onPerfEntry);
        onLCP(onPerfEntry);
        onFCP(onPerfEntry);
        onTTFB(onPerfEntry);
      })
      .catch((error) => {
        console.error('Error loading web-vitals:', error);
      });
  }
};

export default reportWebVitals;
