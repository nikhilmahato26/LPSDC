import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, FLEET_VEHICLES } from '../data/fleetData';
import { InstagramIcon } from './InstagramIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-brand-border pt-16 pb-24 md:pb-12 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          
          {/* Brand & Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-950 flex items-center justify-center p-0.5">
                <img
                  src="/images/lpsdc-logo.jpg"
                  alt="LPSDC Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-black tracking-tight text-brand-blue leading-none">
                    LPSDC
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 bg-brand-yellow/20 text-brand-blue rounded border border-brand-yellow/30 uppercase">
                    Est. 2019
                  </span>
                </div>
                <span className="text-xs font-semibold text-brand-muted">
                  Lakshmi Prasad Self Drive Cars
                </span>
              </div>
            </div>

            <p className="text-xs font-bold text-amber-600 uppercase tracking-wide">
              Drive Like You Are The Boss Of Car
            </p>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Rent a car. Choose how you travel. Self Drive and With-Driver Car Rental in Hyderabad. Established in 2019.
            </p>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pink-50 text-pink-700 border border-pink-200 hover:bg-pink-100 text-xs font-bold transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>{BUSINESS_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-blue">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <a href="#home" className="hover:text-brand-blue transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-brand-blue transition-colors">
                  Fleet &amp; Rates
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-blue transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#thar-featured" className="hover:text-brand-blue transition-colors">
                  Thar 4×4
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-blue transition-colors">
                  About LPSDC
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-brand-blue transition-colors">
                  Book A Car
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Our Fleet Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-blue">
              Fleet Options &amp; Rates
            </h4>
            <div className="grid grid-cols-1 gap-y-1.5 text-xs font-semibold text-slate-600">
              {FLEET_VEHICLES.slice(0, 8).map((car) => (
                <a
                  key={car.id}
                  href="#fleet"
                  className="hover:text-brand-blue transition-colors truncate flex items-center justify-between"
                  title={car.name}
                >
                  <span className="truncate">• {car.name}</span>
                  <span className="text-[11px] font-bold text-brand-blue ml-2">{car.price}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-blue">
              Direct Contact
            </h4>
            
            <div className="space-y-3 text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-start gap-2.5 hover:text-brand-blue transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">{BUSINESS_INFO.phone}</div>
                  <div className="text-slate-500">Phone &amp; WhatsApp</div>
                </div>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-start gap-2.5 hover:text-brand-blue transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900 break-all">{BUSINESS_INFO.email}</div>
                  <div className="text-slate-500">Booking Enquiries</div>
                </div>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <div className="text-slate-600 leading-relaxed">
                  {BUSINESS_INFO.address}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-700">LPSDC – Lakshmi Prasad Self Drive Cars</strong>. Established in 2019. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="font-semibold text-slate-700">
              Hyderabad, Telangana
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-100 hover:bg-brand-blue hover:text-white transition-colors flex items-center gap-1 text-slate-700"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-bold">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
