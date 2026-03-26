'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import UnifiedForm from '@/components/UnifiedForm';

export default function ContactPage() {

  return (
    <div className="bg-background min-h-screen flex flex-col selection:bg-primary-container selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-on-primary py-24 md:py-48 px-8 overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(145deg, #334425 0%, #4a5c3a 100%)' }}></div>
          <div className="max-w-[1280px] mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
              <div className="md:col-span-8">
                <span className="font-sans text-[0.625rem] uppercase tracking-[0.3rem] text-secondary-fixed-dim/60 mb-6 md:mb-8 block animate-fade-up opacity-0 [animation-delay:0.3s] font-bold">Inquiries</span>
                <h1 className="font-serif text-5xl sm:text-7xl lg:text-[9.5rem] leading-[0.9] tracking-[-0.04em] mb-2 animate-fade-up opacity-0 [animation-delay:0.5s] text-white break-words">Let&apos;s Talk.</h1>
              </div>
              <div className="md:col-span-4 md:pb-8">
                <p className="font-sans text-base md:text-xl text-secondary-fixed-dim/60 leading-relaxed border-l border-white/10 pl-6 md:pl-10 animate-fade-up opacity-0 [animation-delay:0.7s] max-w-sm">
                  Whether it&apos;s a heritage restoration or a new estate build, your vision deserves the precision of master craft.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section: Asymmetric Layout */}
        <section className="bg-background py-16 md:py-40 px-8">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32">

            {/* Left Column: Agency Info */}
            <div className="lg:col-span-5 space-y-12 md:space-y-20">
              <div className="bg-white/40 backdrop-blur-sm p-8 md:p-16 rounded-xl border border-outline-variant/30 relative overflow-hidden group transition-all duration-700 hover:bg-white/80 shadow-[0_4px_20px_-10px_rgba(51,68,37,0.1)] hover:shadow-2xl">
                <div className="relative z-10">
                  <h2 className="font-serif text-3xl md:text-4xl text-primary mb-10 md:mb-14 tracking-tight">The Estate Office</h2>
                  <div className="space-y-8 md:space-y-12">
                    <div className="flex items-start gap-6 md:gap-8 group/item">
                      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-secondary/10 flex items-center justify-center transition-transform duration-500 group-hover/item:scale-110">
                        <span className="material-symbols-outlined text-secondary text-xl md:text-2xl">location_on</span>
                      </div>
                      <div>
                        <p className="font-sans text-[0.625rem] md:text-[0.6875rem] font-bold text-primary uppercase tracking-widest mb-2 md:mb-3 opacity-60">Address</p>
                        <address className="font-sans text-lg md:text-xl text-on-surface-variant not-italic leading-relaxed font-medium">
                          14 Heritage Mews, Kensington<br /> London, W8 4NS, UK
                        </address>
                      </div>
                    </div>
                    <div className="flex items-start gap-6 md:gap-8 group/item">
                      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-secondary/10 flex items-center justify-center transition-transform duration-500 group-hover/item:scale-110">
                        <span className="material-symbols-outlined text-secondary text-xl md:text-2xl">call</span>
                      </div>
                      <div>
                        <p className="font-sans text-[0.625rem] md:text-[0.6875rem] font-bold text-primary uppercase tracking-widest mb-2 md:mb-3 opacity-60">Phone</p>
                        <p className="font-sans text-lg md:text-xl text-on-surface-variant font-medium">+44 (0) 20 7946 0123</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6 md:gap-8 group/item">
                      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-secondary/10 flex items-center justify-center transition-transform duration-500 group-hover/item:scale-110">
                        <span className="material-symbols-outlined text-secondary text-xl md:text-2xl">mail</span>
                      </div>
                      <div>
                        <p className="font-sans text-[0.625rem] md:text-[0.6875rem] font-bold text-primary uppercase tracking-widest mb-2 md:mb-3 opacity-60">Email</p>
                        <p className="font-sans text-lg md:text-xl text-on-surface-variant font-medium">commissions@craftline.uk</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6 md:gap-8 group/item">
                      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-secondary/10 flex items-center justify-center transition-transform duration-500 group-hover/item:scale-110">
                        <span className="material-symbols-outlined text-secondary text-xl md:text-2xl">schedule</span>
                      </div>
                      <div>
                        <p className="font-sans text-[0.625rem] md:text-[0.6875rem] font-bold text-primary uppercase tracking-widest mb-2 md:mb-3 opacity-60">Hours</p>
                        <p className="font-sans text-lg md:text-xl text-on-surface-variant font-medium leading-relaxed">
                          Mon — Fri: 09:00 - 18:00<br />
                          Sat: By Appointment Only
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Inset */}
              <div className="rounded-2xl overflow-hidden h-[300px] md:h-[450px] shadow-lg relative group cursor-pointer border border-outline-variant/30">
                <img
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-[1.5s] scale-105 group-hover:scale-100"
                  alt="Architectural map of Kensington, London"
                  src="/images/contact page/map for conatct page.png"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-700"></div>
                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/90 backdrop-blur-md px-6 py-4 md:px-8 md:py-5 rounded-full flex items-center gap-4 transform transition-all duration-500 hover:scale-105 hover:bg-primary hover:text-white shadow-2xl">
                  <span className="material-symbols-outlined text-sm md:text-base">explore</span>
                  <span className="font-sans text-[0.6rem] md:text-xs font-bold uppercase tracking-[0.2rem]">Get Directions</span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white/40 backdrop-blur-sm p-8 md:p-16 rounded-xl border border-outline-variant/30 shadow-[0_4px_20px_-10px_rgba(51,68,37,0.1)] transition-all duration-700 hover:bg-white/80 hover:shadow-2xl">
                <div className="mb-10 md:mb-12">
                  <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary mb-4 block font-bold">Consultation</span>
                  <h2 className="font-serif text-3xl md:text-[2.5rem] text-primary mb-6 leading-tight md:text-5xl">Tell Us About <br className="hidden md:block" />Your Vision.</h2>
                  <p className="text-on-surface-variant max-w-md font-sans text-base md:text-lg leading-relaxed">Our team will review your requirements and get back to you with a bespoke digital proposal within 24 hours.</p>
                </div>
                <UnifiedForm />
              </div>
            </div>
          </div>
        </section>

        {/* Brand Detail Inset */}
        <section className="max-w-[1280px] mx-auto px-8 pb-24 md:pb-40">
          <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-1.5 w-full overflow-hidden shadow-2xl border border-outline-variant/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 items-stretch">
              <div className="relative overflow-hidden h-[400px] md:h-[600px] rounded-2xl group">
                <img
                  className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110"
                  alt="Craftsman Woodwork Detail"
                  src="/images/contact page/wood-shape.png"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-1000"></div>
              </div>
              <div className="p-10 md:p-24 flex flex-col justify-center bg-white/60 text-center md:text-left items-center md:items-start">
                <span className="font-sans text-[0.6875rem] uppercase tracking-[0.3rem] text-primary/60 mb-6 md:mb-8 block font-bold">Our Commitment</span>
                <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl text-primary mb-8 md:mb-10 leading-[1.1] tracking-tight break-words">Every detail is an heirloom.</h3>
                <p className="font-sans text-on-surface-variant text-lg md:text-xl leading-relaxed mb-8 md:mb-12 max-w-lg opacity-80">
                  We don&apos;t just build; we preserve legacies. Our process is collaborative, transparent, and driven by a standard of excellence that spans generations.
                </p>
                <div className="h-0.5 w-32 bg-primary/10"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
