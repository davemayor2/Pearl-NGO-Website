"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const AboutCTA = () => {
  return (
    <section className="pt-32 pb-8 relative overflow-hidden bg-white">
      {/* Background SVG */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/icons/AboutCTABG.svg"
          alt="CTA Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white mb-8 leading-tight mx-auto">
              Join us as we empower widows and inspire students for a brighter tomorrow.
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-md font-body font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Donate Now
            </Link>
            
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-md font-body font-semibold text-lg hover:bg-white hover:text-secondary transition-all duration-300 transform hover:scale-105"
            >
              Volunteer
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
