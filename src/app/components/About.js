// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 my-10 relative min-h-[300px] flex items-center"
    >
      <div
        className="container mx-auto px-6 relative z-10 bg-secondary rounded-3xl overflow-hidden shadow-lg parallax-bg"
        style={{
          backgroundImage: "url(/projeler/banner_webp.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/50 pointer-events-none z-10" />
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-20">
          <div className="rounded-lg overflow-hidden h-[400px] text-white font-bold text-5xl from-blue-600 to-blue-800 flex items-center justify-center">
            Denge Planlama Hakkında ?
            <br />
            <br />
            Biz kimiz ne yapıyoruz
          </div>
          <div>
            <div className="bg-cyan-100 p-10 rounded-3xl shadow-lg">
              <p className="text-gray-600 text-xl font-semibold text-primary mb-6">
                Denge İnşaat olarak, 20 yılı aşkın süredir inşaat sektöründe
                güvenilir ve kaliteli hizmet sunmaktayız. Modern teknolojiler ve
                uzman kadromuzla, müşterilerimizin hayallerini gerçeğe
                dönüştürüyoruz.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">30+</h3>
                  <p className="text-gray-600">Yıllık Deneyim</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">500+</h3>
                  <p className="text-gray-600">Tamamlanan Proje</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">20+</h3>
                  <p className="text-gray-600">Kişilik Ekip</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
