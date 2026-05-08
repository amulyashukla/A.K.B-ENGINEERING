import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useVisitorTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page visit
    const visitorData = {
      page: location.pathname,
      timestamp: new Date().toLocaleString(),
      userAgent: navigator.userAgent,
      ip: 'Local', // In a real app, you'd get this from the server
    };

    // Store visitor data
    const existingVisitors = JSON.parse(localStorage.getItem('akb_visitors') || '[]');
    existingVisitors.push(visitorData);

    // Keep only last 1000 entries to prevent storage bloat
    if (existingVisitors.length > 1000) {
      existingVisitors.splice(0, existingVisitors.length - 1000);
    }

    localStorage.setItem('akb_visitors', JSON.stringify(existingVisitors));
  }, [location.pathname]);
};