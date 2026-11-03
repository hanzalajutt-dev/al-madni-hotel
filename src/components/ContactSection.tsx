import React, { useState } from 'react';
import { Navigation, Clock, Phone, Send, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessInfo.ts';

export const ContactSection: React.FC = () => {
  const [guestName, setGuestName] = useState('');
  const [guestContact, setGuestContact] = useState('');
  const [guestNote, setGuestNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !guestContact.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setGuestName('');
      setGuestContact('');
      setGuestNote('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#123B2D]/10 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Business & Service Details */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Plan Your Visit</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#F7F3EA] tracking-tight mb-4">
                We&apos;d Love to Welcome You
              </h2>

              <p className="text-base text-[#D8D2C4] leading-relaxed">
                Whether dropping in for lunch, an evening dinner with family, or picking up hot takeout, our doors are open to serve you in Attawa, Gujranwala.
              </p>
            </div>

            {/* Information Cards with Clear Placeholders for Unverified Details */}
            <div className="space-y-4">
              {/* Phone Information */}
              <div className="p-5 rounded-xl bg-[#202420] border border-white/10 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#123B2D] text-[#C6A15B] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F7F3EA]">Phone Inquiries</h4>
                  <p className="text-xs text-[#D8D2C4]/80 mt-1">
                    {BUSINESS_DATA.contactPlaceholders.phoneLabel}
                  </p>
                  <p className="text-[11px] text-[#C6A15B] mt-1 font-mono">
                    Direct phone line being configured &middot; Inquire in person at Marian Hotel
                  </p>
                </div>
              </div>

              {/* Operating Hours Information */}
              <div className="p-5 rounded-xl bg-[#202420] border border-white/10 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#123B2D] text-[#C6A15B] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F7F3EA]">Opening Hours</h4>
                  <p className="text-xs text-[#D8D2C4]/80 mt-1">
                    {BUSINESS_DATA.contactPlaceholders.hoursLabel}
                  </p>
                  <p className="text-[11px] text-[#C6A15B] mt-1 font-mono">
                    Open daily for dine-in &amp; takeout service
                  </p>
                </div>
              </div>

              {/* Service Status */}
              <div className="p-5 rounded-xl bg-[#171A17] border border-[#C6A15B]/30 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#C6A15B] font-semibold">
                    Available Services
                  </div>
                  <div className="text-xs text-[#D8D2C4] mt-0.5">
                    Dine-In Available &middot; Takeout Available
                  </div>
                </div>

                <a
                  href={BUSINESS_DATA.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#C6A15B] hover:bg-[#D7B46F] text-[#171A17] text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-95"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Guest Inquiry / Table Message Box */}
          <div className="lg:col-span-6 w-full">
            <div className="p-5 sm:p-8 rounded-2xl bg-[#202420] border border-white/10 shadow-2xl relative">
              <h3 className="text-xl font-serif font-bold text-[#F7F3EA] mb-2">
                Send a Message or Inquiry
              </h3>
              <p className="text-xs text-[#D8D2C4] mb-6">
                Planning a family gathering, ordering bulk takeout, or inquiring about our daily specialties? Send us a quick note.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#123B2D]/60 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-semibold text-[#F7F3EA]">
                    Thank You for Your Inquiry!
                  </h4>
                  <p className="text-xs text-[#D8D2C4] leading-relaxed">
                    Your message has been recorded. Our team looks forward to welcoming you at Al Madni Hotel in Marian Hotel, Attawa, Gujranwala.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#C6A15B] hover:underline pt-2 inline-block"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-[#D8D2C4] mb-1.5">
                      Your Name <span className="text-[#C6A15B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Tariq Mehmood"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#171A17] border border-white/10 text-sm text-[#F7F3EA] placeholder-[#D8D2C4]/40 focus:outline-none focus:border-[#C6A15B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#D8D2C4] mb-1.5">
                      Phone Number or WhatsApp <span className="text-[#C6A15B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={guestContact}
                      onChange={(e) => setGuestContact(e.target.value)}
                      placeholder="e.g. 0300-1234567"
                      className="w-full px-4 py-2.5 rounded-lg bg-[#171A17] border border-white/10 text-sm text-[#F7F3EA] placeholder-[#D8D2C4]/40 focus:outline-none focus:border-[#C6A15B] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#D8D2C4] mb-1.5">
                      Inquiry Details / Table Request
                    </label>
                    <textarea
                      rows={3}
                      value={guestNote}
                      onChange={(e) => setGuestNote(e.target.value)}
                      placeholder="e.g. Inquiring about dine-in table for 6 guests this evening, or specialty karahi readiness..."
                      className="w-full px-4 py-2.5 rounded-lg bg-[#171A17] border border-white/10 text-sm text-[#F7F3EA] placeholder-[#D8D2C4]/40 focus:outline-none focus:border-[#C6A15B] transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-[#D8D2C4]/60 pt-1">
                    <AlertCircle className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                    <span>We treat guest contact details with confidentiality.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#C6A15B] hover:bg-[#D7B46F] text-[#171A17] font-semibold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
