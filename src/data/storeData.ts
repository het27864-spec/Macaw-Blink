export interface CategoryItem {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  imageUrl: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  tag: 'NEW ARRIVAL' | 'CURATED EDIT' | 'COMING SOON' | 'STORE EXCLUSIVE';
  sizes: string[];
  price?: string; // Optional per guidelines - editable in CMS
  description: string;
  imageUrl: string;
}

export interface LookbookItem {
  id: string;
  title: string;
  subtitle: string;
  aspect: string;
  imageUrl: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  review: string;
  source: string;
}

export interface StoreConfig {
  name: string;
  tagline: string;
  subTagline: string;
  phone: string;
  whatsappNumber: string;
  addressLine1: string;
  addressLine2: string;
  addressLandmark: string;
  city: string;
  state: string;
  pincode: string;
  openingTime: string;
  closingTime: string;
  hoursDisplay: string;
  googleRating: number;
  reviewCount: number;
  googleMapsDirectionsUrl: string;
  googleReviewsUrl: string;
  instagramUrl?: string;
  facebookUrl?: string;
}

export const INITIAL_STORE_CONFIG: StoreConfig = {
  name: 'Macaw Blink',
  tagline: 'STYLE THAT SPEAKS BEFORE YOU DO.',
  subTagline: 'Discover contemporary men’s fashion at Macaw Blink, Ahmedabad — where modern style, comfort and individuality come together.',
  phone: '+91 80000 80750',
  whatsappNumber: '918000080750',
  addressLine1: 'Rudra Square Apartment, Basement 42–47',
  addressLine2: 'Judges Bungalow Road',
  addressLandmark: 'Opposite Pride Plaza Hotel',
  city: 'Ahmedabad',
  state: 'Gujarat',
  pincode: '380015',
  openingTime: '10:30',
  closingTime: '22:30',
  hoursDisplay: '10:30 AM – 10:30 PM Daily',
  googleRating: 4.9,
  reviewCount: 1080,
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Macaw+Blink+Rudra+Square+Apartment+Judges+Bungalow+Road+Ahmedabad+Gujarat+380015',
  googleReviewsUrl: 'https://www.google.com/search?q=Macaw+Blink+Judges+Bungalow+Road+Ahmedabad+reviews',
  instagramUrl: '',
  facebookUrl: '',
};

export const INITIAL_CATEGORIES: CategoryItem[] = [
  {
    id: 'shirts',
    name: 'SHIRTS',
    subtitle: 'Tailored casuals, textured linens & crisp formals',
    tag: 'EXPLORE',
    imageUrl: '/src/assets/images/category_menswear_detail_1791124867792.jpg',
  },
  {
    id: 't-shirts',
    name: 'T-SHIRTS',
    subtitle: 'Heavyweight cottons, oversized & modern cuts',
    tag: 'EXPLORE',
    imageUrl: '/src/assets/images/lookbook_streetwear_men_1791124856155.jpg',
  },
  {
    id: 'jeans',
    name: 'JEANS',
    subtitle: 'Structured denim, modern washes & relaxed tapers',
    tag: 'EXPLORE',
    imageUrl: '/src/assets/images/hero_mens_fashion_1791124810869.jpg',
  },
  {
    id: 'trousers',
    name: 'TROUSERS',
    subtitle: 'Pleated chinos, tailored trousers & comfort fits',
    tag: 'EXPLORE',
    imageUrl: '/src/assets/images/lookbook_casual_men_1791124840875.jpg',
  },
  {
    id: 'casual-wear',
    name: 'CASUAL WEAR',
    subtitle: 'Contemporary weekend silhouettes & everyday style',
    tag: 'EXPLORE',
    imageUrl: '/src/assets/images/lookbook_casual_men_1791124840875.jpg',
  },
  {
    id: 'formal-wear',
    name: 'FORMAL WEAR',
    subtitle: 'Refined shirts, structured blazers & sharp cuts',
    tag: 'EXPLORE',
    imageUrl: '/src/assets/images/hero_mens_fashion_1791124810869.jpg',
  },
  {
    id: 'western-wear',
    name: 'WESTERN WEAR',
    subtitle: 'Curated international cuts for Indian gentlemen',
    tag: 'EXPLORE',
    imageUrl: '/src/assets/images/store_interior_luxury_1791124826476.jpg',
  },
  {
    id: 'accessories',
    name: 'FASHION ACCESSORIES',
    subtitle: 'Belts, accents & finishing touches',
    tag: 'EXPLORE',
    imageUrl: '/src/assets/images/category_menswear_detail_1791124867792.jpg',
  },
];

