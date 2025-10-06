import AnimatedSection from './AnimatedSection';

const VoicesOfChange = () => {
    const impactImages = [
      '/Rectangle 11.png',
      '/Rectangle 15.png',
      '/Rectangle 16.png',
      '/Rectangle 29.png',
      '/Rectangle 30.png',
      '/5.jpg',
      '/6.jpg',
      '/7.jpg',
    ];
  
    const testimonials = [
      {
        quote: "The support I received helped me start my own business and provide for my children. I'm forever grateful for the opportunity to rebuild my life with dignity.",
        name: "Aisha Musa",
        role: "Community Beneficiary, Kaduna",
        image: "/8.jpg"
      },
      {
        quote: "Volunteering with this organization has been life-changing. Seeing the impact we make in students' lives motivates me every day to continue giving back.",
        name: "David Okore",
        role: "Volunteer",
        image: "/9.jpg"
      },
      {
        quote: "As a monthly donor, I've seen firsthand how my contributions create real change. Every child educated and every widow empowered is a victory for our entire community.",
        name: "Chiamaka N.",
        role: "Donor & Monthly Supporter",
        image: "/10.jpg"
      },
    ];
  
    return (
      <section className="py-20 bg-[#E1FDF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in" delay={0}>
            <div className="text-center mb-16">
            <div className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-body font-medium mb-4">
              Voices of Change
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-dark leading-tight">
              Hear from those we've impacted.
            </h2>
            </div>
          </AnimatedSection>
  
          {/* Impact Images - marquee */}
          <div className="mb-16 overflow-hidden">
            <div className="flex gap-4 whitespace-nowrap animate-marquee-ltr will-change-transform" style={{ width: '200%' }}>
              {[...impactImages, ...impactImages].map((image, index) => (
                <div key={index} className="relative rounded-xl overflow-hidden shadow-md h-24 sm:h-28 md:h-32 w-40 sm:w-44 md:w-48 flex-shrink-0">
                  <img
                    src={image}
                    alt={`Impact story ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
  
          {/* Testimonials */}
          <AnimatedSection animation="fade-in" delay={400}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const initial = testimonial.name.charAt(0).toUpperCase();
              return (
                <div key={index} className="relative">
                  <div className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                    <div className="text-primary mb-3">
                      <span className="text-6xl leading-none font-heading">"</span>
                    </div>
                    <p className="text-gray-700 font-body leading-relaxed mb-4">
                      {testimonial.quote}
                    </p>
                    {/* Pointer triangle */}
                    <div className="w-5 h-5 bg-white border-l border-b border-gray-200 rotate-45 absolute -bottom-2.5 left-12" />
                  </div>
                  {/* Person info below */}
                  <div className="flex items-center space-x-3 mt-6">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold">
                      {initial}
                    </div>
                    <div>
                      <div className="font-bold font-heading text-dark">{testimonial.name}</div>
                      <div className="text-sm text-gray-500 font-body">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  };
  
  export default VoicesOfChange;
  