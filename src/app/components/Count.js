import React from "react";

export default function Count() {
  return (
    <div className="content lg:container mx-auto px-4 relative z-2 mt-20 mb-20">
      <div className="heading  text-[64px] ct:text-[52px] lg:text-[44px] md:text-[36px] sm:text-[28px] xs:text-[22px] text-white font-extrabold leading-tight text-center mb-[80px] ct:mb-[60px] lg:mb-[40px] md:mb-[30px] drop-shadow-xl">
        Geleceğe yön veren yapılar<br />
        oluşturuyoruz.
      </div>
      <div className="info flex justify-between md:items-center md:flex-row space-x-[45px] md:space-x-0 md:space-y-[30px] mb-[80px] ct:mb-[60px] lg:mb-[40px] md:mb-[40px]">
        {/* 1. Kutu */}
        <div className="item max-w-[400px] bg-gradient-to-br from-[#fff6] to-[#fff1] rounded-2xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300 border border-white/20 backdrop-blur-md">
          <div className="number counter text-center text-white text-[90px] ct:text-[70px] lg:text-[60px] md:text-[48px] sm:text-[38px] xs:text-[30px] font-extrabold leading-none mb-[16px] drop-shadow-lg tracking-tight">
            30+
          </div>
          <div className="title text-[28px] lg:text-[22px] md:text-[20px] sm:text-[18px] text-white leading-tight text-center font-semibold mb-2">
            Yılı Aşan Tecrübe
          </div>
          <div className="line my-[20px] h-1 w-1/2 mx-auto bg-gradient-to-r from-white/80 to-white/20 rounded-full"></div>
          <div className="expo text-center text-white px-[10px] leading-loose opacity-80 text-base">
            İnşaat sektöründe 1992 yılından bu yana yaşama değer katan yapılara imza atıyoruz.
          </div>
        </div>
        {/* 2. Kutu */}
        <div className="item max-w-[400px] bg-gradient-to-br from-[#fff6] to-[#fff1] rounded-2xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300 border border-white/20 backdrop-blur-">
          <div className="number counter text-center text-white text-[90px] ct:text-[70px] lg:text-[60px] md:text-[48px] sm:text-[38px] xs:text-[30px] font-extrabold leading-none mb-[16px] drop-shadow-lg tracking-tight">
            18
          </div>
          <div className="title text-[28px] lg:text-[22px] md:text-[20px] sm:text-[18px] text-white leading-tight text-center font-semibold mb-2">
            Tamamlanan Proje
          </div>
          <div className="line my-[20px] h-1 w-1/2 mx-auto bg-gradient-to-r from-white/80 to-white/20 rounded-full"></div>
          <div className="expo text-center text-white px-[10px] leading-loose opacity-80 text-base">
            Tamamladığımız projeler yeni projelerimizin yolunu belirliyor. Her yeni projede daha iyiye
          </div>
        </div>
        {/* 3. Kutu */}
        <div className="item max-w-[400px] bg-gradient-to-br from-[#fff6] to-[#fff1] rounded-2xl shadow-2xl p-8 hover:scale-105 transition-transform duration-300 border border-white/20 backdrop-blur-md">
          <div className="number counter text-center text-white text-[90px] ct:text-[70px] lg:text-[60px] md:text-[48px] sm:text-[38px] xs:text-[30px] font-extrabold leading-none mb-[16px] drop-shadow-lg tracking-tight">
            5000+
          </div>
          <div className="title text-[28px] lg:text-[22px] md:text-[20px] sm:text-[18px] text-white leading-tight text-center font-semibold mb-2">
            Memnun Müşteri
          </div>
          <div className="line my-[20px] h-1 w-1/2 mx-auto bg-gradient-to-r from-white/80 to-white/20 rounded-full"></div>
          <div className="expo text-center text-white px-[10px] leading-loose opacity-80 text-base">
            5000´den fazla ailenin bir parçası olmaktan gurur duyuyoruz.
          </div>
        </div>
      </div>
    </div>
  );
}
