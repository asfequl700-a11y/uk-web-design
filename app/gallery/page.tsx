'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import UnifiedForm from '@/components/UnifiedForm';

const portfolioItems = [
  {
    tag: 'AquaTech',
    title: 'Swift Flow',
    metric: '+42% Lead Conversion Rate',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdtQNp1uPAt5BTWwRnqeJFRqqK1pArEIZmlLsCikqlYwqkIFbiKNbWHPwsEOkp7NjDJjcolkGSNmdv5Io5WGPlB3EXwA4189Y4Vuz7fsbmJH2CSOzsGAzAE8ED0JZZy_KFbdrA18CNBb6_JC6mOIzs8t4Fuz5lTGZA2ysuZZEJ67iIzedliuLHA1nvoslDNdMEpbWKjR9FW1waTmD5o-De6Ar0WYr5ZmtmBkxFevzG0lB37thdgFLmAsABIkdCzuXGWi4Lmb5QiQ',
    category: 'all plumbers',
  },
  {
    tag: 'Master Craftsman',
    title: 'Hartwood',
    metric: '3.5x Brand Visibility Growth',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtFMGeKwUEJqPk_8TmuK3zk_KyE186TIldoFaDVC-cGJPRAlUpE1CgEeY3FNR7XZq1svFxqYMSmb8VEzMRtviBIozETNsrFMI9_uIHFWs1IOQGW9Le7DE33-mLcGpLQfoDDBe_Flp5tQY14WfDHKr70yQv8nXfNmiS2zrgKvg4AaQyIwr9bVe6TYTSxbuOTMavLGwnLC1NF1inke9mzu0N13NeTm0Exy8l64XD2wKMJJ9zvo5ytJT4cexUdG6GHFPNi6bCBFpjTg',
    category: 'all carpenters',
  },
  {
    tag: 'Premium Grooming',
    title: 'The Sharp House',
    metric: 'Fully Booked for 6 Months',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBccA0OZ58KuFR6Mg7CogMDqNzQA93p8hsrO9oRnzxkucZfipPKXQkWIKZ9Z0U3ghkVC7oEI4Wj3HebRcia-Wz6SXrxeL_ctTeFXZkbBw2WuVhGB1mebwSD_OXiTMBjU5c4PCKE_R4hBrRtWWzDVXCGoxfhus_cfav9t3FiLTY3AZa2b1rIgoF001GBt-mL0DoDXkA1Zr6ovKE6qvnJLn6AMvUG4kC1F82wTZzcc-dey53nBvOp3egJXfwgmuqfpmXgzcpj4OGIHg',
    category: 'all barbers',
  },
  {
    tag: 'Automotive Engineering',
    title: 'Redline',
    metric: '+210% Online Booking Rate',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFOYU_9Y9ZVlmL651s-XwxJokGBh40hfa_S_VLzzD-zKWSqJLH-vHWXsC3pvtHjPzVwG-WLKnAC1s4Yh-gPGj3SddN8QNS1mV6cxJeALKMz9ZmV5C4TayFhDqxZ1fbZl5xN4LgWkMXvkZuDDvA3X6U6bYRcxnce9_Wn5HP1DgD8EHpq_kA8wkdwt89i9PrTatLW8wveLMOTKMGzzYOysDB2oESKfJdJOvrgZNoYQqcaim0mJR1itUyPU30fPDtWLrLNRPxop5_4A',
    category: 'all mechanics',
  },
  {
    tag: 'Heritage Joinery',
    title: 'Crown & Chisel',
    metric: 'Award Winning Portfolio Design',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA786GASoIq4ugOSWE0LWDmAQ4Javi7TKw_ze9c_xj8poutUyFQJ9WL7UzfHi6TwbnjZ5Q6a-Es6GLcYRlv4UPh-ElxwBt_diGE8wOMYLBYbQi-V5VJ3sMLA3soNqmXiiXyV1QBr4QgjZCm_AlwesvtilaRSoob4Qv4wND7GaS8xrm16SU4R42DgV9K9dsH1LeVoEKVNlUbFKOdc-OZbRKALGUZLIC7Rmxw3I470Qn4xW2NI2xB8uNm5s8CaXF_OU8N6sIf2m8apw',
    category: 'all carpenters',
  },
  {
    tag: 'Lifestyle Brand',
    title: 'Fresh Cuts',
    metric: 'Social Presence Growth 400%',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCc_dG1l39b1pzzJSN0iZn9SgOLFt1rQUc26wE8w8Dkannwus7tM2m74SYWQXk1G0DPIvjfZul1Nkn7lXYKK0Z12bm2L7jWiaAJN27VINCvrzceA8uoK-oDF9KRkrbalMvi67NTQGm4DJqK6AkBi-y3LDgQYW-ZR5cW0cRYfa0htzzJnMrfK3mvI_QChr8aq1pqjZb74vfvaY4v8RvbAPXXxcfOX4ZYoMyJMZrEbTrAd6xQaBFTJnVJ1HQI_3IFlUbI0_8lrL2q3w',
    category: 'all barbers',
  },
  {
    tag: 'Industrial Solutions',
    title: 'AquaTech Pro',
    metric: 'Efficiency in Service Booking',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtcBpdWaIPVTtWcDDbeWp7W8usMbWHDbqBViF5lJxt0NL493Ht_NxDI61k4xAG7DXeZAQkYLHPGpgnt5dKTiK22JD0zfgm0iuJSFx2wll0pyElZXwT4t_5UKKymnp0hJNUi_jUOEGIl1TkMFV8v2mGvQ5f3teFbs5W7lf7Z7IBcuPEbjKmhliS5P4YaaoJKGt_Cuq5oSmyBxZEiF7FmPAhU1yxnIFn1qnt_tEIJinepzRvLT8mz8925KvPplhrDwVCeN0_XogwoA',
    category: 'all plumbers',
  },
  {
    tag: 'Precision Maintenance',
    title: 'ProDrive',
    metric: 'Premium Lead Generation Engine',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDON9m-oiJzz_QkKrRi2gR-lKHzglYXV1FFJmYQZfcR2oREEigRJtXe7NHeDxu4qOQfuFi9Y7sPA_OVbNBLI7Wa6c3GRI8r3AwuC2MH2aQt_u3fJEDi__0u7eRP2NUypJSOGjsxpZ-7KS054bs27OnjHzXfIVg8qp-ZiBLCHJN04xzEyzHMvrnZyzTk-daWR18lNeRkJhk95WdYo6XLSn4MfS-hOELIxEFBXWZOhP33PL7EjYemhGrAcKayP5RN8AQGo18-o4SCWA',
    category: 'all mechanics',
  },
];

