"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const stories = [
  {
    id: 1,
    name: "Mama Esther",
    photo: "/medium-shot-african-women-sitting-together.jpg",
    story: "With a grant of ₦10,000, Mama Esther expanded her small soap business and now supports her 3 children's education.",
    quote: "\"The support I received didn't just help my business, it gave my children hope for a better future.\"",
    location: "Lagos, Nigeria"
  },
  {
    id: 2,
    name: "Blessing",
    photo: "/young-african-women-shopping-fashion-boutique-wearing-medical-masks.jpg",
    story: "The mentorship program helped me discover my talent in writing, and I just won my first essay competition.",
    quote: "\"I never knew I had a voice until someone believed in me enough to help me find it.\"",
    location: "Abuja, Nigeria"
  }
];

export default function StoriesOfChange() {
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
            Stories of Change
          </h2>
          <p className="text-lg text-gray-600 font-body max-w-3xl mx-auto">
            Real stories from real people whose lives have been transformed through your generosity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 
              }}
              viewport={{ once: true }}
              className="bg-neutral rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={story.photo}
                  alt={story.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-semibold font-heading">{story.name}</h3>
                  <p className="text-sm opacity-90">{story.location}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 font-body mb-4 leading-relaxed">
                  {story.story}
                </p>
                
                <blockquote className="border-l-4 border-cta pl-4 italic text-gray-600 font-body">
                  {story.quote}
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
