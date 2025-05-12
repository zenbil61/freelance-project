// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import React, { useState, useRef, useEffect } from "react";
import projects from "./projectData";

export default function MySwiper() {
  const [openTab, setOpenTab] = useState(1);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between font-semibold text-2xl md:text-5xl mb-5 mt-10 md:mt-20 text-gray-300 gap-4 md:gap-0">
        <span className="block w-full md:w-auto text-center md:text-left text-2xl md:text-5xl font-semibold">
          Tamamladığımız Projeler
        </span>
        <a className="all-link w-full md:w-auto justify-center md:justify-start text-base md:text-2xl px-3 md:px-4 py-1 md:py-2">
          Tümünü Gör
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-green-300 group-hover:text-green-400 transition"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
      <p className="container mx-auto font-semibold text-sm md:text-md mb-8 md:mb-15 text-gray-500 text-center md:text-left px-2 md:px-0">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <div className="container mx-auto flex justify-center">
        <Swiper
          spaceBetween={50}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          modules={[Navigation, Autoplay, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {projects.map((project, idx) => {
            const delay = isVisible ? `${idx * 120}ms` : "0ms";
            return (
              <SwiperSlide key={project.title}>
                <div
                  className={`flex-1 flex flex-col items-center mt-12 md:mt-0 transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-16"
                  }`}
                  style={{ transitionDelay: delay }}
                >
                  <div className="bg-white rounded-3xl shadow-xl w-75">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-t-3xl w-full h-48 object-cover"
                      />
                      <div className="absolute bottom-2 left-4 flex items-center text-white text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 mr-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                        {project.location}
                      </div>
                      <div className="absolute bottom-2 right-4">
                        <div className="bg-cyan-400 rounded-full p-2">
                          <svg
                            fill="#ffffff"
                            height="17px"
                            width="17px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 512 512"
                            xmlSpace="preserve"
                            stroke="#ffffff"
                          >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <g>
                                <g>
                                  <g>
                                    <path d="M490.667,170.667H448v-21.333c0-11.782-9.551-21.333-21.333-21.333s-21.333,9.551-21.333,21.333v21.333h-42.667V64 c0-11.782-9.551-21.333-21.333-21.333H320V21.333C320,9.551,310.449,0,298.667,0c-11.782,0-21.333,9.551-21.333,21.333v21.333 h-42.667V21.333C234.667,9.551,225.115,0,213.333,0C201.551,0,192,9.551,192,21.333v21.333h-21.333 c-11.782,0-21.333,9.551-21.333,21.333v106.667h-42.667v-21.333c0-11.782-9.551-21.333-21.333-21.333 C73.551,128,64,137.551,64,149.333v21.333H21.333C9.551,170.667,0,180.218,0,192v298.667C0,502.449,9.551,512,21.333,512h149.333 h170.667h149.333c11.782,0,21.333-9.551,21.333-21.333V192C512,180.218,502.449,170.667,490.667,170.667z M42.667,213.333 h106.667v256H42.667V213.333z M192,192V85.333h128V192v277.333h-42.667v-42.667c0-11.782-9.551-21.333-21.333-21.333 s-21.333,9.551-21.333,21.333v42.667H192V192z M469.333,469.333H362.667v-256h106.667V469.333z"></path>
                                    <path d="M256,192c11.776,0,21.333-9.557,21.333-21.333s-9.557-21.333-21.333-21.333s-21.333,9.557-21.333,21.333 S244.224,192,256,192z"></path>
                                    <path d="M256,277.333c11.776,0,21.333-9.557,21.333-21.333s-9.557-21.333-21.333-21.333s-21.333,9.557-21.333,21.333 S244.224,277.333,256,277.333z"></path>
                                    <path d="M256,362.667c11.776,0,21.333-9.557,21.333-21.333c0-11.776-9.557-21.333-21.333-21.333s-21.333,9.557-21.333,21.333 C234.667,353.109,244.224,362.667,256,362.667z"></path>
                                    <path d="M405.333,234.667C393.557,234.667,384,244.224,384,256s9.557,21.333,21.333,21.333s21.333-9.557,21.333-21.333 S417.109,234.667,405.333,234.667z"></path>
                                    <path d="M405.333,320C393.557,320,384,329.557,384,341.333c0,11.776,9.557,21.333,21.333,21.333s21.333-9.557,21.333-21.333 C426.667,329.557,417.109,320,405.333,320z"></path>
                                    <path d="M106.667,234.667c-11.776,0-21.333,9.557-21.333,21.333s9.557,21.333,21.333,21.333S128,267.776,128,256 S118.443,234.667,106.667,234.667z"></path>
                                    <path d="M106.667,320c-11.776,0-21.333,9.557-21.333,21.333c0,11.776,9.557,21.333,21.333,21.333S128,353.109,128,341.333 C128,329.557,118.443,320,106.667,320z"></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-xl font-bold text-black mb-1">
                        {project.title}
                      </div>
                      <div className="text-gray-500 mb-4">{project.status}</div>
                      <button className="bg-black text-white rounded-full px-6 py-2 font-semibold hover:bg-gray-800 transition">
                        Proje Detayını Gör
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* Custom Navigation Buttons */}
      {/* Swiper Pagination custom container */}
      <div className="custom-swiper-pagination flex justify-center mt-8 mb-2">
        {/* Pagination bullets will be rendered here by Swiper */}
      </div>
      <style>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          background: #fff;
          border: 1px solid #d1d5db;
          opacity: 1;
          margin: 0 6px;
          width: 10px;
          height: 10px;
          transition: background 0.2s;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: #0ea5e9;
          border-color: #0ea5e9;
        }
      `}</style>
    </div>
  );
}

//  <div className="swiper-button-prev !left-20 !z-10 !top-1/2 !-translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition cursor-pointer"></div>
// <div className="swiper-button-next !right-2 !z-10 !top-1/2 !-translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition cursor-pointer"></div>
