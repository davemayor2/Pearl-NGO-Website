"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-0.5 bg-secondary"></div>
                <span className="text-gray-600 font-medium text-sm">Our Story</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-dark leading-tight">
                Driven by compassion, powered by people.
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-700 font-body leading-relaxed">
              <p>
                Founded on the belief that every individual deserves dignity and opportunity, our organization was born from witnessing the struggles of widows in our communities and the untapped potential of students seeking direction.
              </p>
              <p>
                We recognized that widows often face economic hardship and social isolation after losing their partners, while students struggle to discover their purpose and develop the skills needed for success in today's world.
              </p>
              <p>
                By bridging these gaps through targeted programs and mentorship, we create stronger families and communities where everyone can thrive with dignity and purpose.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/medium-shot-women-market.jpg"
                alt="Community members working together"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;