const filters = ['All', 'Plumbers', 'Carpenters', 'Barbers', 'Mechanics'];

export default function GalleryPage() {
  const [active, setActive] = React.useState('All');

  const filtered = active === 'All'
    ? portfolioItems
    : portfolioItems.filter(p => p.category.includes(active.toLowerCase()));

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="max-w-[1280px] mx-auto px-8 pt-24 pb-12 md:pb-20">
          <div className="max-w-3xl">
            <span className="font-sans text-[0.6875rem] uppercase tracking-[0.2rem] text-secondary mb-6 block font-bold">Our Work</span>
            <h1 className="font-serif text-4xl md:text-[3.5rem] leading-[1.1] text-primary tracking-tight mb-8">
              Websites That Get <br /><span className="italic font-normal">Results.</span>
            </h1>
            <p className="font-sans text-base md:text-lg text-on-surface-variant leading-relaxed max-w-xl">
              We specialize in digital high-street presence for elite craftspeople. Our portfolios don&apos;t just look good—they convert high-value leads through intentional, editorial design.
            </p>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="max-w-[1280px] mx-auto px-8 mb-12 md:mb-16">
          <div className="flex flex-nowrap md:flex-wrap gap-3 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`flex-shrink-0 px-6 md:px-8 py-3 rounded-full font-sans text-xs md:text-sm font-medium luxury-bezier transition-all duration-300 ${
                  active === f
                    ? 'bg-primary text-on-primary'
                    : 'border border-outline-variant/30 text-primary hover:bg-surface-container-high'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* Masonry Grid */}
        <section className="max-w-[1280px] mx-auto px-8 pb-32">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
            {filtered.map((item, i) => (
              <div key={i} className="break-inside-avoid mb-8 group relative overflow-hidden rounded-lg cursor-pointer">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto object-cover luxury-bezier group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="bg-secondary text-background font-sans text-[0.6rem] uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-3">{item.tag}</span>
                  <h3 className="text-background font-serif text-2xl mb-1">{item.title}</h3>
                  <p className="text-background/80 font-sans text-sm">{item.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Form */}
        <section className="bg-surface-container py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <span className="font-sans text-[0.6875rem] uppercase tracking-[0.2rem] text-secondary mb-6 block font-bold">Commission a Project</span>
              <h2 className="font-serif text-3xl md:text-5xl text-primary leading-tight mb-8">Ready to elevate your digital heritage?</h2>
              <p className="font-sans text-on-surface-variant text-base md:text-lg max-w-md leading-relaxed">
                We are currently accepting new trades for Q4 2024. Let&apos;s discuss how we can bring an editorial edge to your business.
              </p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm p-8 md:p-16 rounded-xl border border-outline-variant/30 shadow-[0_4px_20px_-10px_rgba(51,68,37,0.1)] transition-all duration-700 hover:bg-white/80 hover:shadow-2xl">
              <UnifiedForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
