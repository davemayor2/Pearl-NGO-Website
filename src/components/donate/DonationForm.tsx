"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function DonationForm({ selectedAmount = 5000, selectedCustomAmount }: { selectedAmount?: number; selectedCustomAmount?: string }) {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [amount, setAmount] = useState(selectedAmount);
  const [formSelected, setFormSelected] = useState<'preset' | 'custom'>('preset');
  const [customAmount, setCustomAmount] = useState('');

  useEffect(() => {
    setAmount(selectedAmount);
  }, [selectedAmount]);

  useEffect(() => {
    if (selectedCustomAmount) {
      setCustomAmount(selectedCustomAmount);
      setFormSelected('custom');
      const numericValue = parseNumber(selectedCustomAmount);
      setAmount(numericValue);
    }
  }, [selectedCustomAmount]);

  const formatNumber = (value: string): string => {
    const numericValue = value.replace(/\D/g, '');
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const parseNumber = (formattedValue: string): number => {
    return parseInt(formattedValue.replace(/,/g, '')) || 0;
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatNumber(e.target.value);
    setCustomAmount(`₦${formatted}`);
    setFormSelected('custom');
    const numericValue = parseNumber(formatted);
    setAmount(numericValue);
  };

  const handlePresetSelect = (presetAmount: number) => {
    setAmount(presetAmount);
    setFormSelected('preset');
    setCustomAmount('');
  };

  return (
    <section className="py-16 bg-[#FFF4DB]" id="donation-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <img src="/volunteers-teaming-up-organize-donations-charity.jpg" alt="Volunteers" className="rounded-xl shadow object-cover w-full h-full max-h-[520px]" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="bg-white rounded-xl shadow p-6">
            <div className="text-sm text-dark mb-1">Donation Form</div>
            <h3 className="text-3xl font-heading font-bold text-primary mb-6">Your Donation Has the Power To Transform Lives</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="First Name" className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cta focus:border-cta" />
              <input type="text" placeholder="Last Name" className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cta focus:border-cta" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input type="tel" placeholder="Phone Number" className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cta focus:border-cta" />
              <input type="email" placeholder="Email Address" className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cta focus:border-cta" />
            </div>

            <div className="mb-4">
              <label className="text-sm font-medium block mb-2">Donation Amount</label>
              
              {/* Preset Amount Buttons */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                {[5000, 10000, 25000, 50000].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => handlePresetSelect(preset)}
                    className={`rounded-md border px-3 py-2 text-sm transition-all ${
                      formSelected === 'preset' && amount === preset
                        ? 'bg-cta text-white border-cta'
                        : 'bg-white text-dark border-gray-200 hover:border-cta/60'
                    }`}
                  >
                    ₦{preset.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="mb-3">
                <input
                  type="text"
                  value={customAmount}
                  onChange={handleCustomChange}
                  placeholder="₦ Enter custom amount"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cta focus:border-cta"
                />
              </div>

              {/* Current Amount Display */}
              <div className="bg-cta/10 border border-cta/20 rounded-md p-3 text-center">
                <div className="text-xl font-bold text-cta">₦{amount.toLocaleString()}</div>
                <div className="text-sm text-gray-600">
                  {formSelected === 'custom' ? 'Custom amount' : 'Selected amount'}
                </div>
              </div>
            </div>

            <div className="mb-4 flex gap-2">
              <button type="button" onClick={() => setFrequency('one-time')} className={`flex-1 rounded-full px-4 py-2 ${frequency === 'one-time' ? 'bg-cta text-white' : 'bg-neutral text-dark'}`}>One-time</button>
              <button type="button" onClick={() => setFrequency('monthly')} className={`flex-1 rounded-full px-4 py-2 ${frequency === 'monthly' ? 'bg-cta text-white' : 'bg-neutral text-dark'}`}>Monthly</button>
            </div>

            <Button variant="primary" size="lg" className="w-full">Donate Now</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



