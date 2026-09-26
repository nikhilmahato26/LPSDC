import React from 'react';
import { KeyRound, UserCheck, Users, ShieldAlert, CheckCircle, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: 'Self Drive' | 'With Driver') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      number: '01',
      title: 'SELF DRIVE CAR RENTAL',
      subtitle: 'Drive On Your Own Terms',
      description:
        'Enjoy the freedom of driving yourself with a choice of vehicles suitable for personal, family and outstation travel.',
      icon: KeyRound,
      ctaText: 'EXPLORE SELF DRIVE',
      serviceType: 'Self Drive' as const,
      featured: true,
      features: [
        'Total privacy & driving autonomy',
        'Transparent rental process',
        'Outstation & city trip flexibility',
        'Clean & maintained fleet',
      ],
    },
    {
      number: '02',
      title: 'CAR WITH DRIVER',
      subtitle: 'Chauffeur-Driven Convenience',
      description:
        'Prefer a chauffeur-driven journey? Choose a vehicle with driver for comfortable local, family, business or outstation travel.',
      icon: UserCheck,
      ctaText: 'BOOK WITH DRIVER',
      serviceType: 'With Driver' as const,
      featured: false,
      features: [
        'Experienced & courteous drivers',
        'Stress-free city & outstation travel',
        'Ideal for weddings, events & meetings',
        'Timely pickup & drop assistance',
      ],
    },
    {
      number: '03',
      title: 'FAMILY & GROUP TRAVEL',
      subtitle: '5 to 8 Seater Spacious Options',
      description:
        'Choose from multiple vehicle options for individual, family and group travel requirements.',
      icon: Users,
      ctaText: 'ENQUIRE FAMILY CARS',
      serviceType: 'Self Drive' as const,
      featured: false,
      features: [
        'Generous legroom & luggage space',
        'Innova Crysta & Toyota Rumion',
        'Ideal for long weekend getaways',
        'Comfortable seating configuration',
      ],
    },
    {
      number: '04',
      title: 'PREMIUM & SUV RENTAL',
      subtitle: 'Commanding Stance & Power',
      description:
        'Choose from premium SUVs and larger vehicles for a more comfortable travel experience.',
      icon: ShieldAlert,
      ctaText: 'VIEW SUV FLEET',
      serviceType: 'Self Drive' as const,
      featured: false,
      features: [
        'Mahindra Thar 4×4 & Creta',
        'High ground clearance & road presence',
        'Smooth highway performance',
        'Adventure & luxury cruising',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-blue-light text-brand-blue border border-brand-blue/15 mb-3">
            What We Offer
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue tracking-tight">
            OUR SERVICES
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brand-muted">
            Rent a car. Choose how you travel. Whether you take the wheel yourself or relax with a chauffeur, LPSDC offers tailored solutions in Hyderabad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group border ${
                  service.featured
                    ? 'bg-white border-brand-blue shadow-card-hover ring-2 ring-brand-blue/10'
                    : 'bg-white border-brand-border shadow-card hover:shadow-card-hover hover:border-brand-blue/40'
                }`}
              >
                {/* Header with Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-slate-200 group-hover:text-brand-yellow transition-colors">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-brand-blue-light group-hover:bg-brand-blue group-hover:text-brand-yellow text-brand-blue flex items-center justify-center transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="text-[11px] font-extrabold tracking-wider uppercase text-brand-yellow-hover mb-1">
                    {service.subtitle}
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-brand-blue transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  type="button"
                  onClick={() => onSelectService(service.serviceType)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
                    service.featured
                      ? 'bg-brand-blue text-white hover:bg-brand-blue-secondary shadow'
                      : 'bg-brand-blue-light hover:bg-brand-blue text-brand-blue hover:text-white'
                  }`}
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Travel Scope Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-brand-border shadow-subtle flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-brand-yellow-hover flex items-center justify-center shrink-0 border border-brand-yellow/30">
              <span className="text-xl font-bold">5–8</span>
            </div>
            <div>
              <h4 className="text-base font-extrabold text-slate-900">
                Local City Trips &amp; Outstation Journeys
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                From everyday city commutes to long-distance outstation drives across Telangana, Andhra Pradesh, and beyond.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue-light px-3 py-1.5 rounded-lg">
              Flexible Rental Packages
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
