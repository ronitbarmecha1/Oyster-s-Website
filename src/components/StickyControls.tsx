import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Utensils } from 'lucide-react';
import { RestaurantInfo } from '../types';

interface StickyControlsProps {
  currentInfo: RestaurantInfo;
  onViewMenu: () => void;
}

export default function StickyControls({ currentInfo, onViewMenu }: StickyControlsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky controls only when user scrolled 350px down (past the first hero portion)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="mobile-sticky-dock"
      className={`fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-2 bg-gradient-to-t from-ink via-ink/90 to-transparent md:hidden transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-md mx-auto bg-ink/95 backdrop-blur-md rounded-none border border-gold/40 p-2 flex items-center justify-between gap-2 shadow-2xl">
        
        {/* Menu shortcut */}
        <button
          onClick={onViewMenu}
          id="sticky-dock-menu"
          className="flex-1 flex flex-col items-center justify-center py-2.5 rounded-none hover:bg-gold/10 text-gray-300 transition-colors cursor-pointer"
        >
          <Utensils className="w-5 h-5 text-gold mb-0.5" />
          <span className="font-sans text-[9px] font-bold uppercase tracking-widest">Our Menu</span>
        </button>

        {/* Dial Phone Number */}
        <a
          href={`tel:${currentInfo.phone}`}
          id="sticky-dock-call"
          className="flex-1 flex flex-col items-center justify-center py-2.5 rounded-none bg-gold text-ink font-bold transition-transform active:scale-95 text-center cursor-pointer"
        >
          <Phone className="w-5 h-5 mb-0.5 fill-none stroke-[2.5]" />
          <span className="font-sans text-[9px] font-bold uppercase tracking-widest">Call Now</span>
        </a>

        {/* WhatsApp message */}
        <a
          href={`https://wa.me/${currentInfo.whatsapp.replace('+', '')}?text=Hi%2C%20I%20would%20like%20to%20reserve%20a%20table%20at%20Oyster%20Ajmer%20Rooftop.`}
          target="_blank"
          rel="noopener noreferrer"
          id="sticky-dock-whatsapp"
          className="flex-1 flex flex-col items-center justify-center py-2.5 rounded-none bg-[#25D366] text-white font-bold transition-transform active:scale-95 text-center"
        >
          <MessageCircle className="w-5 h-5 mb-0.5 fill-current" />
          <span className="font-sans text-[9px] font-bold uppercase tracking-widest">WhatsApp</span>
        </a>

      </div>
    </div>
  );
}
