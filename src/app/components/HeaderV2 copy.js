import React from "react";

const Header = () => {
  return (
    <section className="relative overflow-hidden min-h-screen w-full flex items-center">
      {/* Blurred, semi-opaque background overlay */}
      <div className="absolute inset-0 w-full h-full z-0 backdrop-blur-xl bg-gradient-to-br from-white/80 via-gray-100/80 to-green-50/80 dark:from-gray-900/80 dark:via-gray-900/80 dark:to-gray-800/80" style={{backgroundImage: 'url(/projeler/banner_webp.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: 0.18}}></div>
      {/* Decorative blurred circle */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-300/20 rounded-full blur-3xl z-0"></div>
      <div className="container mx-auto px-2 sm:px-4 py-20 sm:py-32 md:grid md:grid-cols-2 md:items-center md:gap-8 lg:px-12 lg:py-40 relative z-10 min-h-screen w-full">
        <div className="w-full max-w-5xl text-left mt-4 flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight dark:text-white">
            <span className="inline-block bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient-x">Denge AŞ</span>
            <span className="block mt-2">ile daha iyi bir <span className="text-green-500">gelecek</span> inşa edin!</span>
          </h1>
          <p className="text-lg sm:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed">
            DENGE A.Ş. kurulduğu tarihten bu yana, işverenin ihtiyaçlarının belirlendiği, her projenin özgün ve bütünsel bir yaklaşımla ele alındığı, zaman, maliyet ve fonksiyonellik temelinde hareket etmeyi kendisine ilke edinmiştir.
          </p>
          <div className="flex gap-4 flex-wrap sm:mt-2">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-400 to-cyan-500 px-7 py-3 font-semibold text-white shadow-lg hover:from-cyan-500 hover:to-green-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2 text-lg"
              href="#about"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
              Hakkımızda
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-7 py-3 font-semibold text-gray-700 shadow-sm bg-white hover:bg-gray-100 hover:text-green-600 dark:border-gray-700 dark:text-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:text-white transition-all duration-200 text-lg"
              href="#services"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 17l4 4 4-4m0-5V3m-8 9v6a4 4 0 004 4h4" /></svg>
              Hizmetlerimiz
            </a>
          </div>
        </div>
        <div className="relative flex justify-end items-center mt-10 md:mt-0 w-full">
          <div className="absolute -inset-4 bg-gradient-to-tr from-green-200/40 via-cyan-200/30 to-blue-200/20 rounded-3xl blur-2xl z-0"></div>
          <img
            src="/projeler/banner_webp.webp"
            alt="Armutlu Termal World"
            className="hidden rounded-3xl shadow-2xl w-full max-w-2xl relative z-10 border-4 border-white/80 dark:border-gray-800 transition-transform duration-500 hover:scale-105 cursor-pointer"
          />
        </div>
      </div>
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
};

export default Header;
