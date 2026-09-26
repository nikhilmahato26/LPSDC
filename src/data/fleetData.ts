import type { Vehicle, VehicleCategory } from '../types/fleet';

export const BUSINESS_INFO = {
  shortName: 'LPSDC',
  fullName: 'Lakshmi Prasad Self Drive Cars',
  phone: '8074691600',
  formattedPhone: '+91 80746 91600',
  whatsappPhone: '918074691600',
  email: 'lpselfdrivecars@gmail.com',
  establishedYear: '2019',
  address: 'Sai Baba Nagar Colony, Kismatpur, Bandlaguda Jagir, Rajendranagar, Rangareddy, Hyderabad, Telangana – 500086',
  googleMapsUrl: 'https://maps.app.goo.gl/GH1rcL3LZM7z9NAG6?g_st=aw',
  instagramHandle: '@lpselfdrivecars',
  instagramUrl: 'https://www.instagram.com/lpselfdrivecars?stkn=cW83djE1aThrNTdu',
};

export const FLEET_VEHICLES: Vehicle[] = [
  {
    id: 'mahindra-thar-4x4',
    name: 'Mahindra Thar 4×4',
    subName: 'DIESEL AT | 4 SEATER',
    category: 'Premium SUV / 4×4',
    filterCategory: ['All', 'SUV', 'Premium', '4×4'],
    services: ['Self Drive', 'With Driver'],
    image: '/images/thar.jpg',
    seats: '4 Seater',
    fuelType: 'Diesel',
    transmission: 'Automatic (AT)',
    price: '₹4,500',
    priceUnit: '/24HR',
    featured: true,
    tagline: 'Iconic 4×4 Adventure & Commanding Road Stance',
    description: 'Rugged capability, high ground clearance, and standout presence. Ideal for highway cruising and adventure.',
  },
  {
    id: 'toyota-innova-crysta',
    name: 'Toyota Innova Crysta',
    subName: 'DIESEL | 7 SEATER AT',
    category: 'Premium MPV',
    filterCategory: ['All', 'MPV', 'Premium'],
    services: ['Self Drive', 'With Driver'],
    image: '/images/innova.jpg',
    seats: '7 Seater',
    fuelType: 'Diesel',
    transmission: 'Automatic (AT)',
    price: '₹4,500',
    priceUnit: '/24HR',
    featured: true,
    tagline: 'The Gold Standard in Long-Distance Comfort',
    description: 'Supreme ride comfort, spacious captain seats, and exceptional highway touring reliability for family and groups.',
  },
  {
    id: 'toyota-fortuner-type-2',
    name: 'Toyota Fortuner Type 2',
    subName: 'DIESEL AT | 7 SEATER',
    category: 'Premium Luxury SUV',
    filterCategory: ['All', 'SUV', 'Premium'],
    services: ['Self Drive', 'With Driver'],
    image: '/images/fortuner.jpg',
    seats: '7 Seater',
    fuelType: 'Diesel',
    transmission: 'Automatic (AT)',
    price: '₹4,000',
    priceUnit: '/24HR',
    featured: true,
    tagline: 'Commanding Power & Executive Stance',
    description: 'Legendary toughness and commanding luxury. Superior 7-seater SUV for VIP road travel and celebrations.',
  },
  {
    id: 'kia-carens',
    name: 'Kia Carens',
    subName: 'PETROL | 7 SEATER',
    category: 'MPV / Family',
    filterCategory: ['All', 'MPV'],
    services: ['Self Drive', 'With Driver'],
    image: '/images/carens.jpg',
    seats: '7 Seater',
    fuelType: 'Petrol',
    transmission: 'Manual & Automatic',
    price: '₹3,000',
    priceUnit: '/24HR',
    featured: false,
    tagline: 'Modern 7-Seater Space & Comfort',
    description: 'Futuristic styling, smooth petrol engine, generous legroom, and effortless long drives with family.',
  },
  {
    id: 'suzuki-ertiga',
    name: 'Suzuki Ertiga',
    subName: 'PETROL | 7 SEATER',
    category: 'MPV / Family',
    filterCategory: ['All', 'MPV'],
    services: ['Self Drive', 'With Driver'],
    image: '/images/ertiga.jpg',
    seats: '7 Seater',
    fuelType: 'Petrol',
    transmission: 'Manual & Automatic',
    price: '₹3,000',
    priceUnit: '/24HR',
    featured: false,
    tagline: 'Trusted 7-Seater Family Mover',
    description: 'Exceptional mileage, smooth suspension, and comfortable seating across three rows for outstation trips.',
  },
  {
    id: 'suzuki-ciaz-1-5l',
    name: 'Suzuki Ciaz 1.5L',
    subName: 'PETROL | 5 SEATER',
    category: 'Premium Sedan',
    filterCategory: ['All', 'Sedan', 'Premium'],
    services: ['Self Drive', 'With Driver'],
    image: '/images/ciaz.jpg',
    seats: '5 Seater',
    fuelType: 'Petrol',
    transmission: 'Manual & Automatic',
    price: '₹2,500',
    priceUnit: '/24HR',
    featured: false,
    tagline: 'Executive Sedan Elegance & Rear Seat Comfort',
    description: 'Lounge-like rear cabin space, smooth 1.5L petrol refinement, and sleek executive road presence.',
  },
  {
    id: 'suzuki-brezza',
    name: 'Suzuki Brezza',
    subName: 'PETROL | MT | 5 SEATER',
    category: 'Compact SUV',
    filterCategory: ['All', 'SUV'],
    services: ['Self Drive', 'With Driver'],
    image: '/images/brezza.jpg',
    seats: '5 Seater',
    fuelType: 'Petrol',
    transmission: 'Manual (MT)',
    price: '₹2,500',
    priceUnit: '/24HR',
    featured: false,
    tagline: 'High Ground Clearance & Agile Handling',
    description: 'Practical, robust compact SUV boasting commanding view of the road and confident city driving.',
  },
  {
    id: 'suzuki-scross',
    name: 'Suzuki S - Cross',
    subName: 'PETROL | MT | 5 SEATER',
    category: 'Crossover / SUV',
    filterCategory: ['All', 'Crossover', 'SUV'],
    services: ['Self Drive', 'With Driver'],
    image: '/images/scross.jpg',
    seats: '5 Seater',
    fuelType: 'Petrol',
    transmission: 'Manual (MT)',
    price: '₹2,500',
    priceUnit: '/24HR',
    featured: false,
    tagline: 'European Build & Highway Stability',
    description: 'Heavy and planted chassis with plush ride quality, high safety, and effortless long-distance stability.',
  },
  {
    id: 'maruti-baleno-alpha-at',
    name: 'Maruti Suzuki Baleno Alpha AT',
    subName: 'PETROL | 5 SEATER',
    category: 'Premium Hatchback',
    filterCategory: ['All', 'Hatchback', 'Premium'],
    services: ['Self Drive', 'With Driver'],
    image: '/images/baleno.jpg',
    seats: '5 Seater',
    fuelType: 'Petrol',
    transmission: 'Automatic (AT)',
    price: '₹2,500',
    priceUnit: '/24HR',
    featured: false,
    tagline: 'Top-Spec Automatic & Spacious Cabin',
    description: 'Top-end Alpha trim with smooth automatic transmission, premium tech features, and generous rear legroom.',
  },
  {
    id: 'suzuki-swift-zxi',
    name: 'Suzuki Swift ZXI 1.2L',
    subName: 'PETROL | 5 SEATER',
    category: 'Hatchback',
    filterCategory: ['All', 'Hatchback'],
    services: ['Self Drive', 'With Driver'],
    image: '/images/swift.jpg',
    seats: '5 Seater',
    fuelType: 'Petrol',
    transmission: 'Manual (MT)',
    price: '₹2,000',
    priceUnit: '/24HR',
    featured: false,
    tagline: 'Budget-Friendly, Sporty & Easy City Drive',
    description: 'Peppy 1.2L petrol engine, highly fuel efficient, easy to park, and unmatched reliability across Hyderabad.',
  },
  {
    id: 'hyundai-creta',
    name: 'Hyundai Creta',
    subName: 'PETROL / DIESEL | 5 SEATER',
    category: 'Premium SUV',
    filterCategory: ['All', 'SUV', 'Premium'],
    services: ['Self Drive', 'With Driver'],
    image: '/images/creta.jpg',
    seats: '5 Seater',
    fuelType: 'Petrol / Diesel',
    transmission: 'Manual & Automatic',
    price: '₹3,000',
    priceUnit: '/24HR',
    featured: false,
    tagline: 'Sophisticated Style & High Performance',
    description: 'Urban sophistication with commanding road presence, premium cabin technology, and smooth driving dynamics.',
  },
  {
    id: 'toyota-rumion',
    name: 'Toyota Rumion',
    subName: 'PETROL | 7 SEATER',
    category: 'MPV',
    filterCategory: ['All', 'MPV'],
    services: ['Self Drive', 'With Driver'],
    image: '/images/rumion.jpg',
    seats: '7 Seater',
    fuelType: 'Petrol',
    transmission: 'Manual & Automatic',
    price: '₹3,000',
    priceUnit: '/24HR',
    featured: false,
    tagline: 'Modern 7-Seater Family Comfort',
    description: 'Smart, highly efficient 7-seater MPV engineered for seamless city commute and family weekend journeys.',
  },
];

