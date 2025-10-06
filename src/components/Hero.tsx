import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover animate-pulse"
          sizes="100vw"
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
          Empowering <span className="text-cta">Widows,</span> <span className="text-cta">Inspiring</span> Students
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl font-body mb-8 leading-relaxed opacity-90">
          Together, we create opportunities for widows to thrive and students to discover their purpose.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center w-48 h-14 whitespace-nowrap bg-cta text-white rounded-md font-body font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Donate Now
          </Link>
          
          <Link
            href="/get-involved"
            className="inline-flex items-center justify-center w-48 h-14 whitespace-nowrap border-2 border-white text-white rounded-md font-body font-semibold text-lg hover:bg-white hover:text-dark transition-all duration-300 transform hover:scale-105"
          >
            Join Us
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;