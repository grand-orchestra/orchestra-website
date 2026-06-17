'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { instruments } from '@/data/instruments';
import { useLanguage } from '@/contexts/language-context';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

function useVisibleCount() {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width >= 1280) setVisibleCount(4);
      else if (width >= 1024) setVisibleCount(3);
      else if (width >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return visibleCount;
}

function InstrumentImage({ images, alt }: { images: string[]; alt: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [images]);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [images.length]);

  return (
    <img
      src={images[currentImageIndex]}
      alt={alt}
      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
    />
  );
}

const AUTO_PLAY_INTERVAL = 4000;
const PAUSE_AFTER_INTERACTION = 8000;

export default function InstrumentsPreview() {
  const { t, language } = useLanguage();
  const visibleCount = useVisibleCount();
  const maxIndex = Math.max(0, instruments.length - visibleCount);

  const [activeIndex, setActiveIndex] = useState(0);
  const [captionIndex, setCaptionIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  const pauseTemporarily = useCallback(() => {
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
      resumeTimerRef.current = null;
    }, PAUSE_AFTER_INTERACTION);
  }, []);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const goToSlide = useCallback(
    (index: number, closeCaption = true) => {
      setActiveIndex(Math.max(0, Math.min(index, maxIndex)));
      if (closeCaption) setCaptionIndex(null);
      pauseTemporarily();
    },
    [maxIndex, pauseTemporarily]
  );

  const handleInstrumentClick = (index: number) => {
    setCaptionIndex((prev) => (prev === index ? null : index));
  };

  const goToPrevious = () => goToSlide(activeIndex - 1);
  const goToNext = () => goToSlide(activeIndex + 1);

  useEffect(() => {
    if (isPaused || captionIndex !== null || maxIndex === 0) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, captionIndex, maxIndex]);

  const captionInstrument =
    captionIndex !== null ? instruments[captionIndex] : null;

  const slideOffset = (100 / visibleCount) * activeIndex;

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

        {/* Carousel */}
        <div className="relative mb-16">
          <div className="relative overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${slideOffset}%)` }}
            >
              {instruments.map((instrument, index) => (
                <div
                  key={instrument.id}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <button
                    type="button"
                    onClick={() => handleInstrumentClick(index)}
                    className={cn(
                      'group relative w-full h-72 sm:h-80 lg:h-96 rounded-lg overflow-hidden bg-card shadow-2xl cursor-pointer transition-all duration-300',
                      captionIndex === index
                        ? 'ring-2 ring-gold shadow-[0_0_25px_rgba(212,175,55,0.4)]'
                        : 'hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                    )}
                    aria-label={
                      language === 'en' ? instrument.nameEn : instrument.nameMn
                    }
                    aria-expanded={captionIndex === index}
                  >
                    <InstrumentImage
                      images={instrument.image}
                      alt={
                        language === 'en'
                          ? instrument.nameEn
                          : instrument.nameMn
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-base sm:text-lg font-bold text-white mb-0.5">
                        {language === 'en'
                          ? instrument.nameEn
                          : instrument.nameMn}
                      </h3>
                      <p className="text-white/70 text-xs sm:text-sm">
                        {language === 'en'
                          ? instrument.nameMn
                          : instrument.nameEn}
                      </p>
                    </div>
                    {captionIndex !== index && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 text-gold-light/90 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        {language === 'en' ? 'Details' : 'Дэлгэрэнгүй'}
                      </div>
                    )}
                  </button>
                </div>
              ))}
            </div>

            {activeIndex > 0 && (
              <button
                type="button"
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-gold transition-colors -translate-x-1/2 sm:translate-x-0 sm:left-2"
                aria-label="Previous instrument"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            {activeIndex < maxIndex && (
              <button
                type="button"
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-gold transition-colors translate-x-1/2 sm:translate-x-0 sm:right-2"
                aria-label="Next instrument"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Page dots */}
          {maxIndex > 0 && (
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={cn(
                    'h-2.5 rounded-full transition-all duration-300',
                    index === activeIndex
                      ? 'bg-gold w-6'
                      : 'bg-gold/30 w-2.5 hover:bg-gold/60'
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Caption tab — shown below carousel when an instrument is clicked */}
        {captionInstrument && (
          <div
            key={captionInstrument.id}
            className="max-w-4xl mx-auto -mt-8 mb-16 p-5 sm:p-6 rounded-lg bg-card border border-gold/20 shadow-2xl animate-fade-in relative"
          >
            <button
              type="button"
              onClick={() => {
                setCaptionIndex(null);
                setIsPaused(false);
                if (resumeTimerRef.current) {
                  clearTimeout(resumeTimerRef.current);
                  resumeTimerRef.current = null;
                }
              }}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-gold/10 hover:bg-gold/20 text-gold transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="text-xl sm:text-2xl font-bold text-gold mb-1 classic-heading pr-8">
              {language === 'en'
                ? captionInstrument.nameEn
                : captionInstrument.nameMn}
            </h3>
            <p className="text-gold-light/70 text-sm mb-3">
              {language === 'en'
                ? captionInstrument.nameMn
                : captionInstrument.nameEn}
            </p>
            <p className="text-gold-light/90 text-sm sm:text-base leading-relaxed classic-text mb-3">
              {language === 'en'
                ? captionInstrument.descriptionEn
                : captionInstrument.descriptionMn}
            </p>
            <span className="text-xs text-gold/50 capitalize">
              {t(
                `instruments.category.${captionInstrument.category.toLowerCase()}`
              )}
            </span>
          </div>
        )}

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
