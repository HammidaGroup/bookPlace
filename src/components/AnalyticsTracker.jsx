import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Check if gtag is loaded
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-Y6SWLQKBB0", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

export default AnalyticsTracker;