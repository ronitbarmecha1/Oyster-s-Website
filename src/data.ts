import { MenuItem, Testimonial, GalleryItem, RestaurantInfo } from './types';

export const restaurantInfo: RestaurantInfo = {
  name: "Oyster Restaurant",
  tagline: "Fine Rooftop Dining & Exquisite Lake Views",
  phone: "+919876543210", // Example real Indian mobile format for dialing
  formattedPhone: "+91 98765 43210",
  whatsapp: "+919876543210",
  formattedWhatsapp: "+91 98765 43210",
  email: "info@oysterajmer.com",
  address: "4th Floor, Lakeview Heights, Ana Sagar Circular Road, Vaishali Nagar, Ajmer, Rajasthan 305001",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.432832594539!2d74.6253456!3d26.4719234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be71caa8c67ab%3A0xe78199793133de14!2sAna%20Sagar%20Lake!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin", // elegant localized map focusing on Ana Sagar Lake, Ajmer
  mapDirectLink: "https://maps.app.goo.gl/pWcrk8oZ6yYqgN938", // custom elegant looking maps link
  timings: [
    { days: "Mon - Thu", hours: "12:00 PM - 11:00 PM" },
    { days: "Fri - Sun", hours: "12:00 PM - 11:30 PM" },
  ],
};

