import React from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h4 className="text-gold-600 uppercase tracking-widest font-semibold text-sm mb-3">{t('services.label')}</h4>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-black mb-6">{t('services.title')}</h1>
        <p className="text-neutral-600 max-w-2xl mx-auto text-lg font-light">
          {t('services.desc')}
        </p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-10 shadow-sm border border-neutral-100 hover:shadow-xl hover:border-gold-100 transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-neutral-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-black transition-colors">
              <service.icon className="w-7 h-7 text-black group-hover:text-gold-400 transition-colors" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-black mb-4">{t(service.titleKey)}</h3>
            <p className="text-neutral-600 leading-relaxed font-light">
              {t(service.descKey)}
            </p>
          </div>
        ))}
      </div>

      {/* Image Break */}
      <div className="container mx-auto px-6 mt-24">
        <div className="relative rounded-sm overflow-hidden h-96">
           <img 
             src="https://images.unsplash.com/photo-1556912173-3db9963eecc4?q=80&w=2670&auto=format&fit=crop" 
             alt="Kitchen service" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
              <div>
                <h2 className="text-white font-serif text-3xl md:text-4xl font-bold mb-4">{t('services.tailored.title')}</h2>
                <p className="text-white/90 max-w-xl mx-auto mb-8 font-light">
                  {t('services.tailored.desc')}
                </p>
                <Link to="/contact">
                  <Button variant="primary" className="bg-gold-600 hover:bg-gold-700 text-white border-none">
                    {t('services.tailored.quote')}
                  </Button>
                </Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};