import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UnifiedForm from '@/components/UnifiedForm';

export default function BarbersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container">
      <Navbar />
      <main className="flex-grow pt-[4.5rem]">
        {/* Section 1: Hero */}
        <section className="relative pt-12 pb-24 md:pt-32 md:pb-32 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary mb-4 block">Bespoke Digital Estates</span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.1] text-primary tracking-[-0.02em] mb-8">
                A Website as <br className="hidden sm:block" />Sharp as Your Cuts.
              </h1>
              <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-lg mb-12 leading-relaxed">
                Elevate your shop beyond the chair. We build high-end digital environments for master barbers who demand more than a standard template.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <button className="bg-primary text-on-primary rounded-full px-8 py-4 font-sans text-sm font-bold hover:bg-primary-container luxury-bezier transition-all">
                  Get My Barbershop Website
                </button>
              </div>
            </div>
            <div className="md:col-span-5 relative mt-12 md:mt-0">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <img alt="Professional barber at work" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnQu1deeckwE50G_VHNuV74sTVDaZ-cXd1cs5hQzijJ1o8MhTE3VRUZr8_77iQJ3Lz5tVnGOD0LQGqxu58qfEyEp1Fv5dZzLZX3vYvfWOe_ual56DLyMzm5UYgf9R3Ii6gX911tM6eQnpCotQPjruYL3j7JGJqUA6LceXwKSg94vgwxtRX_VQBWnlwWR9sDwsS1D2Bwbe9R0KW1pCY05aXID9aBZolb4-aQOgwW7g2zjbZctnU_SOjEDnoQvtaMUEQhJ_IEHQHTw" />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-surface-container-highest p-4 md:p-8 rounded-lg shadow-xl hidden sm:block border border-outline-variant/20">
                <span className="block font-serif italic text-lg md:text-xl text-primary">Est. 2026</span>
                <span className="text-[0.6rem] md:text-[0.6875rem] uppercase tracking-widest text-secondary">Craftline Heritage</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 2: Pain Points (Asymmetric Layout) */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
              <div className="md:col-span-5">
                <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary mb-4 block">The Friction</span>
                <h2 className="font-serif text-[1.75rem] text-primary mb-6">Social Media is a Landlord, Not an Asset.</h2>
                <div className="w-20 h-px bg-primary/20 mb-8"></div>
              </div>
              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-3xl text-primary">cancel_schedule_send</span>
                  <h3 className="font-sans text-lg font-bold text-primary">Relying on Instagram DMs</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Stop chasing lost messages in a crowded inbox. Your business shouldn&apos;t depend on an algorithm&apos;s whim or a messy direct message thread.</p>
                </div>
                <div className="space-y-4">
                  <span className="material-symbols-outlined text-3xl text-primary">event_busy</span>
                  <h3 className="font-sans text-lg font-bold text-primary">No Online Booking</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">Losing clients to the &quot;I&apos;ll call later&quot; trap. Provide a seamless, 24/7 reservation experience that mirrors the precision of your fades.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 3: Features (Bento Grid) */}
        <section className="py-24 bg-background">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="text-center mb-20">
              <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary mb-4 block">The Toolkit</span>
              <h2 className="font-serif text-[2.5rem] text-primary">Masterfully Crafted Features</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="md:col-span-2 bg-surface-container rounded-lg p-10 flex flex-col md:flex-row gap-8 items-center border border-outline-variant/10">
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-primary mb-4">Online Booking Widget</h3>
                  <p className="text-on-surface-variant mb-6">A frictionless reservation system integrated directly into your aesthetic. No redirects, just pure conversion.</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-secondary">check_circle</span> Automated SMS Reminders</li>
                    <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-secondary">check_circle</span> Deposit Payments</li>
                  </ul>
                </div>
                <div className="w-full md:w-64 aspect-square bg-surface-container-highest rounded-lg flex items-center justify-center p-6 shadow-inner">
                  <div className="w-full h-full bg-white rounded shadow-sm p-4 space-y-3 flex flex-col justify-center">
                    <div className="h-2 w-1/2 bg-surface-dim rounded"></div>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="aspect-square bg-primary-container/20 rounded-full"></div>
                      <div className="aspect-square bg-primary-container/20 rounded-full"></div>
                      <div className="aspect-square bg-primary rounded-full"></div>
                      <div className="aspect-square bg-primary-container/20 rounded-full"></div>
                    </div>
                    <div className="h-2 w-full bg-surface-dim rounded"></div>
                    <div className="h-8 w-full bg-primary rounded-full mt-2"></div>
                  </div>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="bg-primary text-on-primary rounded-lg p-10 flex flex-col justify-between overflow-hidden relative">
                <div>
                  <h3 className="font-serif text-2xl mb-4">Instagram Feed Embed</h3>
                  <p className="text-on-primary/70 text-sm">Synchronize your latest work automatically. Your website stays as fresh as your morning appointments.</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-2 opacity-40">
                  <div className="aspect-square bg-white/20 rounded"></div>
                  <div className="aspect-square bg-white/20 rounded"></div>
                  <div className="aspect-square bg-white/20 rounded"></div>
                  <div className="aspect-square bg-white/20 rounded"></div>
                </div>
                <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-white/5">photo_camera</span>
              </div>
              {/* Feature 3 */}
              <div className="md:col-span-3 bg-surface-container-low rounded-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-outline-variant/10">
                <div className="order-2 md:order-1">
                  <img alt="Pricing menu on slate board" className="rounded shadow-lg w-full object-cover aspect-video" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATcBxJvKugFCUyaCzke0V4uDH4oKU1iFEKRU7dTD8JYEn41OhV1ytyGTAHICyplHQbPqoUIQKLlInCnXigkppF0d6MlUBT3cNwPRYRNgniH5d_Y6V_4tmr2lgYLid3QyoMPUDKVmhoqPBEyYp8Bt1yV4UUbOIh9kIH6IaDlQcSscTCqXpEbW5KLuU9Vp6ClIE6-kgR8gZrMZYFufttZMa18KCMFNMurWpdNoc72181WxsqhbxsIujc2vIFQvIvIU9zsfuVz5nu6A" />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="font-serif text-2xl text-primary mb-4">Bespoke Pricing Menu</h3>
                  <p className="text-on-surface-variant mb-6">Ditch the PDFs. A clean, interactive menu that displays your services with editorial elegance.</p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end border-b border-outline-variant/30 pb-2">
                      <span className="font-sans font-bold">The Heritage Cut</span>
                      <span className="font-serif italic">£45</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-outline-variant/30 pb-2">
                      <span className="font-sans font-bold">Beard Sculpt &amp; Steam</span>
                      <span className="font-serif italic">£30</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 4: Mockup */}
        <section className="py-24 bg-surface-container">
          <div className="max-w-[1280px] mx-auto px-8 text-center">
            <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary mb-4 block">Live Showcase</span>
            <h2 className="font-serif text-[2.5rem] text-primary mb-12">The Sharp House Barbershop, Manchester</h2>
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-surface-container-highest rounded-t-xl p-4 border-b border-outline-variant/20 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-error/20"></div>
                <div className="w-3 h-3 rounded-full bg-secondary/20"></div>
                <div className="w-3 h-3 rounded-full bg-primary/20"></div>
              </div>
              <div className="shadow-2xl rounded-b-xl overflow-hidden border border-outline-variant/20 bg-background">
                <img alt="Luxury Barbershop Interior" className="w-full grayscale hover:grayscale-0 transition-all duration-700 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPPq8wTo6JSPB79LrFBZZuLtra2bUymP9E6ND4_SdpU0t5dRK0VB9eEDvm5t5Ig14_X8aC8CHsSGOSQTYngA79TAbOAMW338cRuO07H1QaL7N_v5u9i7zip0W5l0jfdJHunrIvLWXErSJWitXWrGu3oo8-AG9wo2q36nwNQcu8hMen7ZBWaFsx-td-SGneOp9bGD9MQ7Htjer6P2pELewM4vSQ-OoyDgz9zAbLxUZ0SeLmhDF65yER4pZrjNDcUOQAjKAMmgPsog" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 5: Testimonial */}
        <section className="py-24 bg-background">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="bg-primary text-on-primary rounded-lg p-16 md:p-24 relative overflow-hidden">
              <span className="material-symbols-outlined text-9xl absolute -top-10 -left-10 text-white/5 rotate-12">format_quote</span>
              <div className="relative z-10 max-w-3xl">
                <h2 className="font-serif text-[2rem] leading-snug mb-10 italic">&quot;My website from Craftline is now the primary source of my bookings. It gives my clients the same premium feeling they get when they walk through the door.&quot;</h2>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-primary-container overflow-hidden">
                    <img alt="Marcus Reid" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuX8UWTic1jmED-NZCz_J688zKqnKESosfafpxXYqYfJdJulDuOlrLAGn8RgFAK-nHodP8QYEPZ0jsWmANygDj-8zpizmnB1Sczd-LEiw2ODypGLEe2EbP7Aa6xTwbubGl3oznhQzbK7CEHWPZkWPuKHwwYmhQYrZCEBfnEfwr_kmz9hRuJGE4jE4dAJPYoTQ9dqYg8d6TeZxNrwIt4oHFEQnSnIhYpiLjANRLVW7Q4rtWL68paQ5xX4PnMk51f4zP3Y05KfPBew" />
                  </div>
                  <div>
                    <p className="font-sans font-bold">Marcus Reid</p>
                    <p className="text-on-primary/60 text-sm">Master Barber, Reid &amp; Co.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section 6: Pricing CTA */}
        <section className="py-24 bg-surface-container-low border-t border-outline-variant/10">
          <div className="max-w-[1280px] mx-auto px-8 text-center">
            <h2 className="font-serif text-[2.5rem] text-primary mb-8">Ready to Own Your Digital Real Estate?</h2>
            <p className="font-sans text-xl text-on-surface-variant mb-12">Get Your Barbershop Website — from £499</p>
            <div className="flex justify-center">
              <a className="bg-primary text-on-primary rounded-full px-16 py-6 font-sans text-sm font-bold hover:bg-primary-container luxury-bezier transition-all inline-block shadow-lg" href="#contact">
                Start My Project
              </a>
            </div>
          </div>
        </section>
        
        {/* Section 7: Inline Form */}
        <section className="py-24 md:py-32 bg-background" id="contact">
          <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
            <div>
              <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary mb-4 block">Consultation</span>
              <h2 className="font-serif text-3xl md:text-[2.5rem] text-primary mb-6 leading-tight">Tell Us About <br className="hidden md:block" />Your Shop.</h2>
              <p className="text-on-surface-variant text-sm md:text-base max-w-md leading-relaxed">Our team will review your requirements and get back to you with a bespoke digital proposal within 24 hours.</p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm p-8 md:p-16 rounded-xl border border-outline-variant/30 shadow-[0_4px_20px_-10px_rgba(51,68,37,0.1)] transition-all duration-700 hover:bg-white/80 hover:shadow-2xl">
              <UnifiedForm tradeSector="Barber" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
