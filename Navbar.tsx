import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Sparkles } from 'lucide-react';
import { Logo } from './Logo.tsx';

interface NavbarProps {
  onOpenBrandKit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBrandKit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Our Food', href: '#food' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#171A17]/95 backdrop-blur-md border-b border-[#C6A15B]/20 py-3 shadow-xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single Brand element wordmark */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
            aria-label="Al Madni Hotel Home"
          >
            <Logo size="sm" variant="light" showSubtitle={true} />
          </a>

          {/* Zone 2: 4-6 concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#F7F3EA]/85">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#C6A15B] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C6A15B] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + subtle brand kit affordance */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBrandKit}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#C6A15B] hover:text-[#DFBE7E] hover:bg-white/5 border border-[#C6A15B]/30 rounded-lg transition-colors whitespace-nowrap shrink-0"
              title="View & Download Al Madni Hotel Brand Logo"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Brand Kit</span>
            </button>

            <a
              href="#location"
              onClick={(e) => handleLinkClick(e, '#location')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#171A17] bg-[#C6A15B] hover:bg-[#D7B46F] rounded-lg transition-all shadow-md active:scale-95 whitespace-nowrap shrink-0"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Visit Us</span>
            </a>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F7F3EA] hover:text-[#C6A15B] hover:bg-white/5 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#171A17] border-b border-[#C6A15B]/20 px-6 py-6 mt-3 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-[#F7F3EA]/90 hover:text-[#C6A15B] py-1 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBrandKit();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#C6A15B]/40 text-[#C6A15B] text-xs font-semibold uppercase tracking-wider hover:bg-white/5"
            >
              <Sparkles className="w-4 h-4" />
              <span>View Brand Logo Kit</span>
            </button>
            <a
              href="#location"
              onClick={(e) => handleLinkClick(e, '#location')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#C6A15B] text-[#171A17] text-xs font-semibold uppercase tracking-wider hover:bg-[#D7B46F]"
            >
              <MapPin className="w-4 h-4" />
              <span>Get Directions & Location</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
