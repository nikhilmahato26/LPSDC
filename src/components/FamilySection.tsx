import React from 'react';
import { Users, Luggage, ArrowRight, CheckCircle2, Calendar } from 'lucide-react';
import { FLEET_VEHICLES } from '../data/fleetData';

interface FamilySectionProps {
  onViewFamilyVehicles: () => void;
  onBookVehicle: (vehicleName: string) => void;
}

export const FamilySection: React.FC<FamilySectionProps> = ({
  onViewFamilyVehicles,
  onBookVehicle,
}) => {
  const innova = FLEET_VEHICLES.find((v) => v.id === 'innova-crysta')!;
  const rumion = FLEET_VEHICLES.find((v) => v.id === 'toyota-rumion')!;

  const familyCars = [
    {
      vehicle: innova,
      title: 'INNOVA CRYSTA',
      badge: 'Premium MPV • 7–8 Seater',
      description:
        'The undisputed choice for high-comfort long-distance travel, family vacation tours, and corporate delegations.',
      features: [
        'Superior passenger comfort with captain seat options',
        'Ample boot space for luggage and suitcases',
        'Powerful, smooth highway performance',
        'Available in Self Drive & Chauffeur Driven',
      ],
    },
    {
      vehicle: rumion,
      title: 'TOYOTA RUMION',
      badge: 'Modern MPV • 7 Seater',
      description:
        'Smart, highly versatile 7-seater MPV offering efficient travel and convenient city & outstation capabilities.',
      features: [
        'Flexible 3-row seating arrangement',
        'Excellent fuel efficiency and ride quality',
        'Compact enough for city navigation and parking',
        'Available in Self Drive & Chauffeur Driven',
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-brand-blue-light/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-3">
              <Users className="w-3.5 h-3.5 text-brand-blue" />
              Family &amp; Group Travel
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue tracking-tight">
              SPACIOUS 5–8 SEATER FLEET
            </h2>
            <p className="mt-3 text-lg text-brand-muted">
              Comfortable options for family and group travel.
            </p>
          </div>

          <button
            type="button"
            onClick={onViewFamilyVehicles}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-secondary text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-md transition-all self-start md:self-auto shrink-0"
          >
            <span>VIEW FAMILY VEHICLES</span>
            <ArrowRight className="w-4 h-4 text-brand-yellow" />
          </button>
        </div>

        {/* Split Grid for Innova Crysta & Toyota Rumion */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">
          {familyCars.map((item) => (
            <div
              key={item.vehicle.id}
              className="rounded-3xl bg-white border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Vehicle Image */}
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src={item.vehicle.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brand-blue text-white text-xs font-bold rounded-lg shadow-sm">
                    {item.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-slate-800 shadow border border-slate-200 flex items-center gap-2">
                  <Luggage className="w-4 h-4 text-brand-blue" />
                  <span>Luggage Friendly</span>
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-black text-slate-900">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                      <Users className="w-3.5 h-3.5 text-brand-blue" />
                      <span>{item.vehicle.seats}</span>
                    </div>
                  </div>

                  <p className="text-sm text-brand-muted leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onBookVehicle(item.vehicle.name)}
                    className="flex-1 py-3 px-4 bg-brand-blue hover:bg-brand-blue-secondary text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Calendar className="w-4 h-4 text-brand-yellow" />
                    <span>ENQUIRE AVAILABILITY</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
