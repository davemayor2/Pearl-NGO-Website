"use client";
import { motion } from 'framer-motion';

export default function EmpathicQuote() {
  return (
    <section className="py-14 bg-primary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.blockquote initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center text-white">
          <p className="text-xl sm:text-2xl font-heading font-semibold">
            “We make a living by what we get, but we make a life by what we give.”
          </p>
          <footer className="mt-2 text-white/80">— Winston Churchill</footer>
        </motion.blockquote>
      </div>
    </section>
  );
}



