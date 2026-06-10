import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Utensils } from 'lucide-react';
import { restaurantInfo } from '../data';
import OysterLogo from './OysterLogo';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Experience', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Reservations', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ink/95 backdrop-blur-md py-4 shadow-lg border-b border-gold/10'
          : 'bg-gradient-to-b from-ink/90 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            id="brand-logo"
            onClick={() => handleLinkClick('home')}
            className="flex items-center cursor-pointer group"
          >
            <OysterLogo light={true} height="46px" showSub={true} className="group-hover:scale-[1.02] transition-transform duration-300" />
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`font-sans text-xs uppercase tracking-[0.2em] transition-all py-1 ${
                  activeSection === link.id
                    ? 'text-gold font-semibold'
                    : 'text-gray-300 hover:text-gold'
                } relative`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold" />
                )}
              </button>
            ))}
          </nav>

          {/* Contact Actions (Desktop) */}
          <div id="desktop-contact-actions" className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${restaurantInfo.phone}`}
              id="header-call-btn"
              className="flex items-center space-x-2 px-5 py-2 rounded-none border border-gold/40 font-sans text-[10px] uppercase tracking-widest font-bold text-[#F5F2ED] hover:bg-gold hover:text-ink active:scale-95 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-gold group-hover:text-ink" />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/${restaurantInfo.whatsapp.replace('+', '')}?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20table%20at%20Oyster%20Ajmer.`}
              target="_blank"
              rel="noopener noreferrer"
              id="header-whatsapp-btn"
              className="flex items-center space-x-2 px-6 py-2 rounded-none font-sans text-[10px] uppercase tracking-widest font-bold text-ink bg-gold hover:bg-[#F5F2ED] hover:text-ink active:scale-95 shadow-md shadow-gold/10 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-300 hover:text-gold focus:outline-none focus:ring-1 focus:ring-gold/30 rounded"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6 animate-pulse" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`fixed inset-0 top-[72px] bg-ink/98 border-t border-gold/10 z-40 transition-all duration-300 ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        } md:hidden`}
      >
        <div className="p-6 space-y-6 flex flex-col justify-between h-[calc(100vh-72px)] overflow-y-auto">
          <div className="space-y-4">
            <p className="font-mono text-[10px] text-gold/60 uppercase tracking-[0.3em] pl-2">Navigation</p>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded font-serif text-xl tracking-wide text-left transition-all ${
                    activeSection === link.id
                      ? 'text-gold bg-gold/5 font-semibold italic'
                      : 'text-gray-300 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <div className={`w-1.5 h-1.5 rounded-full ${activeSection === link.id ? 'bg-gold' : 'bg-transparent'}`} />
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pb-12">
            <p className="font-mono text-[10px] text-gold/60 uppercase tracking-[0.3em] pl-2">Instant Reservations</p>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${restaurantInfo.phone}`}
                id="mobile-drawer-call"
                className="flex flex-col items-center justify-center p-4 rounded-none bg-gold/15 border border-gold/25 text-[#F5F2ED] hover:bg-gold/25 active:scale-95 transition-all text-center"
              >
                <Phone className="w-5 h-5 text-gold mb-2" />
                <span className="font-sans text-[10px] uppercase font-bold tracking-widest">Call Phone</span>
              </a>
              <a
                href={`https://wa.me/${restaurantInfo.whatsapp.replace('+', '')}?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20table%20at%20Oyster%20Ajmer.`}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-drawer-whatsapp"
                className="flex flex-col items-center justify-center p-4 rounded-none bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/20 active:scale-95 transition-all text-center"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] mb-2" />
                <span className="font-sans text-[10px] uppercase font-bold tracking-widest">WhatsApp</span>
              </a>
            </div>
            
            <div className="text-center pt-2">
              <p className="font-sans text-[11px] text-gray-500">
                Opening Hours: {restaurantInfo.timings[1].hours}
              </p>
              <p className="font-sans text-[10px] text-gold/60 mt-1 uppercase tracking-wider font-semibold">
                Pure Vegetarian Fine Dining
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
