'use client';
import React, { useRef, useEffect, useState } from "react";

const ReferencesV2 = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className=" pt-10 pb-15 bg-sky-100 mt-70 mb-40">
      <div className="flex flex-col md:flex-row gap-10 container mx-auto">
        {/* Sol Kısım (%30) */}
        <div className="w-full md:w-[30%] px-4 md:mr-6 flex-shrink-0 mt-10">
          <h3 className="text-5xl pr-6 sm:leading-snugtracking-tight font-bold text-primary">
            Referanslarımız
          </h3>
          <p className="mt-6 text-primary text-xl font-light">
            Çeşitli sektörlerdeki iş ortaklarımızla birlikte, en iyi çözümleri sunmak için çalışıyoruz.
          </p>
        </div>
        {/* Sağ Kısım (%70) */}
        <div
          ref={containerRef}
          className={`w-full md:w-[60%] flex justify-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
        >
          <div className="relative h-64 w-full flex items-center">
            <div className="absolute bg-blue-500 transform -translate-x-10 h-64 w-3/4 rounded-md opacity-20"></div>
            <div className="relative bg-white rotate-3 scale-110 translate-x-10 md:shadow-2xl -ml-4 -mt-20 p-8 space-y-2 rounded-md w-full">
              <div className="grid grid-cols-5 gap-4 max-w-5xl mx-auto">
                <img src="/referanslar/lojiport.webp" alt="Lojiport" />
                <img src="/referanslar/askop.webp" alt="Askop" />
                <img src="/referanslar/bahcesehir.webp" alt="Bahçeşehir" />
                <img src="/referanslar/cerkezkoy.webp" alt="Çerkezköy" />
                <img src="/referanslar/hasiad.webp" alt="Hasiad" />
                <img src="/referanslar/incirli.webp" alt="İncirli" />
                <img src="/referanslar/inserko.webp" alt="Inserko" />
                <img src="/referanslar/isnak.webp" alt="İsnak" />
                <img src="/referanslar/kapaklı.webp" alt="Kapaklı" />
                <img src="/referanslar/kuzeymarmara.webp" alt="Kuzey Marmara" />
                <img src="/referanslar/oz-ar.webp" alt="Oz-Ar" />
                <img src="/referanslar/teskop.webp" alt="Teskop" />
                <img src="/referanslar/toki.webp" alt="Toki" />
                <img src="/referanslar/vaditepe.webp" alt="Vaditepe" />
                <img src="/referanslar/deliklikaya.png" alt="Deliklikaya" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferencesV2;
