"use client";
import Image from 'next/image';
import AnimatedSection from '../AnimatedSection';

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
  reversed?: boolean;
  note?: string;
  decoSrc?: string; // decorative small image in corner
  decoClassName?: string; // absolute positioning utilities
}

const ProgramCard = ({ title, description, image, ctaLabel, ctaHref, reversed = false, note, decoSrc, decoClassName = '-bottom-8 -left-8 w-32' }: ProgramCardProps) => {
  return (
    <section className="py-12">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${reversed ? 'lg:[&>div:first-child]:order-2' : ''}`}>
        {/* Image */}
        <AnimatedSection animation="slide-in-right" delay={0}>
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image src={image} alt={title} fill className="object-cover" sizes="(min-width:1024px) 44vw, 100vw" unoptimized />
            </div>
            {decoSrc && (
              <Image 
                src={decoSrc} 
                alt="decorative" 
                width={200} 
                height={200} 
                style={{ height: 'auto' }}
                className={`absolute ${decoClassName} h-auto animate-float opacity-80 pointer-events-none select-none`}
                unoptimized
              />
            )}
          </div>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection animation="slide-in-left" delay={200}>
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-dark mb-4">{title}</h3>
            <p className="text-gray-700 font-body leading-relaxed mb-5">{description}</p>
            {note && (
              <div className="bg-neutral text-gray-700 font-body rounded-md p-4 text-sm mb-4">{note}</div>
            )}
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-cta text-white font-semibold shadow-sm hover:shadow-md hover:bg-opacity-90 transition-colors"
            >
              {ctaLabel}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProgramCard;


