import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-primary/90 text-background w-full pt-16 md:pt-24 pb-12">
      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        <div className="space-y-4">
          <span className="font-serif text-3xl text-background block">CRAFTLINE</span>
          <p className="font-sans text-sm leading-relaxed text-background/60 max-w-xs">
            Building the digital foundations for the world&apos;s most trusted craftsmen. Heritage design for the modern era.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-background">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/gallery" className="font-sans text-sm text-background/60 hover:text-background transition-opacity">The Gallery</Link></li>
              <li><a href="#" className="font-sans text-sm text-background/60 hover:text-background transition-opacity">Journal</a></li>
              <li><a href="#" className="font-sans text-sm text-background/60 hover:text-background transition-opacity">Our Process</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-background">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="font-sans text-sm text-background/60 hover:text-background transition-opacity">Terms</a></li>
              <li><a href="#" className="font-sans text-sm text-background/60 hover:text-background transition-opacity">Privacy</a></li>
              <li><Link href="/contact" className="font-sans text-sm text-background/60 hover:text-background transition-opacity">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-background">HQ</h4>
          <p className="font-sans text-sm text-background/60">Mayfair Chambers,<br />London, W1K 3BN</p>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-8 mt-16 md:mt-24 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-sans text-xs md:text-sm text-background/40 text-center md:text-left">© 2026 Craftline Heritage. All rights reserved. Built for the Modern Estate.</p>
        <div className="flex gap-8">
          <span className="font-sans text-[0.6875rem] uppercase tracking-widest text-background/40">London, UK</span>
          <span className="font-sans text-[0.6875rem] uppercase tracking-widest text-background/40">est. 2026</span>
        </div>
      </div>
    </footer>
  );
}
