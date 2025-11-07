'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { teamImages } from '@/data/team-images';
import { cn } from '@/lib/utils';

export default function AboutSection() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % teamImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  const {push} = useRouter();

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gold mb-8 classic-heading">
              {t('home.about.title')}
            </h2>
            <p className="text-xl text-gold-light/90 mb-10 leading-relaxed classic-text">
              {t('home.about.description')}
            </p>
            <button onClick={() => push('/about')} className="inline-flex items-center justify-center px-10 py-4 bg-gold hover:bg-gold-light text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg classic-text text-lg border-2 border-gold-dark hover:border-gold">
              {t('home.about.readMore')}
            </button>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <div className="relative h-80 rounded-lg overflow-hidden">
              {teamImages.map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    'absolute inset-0 transition-opacity duration-1000 ease-in-out',
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  )}
                >
                  <img
                    src={image.image}
                    alt={`Team member ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              ))}
            </div>
         
          </div>
        </div>
      </div>
    </section>
  );
}
