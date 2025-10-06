import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const JoinUs = () => {
  const engagementOptions = [
    {
      icon: '/icons/VOLUNTEER.png',
      alt: 'Volunteer icon',
      title: 'Volunteer',
      description: 'Join our community of dedicated volunteers and make a direct impact in the lives of widows and students through mentorship, workshops, and community outreach programs.'
    },
    {
      icon: '/icons/partnership.png',
      alt: 'Partner icon',
      title: 'Partner with Us',
      description: 'Collaborate with us as a corporate partner, organization, or institution to expand our reach and create sustainable programs that benefit communities across the region.'
    },
    {
      icon: '/icons/DONATE.png',
      alt: 'Donate icon',
      title: 'Donate',
      description: 'Support our mission with financial contributions that directly fund programs, provide resources, and create opportunities for those who need it most.'
    },
  ];

  return (
    <section className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <AnimatedSection animation="slide-in-left" delay={200}>
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-body font-medium">
                  Join Us in Making a Difference
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-dark leading-tight">
                  Your time, skills, or donations can change lives.
                </h2>
              </div>
              
              <div className="space-y-8">
                {engagementOptions.map((option, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Image src={option.icon} alt={option.alt} width={28} height={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading text-dark mb-2">
                        {option.title}
                      </h3>
                      <p className="text-gray-600 font-body leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column - Image */}
          <AnimatedSection animation="slide-in-right" delay={400}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl animate-float">
                <Image
                  src="/4.jpg"
                  alt="Community members working together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;