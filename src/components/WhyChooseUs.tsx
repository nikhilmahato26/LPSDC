import React from 'react';
import { Calendar, KeyRound, UserCheck, Car, Users, MessageSquare } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'ESTABLISHED SINCE 2019',
      description: 'Serving customers since 2019.',
      icon: Calendar,
      highlight: true,
    },
    {
      title: 'SELF DRIVE OPTION',
      description: 'Enjoy the flexibility of driving yourself.',
      icon: KeyRound,
      highlight: false,
    },
    {
      title: 'WITH DRIVER OPTION',
      description: 'Choose a chauffeur-driven journey.',
      icon: UserCheck,
      highlight: false,
    },
    {
      title: 'WIDE VEHICLE RANGE',
      description: 'Choose from hatchbacks, SUVs, MPVs, premium vehicles and 4×4 options.',
      icon: Car,
      highlight: false,
    },
    {
      title: '5–8 SEATER OPTIONS',
      description: 'Vehicle options suitable for different travel requirements.',
      icon: Users,
      highlight: false,
    },
    {
      title: 'EASY BOOKING',
      description: 'Connect through phone or WhatsApp for booking enquiries.',
      icon: MessageSquare,
      highlight: false,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-blue-light text-brand-blue border border-brand-blue/15 mb-3">
            Core Values
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue tracking-tight">
            WHY CHOOSE LPSDC?
          </h2>
          <p className="mt-3 text-lg text-brand-muted">
            Reliable, straightforward car rental service designed around your schedule and travel preferences.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between group ${
                  item.highlight
                    ? 'bg-brand-bg border-brand-blue/30 shadow-card hover:shadow-card-hover'
                    : 'bg-white border-brand-border shadow-card hover:shadow-card-hover hover:border-brand-blue/40'
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                      item.highlight
                        ? 'bg-brand-blue text-brand-yellow'
                        : 'bg-brand-blue-light text-brand-blue group-hover:bg-brand-blue group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-brand-blue transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400">
                    Feature {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
