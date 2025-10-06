import Link from 'next/link';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const QuickNav = () => {
  const cards = [
    {
      tag: 'Who We Are',
      title: 'Learn More About What We Do',
      href: '/about',
      img: '/Rectangle 11.png',
    },
    {
      tag: 'Volunteer',
      title: 'Join Us and Take Action',
      href: '/get-involved',
      img: '/Rectangle 15.png',
    },
    {
      tag: 'Donate',
      title: 'Be Part Of A Greater Cause',
      href: '/donate',
      img: '/Rectangle 16.png',
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c, index) => (
            <AnimatedSection 
              key={c.href} 
              animation="fade-in" 
              delay={index * 200}
              className="transform transition-all duration-500 hover:scale-105"
            >
              <Link
                href={c.href}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 block"
              >
                <div className="relative">
                  <Image 
                    src={c.img} 
                    alt={c.title} 
                    width={400}
                    height={176}
                    className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <div className="text-xs text-white/80 font-body flex items-center gap-2">
                      <span>{c.tag}</span>
                      <span className="w-10 h-[2px] bg-accent inline-block" />
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <div className="text-white font-body font-semibold">
                        {c.title}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-all duration-300">
                        <span className="text-dark transition-transform duration-300 group-hover:rotate-90">↗</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickNav;
