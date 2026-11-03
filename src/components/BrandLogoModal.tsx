import React, { useState } from 'react';
import { X, Download, Check, Sparkles, Copy, Palette } from 'lucide-react';
import { LogoEmblemSvg, Logo } from './Logo.tsx';

interface BrandLogoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandLogoModal: React.FC<BrandLogoModalProps> = ({ isOpen, onClose }) => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  if (!isOpen) return null;

  const brandColors = [
    { name: 'Deep Forest Green', hex: '#123B2D', role: 'Primary Brand Surface' },
    { name: 'Muted Royal Gold', hex: '#C6A15B', role: 'Luxury Accent & Crest' },
    { name: 'Dark Charcoal', hex: '#171A17', role: 'Canvas Background' },
    { name: 'Warm Cream', hex: '#F7F3EA', role: 'Refined Typography' },
  ];

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const downloadSvg = () => {
    const svgData = `<svg width="500" height="500" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#DFBE7E" />
      <stop offset="50%" stop-color="#C6A15B" />
      <stop offset="100%" stop-color="#9C7833" />
    </linearGradient>
    <linearGradient id="greenBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#123B2D" />
      <stop offset="100%" stop-color="#0B231B" />
    </linearGradient>
  </defs>
  <rect x="6" y="6" width="88" height="88" rx="22" fill="url(#greenBg)" stroke="url(#goldGradient)" stroke-width="2.5" />
  <rect x="12" y="12" width="76" height="76" rx="18" fill="none" stroke="url(#goldGradient)" stroke-width="1" stroke-dasharray="2 2" opacity="0.85" />
  <path d="M26 70V44C26 31 37 20 50 20C63 20 74 31 74 44V70" stroke="url(#goldGradient)" stroke-width="2" stroke-linecap="round" fill="none" />
  <path d="M50 16L53 22H47L50 16Z" fill="url(#goldGradient)" />
  <path d="M34 66V46L50 56L66 46V66" stroke="url(#goldGradient)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  <polygon points="50,34 53,38 50,42 47,38" fill="url(#goldGradient)" />
  <line x1="22" y1="73" x2="78" y2="73" stroke="url(#goldGradient)" stroke-width="1.5" stroke-linecap="round" />
</svg>`;

    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'al-madni-hotel-logo.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-[#171A17] border border-[#C6A15B]/30 rounded-2xl p-6 sm:p-8 text-[#F7F3EA] shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#F7F3EA]/70 hover:text-[#C6A15B] hover:bg-white/5 transition-colors"
          aria-label="Close Brand Kit modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#C6A15B] font-semibold mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Brand Identity Kit</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-serif text-[#F7F3EA] mb-2">
          Official Al Madni Hotel Logo
        </h2>
        <p className="text-sm text-[#D8D2C4] leading-relaxed mb-6">
          Custom designed in deep forest green and lustrous gold, combining architectural Mughal arches, a stylized central &apos;M&apos; lettermark, and refined typography.
        </p>

        {/* Logo Display Canvas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-8 rounded-xl bg-[#123B2D] border border-[#C6A15B]/30 flex flex-col items-center justify-center text-center gap-4">
            <span className="text-[10px] tracking-widest uppercase text-[#C6A15B] font-semibold">
              Primary Brand Surface
            </span>
            <Logo size="lg" variant="light" />
          </div>

          <div className="p-8 rounded-xl bg-[#F7F3EA] border border-[#C6A15B]/30 flex flex-col items-center justify-center text-center gap-4">
            <span className="text-[10px] tracking-widest uppercase text-[#123B2D] font-semibold">
              Light Surface Presentation
            </span>
            <Logo size="lg" variant="dark" />
          </div>
        </div>

        {/* Color Palette */}
        <div className="mb-6">
          <h3 className="text-xs uppercase tracking-wider text-[#C6A15B] font-semibold flex items-center gap-2 mb-3">
            <Palette className="w-3.5 h-3.5" />
            <span>Brand Colors</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {brandColors.map((color) => (
              <button
                key={color.hex}
                onClick={() => handleCopyColor(color.hex)}
                className="group p-3 rounded-lg bg-[#202420] border border-white/5 text-left hover:border-[#C6A15B]/40 transition-all flex flex-col"
              >
                <div
                  className="w-full h-8 rounded mb-2 border border-white/10"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-xs font-medium text-[#F7F3EA] truncate">
                  {color.name}
                </span>
                <div className="flex items-center justify-between text-[11px] text-[#C6A15B] mt-1 font-mono">
                  <span>{color.hex}</span>
                  {copiedColor === color.hex ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
          <p className="text-xs text-[#D8D2C4]/70">
            Vector SVG ready for menus, outdoor signage, or social headers.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={downloadSvg}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#C6A15B] hover:bg-[#D7B46F] text-[#171A17] font-semibold text-xs tracking-wide transition-all shadow-md active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download Vector SVG</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg border border-white/20 hover:bg-white/5 text-xs text-[#F7F3EA] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
