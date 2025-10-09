"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';

export default function DonateHero() {
  return (
    <section className="relative h-[60vh] min-h-[520px] w-full overflow-hidden pt-[120px]">
      <Image src="/young-african-women-shopping-fashion-boutique-wearing-medical-masks.jpg" alt="Community" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-white max-w-3xl text-center mx-auto">
            <div className="text-sm mb-3">Donate</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4">
              Your <span className="text-cta">Gift</span> Can
              <br />
              Change a <span className="text-secondary">Life</span> Today
            </h1>
            <p className="text-base sm:text-lg font-body opacity-95 mb-6 max-w-2xl">
              Join hands with us to empower widows and inspire the next generation.
            </p>
            <div className="flex gap-4 justify-center">
              <Button href="#donate" variant="primary" size="lg">Donate Now</Button>
              <Button href="/get-involved#volunteer" variant="outlineWhite" size="lg">Volunteer</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



