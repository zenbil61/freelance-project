
import newsList from "./newsData";

export default function NewsListPage() {
  return (
    <div className="container mx-auto py-16 px-4 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-white text-center tracking-tight mt-20">Tüm Haberler</h1>
      <div className="text-md md:text-lg font-medium mb-15 text-slate-200 text-center max-w-7xl mx-auto">
        Dengeas'tan en güncel projeler, sektörel gelişmeler ve şirketimizden haberler burada! Son gelişmeleri ve duyuruları bu sayfadan takip edebilirsiniz.
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {newsList.map((news) => (
          <div key={news.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group transition hover:shadow-2xl hover:-translate-y-1">
            <div className="relative h-56 overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">{news.date}</span>
            </div>
            <div className="p-6 flex flex-col gap-2">
              <h2 className="text-xl font-bold text-primary group-hover:text-green-600 transition-colors">{news.title}</h2>
              <p className="text-gray-600 text-sm mb-2 line-clamp-3">{news.summary}</p>
              <button className="mt-auto self-end text-green-600 font-semibold hover:underline">Haberi Gör</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