export const INITIAL_PRODUCTS: ProductItem[] = [
  {
    id: 'mb-01',
    name: 'Structured Linen Resort Shirt',
    category: 'SHIRTS',
    tag: 'NEW ARRIVAL',
    sizes: ['M', 'L', 'XL', 'XXL'],
    price: 'Price on Request',
    description: 'Pure breathable linen in an earthy olive-sage wash. Designed for effortless comfort and contemporary layering.',
    imageUrl: '/src/assets/images/lookbook_casual_men_1791124840875.jpg',
  },
  {
    id: 'mb-02',
    name: 'Architectural Cotton Overshirt',
    category: 'WESTERN WEAR',
    tag: 'CURATED EDIT',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 'In-Store Exclusive',
    description: 'Structured tailoring with reinforced pocket detailing. Perfect over casual tees or worn as a standalone statement.',
    imageUrl: '/src/assets/images/lookbook_streetwear_men_1791124856155.jpg',
  },
  {
    id: 'mb-03',
    name: 'Tailored Minimalist Trouser',
    category: 'TROUSERS',
    tag: 'NEW ARRIVAL',
    sizes: ['30', '32', '34', '36'],
    price: 'Price on Request',
    description: 'Modern relaxed taper with subtle pleated accents. Crafted for all-day comfort with a clean silhouette.',
    imageUrl: '/src/assets/images/hero_mens_fashion_1791124810869.jpg',
  },
  {
    id: 'mb-04',
    name: 'Heavyweight Ribbed Cotton Tee',
    category: 'T-SHIRTS',
    tag: 'NEW ARRIVAL',
    sizes: ['M', 'L', 'XL'],
    price: 'Price on Request',
    description: '240 GSM combed cotton with a clean drop-shoulder cut that holds shape through continuous wear.',
    imageUrl: '/src/assets/images/lookbook_streetwear_men_1791124856155.jpg',
  },
  {
    id: 'mb-05',
    name: 'Textured Oxford Button-Down',
    category: 'SHIRTS',
    tag: 'STORE EXCLUSIVE',
    sizes: ['M', 'L', 'XL', 'XXL'],
    price: 'In-Store Exclusive',
    description: 'Rich tactile weave offering breathable comfort for Ahmedabad climate, seamlessly bridging office and evening.',
    imageUrl: '/src/assets/images/category_menswear_detail_1791124867792.jpg',
  },
  {
    id: 'mb-06',
    name: 'Contemporary Selvedge Denim',
    category: 'JEANS',
    tag: 'COMING SOON',
    sizes: ['30', '32', '34', '36', '38'],
    price: 'Price on Request',
    description: 'Premium durable denim with subtle wash detailing and custom hardware. Authentic fit tailored for modern wear.',
    imageUrl: '/src/assets/images/hero_mens_fashion_1791124810869.jpg',
  },
];

