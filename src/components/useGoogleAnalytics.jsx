'use client'

import { useEffect } from 'react';

const useGoogleAnalytics = (trackingId) => {
  useEffect(() => {
    // Load the Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', trackingId);

    // Clean up
    return () => {
      document.head.removeChild(script);
    };
  }, [trackingId]);
};

export default useGoogleAnalytics;
