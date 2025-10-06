"use client";
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const ImpactStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldCount, setShouldCount] = useState(false);
  const stats = [
    { value: 10000, suffix: '+', label: 'meals served' },
    { value: 2500, suffix: '', label: 'children educated' },
    { value: 300, suffix: '', label: 'volunteers engaged' },
  ];

  // Intersection Observer for the entire section
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Start count-up animation after fade-in completes (1.5 seconds)
          setTimeout(() => {
            setShouldCount(true);
          }, 1500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-body font-medium mb-4">
            Our Impact
          </div>
        </div>
        
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-dark mb-12">
            Real change, real people
          </h2>
        </div>
        
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <Counter 
                key={index}
                end={stat.value} 
                suffix={stat.suffix as string} 
                label={stat.label}
                shouldStart={shouldCount}
              />
            ))}
          </div>
        </div>
        
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            href="/programs"
            className="inline-block border-2 border-dark text-dark px-8 py-3 rounded-md font-body font-semibold hover:bg-dark hover:text-white transition-colors"
          >
            See More of Our Impact
          </Link>
        </div>
      </div>
    </section>
  );
};

function Counter({ end, suffix, label, shouldStart }: { end: number; suffix: string; label: string; shouldStart: boolean }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (shouldStart && !hasStarted) {
      setHasStarted(true);
      let startTime: number;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / 2000, 1); // 2 second animation
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * end);
        
        setCount(current);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [shouldStart, hasStarted, end]);

  return (
    <div className="space-y-2">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-primary">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg font-body text-gray-600">{label}</div>
    </div>
  );
};

export default ImpactStats;
