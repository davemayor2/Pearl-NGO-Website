"use client";
import { motion } from 'framer-motion';

export default function ImpactStatement() {
  return (
    <section className="py-12 bg-neutral relative overflow-hidden">
      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-secondary/40 blur-2xl opacity-60" />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-cta/40 blur-2xl opacity-60" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center">
          <h3 className="text-2xl font-heading font-bold text-dark mb-2">Your Impact</h3>
          <p className="text-gray-700 font-body max-w-2xl mx-auto">
            ₦5,000 empowers one widow with business support for a month and helps mentor students in our programs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}