export const INITIAL_LOOKBOOK: LookbookItem[] = [
  {
    id: 'look-1',
    title: 'Contemporary Western Silhouette',
    subtitle: 'Urban Tailoring & Structured Forms',
    aspect: 'aspect-[3/4]',
    imageUrl: '/src/assets/images/lookbook_streetwear_men_1791124856155.jpg',
  },
  {
    id: 'look-2',
    title: 'The Linen Series',
    subtitle: 'Breatheable Textures for Everyday Elegance',
    aspect: 'aspect-[3/4]',
    imageUrl: '/src/assets/images/lookbook_casual_men_1791124840875.jpg',
  },
  {
    id: 'look-3',
    title: 'The Ahmedabad Studio Edit',
    subtitle: 'Basement 42–47, Rudra Square Boutique',
    aspect: 'aspect-[16/9]',
    imageUrl: '/src/assets/images/store_interior_luxury_1791124826476.jpg',
  },
  {
    id: 'look-4',
    title: 'Fabric Craftsmanship & Textures',
    subtitle: 'Fine Cotton Weaves & Exact Stitching',
    aspect: 'aspect-[4/3]',
    imageUrl: '/src/assets/images/category_menswear_detail_1791124867792.jpg',
  },
  {
    id: 'look-5',
    title: 'Modern Indian Gentleman',
    subtitle: 'Confidence Built Into Every Cut',
    aspect: 'aspect-[16/9]',
    imageUrl: '/src/assets/images/hero_mens_fashion_1791124810869.jpg',
  },
];

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Harshil Patel',
    rating: 5,
    date: 'Verified Google Review',
    review: 'One of the best men’s clothing stores in Ahmedabad! The collection on Judges Bungalow Road is unmatched in terms of contemporary style and fabric quality. Very knowledgeable staff and great fitting.',
    source: 'Google Review · Ahmedabad',
  },
  {
    id: 'rev-2',
    author: 'Aman Shah',
    rating: 5,
    date: 'Verified Google Review',
    review: 'Macaw Blink has totally upgraded my wardrobe. Their casual shirts and western fits are stylish, durable, and comfortable. Located right opposite Pride Plaza, super convenient.',
    source: 'Google Review · Ahmedabad',
  },
  {
    id: 'rev-3',
    author: 'Rohan Mehta',
    rating: 5,
    date: 'Verified Google Review',
    review: 'Consistently 5 stars. The variety in trousers and shirts is fantastic. You can see why they have over 1,000 top reviews in Ahmedabad. Highly recommended!',
    source: 'Google Review · Ahmedabad',
  },
  {
    id: 'rev-4',
    author: 'Devansh Joshi',
    rating: 5,
    date: 'Verified Google Review',
    review: 'The store vibe at Rudra Square is premium and calm. Found exactly what I was looking for in ready-to-wear western wear. Great fitting and honest pricing.',
    source: 'Google Review · Ahmedabad',
  },
];

/**
 * Checks if the store is currently open based on Indian Standard Time (UTC+5:30)
 * Business Hours: 10:30 AM – 10:30 PM (10:30 - 22:30 IST)
 */
export function getStoreStatus(config: StoreConfig = INITIAL_STORE_CONFIG) {
  try {
    // Current IST time
    const now = new Date();
    // Convert to IST (UTC + 5 hours 30 mins)
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    const istTime = new Date(utcTime + 3600000 * 5.5);
    
    const hours = istTime.getHours();
    const minutes = istTime.getMinutes();
    const currentDecimal = hours + minutes / 60;
    
    // Parse opening and closing (e.g. "10:30" -> 10.5, "22:30" -> 22.5)
    const [openH, openM] = config.openingTime.split(':').map(Number);
    const [closeH, closeM] = config.closingTime.split(':').map(Number);
    const openDecimal = openH + (openM || 0) / 60;
    const closeDecimal = closeH + (closeM || 0) / 60;

    const isOpen = currentDecimal >= openDecimal && currentDecimal < closeDecimal;

    return {
      isOpen,
      statusText: isOpen ? 'Open Now' : 'Closed Now',
      detailText: isOpen ? `Closes at ${formatTime12(config.closingTime)}` : `Opens daily at ${formatTime12(config.openingTime)}`,
      badgeClass: isOpen ? 'text-emerald-700 bg-emerald-50 border-emerald-200' : 'text-zinc-600 bg-zinc-100 border-zinc-200',
      dotClass: isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-400',
    };
  } catch {
    return {
      isOpen: true,
      statusText: 'Open Daily',
      detailText: config.hoursDisplay,
      badgeClass: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      dotClass: 'bg-emerald-500',
    };
  }
}

function formatTime12(time24: string): string {
  const [h, m] = time24.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const displayH = h % 12 === 0 ? 12 : h % 12;
  const displayM = m ? `:${m < 10 ? '0' + m : m}` : ':00';
  return `${displayH}${displayM} ${period}`;
}

export function buildWhatsAppUrl(phone: string, text: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
