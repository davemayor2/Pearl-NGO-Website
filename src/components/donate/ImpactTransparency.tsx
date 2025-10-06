"use client";
import { motion } from 'framer-motion';

const impactData = [
  {
    percentage: "70%",
    title: "Programs",
    description: "Direct support for widows and students",
    icon: (
      <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    )
  },
  {
    percentage: "20%",
    title: "Outreach",
    description: "Mentorship, competitions, and training",
    icon: (
      <svg className="w-12 h-12 text-secondary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 7H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-3.01A2.5 2.5 0 0 0 8 7H5.46c-.8 0-1.54.37-2.01.99L1 15.5V22h2v-6h2.5l2.54 7.63A1.5 1.5 0 0 0 9.46 24H12c.8 0 1.54-.37 2.01-.99L16 19l1.99 3.01A2.5 2.5 0 0 0 20 24h2.54c.8 0 1.54-.37 2.01-.99L27 15.5V22h2v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 26.54 7H24c-.8 0-1.54.37-2.01.99L20 11l-1.99-3.01A2.5 2.5 0 0 0 16 7h-2.54c-.8 0-1.54.37-2.01.99L10 11l-1.99-3.01A2.5 2.5 0 0 0 6 7H3.46c-.8 0-1.54.37-2.01.99L-1 15.5V22h2v-6h2.5l2.54 7.63A1.5 1.5 0 0 0 7.46 24H10c.8 0 1.54-.37 2.01-.99L14 19l1.99 3.01A2.5 2.5 0 0 0 18 24h2.54c.8 0 1.54-.37 2.01-.99L23 15.5V22h2z"/>
      </svg>
    )
  },
  {
    percentage: "10%",
    title: "Admin",
    description: "Keeping operations sustainable",
    icon: (
      <svg className="w-12 h-12 text-accent" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    )
  }
];

export default function ImpactTransparency() {
  return (
    <section className="py-16 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-dark mb-4">
            Where Your Money Goes
          </h2>
          <p className="text-lg text-gray-600 font-body max-w-3xl mx-auto">
            Every donation is carefully allocated to maximize impact and ensure transparency in our operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              className="text-center bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <div className="text-4xl font-bold text-primary mb-2 font-heading">
                {item.percentage}
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3 font-heading">
                {item.title}
              </h3>
              <p className="text-gray-600 font-body">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
