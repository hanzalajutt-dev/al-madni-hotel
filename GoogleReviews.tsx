import React from 'react';
import { Star, ExternalLink, ShieldCheck, Quote } from 'lucide-react';
import { VERIFIED_GOOGLE_REVIEWS, BUSINESS_DATA } from '../data/businessInfo.ts';

export const GoogleReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#171A17] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with 4.5/5 Spotlight */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold mb-2.5">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified Customer Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F7F3EA] tracking-tight mb-3">
            What Our Guests Say
          </h2>

          <p className="text-sm sm:text-base text-[#D8D2C4] leading-relaxed mb-6 sm:mb-8">
            Real experiences from Google Maps reviewers who have visited our location in Gujranwala.
          </p>

          {/* Prominent Scorecard Spotlight */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-5 sm:px-10 sm:py-6 rounded-2xl bg-[#202420] border border-[#C6A15B]/30 shadow-2xl">
            <div className="text-4xl sm:text-6xl font-serif font-bold text-[#F7F3EA] tabular-nums tracking-tight">
              {BUSINESS_DATA.googleRating.toFixed(1)}
              <span className="text-lg sm:text-2xl text-[#C6A15B]/80 font-sans font-normal ml-1">
                / 5
              </span>
            </div>

            <div className="sm:border-l sm:border-white/10 sm:pl-6 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-[#C6A15B] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 sm:w-5 sm:h-5 fill-[#C6A15B] stroke-[#C6A15B]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#F7F3EA]">
                Based on {BUSINESS_DATA.totalReviews} Google Reviews
              </div>
              <div className="text-[11px] sm:text-xs text-[#D8D2C4]/70 mt-0.5">
                Google Business Listing: <span className="text-[#C6A15B] font-medium">{BUSINESS_DATA.mapsListingName}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Real Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {VERIFIED_GOOGLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="relative p-5 sm:p-7 rounded-2xl bg-[#202420] border border-white/10 hover:border-[#C6A15B]/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Header: Author & Star Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Monogram Avatar */}
                    <div className="w-10 h-10 rounded-full bg-[#123B2D] border border-[#C6A15B]/30 flex items-center justify-center font-serif font-bold text-sm text-[#C6A15B]">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#F7F3EA]">
                        {rev.author}
                      </h4>
                      <span className="text-[11px] text-[#D8D2C4]/60">
                        {rev.timeAgo}
                      </span>
                    </div>
                  </div>

                  <Quote className="w-6 h-6 text-[#C6A15B]/25" />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-[#C6A15B] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#C6A15B] stroke-[#C6A15B]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Feedback Body (Exact as provided, never fabricated) */}
                {rev.comment ? (
                  <p className="text-sm text-[#F7F3EA]/90 italic leading-relaxed mb-4">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                ) : (
                  <p className="text-xs text-[#D8D2C4]/60 italic mb-4">
                    5-Star Google rating without accompanying written review text.
                  </p>
                )}

                {/* Sub-ratings if present */}
                {rev.subRatings && (
                  <div className="flex items-center gap-4 pt-3 border-t border-white/5 text-xs text-[#D8D2C4]">
                    {rev.subRatings.food && (
                      <span className="flex items-center gap-1">
                        <span className="text-[#C6A15B] font-semibold">Food:</span>{' '}
                        {rev.subRatings.food}/5
                      </span>
                    )}
                    {rev.subRatings.service && (
                      <span className="flex items-center gap-1">
                        <span className="text-[#C6A15B] font-semibold">Service:</span>{' '}
                        {rev.subRatings.service}/5
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Verified badge */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#D8D2C4]/70">
                <span className="inline-flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Google Maps Review</span>
                </span>
                <span className="text-[#C6A15B]/80 font-mono">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button: Read All Reviews on Google */}
        <div className="text-center">
          <a
            href={BUSINESS_DATA.mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-[#202420] hover:bg-[#123B2D] border border-[#C6A15B]/40 hover:border-[#C6A15B] text-[#F7F3EA] text-xs font-semibold uppercase tracking-wider transition-all shadow-lg active:scale-95"
          >
            <span>Read All 6 Reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C6A15B]" />
          </a>
        </div>
      </div>
    </section>
  );
};
