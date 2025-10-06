"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';

export default function DonateCTA() {
  return (
    <section className="relative py-20 bg-neutral overflow-hidden">
      <Image src="/Rectangle 30.png" alt="Background" fill className="object-cover opacity-70" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <h3 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">Become a Monthly Supporter</h3>
          <p className="text-white/90 font-body max-w-3xl mx-auto mb-8">Your recurring gift sustains widows and students throughout the year and helps us plan long-term support.</p>
          <Button href="#donate" variant="primary" size="lg">Give Monthly</Button>
        </motion.div>
      </div>
    </section>
  );
}



