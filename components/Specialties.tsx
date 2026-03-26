import React from 'react';

export default function Specialties() {
  const specialties = [
    {
      title: "Artisan Workshops",
      desc: "Showcasing the soul behind the sawdust with high-resolution galleries and lead forms.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuFKBXL9MwbSaO80xzne0yc7Skf_9Slnirwz_A-f7J4fKqF9ao3R-wDTyei5mug9diQZxD80_fxz-t8t4gYHh1vm6sBkitVQh7UnWlLl7j29Y9wrtEr6nyB0jqRhR-kuRdUajyhBDVVTauymNmvNLhl3hNi4tmDrgKX487cof_DtiBNELylDne49RX09MCTlVSrPR2GVpBVzLArT9e51B_lD89trOUxDeotSFibmrd58deo3iLTMoSBKqRAEG32obVdGbjmnTMSQ",
    },
    {
      title: "Modern Mechanics",
      desc: "Integrated booking systems for high-performance garages and specialized engineers.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtWak6XPFcGhJiYFCIZ-H2lUqI8vTvwOtJDLR5UNSiKrFjGHvKoDjfRehInNrKTE3C_vzdb8CCEjWfFdkW4mpnLlfP8ZJUXVAVhjt4DhMv7JIDFaqGt16yPf4VnNN-TBVD0oNbk1psn4gIx6P1RQPw-atzNhW8N4Wm8gWv8SBmXRw72TPKOrvJmAJv6wLWrjdWlFnTNaYUD175k7qIiZ7LZgWUIER2AjtyQZcmIaTr9wfAV3YNTbdzEEMIrjVv7hQQD4SaJBT-7Q",
    },
    {
      title: "Luxury Grooming",
      desc: "Refined aesthetic portfolios for barbers and salons that prioritize style and experience.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1Mfog5qebzLLfAVvzSZbtn9OXZzZMntKoKHGOVe2qvSSajd3t6njHCl920jeXPeRNrtq5HMWMJQzPuow_8XIMcjWkxQUfhub3T62y5QGVQ_ogfyXmQg70yah0agrczzBaxxIMybd55JlmrBJqxZfA7wzKEYOMOf5K30pV9uThlGfK5FXi5rZKnNbK8dWRx6aWom4EYmlECCXGj9BaNFPjMH8T_c7H00g4kI0oOLaEmdgSqm912xcXFx9GW61JME-j3jzgy50iJw",
    },
    {
      title: "Elite Contractors",
      desc: "Bespoke portals for plumbing, electrical, and construction firms managing large scale ops.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXLib88VjMzU4duSl7EEPQXm_9CSgq1Vl-yrKZe686SNQDXk20F_CfLr9qE0N3qr3ofbnLEmud-yFO1qYDxC4hpZA-v93KbXtlF-0DLiaRV2sE3JOLIOkYLUJYPLLKfgYracmja7QXJ-C0wO521ixffqUADASoQeBHAM4aNgc2AmjeY9z3IR5gA9N-TxMqram26ONT_OXnpqdw5w_uBm7CkKdf1yRQ94hmAA0cCWkV1eoOopytU3Kh_KJhMkhRTUjZ_ZD9HEnuNA",
    },
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-8 py-16 md:py-32">
      <div className="mb-12 md:mb-16">
        <span className="font-sans text-[0.6875rem] uppercase tracking-[0.1rem] text-secondary font-bold block mb-4">Our Specialties</span>
        <h2 className="font-serif text-3xl md:text-[2.5rem] leading-tight text-primary break-words">Tailored for your craft.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {specialties.map((item, idx) => (
          <div key={idx} className="group relative aspect-[16/11] sm:aspect-[16/10] rounded-lg overflow-hidden cursor-pointer">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 luxury-bezier transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/20 to-transparent group-hover:via-primary/40 luxury-bezier transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-2">{item.title}</h3>
              <p className="text-white/80 font-body text-xs md:text-sm max-w-xs">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
