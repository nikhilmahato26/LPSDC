import React from 'react';
import { MapPin, Navigation, Phone, Mail, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';
import { InstagramIcon } from './InstagramIcon';

export const LocationSection: React.FC = () => {
  const encodedAddress = encodeURIComponent(BUSINESS_INFO.address);
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-blue-light text-brand-blue border border-brand-blue/15 mb-3">
            Location &amp; Contact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue tracking-tight">
            VISIT OR CONNECT WITH US
          </h2>
          <p className="mt-3 text-lg text-brand-muted">
            Conveniently located in Hyderabad. Reach out directly for vehicle pickups, delivery, or reservations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Details & Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-brand-border shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="w-6 h-6 text-brand-yellow" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                      Primary Location
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900 leading-tight">
                      LPSDC Hyderabad Hub
                    </h3>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
                  <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>

              {/* Get Directions Link */}
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-brand-blue hover:bg-brand-blue-secondary text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4 text-brand-yellow" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              </a>
            </div>

            {/* Direct Channels Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Phone */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="p-5 rounded-2xl bg-white border border-brand-border shadow-card hover:border-brand-blue transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-blue-light text-brand-blue flex items-center justify-center mb-3 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-bold uppercase text-slate-500">Phone Enquiry</div>
                <div className="text-base font-extrabold text-slate-900 group-hover:text-brand-blue transition-colors">
                  {BUSINESS_INFO.phone}
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="p-5 rounded-2xl bg-white border border-brand-border shadow-card hover:border-brand-blue transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-blue-light text-brand-blue flex items-center justify-center mb-3 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-[11px] font-bold uppercase text-slate-500">Direct Email</div>
                <div className="text-xs font-extrabold text-slate-900 truncate group-hover:text-brand-blue transition-colors" title={BUSINESS_INFO.email}>
                  {BUSINESS_INFO.email}
                </div>
              </a>
            </div>

            {/* Instagram Card */}
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200/70 shadow-sm flex items-center justify-between hover:border-pink-400 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-600 uppercase">Follow On Instagram</div>
                  <div className="text-sm font-extrabold text-slate-900 group-hover:text-pink-600 transition-colors">
                    {BUSINESS_INFO.instagramHandle}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-pink-600 group-hover:translate-x-1 transition-all" />
            </a>

          </div>

          {/* Interactive Google Maps Section */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[380px] rounded-3xl overflow-hidden border border-brand-border shadow-card relative bg-slate-100 flex flex-col">
              <iframe
                title="LPSDC Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px', flex: 1 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Bottom Address Strip */}
              <div className="p-4 bg-white border-t border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <MapPin className="w-4 h-4 text-brand-blue shrink-0" />
                  <span className="truncate">Bandlaguda Jagir, Rajendranagar, Hyderabad – 500086</span>
                </div>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-extrabold text-brand-blue hover:text-brand-blue-secondary flex items-center gap-1 shrink-0"
                >
                  <span>Open Full Map</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
