// src/components/Services.jsx
import React from 'react';

const services = [
  {
    title: 'İnşaat Projeleri',
    description: 'Modern ve sürdürülebilir inşaat projeleri',
    image: 'https://www.dengeas.com.tr/wp-content/uploads/2024/10/aerial-view-city-with-road-buildings_webp.webp'
  },
  {
    title: 'Renovasyon',
    description: 'Kapsamlı renovasyon hizmetleri',
    image: 'https://www.dengeas.com.tr/wp-content/uploads/2024/10/kamulastirma_webp-768x657.webp'
  },
  {
    title: 'Mimari Tasarım',
    description: 'Yenilikçi mimari çözümler',
    image: 'https://www.dengeas.com.tr/wp-content/uploads/2024/10/aerial-view-city-with-road-buildings_webp.webp'
  },
  {
    title: 'İç Mekan Tasarımı',
    description: 'Modern iç mekan tasarımları',
    image: 'https://www.dengeas.com.tr/wp-content/uploads/2024/10/aerial-view-city-with-road-buildings_webp.webp'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-dark-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Hizmetlerimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className={`h-48 overflow-hidden bg-gradient-to-br bg-[url(${service.image})] flex items-center justify-center`}>
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-primary font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;