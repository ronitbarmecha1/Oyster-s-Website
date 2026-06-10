import { motion } from 'motion/react';
import { Leaf, Award, Sunset, Users } from 'lucide-react';
import { restaurantInfo } from '../data';

export default function About() {
  const highlights = [
    {
      icon: <Sunset className="w-5 h-5 text-gold" />,
      title: "Panoramic Lake Views",
      description: "Perched gracefully, we offer an uninterrupted, breathtaking layout of water and desert twilight over Ana Sagar Lake.",
    },
    {
      icon: <Leaf className="w-5 h-5 text-gold" />,
      title: "100% Gourmet Vegetarian",
      description: "We serve an extensive, clean, pure-vegetarian spread from royal Rajasthan's finest traditions to artisan flatbreads.",
    },
    {
      icon: <Users className="w-5 h-5 text-gold" />,
      title: "Elegant Family Vibe",
      description: "Generous spacing, warm service personnel, and an exclusive cozy ambience designed perfectly for unforgettable multi-generational gatherings.",
    },
    {
      icon: <Award className="w-5 h-5 text-gold" />,
      title: "Masterclass Culinary Art",
      description: "Every sauce is simmered from fresh organic ingredients, flatbread dough is hand-kneaded, and spices are stone-ground daily.",
    }
  ];

  return (
    <section id="about" className="py-24 bg-cream text-ink overflow-hidden border-b border-gold/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-sans text-[10px] font-bold text-gold tracking-[0.3em] uppercase block">
                OUR SANCTUARY
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-ink tracking-tight leading-tight">
                An Exquisite Escape <br />
                <span className="italic font-light text-gold font-serif">Above the Historic Waters</span>
              </h2>
              <div className="h-[1px] w-20 bg-gold" />
            </div>

            <p className="font-sans text-gray-700 leading-relaxed text-sm sm:text-base">
              Located on the scenic <span className="text-ink font-semibold">Ana Sagar Circular Road</span> in Ajmer, Oyster Restaurant was conceptualized to be more than just a venue—it is a sensory journey. Flanked by the gentle ripples of the historic lake and the golden crests of the ancient Aravalli mountains, our rooftop delivers the premier sunset view in the city.
            </p>

            <p className="font-sans text-gray-600 leading-relaxed text-xs sm:text-sm">
              At Oyster, we take pure vegetarian gastronomy to luxurious heights. Our culinary curators seamlessly blend slow-cooked Indian royal gravies, artisanal wood-fired oven pizzas, and refreshing tropical mocktails. We pride ourselves on fine dine-in hospitality, where every detail is meticulously adjusted to foster joyful family conversations, couples dinners, and festive inquiries.
            </p>

            {/* Grid highlight pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-5 rounded-none bg-[#FDFBF7] border border-gold/20 hover:border-gold transition-all duration-300"
                >
                  <div className="p-2 bg-gold/10 border border-gold/30 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-ink text-base mb-1">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Showcase Stack */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Background glowing geometry */}
            <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full -translate-x-12" />
            
            <div className="relative space-y-6">
              {/* Primary Image card */}
              <div className="relative rounded-none overflow-hidden border border-gold/30 transform transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                  alt="Oyster Restaurant Rooftop Vibe"
                  className="w-full h-80 object-cover filter brightness-95 saturate-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-sans text-[9px] font-bold tracking-[0.25em] text-gold uppercase block mb-1">Dine-in Excellence</span>
                  <p className="font-serif text-lg font-medium text-[#F5F2ED]">Lakeside Candlelight & Cool Breezes</p>
                </div>
              </div>

              {/* Smaller overlapping callout block */}
              <div className="bg-[#FDFBF7] border border-gold/30 rounded-none p-6 relative">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-2.5 h-2.5 bg-emerald-600 rounded-full animate-ping" />
                  <span className="font-sans text-[10px] tracking-[0.2em] text-emerald-700 font-bold uppercase">150+ SEATER PURE VEG SANCTUARY</span>
                </div>
                <p className="font-sans text-[11px] text-gray-600 leading-relaxed">
                  We use strictly segregated kitchens, cold-pressed premium oils, premium hand-ground spices, and organic local farm-produce to preserve absolute purity and stellar flavor.
                </p>
                <div className="absolute -bottom-2 -right-2 text-7xl font-serif text-gold/5 font-extrabold select-none pointer-events-none">
                  Veg
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
