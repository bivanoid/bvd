import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';

const scrollPositions = new Map<string, number>();

export default function ScrollRestoration() {
  const lenis = useLenis();
  const location = useLocation();
  const isFirstLoadRef = useRef(true);

  useEffect(() => {
    return () => {
      if (lenis && !isFirstLoadRef.current) {
        const scroll = Math.round(lenis.scroll);
        scrollPositions.set(location.pathname, scroll);
      }
    };
  }, [lenis, location.pathname]);

  useEffect(() => {
    if (!lenis) return;

    isFirstLoadRef.current = false;
    lenis.scrollTo(0, { immediate: true });

    const timer = setTimeout(() => {
      const savedPos = scrollPositions.get(location.pathname);
      
      if (savedPos !== undefined && savedPos > 0) {
        lenis.scrollTo(savedPos, { immediate: false, duration: 0 });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname, lenis]);

  return null;
}