'use client';

import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { concerts } from '@/data/concerts';
import { useLanguage } from '@/contexts/language-context';

export default function ConcertsSection() {
  const { t } = useLanguage();

  // Filter future concerts
  const upcomingConcerts = concerts.filter(concert => {
    const concertDate = new Date(concert.date);
    return concertDate > new Date();
  });

  if (upcomingConcerts.length === 0) {
    return (
      <section className="py-16 bg-theme">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-theme mb-4">
              {t('home.concerts.title')}
            </h2>
            <p className="text-theme/70">
              {t('home.concerts.noUpcoming')}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-theme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-theme mb-4">
            {t('home.concerts.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingConcerts.map((concert) => {
            const concertDate = new Date(concert.date);
            const formattedDate = concertDate.toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });

            return (
              <div
                key={concert.id}
                className="bg-card border-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={concert.image}
                    alt={concert.titleEn}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {concert.titleEn}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-theme/70">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>{formattedDate}</span>
                    </div>
                    <div className="flex items-center text-theme/70">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>{concert.time}</span>
                    </div>
                    <div className="flex items-center text-theme/70">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{concert.venueEn}</span>
                    </div>
                  </div>

                  <p className="text-theme/70 mb-6 line-clamp-3">
                    {concert.descriptionEn}
                  </p>

                  <a
                    href={concert.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-burgundy hover:bg-burgundy/90 text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t('home.concerts.getTickets')}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
