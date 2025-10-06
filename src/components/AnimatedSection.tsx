"use client";
import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
  delay?: number;
  className?: string;
  onAnimationComplete?: () => void;
}

const AnimatedSection = ({ 
  children, 
  animation = 'fade-in', 
  delay = 0, 
  className = '',
  onAnimationComplete
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('AnimatedSection: Element is intersecting, starting animation');
          setTimeout(() => {
            console.log('AnimatedSection: Setting isVisible to true');
            setIsVisible(true);
            // Trigger callback after animation completes
            if (onAnimationComplete) {
              setTimeout(() => {
                console.log('AnimatedSection: Calling onAnimationComplete');
                onAnimationComplete();
              }, 600); // Wait for the 1000ms animation to complete
            }
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, onAnimationComplete]);

  return (
    <div
      ref={ref}
      className={`
        ${className}
        transition-all duration-1000 ease-out
        ${isVisible 
          ? 'opacity-100 translate-x-0 translate-y-0 scale-100' 
          : `opacity-0 ${
              animation === 'slide-in-left' ? '-translate-x-12' :
              animation === 'slide-in-right' ? 'translate-x-12' :
              animation === 'scale-in' ? 'scale-95' :
              'translate-y-8'
            }`
        }
      `}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
