'use client';

import React from 'react';

const industryPartners = [
  'Checkatrade', 'NICEIC', 'Gas Safe Register', 'Federation of Master Builders', 
  'TrustMark', 'Travis Perkins', 'City & Guilds', 'BSI Certified', 'SafeContractor'
];

export default function TradeStrip() {
  return (
    <section className="relative w-full bg-[#FCF9EE]/50 py-12 md:py-16 border-y border-primary/5 overflow-hidden">
      {/* Background Subtle Detail */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334425' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

      {/* Header Label */}
      <div className="relative z-20 flex flex-col items-center mb-10">
        <span className="font-sans text-[0.625rem] uppercase tracking-[0.25rem] text-primary font-bold mb-4">
          Industry Trusted & Verified
        </span>
        <div className="h-px w-8 bg-primary/30" />
      </div>

      {/* Premium Fade Mask */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#FCF9EE] via-[#FCF9EE]/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#FCF9EE] via-[#FCF9EE]/80 to-transparent z-10" />

      {/* Animation Container */}
      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee items-center whitespace-nowrap pause-on-hover px-4">
          {[1, 2].map((group) => (
            <div key={group} className="flex items-center">
              {industryPartners.map((partner, i) => (
                <div key={`${group}-${i}`} className="flex items-center group/item px-8 md:px-14">
                  {/* The Brand Name - Logo style treatment */}
                  <span className="font-serif italic text-2xl md:text-4xl tracking-tight text-primary/85 transition-all duration-700 group-hover/item:text-primary group-hover/item:scale-105 cursor-default text-primary/85">
                    {partner}
                  </span>
                  
                  {/* Premium Separator: Refined dot */}
                  <div className="ml-16 md:ml-28 w-1 h-1 rounded-full bg-primary/30 group-hover/item:bg-primary/50 transition-colors duration-500" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Detail */}
      <div className="mt-12 flex justify-center opacity-20">
        <div className="flex gap-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-1 h-1 rounded-full bg-primary" />
          ))}
        </div>
      </div>
    </section>
  );
}