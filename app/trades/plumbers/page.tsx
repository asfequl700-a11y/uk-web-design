import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UnifiedForm from '@/components/UnifiedForm';

export default function PlumbersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface font-body selection:bg-secondary/20 overflow-x-hidden">
      <Navbar />
      <main className="flex-grow pt-[4.5rem]">
        {/* Hero Section */}
        <section className="pt-12 pb-24 px-8 max-w-[1280px] mx-auto flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-4">
                <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary">Bespoke Digital Estates</span>
                <h1 className="font-serif text-3xl sm:text-5xl md:text-[3.5rem] leading-[1.1] text-primary tracking-[-0.02em] break-words">
                  More Jobs.<br />Less Quiet Days.
                </h1>
                <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-md leading-relaxed">
                  We build high-performance digital showrooms for elite plumbers. Stop chasing leads and start attracting the contracts you deserve.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-sans font-semibold luxury-bezier hover:bg-primary-container active:scale-95 transition-all">
                  Get My Plumbing Website
                </button>
              </div>
              {/* Trust Strip */}
              <div className="pt-8 md:pt-12 flex flex-wrap gap-8 md:gap-12 border-t border-outline-variant/20">
                <div>
                  <div className="font-serif text-2xl md:text-3xl text-primary font-bold">48hr</div>
                  <div className="font-sans text-[0.6rem] md:text-[0.6875rem] uppercase tracking-wider text-on-surface-variant">Response Time</div>
                </div>
                <div>
                  <div className="font-serif text-2xl md:text-3xl text-primary font-bold">100%</div>
                  <div className="font-sans text-[0.6rem] md:text-[0.6875rem] uppercase tracking-wider text-on-surface-variant">Trade Exclusive</div>
                </div>
                <div>
                  <div className="font-serif text-2xl md:text-3xl text-primary font-bold">£10k+</div>
                  <div className="font-sans text-[0.6rem] md:text-[0.6875rem] uppercase tracking-wider text-on-surface-variant">Avg. Project Value</div>
                </div>
              </div>
            </div>
            <div className="relative group mt-12 lg:mt-0">
              <div className="absolute -inset-4 bg-primary-container/5 rounded-lg -z-10 transform rotate-2"></div>
              <img alt="Professional Plumbing" className="w-full aspect-[4/5] object-cover rounded-lg shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoOBphOckR6PDyhu0aTT02TebxCbGX-igz0rMbkuYTcdAF4_tMoxguzRGzRadTMlKu0b0rPrUgk6Fp18ynXXPdMto9bBNdh1mbdEI8HAgSLUHDf6qUuvDSX7qTUYs2cQnXnb0Ox1JudpbiBdGM_BqMvtCBmlFqDSVFePNBrzi4hyDPvis9L3MhdXEKORJHTvb31hcszp_G3IGNJAV8AMPqHCkIJxpM6uQDRooModNm8rI05Z3k63MdBdD_VXeLrHw8T2GEZXlISg" />
              <div className="absolute bottom-4 -left-4 md:bottom-8 md:-left-8 bg-surface-container-highest p-4 md:p-6 rounded shadow-xl max-w-[200px] md:max-w-xs border border-outline-variant/10">
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="material-symbols-outlined text-[#FFD700] scale-75" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <p className="font-sans text-xs md:text-sm italic text-primary leading-tight">&quot;My phone hasn&apos;t stopped ringing since the launch.&quot;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="mb-20">
              <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary block mb-4">The Solution</span>
              <h2 className="font-serif text-4xl md:text-[2.75rem] text-primary break-words">From Unreliable to Unstoppable</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Card 1 */}
              <div className="bg-surface rounded-lg p-10 space-y-6 luxury-bezier hover:-translate-y-2 group shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-error-container/30 flex items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-error">trending_down</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-xl text-primary">Slow Months</h3>
                  <p className="font-sans text-on-surface-variant text-sm leading-relaxed">Relying on seasonal fluctuations and hoping for emergency call-outs to fill the diary.</p>
                </div>
                <div className="pt-4 flex items-center gap-2 text-secondary font-semibold font-sans text-sm">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  Consistent Enquiries
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-surface rounded-lg p-10 space-y-6 luxury-bezier hover:-translate-y-2 group shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-secondary-container/30 flex items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-secondary">group_off</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-xl text-primary">Word of Mouth Only</h3>
                  <p className="font-sans text-on-surface-variant text-sm leading-relaxed">Exhausting your local network and fighting for the same small circle of referrals.</p>
                </div>
                <div className="pt-4 flex items-center gap-2 text-secondary font-semibold font-sans text-sm">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  Dominating Local SEO
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-surface rounded-lg p-10 space-y-6 luxury-bezier hover:-translate-y-2 group shadow-sm hover:shadow-md">
                <div className="w-12 h-12 bg-primary-container/20 flex items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-primary">history</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-xl text-primary">Admin Burnout</h3>
                  <p className="font-sans text-on-surface-variant text-sm leading-relaxed">Spending evenings answering basic pricing questions and scheduling simple site visits.</p>
                </div>
                <div className="pt-4 flex items-center gap-2 text-secondary font-semibold font-sans text-sm">
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  Automated Quotes
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32 bg-surface">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div>
                <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary block mb-4">Core Infrastructure</span>
                <h2 className="font-serif text-4xl md:text-[2.75rem] text-primary mb-8 break-words">Built for the Modern Plumber</h2>
                <p className="font-sans text-on-surface-variant leading-relaxed mb-12 max-w-lg">Every Craftline site is engineered with these six non-negotiable conversion tools.</p>
                <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-sans font-semibold luxury-bezier hover:bg-primary hover:text-on-primary transition-colors">
                  See All Tech Specs
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-8 border-l border-outline-variant/30 space-y-4">
                  <span className="material-symbols-outlined text-primary text-3xl">emergency</span>
                  <h4 className="font-sans font-bold text-primary">Emergency Button</h4>
                  <p className="font-sans text-xs text-on-surface-variant">High-visibility floating action for urgent leak call-outs.</p>
                </div>
                <div className="p-8 border-l border-outline-variant/30 space-y-4">
                  <span className="material-symbols-outlined text-primary text-3xl">receipt_long</span>
                  <h4 className="font-sans font-bold text-primary">Instant Quote Form</h4>
                  <p className="font-sans text-xs text-on-surface-variant">Intelligent multi-step forms that qualify your leads.</p>
                </div>
                <div className="p-8 border-l border-outline-variant/30 space-y-4">
                  <span className="material-symbols-outlined text-primary text-3xl">map</span>
                  <h4 className="font-sans font-bold text-primary">Google Maps</h4>
                  <p className="font-sans text-xs text-on-surface-variant">Interactive service area radius integration.</p>
                </div>
                <div className="p-8 border-l border-outline-variant/30 space-y-4">
                  <span className="material-symbols-outlined text-primary text-3xl">photo_library</span>
                  <h4 className="font-sans font-bold text-primary">Portfolio Gallery</h4>
                  <p className="font-sans text-xs text-on-surface-variant">High-res showrooms for your bathroom installs.</p>
                </div>
                <div className="p-8 border-l border-outline-variant/30 space-y-4">
                  <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                  <h4 className="font-sans font-bold text-primary">Review Badges</h4>
                  <p className="font-sans text-xs text-on-surface-variant">Live feeds from Checkatrade and Google Reviews.</p>
                </div>
                <div className="p-8 border-l border-outline-variant/30 space-y-4">
                  <span className="material-symbols-outlined text-primary text-3xl">smartphone</span>
                  <h4 className="font-sans font-bold text-primary">Mobile-First</h4>
                  <p className="font-sans text-xs text-on-surface-variant">Optimized for on-site customers using mobile.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mockup Showcase */}
        <section className="py-32 bg-[#334425] text-[#fcf9ee] overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-8 flex flex-col items-center text-center">
            <span className="font-sans text-[0.6875rem] uppercase tracking-[0.2rem] opacity-70 block mb-6">Featured Project</span>
            <h2 className="font-serif text-4xl md:text-[3.5rem] mb-16 leading-tight break-words">Swift Flow Plumbing</h2>
            <div className="relative w-full max-w-5xl">
              <div className="bg-on-surface h-[500px] w-full rounded-t-2xl border-x-[12px] border-t-[12px] border-on-surface-variant/20 relative shadow-2xl overflow-hidden">
                <img alt="Plumbing Website Desktop UI" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsY8e0Uzg_0G4rNvdCdVjJ4sOpAj7-jK_lsUKZVAX09qwejZMzSYfwXE0lElFHd021mDFkF_V-BNnnLC6YYIHaC7_Hl1Pf1GSn9an0Jeapv28jBx6xDHJMuiLBA7sZ-K7MtJXYurmRM7fMnIlnQ75xstqLebWYYkbzxCxFRHcy2WcEuNK7tB-ZHtqBtUjWCBl_Wx5znG9SO5keh10omKjBtWy25yBS9l2HqeBG-_3OtnuPsARSZZPkUZW26xNGt6Z_FMkqLgrkaA" />
              </div>
              <div className="absolute -bottom-12 right-0 md:right-12 w-48 h-96 bg-on-surface rounded-[2.5rem] border-[8px] border-on-surface-variant/30 shadow-2xl overflow-hidden z-10 hidden sm:block">
                <img alt="Plumbing Website Mobile UI" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV8aFfz7tSd7WuwgNfsyPEk_WUsAEZzwpkRGosCv9fGQuXbW5ITbd_1r_hUsM6AlBSun8H_FyMRxzpqlMBihagvBjLob3nwUxC55MJM0l97IX8TLc69K52dl2MuFAaOxL1aFEUrUkNO6z6g2p0yiFWhAymJl3Qm6FKvbd9uvrc7dGtith34G9SjEbiQC8jzya-hQSBax8EMrwmEPjwrG-MDJe6AoRHkkgm8i6Rs27onWO9CJ5VJLdIGh5WPviatWbXOyPpN1X_xg" />
              </div>
            </div>
            <p className="mt-24 font-sans text-lg opacity-80 max-w-2xl">A complete brand transformation that resulted in a 300% increase in high-ticket installation enquiries within 60 days.</p>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-32 bg-surface">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="bg-surface-container-low rounded-lg p-16 md:p-24 relative overflow-hidden">
              <span className="material-symbols-outlined absolute top-12 right-12 text-primary/10 text-[8rem]">format_quote</span>
              <div className="relative z-10 max-w-3xl">
                <h3 className="font-serif text-3xl md:text-[2.25rem] text-primary italic leading-tight mb-12 break-words">&quot;I was skeptical about spending money on a website when Checkatrade was working &apos;okay&apos;. But Craftline built me an asset that actually sells my work. I&apos;m now booking bathrooms 3 months in advance.&quot;</h3>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden grayscale">
                    <img alt="Dave Hutchinson" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1-ShTKgk8Z9I87T4sRI_WnW8javK1WdnrJlypokL5pAIDV_uOdZBRzygyE1PwWxGHf07tm3V56AvuadB1yZDoxnUQs597k92KpFls9uahsmdFDHFB7FJPH8nJwUeLJunsMQfbtjKgnlPaMqo3Zb0qzLPW43eMyfpriMB-KfPrLPgsesjapCneFAunH0oFeUhp3WKHSTa8Sqg5qqW4t-bUcZYiHmNnsOdBnqZfTIue9HfcXEkRWY6n41ABCKtF43Rl_mfb5pNeMA" />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-primary">Dave Hutchinson</p>
                    <p className="font-sans text-sm text-on-surface-variant">Owner, DH Plumbing &amp; Heating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 md:py-32 bg-surface">
          <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8">
              <h2 className="font-serif text-3xl md:text-[3.5rem] leading-[1.1] text-primary break-words">Get Your Plumbing Website</h2>
              <div className="space-y-2">
                <p className="font-sans text-lg md:text-xl text-on-surface-variant">Full Design &amp; Build</p>
                <p className="font-serif text-3xl md:text-4xl italic text-primary">Starting from £499</p>
              </div>
              <ul className="space-y-4">
                {[
                  'No monthly subscription fees',
                  'Completed in 14 days',
                  '12 months tech support included'
                ].map(item => (
                  <li key={item} className="flex items-center gap-4 text-sm md:text-base">
                    <span className="material-symbols-outlined text-secondary">check_circle</span>
                    <span className="font-sans text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/40 backdrop-blur-sm p-8 md:p-16 rounded-xl border border-outline-variant/30 shadow-[0_4px_20px_-10px_rgba(51,68,37,0.1)] transition-all duration-700 hover:bg-white/80 hover:shadow-2xl">
              <UnifiedForm tradeSector="Plumber" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
