'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';
import { Globe, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const leftNavigation = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.instruments'), href: '/music-instruments' },
  ];

  const rightNavigation = [
    { name: t('navigation.concerts'), href: '/concerts' },
    { name: t('navigation.about'), href: '/about' },
  ];

  const allNavigation = [...leftNavigation, ...rightNavigation];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'mn' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gold/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
        <div className="flex justify-between items-center h-20 relative">
          {/* Spacer for balance */}
          <div className="hidden md:block w-32"></div>

          {/* Center Navigation Group */}
          <div className="hidden md:flex items-center justify-center gap-8 flex-1" suppressHydrationWarning>
            {/* Left Navigation */}
            <nav className="flex items-center space-x-6">
              {leftNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gold transition-colors duration-300 classic-text text-base relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Company Name */}
            <Link href="/" className="flex items-center group px-6">
              <div className="flex flex-col items-center text-center">
                {language === 'en' ? (
                  <>
                    <span className="text-lg font-bold text-gold classic-heading group-hover:text-gold-light transition-colors duration-300 leading-tight whitespace-nowrap">
                      Grand National Orchestra
                    </span>
                    <span className="text-lg font-bold text-gold classic-heading group-hover:text-gold-light transition-colors duration-300 leading-tight whitespace-nowrap">
                      of Mongolia
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-lg font-bold text-gold classic-heading group-hover:text-gold-light transition-colors duration-300 leading-tight whitespace-nowrap">
                      Монгол Төрийн Үндэсний
                    </span>
                    <span className="text-lg font-bold text-gold classic-heading group-hover:text-gold-light transition-colors duration-300 leading-tight whitespace-nowrap">
                      Хөгжмийн Их Найрал
                    </span>
                  </>
                )}
              </div>
            </Link>

            {/* Right Navigation */}
            <nav className="flex items-center space-x-6">
              {rightNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gold transition-colors duration-300 classic-text text-base relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Language Switch */}
          <div className="hidden md:flex items-center" suppressHydrationWarning>
            <button
              onClick={toggleLanguage}
              className="p-3 text-white hover:text-gold transition-colors duration-300 flex items-center space-x-2 rounded-lg group"
              title={t('common.languageSwitch')}
            >
              <Globe className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium classic-text">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Company Name (left) */}
          <Link href="/" className="md:hidden flex items-center group" suppressHydrationWarning>
            <div className="flex flex-col items-center text-center">
              {language === 'en' ? (
                <>
                  <span className="text-sm font-bold text-gold classic-heading group-hover:text-gold-light transition-colors duration-300 leading-tight">
                    Grand National Orchestra
                  </span>
                  <span className="text-sm font-bold text-gold classic-heading group-hover:text-gold-light transition-colors duration-300 leading-tight">
                    of Mongolia
                  </span>
                </>
              ) : (
                <>
                  <span className="text-sm font-bold text-gold classic-heading group-hover:text-gold-light transition-colors duration-300 leading-tight">
                    Монгол Төрийн Үндэсний
                  </span>
                  <span className="text-sm font-bold text-gold classic-heading group-hover:text-gold-light transition-colors duration-300 leading-tight">
                    Хөгжмийн Их Найрал
                  </span>
                </>
              )}
            </div>
          </Link>
            
          {/* Mobile Controls (Language + Menu) */}
          <div className="md:hidden flex items-center space-x-3" suppressHydrationWarning>
            {/* Mobile Language Switch */}
            <button
              onClick={toggleLanguage}
              className="p-2 text-white hover:text-gold transition-colors duration-300 flex items-center space-x-1 rounded-lg group"
              title={t('common.languageSwitch')}
            >
              <Globe className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xs font-medium classic-text">{language.toUpperCase()}</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-white hover:text-gold transition-colors duration-300 rounded-lg"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-black border-t border-gold/20">
              {allNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-white hover:text-gold transition-colors duration-300 classic-text text-lg border-l-2 border-transparent hover:border-gold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
