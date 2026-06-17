'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'mn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    'navigation.home': 'Home',
    'navigation.instruments': 'Instruments',
    'navigation.concerts': 'Repertoire',
    'navigation.about': 'About',
    'home.hero.watchOnYoutube': 'Watch on YouTube',
    'home.hero.learnMore': 'Learn More',
    'home.concerts.title': 'Upcoming Live Concerts',
    'home.concerts.getTickets': 'Get Tickets',
    'home.concerts.noUpcoming': 'No upcoming concerts at the moment',
    'home.about.title': 'About Us',
    'home.about.description': 'write eng here',
    'home.about.readMore': 'Read More',
    'instruments.title': 'Traditional Mongolian Instruments',
    'instruments.description': 'Discover the unique sounds and rich history of Mongolia\'s traditional musical instruments',
    'instruments.overview': 'Overview',
    'instruments.uniqueFeatures': 'Unique Features',
    'instruments.originHistory': 'Origin & History',
    'instruments.relatedInstruments': 'Related Instruments',
    'common.languageSwitch': 'Language',
    'common.darkMode': 'Dark Mode',
    'common.lightMode': 'Light Mode',
    'footer.contact': 'Contact',
    'footer.socialMedia': 'Social Media',
    'footer.copyright': ' Grand National Orchestra Of Mongolia.',
    'instruments.learnMore': 'Learn More',
    'instruments.backToInstruments': 'Back to Instruments',
    'instruments.category.string': 'String',
    'instruments.category.wind': 'Wind',
    'instruments.category.percussion': 'Percussion',
    'home.hero.nowPlaying': '',
    'home.hero.rating': 'rating',
    'home.hero.close': 'Close',
    'footer.quickLinks': 'Quick Links',
    'footer.description': 'Preserving and promoting the rich musical traditions of Mongolia through traditional instruments and contemporary performances.',
    'footer.address': 'Chinggis Khan Ave, SBD - 1 khoroo, Ulaanbaatar 14251',
    'footer.phone': '+976 11 123 456',
    'footer.email': 'grandnationalorchestra@gmail.com',    
    'home.instruments.title': 'Traditional Mongolian Instruments',
    'home.instruments.description': 'Discover the unique sounds and rich history of Mongolia\'s traditional musical instruments',
    'home.instruments.viewAll': 'View All Instruments'
  },
  mn: {
    'navigation.home': 'Нүүр',
    'navigation.instruments': 'Хөгжмийн зэмсгүүд',
    'navigation.concerts': 'Урын сан',
    'navigation.about': 'Бидний тухай',
    'home.hero.watchOnYoutube': 'YouTube дээр үзэх',
    'home.hero.learnMore': 'Дэлгэрэнгүй',
    'home.concerts.title': 'Удахгүй болох шууд концертууд',
    'home.concerts.getTickets': 'Тасалбар авах',
    'home.concerts.noUpcoming': 'Одоогоор болох концерт байхгүй',
    'home.about.title': 'Бидний тухай',
    'home.about.description': 'Хүн улсын үеэс Монгол улсын тусгаар тогтнолыг илтгэн, төрийн сүр хүчийг бадраан, дээдсийн онгон шүтээнийг урин дуудаж, түмэн олны сүлд хийморийг сэргээх уламжлалтай Монголын эзэнт гүрний их найрлын зан үйлийг ...',
    'home.about.readMore': 'Дэлгэрэнгүй унших',
    'instruments.title': 'Уламжлалт Монгол Хөгжмийн Зэмсгүүд',
    'instruments.description': 'Монголын уламжлалт хөгжмийн зэмсгүүдийн өвөрмөц дуу, баялаг түүхийг нээж мэдээрэй',
    'instruments.overview': 'Тойм',
    'instruments.uniqueFeatures': 'Өвөрмөц онцлогууд',
    'instruments.originHistory': 'Гарал үүсэл ба түүх',
    'instruments.relatedInstruments': 'Холбоотой зэмсгүүд',
    'common.languageSwitch': 'Хэл',
    'common.darkMode': 'Харанхуй горим',
    'common.lightMode': 'Гэрэлтэй горим',
    'footer.contact': 'Холбоо барих',
    'footer.socialMedia': 'Нийгмийн сүлжээ',
    'footer.copyright': ' Монгол Төрийн Үндэсний Хөгжмийн Их Найрал.',
    'instruments.learnMore': 'Дэлгэрэнгүй',
    'instruments.backToInstruments': 'Буцах',
    'instruments.category.string': 'Струн',
    'instruments.category.wind': 'Үлээвэр',
    'instruments.category.percussion': 'Цохилт',
    'home.hero.nowPlaying': '',
    'home.hero.rating': 'үнэлгээ',
    'home.hero.close': 'Хаах',
    'footer.quickLinks': 'Шуурхай холбоосууд',
    'footer.description': 'Уламжлалт зэмсгүүд болон орчин үеийн тоглолтуудаар Монголын баялаг хөгжмийн уламжлалыг хадгалж, дэмжих.',
    'footer.address': 'Үндэсний Урлагийн Их Театр, СБД-1р хороо, Улаанбаатар, Монгол улс',
    'footer.phone': '+976 11 123 456',
    'footer.email': 'grandnationalorchestra@gmail.com',    'home.instruments.title': 'Уламжлалт Монгол Хөгжмийн Зэмсгүүд',
    'home.instruments.description': 'Монголын уламжлалт хөгжмийн зэмсгүүдийн өвөрмөц дуу, баялаг түүхийг нээж мэдээрэй',
    'home.instruments.viewAll': 'Бүх зэмсгийг харах'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'mn')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: keyof typeof translations['en']): string => {
    return (translations[language][key] ?? translations['en'][key] ?? key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: t as (key: string) => string }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
