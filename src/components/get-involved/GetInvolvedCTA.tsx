"use client";
import Image from 'next/image';
import AnimatedSection from '../AnimatedSection';
import Button from '../ui/Button';

export default function GetInvolvedCTA() {
  return (
    <section className="relative py-20 bg-neutral">
      <div className="absolute inset-0">
        <Image src="/Rectangle 30.png" alt="Background" fill className="object-cover opacity-60" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in" className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Be Part of the <span className="text-secondary">Change</span>
          </h2>
          <p className="text-white/90 font-body max-w-3xl mx-auto mb-8">
            Join our network of passionate volunteers and supporters. Together we can empower widows and inspire students.
          </p>
          <div className="flex gap-4 justify-center">
            <Button href="/donate" variant="primary" size="lg">Donate Now</Button>
            <Button href="/get-involved#volunteer" variant="light" size="lg">Join Us</Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}


