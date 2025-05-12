
export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-[#101a2b]">
      <div className="container mx-auto px-4 py-16">
      {/* Üst Kısım */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 mt-15">
        <img
          src="/projeler/kuzeymarmara.jpg"
          alt="Denge Hakkında"
          className="rounded-2xl shadow-xl w-full object-cover h-[340px] md:h-[420px]"
        />
        <div>
          <h2 className="text-green-400 text-2xl font-bold mb-2">Denge Hakkında</h2>
          <h1 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4 leading-tight">GELECEĞE DAHA İYİ ŞEKİLDE HAZIRLANIN</h1>
          <div className="text-gray-100 text-lg mb-3">
            DENGE A.Ş., kurulduğu günden bugüne başarılı bir şekilde tamamladığı yüksek bütçeli projeleri ile sektörün yükselen yıldızları arasında yer almayı başarmıştır. Nitelikli kadrosu ve çözüm ortakları ile birlikte, başta Sanayi ve Lojistik alanlarında olmak üzere, her daim nitelikli ve yüksek standartlı hizmetler sunmuştur.
          </div>
          <div className="text-gray-200 text-lg">
            Bugün, Türkiye'nin sayılı Mühendislik ve Müşavirlik firmalarından olan DENGE A.Ş., kendi alanında geleceğe güvenli adımlarla ilerleyerek, çevre bilinci ve insana saygı değerlerine olan sorumluluklarının bilinci ile, sektörün lideri olma yönündeki net hedefinde doğru kararlılıkla ilerlemektedir.
          </div>
        </div>
      </div>

      {/* Hizmetlerimiz ve Listesi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
        <div>
          <h2 className="text-green-400 text-2xl font-bold mb-2">Hizmetlerimiz</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4 leading-tight">KALİTEMİZİ KANITLAYAN DENEYİMLERİMİZ</h3>
          <div className="text-gray-100 text-lg">
            DENGE A.Ş. farklı disiplinlerde ve geniş bir yelpazede Tasarım, Planlama, Mimarlık, Mühendislik ve Müşavirlik Hizmetleri sunmaktadır. Özellikle SANAYİ ve LOJİSTİK alanlarındaki bilgi birikimi ve tecrübesi ile daha yeşil ve inovatif bir SANAYİ konusundaki vizyonu her daim ön planda olmaktadır. SANAYİ yatırımlarının daha doğru, daha ekonomik ve geleceğe yönelik, uzun vadeli, sürdürülebilir olmasının sağlanması için çözümler sunuyoruz.
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-gray-200 text-base mt-6 md:mt-0">
          <div className="space-y-3">
            <div className="flex items-center gap-2"><span className="text-green-400">&#10003;</span> Proje Geliştirme</div>
            <div className="flex items-center gap-2"><span className="text-green-400">&#10003;</span> Planlama/Analiz</div>
            <div className="flex items-center gap-2"><span className="text-green-400">&#10003;</span> Proje Yönetimi</div>
            <div className="flex items-center gap-2"><span className="text-green-400">&#10003;</span> Danışmanlık</div>
            <div className="flex items-center gap-2"><span className="text-green-400">&#10003;</span> İmar Uygulaması</div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2"><span className="text-green-400">&#10003;</span> Etüt/Araştırma</div>
            <div className="flex items-center gap-2"><span className="text-green-400">&#10003;</span> Mühendislik Tasarımları</div>
            <div className="flex items-center gap-2"><span className="text-green-400">&#10003;</span> İnşaat Kontrollüğü</div>
            <div className="flex items-center gap-2"><span className="text-green-400">&#10003;</span> İşletme Yönetimi</div>
            <div className="flex items-center gap-2"><span className="text-green-400">&#10003;</span> Kamulaştırma</div>
          </div>
        </div>
      </div>

      {/* Becerilerimiz */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <img
          src="/projeler/cerkezkoz-ozel-endustri.jpg"
          alt="Becerilerimiz"
          className="rounded-2xl shadow-xl w-full object-cover h-[300px] md:h-[340px]"
        />
        <div>
          <h2 className="text-green-400 text-2xl font-bold mb-2">Becerilerimiz</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4 leading-tight">ETKİLİ TAKIM ÇALIŞMASI</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between font-semibold text-green-300 mb-1">
                <span className="text-gray-100">Müşavirlik</span>
                <span className="text-gray-100">100%</span>
              </div>
              <div className="w-full h-4 bg-green-100 rounded-full overflow-hidden">
                <div className="h-4 bg-green-400 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between font-semibold text-green-300 mb-1">
                <span className="text-gray-100">Mühendislik</span>
                <span className="text-gray-100">100%</span>
              </div>
              <div className="w-full h-4 bg-green-100 rounded-full overflow-hidden">
                <div className="h-4 bg-green-400 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between font-semibold text-green-300 mb-1">
                <span className="text-gray-100">Mimarlık</span>
                <span className="text-gray-100">100%</span>
              </div>
              <div className="w-full h-4 bg-green-100 rounded-full overflow-hidden">
                <div className="h-4 bg-green-400 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
