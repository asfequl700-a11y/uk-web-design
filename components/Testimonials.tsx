import React from 'react';

const testimonials = [
  {
    quote: '"Craftline understood that a carpenter\'s website shouldn\'t look like a silicon valley startup. They captured the soul of my workshop perfectly."',
    name: 'James Arkwright',
    company: 'Arkwright Custom Timber',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7Wdnkd5ylFaHVUZr7aTLyzC1v0GJB8jZtmtmV0VSiEFkswWHSyKThYrsUMO3M-M-1x_-nU-xfMs_VvSjAsWPjZOsHXskSF0L5NhxnQzSXrmbvAZkduVM49O9P4Qq_XhAZiRLD_7PtFZnBGagG_6xdI_muLPvIl5zaAX-_PmZE3ULFbXgkyyAjLCUgnsSzps28_1_Nm89KsFoeYFlQG49cnELA1cNJTeU4dKcZiKPnMm7JsWRbFTyAyNsWybaOFQC17zzjZrXV-g',
  },
  {
    quote: '"Since launching our new portal, our booking conversion has increased by 40%. The design speaks the language of luxury that our clients expect."',
    name: 'Sarah Jennings',
    company: 'The Gilded Blade Barbers',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2Z8JkGlQ2IWuEkHpvwWCxGb6iZiCNMgyXo0nM2YhWW9oHRW_aBoO9mU2sqkPV0ZoOkr2cVRfaKWSoDdloCyCao74i5tG6JylObJa0uPHYaKhCJ985em3r1hZ53qNum_-86IRxahMyRllTRe8cft6EPgPmfJ07L6Y_tQ3xYNK8MVuIu3lbPcnHXV9tWG6Onrw38sLZTYSFd7Fxa8IfVzchMSjIbCebCk7A5O3G_08zo_kRrdmSe7xaNbB8TlTuPm9scuOSaaBN5A',
  },
  {
    quote: '"Clean, professional, and powerful. We finally have a digital presence that matches the quality of our industrial engineering work."',
    name: 'Mark Thorne',
    company: 'Thorne Mechanical',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPOt8PPK0KlGtmf2yY61YGXiCsl7sbiC_A0zAtzdXjXxvlu2dez6sHh-8sQHP5Tqa2QRdaN5m58G-snByqxHEGgfcZKJSLEqZLETA0IqPmT8z-km--xpJHc9oiAQpvJJfl1_amccHUvEIeNLcPz-ER2xJ1cKBE5ACLhjfZ1Xjyn3Nn7en3-c1D1TKyfWVD4U2Yt2o0VRZDyb41GQt1JwCWeIrruqBbOBwcZG_jjbxud3ZSd06Dy-PUgfYJgJ-wtkx9z7ALs26w5Q',
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-[1280px] mx-auto px-8 py-16 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {testimonials.map((t, i) => (
          <div key={i} className="p-8 md:p-10 bg-surface-container-low rounded-lg border border-outline-variant/10 hover:shadow-lg transition-shadow duration-500">
            <div className="text-yellow-600 mb-6 flex gap-1">
              {[...Array(5)].map((_, j) => (
                <span key={j} className="material-symbols-outlined text-[18px] md:text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <p className="font-body italic text-base md:text-lg text-primary leading-relaxed mb-8">{t.quote}</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container overflow-hidden">
                <img className="w-full h-full object-cover" src={t.img} alt={t.name} />
              </div>
              <div>
                <span className="block font-bold text-sm text-primary">{t.name}</span>
                <span className="text-xs text-secondary font-medium">{t.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
