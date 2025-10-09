"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProgramsHero = () => {
  return (
    <section className="relative h-[60vh] lg:h-[72vh] flex items-center justify-center overflow-hidden pt-[120px]">
      {/* Background image */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.05, opacity: 0.9 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <Image
          src="/Our Programs Hero BG.jpg"
          alt="Programs hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-white text-center">
              <div className="inline-block text-white text-sm font-medium mb-4">Our Programs</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight mb-4">
                Building <span className="text-secondary">Brighter</span>
                <br className="hidden sm:block" />
                Futures Together
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-body leading-relaxed opacity-95 max-w-3xl mx-auto">
                Through empowerment, mentorship, and creativity, our programs uplift widows and students across communities.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <a href="/donate" className="inline-flex items-center justify-center font-semibold px-8 py-4 rounded-full bg-cta text-white hover:bg-cta/90 shadow-sm">Donate Now</a>
                <a href="/get-involved#volunteer" className="inline-flex items-center justify-center font-semibold px-8 py-4 rounded-full border border-white text-white hover:bg-white/10">Join as a Volunteer</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsHero;


