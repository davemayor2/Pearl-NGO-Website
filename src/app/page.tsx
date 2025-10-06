import Hero from '@/components/Hero';
import QuickNav from '@/components/QuickNav';
import WhoWeAre from '@/components/WhoWeAre';
import ImpactStats from '@/components/ImpactStats';
import WhatWeDo from '@/components/WhatWeDo';
import JoinUs from '@/components/JoinUs';
import VoicesOfChange from '@/components/VoicesOfChange';
import BePartOfChange from '@/components/BePartOfChange';

export default function Home() {
  return (
    <div>
      <Hero />
      <QuickNav />
      <WhoWeAre />
      <ImpactStats />
      <WhatWeDo />
      <JoinUs />
      <VoicesOfChange />
      <BePartOfChange />
    </div>
  );
}
