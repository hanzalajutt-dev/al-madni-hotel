import React from 'react';
import { Star, MapPin, Sparkles, Navigation, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { BUSINESS_DATA } from '../data/businessInfo.ts';

interface FooterProps {
  onOpenBrandKit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrandKit }) => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#123B2D]/40 border-t border-white/10 text-[#F7F3EA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Mission (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" variant="light" />

            <p className="text-xs sm:text-sm text-[#D8D2C4] leading-relaxed max-w-sm">
              Discover authentic Pakistani cuisine and warm hospitality at Al Madni Hotel, located inside Marian Hotel in Attawa, Gujranwala.
            </p>

            <div className="pt-2">
              <span className="font-serif italic text-sm text-[#DFBE7E]">
                &ldquo;Good Food. Memorable Moments.&rdquo;
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBrandKit}
                className="inline-flex items-center gap-1.5 text-xs text-[#C6A15B] hover:text-[#DFBE7E] hover:underline cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Download Al Madni Hotel Logo &amp; Brand Kit</span>
              </button>
            </div>
          </div>

          {/* Quick Links (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A15B]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#D8D2C4]">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleScroll(e, '#home')}
                  className="hover:text-[#C6A15B] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScroll(e, '#about')}
                  className="hover:text-[#C6A15B] transition-colors"
                >
                  About Our Restaurant
                </a>
              </li>
              <li>
                <a
                  href="#food"
                  onClick={(e) => handleScroll(e, '#food')}
                  className="hover:text-[#C6A15B] transition-colors"
                >
                  Our Food &amp; Specialties
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => handleScroll(e, '#reviews')}
                  className="hover:text-[#C6A15B] transition-colors"
                >
                  Verified Google Reviews
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleScroll(e, '#gallery')}
                  className="hover:text-[#C6A15B] transition-colors"
                >
                  Visual Dining Gallery
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  onClick={(e) => handleScroll(e, '#location')}
                  className="hover:text-[#C6A15B] transition-colors"
                >
                  Location &amp; Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Trust Signals (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A15B]">
              Location &amp; Google Listing
            </h4>

            <div className="space-y-2 text-xs sm:text-sm text-[#D8D2C4]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_DATA.locationAddress} (Located in {BUSINESS_DATA.locatedIn})
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Navigation className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span>Plus Code: <span className="font-mono text-[#F7F3EA]">{BUSINESS_DATA.plusCode}</span></span>
              </div>
            </div>

            {/* Google Rating card */}
            <div className="p-3.5 rounded-xl bg-[#202420] border border-white/5 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#C6A15B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C6A15B] stroke-[#C6A15B]" />
                  ))}
                  <span className="font-bold text-xs text-[#F7F3EA] ml-1.5 tabular-nums">
                    {BUSINESS_DATA.googleRating.toFixed(1)} / 5
                  </span>
                </div>
                <div className="text-[11px] text-[#D8D2C4]/70 mt-0.5">
                  Based on {BUSINESS_DATA.totalReviews} Google Reviews &middot; Listed as {BUSINESS_DATA.mapsListingName}
                </div>
              </div>

              <a
                href={BUSINESS_DATA.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C6A15B] hover:text-[#DFBE7E] font-medium underline underline-offset-4 whitespace-nowrap ml-2"
              >
                Maps Listing &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8D2C4]/60">
          <div>
            &copy; {currentYear} {BUSINESS_DATA.brandName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Attawa, Gujranwala, Pakistan</span>
            </span>
            <span>&middot;</span>
            <span className="text-[#C6A15B]">Dine-In &amp; Takeout</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
