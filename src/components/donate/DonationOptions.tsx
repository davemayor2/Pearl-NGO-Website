"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

const amounts = [5000, 10000, 25000] as const;

const getImpactMessage = (amount: number): string => {
  if (amount >= 25000) return "Sponsor 5 widows for a month + mentor 3 students";
  if (amount >= 10000) return "Support 2 widows for a month + mentor 1 student";
  if (amount >= 5000) return "Empower 1 widow for a month with business support";
  return "Make a meaningful difference in someone's life";
};

const formatNumber = (value: string): string => {
  // Remove all non-numeric characters
  const numericValue = value.replace(/\D/g, '');
  // Add commas for thousands
  return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const parseNumber = (formattedValue: string): number => {
  return parseInt(formattedValue.replace(/,/g, '')) || 0;
};

export default function DonationOptions({ onSelect, onCustomAmountSelect }: { onSelect?: (amount: number) => void; onCustomAmountSelect?: (customAmount: string) => void }) {
  const [selected, setSelected] = useState<number | 'custom'>(5000);
  const [custom, setCustom] = useState('₦5,000');

  const handleSelect = (value: number | 'custom') => {
    setSelected(value);
    if (value !== 'custom') {
      onSelect?.(value);
    }
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatNumber(e.target.value);
    setCustom(`₦${formatted}`);
    setSelected('custom');
    const numericValue = parseNumber(formatted);
    onSelect?.(numericValue);
  };

  const handleCustomFocus = () => {
    setSelected('custom');
    onSelect?.(parseNumber(custom));
  };

  const handleDonateClick = () => {
    const amount = selected === 'custom' ? parseNumber(custom) : selected;
    onSelect?.(amount);
    
    // If custom amount was selected, pass it to the form
    if (selected === 'custom') {
      onCustomAmountSelect?.(custom);
    }
    
    // Scroll to donation form
    document.getElementById('donation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 bg-white" id="donate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-dark mb-6 text-center">Choose an Amount</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {amounts.map((amt) => {
              const active = selected === amt;
              return (
                <div key={amt} className="space-y-3">
                  <button
                    onClick={() => handleSelect(amt)}
                    className={`w-full rounded-xl border p-5 text-left transition-all ${active ? 'bg-cta text-white border-cta shadow-sm' : 'bg-white text-dark border-gray-200 hover:border-cta/60'}`}
                  >
                    <div className="text-lg font-semibold">₦{amt.toLocaleString()}</div>
                    <div className="text-sm opacity-80">One-time gift</div>
                  </button>
                  <div className="bg-gray-100 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-600">{getImpactMessage(amt)}</p>
                  </div>
                </div>
              );
            })}

            <div className="space-y-3">
              <div className={`rounded-xl border p-5 transition-all ${selected === 'custom' ? 'border-cta' : 'border-gray-200 hover:border-cta/60'}`}>
                <label className="block text-sm mb-2 font-medium text-dark">Custom Amount</label>
                <input
                  type="text"
                  value={custom}
                  onChange={handleCustomChange}
                  onFocus={handleCustomFocus}
                  placeholder="₦0"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cta focus:border-cta mb-3"
                />
                <button
                  onClick={handleDonateClick}
                  className="w-full bg-cta text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-cta/90 transition-colors"
                >
                  Donate Now
                </button>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 text-center">
                <p className="text-xs text-gray-600">{getImpactMessage(parseNumber(custom))}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



