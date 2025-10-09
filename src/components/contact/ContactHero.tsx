"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden pt-[120px]">
      <Image src="/volunteers-teaming-up-organize-donations-charity.jpg" alt="Contact Us" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-white max-w-3xl text-center mx-auto">
            <div className="text-sm mb-3">Contact Us</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4">
              Get in <span className="text-cta">Touch</span>
            </h1>
            <p className="text-base sm:text-lg font-body opacity-95 mb-6 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out for inquiries, partnerships, or to learn how you can volunteer with us.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
