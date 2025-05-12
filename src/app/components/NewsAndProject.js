"use client";
import React, { useState } from "react";
import FloatingLoginForm from "./ui/FloatingLoginForm";
const news = [
  {
    day: "07",
    month: "ARALIK",
    title: "Denge Planlama Elite Concept İçin Talep Topluyor",
    desc: "Yeni projeye büyük ilgi.",
  },
  {
    day: "16",
    month: "EYLÜL",
    title: "Elite Side’da Yaşam Başladı!",
    desc: "Mutlu aileler yeni evlerinde.",
  },
  {
    day: "14",
    month: "EKİM",
    title: "Elite City’e Büyük Ödül",
    desc: "Sektörde prestijli ödül.",
  },
  {
    day: "10",
    month: "EKİM",
    title: "İnşaat Sektörü Durursa Ekonomi Durur",
    desc: "Ekonomiye katkı vurgulandı.",
  },
  {
    day: "08",
    month: "KASIM",
    title: "48 Aya Sıfır Faizle Ev Sahibi Yapıyor",
    desc: "Kampanya fırsatı devam ediyor.",
  },
];

const newsWithImages = [
  {
    day: "07",
    month: "ARALIK",
    title: "Denge Planlama Elite Concept İçin Talep Topluyor",
    desc: "Yeni projeye büyük ilgi ve yatırımcıların yoğun ilgisiyle birlikte, bölgedeki gelişim hız kazandı. Proje kapsamında modern yaşam alanları ve sosyal donatılar öne çıkıyor.",
    image: "/projeler/askoop.webp",
  },
  {
    day: "16",
    month: "EYLÜL",
    title: "Elite Side’da Yaşam Başladı!",
    desc: "Mutlu aileler yeni evlerinde. Proje teslimlerinin ardından sosyal alanlar ve çevre düzenlemeleriyle site sakinleri konforlu bir yaşama kavuştu.",
    image: "/projeler/armutlu.jpg",
  },
  {
    day: "14",
    month: "EKİM",
    title: "Elite City’e Büyük Ödül",
    desc: "Sektörde prestijli ödül. Elite City, mimarisi ve sürdürülebilirlik vizyonuyla yılın projesi seçildi. Törene sektörün önde gelen isimleri katıldı.",
    image: "/projeler/vaditepe.webp",
  },
  {
    day: "10",
    month: "EKİM",
    title: "İnşaat Sektörü Durursa Ekonomi Durur",
    desc: "Ekonomiye katkı vurgulandı. Uzmanlar, inşaat sektörünün ülke ekonomisindeki rolüne dikkat çekerek yatırımların devam etmesi gerektiğini belirtti.",
    image: "/projeler/kuzeymarmara.jpg",
  },
  {
    day: "08",
    month: "KASIM",
    title: "48 Aya Sıfır Faizle Ev Sahibi Yapıyor",
    desc: "Kampanya fırsatı devam ediyor. 48 aya kadar sıfır faiz avantajı ile ev sahibi olmak isteyenler için kaçırılmayacak bir fırsat sunuluyor.",
    image: "/projeler/cerkezkoz-ozel-endustri.jpg",
  },
];
export default function NewsAndProject() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Otomatik olarak 3 saniyede bir aktif haberi değiştir
  React.useEffect(() => {
    if (hoveredIdx !== null) return; // Hover varsa otomatik geçişi durdur
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % newsWithImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [hoveredIdx]);

  // Hover olduğunda aktif indexi değiştir
  const handleMouseEnter = (idx) => {
    setHoveredIdx(idx);
    setActiveIdx(idx);
  };
  const handleMouseLeave = () => {
    setHoveredIdx(null);
  };

  return (
    <>
      <div className="container mx-auto flex items-center justify-center font-semibold text-5xl mt- text-gray-300">
        <span>Sektörden Haberler</span>
        <a className="flex items-center ml-10 gap-2 text-2xl text-green-300 underline cursor-pointer group">
          Tüm Haberler
          <svg
            className="w-6 h-6 text-green-20 group-hover:text-green-400 transition"
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
      <div className="container flex mx-auto min-h-[500px] flex-col md:flex-row justify-center items-center py-16 px-4 md:px-0">
        {/* Left: News */}
        <div className="flex-1 flex flex-col items-end md:mt-0 ">
          <ul>
            {newsWithImages.map((item, idx) => {
              const shortDesc = item.desc.length > 30 ? item.desc.slice(0, 30) + "..." : item.desc;
              const isActive = idx === activeIdx;
              return (
                <li
                  key={idx}
                  className={`flex items-center mb-3 group transition-all duration-300 rounded-xl cursor-pointer px-2 md:px-4 py-3${isActive ? ' bg-white/10' : ''}`}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex flex-col items-center mr-6">
                    <span className="text-white text-5xl font-bold leading-none">
                      {item.day}
                    </span>
                    <span className="text-gray-300 text-xs tracking-widest uppercase">
                      {item.month}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-xl font-semibold transition ${isActive ? 'text-green-300' : 'text-gray-200'} group-hover:text-green-300`}>
                      {item.title}
                    </span>
                    <span className="block text-gray-400 text-sm mt-1 truncate max-w-xs">
                      {shortDesc}
                      <a
                        href="#"
                        className="ml-2 inline-block align-middle text-secondary hover:text-cyan-300 font-semibold underline text-xs transition"
                      >
                        Detaylı Bilgi
                      </a>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Right: Project Card */}
        <div className="flex-1 flex flex-col items-center mt-12 md:mt-0 w-full h-full min-h-[350px] min-w-[320px]">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Card overlay (form) */}

              <FloatingLoginForm
                title={newsWithImages[activeIdx]?.title}
                description={newsWithImages[activeIdx]?.desc}
                image={newsWithImages[activeIdx]?.image}
                text={newsWithImages[activeIdx]?.desc}
              />
          </div>
        </div>
      </div>
    </>
  );
}
