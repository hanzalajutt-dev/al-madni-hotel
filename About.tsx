import React from 'react';
import { MapPin, Building, Sparkles, UtensilsCrossed } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessInfo.ts';
import { ImageWithFallback } from './ImageWithFallback.tsx';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#171A17] relative overflow-hidden">
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#123B2D]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Image with Gold Arch Accent Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#C6A15B]/30 shadow-2xl group">
              <ImageWithFallback
                src="/images/about.jpg"
                alt="Welcoming dining hall at Al Madni Hotel in Marian Hotel, Attawa, Gujranwala"
                category="Dining Ambiance"
                title="Welcoming Dining Hall"
                containerClassName="aspect-[4/3] sm:aspect-[16/11] max-h-[420px] w-full"
                className="group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171A17] via-transparent to-transparent opacity-70 pointer-events-none" />

              {/* Verified Location Card Overlay */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 sm:p-4 rounded-xl bg-[#171A17]/90 backdrop-blur-md border border-[#C6A15B]/20 flex items-center justify-between">
                <div>
                  <div className="text-[11px] sm:text-xs uppercase tracking-widest text-[#C6A15B] font-semibold">
                    Attawa, Gujranwala
                  </div>
                  <div className="text-xs sm:text-sm font-serif font-bold text-[#F7F3EA] mt-0.5">
                    Located in Marian Hotel
                  </div>
                </div>
                <div className="p-2 sm:p-2.5 rounded-lg bg-[#123B2D] text-[#C6A15B] border border-[#C6A15B]/30 shrink-0">
                  <Building className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>

            {/* Subtle decorative architectural offset border */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-[#C6A15B]/40 rounded-tl-xl pointer-events-none -z-10 hidden sm:block" />
          </div>

          {/* Right Column: Editorial Typography */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Welcome to Al Madni Hotel</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F7F3EA] leading-tight mb-6">
              A Place for Good Food &amp; Good Company
            </h2>

            <p className="text-base sm:text-lg text-[#D8D2C4] leading-relaxed mb-6">
              Al Madni Hotel welcomes guests in Attawa, Gujranwala. Whether you&apos;re stopping by for a meal or enjoying time with family and friends, discover a welcoming place to dine.
            </p>

            <p className="text-sm sm:text-base text-[#D8D2C4]/80 leading-relaxed mb-8">
              Centrally situated inside Marian Hotel, we provide hearty culinary dishes crafted with authentic spices and fresh cooking. Every guest is welcomed with attentive hospitality and a dedication to genuine flavor.
            </p>

            {/* Verified Services Summary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8 pt-4 border-t border-white/10">
              <div className="p-4 rounded-xl bg-[#202420] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#123B2D] text-[#C6A15B] shrink-0 mt-0.5">
                  <UtensilsCrossed className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F7F3EA]">Dine-In Comfort</h4>
                  <p className="text-xs text-[#D8D2C4]/80 mt-1">
                    Relax and enjoy freshly prepared dishes in a clean, hospitable setting.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#202420] border border-white/5 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#123B2D] text-[#C6A15B] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F7F3EA]">Fresh Takeout</h4>
                  <p className="text-xs text-[#D8D2C4]/80 mt-1">
                    Pick up hot food packed with care to enjoy wherever you are.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Listing Integrity Notice */}
            <div className="w-full p-4 rounded-xl bg-[#123B2D]/40 border border-[#C6A15B]/20 text-xs text-[#D8D2C4] flex items-center justify-between">
              <div>
                <span className="font-semibold text-[#F7F3EA]">Google Maps Verified:</span> Listed as{' '}
                <span className="text-[#C6A15B] font-semibold">{BUSINESS_DATA.mapsListingName}</span> in Attawa.
              </div>
              <a
                href={BUSINESS_DATA.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C6A15B] hover:text-[#DFBE7E] font-medium underline underline-offset-4 ml-2 whitespace-nowrap"
              >
                View Listing &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
