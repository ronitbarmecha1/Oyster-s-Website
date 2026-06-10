export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  tags?: string[]; // e.g., ["Chef's Special", "Gluten Free", "Spicy"]
  isSpicy?: boolean;
  isPopular?: boolean;
  category: MenuCategory;
}

export type MenuCategory =
  | 'Starters'
  | 'Soups'
  | 'Chinese'
  | 'North Indian'
  | 'Italian'
  | 'Pizza / Pasta'
  | 'Main Course'
  | 'Rice / Biryani'
  | 'Bread'
  | 'Beverages'
  | 'Desserts';

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  role?: string; // e.g., "Food Blogger", "Local Guide", "Regular Guest"
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ambience' | 'food' | 'view';
  imageUrl: string;
  description?: string;
}

export interface RestaurantInfo {
  name: string;
  tagline: string;
  phone: string;
  formattedPhone: string;
  whatsapp: string;
  formattedWhatsapp: string;
  email: string;
  address: string;
  mapEmbedUrl: string;
  mapDirectLink: string;
  timings: {
    days: string;
    hours: string;
  }[];
}
