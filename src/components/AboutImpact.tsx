"use client";
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const AboutImpact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldCount, setShouldCount] = useState(false);

  const stats = [
    { value: 60, suffix: '+', label: 'Widows Empowered' },
    { value: 40, suffix: '+', label: 'Students Mentored' },
    { value: 100, suffix: '+', label: 'Awards Given' },
    { value: 20, suffix: '+', label: 'Communities Reached' }
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
    <section ref={sectionRef} className="py-20 bg-neutral relative overflow-hidden">
      {/* Decorative words image (PNG) */}
      <div className="absolute top-4 right-8 opacity-50 pointer-events-none select-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="/Clarity Purpose Impact Joy Love Peace.png"
            alt="Decorative words: Clarity, Purpose, Impact, Joy, Love, Peace"
            width={620}
            height={160}
            className="object-contain"
            priority={false}
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-dark mb-12">
            Our Impact in Numbers
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          onAnimationComplete={() => setShouldCount(true)}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-primary">
                <Counter end={stat.value} suffix={stat.suffix as string} shouldStart={shouldCount} />
              </div>
              <div className="text-lg font-body text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

function Counter({ end, suffix, shouldStart }: { end: number; suffix: string; shouldStart: boolean }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (shouldStart && !hasStarted) {
      setHasStarted(true);
      let startTime: number;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / 2000, 1);
        
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

  return <span>{count}{suffix}</span>;
};

export default AboutImpact;
