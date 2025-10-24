import { useEffect, useState, useRef } from 'react';

interface ScrollHeaderState {
  isVisible: boolean;
  scrollDirection: 'up' | 'down';
  scrollY: number;
  isAtTop: boolean;
}

export const useScrollHeader = () => {
  const [headerState, setHeaderState] = useState<ScrollHeaderState>({
    isVisible: true,
    scrollDirection: 'down',
    scrollY: 0,
    isAtTop: true,
  });

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const scrollDirection = scrollY > lastScrollY.current ? 'down' : 'up';
          const isAtTop = scrollY < 10;
          
          // Show header when scrolling up or at the top, hide when scrolling down
          const shouldShow = scrollDirection === 'up' || isAtTop || scrollY < 100;
          
          setHeaderState({
            isVisible: shouldShow,
            scrollDirection,
            scrollY,
            isAtTop,
          });

          lastScrollY.current = scrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return headerState;
};
