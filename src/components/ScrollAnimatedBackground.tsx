import { useScrollBackground } from '@/hooks/use-scroll-background';

const ScrollAnimatedBackground = () => {
  const { 
    scrollProgress, 
    backgroundIntensity, 
    colorShift, 
    blurIntensity, 
    scaleIntensity, 
    parallaxOffset,
    currentSection,
    scrollVelocity,
    timeBasedShift
  } = useScrollBackground();

  // Different color schemes for different sections
  const getSectionColors = (section: string) => {
    switch (section) {
      case 'about':
        return { primary: 200, secondary: 220, tertiary: 240 };
      case 'skills':
        return { primary: 160, secondary: 180, tertiary: 200 };
      case 'experience':
        return { primary: 120, secondary: 140, tertiary: 160 };
      case 'projects':
        return { primary: 80, secondary: 100, tertiary: 120 };
      case 'contact':
        return { primary: 40, secondary: 60, tertiary: 80 };
      default:
        return { primary: 189, secondary: 200, tertiary: 220 };
    }
  };

  const colors = getSectionColors(currentSection);

  return (
    <div className="animated-background">
      {/* Dynamic background shapes that respond to scroll and time */}
      <div 
        className="background-shape"
        style={{
          transform: `translateY(${scrollProgress * 50 + parallaxOffset * 0.1 + Math.sin(timeBasedShift * 0.01) * 10}px) translateX(${scrollProgress * 30 + Math.cos(timeBasedShift * 0.01) * 15}px) scale(${scaleIntensity})`,
          opacity: Math.min(backgroundIntensity * 0.8, 0.4), // Reduced opacity to prevent dimming
          filter: `blur(${40 + blurIntensity}px) hue-rotate(${colorShift}deg)`,
          background: `linear-gradient(45deg, hsl(${colors.primary + colorShift * 0.1} 94% 43%), hsl(${colors.secondary + colorShift * 0.1} 94% 50%))`,
        }}
      />
      
      <div 
        className="background-shape"
        style={{
          transform: `translateY(${-scrollProgress * 40 - parallaxOffset * 0.15 + Math.sin(timeBasedShift * 0.015) * 8}px) translateX(${-scrollProgress * 20 + Math.cos(timeBasedShift * 0.015) * 12}px) scale(${scaleIntensity * 0.8})`,
          opacity: Math.min(backgroundIntensity * 0.6, 0.3), // Reduced opacity
          filter: `blur(${50 + blurIntensity}px) hue-rotate(${colorShift * 1.2}deg)`,
          background: `linear-gradient(135deg, hsl(${colors.secondary + colorShift * 0.15} 94% 50%), hsl(${colors.tertiary + colorShift * 0.15} 94% 60%))`,
        }}
      />
      
      <div 
        className="background-shape"
        style={{
          transform: `translateY(${scrollProgress * 60 + parallaxOffset * 0.2 + Math.sin(timeBasedShift * 0.012) * 15}px) translateX(${scrollProgress * 40 + Math.cos(timeBasedShift * 0.012) * 20}px) scale(${scaleIntensity * 1.2})`,
          opacity: Math.min(backgroundIntensity * 0.5, 0.25), // Reduced opacity
          filter: `blur(${35 + blurIntensity}px) hue-rotate(${colorShift * 0.8}deg)`,
          background: `linear-gradient(225deg, hsl(${colors.tertiary + colorShift * 0.2} 94% 60%), hsl(${colors.primary + colorShift * 0.2} 94% 43%))`,
        }}
      />
      
      <div 
        className="background-shape"
        style={{
          transform: `translateY(${-scrollProgress * 30 - parallaxOffset * 0.12 + Math.sin(timeBasedShift * 0.018) * 6}px) translateX(${scrollProgress * 50 + Math.cos(timeBasedShift * 0.018) * 18}px) scale(${scaleIntensity * 0.9})`,
          opacity: Math.min(backgroundIntensity * 0.6, 0.3), // Reduced opacity
          filter: `blur(${45 + blurIntensity}px) hue-rotate(${colorShift * 1.5}deg)`,
          background: `linear-gradient(315deg, hsl(${colors.primary + colorShift * 0.12} 94% 43%), hsl(${colors.secondary + colorShift * 0.12} 94% 50%))`,
        }}
      />

      {/* Enhanced floating particles with real-time animation */}
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            top: `${10 + (i * 6)}%`,
            left: `${15 + (i * 5)}%`,
            transform: `translateY(${Math.sin(scrollProgress * Math.PI * 2 + i + timeBasedShift * 0.01) * 40}px) translateX(${Math.cos(scrollProgress * Math.PI * 2 + i + timeBasedShift * 0.01) * 25}px) scale(${1 + Math.sin(scrollProgress * Math.PI * 3 + i + timeBasedShift * 0.02) * 0.4 + scrollVelocity * 0.2})`,
            opacity: Math.min(backgroundIntensity * 0.5, 0.3), // Reduced opacity
            filter: `hue-rotate(${colorShift + i * 25}deg)`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}

      {/* Real-time gradient overlay - reduced intensity */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${50 + scrollProgress * 20 + Math.sin(timeBasedShift * 0.005) * 10}% ${50 + scrollProgress * 10 + Math.cos(timeBasedShift * 0.005) * 8}%, 
            hsl(${colors.primary + colorShift * 0.1} 94% 43% / ${Math.min(backgroundIntensity * 0.1, 0.05)}), 
            hsl(${colors.secondary + colorShift * 0.1} 94% 50% / ${Math.min(backgroundIntensity * 0.05, 0.03)}), 
            transparent 70%)`,
        }}
      />

      {/* Dynamic wave overlay - reduced intensity */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(45deg, 
            transparent 0%, 
            hsl(${colors.tertiary + colorShift * 0.05} 94% 60% / ${Math.min(backgroundIntensity * 0.04, 0.02)}) 25%, 
            transparent 50%, 
            hsl(${colors.primary + colorShift * 0.05} 94% 43% / ${Math.min(backgroundIntensity * 0.04, 0.02)}) 75%, 
            transparent 100%)`,
          transform: `translateX(${scrollProgress * 100 + timeBasedShift * 0.5}px)`,
        }}
      />

      {/* Additional velocity-based effects - reduced intensity */}
      <div 
        className="absolute inset-0"
        style={{
          background: `conic-gradient(from ${timeBasedShift}deg, 
            hsl(${colors.primary + colorShift * 0.1} 94% 43% / ${Math.min(scrollVelocity * 0.05, 0.02)}), 
            hsl(${colors.secondary + colorShift * 0.1} 94% 50% / ${Math.min(scrollVelocity * 0.03, 0.01)}), 
            transparent)`,
          opacity: Math.min(scrollVelocity * 0.15, 0.1),
        }}
      />
    </div>
  );
};

export default ScrollAnimatedBackground;
