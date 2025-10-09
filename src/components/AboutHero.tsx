"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-[120px]">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Image
          src="/5.jpg"
          alt="About Us - Students and community members"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      
      {/* Dark Overlay */}
      <motion.div 
        className="absolute inset-0 bg-black bg-opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.5 }}
      />
      
      {/* Content */}
      <motion.div 
        className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="inline-block text-white text-sm font-medium mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          About Us
        </motion.div>
        
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Restoring <span className="text-secondary">Hope</span>, Unlocking <span className="text-secondary">Potential</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl lg:text-2xl font-body leading-relaxed opacity-95 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.95, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          We are a community-driven nonprofit committed to empowering widows and inspiring students through economic support, mentorship, and creativity-driven initiatives.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutHero;

