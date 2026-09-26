import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/fleetData';

interface MobileStickyBarProps {
  onOpenBookingModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-border px-3 py-2.5 shadow-2xl sm:hidden flex items-center justify-between gap-2">
      {/* Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-slate-100 active:bg-slate-200 text-brand-blue font-extrabold text-xs rounded-xl border border-slate-200 transition-colors"
      >
        <Phone className="w-4 h-4 text-brand-blue" />
        <span>CALL</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={getWhatsAppUrl({
          message: 'Hi LPSDC, I would like to enquire about car rental in Hyderabad.',
        })}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-emerald-600 active:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-sm transition-colors"
      >
        <MessageSquare className="w-4 h-4" />
        <span>WHATSAPP</span>
      </a>

      {/* Book A Car Button */}
      <button
        type="button"
        onClick={onOpenBookingModal}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 bg-brand-blue active:bg-brand-blue-secondary text-white font-extrabold text-xs rounded-xl shadow-sm transition-colors"
      >
        <Calendar className="w-4 h-4 text-brand-yellow" />
        <span>BOOK</span>
      </button>
    </div>
  );
};
