import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-16 mb-24 items-center">
          <div className="w-full md:w-1/2">
            <h4 className="text-gold-600 uppercase tracking-widest font-semibold text-sm mb-3">{t('about.who')}</h4>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-black mb-8 leading-tight">
              {t('about.title')}
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed font-light mb-6">
              {t('about.p1')}
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed font-light">
              {t('about.p2')}
            </p>
          </div>
          <div className="w-full md:w-1/2">
             <img 
               src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2670&auto=format&fit=crop" 
               alt="Concierge Team" 
               className="w-full rounded-sm shadow-xl"
             />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="bg-neutral-900 text-white p-12 md:p-20 rounded-sm mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">{t('about.mission.title')}</h2>
              <p className="text-neutral-400 font-light leading-relaxed">
                {t('about.mission.desc')}
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6">{t('about.standards.title')}</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-gold-500 me-4 mt-1 h-5 w-5 flex-shrink-0" />
                  <span className="text-neutral-300 font-light">{t('about.standards.li1')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold-500 me-4 mt-1 h-5 w-5 flex-shrink-0" />
                  <span className="text-neutral-300 font-light">{t('about.standards.li2')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold-500 me-4 mt-1 h-5 w-5 flex-shrink-0" />
                  <span className="text-neutral-300 font-light">{t('about.standards.li3')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-gold-500 me-4 mt-1 h-5 w-5 flex-shrink-0" />
                  <span className="text-neutral-300 font-light">{t('about.standards.li4')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team/Founder Placeholder */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-12">{t('about.leadership.title')}</h2>
          <div className="flex flex-col items-center">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
              alt="CEO" 
              className="w-32 h-32 rounded-full object-cover mb-6 border-2 border-gold-500 p-1"
            />
            <h3 className="font-serif text-xl font-bold">{t('about.leadership.name')}</h3>
            <p className="text-gold-600 text-sm uppercase tracking-wider mb-4">{t('about.leadership.role')}</p>
            <p className="text-neutral-600 font-light">
              {t('about.leadership.bio')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};