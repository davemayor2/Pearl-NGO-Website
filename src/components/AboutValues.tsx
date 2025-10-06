"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutValues = () => {
  const values = [
    {
      name: 'Integrity',
      description: 'We are transparent and accountable in all we do.',
      icon: '/icons/INTEGRITY BADGE.svg'
    },
    {
      name: 'Compassion',
      description: 'We serve with love, empathy, and respect.',
      icon: '/icons/COMPASSION BADGE.svg'
    },
    {
      name: 'Empowerment',
      description: 'We equip individuals with tools for self-sufficiency.',
      icon: '/icons/Empowerment badge.svg'
    },
    {
      name: 'Excellence',
      description: 'We deliver impactful programs with measurable results.',
      icon: '/icons/Excellence Badge.svg'
    },
    {
      name: 'Community',
      description: 'We believe in collective effort to achieve sustainable change.',
      icon: '/icons/Community Badge.svg'
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-0.5 bg-white"></div>
            <span className="text-white font-medium text-sm">Core Values</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={value.name}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* SVG Icon */}
              <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                <Image
                  src={value.icon}
                  alt={`${value.name} badge`}
                  width={128}
                  height={128}
                  className="object-contain animate-spin"
                  style={{ animationDuration: '20s' }}
                />
              </div>
              
              {/* Value Name */}
              <h3 className="text-xl font-bold font-heading text-white mb-3">
                {value.name}
              </h3>
              
              {/* Description */}
              <p className="text-white text-sm leading-relaxed opacity-90">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
