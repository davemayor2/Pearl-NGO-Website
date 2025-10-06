"use client";
import { motion } from 'framer-motion';

const AboutMissionVision = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#FFF4DB' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Mission */}
          <motion.div 
            className="bg-white rounded-lg p-8 shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-full h-0.5 mb-6" style={{ backgroundColor: '#F08060' }}></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-black text-center mb-6 leading-tight">
              Our Mission
            </h2>
            <p className="text-gray-700 font-body text-lg leading-relaxed text-center">
              To empower widows with economic independence and mentor students toward purpose, creativity, and success.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            className="bg-white rounded-lg p-8 shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-full h-0.5 mb-6" style={{ backgroundColor: '#F08060' }}></div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-black text-center mb-6 leading-tight">
              Our Vision
            </h2>
            <p className="text-gray-700 font-body text-lg leading-relaxed text-center">
              A society where widows thrive with dignity, and students are inspired to discover and fulfill their potential.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;
