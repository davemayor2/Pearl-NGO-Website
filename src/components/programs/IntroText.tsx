"use client";
import { motion } from 'framer-motion';

const IntroText = () => {
  return (
    <section className="bg-primary py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          className="text-white/95 font-body leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          We design our initiatives to restore dignity, spark inspiration, and create opportunities. Whether supporting widows through business grants or inspiring students to discover their purpose, our programs are designed for real, lasting impact.
        </motion.p>
      </div>
    </section>
  );
};

export default IntroText;


