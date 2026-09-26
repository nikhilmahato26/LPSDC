import { z } from 'zod';

export type VehicleCategory = 
  | 'All'
  | 'Sedan'
  | 'Hatchback'
  | 'Crossover'
  | 'SUV'
  | 'MPV'
  | 'Premium'
  | '4×4';

export interface Vehicle {
  id: string;
  name: string;
  subName?: string;
  category: string;
  filterCategory: VehicleCategory[];
  services: ('Self Drive' | 'With Driver')[];
  image: string;
  seats: string;
  fuelType: string;
  transmission: string;
  price: string;
  priceUnit: string;
  featured?: boolean;
  tagline?: string;
  description?: string;
}

export const bookingFormSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
  phone: z.string().regex(/^[0-9]{10}$/, { message: 'Please enter a valid 10-digit mobile number' }),
  vehicle: z.string().min(1, { message: 'Please select a vehicle' }),
  serviceType: z.enum(['Self Drive', 'With Driver']),
  pickupDate: z.string().min(1, { message: 'Please select pickup date' }),
  returnDate: z.string().min(1, { message: 'Please select return date' }),
  message: z.string().optional(),
}).refine((data) => {
  if (data.pickupDate && data.returnDate) {
    return new Date(data.returnDate) >= new Date(data.pickupDate);
  }
  return true;
}, {
  message: 'Return date cannot be earlier than pickup date',
  path: ['returnDate'],
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;
