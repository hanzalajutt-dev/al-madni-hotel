import React from 'react';
import { Utensils, ShoppingBag, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export const WhyVisitUs: React.FC = () => {
  const features = [
    {
      id: 'dining',
      title: 'A Welcoming Dining Experience',
      description: 'Enjoy a comfortable place to sit down and share a meal.',
      detail: 'Clean ambiance, attentive service, and an authentic restaurant setting right inside Marian Hotel in Attawa.',
      icon: Users,
    },
    {
      id: 'dinein',
      title: 'Dine-In',
      description: 'Visit us and enjoy your meal at the restaurant.',
      detail: 'Freshly cooked dishes served hot straight to your table for lunch, evening gatherings, or late dining.',
      icon: Utensils,
    },
    {
      id: 'takeout',
      title: 'Takeout',
      description: 'Prefer enjoying your meal elsewhere? Takeout is available.',
      detail: 'Convenient packaging prepared promptly so you can relish restaurant-quality food wherever you desire.',
      icon: ShoppingBag,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#171A17] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hospitality &amp; Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#F7F3EA] mb-3">
            Why Visit Al Madni Hotel
          </h2>

          <p className="text-sm sm:text-base text-[#D8D2C4] leading-relaxed">
            Honest cooking, verified services, and genuine hospitality in Gujranwala.
          </p>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative p-6 sm:p-8 rounded-2xl bg-[#202420] border border-white/10 hover:border-[#C6A15B]/50 transition-all duration-300 shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Subtle top indicator & icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#123B2D] border border-[#C6A15B]/30 flex items-center justify-center text-[#C6A15B] group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#C6A15B]/60 tabular-nums">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#F7F3EA] group-hover:text-[#C6A15B] transition-colors mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-[#F7F3EA]/90 font-medium leading-relaxed mb-3">
                    &ldquo;{feature.description}&rdquo;
                  </p>

                  <p className="text-xs text-[#D8D2C4]/70 leading-relaxed">
                    {feature.detail}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs text-[#C6A15B] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Service Offering</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
