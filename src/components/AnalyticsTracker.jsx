import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-Y6SWLQKBB0', {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
}

export default AnalyticsTracker;