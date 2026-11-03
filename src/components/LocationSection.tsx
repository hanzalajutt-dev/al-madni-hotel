import React from 'react';
import { MapPin, Navigation, ExternalLink, Building, Copy, Check, Compass } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessInfo.ts';

export const LocationSection: React.FC = () => {
  const [copiedPlusCode, setCopiedPlusCode] = React.useState(false);

  const copyPlusCode = () => {
    navigator.clipboard.writeText(BUSINESS_DATA.plusCode);
    setCopiedPlusCode(true);
    setTimeout(() => setCopiedPlusCode(false), 2000);
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#171A17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold mb-2.5">
            <Compass className="w-4 h-4" />
            <span>Visit Our Restaurant</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F7F3EA] tracking-tight mb-3">
            Find Us in Gujranwala
          </h2>

          <p className="text-sm sm:text-base text-[#D8D2C4] leading-relaxed">
            Conveniently situated in Attawa, Gujranwala, welcoming local diners and travelers alike.
          </p>
        </div>

        {/* Location Details & Map Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Clean Address & Verification Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="p-5 sm:p-8 rounded-2xl bg-[#202420] border border-white/10 shadow-xl space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#123B2D] border border-[#C6A15B]/30 flex items-center justify-center text-[#C6A15B] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#C6A15B] font-semibold">
                    Address
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#F7F3EA] mt-0.5">
                    {BUSINESS_DATA.brandName}
                  </h3>
                  <p className="text-sm text-[#D8D2C4] mt-1 leading-relaxed">
                    {BUSINESS_DATA.locationAddress}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#171A17] border border-white/5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#D8D2C4]/70 flex items-center gap-2">
                    <Building className="w-4 h-4 text-[#C6A15B]" />
                    <span>Premises</span>
                  </span>
                  <span className="font-semibold text-[#F7F3EA]">
                    Located in {BUSINESS_DATA.locatedIn}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-white/5">
                  <span className="text-[#D8D2C4]/70 flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-[#C6A15B]" />
                    <span>Google Plus Code</span>
                  </span>
                  <button
                    onClick={copyPlusCode}
                    className="inline-flex items-center gap-1.5 font-mono text-[#C6A15B] hover:text-[#DFBE7E] font-medium transition-colors"
                    title="Click to copy Plus Code"
                  >
                    <span>{BUSINESS_DATA.plusCode}</span>
                    {copiedPlusCode ? (
                      <Check className="w-3 h-3 text-emerald-400" />
                    ) : (
                      <Copy className="w-3 h-3 opacity-60" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs pt-2 border-t border-white/5">
                  <span className="text-[#D8D2C4]/70">Google Listing Name</span>
                  <span className="font-semibold text-[#DFBE7E]">
                    {BUSINESS_DATA.mapsListingName}
                  </span>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="space-y-3 pt-2">
                <a
                  href={BUSINESS_DATA.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#C6A15B] hover:bg-[#D7B46F] text-[#171A17] font-semibold text-sm tracking-wide transition-all shadow-lg active:scale-95"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </a>

                <p className="text-[11px] text-center text-[#D8D2C4]/60">
                  Opens directly in Google Maps application or browser with pinned coordinates.
                </p>
              </div>
            </div>

            {/* Practical visit tip card */}
            <div className="p-5 rounded-xl bg-[#123B2D]/40 border border-[#C6A15B]/30 text-xs text-[#D8D2C4] leading-relaxed">
              <span className="font-semibold text-[#C6A15B]">Visitor Tip: </span>
              If navigating using local taxi or rideshare apps in Gujranwala, search for{' '}
              <strong className="text-white">Marian Hotel Attawa</strong> or enter the Plus Code{' '}
              <strong className="text-white">36J3+RQG</strong> for doorstep arrival.
            </div>
          </div>

          {/* Right Column: Google Maps Interactive View & Visual Pin Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[280px] sm:min-h-[380px] rounded-2xl overflow-hidden border border-[#C6A15B]/30 shadow-2xl bg-[#202420] flex flex-col justify-between">
              {/* Maps Static / Embed Representation */}
              <iframe
                title="Google Maps Location Al Madni Hotel"
                src="https://maps.google.com/maps?q=32.179,74.192&z=15&output=embed"
                className="w-full h-full min-h-[240px] sm:min-h-[340px] border-0 filter contrast-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Floating Map Pin Badge */}
              <div className="p-4 bg-[#171A17]/95 border-t border-[#C6A15B]/30 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#123B2D] text-[#C6A15B] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-serif font-bold text-[#F7F3EA]">
                      Al Madni Hotel (Khyali Madni)
                    </h4>
                    <p className="text-[11px] text-[#D8D2C4]/70">
                      Attawa, Gujranwala &middot; Located in Marian Hotel
                    </p>
                  </div>
                </div>

                <a
                  href={BUSINESS_DATA.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#C6A15B] text-[#171A17] hover:bg-[#D7B46F] transition-colors whitespace-nowrap"
                >
                  Open Maps &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
