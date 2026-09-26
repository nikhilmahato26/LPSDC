import React from 'react';
import { Sparkles, Phone, MessageSquare, ArrowRight, ShieldCheck, Compass, Zap } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/fleetData';

interface FeaturedTharProps {
  onEnquireThar: () => void;
}

export const FeaturedThar: React.FC<FeaturedTharProps> = ({ onEnquireThar }) => {
  return (
    <section id="thar-featured" className="py-20 lg:py-28 bg-brand-blue text-white relative overflow-hidden">
      {/* Background Accent Gradients & Grid Pattern */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue-secondary rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left / Info Column */}
          <div className="lg:col-span-6 flex flex-col text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-4 self-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase bg-brand-yellow text-brand-blue shadow-glow-yellow">
                <Sparkles className="w-3.5 h-3.5 fill-brand-blue" />
                FEATURED VEHICLE
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15">
                4×4 Off-Road &amp; Highway
              </span>
            </div>

            {/* Sub-badge: Car Name */}
            <span className="text-brand-yellow font-extrabold tracking-wider text-sm uppercase mb-1">
              MAHINDRA THAR 4×4
            </span>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-4">
              READY FOR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-amber-300">
                THE ROAD?
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed mb-8 max-w-xl">
              Choose the Mahindra Thar 4×4 for customers looking for a premium SUV experience. Whether you want to command the highway, venture into rugged trails, or make an unforgettable arrival at events in Hyderabad.
            </p>

            {/* Highlighted Key Specs */}
            <div className="grid grid-cols-3 gap-3 mb-8 max-w-lg">
              <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/15">
                <Compass className="w-5 h-5 text-brand-yellow mb-1.5" />
                <div className="text-xs uppercase font-extrabold text-blue-200">Drive Type</div>
                <div className="text-sm font-bold text-white">4×4 Manual / Auto</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/15">
                <ShieldCheck className="w-5 h-5 text-brand-yellow mb-1.5" />
                <div className="text-xs uppercase font-extrabold text-blue-200">Services</div>
                <div className="text-sm font-bold text-white">Self Drive &amp; Driver</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/15">
                <Zap className="w-5 h-5 text-brand-yellow mb-1.5" />
                <div className="text-xs uppercase font-extrabold text-blue-200">Category</div>
                <div className="text-sm font-bold text-white">Premium SUV</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onEnquireThar}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-blue font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg transition-all duration-200 group"
              >
                <span>ENQUIRE NOW</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={getWhatsAppUrl({
                  vehicle: 'Mahindra Thar 4×4',
                  message: 'Hi LPSDC, I am interested in booking the Mahindra Thar 4×4.',
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white border border-white/20 font-bold text-sm uppercase tracking-wider rounded-xl backdrop-blur-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WHATSAPP</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-blue-200 hover:text-white font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-yellow" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

          </div>

          {/* Right / Big Cinematic Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-brand-blue-secondary to-blue-900 border-2 border-white/15 shadow-2xl p-2 sm:p-3">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden">
                <img
                  src="/images/thar.jpg"
                  alt="Mahindra Thar 4x4 - LPSDC Hyderabad"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Specs Ribbon */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-white/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow"></span>
                    <span className="text-xs font-bold text-white">
                      Mahindra Thar 4×4 Special Edition
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-amber-300">
                    Self Drive &amp; With Driver
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
