import React from 'react';
import { Users, ArrowRight, CheckCircle2, Calendar, Tag } from 'lucide-react';
import { FLEET_VEHICLES } from '../data/fleetData';

interface FamilySectionProps {
  onViewFamilyVehicles: () => void;
  onBookVehicle: (vehicleName: string) => void;
}

export const FamilySection: React.FC<FamilySectionProps> = ({
  onViewFamilyVehicles,
  onBookVehicle,
}) => {
  const familyCars = FLEET_VEHICLES.filter((v) =>
    ['toyota-innova-crysta', 'toyota-fortuner-type-2', 'kia-carens', 'suzuki-ertiga'].includes(v.id)
  );

  return (
    <section className="py-20 lg:py-28 bg-brand-blue-light/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-blue/10 text-brand-blue border border-brand-blue/20 mb-3">
              <Users className="w-3.5 h-3.5 text-brand-blue" />
              Family &amp; Group 7-Seater Fleet
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue tracking-tight">
              SPACIOUS 7–8 SEATER VEHICLES
            </h2>
            <p className="mt-3 text-lg text-brand-muted">
              Comfortable, spacious options for family getaways, weddings, and executive group travel across Telangana and outstation.
            </p>
          </div>

          <button
            type="button"
            onClick={onViewFamilyVehicles}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-secondary text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-md transition-all self-start md:self-auto shrink-0"
          >
            <span>VIEW ALL 7-SEATERS</span>
            <ArrowRight className="w-4 h-4 text-brand-yellow" />
          </button>
        </div>

        {/* 4 Family & MPV/SUV Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {familyCars.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border border-brand-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Vehicle Image */}
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Seats & Luggage */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm text-brand-blue text-[11px] font-extrabold rounded-lg shadow-sm border border-slate-200">
                    {item.seats}
                  </span>
                </div>

                {/* Price Ribbon */}
                <div className="absolute bottom-3 right-3 bg-brand-blue text-white px-2.5 py-1 rounded-lg text-xs font-black shadow flex items-center gap-1">
                  <Tag className="w-3 h-3 text-brand-yellow" />
                  <span>{item.price}{item.priceUnit}</span>
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-brand-blue transition-colors">
                    {item.name}
                  </h3>
                  {item.subName && (
                    <div className="text-[10px] font-bold text-slate-500 uppercase mt-0.5 tracking-wider">
                      {item.subName}
                    </div>
                  )}

                  <p className="text-xs text-brand-muted leading-relaxed mt-2.5 mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 mb-5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item.fuelType} Engine</span>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <button
                  type="button"
                  onClick={() => onBookVehicle(item.name)}
                  className="w-full py-2.5 px-3 bg-brand-blue hover:bg-brand-blue-secondary text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5 text-brand-yellow" />
                  <span>BOOK • {item.price}</span>
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
