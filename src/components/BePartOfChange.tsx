import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

const BePartOfChange = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/volunteers-teaming-up-organize-donations-charity.jpg)',
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      
      {/* Content */}
      <AnimatedSection animation="fade-in" delay={200}>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6 leading-tight">
          Be Part of the <span className="text-secondary">Change</span>
        </h2>
        
        <p className="text-lg sm:text-xl lg:text-2xl font-body mb-8 leading-relaxed opacity-90 max-w-3xl mx-auto">
          Join our network of passionate volunteers working in education, health, environment, and community outreach
        </p>
        
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
      </AnimatedSection>
    </section>
  );
};

export default BePartOfChange;


