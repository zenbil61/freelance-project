import React from "react";

export default function Footer() {
  return (
    <footer className="text-black font-semibold mt-12">
      <div className="container mx-auto px-6">
        <div className="bg-secondary rounded-3xl py-12 px-8 md:px-16 flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start">
          {/* Sol blok */}
          <div className="flex-1 mb-8 md:mb-0">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-extrabold tracking-wider">Denge Planlama</span>
              <button className="hidden flex items-center gap-2 bg-white px-4 py-1 rounded-full font-semibold">
                TR
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path strokeWidth="2" d="M2 12h20M12 2a15.3 15.3 0 010 20" />
                </svg>
              </button>
            </div>
            <p className="mb-6 max-w-xs">
              Bizi sosyal medya hesaplarımız üzerinden de takip edebilirsiniz.
            </p>
            <div className="flex gap-4 text-xl ">
              {/* Facebook */}
              <a href="#" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.127 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.127 22 17 22 12"/>
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.59-2.47.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.13 12.13 0 013 4.8a4.28 4.28 0 001.32 5.71c-.7-.02-1.36-.21-1.94-.53v.05a4.28 4.28 0 003.43 4.19c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.29 4.29 0 004 2.98A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.72 8.72 0 0024 4.59a8.5 8.5 0 01-2.54.7z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm5.5.75a1 1 0 110 2 1 1 0 010-2z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.8 8.001a2.75 2.75 0 00-1.94-1.94C18.2 6 12 6 12 6s-6.2 0-7.86.06a2.75 2.75 0 00-1.94 1.94A28.7 28.7 0 002 12a28.7 28.7 0 00.2 3.999 2.75 2.75 0 001.94 1.94C5.8 18 12 18 12 18s6.2 0 7.86-.06a2.75 2.75 0 001.94-1.94A28.7 28.7 0 0022 12a28.7 28.7 0 00-.2-3.999zM10 15V9l5 3-5 3z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v4.75z"/>
                </svg>
              </a>
            </div>
          </div>
          {/* Orta blok */}
          <div className="flex-1 flex flex-col gap-6 font-medium">
            <a href="#" className="hover:underline">Kurumsal</a>
            <a href="#" className="hover:underline">Projeler</a>
            <a href="#" className="hover:underline">Denge Planlama Bülten</a>
            <a href="#" className="hover:underline">İletişim</a>
          </div>
          {/* Sağ blok */}
          <div className="flex-1 flex flex-col gap-6 font-medium">
            <a href="#" className="hover:underline">Tamamlanan Projeler</a>
            <a href="#" className="hover:underline">Devam Eden Projeler</a>
            <a href="#" className="hover:underline">Planlanan Projeler</a>
            <a href="#" className="hover:underline">Denge Planlama Global</a>
          </div>
          {/* En sağ blok */}
          <div className="flex-1 flex flex-col gap-6">
            <a href="#" className="hover:underline">Yasal Uyarı</a>
            <a href="#" className="hover:underline">Çerez Politikası</a>
            <a href="#" className="hover:underline">Kişisel Verilerin Korunması Kanunu</a>
            <div className="flex items-center gap-3 mt-4">
              <span className="bg-white rounded-full p-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </span>
              <div>
                <div className="text-xs">Çağrı Merkezi</div>
                <div className="text-xl font-bold tracking-wider">444 4 444</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-white text-sm mt-4 pb-2">
          © 2022 Denge Planlama - Tüm hakları saklıdır
        </div>
      </div>
    </footer>
  );
}