export const FILTER_OPTIONS: { id: VehicleCategory; label: string }[] = [
  { id: 'All', label: 'All Fleet' },
  { id: 'SUV', label: 'SUV' },
  { id: 'MPV', label: 'MPV (7–8 Seater)' },
  { id: 'Sedan', label: 'Sedan' },
  { id: 'Hatchback', label: 'Hatchback' },
  { id: 'Crossover', label: 'Crossover' },
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
  price?: string;
}) => {
  const parts = [
    'Hello LPSDC,',
    '',
    'I would like to enquire about a car rental.',
    '',
    `Name: ${data.fullName || '[NAME]'}`,
    `Phone: ${data.phone || '[PHONE]'}`,
    `Vehicle: ${data.vehicle || '[VEHICLE]'}`,
    data.price ? `Rate: ${data.price}/24HR` : '',
    `Service: ${data.serviceType ? data.serviceType.toUpperCase() : '[SELF DRIVE / WITH DRIVER]'}`,
    `Pickup Date: ${data.pickupDate || '[DATE]'}`,
    `Return Date: ${data.returnDate || '[DATE]'}`,
  ].filter(Boolean);

  if (data.message && data.message.trim().length > 0) {
    parts.push(`Message: ${data.message.trim()}`);
  }

  parts.push('', 'Please confirm availability and booking details.');
  
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
  price?: string;
}) => {
  const text = buildWhatsAppMessage(data);
  return `https://wa.me/${BUSINESS_INFO.whatsappPhone}?text=${text}`;
};
