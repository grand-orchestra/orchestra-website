'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { instruments } from '@/data/instruments';
import { useLanguage } from '@/contexts/language-context';
import { ArrowRight } from 'lucide-react';

// Component for cycling through images
function InstrumentImage({ images, alt }: { images: string[]; alt: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }
  }, [images.length]);

  return (
    <img
      src={images[currentImageIndex]}
      alt={alt}
      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
    />
  );
}

export default function InstrumentsPreview() {
  const { t, language } = useLanguage();

  // Show first 3 instruments as a preview
  const previewInstruments = instruments.slice(0, 4);

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gold mb-6 classic-heading">
            {t('home.instruments.title')}
          </h2>
          <p className="text-xl text-gold-light/90 max-w-4xl mx-auto classic-text leading-relaxed">
            {t('home.instruments.description')}
          </p>
        </div>

        {/* Instruments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {previewInstruments.map((instrument, index) => (
            <Link
              key={instrument.id}
              href="/music-instruments"
              className={`group relative overflow-hidden rounded-lg bg-card shadow-2xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] cursor-pointer ${
                index === 0 ? '' : 
                index === 1 ? 'hidden md:block' : 
                'hidden lg:block'
              }`}
            >
              <div className="relative h-96 bg-black">
                <InstrumentImage
                  images={instrument.image}
                  alt={language === 'en' ? instrument.nameEn : instrument.nameMn}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {language === 'en' ? instrument.nameEn : instrument.nameMn}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {language === 'en' ? instrument.nameMn : instrument.nameEn}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/music-instruments"
            className="inline-flex items-center px-8 py-4 bg-burgundy hover:bg-burgundy/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {t('home.instruments.viewAll')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
