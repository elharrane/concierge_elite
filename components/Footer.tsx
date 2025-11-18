import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-2xl font-bold tracking-widest mb-6">
              CONCIERGE <span className="text-gold-500">ELITE</span>
            </h2>
            <p className="text-neutral-400 max-w-md mb-6 font-light leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>
          
          <div>
            <h3 className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-neutral-300 hover:text-white transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/about" className="text-neutral-300 hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/dashboard" className="text-neutral-300 hover:text-white transition-colors">{t('nav.dashboard')}</Link></li>
              <li><Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">{t('contact.title')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-6">{t('footer.contact')}</h3>
            <ul className="space-y-4 text-neutral-300">
              <li>hello@conciergeelite.com</li>
              <li>+1 (555) 123-4567</li>
              <li>100 Luxury Ave, Suite 500<br/>New York, NY 10001</li>
            </ul>
            <div className="flex space-x-4 rtl:space-x-reverse mt-6">
              <a href="#" className="text-white hover:text-gold-500"><Instagram size={20} /></a>
              <a href="#" className="text-white hover:text-gold-500"><Facebook size={20} /></a>
              <a href="#" className="text-white hover:text-gold-500"><Linkedin size={20} /></a>
              <a href="#" className="text-white hover:text-gold-500"><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
          <p className="mt-2 md:mt-0">
            {t('footer.disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
};