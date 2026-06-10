import { useState } from 'react';
import { Camera, X, RefreshCw } from 'lucide-react';
import { galleryItems } from '../data';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'food' | 'ambience' | 'view'>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const categories: { label: string; value: 'all' | 'food' | 'ambience' | 'view' }[] = [
    { label: 'All Photos', value: 'all' },
    { label: 'Rooftop Ambience', value: 'ambience' },
    { label: 'Culinary Art', value: 'food' },
    { label: 'Ana Sagar Vibe', value: 'view' },
  ];

  const filteredItems = galleryItems.filter(
    (item) => filter === 'all' || item.category === filter
  );

  return (
    <section id="gallery" className="py-24 bg-cream text-ink border-b border-gold/15 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-[10px] font-bold text-gold tracking-[0.3em] uppercase block">
            VISUAL SYMPHONY
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-ink tracking-tight">
            Explore the Lakeside Vibe
          </h2>
          <div className="h-[1px] w-20 bg-gold mx-auto" />
          <p className="font-sans text-gray-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Take a preview of our warm interior seating, sunset viewing platforms, cooling breezes, and freshly prepared vegetarian plates.
          </p>
        </div>

        {/* Categories Chips */}
        <div id="gallery-filters" className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2.5 rounded-none text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                filter === cat.value
                  ? 'bg-gold text-ink font-bold shadow-lg shadow-gold/10'
                  : 'bg-[#FDFBF7] text-gray-600 border border-gold/20 hover:text-ink hover:border-gold/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              id={`gallery-item-${item.id}`}
              className="group relative rounded-none overflow-hidden bg-[#FDFBF7] aspect-[4/3] border border-gold/25 cursor-pointer hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-500 filter brightness-95"
                referrerPolicy="no-referrer"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-end">
                <div>
                  <span className="font-sans text-[9px] font-bold tracking-[0.25em] text-gold uppercase block mb-1">
                    {item.category === 'view' ? 'Lake View' : item.category === 'food' ? 'Culinary' : 'Ambience'}
                  </span>
                  <h3 className="font-serif font-bold text-[#F5F2ED] text-lg">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="font-sans text-[10px] text-gray-300 mt-1 max-w-xs line-clamp-1">
                      {item.description}
                    </p>
                  )}
                </div>
                <div className="p-2.5 bg-gold rounded-none text-ink scale-90 group-hover:scale-100 transition-transform">
                  <Camera className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal view */}
        {activePhoto && (
          <div
            id="gallery-modal-overlay"
            className="fixed inset-0 bg-ink/95 z-50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActivePhoto(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#1F1F1F] rounded-none overflow-hidden border border-gold/30 shadow-3xl flex flex-col sm:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-51 p-2 bg-ink/70 hover:bg-gold hover:text-ink rounded-none text-white/80 transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Area */}
              <div className="sm:w-2/3 max-h-[70vh] sm:max-h-none overflow-hidden aspect-video sm:aspect-square md:aspect-video bg-black flex items-center">
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Description Sidebar */}
              <div className="sm:w-1/3 p-8 flex flex-col justify-between bg-ink text-[#F5F2ED]">
                <div>
                  <span className="inline-block px-3 py-1 rounded-none bg-gold/15 text-[9px] font-bold uppercase tracking-widest text-gold border border-gold/20 mb-4">
                    {activePhoto.category === 'view' ? 'Ana Sagar View' : activePhoto.category === 'food' ? 'Culinary Art' : 'Interior Ambience'}
                  </span>
                  
                  <h3 className="font-serif font-bold text-2xl text-[#F5F2ED] tracking-tight mb-3">
                    {activePhoto.title}
                  </h3>
                  
                  <p className="font-sans text-xs text-gray-400 leading-relaxed">
                    {activePhoto.description || "Enjoy exquisite fine-dining table settings paired with natural mountain wind, candlelit acoustics, and professional vegetarian plate design."}
                  </p>
                </div>

                <div className="pt-6 border-t border-gold/10 mt-8">
                  <div className="flex items-center space-x-2 text-xs text-gold mb-2">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin-slow" />
                    <span className="font-sans font-bold uppercase tracking-widest text-[10px]">Pure Family Vibe</span>
                  </div>
                  <p className="font-sans text-[11px] text-gray-500">
                    Oyster Rooftop Ajmer features completely separate family areas and cooling wind protection systems for secure dining winters/summers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
