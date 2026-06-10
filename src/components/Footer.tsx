import { Heart, Utensils, MessageCircle, Phone, ArrowUp, Send, MapPin } from 'lucide-react';
import { RestaurantInfo } from '../types';
import OysterLogo from './OysterLogo';

interface FooterProps {
  currentInfo: RestaurantInfo;
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ currentInfo, onNavigate }: FooterProps) {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-ink text-gray-400 font-sans border-t border-gold/15 relative z-10">
      
      {/* Upper footer content container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Pillar Column */}
          <div className="space-y-6 md:col-span-1">
            <div
              onClick={() => onNavigate('home')}
              className="flex items-center cursor-pointer group w-fit"
            >
              <OysterLogo light={true} height="46px" showSub={true} className="group-hover:scale-[1.02] transition-transform duration-300" />
            </div>

            <p className="text-xs text-gray-500 leading-relaxed">
              Ajmer's finest panoramic rooftop sanctuary. Savor beautiful vegetarian dining layouts with sunset backdrops above the Ana Sagar waters.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <span className="w-1.5 h-1.5 rounded-none bg-emerald-500" />
              <span className="text-[10px] uppercase font-sans tracking-widest text-gray-400 font-bold">
                Pure Vegetarian Fine Dine
              </span>
            </div>
          </div>

          {/* Quick links Pillar */}
          <div className="space-y-4">
            <h5 className="font-serif font-bold text-[#F5F2ED] text-sm tracking-widest uppercase">
              Navigation
            </h5>
            <div className="flex flex-col space-y-2 text-xs">
              <button
                onClick={() => onNavigate('home')}
                className="text-left text-gray-400 hover:text-gold transition-colors"
              >
                Top Home Vista
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="text-left text-gray-400 hover:text-gold transition-colors"
              >
                Experience & About
              </button>
              <button
                onClick={() => onNavigate('menu')}
                className="text-left text-gray-400 hover:text-gold transition-colors"
              >
                Our Sunset Menu
              </button>
              <button
                onClick={() => onNavigate('gallery')}
                className="text-left text-gray-400 hover:text-gold transition-colors"
              >
                Photo Gallery Preview
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-left text-gray-400 hover:text-gold transition-colors"
              >
                Make a Reservation
              </button>
            </div>
          </div>

          {/* Direct reservation Pillar */}
          <div className="space-y-4 col-span-1">
            <h5 className="font-serif font-bold text-[#F5F2ED] text-sm tracking-widest uppercase">
              Speak With Us
            </h5>
            <div className="space-y-2.5 text-xs text-gray-400">
              <a
                href={`tel:${currentInfo.phone}`}
                className="flex items-center space-x-2 hover:text-gold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>{currentInfo.formattedPhone}</span>
              </a>
              <a
                href={`https://wa.me/${currentInfo.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0 fill-none stroke-[2]" />
                <span>{currentInfo.formattedWhatsapp}</span>
              </a>
              <div className="flex items-start space-x-2 text-gray-500">
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                <span className="leading-tight text-[11px]">
                  Ana Sagar Circular Road, Ajmer, Rajasthan, 305001
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours Column */}
          <div className="space-y-4">
            <h5 className="font-serif font-bold text-[#F5F2ED] text-sm tracking-widest uppercase">
              Sunset Hours
            </h5>
            <div className="space-y-2 text-xs text-gray-400">
              <p className="flex justify-between border-b border-gold/10 pb-2">
                <span>Mon - Thu:</span>
                <span className="text-gray-300">{currentInfo.timings[0].hours}</span>
              </p>
              <p className="flex justify-between border-b border-gold/10 pb-2">
                <span>Fri - Sun:</span>
                <span className="text-gray-300">{currentInfo.timings[1].hours}</span>
              </p>
              <p className="text-[10px] text-gold mt-2 italic text-left">
                We accommodate family birthday setups and inquiries standard daily.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Extreme bottom row */}
      <div className="bg-[#141414] py-8 border-t border-gold/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-gray-600 text-center sm:text-left">
            © {new Date().getFullYear()} Oyster Restaurant, Ajmer. All Rights Reserved. 
            <span className="mx-1.5">•</span> 
            Pure Vegetarian Rooftop Dining.
          </p>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleScrollTop}
              id="footer-back-to-top"
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-ink border border-gold/15 hover:border-gold text-gray-500 hover:text-gold text-[10px] uppercase font-sans font-bold tracking-widest rounded-none transition-all cursor-pointer"
            >
              <span>Back To Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
