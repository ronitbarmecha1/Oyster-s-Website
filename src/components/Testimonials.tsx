import { Star, MessageSquare } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-ink text-[#F5F2ED] border-b border-gold/15 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-[10px] font-bold text-gold tracking-[0.3em] uppercase block">
            PATRON STORIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F5F2ED] tracking-tight">
            Loved by Locals & Travelers
          </h2>
          <div className="h-[1px] w-20 bg-gold mx-auto" />
          <p className="font-sans text-gray-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            See why residents of Ajmer and visitors from around the country trust us for their key anniversaries, gatherings, and lakeside dinners.
          </p>
        </div>

        {/* Testimonials Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              id={`testimonial-card-${test.id}`}
              className="bg-[#1F1F1F] border border-gold/15 rounded-none p-8 relative flex flex-col justify-between hover:border-gold transition-all duration-300 shadow-xl lg:min-h-[300px]"
            >
              <div className="absolute top-6 right-8 text-gold/10 pointer-events-none select-none">
                <MessageSquare className="w-10 h-10 stroke-[1.5]" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold fill-current" />
                  ))}
                </div>

                {/* Body Text */}
                <p className="font-sans text-xs text-gray-300 leading-relaxed italic mb-8 relative">
                  "{test.text}"
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center justify-between pt-6 border-t border-gold/10">
                <div>
                  <h4 className="font-serif font-bold text-[#F5F2ED] text-base">
                    {test.name}
                  </h4>
                  {test.role && (
                    <span className="font-sans text-[9px] font-bold text-gold/80 tracking-widest uppercase block mt-0.5">
                      {test.role}
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <span className="font-sans text-[10px] text-gray-500">
                    {test.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Local Ranking Callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-3 rounded-none bg-gold/10 border border-gold/30 text-xs text-gray-300">
            <span className="font-bold text-gold">★ 4.8 / 5 Rating</span>
            <span className="h-4 w-[1px] bg-gold/20 hidden sm:inline" />
            <span className="font-sans text-[11px] tracking-wide text-gray-400">Over 1,200 Verified Reviews on Google Maps & Local Forums</span>
          </div>
        </div>

      </div>
    </section>
  );
}
