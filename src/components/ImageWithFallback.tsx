import React, { useState } from 'react';
import { UtensilsCrossed, Sparkles } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  category?: string;
  title?: string;
  priority?: boolean;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  category,
  title,
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#171A17] ${containerClassName}`}
    >
      {!hasError ? (
        <>
          {/* Subtle loading placeholder shimmer */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-[#202420] animate-pulse flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#C6A15B]/30 animate-spin" />
            </div>
          )}
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => {
              setHasError(true);
            }}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
            referrerPolicy="no-referrer"
          />
        </>
      ) : (
        /* Premium Branded Architectural Fallback (Zero Broken Images) */
        <div className="w-full h-full min-h-[160px] p-6 bg-gradient-to-br from-[#123B2D] via-[#171A17] to-[#0C281F] border border-[#C6A15B]/30 flex flex-col items-center justify-center text-center select-none relative">
          {/* Subtle decorative inner arch */}
          <div className="absolute inset-3 border border-[#C6A15B]/20 rounded-xl pointer-events-none" />

          <div className="w-12 h-12 rounded-full bg-[#171A17]/80 border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B] mb-2.5 shadow-md">
            <UtensilsCrossed className="w-5 h-5" />
          </div>

          {category && (
            <span className="text-[10px] tracking-widest uppercase text-[#C6A15B] font-semibold mb-1">
              {category}
            </span>
          )}

          <h4 className="text-sm font-serif font-bold text-[#F7F3EA] max-w-[90%] truncate">
            {title || alt || 'Al Madni Hotel Special'}
          </h4>

          <span className="text-[10px] text-[#DFBE7E]/80 mt-1">
            Authentic Pakistani Culinary Experience
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageWithFallback;
