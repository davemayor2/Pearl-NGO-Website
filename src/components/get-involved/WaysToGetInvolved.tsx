"use client";
import AnimatedSection from '../AnimatedSection';
import Button from '../ui/Button';

interface WayCardProps {
  title: string;
  description: string;
  cta: string;
  href: string;
}

function WayCard({ title, description, cta, href }: WayCardProps) {
  return (
    <div className="bg-white rounded-md shadow-sm p-6 text-center h-full flex flex-col">
      <div className="mx-auto mb-4 w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center text-dark">★</div>
      <h3 className="text-xl font-heading font-bold text-dark mb-2">{title}</h3>
      <p className="text-gray-700 font-body mb-5 flex-1">{description}</p>
      <Button href={href} variant="primary" size="sm" className="mx-auto">{cta}</Button>
    </div>
  );
}

export default function WaysToGetInvolved() {
  const cards: WayCardProps[] = [
    {
      title: 'Volunteer',
      description: 'Share your time and skills to mentor students or support community outreach.',
      cta: 'Sign Up to Volunteer',
      href: '/get-involved#volunteer',
    },
    {
      title: 'Donate',
      description: 'Fund widows’ business grants and mentorship programs in more schools.',
      cta: 'Donate Now',
      href: '/donate',
    },
    {
      title: 'Partner',
      description: 'Collaborate with us as an organization or school to amplify impact.',
      cta: 'Partner with Us',
      href: '/contact',
    },
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in" className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">Ways to Get Involved</h2>
        </AnimatedSection>

        {/* Timeline line + dots (desktop) */}
        <div className="relative">
          <div className="hidden lg:block absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-white/30 rounded-full z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-11 gap-8 relative z-10">
            {/* Card 1 */}
            <AnimatedSection animation="scale-in" delay={0} className="lg:col-span-3">
              <WayCard {...cards[0]} />
            </AnimatedSection>
            {/* Dot between 1 & 2 */}
            <div className="hidden lg:flex items-center justify-center lg:col-span-1">
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
            {/* Card 2 */}
            <AnimatedSection animation="scale-in" delay={140} className="lg:col-span-3">
              <WayCard {...cards[1]} />
            </AnimatedSection>
            {/* Dot between 2 & 3 */}
            <div className="hidden lg:flex items-center justify-center lg:col-span-1">
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
            {/* Card 3 */}
            <AnimatedSection animation="scale-in" delay={280} className="lg:col-span-3">
              <WayCard {...cards[2]} />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}


