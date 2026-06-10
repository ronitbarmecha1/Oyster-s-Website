import { motion } from 'motion/react';
import { Phone, MessageCircle, Utensils, Award, Sparkles } from 'lucide-react';
import { restaurantInfo } from '../data';

interface HeroProps {
  onViewMenu: () => void;
  onViewReservation: () => void;
}

export default function Hero({ onViewMenu, onViewReservation }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-oyster overflow-hidden pt-20"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-102 filter brightness-45 contrast-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        {/* Artistic dark luxury gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/30" />
      </div>

      {/* Decorative Golden Line Frame */}
      <div className="absolute inset-4 sm:inset-6 md:inset-10 border border-gold/15 pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-15 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full text-left py-12">
        <div className="max-w-3xl">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-none bg-gold/10 border border-gold/30 mb-8 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-gold">
              Rooftop Nirvana • Lake Ana Sagar View
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#F5F2ED] tracking-tight leading-[1.1] mb-6"
          >
            Savor the Sunset <br />
            <span className="italic font-light text-gold font-serif">
              Fine Rooftop Dining
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl font-sans mb-12 tracking-wide"
          >
            Indulge in a premium, pure vegetarian multi-cuisine dining experience perched gracefully above Ajmer. Capture breathtaking vistas of <span className="text-gold font-medium underline decoration-gold/40 decoration-wavy underline-offset-4">Ana Sagar Lake</span> and the mystical Aravalli Hills as you savor culinary masterpieces crafted with passion.
          </motion.p>

          {/* Action Callouts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 items-center"
          >
            {/* View Menu */}
            <button
              onClick={onViewMenu}
              id="hero-view-menu-btn"
              className="flex items-center space-x-3 px-8 py-4 rounded-none font-sans text-xs uppercase tracking-widest font-bold text-ink bg-gold hover:bg-[#F5F2ED] hover:text-ink active:scale-95 shadow-lg shadow-gold/10 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <Utensils className="w-4 h-4" />
              <span>Explore Chef's Menu</span>
            </button>

            {/* Instant Call */}
            <a
              href={`tel:${restaurantInfo.phone}`}
              id="hero-call-now-btn"
              className="flex items-center space-x-3 px-8 py-4 rounded-none font-sans text-xs uppercase tracking-widest font-bold text-[#F5F2ED] bg-transparent border border-gold/40 hover:bg-gold hover:text-ink active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4 text-gold group-hover:text-ink" />
              <span>Call Reservation</span>
            </a>

            {/* Instant WhatsApp */}
            <a
              href={`https://wa.me/${restaurantInfo.whatsapp.replace('+', '')}?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20table%20at%20Oyster%20Ajmer%20for%20this%20week.`}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-btn"
              className="flex items-center space-x-3 px-7 py-4 rounded-none font-sans text-xs uppercase tracking-widest font-bold text-[#25D366] bg-transparent border border-[#25D366]/30 hover:bg-[#25D366]/10 active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-none stroke-[2.5]" />
              <span>WhatsApp Inquiry</span>
            </a>
          </motion.div>

          {/* Quick trust metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-12 mt-12 border-t border-gold/15"
          >
            <div className="flex items-start space-x-3">
              <Award className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="block text-[#F5F2ED] font-serif font-semibold tracking-wider text-sm">Gourmet Standard</span>
                <span className="block text-xs text-gray-400 font-sans mt-0.5">Pure vegetarian global bites</span>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
              <div>
                <span className="block text-[#F5F2ED] font-serif font-semibold tracking-wider text-sm">Sunset Vibe</span>
                <span className="block text-xs text-gray-400 font-sans mt-0.5">Stunning Ana Sagar views</span>
              </div>
            </div>
            <div className="flex items-start space-x-3 col-span-2 sm:col-span-1">
              <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <span className="block text-[#F5F2ED] font-serif font-semibold tracking-wider text-sm">City Center</span>
                <span className="block text-xs text-gray-400 font-sans mt-0.5">Circular Rd with free parking</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modern, elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-15 flex flex-col items-center animate-bounce cursor-pointer opacity-70 hover:opacity-100" onClick={onViewMenu}>
        <span className="font-mono text-[9px] tracking-[0.3em] text-gold uppercase mb-2">Explore Oyster</span>
        <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
