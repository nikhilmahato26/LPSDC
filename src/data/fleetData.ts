import type { Vehicle } from '../types/fleet';

export const BUSINESS_INFO = {
  shortName: 'LPSDC',
  fullName: 'Lakshmi Prasad Self Drive Cars',
  phone: '8074691600',
  formattedPhone: '+91 80746 91600',
  whatsappPhone: '918074691600',
  email: 'lpselfdrivecars@gmail.com',
  establishedYear: '2019',
  address: 'Sai Baba Nagar Colony, Kismatpur, Bandlaguda Jagir, Rajendranagar, Rangareddy, Hyderabad, Telangana – 500086',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sai+Baba+Nagar+Colony+Kismatpur+Bandlaguda+Jagir+Rajendranagar+Hyderabad+500086',
  instagramHandle: '@lpselfdrivecars',
  instagramUrl: 'https://www.instagram.com/lpselfdrivecars?stkn=cW83djE1aThrNTdu',
};

export const FLEET_VEHICLES: Vehicle[] = [
  {
    id: 'mahindra-thar-4x4',
    name: 'Mahindra Thar 4×4',
    category: 'Premium SUV / 4×4',
    filterCategory: ['All', 'SUV', 'Premium', '4×4'],
    services: ['Self Drive', 'With Driver'],
    image: '/images/thar.jpg',
    seats: '4 Seater',
    fuelType: 'Diesel / Petrol',
    transmission: 'Manual & Automatic',
    featured: true,
    tagline: 'Iconic 4×4 Adventure & Premium Presence',
    description: 'Choose the Mahindra Thar 4×4 for customers looking for a premium SUV experience. Rugged capabilities coupled with standout presence.',
  },
  {
    id: 'innova-crysta',
    name: 'Innova Crysta',
    category: 'Premium MPV',
    filterCategory: ['All', 'MPV', 'Premium'],
    services: ['Self Drive', 'With Driver'],
    image: '/images/innova.jpg',
    seats: '7–8 Seater',
    fuelType: 'Diesel',
    transmission: 'Manual & Automatic',
    featured: true,
    tagline: 'The Gold Standard in Long-Distance Comfort',
    description: 'Spacious, exceptionally comfortable seating for family road trips, group getaways, and executive outstation travel.',
  },
  {
    id: 'toyota-rumion',
    name: 'Toyota Rumion',
    category: 'MPV',
    filterCategory: ['All', 'MPV'],
    services: ['Self Drive', 'With Driver'],
    image: '/images/rumion.jpg',
    seats: '7 Seater',
    fuelType: 'Petrol / Hybrid',
    transmission: 'Manual & Automatic',
    featured: false,
    tagline: 'Modern 7-Seater Family Comfort',
    description: 'Smart, highly efficient 7-seater MPV engineered for seamless city commute and family weekend journeys.',
  },
  {
    id: 'hyundai-creta',
    name: 'Creta',
    category: 'Premium SUV',
    filterCategory: ['All', 'SUV', 'Premium'],
    services: ['Self Drive', 'With Driver'],
    image: '/images/creta.jpg',
    seats: '5 Seater',
    fuelType: 'Petrol / Diesel',
    transmission: 'Manual & Automatic',
    featured: false,
    tagline: 'Sophisticated Style & High Performance',
    description: 'Urban sophistication with commanding road presence, premium cabin technology, and smooth driving dynamics.',
  },
  {
    id: 'maruti-brezza',
    name: 'Brezza',
    category: 'Compact SUV',
    filterCategory: ['All', 'SUV'],
    services: ['Self Drive', 'With Driver'],
    image: '/images/brezza.jpg',
    seats: '5 Seater',
    fuelType: 'Petrol',
    transmission: 'Manual & Automatic',
    featured: false,
    tagline: 'High Stance & Reliable Agility',
    description: 'Practical compact SUV boasting superb ground clearance, comfortable seating, and effortless city manoeuvrability.',
  },
  {
    id: 'maruti-scross',
    name: 'S-Cross',
    category: 'Crossover / SUV',
    filterCategory: ['All', 'Crossover', 'SUV'],
    services: ['Self Drive', 'With Driver'],
    image: '/images/scross.jpg',
    seats: '5 Seater',
    fuelType: 'Petrol / Diesel',
    transmission: 'Manual & Automatic',
    featured: false,
    tagline: 'European Styling & Highway Stability',
    description: 'Solid crossover offering plush ride quality, high safety construction, and supreme highway cruising capability.',
  },
  {
    id: 'maruti-baleno',
    name: 'Baleno',
    category: 'Premium Hatchback',
    filterCategory: ['All', 'Hatchback', 'Premium'],
    services: ['Self Drive', 'With Driver'],
    image: '/images/baleno.jpg',
    seats: '5 Seater',
    fuelType: 'Petrol',
    transmission: 'Manual & Automatic',
    featured: false,
    tagline: 'Sleek, Spacious & Fuel Efficient',
    description: 'Wide and comfortable cabin with contemporary styling, great legroom, and effortless everyday handling.',
  },
  {
    id: 'maruti-swift',
    name: 'Swift',
    category: 'Hatchback',
    filterCategory: ['All', 'Hatchback'],
    services: ['Self Drive', 'With Driver'],
    image: '/images/swift.jpg',
    seats: '5 Seater',
    fuelType: 'Petrol',
    transmission: 'Manual & Automatic',
    featured: false,
    tagline: 'Sporty, Nimble & Easy to Navigate',
    description: 'India’s favorite responsive hatchback. Perfect for brisk city driving, quick getaways, and daily errands.',
  },
];

export const FILTER_OPTIONS: { id: import('../types/fleet').VehicleCategory; label: string }[] = [
  { id: 'All', label: 'All Fleet' },
  { id: 'Hatchback', label: 'Hatchback' },
  { id: 'Crossover', label: 'Crossover' },
  { id: 'SUV', label: 'SUV' },
  { id: 'MPV', label: 'MPV / 7–8 Seater' },
  { id: 'Premium', label: 'Premium' },
  { id: '4×4', label: '4×4' },
];

export const buildWhatsAppMessage = (data: {
  fullName?: string;
  phone?: string;
  vehicle?: string;
  serviceType?: string;
  pickupDate?: string;
  returnDate?: string;
  message?: string;
}) => {
  const parts = [
    'Hello LPSDC,',
    '',
    'I would like to enquire about a car rental.',
    '',
    `Name: ${data.fullName || '[NAME]'}`,
    `Phone: ${data.phone || '[PHONE]'}`,
    `Vehicle: ${data.vehicle || '[VEHICLE]'}`,
    `Service: ${data.serviceType ? data.serviceType.toUpperCase() : '[SELF DRIVE / WITH DRIVER]'}`,
    `Pickup Date: ${data.pickupDate || '[DATE]'}`,
    `Return Date: ${data.returnDate || '[DATE]'}`,
  ];

  if (data.message && data.message.trim().length > 0) {
    parts.push(`Message: ${data.message.trim()}`);
  }

  parts.push('', 'Please share availability and rental details.');
  
  return encodeURIComponent(parts.join('\n'));
};

export const getWhatsAppUrl = (data: {
  fullName?: string;
  phone?: string;
  vehicle?: string;
  serviceType?: string;
  pickupDate?: string;
  returnDate?: string;
  message?: string;
}) => {
  const text = buildWhatsAppMessage(data);
  return `https://wa.me/${BUSINESS_INFO.whatsappPhone}?text=${text}`;
};
