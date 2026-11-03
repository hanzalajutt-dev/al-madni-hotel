import React from 'react';
import { motion } from 'motion/react';
import { Star, ArrowDown, MapPin, Utensils } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessInfo.ts';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#171A17] pt-20 pb-16"
    >
      {/* Background Image with Enhanced Culinary Visibility and Fallback */}
      <div className="absolute inset-0 z-0 bg-[#171A17]">
        <img
          src="/images/hero.jpg"
          alt="Pakistani dining feast with steaming karahi, freshly baked naan, and fragrant biryani at Al Madni Hotel"
          className="w-full h-full object-cover object-center scale-100 filter brightness-90 contrast-105"
          loading="eager"
          decoding="async"
          onError={(e) => {
            // If image fails, keep dark textured gradient background
            e.currentTarget.style.display = 'none';
          }}
          referrerPolicy="no-referrer"
        />
        {/* Balanced Vignette & Scrim: Rich Food Visibility + Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171A17] via-[#171A17]/50 to-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171A17]/75 via-transparent to-[#171A17]/75" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Upper Label (Clean unboxed text with typographic separator) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 text-xs sm:text-sm uppercase tracking-[0.3em] text-[#C6A15B] font-semibold mb-6"
        >
          <span>Authentic Taste</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" aria-hidden="true" />
          <span>Gujranwala</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-[#F7F3EA] tracking-tight leading-[1.1] mb-6 max-w-4xl text-balance drop-shadow-lg"
        >
          Good Food. <br />
          <span className="italic font-normal text-[#DFBE7E]">Memorable Moments.</span>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl text-[#F7F3EA]/90 max-w-2xl leading-relaxed mb-10 font-normal drop-shadow"
        >
          Discover a welcoming food experience at Al Madni Hotel, where great food brings people together in Attawa, Gujranwala.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12"
        >
          <button
            onClick={() => scrollToSection('food')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-[#C6A15B] hover:bg-[#D7B46F] text-[#171A17] font-semibold text-sm tracking-wide transition-all shadow-xl hover:shadow-[#C6A15B]/20 active:scale-95 cursor-pointer"
          >
            <Utensils className="w-4 h-4" />
            <span>Explore Our Food</span>
          </button>

          <button
            onClick={() => scrollToSection('location')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-[#123B2D]/80 hover:bg-[#123B2D] text-[#F7F3EA] border border-[#C6A15B]/40 hover:border-[#C6A15B] font-semibold text-sm tracking-wide backdrop-blur-sm transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#C6A15B]" />
            <span>Find Our Location</span>
          </button>
        </motion.div>

        {/* Google Rating Social Proof (Strict Zero-Pill adherence) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 text-sm text-[#F7F3EA]/90 pt-4 border-t border-white/10"
        >
          <div className="flex items-center gap-1 text-[#C6A15B]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[#C6A15B] stroke-[#C6A15B]"
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="font-semibold tracking-wide text-[#F7F3EA] tabular-nums">
            {BUSINESS_DATA.googleRating.toFixed(1)} / 5
          </span>
          <span className="text-[#C6A15B]/60" aria-hidden="true">·</span>
          <span className="text-[#D8D2C4]">
            Based on {BUSINESS_DATA.totalReviews} Verified Google Reviews
          </span>
          <span className="text-[#C6A15B]/60" aria-hidden="true">·</span>
          <span className="text-[#DFBE7E]/80 text-xs tracking-wider uppercase font-medium">
            (Listed as Khyali Madni)
          </span>
        </motion.div>
      </div>

      {/* Down indicator */}
      <button
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#F7F3EA]/60 hover:text-[#C6A15B] transition-colors p-2"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};
