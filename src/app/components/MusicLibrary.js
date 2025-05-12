"use client";
import React, { useState } from "react";
const background = "bg-green-100";
const songs = [
  {
    title: "Armutlu Termal World",
    artist: "22 Nisan 2024",
    img: "/projeler/armutlu.jpg",
    bg: background,
    text: "text-blue-900",
    textSub: "text-blue-800",
    gradient: "to-blue-600",
    desc: "Yalova'nın Armutlu ilçesinde yer alan Termal World projesi, modern yaşam alanları ve doğal güzellikleriyle öne çıkıyor. Sağlık ve huzur arayanlar için eşsiz bir yaşam fırsatı sunuyor.",
  },
  {
    title: "Kuzey Marmara Özel Endüstri Bölgesi",
    artist: "22 Nisan 2024",
    img: "/projeler/armutlu.jpg",
    bg: background,
    text: "text-blue-900",
    textSub: "text-blue-800",
    gradient: "to-blue-600",
    desc: "Kuzey Marmara'da konumlanan bu özel endüstri bölgesi, sanayi ve lojistik yatırımları için stratejik bir merkezdir. Yüksek altyapı standartları ve ulaşım kolaylığı ile dikkat çeker.",
  },
  {
    title: "Çerkezköy Özel Endüstri Bölgesi",
    artist: "22 Nisan 2024",
    img: "/projeler/armutlu.jpg",
    bg: background,
    text: "text-blue-900",
    textSub: "text-blue-800",
    gradient: "to-blue-600",
    desc: "Çerkezköy'de yer alan bu endüstri bölgesi, üretim ve ihracat odaklı firmalar için modern tesisler sunar. Bölge, sürdürülebilir kalkınma vizyonuyla geliştirilmiştir.",
  },
  {
    title: "Vaditepe Küçük Sanayi Sitesi",
    artist: "22 Nisan 2024",
    img: "/projeler/armutlu.jpg",
    bg: background,
    text: "text-blue-900",
    textSub: "text-blue-800",
    gradient: "to-blue-600",
    desc: "Vaditepe Küçük Sanayi Sitesi, esnaf ve küçük işletmeler için modern ve güvenli iş alanları sunar. Kolay ulaşım ve sosyal imkanlarla öne çıkar.",
  },
  {
    title: "Tümünü gör",
    artist: "22 Nisan 2024",
    img: "/projeler/armutlu.jpg",
    bg: "bg-white",
    text: "text-blue-900",
    textSub: "text-blue-800",
    gradient: "to-blue-600",
    desc: "Tüm projelerimizi görmek ve detaylı bilgi almak için bu bölümü ziyaret edebilirsiniz. Sunduğumuz tüm hizmet ve projeler hakkında bilgi edinin.",
  },
];

export default function MusicLibrary() {
  const [lastHovered, setLastHovered] = useState(0);
  const [hovered, setHovered] = useState(null);
  const song = hovered !== null ? songs[hovered] : songs[lastHovered];
  return (
    <div className="">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-8 mt-4">
          {/* Sol: Detay */}
          <div className="md:w-2/3 mt-6 w-full flex flex-col justify-center items-center rounded-3xl p-0 min-h-[400px] shadow-xl relative overflow-hidden bg-white border border-gray-200">
            {/* Kurumsal arka plan: sade degrade, grid desen, köşelerde minimal svg, overlay */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none z-0">
              {/* Soft gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f4f8fb] via-white to-[#e9f3f7]" />
              {/* İnce grid/desen */}
              <svg className="absolute inset-0 w-full h-full opacity-10" width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#b6c6d6" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              {/* Minimal köşe svg'leri */}
              <svg className="absolute top-0 left-0 opacity-20" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="36" stroke="#2563eb" strokeWidth="2" fill="none" />
              </svg>
              <svg className="absolute bottom-0 right-0 opacity-10" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="100" height="100" rx="24" stroke="#10b981" strokeWidth="2" fill="none" />
              </svg>
              {/* Hafif beyaz overlay */}
              <div className="absolute inset-0 bg-white/60" />
            </div>
            <div className="relative z-10 flex flex-col w-full p-12">
              <div className="flex flex-row w-full gap-8 items-start mb-4">
                <img
                  src={song.img}
                  alt={song.artist}
                  className="w-[370px] h-[270px] object-cover rounded-2xl shadow-2xl border-4 border-white/80"
                />
                <div className="flex flex-col justify-start flex-1 h-full pt-2">
                  <h2 className="text-3xl font-extrabold text-blue-900 mb-2 drop-shadow-lg text-left leading-tight">
                    {song.title}
                  </h2>
                  <div className="text-2xl text-blue-800 font-light mb-4 text-left leading-tight">
                    {song.artist}
                  </div>
                  <div className="flex flex-col w-full gap-2 mt-2">
                    <button className="px-8 py-3 bg-gradient-to-r max-w-50 mt-10 from-blue-600 to-green-500 text-white rounded-full shadow-lg text-lg font-semibold hover:scale-105 hover:from-blue-700 hover:to-green-600 transition-all duration-200">
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-xl text-blue-900/90 font-normal mt-8 text-left mx-auto">
                {song.desc}
              </div>
            </div>
          </div>
          {/* Sağ: Liste */}
          <div className="md:w-1/3 w-full">
            <div className="mx-auto">
              <div className="flex flex-col">
                {songs.map((s, i) => (
                  <div
                    key={s.title}
                    className={`relative flex flex-col justify-end overflow-hidden rounded-b-xl pt-6 cursor-pointer transition-all ${
                      i % 2 === 1 ? "-mr-6 pr-6" : ""
                    }`}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => {
                      setHovered(null);
                      setLastHovered(i);
                    }}
                  >
                    <div
                      className={`group relative flex rounded-2xl ${s.bg} before:absolute before:inset-y-0 before:right-0 before:w-1/2 before:rounded-r-xl before:bg-gradient-to-r before:from-transparent before:${s.gradient} before:opacity-0 before:transition before:duration-500 hover:before:opacity-100`}
                    >
                      <img
                        className={`w-[6rem] rounded-3xl p-2  transition duration-300 `}
                        src={s.img}
                        alt={s.artist}
                      />

                      <div className="relative space-y-1 p-4 transition group-hover:scale-[1.1]">
                        <h4
                          className={`text-lg transition duration-300 font-bold ${s.text}`}
                        >
                          {s.title}
                        </h4>
                        <div className={`relative h-6 ${s.textSub} text-sm`}>
                          <span className="transition duration-300 group-hover:invisible group-hover:opacity-0">
                            {s.artist}
                          </span>
                          <span className="w-max flex items-center gap-3 invisible absolute left-0 top-0 translate-y-3 transition duration-300 group-hover:visible group-hover:translate-y-0">
                            <span>Detayını aç</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 -translate-x-4 transition duration-300 group-hover:translate-x-0"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
