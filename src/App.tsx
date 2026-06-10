import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyControls from './components/StickyControls';
import { restaurantInfo as defaultInfo } from './data';
import { RestaurantInfo } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [restaurantInfo, setRestaurantInfo] = useState<RestaurantInfo>(defaultInfo);

  // Load custom owner details from localStorage on initial load
  useEffect(() => {
    const savedInfo = localStorage.getItem('oyster_restaurant_info');
    if (savedInfo) {
      try {
        setRestaurantInfo(JSON.parse(savedInfo));
      } catch (err) {
        console.error('Failed to parse saved business info from storage', err);
      }
    }
  }, []);

  // Update business info handler
  const handleInfoUpdate = (newInfo: RestaurantInfo) => {
    setRestaurantInfo(newInfo);
    localStorage.setItem('oyster_restaurant_info', JSON.stringify(newInfo));
  };

  // Monitor scroll positioning to update active navigation highlights
  useEffect(() => {
    const sections = ['home', 'about', 'menu', 'gallery', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // offset for triggers

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Soft Anchor Navigator
  const navigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="app-root" className="min-h-screen bg-cream text-ink font-sans scroll-smooth antialiased pb-12 sm:pb-0">
      
      {/* Luxury Navigation Header */}
      <Header activeSection={activeSection} onNavigate={navigateToSection} />

      {/* Main Layout Blocks */}
      <main>
        {/* Cinematic Hero */}
        <Hero
          onViewMenu={() => navigateToSection('menu')}
          onViewReservation={() => navigateToSection('contact')}
        />

        {/* Brand Vibe & Story */}
        <About />

        {/* Full Interactive Menu */}
        <MenuSection />

        {/* Dynamic Photo Gallery */}
        <Gallery />

        {/* Customer reviews and endorsements */}
        <Testimonials />

        {/* Contact Block with reservation manager & owner settings portal */}
        <Contact currentInfo={restaurantInfo} onInfoUpdate={handleInfoUpdate} />
      </main>

      {/* Standard Footer */}
      <Footer currentInfo={restaurantInfo} onNavigate={navigateToSection} />

      {/* Slide-in Mobile Sticky CTA Bar */}
      <StickyControls currentInfo={restaurantInfo} onViewMenu={() => navigateToSection('menu')} />

    </div>
  );
}
