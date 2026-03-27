import React from 'react';

export default function WhyChoose() {
  const reasons = [
    {
      icon: 'architecture',
      title: 'Tailored Layouts',
      desc: 'No templates. We design every grid and pixel from scratch to match the unique aesthetic of your specific trade.',
    },
    {
      icon: 'bolt',
      title: 'Built for Speed',
      desc: 'Fast loading websites are essential for emergency services like plumbers and locksmiths. We optimize for every millisecond.',
    },
    {
      icon: 'shield',
      title: 'Trust Engineered',
      desc: 'We weave credentials, safety marks, and high-end testimonials into the design to convert visitors into clients.',
    },
  ];

  return (
    <section className="bg-surface-container py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="mb-20 text-center">
          <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary font-bold block mb-4">The UK WEB DESIGN Difference</span>
          <h2 className="font-serif text-4xl md:text-[2.5rem] text-primary break-words">Why trade experts choose us.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {reasons.map((r, i) => (
            <div key={i} className="space-y-6 group">
              <span className="material-symbols-outlined text-4xl text-secondary block transition-transform duration-500">{r.icon}</span>
              <h3 className="font-serif text-2xl text-primary">{r.title}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
