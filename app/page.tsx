import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TradeStrip from "@/components/TradeStrip";
import Specialties from "@/components/Specialties";
import CTAValues from "@/components/CTAValues";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import UnifiedForm from "@/components/UnifiedForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TradeStrip />
        <Specialties />
        <CTAValues />
        <WhyChoose />
        <Testimonials />
        <Process />
        <section className="bg-surface py-24">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary mb-4 block font-bold">Consultation</span>
                <h2 className="font-serif text-4xl md:text-[2.5rem] leading-tight text-primary break-words">Start your project today.</h2>
                <p className="font-body text-on-surface-variant max-w-sm leading-relaxed">
                  Receive a complimentary audit of your current digital presence and a bespoke quote for your trade.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="bg-white/40 backdrop-blur-sm p-12 md:p-16 rounded-xl border border-outline-variant/30 shadow-[0_4px_20px_-10px_rgba(51,68,37,0.1)] transition-all duration-700 hover:bg-white/80 hover:shadow-2xl">
                  <UnifiedForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
