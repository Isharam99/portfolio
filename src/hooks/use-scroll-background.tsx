import { useEffect, useState, useRef } from 'react';

interface ScrollBackgroundState {
  scrollY: number;
  scrollProgress: number;
  backgroundIntensity: number;
  colorShift: number;
  blurIntensity: number;
  scaleIntensity: number;
  parallaxOffset: number;
  currentSection: string;
  scrollDirection: 'up' | 'down';
  scrollVelocity: number;
  timeBasedShift: number;
}

export const useScrollBackground = () => {
  const [scrollState, setScrollState] = useState<ScrollBackgroundState>({
    scrollY: 0,
    scrollProgress: 0,
    backgroundIntensity: 0.1,
    colorShift: 0,
    blurIntensity: 0,
    scaleIntensity: 1,
    parallaxOffset: 0,
    currentSection: 'home',
    scrollDirection: 'down',
    scrollVelocity: 0,
    timeBasedShift: 0,
  });

  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());
  const animationFrame = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime.current;
      const deltaY = scrollY - lastScrollY.current;
      
      // Calculate scroll velocity and direction
      const scrollVelocity = Math.abs(deltaY) / deltaTime;
      const scrollDirection = deltaY > 0 ? 'down' : 'up';
      
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollY / documentHeight, 1);

      // Real-time calculations with time-based animations
      const timeBasedShift = (currentTime * 0.001) % 360; // Continuous time-based color shift
      const backgroundIntensity = Math.min(0.05 + scrollProgress * 0.2 + scrollVelocity * 5, 0.3); // Reduced intensity
      const colorShift = scrollProgress * 360 + timeBasedShift * 0.5;
      const blurIntensity = Math.sin(scrollProgress * Math.PI * 4 + timeBasedShift * 0.01) * 2 + scrollVelocity; // Reduced blur
      const scaleIntensity = 1 + Math.sin(scrollProgress * Math.PI * 3 + timeBasedShift * 0.02) * 0.1 + scrollVelocity * 0.05; // Reduced scale
      const parallaxOffset = scrollY * 0.2 + Math.sin(timeBasedShift * 0.01) * 10; // Reduced parallax

      // Determine current section based on scroll position
      let currentSection = 'home';
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = 0; i < sectionElements.length; i++) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = sections[i];
            break;
          }
        }
      }

      setScrollState({
        scrollY,
        scrollProgress,
        backgroundIntensity,
        colorShift,
        blurIntensity,
        scaleIntensity,
        parallaxOffset,
        currentSection,
        scrollDirection,
        scrollVelocity,
        timeBasedShift,
      });

      lastScrollY.current = scrollY;
      lastTime.current = currentTime;
    };

    // Continuous animation loop for time-based effects
    const animate = () => {
      const currentTime = Date.now();
      const timeBasedShift = (currentTime * 0.001) % 360;
      
      setScrollState(prev => ({
        ...prev,
        timeBasedShift,
        colorShift: prev.scrollProgress * 360 + timeBasedShift * 0.5,
        blurIntensity: Math.sin(prev.scrollProgress * Math.PI * 4 + timeBasedShift * 0.01) * 2 + prev.scrollVelocity, // Reduced blur
        scaleIntensity: 1 + Math.sin(prev.scrollProgress * Math.PI * 3 + timeBasedShift * 0.02) * 0.1 + prev.scrollVelocity * 0.05, // Reduced scale
      }));

      animationFrame.current = requestAnimationFrame(animate);
    };

    // Start animation loop
    animationFrame.current = requestAnimationFrame(animate);

    // Real-time scroll handling (no throttling for maximum responsiveness)
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return scrollState;
};
