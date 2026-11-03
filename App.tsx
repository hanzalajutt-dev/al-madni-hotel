import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { OurFood } from './components/OurFood.tsx';
import { WhyVisitUs } from './components/WhyVisitUs.tsx';
import { GoogleReviews } from './components/GoogleReviews.tsx';
import { FoodGallery } from './components/FoodGallery.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { BrandLogoModal } from './components/BrandLogoModal.tsx';

export default function App() {
  const [isBrandKitOpen, setIsBrandKitOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#171A17] text-[#F7F3EA] selection:bg-[#C6A15B] selection:text-[#171A17]">
      {/* Top sticky navigation */}
      <Navbar onOpenBrandKit={() => setIsBrandKitOpen(true)} />

      {/* Main content flow */}
      <main className="flex-grow">
        <Hero />
        <About />
        <OurFood />
        <WhyVisitUs />
        <GoogleReviews />
        <FoodGallery />
        <LocationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenBrandKit={() => setIsBrandKitOpen(true)} />

      {/* Interactive Brand Kit & Logo Download Modal */}
      <BrandLogoModal
        isOpen={isBrandKitOpen}
        onClose={() => setIsBrandKitOpen(false)}
      />
    </div>
  );
}
