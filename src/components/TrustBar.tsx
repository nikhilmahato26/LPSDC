import React from 'react';
import { Calendar, Users, KeyRound, UserCheck, MapPin } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    {
      value: '2019',
      label: 'Established',
      description: 'Serving Hyderabad customers',
      icon: Calendar,
      highlight: true,
    },
    {
      value: '5–8 Seater',
      label: 'Vehicle Options',
      description: 'Hatchback, SUV & MPV',
      icon: Users,
      highlight: false,
    },
    {
      value: 'Self Drive',
      label: 'Flexible Rental',
      description: 'Total driving freedom',
      icon: KeyRound,
      highlight: false,
    },
    {
      value: 'With Driver',
      label: 'Chauffeur Option',
      description: 'Relaxed chauffeur travel',
      icon: UserCheck,
      highlight: false,
    },
    {
      value: 'Hyderabad',
      label: 'Local & Outstation',
      description: 'Himayat Sagar base',
      icon: MapPin,
      highlight: false,
    },
  ];

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-card border border-brand-border p-4 sm:p-6 lg:p-7">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-3.5 ${
                  index !== 0 ? 'pt-4 sm:pt-0 sm:pl-4 lg:pl-6' : ''
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    item.highlight
                      ? 'bg-brand-yellow/20 text-brand-blue border border-brand-yellow/40'
                      : 'bg-brand-blue-light text-brand-blue'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                      {item.value}
                    </span>
                    {item.highlight && (
                      <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
                    )}
                  </div>
                  <div className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {item.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
