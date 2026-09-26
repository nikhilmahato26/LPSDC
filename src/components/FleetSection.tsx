import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Users, Fuel, Settings2, Sparkles, Calendar, Check } from 'lucide-react';
import { FLEET_VEHICLES, FILTER_OPTIONS, BUSINESS_INFO, getWhatsAppUrl } from '../data/fleetData';
import type { Vehicle, VehicleCategory } from '../types/fleet';

interface FleetSectionProps {
  onCheckAvailability: (vehicle: Vehicle) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onCheckAvailability }) => {
  const [activeFilter, setActiveFilter] = useState<VehicleCategory>('All');

  const filteredVehicles = FLEET_VEHICLES.filter((car) => {
    if (activeFilter === 'All') return true;
    return car.filterCategory.includes(activeFilter);
  });

  return (
    <section id="fleet" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-blue-light text-brand-blue border border-brand-blue/15 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-yellow fill-brand-yellow" />
            LPSDC Verified Fleet
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue tracking-tight">
            OUR FLEET
          </h2>
          <p className="mt-3 text-lg text-brand-muted">
            Choose the right car for your journey.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {FILTER_OPTIONS.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-blue text-white shadow-md'
                    : 'bg-brand-bg text-slate-700 hover:bg-brand-blue-light hover:text-brand-blue border border-slate-200/80'
                }`}
              >
                {filter.label}
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 rounded-xl border-2 border-brand-yellow pointer-events-none"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Fleet Grid with Framer Motion Layout */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7"
        >
          <AnimatePresence>
            {filteredVehicles.map((car) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className={`rounded-2xl sm:rounded-3xl bg-white border flex flex-col justify-between overflow-hidden transition-all duration-300 group hover:-translate-y-1 ${
                  car.featured
                    ? 'border-brand-blue/50 shadow-card-hover ring-2 ring-brand-blue/10'
                    : 'border-brand-border shadow-card hover:shadow-card-hover'
                }`}
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-bg">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm text-slate-800 text-[11px] font-bold rounded-lg shadow-sm border border-slate-200/60">
                      {car.category}
                    </span>
                    {car.featured && (
                      <span className="px-2.5 py-1 bg-brand-yellow text-brand-text text-[11px] font-extrabold rounded-lg shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3 fill-slate-900" />
                        FEATURED
                      </span>
                    )}
                  </div>

                  {/* Seats Badge */}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-slate-800 flex items-center gap-1 shadow-sm">
                    <Users className="w-3 h-3 text-brand-blue" />
                    <span>{car.seats}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Car Name & Tagline */}
                    <div className="mb-2">
                      <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-brand-blue transition-colors">
                        {car.name}
                      </h3>
                      <p className="text-xs text-brand-muted line-clamp-1 mt-0.5">
                        {car.tagline || car.category}
                      </p>
                    </div>

                    {/* Dual Service Badges (Self Drive + With Driver) */}
                    <div className="flex flex-wrap gap-1.5 my-3.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-brand-blue-light text-brand-blue border border-brand-blue/20">
                        <Check className="w-3 h-3" />
                        Self Drive
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-50 text-amber-900 border border-amber-200">
                        <Check className="w-3 h-3 text-brand-yellow-hover" />
                        With Driver
                      </span>
                    </div>

                    {/* Specs / Features snippet */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-xl mb-4 border border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Fuel className="w-3.5 h-3.5 text-slate-400" />
                        <span className="truncate">{car.fuelType}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Settings2 className="w-3.5 h-3.5 text-slate-400" />
                        <span className="truncate">{car.transmission}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions: Check Availability / WhatsApp / Call */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {/* Primary Button: Check Availability */}
                    <button
                      type="button"
                      onClick={() => onCheckAvailability(car)}
                      className="w-full py-2.5 px-3 bg-brand-blue hover:bg-brand-blue-secondary text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-150 flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Calendar className="w-3.5 h-3.5 text-brand-yellow" />
                      <span>CHECK AVAILABILITY</span>
                    </button>

                    {/* Secondary Row: WhatsApp & Call CTAs */}
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={getWhatsAppUrl({
                          vehicle: car.name,
                          message: `Hi LPSDC, I would like to check availability and rental quote for ${car.name}.`,
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                        title={`WhatsApp about ${car.name}`}
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>

                      <a
                        href={`tel:${BUSINESS_INFO.phone}`}
                        className="py-2 px-2 bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                        title={`Call ${BUSINESS_INFO.phone} for ${car.name}`}
                      >
                        <Phone className="w-3.5 h-3.5 text-brand-blue" />
                        <span>Call Now</span>
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pricing Note */}
        <div className="mt-12 p-4 rounded-2xl bg-brand-blue-light/60 border border-brand-blue/20 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-brand-blue font-semibold">
            Looking for daily, weekend, or extended rental quotes? Connect directly with LPSDC at <span className="font-extrabold">{BUSINESS_INFO.phone}</span> or send an enquiry below.
          </p>
        </div>

      </div>
    </section>
  );
};