export const menuItems: MenuItem[] = [
  // --- STARTERS ---
  {
    id: "st-1",
    name: "Paneer Tikka Angara",
    description: "Cottage cheese cubes marinated in a fiery, hot-spiced yogurt mix, cooked to perfection in a traditional clay oven.",
    price: 325,
    category: "Starters",
    tags: ["Chef's Special", "Spicy"],
    isSpicy: true,
    isPopular: true
  },
  {
    id: "st-2",
    name: "Tandoori Malai Broccoli",
    description: "Fresh broccoli florets marinated in cardamom-scented cream, cream cheese and white pepper, roasted gently in the tandoor.",
    price: 295,
    category: "Starters",
    tags: ["Mild", "Healthy"]
  },
  {
    id: "st-3",
    name: "Dahi Ke Sholay",
    description: "Crispy fried bread rolls stuffed with spiced hung curd, bell peppers, fresh coriander, and mint. Creamy on the inside.",
    price: 285,
    category: "Starters",
    isPopular: true
  },
  {
    id: "st-4",
    name: "Oyster Special Crispy Corn",
    description: "Crispy fried sweet corn kernels tossed with chopped onions, spring greens, green chilies, and our custom seasoning blend.",
    price: 265,
    category: "Starters"
  },

  // --- SOUPS ---
  {
    id: "sp-1",
    name: "Almond Broccoli Velouté",
    description: "A silky, smooth soup made with fresh broccoli florets, enriched with ground roasted almonds and a touch of light herbs.",
    price: 195,
    category: "Soups",
    tags: ["Gluten Free"]
  },
  {
    id: "sp-2",
    name: "Lemon Coriander Soup",
    description: "A light, refreshing clear vegetable broth flavored with hand-pressed lemon juice, fresh coriander, and light black pepper.",
    price: 175,
    category: "Soups",
    tags: ["Healthy"]
  },
  {
    id: "sp-3",
    name: "Hot & Sour Exotic Veg Soup",
    description: "A classic thick broth with finely shredded mushrooms, bamboo shoots, tofu, and spring vegetables with spicy and sour notes.",
    price: 185,
    category: "Soups",
    isSpicy: true
  },

  // --- CHINESE ---
  {
    id: "ch-1",
    name: "Wok-Tossed Chilli Paneer",
    description: "Crispy cubes of cottage cheese tossed in a fiery hot garlic, dark soy, and chili sauce with crunchy onions and peppers.",
    price: 315,
    category: "Chinese",
    isSpicy: true,
    isPopular: true
  },
  {
    id: "ch-2",
    name: "Veg Manchurian in Ginger Sauce",
    description: "Deep-fried premium vegetable dumplings served in a thickened tangy, savory, and soy-infused ginger garlic sauce.",
    price: 295,
    category: "Chinese"
  },
  {
    id: "ch-3",
    name: "Classic Hakka Noodles",
    description: "Stir-fried wheat noodles tossed on high-flame wok with shredded cabbage, bell peppers, carrots, and light light soy sauce.",
    price: 265,
    category: "Chinese"
  },

  // --- NORTH INDIAN ---
  {
    id: "ni-1",
    name: "Paneer Lababdar",
    description: "Cottage cheese chunks cooked in an ultra-rich onion-tomato-cashew gravy with a high notes of melted butter, cream, and grated paneer.",
    price: 365,
    category: "North Indian",
    isPopular: true
  },
  {
    id: "ni-2",
    name: "Slow-Cooked Dal Makhani",
    description: "Whole black lentils slow-cooked for 24 hours on clay embers, enriched with fresh white butter, cream, and organic tomatoes.",
    price: 310,
    category: "North Indian",
    tags: ["Signature"],
    isPopular: true
  },
  {
    id: "ni-3",
    name: "Shahi Kaju Curry",
    description: "Whole roasted organic cashew nuts simmered in a luscious, sweet, and royal cream gravy with fragrant Indian spices.",
    price: 395,
    category: "North Indian"
  },
  {
    id: "ni-4",
    name: "Subz Handi Lajawab",
    description: "A rich and colorful melange of seasonal vegetables simmered with fresh herbs in a spiced spinach and mint onion-tomato gravy.",
    price: 315,
    category: "North Indian"
  },

  // --- ITALIAN ---
  {
    id: "it-1",
    name: "Wild Mushroom & Truffle Risotto",
    description: "Slow-cooked Arborio rice with porcini and button mushrooms, finished with cold-pressed Italian white truffle oil and parmigiano.",
    price: 445,
    category: "Italian",
    tags: ["Gourmet"]
  },
  {
    id: "it-2",
    name: "Bruschetta Al Pomodoro",
    description: "Crisp slices of toasted wood-fired sourdough rubbed with fresh garlic, topped with vine-ripened tomatoes, fresh basil, and extra virgin olive oil.",
    price: 245,
    category: "Italian"
  },

  // --- PIZZA / PASTA ---
  {
    id: "pp-1",
    name: "Wood-Fired Garden Special Pizza",
    description: "Artisanal hand-stretched sourdough pizza with organic tomato base, fresh basil, mozzarella, fire-roasted bell peppers, baby corn, and zucchini.",
    price: 425,
    category: "Pizza / Pasta",
    isPopular: true
  },
  {
    id: "pp-2",
    name: "Penne Alfredo with Wild Mushrooms",
    description: "Penne pasta tossed in a luxurious, silky three-cheese cream sauce, loaded with fresh roasted garlic, wild button mushrooms, and parsley.",
    price: 385,
    category: "Pizza / Pasta"
  },
  {
    id: "pp-3",
    name: "Signature Spicy Arrabiata",
    description: "Penne pasta tossed in our specialty slow-simmered fiery tomato-garlic sauce with black olives, chili flakes, and fresh hand-torn basil.",
    price: 365,
    category: "Pizza / Pasta",
    isSpicy: true
  },

  // --- MAIN COURSE ---
  {
    id: "mc-1",
    name: "Oyster Premium Thali",
    description: "A grand culinary journey featuring mocktail, two starter bites, Paneer Sabzi, Veg of the Day, Dal Makhani, choice of butter naan/roti, rice, raita, salad, and signature Gulab Jamun.",
    price: 525,
    category: "Main Course",
    tags: ["Complete Meal"],
    isPopular: true
  },
  {
    id: "mc-2",
    name: "Rajasthani Gatte ke Sabzi",
    description: "Authentic local Ajmeri delicacy: Gram flour dumplings cooked cooked-perfection in a smooth, spicy, rich yogurt-based yellow curry.",
    price: 295,
    category: "Main Course",
    tags: ["Local Special!"]
  },

  // --- RICE / BIRYANI ---
  {
    id: "rb-1",
    name: "Dum Pukht Subz Biryani",
    description: "Fragrant, aged long-grain basmati rice layered with garden-fresh vegetables, saffron, mint, and secret spices, slow-cooked in a sealed clay pot. Served with mint raita.",
    price: 345,
    category: "Rice / Biryani",
    isPopular: true
  },
  {
    id: "rb-2",
    name: "Jeera Rice (Premium Basmati)",
    description: "Fluffy aged basmati rice tempered with golden cumin seeds and dollops of premium cow ghee.",
    price: 195,
    category: "Rice / Biryani"
  },

  // --- BREAD ---
  {
    id: "br-1",
    name: "Garlic Butter Naan",
    description: "Soft tandoor-baked leavened flatbread brushed generously with salted butter and topped with finely minced roasted garlic.",
    price: 85,
    category: "Bread"
  },
  {
    id: "br-2",
    name: "Laccha Paratha (Butter)",
    description: "Multi-layered, crispy, golden-brown tandoori whole-wheat flatbread laced with premium clarified butter.",
    price: 75,
    category: "Bread"
  },
  {
    id: "br-3",
    name: "Tandoori Roti (Butter)",
    description: "Soft whole-wheat clay-oven baked Indian bread with a splash of fresh butter.",
    price: 45,
    category: "Bread"
  },

  // --- BEVERAGES ---
  {
    id: "bv-1",
    name: "Oceanic Blue Mocktail",
    description: "A beautiful tropical refreshment combining blue curacao, lime juice, fresh mint sprigs, and aerated soda over crushed ice.",
    price: 185,
    category: "Beverages",
    tags: ["Rooftop Favorite"],
    isPopular: true
  },
  {
    id: "bv-2",
    name: "Fresh Mint & Mango Cooler",
    description: "A soothing blend of raw sweet mango pulp, cool mint leaves, black salt, and roasted cumin powder.",
    price: 165,
    category: "Beverages"
  },
  {
    id: "bv-3",
    name: "Cold Brew Iced Latte",
    description: "Rich espresso shot whipped over cold whole milk, vanilla cream syrup, and ice blocks.",
    price: 195,
    category: "Beverages"
  },

  // --- DESSERTS ---
  {
    id: "ds-1",
    name: "Saffron Kesari Kheer",
    description: "Traditional Indian dessert of rich, condensed milk and slow-boiled basmati grains flavored with pure saffron strands, almonds, and pistachios.",
    price: 165,
    category: "Desserts",
    tags: ["Authentic"]
  },
  {
    id: "ds-2",
    name: "Sizzling Chocolate Walnut Brownie",
    description: "A warm, fudgy house-made dark chocolate walnut brownie served on a scorching sizzler plate, crowned with a scoop of Madagascar vanilla bean gelato and deep fudge sauce.",
    price: 245,
    category: "Desserts",
    isPopular: true
  },
  {
    id: "ds-3",
    name: "Shahi Tukda with Rabdi",
    description: "Crispy ghee-fried bread triangles soaked in fragrant sugar syrup, layered generously with ultra-thick sweet condensed milk and nuts.",
    price: 185,
    category: "Desserts"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "re-1",
    name: "Aarav Sharma",
    role: "Regular Sunset Diners",
    rating: 5,
    text: "The absolute best view in Ajmer! Sitting on the rooftop of Oyster, dining with family while looking at the gorgeous sunset over Ana Sagar Lake is unforgettable. The Paneer Lababdar and Butter Naan were incredibly flavorful and freshly baked.",
    date: "May 2026",
  },
  {
    id: "re-2",
    name: "Priya Maheshwari",
    role: "Local Food Critic",
    rating: 5,
    text: "I am extremely selective about vegetarian food. Oyster completely blew me away with their Almond Broccoli Soup and the Malai Broccoli. Service is highly professional, and the atmosphere is cozy and modern. Hands down 5 stars!",
    date: "April 2026",
  },
  {
    id: "re-3",
    name: "Rohan & Sneha",
    role: "Couple Travellers",
    rating: 5,
    text: "Perfect evening date spot! We ordered the Wood-Fired Pizza and the Dum Pukht Biryani. Both were exquisite. The soft acoustic music playing, the premium seating layouts, and the direct cool breeze coming off the lake was mesmerizing.",
    date: "June 2026",
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "ga-1",
    title: "Twilight Sunset Lounge",
    category: "view",
    imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
    description: "Sip mocktails as the golden sunset paints the sky directly above the lake."
  },
  {
    id: "ga-2",
    title: "Paneer Lababdar & Naan",
    category: "food",
    imageUrl: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    description: "Rich, steaming tomato-cashew curry served with freshly baked butter tandoori naans."
  },
  {
    id: "ga-3",
    title: "Lake-View Patio Seating",
    category: "view",
    imageUrl: "https://images.unsplash.com/photo-1515404929791-04ef0a2830df?auto=format&fit=crop&w=800&q=80",
    description: "Cozy open-air layouts to enjoy fresh mountain wind and direct lake acoustics."
  },
  {
    id: "ga-4",
    title: "Slow-Cooked Dal Makhani",
    category: "food",
    imageUrl: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    description: "Creamy black lentils slow-cooked for 24 hours on coal embers, finished with white farm butter."
  },
  {
    id: "ga-5",
    title: "Oyster Royal Premium Thali",
    category: "food",
    imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    description: "A grand authentic celebration of North Indian curries, starters, rice, breads, and desserts."
  },
  {
    id: "ga-6",
    title: "Dum Pukht Basmati Biryani",
    category: "food",
    imageUrl: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80",
    description: "Long-grain basmati rice layered with garden garden-fresh vegetables, saffron, mint, and whole spices."
  }
];
