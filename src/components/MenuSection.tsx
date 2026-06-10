import { useState, useRef, useEffect } from 'react';
import { Search, Flame, Sparkles, AlertCircle, Info, Heart } from 'lucide-react';
import { menuItems } from '../data';
import { MenuCategory, MenuItem } from '../types';

export default function MenuSection() {
  const categories: MenuCategory[] = [
    'Starters',
    'Soups',
    'Chinese',
    'North Indian',
    'Italian',
    'Pizza / Pasta',
    'Main Course',
    'Rice / Biryani',
    'Bread',
    'Beverages',
    'Desserts',
  ];

  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('Starters');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPopular, setFilterPopular] = useState(false);
  const [filterSpicy, setFilterSpicy] = useState(false);

  const categoryScrollRef = useRef<HTMLDivElement>(null);

  // Scroll active tab into view on mobile
  useEffect(() => {
    if (categoryScrollRef.current) {
      const activeTab = categoryScrollRef.current.querySelector('[data-active="true"]');
      if (activeTab) {
        activeTab.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        });
      }
    }
  }, [selectedCategory]);

  // Filter items based on active states
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = searchQuery ? true : item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPopular = !filterPopular || item.isPopular;
    const matchesSpicy = !filterSpicy || item.isSpicy;

    return matchesCategory && matchesSearch && matchesPopular && matchesSpicy;
  });

  return (
    <section id="menu" className="py-24 bg-ink text-[#F5F2ED] border-b border-gold/15 relative">
      {/* Decorative subtle gold gridlines */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-[10px] font-bold text-gold tracking-[0.3em] uppercase block">
            THE ROYAL FLAVORS
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F5F2ED] tracking-tight">
            Our Fine-Dining Menu
          </h2>
          <div className="h-[1px] w-20 bg-gold mx-auto" />
          <p className="font-sans text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Every dish is custom-crafted to absolute perfection using premium home-baked ingredients, 
            cold-pressed wellness oils, and stone-ground spices. No artificial enhancers. Fully Vegetarian.
          </p>
        </div>

        {/* Search and Filters Strip */}
        <div className="bg-[#1F1F1F] border border-gold/20 rounded-none p-6 mb-10 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input bar */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-gold/60 absolute left-4.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search menu (e.g. Paneer, Pizza, Mocktail...)"
                id="menu-search-input"
                className="w-full bg-ink border border-gold/30 rounded-none py-3 pl-12 pr-4 text-xs text-[#F5F2ED] placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gold hover:text-[#F5F2ED] font-bold uppercase tracking-widest"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Special Toggle Buttons */}
            <div className="md:col-span-6 flex flex-wrap gap-2 justify-start md:justify-end">
              <button
                id="filter-popular-btn"
                onClick={() => setFilterPopular(!filterPopular)}
                className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-none border text-xs uppercase tracking-widest font-bold transition-all cursor-pointer ${
                  filterPopular
                    ? 'bg-gold/20 border-gold text-gold font-bold'
                    : 'bg-ink border-gold/20 text-gray-400 hover:text-[#F5F2ED]'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${filterPopular ? 'fill-current' : ''}`} />
                <span>Rooftop Favorites</span>
              </button>

              <button
                id="filter-spicy-btn"
                onClick={() => setFilterSpicy(!filterSpicy)}
                className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-none border text-xs uppercase tracking-widest font-bold transition-all cursor-pointer ${
                  filterSpicy
                    ? 'bg-red-500/20 border-red-500 text-red-500 font-bold'
                    : 'bg-ink border-gold/20 text-gray-400 hover:text-[#F5F2ED]'
                }`}
              >
                <Flame className={`w-3.5 h-3.5 ${filterSpicy ? 'fill-current' : ''}`} />
                <span>Spicy Lovers</span>
              </button>
            </div>

          </div>
        </div>

        {/* Dynamic Navigation Tabs for Categories (Hidden if searching) */}
        {!searchQuery ? (
          <div className="relative mb-12">
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-ink to-transparent pointer-events-none z-10 md:hidden" />
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-ink to-transparent pointer-events-none z-10 md:hidden" />
            
            <div
              ref={categoryScrollRef}
              id="menu-tabs-scroll"
              className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory px-4"
            >
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    data-active={isActive ? "true" : "false"}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-3 rounded-none text-[10px] font-bold tracking-[0.25em] uppercase transition-all snap-center shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-gold text-ink font-bold shadow-lg shadow-gold/15'
                        : 'bg-[#1F1F1F] text-gray-400 border border-gold/20 hover:text-[#F5F2ED] hover:border-gold/50'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="mb-10 text-center py-2 bg-gold/5 rounded-none border border-gold/30">
            <p className="font-sans text-xs text-gold">
              Showing search matches for: <span className="font-semibold italic">"{searchQuery}"</span>
            </p>
          </div>
        )}

        {/* Menu Items Grid layout */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                id={`menu-item-${item.id}`}
                className="group p-6 rounded-none bg-[#1F1F1F] border border-gold/15 hover:border-gold transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top line: Name & Price */}
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif font-bold text-lg text-[#F5F2ED] group-hover:text-gold transition-colors">
                        {item.name}
                      </h3>
                      {/* Vegetarian Icon badge */}
                      <span className="w-3.5 h-3.5 border border-emerald-600 p-[1px] flex items-center justify-center shrink-0" title="100% Vegetarian">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </span>
                    </div>
                    
                    {/* Price with classy formatting */}
                    <span className="font-mono text-base font-medium text-gold tracking-wide shrink-0">
                      ₹{item.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Tags on bottom line */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-gold/10">
                  {item.isPopular && (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-none bg-gold/10 text-[9px] font-bold uppercase tracking-widest text-gold border border-gold/20">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Rooftop Fave</span>
                    </span>
                  )}
                  {item.isSpicy && (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-none bg-red-500/10 text-[9px] font-bold uppercase tracking-widest text-red-500 border border-red-500/20">
                      <Flame className="w-2.5 h-2.5 fill-current" />
                      <span>Spicy</span>
                    </span>
                  )}
                  {item.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-none bg-[#2A2A2A] text-[9px] font-sans font-bold uppercase tracking-wider text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#1F1F1F] border border-gold/15 rounded-none flex flex-col items-center">
            <AlertCircle className="w-10 h-10 text-gold/45 mb-3" />
            <h3 className="font-serif font-medium text-lg text-[#F5F2ED] mb-1">No Menu Match Found</h3>
            <p className="font-sans text-gray-400 text-xs max-w-sm">
              We couldn't locate any dishes matching your query in the '{selectedCategory}' category or tags. Try another query.
            </p>
          </div>
        )}

        {/* Info callout footer: Direct Reserve Vibe */}
        <div className="mt-16 bg-cream border border-gold/30 rounded-none p-6 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-ink mb-2">
            <Info className="w-4 h-4 text-gold shrink-0" />
            <span className="font-serif font-bold text-sm sm:text-base text-ink">Experience It Fresh & Piping Hot</span>
          </div>
          <p className="font-sans text-[11px] text-gray-600 leading-relaxed mb-4">
            We intentionally do not offer online courier home delivery or standard third-party food shipping integrations in order to guarantee absolute structural freshness, premium presentation appeal, and perfect serving temperatures.
          </p>
          <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold font-bold">
            To book a sunset dinner slot, kindly inquire with our Reservationist by phone.
          </p>
        </div>

      </div>
    </section>
  );
}
