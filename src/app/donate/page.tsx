"use client";
import { useState } from 'react';
import DonateHero from '../../components/donate/DonateHero';
import DonationOptions from '../../components/donate/DonationOptions';
import ImpactStatement from '../../components/donate/ImpactStatement';
import EmpathicQuote from '../../components/donate/EmpathicQuote';
import DonationForm from '../../components/donate/DonationForm';
import ImpactTransparency from '../../components/donate/ImpactTransparency';
import StoriesOfChange from '../../components/donate/StoriesOfChange';
import DonateCTA from '../../components/donate/DonateCTA';

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(5000);
  const [selectedCustomAmount, setSelectedCustomAmount] = useState<string>('');

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
  };

  const handleCustomAmountSelect = (customAmount: string) => {
    setSelectedCustomAmount(customAmount);
  };

  return (
    <main className="bg-white">
      <DonateHero />
      <ImpactStatement />
      <DonationOptions onSelect={handleAmountSelect} onCustomAmountSelect={handleCustomAmountSelect} />
      <EmpathicQuote />
      <DonationForm selectedAmount={selectedAmount} selectedCustomAmount={selectedCustomAmount} />
      <ImpactTransparency />
      <StoriesOfChange />
      <DonateCTA />
    </main>
  );
}



