import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowRight, Star, ShieldCheck, TrendingUp, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Home: React.FC = () => {
  const { t, dir } = useLanguage();
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2580&auto=format&fit=crop")', 
          }}
        >
           <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h2 className="text-gold-400 uppercase tracking-[0.2em] text-sm mb-4 animate-fade-in-up">
            {t('hero.tagline')}
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl text-white font-bold mb-6 max-w-4xl leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-neutral-100 text-lg md:text-xl max-w-2xl mb-10 font-light">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
               <Button variant="white">{t('hero.getStarted')}</Button>
            </Link>
            <Link to="/services">
               <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                 {t('hero.explore')}
               </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals / Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center group">
              <div className="p-4 rounded-full bg-neutral-50 mb-6 group-hover:bg-gold-100 transition-colors">
                <Star className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">{t('features.fiveStar.title')}</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {t('features.fiveStar.desc')}
              </p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="p-4 rounded-full bg-neutral-50 mb-6 group-hover:bg-gold-100 transition-colors">
                <TrendingUp className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">{t('features.revenue.title')}</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {t('features.revenue.desc')}
              </p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="p-4 rounded-full bg-neutral-50 mb-6 group-hover:bg-gold-100 transition-colors">
                <ShieldCheck className="h-8 w-8 text-gold-600" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3">{t('features.protection.title')}</h3>
              <p className="text-neutral-600 font-light leading-relaxed">
                {t('features.protection.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop" 
              alt="Luxury interior" 
              className="rounded-sm shadow-2xl"
            />
          </div>
          <div className="w-full md:w-1/2">
             <h4 className="text-gold-600 uppercase tracking-widest font-semibold text-sm mb-2">{t('highlight.why')}</h4>
             <h2 className="font-serif text-4xl font-bold mb-6 text-black">{t('highlight.art')}</h2>
             <p className="text-neutral-600 mb-6 leading-relaxed font-light text-lg">
               {t('highlight.desc')}
             </p>
             <ul className="space-y-4 mb-8">
               <li className="flex items-center text-neutral-700">
                 <span className="w-2 h-2 bg-gold-500 rounded-full me-3"></span>
                 {t('highlight.list1')}
               </li>
               <li className="flex items-center text-neutral-700">
                 <span className="w-2 h-2 bg-gold-500 rounded-full me-3"></span>
                 {t('highlight.list2')}
               </li>
               <li className="flex items-center text-neutral-700">
                 <span className="w-2 h-2 bg-gold-500 rounded-full me-3"></span>
                 {t('highlight.list3')}
               </li>
             </ul>
             <Link to="/about">
              <div className="flex items-center text-black font-medium hover:text-gold-600 transition-colors cursor-pointer group">
                {t('highlight.readStory')} 
                <Arrow className="ms-2 h-4 w-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </div>
             </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-neutral-900 text-center px-6">
        <h2 className="font-serif text-3xl md:text-5xl text-white font-bold mb-6">
          {t('cta.ready')}
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto mb-10 text-lg font-light">
          {t('cta.join')}
        </p>
        <Link to="/contact">
          <Button variant="white">{t('cta.request')}</Button>
        </Link>
      </section>
    </div>
  );
};