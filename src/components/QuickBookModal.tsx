import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X, Send, Phone, User, PhoneCall, Car, AlertCircle, Sparkles, Tag } from 'lucide-react';
import { FLEET_VEHICLES, BUSINESS_INFO, getWhatsAppUrl } from '../data/fleetData';
import { bookingFormSchema } from '../types/fleet';
import type { BookingFormData } from '../types/fleet';

interface QuickBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedVehicle?: string;
}

export const QuickBookModal: React.FC<QuickBookModalProps> = ({
  isOpen,
  onClose,
  preselectedVehicle,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullName: '',
      phone: '',
      vehicle: preselectedVehicle || '',
      serviceType: 'Self Drive',
      pickupDate: '',
      returnDate: '',
      message: '',
    },
  });

  useEffect(() => {
    if (preselectedVehicle) {
      setValue('vehicle', preselectedVehicle);
    }
  }, [preselectedVehicle, setValue]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const selectedVehicleName = watch('vehicle');
  const selectedVehicleObj = FLEET_VEHICLES.find((v) => v.name === selectedVehicleName);
  const selectedService = watch('serviceType');

  const onSubmit = (data: BookingFormData) => {
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
    onClose();
    reset();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-brand-border overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-brand-blue text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-brand-yellow" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold leading-none text-white">
                Book / Enquire Vehicle
              </h3>
              <p className="text-xs text-blue-200 mt-1">
                LPSDC – 24-Hour Rental Pricing in Hyderabad
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto flex-1">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
            
            {/* Vehicle Selection */}
            <div>
              <label htmlFor="modalVehicle" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Selected Vehicle &amp; Rate *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Car className="w-4 h-4" />
                </div>
                <select
                  id="modalVehicle"
                  {...register('vehicle')}
                  className={`w-full pl-10 pr-8 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 appearance-none bg-white ${
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

              {/* Selected Price Highlight */}
              {selectedVehicleObj && (
                <div className="mt-2.5 px-3 py-2 rounded-xl bg-brand-blue-light/70 border border-brand-blue/20 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Tag className="w-3.5 h-3.5 text-brand-blue" />
                    <span className="font-bold text-slate-800">{selectedVehicleObj.name}</span>
                  </div>
                  <span className="font-black text-brand-blue">{selectedVehicleObj.price}{selectedVehicleObj.priceUnit}</span>
                </div>
              )}
            </div>

            {/* Service Type Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Service Type *
              </label>
              <div className="grid grid-cols-2 gap-2">
                <label
                  className={`cursor-pointer py-2.5 px-3 rounded-xl border text-center text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
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
                  className={`cursor-pointer py-2.5 px-3 rounded-xl border text-center text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
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
            </div>

            {/* Name & Phone */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="modalName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="modalName"
                    type="text"
                    placeholder="Your name"
                    {...register('fullName')}
                    className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 ${
                      errors.fullName
                        ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                        : 'border-slate-300 focus:border-brand-blue focus:ring-brand-blue/20'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600 font-medium">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="modalPhone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <input
                    id="modalPhone"
                    type="tel"
                    maxLength={10}
                    placeholder="10-digit number"
                    {...register('phone')}
                    className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 ${
                      errors.phone
                        ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
                        : 'border-slate-300 focus:border-brand-blue focus:ring-brand-blue/20'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600 font-medium">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Pickup & Return Dates */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="modalPickup" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Pickup Date *
                </label>
                <input
                  id="modalPickup"
                  type="date"
                  {...register('pickupDate')}
                  className={`w-full px-3 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 ${
                    errors.pickupDate
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-slate-300 focus:border-brand-blue focus:ring-brand-blue/20'
                  }`}
                />
                {errors.pickupDate && (
                  <p className="mt-1 text-xs text-red-600 font-medium">
                    {errors.pickupDate.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="modalReturn" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Return Date *
                </label>
                <input
                  id="modalReturn"
                  type="date"
                  {...register('returnDate')}
                  className={`w-full px-3 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 ${
                    errors.returnDate
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-slate-300 focus:border-brand-blue focus:ring-brand-blue/20'
                  }`}
                />
                {errors.returnDate && (
                  <p className="mt-1 text-xs text-red-600 font-medium">
                    {errors.returnDate.message}
                  </p>
                )}
              </div>
            </div>

            {/* Optional Note */}
            <div>
              <label htmlFor="modalMessage" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Optional Note / Destination
              </label>
              <textarea
                id="modalMessage"
                rows={2}
                placeholder="Local or Outstation, specific timings..."
                {...register('message')}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 text-sm text-slate-900 resize-none"
              />
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-col gap-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 bg-brand-blue hover:bg-brand-blue-secondary text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-brand-yellow" />
                <span>CONFIRM &amp; SEND ENQUIRY</span>
              </button>

              <div className="flex items-center justify-center gap-4 pt-1">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="text-xs font-bold text-slate-600 hover:text-brand-blue flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <span className="text-slate-300">|</span>
                <span className="text-xs text-slate-500">Established in 2019</span>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};
