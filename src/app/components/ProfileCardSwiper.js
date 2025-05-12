// ProfileCardSwiper.js
"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const profiles = [
  {
    title: "Danışmanlık",
    bg: "/hizmetlerimiz/danismanlik.jpg",
    detail:
      "Şehircilik, imar, planlama ve uygulama süreçlerinde uzman danışmanlık.",
  },
  {
    title: "Etüt & Araştırma",
    bg: "/hizmetlerimiz/etut-arastirma.jpg",
    detail: "Proje öncesi analiz, fizibilite ve araştırma hizmetleri.",
  },
  {
    title: "İmar Planlama",
    bg: "/hizmetlerimiz/imar-planlama.jpg",
    detail: "Kentsel ve bölgesel imar planlarının hazırlanması.",
  },
  {
    title: "İmar Uygulaması",
    bg: "/hizmetlerimiz/imar-uygulamasi.jpg",
    detail: "İmar uygulama projeleri ve arazi düzenlemeleri.",
  },
  {
    title: "İnşaat Kontrollüğü",
    bg: "/hizmetlerimiz/insaat-kontrollugu.jpg",
    detail: "İnşaat süreçlerinde kontrol, denetim ve raporlama.",
  },
  {
    title: "İşletme Yönetimi",
    bg: "/hizmetlerimiz/isletme-yonetimi.jpg",
    detail: "Gayrimenkul ve tesis yönetimi hizmetleri.",
  },
  {
    title: "Kamulaştırma",
    bg: "/hizmetlerimiz/kamulastirma.jpg",
    detail: "Kamulaştırma projeleri ve hukuki süreç yönetimi.",
  },
  {
    title: "Mühendislik Tasarımları",
    bg: "/hizmetlerimiz/muhendislik-tasarimlari.jpg",
    detail: "Altyapı, üstyapı ve mühendislik projeleri tasarımı.",
  },
  {
    title: "Proje Geliştirme",
    bg: "/hizmetlerimiz/proje-gelistirme.jpg",
    detail: "Yatırım ve proje geliştirme danışmanlığı.",
  },
  {
    title: "Proje Yönetimi",
    bg: "/hizmetlerimiz/proje-yonetimi.jpg",
    detail: "Proje planlama, koordinasyon ve yönetim hizmetleri.",
  },
  {
    title: "Etüt & Araştırma (Tekrar)",
    bg: "/hizmetlerimiz/etut-arastirma.jpg",
    detail: "Tekrar: Proje öncesi analiz, fizibilite ve araştırma hizmetleri.",
  },
  {
    title: "İmar Planlama (Tekrar)",
    bg: "/hizmetlerimiz/imar-planlama.jpg",
    detail: "Tekrar: Kentsel ve bölgesel imar planlarının hazırlanması.",
  },
];

export default function ProfileCardSwiper() {
  const [hovered, setHovered] = useState(null);
  // 6 üstte, 6 altta olacak şekilde iki satıra böl
  const topRow = profiles.slice(0, 6);
  const bottomRow = profiles.slice(6, 12);
  return (
    <>
      <div className="container mx-auto flex items-center justify-between font-semibold text-5xl mb-5 mt-20 text-gray-300">
        <span>Hizmetlerimiz</span>
        <a className="flex items-center gap-2 text-2xl text-green-300 underline whitespace-nowrap cursor-pointer group">
          Tümünü Gör
          <svg
            className="w-6 h-6 text-green-300 group-hover:text-green-400 transition"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      <div className="container mx-auto mt-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-6 justify-between">
            {topRow.map((profile, idx) => (
              <div
                key={profile.title}
                className={`relative py-8 flex h-[12rem] rounded-3xl w-[15rem] flex-col items-center justify-center overflow-hidden bg-black bg-clip-border text-center text-gray-700 transition-all duration-300 group cursor-pointer ${
                  hovered === idx ? "scale-110 z-10" : "scale-100"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 m-0 h-full w-full overflow-hidden bg-transparent"
                  style={{
                    backgroundImage: `url('${profile.bg}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Stronger black overlay */}
                  <div className="absolute inset-0 w-full h-full bg-black/40"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-6 flex flex-col items-center justify-end h-full">
                  <h2
                    className={`text-lg font-bold text-white antialiased w-full left-0 text-center transition-all duration-500 ${
                      hovered === idx
                        ? "mb-6 translate-y-0 absolute top-1/4 z-20 opacity-100"
                        : "mb-6 translate-y-4 relative opacity-80"
                    }`}
                    style={hovered === idx ? { top: "20%" } : {}}
                  >
                    {profile.title}
                  </h2>
                  {/* Hover'da modern buton gelsin */}
                  <div
                    className={`flex justify-center w-full transition-all duration-300 ${
                      hovered === idx
                        ? "opacity-100 max-h-40 translate-y-5"
                        : "opacity-0 max-h-0 translate-y-8 overflow-hidden"
                    }`}
                  >
                    <button className="btn-modern">
                      Detayına Git
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-6 justify-between">
            {bottomRow.map((profile, idx) => (
              <div
                key={profile.title}
                className={`relative py-8 flex h-[12rem] rounded-3xl w-[15rem] flex-col items-center justify-center overflow-hidden bg-black bg-clip-border text-center text-gray-700 transition-all duration-300 group cursor-pointer ${
                  hovered === idx + 6 ? "scale-110 z-10" : "scale-100"
                }`}
                onMouseEnter={() => setHovered(idx + 6)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 m-0 h-full w-full overflow-hidden bg-transparent"
                  style={{
                    backgroundImage: `url('${profile.bg}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Stronger black overlay */}
                  <div className="absolute inset-0 w-full h-full bg-black/40"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-6 flex flex-col items-center justify-end h-full">
                  <h2
                    className={`text-lg font-bold text-white antialiased w-full left-0 text-center transition-all duration-500 ${
                      hovered === idx + 6
                        ? "mb-6 translate-y-0 absolute top-1/4 z-20 opacity-100"
                        : "mb-6 translate-y-4 relative opacity-80"
                    }`}
                    style={hovered === idx + 6 ? { top: "20%" } : {}}
                  >
                    {profile.title}
                  </h2>
                  {/* Hover'da modern buton gelsin */}
                  <div
                    className={`flex justify-center w-full transition-all duration-300 ${
                      hovered === idx + 6
                        ? "opacity-100 max-h-40 translate-y-5"
                        : "opacity-0 max-h-0 translate-y-8 overflow-hidden"
                    }`}
                  >
                    <button className="btn-modern">
                      Detayına Git
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
