import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="max-w-[1280px] mx-auto px-8 py-16 md:py-32 grid grid-cols-1 md:grid-cols-10 gap-12 md:gap-16 items-center">
      <div className="md:col-span-6 space-y-8">
        <div className="space-y-4">
          <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary font-bold">UK Web Design Agency</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.1] text-primary -tracking-[0.02em] break-words">
            Websites Built for Britain&apos;s <span className="italic">Tradespeople.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
            We combine high-end London editorial design with the grit of British craftsmanship to build digital homes for those who build the nation.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          <Link href="/gallery" className="bg-primary text-on-primary px-10 py-5 rounded-full font-medium hover:bg-primary-container luxury-bezier duration-300 text-sm text-center">See Our Work</Link>
          <Link href="/contact" className="border border-outline-variant/30 text-primary px-10 py-5 rounded-full font-medium hover:bg-surface-container-high luxury-bezier duration-300 text-sm text-center">Get a Free Quote</Link>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-surface-container overflow-hidden flex items-center justify-center text-xs font-bold text-secondary">
                {['JA', 'SJ', 'MT'][i - 1]}
              </div>
            ))}
          </div>
          <span className="text-sm font-medium text-primary flex items-center gap-1 text-center sm:text-left">
            <span className="material-symbols-outlined text-yellow-600 text-[18px]">star</span>
            Rated 5.0 by 150+ Trade Businesses
          </span>
        </div>
      </div>
      <div className="md:col-span-4 relative mt-8 md:mt-0">
        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-surface-container-high">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw5NZZdkoXQxHAbrB6wFBF_W19-bkb0Nfhhhx56xue1hE8Oif_luA4b1uvCDTTRHX1-EtPxwSUicpndCnaQ9BNMgsGma0wmQU0eVRbxq-6YQyrrB49WoDGR5x24n0zofOc0m4LEFqK9yj0F9Rk5P85CMUboKSbsesMHuOuVhNoN-lU5xeLe_mtS8nyvjCQT4Sx91vqzNHme4RE-iCp3YkU3qDnN5xIQHbJPKx5nYjmhwBJ2BTkIu9JR7ZSfp8msemMie3ho7U2iw"
            alt="British tradesperson at work"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-8 -left-8 bg-surface-container p-6 rounded-lg shadow-xl hidden xl:block border border-outline-variant/10">
          <span className="block font-serif text-3xl font-bold text-primary">24/7</span>
          <span className="text-xs uppercase tracking-widest text-secondary font-bold">Priority Support</span>
        </div>
      </div>
    </section>
  );
}
