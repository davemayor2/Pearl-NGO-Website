"use client";
import Image from 'next/image';
import AnimatedSection from '../AnimatedSection';
import Button from '../ui/Button';

export default function GetInvolvedHero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <Image
        src="/gET-iNVOLVED-hERObg.jpg"
        alt="Smiling volunteer"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full w-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatedSection animation="fade-in" className="text-white text-left max-w-3xl">
            <div className="inline-block text-sm font-medium mb-3 opacity-95">Get Involved</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4">
              Your <span className="text-cta">Action</span> Can
              <br />
              Transform a <span className="text-secondary">Life</span>
            </h1>
            <p className="text-base sm:text-lg font-body opacity-95 mb-6 max-w-2xl">
              Whether it’s your time, skills, or resources, every contribution helps widows and students create a brighter future.
            </p>
            <div className="flex gap-4">
              <Button href="/donate" variant="primary" size="lg">Donate Now</Button>
              <Button href="/get-involved#volunteer" variant="outlineWhite" size="lg">Join as a Volunteer</Button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Floating decorative circle */}
      <div className="pointer-events-none select-none">
        <div className="absolute right-12 bottom-10 w-16 h-16 rounded-full bg-white/90 text-dark flex items-center justify-center shadow animate-float">
          <span className="rotate-45">↗</span>
        </div>
      </div>
    </section>
  );
}


