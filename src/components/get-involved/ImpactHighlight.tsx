"use client";
import Image from 'next/image';
import AnimatedSection from '../AnimatedSection';

interface StatItem { value: string; label: string }

const stats: StatItem[] = [
  { value: '60+', label: 'Widows Empowered' },
  { value: '40+', label: 'Students Mentored' },
  { value: '100+', label: 'Awards Given' },
  { value: '20+', label: 'Communities Reached' },
];

export default function ImpactHighlight() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + Subtext */}
        <AnimatedSection animation="fade-in" className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-3">Why Get Involved</h2>
          <p className="text-gray-700 font-body max-w-3xl mx-auto">
            Behind every statistic is a face, a family, a future. By joining us, you’re not just supporting a cause —
            you’re empowering widows to live with dignity and giving students the guidance to thrive.
          </p>
        </AnimatedSection>

        {/* Image with overlaid stats ribbon */}
        <AnimatedSection animation="scale-in">
          <div className="relative rounded-2xl overflow-hidden shadow-md">
            <div className="relative aspect-[16/9] sm:aspect-[21/9]">
              <Image
                src="/Rectangle 66.png"
                alt="Students in class"
                fill
                className="object-cover"
                priority={false}
              />
            </div>

            {/* Orange ribbon overlay */}
            <div className="absolute left-4 right-4 bottom-4">
              <div className="bg-cta text-white rounded-xl p-4 sm:p-5 shadow flex flex-col">
                <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/30">
                  {stats.map((s) => (
                    <div key={s.label} className="py-3 px-4 text-center">
                      <div className="text-2xl sm:text-3xl font-heading font-bold leading-none">{s.value}</div>
                      <div className="text-xs sm:text-sm font-body mt-1 opacity-95">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}


