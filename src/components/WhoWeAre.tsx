import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const WhoWeAre = () => {
  const visionPoints = [
    { icon: '/icons/business-woman.svg', alt: 'Empower Widows icon', text: 'Empower Widows' },
    { icon: '/icons/graduate-cap.svg', alt: 'Mentor Students icon', text: 'Mentor Students' },
    { icon: '/icons/trophy.svg', alt: 'Promote Creativity icon', text: 'Promote Creativity' },
    { icon: '/icons/agreement.svg', alt: 'Community Engagement icon', text: 'Community Engagement' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <AnimatedSection animation="slide-in-left" delay={200}>
            <div className="space-y-6">
            <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-body font-medium">
              Who We Are
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-dark leading-tight">
              Driven by compassion, powered by people.
            </h2>
            
            <p className="text-gray-600 font-body text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-heading text-dark">Our Vision</h3>
              <p className="text-gray-600 font-body">
                We are committed to creating sustainable change through economic empowerment, education, and community support.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {visionPoints.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Image src={point.icon} alt={point.alt} width={24} height={24} />
                    <span className="text-dark font-body font-medium">{point.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Link
              href="/about"
              className="inline-block bg-cta text-white px-8 py-3 rounded-md font-body font-semibold hover:bg-opacity-90 transition-colors"
            >
              Learn More About Us
            </Link>
            </div>
          </AnimatedSection>

          {/* Right Column - Stacked Image Collage */}
          <AnimatedSection animation="slide-in-right" delay={400}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 lg:gap-6">
            {/* Tall image spanning both rows */}
            <div className="row-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4] lg:aspect-[4/5]">
                <Image src="/10.jpg" alt="Who we are collage large" fill priority sizes="(min-width:1024px) 40vw, 90vw" className="object-cover" />
              </div>
            </div>
            {/* Top-right */}
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <Image src="/Rectangle 66.png" alt="Who we are collage small 1" fill sizes="(min-width:1024px) 20vw, 45vw" className="object-cover" />
              </div>
            </div>
            {/* Bottom-right */}
            <div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <Image src="/Rectangle 67.png" alt="Who we are collage small 2" fill sizes="(min-width:1024px) 20vw, 45vw" className="object-cover" />
              </div>
            </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;