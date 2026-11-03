import React, { useState } from 'react';
import {
  Utensils,
  MapPin,
  Sparkles,
  X,
  Tag,
  SlidersHorizontal,
  Info,
  CheckCircle2,
  Edit3,
} from 'lucide-react';
import { PROPOSED_FOOD_MENU, MENU_CATEGORIES } from '../data/businessInfo.ts';
import { FoodItem, MenuCategoryKey } from '../types.ts';
import { ImageWithFallback } from './ImageWithFallback.tsx';

export const OurFood: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryKey>('all');
  const [activeItem, setActiveItem] = useState<FoodItem | null>(null);
  const [customPrices, setCustomPrices] = useState<Record<string, string>>({});
  const [editingPriceItemId, setEditingPriceItemId] = useState<string | null>(null);
  const [tempPriceInput, setTempPriceInput] = useState<string>('');

  const filteredDishes =
    selectedCategory === 'all'
      ? PROPOSED_FOOD_MENU
      : PROPOSED_FOOD_MENU.filter((item) => item.categoryId === selectedCategory);

  const scrollToLocation = () => {
    const el = document.getElementById('location');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartEditPrice = (e: React.MouseEvent, item: FoodItem) => {
    e.stopPropagation();
    setEditingPriceItemId(item.id);
    setTempPriceInput(customPrices[item.id] || '');
  };

  const handleSavePrice = (e: React.FormEvent, itemId: string) => {
    e.preventDefault();
    if (tempPriceInput.trim()) {
      setCustomPrices((prev) => ({
        ...prev,
        [itemId]: tempPriceInput.trim(),
      }));
    } else {
      setCustomPrices((prev) => {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      });
    }
    setEditingPriceItemId(null);
  };

  return (
    <section id="food" className="py-16 sm:py-24 bg-[#123B2D]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#C6A15B] font-semibold mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Culinary Offerings</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F7F3EA] tracking-tight mb-3">
            Made to Make You Hungry
          </h2>

          <p className="text-sm sm:text-base text-[#D8D2C4] leading-relaxed">
            Explore authentic Pakistani specialties, sizzling iron karahis, live charcoal grills, and aromatic dum rice dishes at Al Madni Hotel in Gujranwala.
          </p>

          {/* Transparent Editorial Notice */}
          <div className="mt-4 inline-flex items-center gap-2 text-[11px] sm:text-xs text-[#C6A15B] bg-[#123B2D]/60 border border-[#C6A15B]/30 px-3.5 py-1.5 rounded-full shadow-sm text-balance">
            <Info className="w-3.5 h-3.5 shrink-0" />
            <span>
              Proposed menu based on regional Pakistani culinary favorites &middot; Prices and daily pot availability confirmed on-site
            </span>
          </div>
        </div>

        {/* Category Filter Tabs (Single-line interactive controls with smooth mobile swipe) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 p-1.5 mb-10 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar scroll-smooth">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-[#C6A15B] text-[#171A17] shadow-lg shadow-[#C6A15B]/20 font-bold scale-[1.02]'
                    : 'bg-[#202420] text-[#D8D2C4] hover:text-[#F7F3EA] hover:bg-[#202420]/80 border border-white/5'
                }`}
              >
                <span>{cat.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#171A17]" aria-hidden="true" />
                )}
              </button>
            );
          })}
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredDishes.map((item) => {
            const currentPrice = customPrices[item.id] || item.pricePlaceholder;
            const isEditingThis = editingPriceItemId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-[#202420] border border-white/10 hover:border-[#C6A15B]/50 transition-all duration-300 shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Image Section with Resilient Fallback */}
                <div>
                  <div className="relative overflow-hidden bg-[#171A17]">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      category={item.categoryName}
                      title={item.name}
                      containerClassName="aspect-[16/10] sm:aspect-[4/3] w-full"
                      className="group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#202420] via-transparent to-transparent opacity-85 pointer-events-none" />

                    {/* Category Label */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[10px] uppercase tracking-wider font-semibold text-[#DFBE7E] bg-black/65 backdrop-blur-sm px-2.5 py-1 rounded">
                      {item.categoryName}
                    </div>

                    {/* Portion indicator */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[10px] font-medium text-[#F7F3EA]/90 bg-[#123B2D]/85 backdrop-blur-sm border border-[#C6A15B]/30 px-2.5 py-1 rounded">
                      {item.servingPortion}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-[#F7F3EA] group-hover:text-[#C6A15B] transition-colors mb-2 leading-snug">
                      {item.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#D8D2C4] leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Clean unboxed tags */}
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-[#C6A15B] font-medium pt-3 border-t border-white/5 mb-2">
                      {item.tags.map((tag, idx) => (
                        <React.Fragment key={tag}>
                          <span>{tag}</span>
                          {idx < item.tags.length - 1 && (
                            <span className="opacity-40">&middot;</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer with Price Field & Owner Edit Affordance */}
                <div className="px-6 pb-6 pt-0">
                  <div className="p-3 rounded-xl bg-[#171A17] border border-white/5 flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] uppercase tracking-wider text-[#D8D2C4]/60 font-medium flex items-center gap-1">
                        <Tag className="w-3 h-3 text-[#C6A15B]" />
                        <span>Pricing Status</span>
                      </div>

                      {isEditingThis ? (
                        <form
                          onSubmit={(e) => handleSavePrice(e, item.id)}
                          onClick={(e) => e.stopPropagation()}
                          className="mt-1 flex items-center gap-2"
                        >
                          <input
                            type="text"
                            value={tempPriceInput}
                            onChange={(e) => setTempPriceInput(e.target.value)}
                            placeholder="e.g. Rs. 1,450"
                            autoFocus
                            className="w-full px-2 py-1 text-xs bg-[#202420] border border-[#C6A15B] rounded text-white focus:outline-none"
                          />
                          <button
                            type="submit"
                            className="px-2 py-1 text-[10px] font-semibold bg-[#C6A15B] text-black rounded"
                          >
                            Save
                          </button>
                        </form>
                      ) : (
                        <div className="text-xs font-semibold text-[#DFBE7E] truncate mt-0.5">
                          {currentPrice}
                        </div>
                      )}
                    </div>

                    {!isEditingThis && (
                      <button
                        onClick={(e) => handleStartEditPrice(e, item)}
                        title="Owner: Click to set custom price for this dish"
                        className="p-1.5 rounded-lg text-[#D8D2C4]/60 hover:text-[#C6A15B] hover:bg-white/5 transition-colors"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Action Strip */}
        <div className="p-8 rounded-2xl bg-[#202420] border border-[#C6A15B]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#123B2D] border border-[#C6A15B]/30 flex items-center justify-center text-[#C6A15B] shrink-0">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-serif font-bold text-[#F7F3EA]">
                Visiting Al Madni Hotel in Gujranwala?
              </h3>
              <p className="text-xs sm:text-sm text-[#D8D2C4] mt-0.5">
                Our kitchen prepares traditional dishes hot on order for both dine-in seating and fast takeout.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={scrollToLocation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#C6A15B] hover:bg-[#D7B46F] text-[#171A17] font-semibold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions to Taste</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dish Detailed Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg bg-[#202420] border border-[#C6A15B]/40 rounded-2xl overflow-hidden shadow-2xl text-[#F7F3EA] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-[#F7F3EA] hover:text-[#C6A15B] transition-colors"
              aria-label="Close dish preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full bg-[#171A17]">
              <ImageWithFallback
                src={activeItem.image}
                alt={activeItem.name}
                category={activeItem.categoryName}
                title={activeItem.name}
                containerClassName="aspect-[16/10] sm:aspect-[16/9] w-full max-h-[260px] sm:max-h-[320px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#202420] via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[11px] uppercase tracking-widest text-[#C6A15B] font-semibold">
                  {activeItem.categoryName}
                </span>
                <span className="text-xs text-[#D8D2C4] font-medium bg-[#123B2D] px-2.5 py-0.5 rounded border border-[#C6A15B]/30">
                  {activeItem.servingPortion}
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#F7F3EA] mt-1 mb-3">
                {activeItem.name}
              </h3>

              <p className="text-sm text-[#D8D2C4] leading-relaxed mb-4">
                {activeItem.description}
              </p>

              {/* Price & availability banner */}
              <div className="p-4 rounded-xl bg-[#171A17] border border-white/10 space-y-2 mb-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#D8D2C4]/70">Menu Price:</span>
                  <span className="font-semibold text-[#DFBE7E] font-mono text-sm">
                    {customPrices[activeItem.id] || activeItem.pricePlaceholder}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs pt-2 border-t border-white/5">
                  <span className="text-[#D8D2C4]/70">Availability:</span>
                  <span className="text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Dine-in &amp; Takeout</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-4 py-2.5 text-xs text-[#D8D2C4] hover:text-white transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setActiveItem(null);
                    scrollToLocation();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#C6A15B] hover:bg-[#D7B46F] text-[#171A17] text-xs font-semibold uppercase tracking-wider"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Visit Restaurant</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
