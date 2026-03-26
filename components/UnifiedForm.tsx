'use client';

import React from 'react';

const tradeOptions = ['Barber', 'Car Mechanic', 'Carpenter', 'Plumber', 'Other'];

interface UnifiedFormProps {
  tradeSector?: string;
  variant?: 'light' | 'dark';
}

export default function UnifiedForm({ tradeSector, variant = 'light' }: UnifiedFormProps) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [selectedTrade, setSelectedTrade] = React.useState(tradeSector || '');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const isDark = variant === 'dark';

  // Color tokens
  const labelColor = isDark ? 'text-background/70' : 'text-outline';
  const inputBorder = isDark ? 'border-background/20' : 'border-outline-variant';
  const inputFocusBorder = isDark ? 'focus:border-background' : 'focus:border-primary';
  const inputText = isDark ? 'text-background' : 'text-on-surface';
  const activeLabelColor = isDark ? 'text-background' : 'text-primary';

  // Shared Input Style to prevent repetition and "shrink" look
  const inputClasses = `peer block w-full bg-transparent border-0 border-b ${inputBorder} py-4 md:py-5 px-0 ${inputFocusBorder} transition-all duration-300 font-sans text-base md:text-lg ${inputText} placeholder-transparent outline-none`;
  const labelClasses = `absolute left-0 top-4 md:top-5 font-sans text-[10px] md:text-sm uppercase tracking-[0.1rem] md:tracking-[0.15rem] ${labelColor} transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-[10px] peer-focus:${activeLabelColor} peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]`;

  return (
    <>
      <form className="space-y-6 md:space-y-10" onSubmit={handleSubmit}>
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="relative">
            <input className={inputClasses} id="uf-name" name="name" placeholder="FullName" type="text" required />
            <label className={labelClasses} htmlFor="uf-name">Full Name</label>
          </div>

          <div className="relative">
            <input className={inputClasses} id="uf-email" name="email" placeholder="EmailAddress" type="email" required />
            <label className={labelClasses} htmlFor="uf-email">Email Address</label>
          </div>
        </div>

        {/* Row 2: Phone & Trade Sector */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="relative">
            <input className={inputClasses} id="uf-phone" name="phone" placeholder="PhoneNumber" type="tel" required />
            <label className={labelClasses} htmlFor="uf-phone">Phone Number</label>
          </div>

          {tradeSector ? (
            <div className="relative">
              <input
                className={`${inputClasses} opacity-60 cursor-default`}
                name="trade"
                readOnly
                type="text"
                value={tradeSector}
              />
              <label className={`absolute left-0 -top-4 font-sans text-[10px] uppercase tracking-[0.15rem] ${activeLabelColor} pointer-events-none`}>
                Trade Sector
              </label>
            </div>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <input type="hidden" name="trade" value={selectedTrade} required />
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`w-full flex items-center justify-between bg-transparent border-0 border-b ${inputBorder} py-4 md:py-5 px-0 transition-all duration-300 outline-none cursor-pointer`}
              >
                <span className={`font-sans text-base md:text-lg ${selectedTrade ? inputText : 'text-transparent'}`}>
                  {selectedTrade || 'placeholder'}
                </span>
                <span className={`material-symbols-outlined transition-transform duration-300 ${labelColor} ${dropdownOpen ? `rotate-180 ${activeLabelColor}` : ''}`}>
                  expand_more
                </span>
              </button>
              <label className={`absolute left-0 font-sans uppercase tracking-[0.1rem] md:tracking-[0.15rem] transition-all duration-300 pointer-events-none ${selectedTrade || dropdownOpen ? `-top-4 text-[10px] ${activeLabelColor}` : `top-4 md:top-5 text-sm ${labelColor}`}`}>
                Trade Sector
              </label>
              <div className={`absolute left-0 right-0 top-[calc(100%+4px)] z-50 bg-white rounded-xl shadow-2xl border border-outline-variant/20 overflow-hidden transition-all duration-300 origin-top ${dropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'}`}>
                {tradeOptions.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => { setSelectedTrade(type); setDropdownOpen(false); }}
                    className="w-full text-left px-6 py-4 font-sans text-base hover:bg-surface-container-high transition-colors flex items-center gap-3"
                  >
                    <span className={`w-2 h-2 rounded-full ${selectedTrade === type ? 'bg-primary' : 'bg-outline-variant'}`} />
                    {type}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Row 3: Message */}
        <div className="relative">
          <textarea
            className={`${inputClasses} resize-none`}
            id="uf-message"
            name="message"
            placeholder="ProjectBrief"
            rows={3}
            required
          ></textarea>
          <label className={labelClasses} htmlFor="uf-message">Project Brief</label>
        </div>

        {/* Row 4: Checkbox & Submit */}
        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 md:gap-8">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => document.getElementById('uf-terms')?.click()}>
            <div className="relative w-6 h-6 flex-shrink-0">
              <input
                className={`peer appearance-none w-6 h-6 rounded-md border-2 transition-all duration-300 cursor-pointer outline-none ${isDark ? 'border-background/30 checked:bg-background' : 'border-outline-variant checked:bg-primary checked:border-primary'}`}
                id="uf-terms"
                type="checkbox"
                required
              />
              <svg
                className="absolute left-0 top-0 w-6 h-6 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-300"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z" fill={isDark ? '#334425' : 'white'} />
              </svg>
            </div>
            <label className={`font-sans text-[10px] md:text-xs uppercase tracking-[0.1rem] cursor-pointer ${isDark ? 'text-background/60' : 'text-on-surface-variant'}`} htmlFor="uf-terms">
              I agree to the privacy policy
            </label>
          </div>

          <button
            className={`w-full sm:w-auto rounded-full px-[35px] py-4 md:py-6 font-sans text-xs md:text-sm font-bold uppercase tracking-[0.2rem] transition-all duration-500 shadow-xl active:scale-95 ${isDark ? 'bg-background text-primary' : 'bg-primary text-on-primary'
              }`}
            type="submit"
          >
            Send Inquiry
          </button>
        </div>
      </form>

      {/* Success Modal - Optimized for mobile centering */}
      <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-500 ${isSubmitted ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-md" onClick={() => setIsSubmitted(false)}></div>
        <div className={`relative bg-background p-8 md:p-16 rounded-3xl shadow-2xl max-w-xl w-full text-center transition-all duration-500 transform ${isSubmitted ? 'scale-100' : 'scale-95'}`}>
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
          </div>
          <h2 className="font-serif text-2xl md:text-4xl text-primary mb-4">Inquiry Received</h2>
          <p className="font-sans text-on-surface-variant text-base md:text-lg mb-8">
            Thank you for reaching out. We will review your requirements and respond within 2 hours.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="w-full sm:w-auto rounded-full bg-primary text-on-primary px-10 py-4 font-sans text-sm font-bold uppercase">
            Return to Site
          </button>
        </div>
      </div>
    </>
  );
}