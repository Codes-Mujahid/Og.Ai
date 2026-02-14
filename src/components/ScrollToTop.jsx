import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Disable browser's default scroll restoration to avoid conflicts
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. Define a comprehensive scroll function
    const scrollToTop = () => {
      // Try standard window scroll
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // 'instant' skips animation which is better for page loads
      });
      
      // Fallback for different browser engines or quirks
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Check if #root or a main wrapper is the scroll container
      const root = document.getElementById('root');
      if (root) {
        root.scrollTop = 0;
      }
    };

    // 3. Execute immediately
    scrollToTop();

    // 4. Execute after short delays to ensure it works after render/layout updates
    const timer1 = setTimeout(scrollToTop, 10);
    const timer2 = setTimeout(scrollToTop, 50);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      // Optional: restore auto scroll restoration on unmount if needed, 
      // but for SPA navigation 'manual' is usually preferred globally.
    };
  }, [pathname]);

  return null;
}
