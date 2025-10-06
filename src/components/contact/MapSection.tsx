"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MapSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark mb-4">
            Visit Our Office
          </h2>
          <p className="text-lg text-gray-600 font-body max-w-3xl mx-auto">
            Located in the heart of Lagos, our office is easily accessible and welcomes visitors.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          viewport={{ once: true }}
          className="relative"
        >
          {/* Map placeholder - you can replace this with an actual map embed */}
          <div className="relative h-96 bg-neutral rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/medium-shot-women-market.jpg"
              alt="Office Location"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Map overlay with office info */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 max-w-sm text-center">
                <div className="w-12 h-12 bg-cta rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold text-dark mb-2">
                  Pearl Foundation Office
                </h3>
                <p className="text-gray-600 font-body mb-4">
                  123 Charity Avenue<br />
                  Lagos, Nigeria 100001
                </p>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    View on Map
                  </a>
                  <a 
                    href="tel:+2348123456789" 
                    className="bg-cta text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-cta/90 transition-colors"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Office hours */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }} 
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-neutral rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-dark mb-4">
              Office Hours
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 font-body">
              <div>
                <p className="font-semibold">Monday - Friday</p>
                <p>9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Saturday</p>
                <p>10:00 AM - 4:00 PM</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Closed on Sundays and public holidays
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
