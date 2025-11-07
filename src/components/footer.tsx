'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { logos } from '@/data/logos';

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-black border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" suppressHydrationWarning>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                key={logos[0].name}
                src={language === 'en' ? logos[0].logoEn : logos[0].logoMn}
                alt="Grand National Orchestra of Mongolia"
                className="h-16 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-md font-bold text-gold text-center classic-heading">
                  {language === 'en' ? 'Grand National Orchestra Of Mongolia' : 'Монгол Төрийн Үндэсний Хөгжмийн Их Найрал'}
                </span>
              </div>
            </div>
            <p className="text-gold-light/80 mb-8 classic-text leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gold classic-heading">{t('footer.quickLinks')}</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gold-light/80 hover:text-gold transition-colors duration-300 classic-text text-lg">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link href="/music-instruments" className="text-gold-light/80 hover:text-gold transition-colors duration-300 classic-text text-lg">
                  {t('navigation.instruments')}
                </Link>
              </li>
              <li>
                <Link href="/concerts" className="text-gold-light/80 hover:text-gold transition-colors duration-300 classic-text text-lg">
                  {t('navigation.concerts')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gold-light/80 hover:text-gold transition-colors duration-300 classic-text text-lg">
                  {t('navigation.about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gold classic-heading">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gold-light/80">
                <MapPin className="w-6 h-6 mr-4 text-gold" />
                <span className="classic-text">{t('footer.address')}</span>
              </li>
              <li className="flex items-center text-gold-light/80">
                <Phone className="w-6 h-6 mr-4 text-gold" />
                <span className="classic-text">{t('footer.phone')}</span>
              </li>
              <li className="flex items-center text-gold-light/80">
                <Mail className="w-6 h-6 mr-4 text-gold" />
                <span className="classic-text">{t('footer.email')}</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gold classic-heading">{t('footer.socialMedia')}</h3>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gold-light/80 hover:text-gold transition-colors duration-300 p-3 border border-gold/30 hover:border-gold rounded-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gold-light/80 hover:text-gold transition-colors duration-300 p-3 border border-gold/30 hover:border-gold rounded-lg"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gold-light/80 hover:text-gold transition-colors duration-300 p-3 border border-gold/30 hover:border-gold rounded-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gold-light/80 hover:text-gold transition-colors duration-300 p-3 border border-gold/30 hover:border-gold rounded-lg"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/20 mt-12 pt-8 text-center">
          <p className="text-gold-light/60 classic-text">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
