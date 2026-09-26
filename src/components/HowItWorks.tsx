import React from 'react';
import { Search, ToggleRight, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'CHOOSE YOUR CAR',
      description: 'Browse the available fleet.',
      detail: 'Select from hatchbacks, premium sedans, compact SUVs, Thar 4×4, or 7–8 seater MPVs.',
      icon: Search,
    },
    {
      step: '02',
      title: 'SELECT YOUR SERVICE',
      description: 'Choose: Self Drive or With Driver.',
      detail: 'Opt for complete self-drive privacy or relax with our experienced professional chauffeurs.',
      icon: ToggleRight,
    },
    {
      step: '03',
      title: 'SEND YOUR REQUIREMENT',
      description: 'Share your travel and rental details.',
      detail: 'Provide your preferred pickup date, return date, and journey type via our simple enquiry form.',
      icon: Send,
    },
    {
      step: '04',
      title: 'CONFIRM YOUR BOOKING',
      description: 'Connect with LPSDC through call or WhatsApp to confirm availability.',
      detail: 'Receive immediate quote, availability confirmation, and vehicle dispatch details.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-blue-light text-brand-blue border border-brand-blue/15 mb-3">
            Simple 4-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue tracking-tight">
            HOW IT WORKS
          </h2>
          <p className="mt-3 text-lg text-brand-muted">
            From car selection to final keys in hand — hassle-free car rental in Hyderabad.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-3xl bg-white p-7 border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step indicator header */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-black text-slate-200 group-hover:text-brand-blue transition-colors">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue-light text-brand-blue group-hover:bg-brand-blue group-hover:text-brand-yellow flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="text-xs font-bold text-brand-yellow-hover uppercase tracking-wider mb-1">
                    Step {item.step}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-brand-blue transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-800 mb-2">
                    {item.description}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center text-xs font-bold text-brand-blue">
                  <span>Fast &amp; Direct</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
