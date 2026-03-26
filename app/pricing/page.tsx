'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UnifiedForm from '@/components/UnifiedForm';

const faqs = [
  {
    q: 'Who provides the website content?',
    a: 'We offer copy-editing services, but primary brand history and photography are typically provided by you. For Premium plans, we offer full creative direction and content sourcing.',
  },
  {
    q: 'How long does a typical build take?',
    a: 'Our process is deliberate. Starter projects take 14 days, while Professional and Premium builds range from 3 to 6 weeks depending on complexity and feedback loops.',
  },
  {
    q: "Can I edit my site after it's launched?",
    a: 'Yes. Every Craftline project includes a bespoke handover session. We use intuitive content management systems that allow you to update text and images with ease.',
  },
  {
    q: 'What are your payment terms?',
    a: 'We require a 50% deposit to secure your slot in our workshop, with the remaining 50% payable upon final approval before the site goes live.',
  },
  {
    q: 'Is there ongoing technical support?',
    a: 'Every project includes 30 days of complimentary hyper-care support. After that, we offer annual "Maintenance Estates" for security and small updates.',
  },
  {
    q: 'What is your refund policy?',
    a: 'Due to the bespoke nature of our labor, deposits are non-refundable once work has commenced. However, we guarantee satisfaction through our iterative design process.',
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">

        {/* Hero */}
        <section className="max-w-[1280px] mx-auto px-8 pt-24 pb-12 md:pb-16">
          <div className="flex flex-col md:flex-row items-baseline gap-6 md:gap-8">
            <div className="md:w-1/2">
              <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary mb-4 block">Transparent Pricing</span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-[3.5rem] leading-[1.1] text-primary -tracking-[0.02em]">
                Simple Prices.<br />Stunning Websites.
              </h1>
            </div>
            <div className="md:w-1/2 md:pl-12 md:border-l border-outline-variant/20">
              <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed">
                We believe in the longevity of digital assets. Our pricing reflects a commitment to heirloom quality, bespoke design, and technical excellence that serves your estate for years to come.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-[1280px] mx-auto px-8 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Starter */}
            <div className="bg-surface-container-low p-8 md:p-10 rounded-lg flex flex-col luxury-bezier hover:bg-surface-container-high transition-colors duration-300">
              <div className="mb-8 md:mb-10">
                <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary mb-2 block">Starter</span>
                <h3 className="font-serif text-[1.5rem] md:text-[1.75rem] text-primary mb-4">The Artisan</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-serif text-primary">£499</span>
                  <span className="text-on-surface-variant text-sm font-sans">/ project</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 md:mb-12 flex-grow">
                {['Single Page Showcase', 'Standard Typography Set', 'Mobile Optimization', '14-Day Delivery'].map(f => (
                  <li key={f} className="flex items-center gap-3 font-sans text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-lg">check</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full rounded-full border border-primary text-primary py-4 font-sans text-sm font-bold hover:bg-primary hover:text-on-primary transition-all luxury-bezier">Select Starter</button>
            </div>

            {/* Professional (Featured – elevated) */}
            <div className="relative bg-primary p-8 md:p-10 rounded-lg flex flex-col text-on-primary transform md:-translate-y-4 shadow-[0_20px_80px_-10px_rgba(74,92,58,0.15)]">
              <div className="absolute top-4 right-4 bg-background text-primary px-3 py-1 rounded-full font-sans text-[0.5rem] md:text-[0.6rem] font-bold uppercase tracking-wider">Most Popular</div>
              <div className="mb-8 md:mb-10">
                <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] opacity-70 mb-2 block">Professional</span>
                <h3 className="font-serif text-[1.5rem] md:text-[1.75rem] text-background mb-4">The Estate</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-serif text-background">£899</span>
                  <span className="opacity-70 text-sm font-sans">/ project</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 md:mb-12 flex-grow">
                {['Up to 5 Pages', 'Custom Editorial Layouts', 'SEO Foundation Kit', 'CMS Integration'].map(f => (
                  <li key={f} className="flex items-center gap-3 font-sans text-sm opacity-90">
                    <span className="material-symbols-outlined text-background text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-background text-primary rounded-full py-4 font-sans text-sm font-bold hover:bg-surface-variant transition-all luxury-bezier">Start Custom Build</button>
            </div>

            {/* Premium */}
            <div className="bg-surface-container-low p-8 md:p-10 rounded-lg flex flex-col luxury-bezier hover:bg-surface-container-high transition-colors duration-300">
              <div className="mb-8 md:mb-10">
                <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary mb-2 block">Premium</span>
                <h3 className="font-serif text-[1.5rem] md:text-[1.75rem] text-primary mb-4">The Legacy</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-serif text-primary">£1,499</span>
                  <span className="text-on-surface-variant text-sm font-sans">/ project</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 md:mb-12 flex-grow">
                {['Unlimited Scale', 'E-commerce Capabilities', 'High-End Motion Design', 'Priority Support'].map(f => (
                  <li key={f} className="flex items-center gap-3 font-sans text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-lg">check</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full rounded-full border border-primary text-primary py-4 font-sans text-sm font-bold hover:bg-primary hover:text-on-primary transition-all luxury-bezier">Select Premium</button>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="bg-surface-container-low py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="mb-12 md:mb-16">
              <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary mb-4 block">The Details</span>
              <h2 className="font-serif text-3xl md:text-[2.5rem] text-primary">Feature Comparison</h2>
            </div>
            <div className="overflow-x-auto -mx-8 px-8">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-outline-variant/30">
                    <th className="py-6 font-sans text-sm font-bold text-primary uppercase tracking-widest w-1/4">Capability</th>
                    <th className="py-6 font-sans text-sm font-bold text-primary text-center">Starter</th>
                    <th className="py-6 font-sans text-sm font-bold text-primary text-center">Professional</th>
                    <th className="py-6 font-sans text-sm font-bold text-primary text-center">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  {[
                    { cap: 'Page Limit', s: '1 Page', p: 'Up to 5 Pages', pr: 'Unlimited' },
                    { cap: 'Custom Domain', s: '✓', p: '✓', pr: '✓', icon: true },
                    { cap: 'SEO Strategy', s: '—', p: 'Basic', pr: 'Advanced Audit' },
                    { cap: 'Newsletter Integration', s: '—', p: '✓', pr: '✓', icon2: true },
                    { cap: 'Image Licensing', s: '—', p: 'Stock Selection', pr: 'Art Direction' },
                    { cap: 'Turnaround Time', s: '2 Weeks', p: '3 Weeks', pr: 'Priority Stream' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-6 font-sans text-sm text-on-surface">{row.cap}</td>
                      <td className="py-6 text-center text-sm">
                        {row.s === '✓' ? <span className="material-symbols-outlined text-primary">check</span> : <span className={row.s === '—' ? 'opacity-40' : ''}>{row.s}</span>}
                      </td>
                      <td className="py-6 text-center text-sm">
                        {row.p === '✓' ? <span className="material-symbols-outlined text-primary">check</span> : row.p}
                      </td>
                      <td className="py-6 text-center text-sm font-medium">
                        {row.pr === '✓' ? <span className="material-symbols-outlined text-primary">check</span> : row.pr}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-[1280px] mx-auto px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary mb-4 block">Queries</span>
              <h2 className="font-serif text-3xl md:text-[2.5rem] leading-tight text-primary">Common Inquiries</h2>
              <p className="mt-6 font-sans text-on-surface-variant leading-relaxed max-w-sm">
                Finding the right fit for your digital heritage project often involves specific questions. We have outlined the essentials below.
              </p>
            </div>
            <div className="md:col-span-8 space-y-4 md:space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-outline-variant/30 pb-4 md:pb-6">
                  <button
                    className="w-full flex justify-between items-center text-left gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-sans text-base md:text-lg font-medium text-primary">{faq.q}</span>
                    <span className={`material-symbols-outlined text-primary transition-transform duration-300 luxury-bezier ${openFaq === i ? 'rotate-45' : ''}`}>add</span>
                  </button>
                  {openFaq === i && (
                    <div className="mt-4 font-sans text-on-surface-variant text-sm leading-relaxed max-w-2xl">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Form - Dark */}
        <section className="max-w-[1280px] mx-auto px-8 py-16 md:py-24 mb-12">
          <div className="bg-primary-container p-8 md:p-24 rounded-lg overflow-hidden relative">
            <div className="absolute -right-24 -bottom-24 w-64 h-64 md:w-96 md:h-96 border-[0.5px] border-on-primary-container/10 rounded-full pointer-events-none"></div>
            <div className="absolute -right-32 -bottom-32 w-80 h-80 md:w-[32rem] md:h-[32rem] border-[0.5px] border-on-primary-container/5 rounded-full pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
              <div className="text-center md:text-left">
                <h2 className="font-serif text-3xl md:text-[2.5rem] text-background leading-tight mb-6">Begin Your Project.</h2>
                <p className="text-on-primary-container opacity-90 font-sans text-base leading-relaxed">
                  Describe your vision or the heritage of your trade. We&apos;ll reach out within 24 hours to schedule a consultation.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 md:p-16 rounded-xl border border-white/10 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.3)] transition-all duration-700 hover:bg-white/10 hover:shadow-2xl">
                <UnifiedForm variant="dark" />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
