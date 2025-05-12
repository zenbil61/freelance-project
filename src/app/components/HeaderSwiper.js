// HeaderSwiper.js
"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    bg: "/projeler/banner_webp.webp",
    title: "Denge AŞ",
    subtitle: "ile daha iyi bir gelecek inşa edin!",
    desc: "DENGE A.Ş. kurulduğu tarihten bu yana, işverenin ihtiyaçlarının belirlendiği, her projenin özgün ve bütünsel bir yaklaşımla ele alındığı, zaman, maliyet ve fonksiyonellik temelinde hareket etmeyi kendisine ilke edinmiştir.",
  },
  {
    bg: "/projeler/armutlu.jpg",
    title: "Armutlu Termal World",
    subtitle: "Türkiye'nin en büyük termal projelerinden biri",
    desc: "Armutlu Termal World projesi, modern mimarisi ve doğal kaynaklarıyla öne çıkıyor.",
  },
  {
    bg: "/projeler/askoop.webp",
    title: "ASKOOP",
    subtitle: "ASKOOP Konut Projesi",
    desc: "ASKOOP, modern yaşam alanları ve sosyal donatılarıyla öne çıkan bir konut projesidir.",
  },
  {
    bg: "/projeler/cerkezkoz-ozel-endustri.jpg",
    title: "Çerkezköy Özel Endüstri Bölgesi",
    subtitle: "Sanayi ve üretim için yeni bir merkez",
    desc: "Çerkezköy'de kurulan bu özel endüstri bölgesi, sanayi yatırımlarına yeni bir soluk getiriyor.",
  },
  {
    bg: "/projeler/circir_mahallesi.webp",
    title: "Çırçır Mahallesi Kentsel Dönüşüm",
    subtitle: "Kentsel dönüşümde örnek proje",
    desc: "Çırçır Mahallesi'nde gerçekleştirilen dönüşüm projesi, modern şehircilik anlayışını yansıtıyor.",
  },
  {
    bg: "/projeler/incirli.jpg",
    title: "İncirli Konutları",
    subtitle: "Aileler için huzurlu yaşam alanı",
    desc: "İncirli Konutları, doğayla iç içe, güvenli ve konforlu bir yaşam sunuyor.",
  },
  {
    bg: "/projeler/kesoglu.webp",
    title: "Keşoğlu İnşaat Projesi",
    subtitle: "Bölgenin yükselen değeri",
    desc: "Keşoğlu İnşaat'ın bu projesi, modern mimarisiyle dikkat çekiyor.",
  },
  {
    bg: "/projeler/kuzeymarmara.jpg",
    title: "Kuzey Marmara Otoyolu",
    subtitle: "Mega Altyapı Projesi",
    desc: "Kuzey Marmara Otoyolu, ulaşımda yeni bir çağ başlatıyor ve bölgeye değer katıyor.",
  },
  {
    bg: "/projeler/vaditepe.webp",
    title: "Vaditepe Konutları",
    subtitle: "Doğayla iç içe modern yaşam",
    desc: "Vaditepe Konutları, geniş yeşil alanları ve modern sosyal tesisleriyle öne çıkıyor.",
  },
];

export default function HeaderSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="relative overflow-hidden min-h-screen w-full flex items-center">
      {/* Blurred, semi-opaque background overlay */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={swiper => (swiperRef.current = swiper)}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative min-h-screen w-full flex items-center"
              style={{
                backgroundImage: `url(${slide.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-gray-100/80 to-green-50/80 dark:from-gray-900/80 dark:via-gray-900/80 dark:to-gray-800/80 backdrop-blur-xl opacity-90 z-0"></div>
              <div className="container mx-auto px-5 sm:px-8 py-20 sm:py-32 md:grid md:grid-cols-2 md:items-center md:gap-8 lg:px-12 lg:py-40 relative z-10 min-h-screen w-full">
                <div className="w-full max-w-5xl text-left mt-4 flex flex-col gap-6 px-1 sm:px-2 md:px-0">
                  <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight dark:text-white">
                    <span className="inline-block bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
                      {slide.title}
                    </span>
                    <span className="block mt-2">
                      {slide.subtitle.includes("<span") ? (
                        <span dangerouslySetInnerHTML={{ __html: slide.subtitle }} />
                      ) : (
                        slide.subtitle
                      )}
                    </span>
                  </h1>
                  <p className="text-lg sm:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed">
                    {slide.desc}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Slide Name Pagination - Vertical Right Side */}
      <div className="absolute top-1/2 right-8 -translate-y-1/2 flex flex-col items-end gap-3 z-30 select-none">
        <div className="relative flex flex-col items-end">
          {slides.map((slide, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={slide.title}
                onClick={() => {
                  if (swiperRef.current) {
                    swiperRef.current.slideToLoop(idx);
                  }
                }}
                className={`transition-all duration-500 font-semibold focus:outline-none px-6 py-2 rounded-full whitespace-nowrap bg-white/80 shadow-xl backdrop-blur-md ${isActive ? 'font-bold text-black' : 'text-gray-600'}`}
                style={{
                  minWidth: 110,
                  fontSize: isActive ? 18 : 14,
                  opacity: isActive ? 1 : 0.5,
                  transform: isActive ? 'scale(1)' : 'scale(0.85)',
                  zIndex: isActive ? 2 : 1,
                }}
              >
                <span className="transition-all duration-500 block">{slide.title}</span>
              </button>
            );
          })}
        </div>
      </div>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
