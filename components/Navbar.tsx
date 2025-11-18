import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../translations';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t, dir } = useLanguage();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isTransparent = location.pathname === '/' && !scrolled;
  
  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setLangMenuOpen(false);
  };
  
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isTransparent 
          ? 'bg-transparent py-6' 
          : 'bg-white/95 backdrop-blur-md shadow-sm py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="group z-50">
          <h1 className={`font-serif text-2xl font-bold tracking-widest transition-colors ${
            isTransparent ? 'text-white' : 'text-black'
          }`}>
            CONCIERGE <span className="text-gold-500">ELITE</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm uppercase tracking-wider font-medium transition-colors hover:text-gold-500 ${
                isTransparent ? 'text-white/90' : 'text-neutral-600'
              } ${location.pathname === link.path && !isTransparent ? 'text-black font-bold' : ''}`}
            >
              {t(link.key)}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className={`flex items-center space-x-1 rtl:space-x-reverse uppercase text-sm font-medium transition-colors ${
                 isTransparent ? 'text-white hover:text-gold-400' : 'text-black hover:text-gold-500'
              }`}
            >
              <Globe size={16} />
              <span>{language}</span>
            </button>
            
            {langMenuOpen && (
              <div className={`absolute top-full mt-2 w-24 bg-white shadow-lg rounded-sm py-1 border border-neutral-100 ${dir === 'rtl' ? 'left-0' : 'right-0'}`}>
                {(['en', 'fr', 'ar'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className="block w-full text-left rtl:text-right px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-gold-600 uppercase"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse md:hidden z-50">
           {/* Mobile Lang Toggle */}
           <button 
              onClick={() => {
                const langs: Language[] = ['en', 'fr', 'ar'];
                const nextIdx = (langs.indexOf(language) + 1) % langs.length;
                setLanguage(langs[nextIdx]);
              }}
              className={`uppercase text-xs font-bold border rounded px-2 py-1 ${
                 isTransparent ? 'text-white border-white' : 'text-black border-black'
              }`}
            >
              {language}
            </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="text-black h-6 w-6" />
            ) : (
              <Menu className={`h-6 w-6 ${isTransparent ? 'text-white' : 'text-black'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : (dir === 'rtl' ? 'translate-x-full' : 'translate-x-full')
        }`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-2xl font-serif text-black hover:text-gold-600 transition-colors"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};