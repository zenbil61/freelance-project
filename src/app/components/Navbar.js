// src/components/Navbar.jsx
'use client';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/90 backdrop-blur text-white shadow-xl ' : 'bg-transparent text-white'} `}>
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <span className="text-2xl md:text-4xl font-extrabold inline-block text-white bg-clip-text text-transparent animate-gradient-x">DENGE PLANLAMA</span>
          </div>
          {/* Menu */}
          <div className="hidden md:flex gap-3 text-lg md:text-xl font-bold items-center">
            {[
              { id: 'home', label: 'Ana Sayfa' },
              { id: 'services', label: 'Hizmetler' },
              { id: 'about', label: 'Hakkımızda' },
              { id: 'about', label: 'Haberler' },
              { id: 'contact', label: 'İletişim' },
            ].map((item) => (
              <button
                key={item.id + item.label}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-xl transition-all hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-green-300 text-white"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;