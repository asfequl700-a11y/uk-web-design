import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We visit your workshop or site to understand the grit and detail of your work.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Bespoke UI concepts crafted to mirror the high-end editorial look of the heritage trades.',
  },
  {
    num: '03',
    title: 'Develop',
    desc: 'Precise coding for lightning speed on all devices, ensuring local leads never wait.',
  },
  {
    num: '04',
    title: 'Deployment',
    desc: 'Launch with 24/7 technical support and SEO optimization for your local service area.',
  },
];

export default function Process() {
  return (
    <section className="bg-primary py-16 md:py-32">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="mb-12 md:mb-20">
          <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-background/60 font-bold block mb-4">The Blueprint</span>
          <h2 className="font-serif text-3xl md:text-[2.5rem] text-background break-words">Four steps to digital mastery.</h2>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Dashed connector line */}
          <div className="absolute top-10 left-0 w-full border-t border-dashed border-background/20 hidden md:block pointer-events-none"></div>
          {steps.map((s, i) => (
            <div key={i} className="relative z-10 space-y-4 md:space-y-6 group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-container border-4 border-primary flex items-center justify-center font-serif text-xl md:text-2xl text-background group-hover:scale-110 transition-transform duration-500 shadow-lg">
                {s.num}
              </div>
              <div>
                <h3 className="font-serif text-xl text-background mb-2">{s.title}</h3>
                <p className="text-background/60 text-sm leading-relaxed max-w-xs">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
