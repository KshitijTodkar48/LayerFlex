import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top if NOT on the homepage.
    if (pathname !== "/") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

   return null;
}