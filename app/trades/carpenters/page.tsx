import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UnifiedForm from '@/components/UnifiedForm';

export default function CarpentersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container">
      <Navbar />
      <main className="flex-grow pt-[4.5rem]">
        {/* Section 1: Hero */}
        <section className="relative pt-12 pb-24 md:pt-32 md:pb-32 overflow-hidden bg-background">
          <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="block font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary mb-6">Digital Craftsmanship</span>
              <h1 className="font-serif text-4xl sm:text-6xl md:text-[5rem] leading-[1.05] text-primary tracking-[-0.03em] mb-10">
                Show Off Your Craft. <br className="hidden sm:block" />Win More Clients.
              </h1>
              <p className="font-body text-base md:text-lg text-on-surface-variant max-w-xl mb-12 leading-relaxed">
                We build high-end editorial websites for bespoke carpenters. Stop losing high-value projects to generic templates. Let your timber speak for itself.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-on-primary px-10 py-5 rounded-full font-sans text-base font-bold luxury-bezier hover:bg-primary-container shadow-xl">
                  Get My Carpentry Website
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative group mt-12 lg:mt-0">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700" alt="Carpenter" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPgVSzFSuFSku1OSWXaU9UD51nhEX-V8_0ffsu2VRNkIuSLrnIHDeBmmbO6hyVstx338Wgi7TWk2JDD8JzCienVFJ-ShNJXgFwr0P9tGc890tX_heurYU1CeRnbjnAqpU1nO6uEnoVYHUxhxkbHavFD1kLjp7M9NNHSThIMhJ2cDc5d4SfqlIxgZ1WPzkah3Y2_kNWPTlL-aih2n4aagSOb_ZSeDKXFWPgYGfLoehhg6AEATV1yP0jGcaWHfEo8qBW2f1SMZ58zA" />
              </div>
              <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-surface-container p-6 md:p-8 rounded-lg shadow-xl max-w-[200px] md:max-w-[240px]">
                <p className="font-serif italic text-primary text-base md:text-lg">&quot;The wood tells the story, we just give it a voice.&quot;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Pain Points */}
        <section className="py-24 md:py-32 bg-surface-container-low">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
              <div>
                <span className="block font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary mb-4">The Challenge</span>
                <h2 className="font-serif text-3xl md:text-[2.5rem] leading-tight text-primary mb-8">Good Joinery is Invisible, but Bad Marketing is Costly.</h2>
              </div>
              <div className="space-y-12 md:space-y-16">
                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 group">
                  <span className="material-symbols-outlined text-error text-3xl shrink-0">hide_source</span>
                  <div>
                    <h3 className="font-sans font-bold text-xl text-primary mb-3">No Portfolio Online</h3>
                    <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">Relying on Instagram alone isn&apos;t enough for £20k+ projects. Clients want to see a curated, professional digital estate before they commit.</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 group">
                  <span className="material-symbols-outlined text-error text-3xl shrink-0">person_cancel</span>
                  <div>
                    <h3 className="font-sans font-bold text-xl text-primary mb-3">Losing Bespoke Clients</h3>
                    <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">If your website looks generic, clients assume your work is too. High-end clients pay for the detail, and they expect to see it in your digital presence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Features */}
        <section className="py-24 md:py-32 bg-background">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="text-center mb-16 md:mb-24">
              <span className="block font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary mb-4">The Toolkit</span>
              <h2 className="font-serif text-3xl md:text-[3rem] text-primary">Engineered for Excellence.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto">
              <div className="md:col-span-8 bg-surface-container p-8 md:p-10 rounded-lg flex flex-col justify-between overflow-hidden relative group border border-outline-variant/10 min-h-[300px]">
                <div>
                  <h3 className="font-serif text-2xl text-primary mb-4">Project Gallery</h3>
                  <p className="text-on-surface-variant text-sm md:text-base max-w-sm">A high-definition canvas for your finest installations, from oak kitchens to library shelving.</p>
                </div>
                <div className="mt-8 md:translate-y-12 md:group-hover:translate-y-0 transition-transform duration-500">
                  <img className="w-full h-40 md:h-48 object-cover rounded-t-lg shadow-lg" alt="Gallery preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsJtMBnJQwAK-qFlXj0mD5Yn1KfTBjajgEGzijsSuclm8LrtNn4MZnyuyjbGSwryDUVyC5UNdNIRKvzdkGCX8bKyuo_zJBCMuyLzhOyJhtS5mjJ2601fhHX_FHPduKWG001ml6PcK9Beoe6J6Ajd3GoUMxpTvd0g5rOZ7408Arc2CSTZZG_Ah5jH_-rkk7OOA_kDFKn5u3dFoch4JzIqeBHCJkKQ0G1JaF-i2q0qF8aQXbN6bbCO7dbSgQvsmvUph6k4kCtGJrng" />
                </div>
              </div>
              <div className="md:col-span-4 bg-primary text-on-primary p-8 md:p-10 rounded-lg flex flex-col justify-center text-center items-center">
                <span className="material-symbols-outlined text-4xl md:text-5xl mb-6">architecture</span>
                <h3 className="font-serif text-2xl mb-4">Bespoke Showcase</h3>
                <p className="text-on-primary/80 text-sm">Detailed technical breakdowns of your joinery techniques to prove your expertise.</p>
              </div>
              <div className="md:col-span-4 bg-surface-container-highest p-8 md:p-10 rounded-lg flex flex-col justify-between border border-outline-variant/10 min-h-[250px]">
                <h3 className="font-serif text-2xl text-primary mb-4">Material Lookbook</h3>
                <div className="flex gap-2 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary-container"></div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary"></div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-tertiary"></div>
                </div>
                <p className="text-on-surface-variant text-xs md:text-sm">Help clients choose between Walnut, Ash, or Oak with an interactive texture guide.</p>
              </div>
              <div className="md:col-span-8 bg-secondary-container p-8 md:p-10 rounded-lg flex flex-col sm:flex-row items-center gap-6 md:gap-10">
                <div className="flex w-20 h-20 md:w-32 md:h-32 shrink-0 border border-primary/20 rounded-full items-center justify-center">
                  <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">measuring_tape</span>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-serif text-xl md:text-2xl text-primary mb-2">Measured to Perfection</h3>
                  <p className="text-on-secondary-container/80 text-xs md:text-sm">Every site is responsive and lightning-fast, ensuring a premium experience on every device.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Mockup */}
        <section className="py-24 md:py-40 bg-surface-dim">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="bg-surface rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-surface-container p-4 flex items-center gap-2 border-b border-outline-variant/20">
                <div className="w-2.5 h-2.5 rounded-full bg-error/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-secondary/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-primary-container/40"></div>
                <div className="mx-auto font-sans text-[0.6rem] md:text-[0.6875rem] uppercase tracking-widest text-on-surface-variant">Hartwood Joinery, Leeds</div>
              </div>
              <div className="p-8 md:p-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className="space-y-6 md:space-y-8 text-center md:text-left">
                  <h4 className="font-serif text-3xl md:text-4xl text-primary font-bold">Hartwood Joinery</h4>
                  <p className="text-on-surface-variant italic text-sm md:text-base">Leeds, West Yorkshire</p>
                  <hr className="border-outline-variant/30" />
                  <div className="grid grid-cols-2 gap-6 md:gap-8">
                    <div>
                      <span className="block text-[0.6rem] md:text-[0.6875rem] uppercase tracking-wider text-secondary mb-2">Speciality</span>
                      <p className="font-sans font-bold text-sm md:text-base text-primary uppercase">Period Restoration</p>
                    </div>
                    <div>
                      <span className="block text-[0.6rem] md:text-[0.6875rem] uppercase tracking-wider text-secondary mb-2">Wood Type</span>
                      <p className="font-sans font-bold text-sm md:text-base text-primary uppercase">A-Grade English Oak</p>
                    </div>
                  </div>
                </div>
                <div className="relative mt-8 md:mt-0">
                  <img className="rounded-lg shadow-xl w-full" alt="Joinery" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK8TOtfqxzNMzXr5zHSDXTmbyWRbSLypL-zgRPCoRbOU9nY4DUz3Jj4cxMuKaoujuhArZPjuGq-WoOHneQGOJIsDX1ip67TMI47Y1hu-lChBQ3g1cf3g1-2b-x0y316B0Ps9eXfgibBbSeFsS9EYt4kRB8h9x_fVhAodQIljUzRTbEflV9jOs5KZTJXFOI_NdV3hERo32-zxCaqxyHhfMjwXF_1aIkmtj4QwkgXD8Uk5KBBabFn1kH9lVV3yiSWEMYPkejOpaKrw" />
                  <div className="absolute -top-6 -right-6 md:-top-12 md:-right-12 w-28 h-28 md:w-48 md:h-48 bg-primary rounded-full flex items-center justify-center text-on-primary text-center p-4 md:p-6 border-4 md:border-8 border-surface shadow-xl">
                    <p className="font-sans font-bold text-[0.6rem] md:text-xs uppercase tracking-tighter">Handcrafted Excellence Since 2012</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Testimonial */}
        <section className="py-24 md:py-32 bg-primary text-on-primary">
          <div className="max-w-[1280px] mx-auto px-8 text-center">
            <span className="material-symbols-outlined text-5xl md:text-6xl text-on-primary-container mb-8 md:mb-12">format_quote</span>
            <blockquote className="max-w-4xl mx-auto mb-12 md:mb-16">
              <p className="font-serif text-2xl md:text-[2.5rem] leading-snug italic">
                &quot;Craftline understood that my work isn&apos;t just about wood; it&apos;s about heritage. They built a site that finally matches the quality of my joinery. I booked three six-figure commissions in the first month.&quot;
              </p>
            </blockquote>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden mb-4 border-2 border-on-primary-container">
                <img className="w-full h-full object-cover" alt="James Hartley" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7tYRl_muTj3VmLdrf46vFVUqudFWbP89O8Y46anwwfXx6P0nh3zW_jS-hl3XliwDL1mzyeDIcdMVVAtakEzwFpwu9rOma87MaYK57w1d7YUUwO1f6BaCNKCRk7O4wm0C3MHjvZLY6piJIXs-oaP6lNAfvzAb7A6LhD0MufAG7COAHD6_XciZDBYRJ6tNTduaaEetQ5ykvGzRny6seL53ADg_OqLzxoFpbCONE5s_15C041y1ktg0m4wP-bP-3VrDzGbXJJ-kJ6w" />
              </div>
              <cite className="not-italic">
                <span className="block font-sans font-bold text-base md:text-lg">James Hartley</span>
                <span className="block text-on-primary/60 text-xs md:text-sm uppercase tracking-widest">Master Carpenter, Leeds</span>
              </cite>
            </div>
          </div>
        </section>

        {/* Section 6: Form */}
        <section className="py-24 md:py-32 bg-surface-container" id="form">
          <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h2 className="font-serif text-3xl md:text-[2.5rem] text-primary mb-6">Let&apos;s talk about your next big project.</h2>
              <p className="text-on-surface-variant text-base md:text-lg mb-8 leading-relaxed max-w-md">Fill out the form and we&apos;ll be in touch to discuss how we can bring your physical craftsmanship into the digital world.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-primary">
                  <span className="material-symbols-outlined text-xl">check_circle</span>
                  <span className="font-sans font-medium text-sm md:text-base">Professional SEO included</span>
                </div>
                <div className="flex items-center gap-4 text-primary">
                  <span className="material-symbols-outlined text-xl">check_circle</span>
                  <span className="font-sans font-medium text-sm md:text-base">Hand-coded for speed</span>
                </div>
                <div className="flex items-center gap-4 text-primary">
                  <span className="material-symbols-outlined text-xl">check_circle</span>
                  <span className="font-sans font-medium text-sm md:text-base">High-resolution gallery support</span>
                </div>
              </div>
            </div>
            <div className="bg-white/40 backdrop-blur-sm p-8 md:p-16 rounded-xl border border-outline-variant/30 shadow-[0_4px_20px_-10px_rgba(51,68,37,0.1)] transition-all duration-700 hover:bg-white/80 hover:shadow-2xl">
              <UnifiedForm tradeSector="Carpenter" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
