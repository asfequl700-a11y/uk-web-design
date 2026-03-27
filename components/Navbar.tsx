'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tickerItems = [
    "Websites Built for Britain's Tradespeople.",
    "UK WEB DESIGN",
    "Limited Availability for Q4 Projects",
    "UK WEB DESIGN",
    "Websites Built for Britain's Tradespeople.",
    "UK WEB DESIGN",
    "Limited Availability for Q4 Projects",
    "UK WEB DESIGN",
  ];

  const navLinks = [
    { name: 'Our Story', href: '/' },
    { name: 'The Gallery', href: '/gallery' },
    { name: 'Pricing', href: '/pricing' },
  ];

  const tradeLinks = [
    { name: 'Barbers', href: '/trades/barbers' },
    { name: 'Car Mechanics', href: '/trades/car-mechanics' },
    { name: 'Carpenters', href: '/trades/carpenters' },
    { name: 'Plumbers', href: '/trades/plumbers' },
  ];

  return (
    <>
      {/* Ticker - Hidden on Mobile */}
      <nav className="fixed top-0 w-full h-8 hidden md:flex items-center overflow-hidden bg-secondary dark:bg-primary z-[60] px-0 border-b border-on-secondary/5">
        <div className="marquee-scroll-infinite flex items-center whitespace-nowrap">
          {[1, 2].map((group) => (
            <div key={group} className="flex items-center gap-12 pr-12">
              {tickerItems.map((item, i) => (
                <div key={`${group}-${i}`} className="flex items-center gap-12">
                  {item === "UK WEB DESIGN" ? (
                    <div className="flex items-center gap-2">
                      <svg 
                        className="w-5 h-5 text-background" 
                        viewBox="0 0 500 500" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          d="M250 50L450 250L250 450L50 250L250 50ZM250 120L120 250L250 380L380 250L250 120Z" 
                          fill="currentColor"
                        />
                        <path d="M250 210V450L330 370L250 210Z" fill="#6B8E6F" />
                        <path d="M250 210L170 370L250 450V210Z" fill="#7FA684" />
                      </svg>
                      <span className="font-serif text-lg italic text-background tracking-tight">UK WEB DESIGN</span>
                    </div>
                  ) : (
                    <span className="font-sans text-[0.625rem] uppercase tracking-[0.12rem] text-background/90">{item}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </nav>

      <header className={`sticky w-full z-50 shadow-[0_20px_80px_-10px_rgba(74,92,58,0.08)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isMobileMenuOpen ? 'top-0 bg-background dark:bg-primary' : 'top-0 md:top-8 bg-background/80 dark:bg-primary/80 backdrop-blur-xl'}`}>
        <div className="max-w-[1280px] mx-auto flex justify-between items-center py-6 px-8">
          <Link href="/" className="relative z-[70] flex items-center gap-3 group">
            <svg 
              className="w-10 h-10 md:w-12 md:h-12" 
              viewBox="0 0 500 500" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M250 50L450 250L250 450L50 250L250 50ZM250 120L120 250L250 380L380 250L250 120Z" 
                fill="currentColor"
                className="text-primary dark:text-background"
              />
              <path 
                d="M250 210V450L330 370L250 210Z" 
                fill="#6B8E6F" 
              />
              <path 
                d="M250 210L170 370L250 450V210Z" 
                fill="#7FA684" 
              />
            </svg>
            <span className="font-serif text-[1rem] md:text-[1.2rem] font-bold tracking-tight transition-colors text-primary dark:text-background leading-[0.9] select-none">
              UK WEB<br />DESIGN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm font-medium text-primary/70 dark:text-background/70 hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="relative group">
                <div className="font-sans text-sm font-medium text-primary/70 dark:text-background/70 hover:text-secondary transition-colors duration-300 py-2 cursor-pointer flex gap-1 items-center">
                  For Trades
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="absolute left-0 top-full pt-1 w-48 opacity-0 pointer-events-none translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-300 z-50">
                  <div className="bg-background dark:bg-primary border border-primary/10 dark:border-background/10 rounded-lg shadow-xl overflow-hidden flex flex-col">
                    {tradeLinks.map((trade) => (
                      <Link
                        key={trade.name}
                        href={trade.href}
                        className="px-4 py-3 font-sans text-sm text-primary dark:text-background hover:bg-primary/5 dark:hover:bg-background/10 transition-colors"
                      >
                        {trade.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-6">
            <Link href="/contact" className="hidden sm:block relative z-[70] bg-primary text-on-primary px-8 py-3 rounded-full font-medium hover:bg-primary-container luxury-bezier duration-300 transform active:scale-95 text-xs uppercase tracking-widest">
              Get a Free Quote
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative flex flex-col gap-1.5 z-[70] p-2"
              aria-label="Toggle Menu"
            >
              <div className={`w-6 h-0.5 bg-primary dark:bg-background transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-0.5 bg-primary dark:bg-background transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-primary dark:bg-background transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`absolute top-full left-0 w-full bg-background dark:bg-primary shadow-2xl border-t border-primary/10 dark:border-background/10 md:hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden ${
            isMobileMenuOpen ? 'max-h-[800px] opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col gap-6 p-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ transitionDelay: isMobileMenuOpen ? `${100 + index * 50}ms` : '0ms' }}
                className={`font-serif text-3xl text-primary dark:text-background border-b border-primary/10 dark:border-background/10 pb-4 transition-all duration-500 ease-out transform ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div 
              style={{ transitionDelay: isMobileMenuOpen ? `${100 + navLinks.length * 50}ms` : '0ms' }}
              className={`flex flex-col gap-4 mt-2 transition-all duration-500 ease-out transform ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}
            >
              <span className="font-sans text-[0.6875rem] uppercase tracking-[0.2rem] text-secondary font-bold">For Trades</span>
              <div className="grid grid-cols-2 gap-4">
                {tradeLinks.map((trade) => (
                  <Link
                    key={trade.name}
                    href={trade.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-sans text-lg text-primary/70 dark:text-background/70 hover:text-secondary transition-colors"
                  >
                    {trade.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ transitionDelay: isMobileMenuOpen ? `${100 + (navLinks.length + 1) * 50}ms` : '0ms' }}
              className={`mt-4 bg-primary dark:bg-background text-on-primary dark:text-primary text-center py-4 rounded-full font-sans font-bold uppercase tracking-widest text-sm shadow-xl transition-all duration-500 ease-out transform ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              }`}
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
