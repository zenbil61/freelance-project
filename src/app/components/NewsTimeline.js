import React from "react";
import newsList from "../news/newsData";

// Tarihe göre azalan sırala
const sortedNews = [...newsList].sort((a, b) => new Date(b.date) - new Date(a.date));

export default function NewsTimeline() {
  return (
    <div className="w-full max-w-2xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Tüm Haberler</h2>
      <div className="relative border-l-2 border-green-300 pl-6">
        {sortedNews.map((news, idx) => (
          <div key={news.id} className="mb-10 group">
            <div className="absolute -left-4 top-2 w-6 h-6 bg-green-300 rounded-full border-4 border-white group-hover:bg-green-400 transition"></div>
            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
              <div className="text-sm text-gray-500 min-w-[100px] mb-2 md:mb-0">{new Date(news.date).toLocaleDateString("tr-TR")}</div>
              <div className="flex-1 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-lg shadow p-4 hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                  <img src={news.image} alt={news.title} className="w-20 h-20 object-cover rounded-md mb-2 md:mb-0" />
                  <div>
                    <div className="font-semibold text-lg text-green-800 mb-1">{news.title}</div>
                    <div className="text-gray-700 text-base mb-1">{news.summary}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
