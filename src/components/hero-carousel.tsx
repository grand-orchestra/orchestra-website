'use client';

import { useState, useEffect } from 'react';
import { aboutImages } from '@/data/about-images';
import { logos } from '@/data/logos';
import { useLanguage } from '@/contexts/language-context';

export default function HeroCarousel() {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[70vh] bg-black overflow-hidden" suppressHydrationWarning>
      {/* Image Slides */}
      <div className="absolute inset-0">
        {aboutImages.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-bottom bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        ))}
      </div>

      {/* Centered Logo
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <img 
          key={language}
          src={language === 'en' ? logos[0].logoEn : logos[0].logoMn}
          alt="Grand National Orchestra of Mongolia"
          className="max-w-md w-full h-auto object-contain transition-opacity duration-500"
        />
      </div> */}
    </section>
  );
}
