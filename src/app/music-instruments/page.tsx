'use client';

import { useState, useEffect } from 'react';
import { instruments } from '@/data/instruments';
import { useLanguage } from '@/contexts/language-context';

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
      className="w-full h-full object-contain"
    />
  );
}

// YouTube Modal Component
function YouTubeModal({ 
  videoUrl, 
  title, 
  onClose 
}: { 
  videoUrl: string; 
  title: string; 
  onClose: () => void;
}) {
  // Extract video ID from YouTube URL
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^"&?\/\s]{11})/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : '';
  };

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Blurred background */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
      
      {/* Modal content */}
      <div 
        className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>

        {/* Title */}
        <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-4 py-2 rounded">
          <h3 className="font-semibold">{title}</h3>
        </div>

        {/* YouTube iframe */}
        <iframe
          src={getYouTubeEmbedUrl(videoUrl)}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function InstrumentsPage() {
  const { t, language } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  return (
    <>
      <div className="py-16 bg-theme">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-24">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-theme mb-4">
              {t('instruments.title')}
            </h1>
            <p className="text-xl text-theme/70 max-w-3xl mx-auto">
              {t('instruments.description')}
            </p>
          </div>

        {/* Instruments Grid */}
        <div className="grid grid-cols-1 gap-8">
          {instruments.map((instrument) => (
            <div
              key={instrument.id}
              onClick={() => setSelectedVideo({
                url: instrument.youtubeUrl,
                title: language === 'en' ? instrument.nameEn : instrument.nameMn
              })}
              className="group relative overflow-hidden rounded-lg bg-card shadow-2xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] cursor-pointer flex flex-col lg:flex-row"
            >
              {/* Image Section */}
              <div className="relative h-64 sm:h-80 lg:h-96 lg:w-1/2 flex-shrink-0 bg-black">
                <InstrumentImage 
                  images={instrument.image} 
                  alt={instrument.nameEn} 
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:hidden">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {language === 'en' ? instrument.nameEn : instrument.nameMn}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {language === 'en' ? instrument.nameMn : instrument.nameEn}
                  </p>
                </div>
              </div>

              {/* Description Section */}
              <div className="p-6 lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-theme mb-2 group-hover:text-burgundy transition-colors duration-200">
                  {language === 'en' ? instrument.nameEn : instrument.nameMn}
                </h3>
                <p className="text-theme/70 mb-6" style={{ 
                  display: 'block', 
                  WebkitLineClamp: 'unset', 
                  WebkitBoxOrient: 'unset',
                  overflow: 'visible',
                  textOverflow: 'clip',
                  whiteSpace: 'normal'
                }}>
                  {language === 'en' ? instrument.descriptionEn : instrument.descriptionMn}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-theme/50 capitalize">
                    {t(`instruments.category.${instrument.category.toLowerCase()}`)}
                  </span>
                  <span className="text-burgundy font-semibold flex items-center gap-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    {language === 'en' ? 'Watch Video' : 'Танилцуулга үзэх'}
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* YouTube Modal */}
      {selectedVideo && (
        <YouTubeModal
          videoUrl={selectedVideo.url}
          title={selectedVideo.title}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
}
