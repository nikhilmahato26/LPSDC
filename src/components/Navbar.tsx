import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Car, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fleetData';

interface NavbarProps {
  onOpenBookingModal?: (preselectedVehicle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Services', href: '#services' },
    { name: 'Thar 4×4', href: '#thar-featured' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-brand-border py-3.5'
            : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4 lg:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-sm group-hover:bg-brand-blue-secondary transition-colors relative overflow-hidden">
                <Car className="w-6 h-6 text-brand-yellow" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-brand-yellow rounded-tl-md"></span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-extrabold tracking-tight text-brand-blue leading-none">
                    LPSDC
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 bg-brand-yellow/20 text-brand-blue rounded border border-brand-yellow/30 uppercase tracking-wider">
                    Est. 2019
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs font-medium text-brand-muted tracking-tight">
                  Lakshmi Prasad Self Drive Cars
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-blue rounded-lg hover:bg-brand-blue-light transition-all duration-150"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-secondary transition-colors"
                title={`Call ${BUSINESS_INFO.formattedPhone}`}
              >
                <div className="w-8 h-8 rounded-full bg-brand-blue-light flex items-center justify-center text-brand-blue">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="hidden lg:inline">{BUSINESS_INFO.phone}</span>
                <span className="lg:hidden">CALL NOW</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  if (onOpenBookingModal) {
                    onOpenBookingModal();
                  } else {
                    const el = document.querySelector('#booking');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-blue hover:bg-brand-blue-secondary text-white font-semibold text-sm rounded-lg shadow-sm hover:shadow transition-all duration-150 group"
              >
                <Calendar className="w-4 h-4 text-brand-yellow transition-transform group-hover:scale-110" />
                <span>BOOK A CAR</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="p-2 text-brand-blue bg-brand-blue-light rounded-lg hover:bg-blue-100 transition-colors"
                aria-label="Call LPSDC"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-brand-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-brand-border bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 text-base font-semibold text-slate-800 hover:text-brand-blue hover:bg-brand-blue-light rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 mt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenBookingModal) {
                    onOpenBookingModal();
                  } else {
                    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-brand-blue text-white font-bold rounded-lg shadow"
              >
                <Calendar className="w-5 h-5 text-brand-yellow" />
                <span>BOOK A CAR NOW</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 border border-brand-border bg-slate-50 text-brand-blue font-semibold text-sm rounded-lg"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
