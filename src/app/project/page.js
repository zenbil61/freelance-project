"use client";
import React, { useState } from "react";

const project = {
  title: "Kuzey Marmara Otoyolu",
  locationDetail: "ARNAVUTKÖY-İSTANBUL",
  employer: "S.S. Kuzey Marmara Toplu İşyeri Yapı Kooperatifi",
  dateDetail: "2022 - DEVAM EDİYOR",
  area: "963.777 m²",
  description:
    "Kuzey Marmara Otoyolu, İstanbul ve çevresinin ulaşım altyapısını güçlendiren, modern mühendislik çözümleriyle hayata geçirilmiş bir mega projedir. Proje kapsamında çevre dostu uygulamalar, akıllı ulaşım sistemleri ve sürdürülebilirlik ön planda tutulmuştur.",
  images: [
    "/projeler/kuzeymarmara.jpg",
    "/projeler/cerkezkoz-ozel-endustri.jpg",
    "/projeler/incirli.jpg",
  ],
  features: [
    "Toplam uzunluk: 430 km",
    "Çok şeritli modern yol altyapısı",
    "Akıllı ulaşım sistemleri",
    "Çevre dostu uygulamalar",
    "Bölgesel kalkınmaya katkı",
  ],
};

export default function ProjectDetail() {
  const [selectedImg, setSelectedImg] = useState(0);
  const services = [
    {
      title: "Danışmanlık",
      description:
        "Şehircilik, imar, planlama ve uygulama süreçlerinde uzman danışmanlık.",
      image: "/hizmetlerimiz/danismanlik.jpg",
    },
    {
      title: "Etüt & Araştırma",
      description: "Proje öncesi analiz, fizibilite ve araştırma hizmetleri.",
      image: "/hizmetlerimiz/etut-arastirma.jpg",
    },
    {
      title: "İmar Planlama",
      description: "Kentsel ve bölgesel imar planlarının hazırlanması.",
      image: "/hizmetlerimiz/imar-planlama.jpg",
    },
    {
      title: "İmar Uygulaması",
      description: "İmar uygulama projeleri ve arazi düzenlemeleri.",
      image: "/hizmetlerimiz/imar-uygulamasi.jpg",
    },
    {
      title: "İnşaat Kontrollüğü",
      description: "İnşaat süreçlerinde kontrol, denetim ve raporlama.",
      image: "/hizmetlerimiz/insaat-kontrollugu.jpg",
    },
    {
      title: "İşletme Yönetimi",
      description: "Gayrimenkul ve tesis yönetimi hizmetleri.",
      image: "/hizmetlerimiz/isletme-yonetimi.jpg",
    },
    {
      title: "Kamulaştırma",
      description: "Kamulaştırma projeleri ve hukuki süreç yönetimi.",
      image: "/hizmetlerimiz/kamulastirma.jpg",
    },
    {
      title: "Mühendislik Tasarımları",
      description: "Altyapı, üstyapı ve mühendislik projeleri tasarımı.",
      image: "/hizmetlerimiz/muhendislik-tasarimlari.jpg",
    },
    {
      title: "Proje Geliştirme",
      description: "Yatırım ve proje geliştirme danışmanlığı.",
      image: "/hizmetlerimiz/proje-gelistirme.jpg",
    },
    {
      title: "Proje Yönetimi",
      description: "Proje planlama, koordinasyon ve yönetim hizmetleri.",
      image: "/hizmetlerimiz/proje-yonetimi.jpg",
    },
    {
      title: "Etüt & Araştırma (Tekrar)",
      description:
        "Tekrar: Proje öncesi analiz, fizibilite ve araştırma hizmetleri.",
      image: "/hizmetlerimiz/etut-arastirma.jpg",
    },
    {
      title: "İmar Planlama (Tekrar)",
      description: "Tekrar: Kentsel ve bölgesel imar planlarının hazırlanması.",
      image: "/hizmetlerimiz/imar-planlama.jpg",
    },
  ];
  return (
    <div className="container mx-auto px-2 py-12 min-h-screen flex flex-col lg:flex-row gap-8 items-start justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8 mt-20 flex-1">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
          {project.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
          <span>{project.date}</span>
          <span className="mx-2">•</span>
          <span>{project.location}</span>
        </div>
        {/* Ana görsel */}
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow mb-4 bg-slate-100 flex items-center justify-center">
          <img
            src={project.images[selectedImg]}
            alt={project.title}
            className="object-cover w-full h-full transition-all duration-300"
          />
        </div>
        {/* Küçük görseller */}
        <div className="flex gap-3 mb-8 justify-center">
          {project.images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setSelectedImg(idx)}
              className={`rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                selectedImg === idx ? "border-green-300" : "border-transparent"
              }`}
            >
              <img
                src={img}
                alt={project.title + " görseli " + (idx + 1)}
                className="w-20 h-14 object-cover hover:scale-105 transition-transform"
              />
            </button>
          ))}
        </div>

        {/* Proje Sabit Detayları */}
        <div className="w-full mb-6">
          <div className="rounded-xl overflow-hidden border border-gray-100 bg-gray-50">
            <div className="grid grid-cols-3">
              <div className="py-2 px-3 border-b border-gray-100 font-bold text-base text-gray-900 bg-gray-50 col-span-1">Konum :</div>
              <div className="py-2 px-3 border-b border-gray-100 text-sm text-gray-900 bg-white col-span-2">{project.locationDetail}</div>
              <div className="py-2 px-3 border-b border-gray-100 font-bold text-base text-gray-900 bg-gray-50 col-span-1">İşveren :</div>
              <div className="py-2 px-3 border-b border-gray-100 text-sm text-gray-900 bg-white col-span-2">{project.employer}</div>
              <div className="py-2 px-3 border-b border-gray-100 font-bold text-base text-gray-900 bg-gray-50 col-span-1">Tarih :</div>
              <div className="py-2 px-3 border-b border-gray-100 text-sm text-gray-900 bg-white col-span-2">{project.dateDetail}</div>
              <div className="py-2 px-3 font-bold text-base text-gray-900 bg-gray-50 col-span-1">Proje Alanı :</div>
              <div className="py-2 px-3 text-sm text-gray-900 bg-white flex items-center gap-1 col-span-2">{project.area}</div>
            </div>
          </div>
        </div>
        <p className="text-lg text-slate-700 mb-6">{project.description}</p>
        <ul className="list-disc pl-6 text-primary mb-4 space-y-1">
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      {/* Sağda Hizmetler Alanı */}
      <aside className="hidden lg:block w-80 flex-shrink-0 mt-20">
        <div className="bg-transparent rounded-2xl p-0">
          <div className="flex items-center justify-between mb-4 px-2">
            <h3 className="text-xl font-bold text-blue-100">
              Verdiğimiz Hizmetler
            </h3>
          </div>

          <ul className="space-y-4">
            {services.map((service, i) => (
              <li key={i}>
                <div className="flex items-center gap-4 group rounded-xl transition bg-transparent hover:bg-blue-900/40 p-2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-16 h-12 object-cover rounded-lg shadow group-hover:scale-105 transition-transform border border-blue-900/40"
                  />
                  <div>
                    <div className="text-base font-semibold text-blue-100 group-hover:text-white transition-colors">
                      {service.title}
                    </div>
                    <div className="text-xs text-blue-200 mt-1">
                      {service.description}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
