import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UnifiedForm from '@/components/UnifiedForm';

export default function CarMechanicsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container">
      <Navbar />
      <main className="flex-grow pt-[4.5rem]">
        {/* Hero Section */}
        <section className="relative pt-12 pb-24 lg:pt-32 px-8 overflow-hidden">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 z-10">
              <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary mb-6 block">Trade Specialist: Automotive Excellence</span>
              <h1 className="font-serif text-3xl sm:text-5xl md:text-[3.5rem] leading-[1.1] text-primary tracking-[-0.02em] mb-8">
                More MOT Bookings.<br />Less Empty Ramps.
              </h1>
              <p className="font-body text-base md:text-lg text-on-surface-variant max-w-xl mb-12 leading-relaxed">
                We build high-performance digital presence for elite independent garages. Bridge the gap between local craftsmanship and corporate chains with a website that converts local search into booked bays.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <button className="rounded-full bg-primary text-on-primary px-8 py-5 font-sans font-bold hover:bg-primary-container transition-all luxury-bezier">
                  Get My Garage Website
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-[0_40px_100px_-20px_rgba(74,92,58,0.15)] relative transform rotate-1">
                <img alt="Professional mechanic" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTCGnhANI6RAsEr2FzNis9QIhihJ7dI5tdqqU0ZkJw4jKumdwthSsERKGBEoKqnDqjbkeY1FfHBDYqyKqzuy4smipggAK9BLO6IN-jSLhuSxR4eJ7MuWb7Zkzw0fnu761k2Cqw-zJL_njtaK8Nl05_kEs2cVw8y6SRpm7U6_I-yQXwUzGzD-nEHLhhKFnlrA8ReP2k19mZNHTKSre2rE2H6QQiSvpQqo7qTxw0qqH018ajwXAesMhMw_gLwFDC5-cZDOQ6A3Rjkg" />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div>
                <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary mb-4 block">The Challenge</span>
                <h2 className="font-serif text-[1.75rem] text-primary mb-8 leading-tight">The Independent Mechanic&apos;s Dilemma</h2>
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <span className="material-symbols-outlined text-primary text-3xl shrink-0">wrong_location</span>
                    <div>
                      <h3 className="font-sans text-lg font-bold text-primary mb-2">Invisible on Google</h3>
                      <p className="text-on-surface-variant leading-relaxed">Local motorists are searching for &quot;mechanic near me&quot; every minute. If you&apos;re not on the first page, you&apos;re giving business to the national chains.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <span className="material-symbols-outlined text-primary text-3xl shrink-0">groups</span>
                    <div>
                      <h3 className="font-sans text-lg font-bold text-primary mb-2">Losing to the Chains</h3>
                      <p className="text-on-surface-variant leading-relaxed">Halfords and Kwik Fit win because they make booking easy. Your craftsmanship is superior—your digital booking experience should be too.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary p-12 rounded-lg shadow-xl text-[#fcf9ee]">
                <h3 className="font-serif text-2xl mb-6 italic">&quot;A professional digital front door is no longer optional for the trade.&quot;</h3>
                <p className="font-body opacity-80 leading-relaxed mb-8">Independent workshops provide better care, but corporate budgets often win the digital race. We level the playing field by providing heritage-quality design with modern conversion tech.</p>
                <div className="h-px bg-[#fcf9ee]/20 w-full mb-8"></div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-variant">
                    <img alt="Garage owner Terry Walsh" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy-xNZOxIEKPHpN9d4bYMRH5UvaGzW3OWbULNWNv0rH7idjr-fHroqv4bnkbnirmKhY35uQx5puk3q_PwlckV0ZRw97lTi77tVmnI3kuS18s1V0IAlvnBr8RxNSta_61Ux8RgHfUFYWQoOkMGWJYQ7XyJgpXMUTlpQkrPqx6bhaCF2e3tmAWtlUI34IRsLVvIv215ycD9Gl_NiBm7zHw-x9ODq9ooxsOKDYpTcMBxbqaR16pnZ_JCzbSHAISmEAPjoJ80JoJR41w" />
                  </div>
                  <div>
                    <p className="font-sans font-bold">Terry Walsh</p>
                    <p className="text-xs opacity-60 uppercase tracking-widest">Master Mechanic &amp; Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32 bg-background">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary mb-4 block">The Solution</span>
                <h2 className="font-serif text-[2.5rem] leading-[1.1] text-primary">Engineered for Automotive Success</h2>
              </div>
              <p className="font-body text-on-surface-variant max-w-sm mb-2">Our bespoke systems are built specifically for the workflow of a busy workshop.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-surface-container-lowest rounded-lg group hover:bg-surface-container transition-colors luxury-bezier shadow-sm hover:shadow">
                <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center text-primary mb-8">
                  <span className="material-symbols-outlined text-2xl">calendar_today</span>
                </div>
                <h3 className="font-serif text-xl mb-4 text-primary">MOT Booking Engine</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">Automated scheduling that fills your bays without you picking up the phone. Syncs directly with your workshop calendar.</p>
              </div>
              <div className="p-8 bg-surface-container-lowest rounded-lg group hover:bg-surface-container transition-colors luxury-bezier shadow-sm hover:shadow">
                <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center text-primary mb-8">
                  <span className="material-symbols-outlined text-2xl">build</span>
                </div>
                <h3 className="font-serif text-xl mb-4 text-primary">Full Service Catalog</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">From diagnostics to suspension work. Beautifully presented service lists that build trust and authority in your local area.</p>
              </div>
              <div className="p-8 bg-surface-container-lowest rounded-lg group hover:bg-surface-container transition-colors luxury-bezier shadow-sm hover:shadow">
                <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center text-primary mb-8">
                  <span className="material-symbols-outlined text-2xl">pin_drop</span>
                </div>
                <h3 className="font-serif text-xl mb-4 text-primary">Local SEO &amp; Map Mastery</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">We ensure your garage is the first thing locals see on Google Maps when they have car trouble. Integrated location data.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mockup Showcase */}
        <section className="py-24 bg-primary text-[#fcf9ee]">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="text-center mb-16">
              <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] opacity-60 mb-4 block">Active Project Showcase</span>
              <h2 className="font-serif text-[2rem]">Redline Garage, Birmingham</h2>
            </div>
            <div className="relative max-w-5xl mx-auto">
              {/* Browser Mockup */}
              <div className="bg-surface-container rounded-t-xl overflow-hidden shadow-2xl border border-white/10">
                <div className="h-10 bg-surface-dim flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-error/20"></div>
                  <div className="w-3 h-3 rounded-full bg-secondary/20"></div>
                  <div className="w-3 h-3 rounded-full bg-primary/20"></div>
                </div>
                <img alt="Digital mockup" className="w-full grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8VSedadtkMwiWpGBBlheXOX2EaVahkURH_nYuFdM35Qxxmt1fnrLJGDR2AkcLEetm7311YE2HWBUC3-4Qoky3yxqR3RCjjks22ZsJL7OI-JcIMGVEaapNwQtk81skgOcv4J8ueNTq2rORbHdSBqM1E4brh4mZVb17DkhbNrzBpzbe4B6j6RIcrnmP3MVFufVtPKqRsFelUg4iuC3oWieHFvemgZr1itE1LqZWYGRafNmeiSV2hfRywc8UZ0vFbPhMzX6BilaM9g" />
              </div>
              <div className="absolute -right-8 bottom-12 bg-secondary p-8 rounded-lg shadow-2xl hidden lg:block max-w-xs text-on-primary">
                <p className="font-serif text-4xl mb-2">140%</p>
                <p className="font-sans text-xs uppercase tracking-widest opacity-80">Increase in organic MOT bookings since launch.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & Form */}
        <section className="py-24 md:py-32 bg-surface">
          <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-3xl md:text-[2.5rem] leading-[1.1] text-primary mb-8 px-0">Get Your Garage Website — <br className="hidden sm:block" />from £499</h2>
              <p className="text-on-surface-variant text-sm md:text-base mb-12 leading-relaxed">Join the network of elite trades who have reclaimed their local digital territory. All our builds include mobile optimization, SEO foundations, and high-speed UK hosting.</p>
              <ul className="space-y-4 mb-12">
                {[
                  'Professional Trade Branding',
                  'MOT & Service Booking Integration',
                  'Local SEO Optimization'
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 font-sans font-medium text-primary text-sm md:text-base">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-white/40 backdrop-blur-sm p-8 md:p-16 rounded-xl border border-outline-variant/30 shadow-[0_4px_20px_-10px_rgba(51,68,37,0.1)] transition-all duration-700 hover:bg-white/80 hover:shadow-2xl">
                <UnifiedForm tradeSector="Car Mechanic" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
