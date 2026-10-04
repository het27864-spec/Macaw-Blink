import React, { useState } from 'react';
import { Phone, MessageCircle, Navigation, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { StoreConfig, buildWhatsAppUrl } from '../data/storeData';

interface ContactSectionProps {
  config: StoreConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('Shirts & Casuals');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Anti-spam field
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) {
      // Bot detected
      return;
    }

    if (!name.trim() || !phone.trim()) {
      setError('Please provide your name and contact phone number.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const enquiryWhatsAppUrl = buildWhatsAppUrl(
    config.whatsappNumber,
    `Hi ${config.name}, My name is ${name}. I am looking for ${category}. ${message ? `Note: ${message}` : ''}`
  );

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F4F3EE] border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-2">
                GET IN TOUCH
              </div>
              
              <h2 className="font-editorial text-3xl sm:text-5xl font-light text-zinc-950 tracking-tight mb-6">
                LET'S TALK STYLE.
              </h2>

              <p className="text-sm sm:text-base text-zinc-600 font-light leading-relaxed mb-8">
                Looking for a specific fit, sizing check, or styling recommendation before stopping by? Connect with our Ahmedabad store directly.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
                    Flagship Address
                  </div>
                  <div className="text-sm text-zinc-900 mt-0.5">
                    {config.addressLine1}, {config.addressLine2}, {config.addressLandmark}, {config.city}, {config.state} {config.pincode}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
                    Direct Phone Line
                  </div>
                  <a
                    href={`tel:${config.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-base text-zinc-950 font-medium hover:underline inline-block mt-0.5"
                  >
                    {config.phone}
                  </a>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">
                    Store Schedule
                  </div>
                  <div className="text-sm text-zinc-900 mt-0.5">
                    {config.hoursDisplay}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap gap-3 pt-6 border-t border-zinc-300">
              <a
                href={`tel:${config.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-zinc-950 text-white text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>

              <a
                href={buildWhatsAppUrl(config.whatsappNumber, `Hi ${config.name}, I would like to enquire about your store.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-zinc-300 text-zinc-900 text-xs font-semibold uppercase tracking-wider hover:bg-zinc-50 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>

              <a
                href={config.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-zinc-300 text-zinc-900 text-xs font-semibold uppercase tracking-wider hover:bg-zinc-50 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-zinc-200 shadow-xs">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-zinc-950 font-semibold mb-2">
                  Thank You, {name}.
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto mb-6">
                  We have received your enquiry for <strong className="text-zinc-900">{category}</strong>. Our Ahmedabad store team will reach out to you shortly at {phone}.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={enquiryWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-950 text-white text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Send Directly on WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-5 py-3 bg-white border border-zinc-300 text-zinc-800 text-xs font-semibold uppercase tracking-wider hover:bg-zinc-50"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-editorial text-2xl text-zinc-950 font-light mb-2">
                  Send A Store Enquiry
                </h3>
                <p className="text-xs text-zinc-500 mb-6">
                  Fill in your details and our team will check size and stock availability.
                </p>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Honeypot field for anti-spam */}
                <input
                  type="text"
                  name="website_verify"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Harshil Patel"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-zinc-50 border border-zinc-300 focus:bg-white focus:outline-none focus:border-zinc-950 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs bg-zinc-50 border border-zinc-300 focus:bg-white focus:outline-none focus:border-zinc-950 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-700 mb-1.5">
                    What are you looking for?
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-zinc-50 border border-zinc-300 focus:bg-white focus:outline-none focus:border-zinc-950 transition-colors"
                  >
                    <option value="Shirts & Tailoring">Shirts & Tailoring</option>
                    <option value="T-Shirts & Oversized Tees">T-Shirts & Oversized Tees</option>
                    <option value="Jeans & Denim">Jeans & Denim</option>
                    <option value="Trousers & Chinos">Trousers & Chinos</option>
                    <option value="Casual & Western Wear">Casual & Western Wear</option>
                    <option value="Fashion Accessories">Fashion Accessories</option>
                    <option value="General Store Visit">General Store Visit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-zinc-700 mb-1.5">
                    Message / Preferred Sizes (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="e.g. Inquiring about size L in linen shirts and store parking..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs bg-zinc-50 border border-zinc-300 focus:bg-white focus:outline-none focus:border-zinc-950 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-widest transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>SEND ENQUIRY</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
