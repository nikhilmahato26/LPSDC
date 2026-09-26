import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Highlight Box */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-brand-bg p-8 sm:p-10 border border-brand-border shadow-card overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-48 h-48 bg-brand-blue-light rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue text-white flex items-center justify-center mb-6 shadow-sm">
                  <Calendar className="w-7 h-7 text-brand-yellow" />
                </div>

                <div className="text-xs font-black uppercase tracking-widest text-brand-blue mb-1">
                  Foundation &amp; Heritage
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
                  ESTABLISHED IN 2019
                </div>
                <p className="text-sm font-semibold text-brand-muted mb-8">
                  Serving customers with flexible self-drive and with-driver rental options.
                </p>

                <div className="space-y-3.5 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue shrink-0" />
                    <span className="text-sm font-semibold text-slate-800">
                      Based in Kismatpur, Bandlaguda Jagir, Hyderabad
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue shrink-0" />
                    <span className="text-sm font-semibold text-slate-800">
                      5–8 Seater Versatile Fleet
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue shrink-0" />
                    <span className="text-sm font-semibold text-slate-800">
                      Direct WhatsApp &amp; Phone Booking: {BUSINESS_INFO.phone}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-blue-light text-brand-blue border border-brand-blue/15 mb-3 self-start">
              Company Overview
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue tracking-tight mb-3">
              ABOUT LPSDC
            </h2>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6">
              Your Journey. Your Choice.
            </h3>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900 font-bold">LPSDC – Lakshmi Prasad Self Drive Cars</strong> has been serving customers since 2019, providing self-drive and with-driver car rental options in Hyderabad.
              </p>
              <p>
                The fleet includes practical cars, premium vehicles, SUVs and larger family-oriented options, giving customers flexibility based on their travel requirements.
              </p>
            </div>

            {/* Quick summary badges */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-100">
              <div className="p-4 rounded-2xl bg-brand-blue-light/50 border border-brand-blue/15">
                <div className="font-extrabold text-brand-blue text-sm uppercase tracking-wide mb-1">
                  Self Drive Freedom
                </div>
                <p className="text-xs text-slate-600">
                  Total autonomy for personal road trips, weekend tours, and outstation explorations.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-brand-yellow/30">
                <div className="font-extrabold text-slate-900 text-sm uppercase tracking-wide mb-1">
                  Chauffeur Convenience
                </div>
                <p className="text-xs text-slate-600">
                  Professional drivers for business commutes, family gatherings, weddings, and leisurely travel.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
