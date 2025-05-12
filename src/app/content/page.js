// src/App.jsx
import React from "react";

export default function Content() {
  // Önerilen haberler örnek verisi
  const suggested = [
    {
      title: "Akıllı Şehirler ve Gelecek",
      img: "/projeler/vaditepe.webp",
      date: "2 Mayıs 2025",
      link: "#",
    },
    {
      title: "Enerji Verimliliği İçin 5 Yol",
      img: "/projeler/armutlu.jpg",
      date: "28 Nisan 2025",
      link: "#",
    },
    {
      title: "Konut Projelerinde Yeni Trendler",
      img: "/projeler/askoop.webp",
      date: "15 Nisan 2025",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto justify-center flex px-2 py-12 min-h-screen">
      <div className="flex gap-8">
        <article className="mt-20 prose prose-lg md:prose-xl max-w-4xl rounded-2xl shadow-2xl p-8 text-slate-700 bg-white flex-1">
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold text-primary mb-2">
              Kentsel Dönüşümde Yeni Yaklaşımlar
            </h1>
            <p className="text-primary text-lg font-medium">8 Mayıs 2025 </p>
          </header>
          <img
            src="/projeler/circir_mahallesi.webp"
            alt="Kentsel Dönüşüm"
            className="rounded-xl shadow-lg mb-8 w-full object-cover max-h-72"
          />
          <section className="space-y-6">
            <p>
              Kentsel dönüşüm, şehirlerin sürdürülebilirliği ve yaşam
              kalitesinin artırılması için günümüzde büyük önem taşıyor. Modern
              şehircilik anlayışıyla birlikte, sadece binaların yenilenmesi
              değil, aynı zamanda sosyal, ekonomik ve çevresel faktörlerin de
              göz önünde bulundurulması gerekiyor.
            </p>
            <h2 className="text-2xl font-bold text-primary mt-8">
              Sürdürülebilirlik ve Toplum Katılımı
            </h2>
            <p>
              Başarılı bir kentsel dönüşüm projesi, yerel halkın ihtiyaçlarını
              ve beklentilerini dikkate almalıdır. Katılımcı planlama süreçleri,
              projelerin hem daha verimli hem de toplum tarafından
              benimsenmesini sağlar.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-green-700 bg-green-50 rounded-md">
              "Kentsel dönüşümde başarı, sadece fiziksel değişimle değil,
              toplumsal dönüşümle de ölçülür."
            </blockquote>
            <h2 className="text-2xl font-bold text-primary mt-8">
              Çevre Dostu Yaklaşımlar
            </h2>
            <p>
              Yeni projelerde yeşil alanların artırılması, enerji verimliliği ve
              çevre dostu malzemelerin kullanımı ön plana çıkıyor. Bu sayede hem
              doğa korunuyor hem de şehir sakinlerine daha sağlıklı yaşam
              alanları sunuluyor.
            </p>
            <ul className="list-disc pl-6 text-green-900">
              <li>Enerji verimli binalar</li>
              <li>Geniş yeşil alanlar</li>
              <li>Toplu taşıma entegrasyonu</li>
              <li>Akıllı şehir teknolojileri</li>
            </ul>
            <p>
              Sonuç olarak, kentsel dönüşüm projelerinde modern yaklaşımlar ve
              toplumun aktif katılımı, şehirlerimizin geleceğini şekillendirmede
              anahtar rol oynuyor.
            </p>
          </section>
        </article>
        {/* Önerilen Diğer Haberler */}
        <aside className="hidden lg:block  w-80 flex-shrink-0">
          <div className="mt-20 bg-transparent rounded-2xl p-0">
            <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="text-xl font-bold text-blue-100">Son Haberler</h3>
              <a href="#" className="text-green-300 text-sm font-semibold hover:underline transition-colors">Tümünü Gör</a>
            </div>
            <ul className="space-y-4">
              {suggested.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    className="flex items-center gap-4 group rounded-xl transition bg-transparent hover:bg-blue-900/40 p-2"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-16 h-12 object-cover rounded-lg shadow group-hover:scale-105 transition-transform border border-blue-900/40"
                    />
                    <span className="text-base font-semibold text-blue-100 group-hover:text-white transition-colors flex flex-col">
                      {item.title}
                      <span className="text-xs text-blue-200 mt-1">{item.date}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Projeler Alanı */}
          <div className="mt-20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-blue-100">Projeler</h3>
              <a href="#" className="text-green-300 text-sm font-semibold hover:underline transition-colors">Tümünü Gör</a>
            </div>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 group rounded-xl transition bg-transparent hover:bg-blue-900/40 p-2"
                >
                  <img
                    src="/projeler/kuzeymarmara.jpg"
                    alt="Kuzey Marmara Otoyolu"
                    className="w-16 h-12 object-cover rounded-lg shadow group-hover:scale-105 transition-transform border border-blue-900/40"
                  />
                  <span className="text-base font-semibold text-blue-100 group-hover:text-white transition-colors">
                    Kuzey Marmara Otoyolu
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 group rounded-xl transition bg-transparent hover:bg-blue-900/40 p-2"
                >
                  <img
                    src="/projeler/cerkezkoz-ozel-endustri.jpg"
                    alt="Çerkezköy Endüstri Bölgesi"
                    className="w-16 h-12 object-cover rounded-lg shadow group-hover:scale-105 transition-transform border border-blue-900/40"
                  />
                  <span className="text-base font-semibold text-blue-100 group-hover:text-white transition-colors">
                    Çerkezköy Endüstri Bölgesi
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 group rounded-xl transition bg-transparent hover:bg-blue-900/40 p-2"
                >
                  <img
                    src="/projeler/incirli.jpg"
                    alt="İncirli Konutları"
                    className="w-16 h-12 object-cover rounded-lg shadow group-hover:scale-105 transition-transform border border-blue-900/40"
                  />
                  <span className="text-base font-semibold text-blue-100 group-hover:text-white transition-colors">
                    İncirli Konutları
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 group rounded-xl transition bg-transparent hover:bg-blue-900/40 p-2"
                >
                  <img
                    src="/projeler/kuzeymarmara.jpg"
                    alt="Kuzey Marmara Otoyolu"
                    className="w-16 h-12 object-cover rounded-lg shadow group-hover:scale-105 transition-transform border border-blue-900/40"
                  />
                  <span className="text-base font-semibold text-blue-100 group-hover:text-white transition-colors">
                    Kuzey Marmara Otoyolu
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 group rounded-xl transition bg-transparent hover:bg-blue-900/40 p-2"
                >
                  <img
                    src="/projeler/cerkezkoz-ozel-endustri.jpg"
                    alt="Çerkezköy Endüstri Bölgesi"
                    className="w-16 h-12 object-cover rounded-lg shadow group-hover:scale-105 transition-transform border border-blue-900/40"
                  />
                  <span className="text-base font-semibold text-blue-100 group-hover:text-white transition-colors">
                    Çerkezköy Endüstri Bölgesi
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-4 group rounded-xl transition bg-transparent hover:bg-blue-900/40 p-2"
                >
                  <img
                    src="/projeler/incirli.jpg"
                    alt="İncirli Konutları"
                    className="w-16 h-12 object-cover rounded-lg shadow group-hover:scale-105 transition-transform border border-blue-900/40"
                  />
                  <span className="text-base font-semibold text-blue-100 group-hover:text-white transition-colors">
                    İncirli Konutları
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
