'use client';
import React, { useState, useEffect } from "react";

const slides = [
  { id: 1, img: "/background.jpg", text: "Birinci Slayt" },
  { id: 2, img: "/globe.svg", text: "İkinci Slayt" },
  { id: 3, img: "/window.svg", text: "Üçüncü Slayt" },
];

export default function SimpleSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500); // Animation duration
  };

  const prevSlide = () => {
    const newIndex = current === 0 ? slides.length - 1 : current - 1;
    changeSlide(newIndex);
  };
  
  const nextSlide = () => {
    const newIndex = current === slides.length - 1 ? 0 : current + 1;
    changeSlide(newIndex);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-full max-w-xl mx-auto mt-10">
      <div className="overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <img
              key={slide.id}
              src={slide.img}
              alt={slide.text}
              className="w-full h-64 object-cover flex-shrink-0"
            />
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
          {slides[current].text}
        </div>
      </div>
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow transition-all duration-300"
        aria-label="Önceki"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow transition-all duration-300"
        aria-label="Sonraki"
      >
        &#8594;
      </button>
      
      {/* Dots navigation */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              current === index ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
