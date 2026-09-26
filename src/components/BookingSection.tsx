import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, MessageSquare, Phone, Calendar, User, PhoneCall, Car, CheckCircle2, AlertCircle } from 'lucide-react';
import { FLEET_VEHICLES, BUSINESS_INFO, getWhatsAppUrl } from '../data/fleetData';
import { bookingFormSchema } from '../types/fleet';
import type { BookingFormData } from '../types/fleet';

interface BookingSectionProps {
  initialVehicle?: string;
  initialService?: 'Self Drive' | 'With Driver';
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialVehicle,
  initialService = 'Self Drive',
}) => {
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      vehicle: initialVehicle || '',
      serviceType: initialService,
      pickupDate: '',
      returnDate: '',
      message: '',
    },
  });

  const selectedVehicleName = watch('vehicle');
  const selectedVehicleObj = FLEET_VEHICLES.find((v) => v.name === selectedVehicleName);
  const selectedService = watch('serviceType');

  const onSubmit = (data: BookingFormData) => {
    setSubmittedData(data);
    const vehicleObj = FLEET_VEHICLES.find((v) => v.name === data.vehicle);
    const whatsappUrl = getWhatsAppUrl({
      fullName: data.fullName,
      phone: data.phone,
      vehicle: data.vehicle,
      serviceType: data.serviceType,
      pickupDate: data.pickupDate,
      returnDate: data.returnDate,
      message: data.message,
      price: vehicleObj?.price,
    });
    window.open(whatsappUrl, '_blank');
  };

  const handleDirectWhatsApp = () => {
    const currentValues = watch();
    const vehicleObj = FLEET_VEHICLES.find((v) => v.name === currentValues.vehicle);
    const whatsappUrl = getWhatsAppUrl({
      fullName: currentValues.fullName,
      phone: currentValues.phone,
      vehicle: currentValues.vehicle,
      serviceType: currentValues.serviceType,
      pickupDate: currentValues.pickupDate,
      returnDate: currentValues.returnDate,
      message: currentValues.message,
      price: vehicleObj?.price,
    });
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-brand-blue-light text-brand-blue border border-brand-blue/15 mb-3">
            Instant 24HR Reservation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-blue tracking-tight">
            BOOK YOUR CAR
          </h2>
          <p className="mt-3 text-lg text-brand-muted">
            Tell us what you need and connect with LPSDC for availability and rental details.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-bg rounded-3xl p-6 sm:p-8 border border-brand-border shadow-card">
              <h3 className="text-xl font-extrabold text-brand-blue mb-3">
                Quick Booking Assistance
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Prefer speaking directly? Our team is available 7 days a week to confirm availability and coordinate your pickup in Hyderabad.
              </p>

              {/* Direct Call Button */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-between p-4 rounded-2xl bg-white border border-brand-border shadow-subtle hover:border-brand-blue transition-colors group mb-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-yellow" />
                  </div>
                  <div>
                    <div className="text-xs text-brand-muted font-bold uppercase tracking-wider">
                      Direct Phone Call
                    </div>
                    <div className="text-lg font-black text-slate-900 group-hover:text-brand-blue transition-colors">
                      {BUSINESS_INFO.phone}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-brand-blue uppercase bg-brand-blue-light px-2.5 py-1 rounded-md">
                  Call Now
                </span>
              </a>

              {/* Direct WhatsApp Button */}
              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-white border border-brand-border shadow-subtle hover:border-emerald-500 transition-colors group"
              >
                <div className="flex items-center gap-3 text-left">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-emerald-700 font-bold uppercase tracking-wider">
                      WhatsApp Chat
                    </div>
                    <div className="text-base font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                      +91 80746 91600
                    </div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-800 uppercase bg-emerald-50 px-2.5 py-1 rounded-md">
                  Chat Now
                </span>
              </button>

              {/* Dynamic Selected Vehicle Preview Pill */}
              {selectedVehicleObj && (
                <div className="mt-6 p-4 rounded-2xl bg-white border border-brand-blue/30 shadow-subtle flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedVehicleObj.image}
                      alt={selectedVehicleObj.name}
                      className="w-16 h-12 object-cover rounded-lg"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{selectedVehicleObj.name}</div>
                      <div className="text-[11px] text-slate-500">{selectedVehicleObj.subName}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-extrabold text-brand-blue">{selectedVehicleObj.price}</span>
                    <div className="text-[10px] text-slate-500">{selectedVehicleObj.priceUnit}</div>
                  </div>
                </div>
              )}

              {/* Rental Checklist */}
              <div className="mt-8 pt-6 border-t border-slate-200 space-y-3">
                <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
                  Rental Essentials:
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Valid Driving License (for Self Drive)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Government ID Proof (Aadhaar / Voter ID)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>Flat 24HR pricing with crystal-clear terms</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: React Hook Form with Zod Validation */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 sm:p-10 border border-brand-border shadow-card">
              
              {/* Submission Success Banner */}
              {submittedData && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <div className="flex items-center gap-2 font-bold mb-1">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Enquiry Ready for Dispatch!</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-700">
                    A WhatsApp chat window has been opened with your enquiry for <strong>{submittedData.vehicle}</strong> ({submittedData.serviceType}).
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                
                {/* Full Name & Phone Number */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        {...register('fullName')}
                        className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                            : 'border-slate-300 focus:border-brand-blue focus:ring-brand-blue/20 bg-white'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <PhoneCall className="w-4 h-4" />
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        {...register('phone')}
                        className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                            : 'border-slate-300 focus:border-brand-blue focus:ring-brand-blue/20 bg-white'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Vehicle Selection & Service Type */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Vehicle Dropdown */}
                  <div>
                    <label htmlFor="vehicle" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Select Vehicle &amp; Rate *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Car className="w-4 h-4" />
                      </div>
                      <select
                        id="vehicle"
                        {...register('vehicle')}
                        className={`w-full pl-10 pr-8 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all appearance-none bg-white ${
                          errors.vehicle
                            ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                            : 'border-slate-300 focus:border-brand-blue focus:ring-brand-blue/20'
                        }`}
                      >
                        <option value="">-- Choose a Vehicle --</option>
                        {FLEET_VEHICLES.map((car) => (
                          <option key={car.id} value={car.name}>
                            {car.name} ({car.subName || car.seats}) — {car.price}{car.priceUnit}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400 text-xs">
                        ▼
                      </div>
                    </div>
                    {errors.vehicle && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.vehicle.message}
                      </p>
                    )}
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Service Type *
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <label
                        className={`cursor-pointer py-3 px-3 rounded-xl border text-center text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                          selectedService === 'Self Drive'
                            ? 'bg-brand-blue text-white border-brand-blue shadow-sm'
                            : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                        }`}
                      >
                        <input
                          type="radio"
                          value="Self Drive"
                          {...register('serviceType')}
                          className="sr-only"
                        />
                        <span>Self Drive</span>
                      </label>

                      <label
                        className={`cursor-pointer py-3 px-3 rounded-xl border text-center text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                          selectedService === 'With Driver'
                            ? 'bg-brand-blue text-white border-brand-blue shadow-sm'
                            : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                        }`}
                      >
                        <input
                          type="radio"
                          value="With Driver"
                          {...register('serviceType')}
                          className="sr-only"
                        />
                        <span>With Driver</span>
                      </label>
                    </div>
                    {errors.serviceType && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.serviceType.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Pickup Date & Return Date */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Pickup Date */}
                  <div>
                    <label htmlFor="pickupDate" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Pickup Date *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        id="pickupDate"
                        type="date"
                        {...register('pickupDate')}
                        className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                          errors.pickupDate
                            ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                            : 'border-slate-300 focus:border-brand-blue focus:ring-brand-blue/20 bg-white'
                        }`}
                      />
                    </div>
                    {errors.pickupDate && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.pickupDate.message}
                      </p>
                    )}
                  </div>

                  {/* Return Date */}
                  <div>
                    <label htmlFor="returnDate" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Return Date *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        id="returnDate"
                        type="date"
                        {...register('returnDate')}
                        className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                          errors.returnDate
                            ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                            : 'border-slate-300 focus:border-brand-blue focus:ring-brand-blue/20 bg-white'
                        }`}
                      />
                    </div>
                    {errors.returnDate && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.returnDate.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Message / Special Requirements (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="e.g. Destination (Local/Outstation), preferred pickup time, or baby seat requirement..."
                    {...register('message')}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 text-sm text-slate-900 placeholder-slate-400 focus:outline-none resize-none"
                  />
                </div>

                {/* CTAs */}
                <div className="pt-2 grid sm:grid-cols-2 gap-3">
                  {/* Primary CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 bg-brand-blue hover:bg-brand-blue-secondary text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-4 h-4 text-brand-yellow transition-transform group-hover:translate-x-1" />
                    <span>SEND BOOKING ENQUIRY</span>
                  </button>

                  {/* Secondary CTA: WhatsApp Now */}
                  <button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="w-full py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WHATSAPP NOW</span>
                  </button>
                </div>

                <p className="text-[11px] text-center text-slate-500 pt-2">
                  All requests directly connect with LPSDC Hyderabad at <span className="font-bold text-slate-800">{BUSINESS_INFO.phone}</span>. No hidden platform markups.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
