import Link from 'next/link';

const WhatWeDo = () => {
  const programs = [
    {
      title: 'Widows Empowerment',
      description: 'We provide business grants, skill-building workshops, and mentorship programs to help widows regain their dignity, create sustainable income, and build stable futures for their families.',
      image: '/young-african-women-shopping-fashion-boutique-wearing-medical-masks.jpg'
    },
    {
      title: 'Student Mentorship',
      description: 'Our free mentorship programs connect students with experienced professionals who help them discover their talents, develop creative writing skills, and explore career opportunities.',
      image: '/Rectangle 30.png'
    },
    {
      title: 'Educational Awards',
      description: 'We organize competitions and award ceremonies that showcase student creativity, innovation, and talent, providing recognition and resources to support their educational journey.',
      image: '/9.jpg'
    },
    {
      title: 'Community Outreach',
      description: 'We meet widows and students directly in their communities, providing immediate relief, ongoing mentorship, and encouragement to help them overcome challenges and achieve their goals.',
      image: '/medium-shot-women-market.jpg'
    },
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-4 mb-16">
          <div className="inline-block bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-body font-medium">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight">
            Transforming Lives, One Story at a Time
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-left"
            >
              <div className="overflow-hidden rounded-xl aspect-[4/3] mb-6">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-dark text-center mb-3">
                {program.title}
              </h3>
              <p className="text-gray-700 font-body leading-relaxed text-center max-w-prose mx-auto">
                {program.description}
              </p>
            </div>
          ))}
        </div>
        
        <Link
          href="/programs"
          className="inline-block border-2 border-white text-white px-8 py-3 rounded-md font-body font-semibold hover:bg-white hover:text-primary transition-colors"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default WhatWeDo;
