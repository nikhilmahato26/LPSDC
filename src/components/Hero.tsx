import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Users, CheckCircle2, Sparkles, Tag } from 'lucide-react';
import { BUSINESS_INFO, FLEET_VEHICLES, getWhatsAppUrl } from '../data/fleetData';

interface HeroProps {
  onOpenBookingModal: (preselectedVehicle?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  // Highlight cars in hero with prices
  const heroCars = [
    {
      vehicle: FLEET_VEHICLES[0], // Thar 4x4
      badge: 'Iconic 4×4 • ₹4,500/24HR',
      caption: 'Mahindra Thar 4×4 • Diesel AT • 4 Seater',
    },
    {
      vehicle: FLEET_VEHICLES[1], // Innova Crysta
      badge: 'Supreme MPV • ₹4,500/24HR',
      caption: 'Toyota Innova Crysta • Diesel AT • 7 Seater',
    },
    {
      vehicle: FLEET_VEHICLES[2], // Fortuner Type 2
      badge: 'Luxury SUV • ₹4,000/24HR',
      caption: 'Toyota Fortuner Type 2 • Diesel AT • 7 Seater',
    },
    {
      vehicle: FLEET_VEHICLES[6], // Brezza
      badge: 'Compact SUV • ₹2,500/24HR',
      caption: 'Suzuki Brezza • Petrol MT • 5 Seater',
    },
  ];

  const [activeCarIndex, setActiveCarIndex] = useState(0);
  const currentHero = heroCars[activeCarIndex];

  return (
    <section id="home" className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-brand-bg via-white to-white">
      {/* Subtle decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-blue-light/60 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-24 w-80 h-80 rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col text-left"
          >
            {/* Small Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-4 self-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-blue-light text-brand-blue border border-brand-blue/15 shadow-subtle">
                <Sparkles className="w-3.5 h-3.5 text-brand-yellow fill-brand-yellow" />
                ESTABLISHED IN 2019
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-brand-yellow/15 text-slate-800 border border-brand-yellow/30">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
                Hyderabad &amp; Outstation
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <Tag className="w-3 h-3 text-emerald-600" />
                Rates From ₹2,000/24HR
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-blue leading-[1.1] mb-3">
              DRIVE YOUR JOURNEY <br className="hidden sm:inline" />
              <span className="relative inline-block text-brand-blue-secondary">
                YOUR WAY
                <span className="absolute left-0 -bottom-1.5 w-full h-1.5 bg-brand-yellow rounded-full"></span>
              </span>
            </h1>

            {/* Supporting Heading */}
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mt-2 mb-4">
              Self Drive &amp; Chauffeur-Driven Cars in Hyderabad
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-brand-muted leading-relaxed mb-6 max-w-2xl">
              Choose from a wide range of verified cars starting at ₹2,000/24HR. From Swift, Baleno, and Ciaz to Mahindra Thar 4×4, Fortuner, and Innova Crysta — flexible rentals tailored for Hyderabad.
            </p>

            {/* Dual Service Highlighting Badges */}
            <div className="grid grid-cols-2 gap-3 max-w-lg mb-8">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-brand-border shadow-subtle">
                <div className="w-9 h-9 rounded-lg bg-brand-blue-light flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <div className="text-xs uppercase font-extrabold text-brand-blue tracking-wide">Option 01</div>
                  <div className="text-sm font-bold text-slate-900">Self Drive Freedom</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-brand-border shadow-subtle">
                <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-brand-yellow-hover" />
                </div>
                <div>
                  <div className="text-xs uppercase font-extrabold text-brand-blue tracking-wide">Option 02</div>
                  <div className="text-sm font-bold text-slate-900">Car With Chauffeur</div>
                </div>
              </div>
            </div>

            {/* Action Buttons: 4 CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={() => onOpenBookingModal()}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-brand-blue hover:bg-brand-blue-secondary text-white font-bold text-base rounded-xl shadow-card hover:shadow-card-hover transition-all duration-200 group"
              >
                <span>BOOK A CAR</span>
                <ArrowRight className="w-4 h-4 text-brand-yellow transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <a
                href="#fleet"
                className="inline-flex items-center justify-center px-5 py-3.5 bg-white hover:bg-brand-blue-light border-2 border-brand-blue/20 hover:border-brand-blue text-brand-blue font-bold text-base rounded-xl shadow-subtle transition-all duration-200"
              >
                VIEW FLEET &amp; PRICES
              </a>

              {/* Third CTA: WhatsApp */}
              <a
                href={getWhatsAppUrl({ message: 'Hi LPSDC, I would like to enquire about car rental in Hyderabad.' })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-xl shadow-subtle transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP NOW</span>
              </a>

              {/* Phone CTA */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-base rounded-xl transition-colors"
                title={`Call ${BUSINESS_INFO.formattedPhone}`}
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>CALL {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="flex items-center gap-6 text-xs text-brand-muted border-t border-slate-200/80 pt-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="font-semibold text-slate-700">Immediate Response</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
                <span className="font-semibold text-slate-700">5–8 Seater Fleet</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                <span className="font-semibold text-slate-700">Rates from ₹2,000/24HR</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-3xl bg-white p-3 sm:p-4 shadow-card border border-brand-border"
            >
              {/* Top Tag & Selector */}
              <div className="flex items-center justify-between px-2 pt-1 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                    {currentHero.badge}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-slate-400">
                  Featured Fleet Showcase
                </span>
              </div>

              {/* Main Vehicle Image Container with Framer Motion Transition */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-brand-blue-light/50 border border-slate-100 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentHero.vehicle.id}
                    src={currentHero.vehicle.image}
                    alt={currentHero.vehicle.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                </AnimatePresence>

                {/* Floating Service Badges on Image */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 bg-brand-blue/90 text-white backdrop-blur-sm text-[11px] font-extrabold rounded-md shadow-sm">
                    Self Drive
                  </span>
                  <span className="px-2.5 py-1 bg-amber-500 text-white backdrop-blur-sm text-[11px] font-extrabold rounded-md shadow-sm">
                    With Driver
                  </span>
                </div>

                {/* Floating Price Pill */}
                <div className="absolute bottom-3 left-3 bg-brand-blue/95 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-black shadow border border-white/20 flex items-center gap-1">
                  <Tag className="w-3 h-3 text-brand-yellow" />
                  <span>{currentHero.vehicle.price}{currentHero.vehicle.priceUnit}</span>
                </div>

                {/* Vehicle Quick Specs Pill */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold text-slate-800 shadow-md border border-slate-200/60 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-brand-blue" />
                  <span>{currentHero.vehicle.seats}</span>
                </div>
              </div>

              {/* Vehicle Title & Interactive Selector Pills */}
              <div className="mt-4 px-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">
                      {currentHero.vehicle.name}
                    </h3>
                    <p className="text-xs text-brand-muted font-medium mt-0.5">
                      {currentHero.caption}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenBookingModal(currentHero.vehicle.name)}
                    className="px-3.5 py-1.5 bg-brand-blue text-white hover:bg-brand-blue-secondary text-xs font-bold rounded-lg shadow-sm transition-colors"
                  >
                    Book Now
                  </button>
                </div>

                {/* Car Carousel Selector Tabs */}
                <div className="grid grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-100">
                  {heroCars.map((car, idx) => {
                    const isSelected = idx === activeCarIndex;
                    return (
                      <button
                        key={car.vehicle.id}
                        type="button"
                        onClick={() => setActiveCarIndex(idx)}
                        className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all ${
                          isSelected
                            ? 'bg-brand-blue text-white shadow-sm'
                            : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        {car.vehicle.name.replace('Mahindra ', '').replace('Toyota ', '').replace('Suzuki ', '')}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
