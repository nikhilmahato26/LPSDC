import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { FleetSection } from './components/FleetSection';
import { FeaturedThar } from './components/FeaturedThar';
import { FamilySection } from './components/FamilySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { AboutSection } from './components/AboutSection';
import { BookingSection } from './components/BookingSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { QuickBookModal } from './components/QuickBookModal';
import type { Vehicle } from './types/fleet';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalVehicle, setModalVehicle] = useState<string | undefined>(undefined);

  const handleOpenBookingModal = (vehicleName?: string) => {
    setModalVehicle(vehicleName);
    setIsModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsModalOpen(false);
    setModalVehicle(undefined);
  };

  const handleCheckAvailability = (vehicle: Vehicle) => {
    handleOpenBookingModal(vehicle.name);
  };

  const handleSelectService = (_service: 'Self Drive' | 'With Driver') => {
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewFamilyVehicles = () => {
    const fleetSection = document.querySelector('#fleet');
    if (fleetSection) {
      fleetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-brand-text flex flex-col selection:bg-brand-yellow selection:text-brand-text">
      {/* Sticky Responsive Navbar */}
      <Navbar onOpenBookingModal={() => handleOpenBookingModal()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBookingModal={handleOpenBookingModal} />

        {/* Quick Trust / Info Bar */}
        <TrustBar />

        {/* Services Section (Self Drive + Chauffeur) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Vehicle Fleet Section with Category Filters */}
        <FleetSection onCheckAvailability={handleCheckAvailability} />

        {/* Dedicated Featured Mahindra Thar 4x4 Section */}
        <FeaturedThar onEnquireThar={() => handleOpenBookingModal('Mahindra Thar 4×4')} />

        {/* Premium Family Travel Section (Innova Crysta + Toyota Rumion) */}
        <FamilySection
          onViewFamilyVehicles={handleViewFamilyVehicles}
          onBookVehicle={(carName) => handleOpenBookingModal(carName)}
        />

        {/* Why Choose LPSDC (6 feature cards, no fake claims) */}
        <WhyChooseUs />

        {/* How It Works (4-step visual flow) */}
        <HowItWorks />

        {/* About LPSDC Section */}
        <AboutSection />

        {/* Booking Form Section (React Hook Form + Zod) */}
        <BookingSection initialVehicle={modalVehicle} />

        {/* Location & Google Maps Section */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Booking Bar */}
      <MobileStickyBar onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* Quick Booking Modal */}
      <QuickBookModal
        isOpen={isModalOpen}
        onClose={handleCloseBookingModal}
        preselectedVehicle={modalVehicle}
      />
    </div>
  );
}

export default App;
