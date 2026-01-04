import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, CLUB_NAME, CLUB_LOGO_URL } from '../constants';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: TRANSLATIONS.home[lang] },
    { id: 'about', label: TRANSLATIONS.about[lang] },
    { id: 'matches', label: TRANSLATIONS.matches[lang] },
    { id: 'classification', label: TRANSLATIONS.leagueTable[lang] },
    { id: 'news', label: TRANSLATIONS.news[lang] },
    { id: 'team', label: TRANSLATIONS.team[lang] },
    { id: 'gallery', label: TRANSLATIONS.gallery[lang] },
    { id: 'contact', label: TRANSLATIONS.contact[lang] },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Section */}
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className="h-8 w-1.5 bg-club-primary rounded-full hidden sm:block"></div>
            <div className="flex flex-col text-right">
              <div className="flex items-center gap-1 font-black text-2xl tracking-tighter leading-none">
                <span className="text-club-primary">CHABAB</span>
                <span className="text-white">HOUARA</span>
              </div>
              <span className="text-xs font-bold text-gray-300 mt-1">
                نادي شباب هوارة
              </span>
            </div>
            <div className="relative flex-shrink-0 ml-2">
              <img
                src={CLUB_LOGO_URL}
                alt="Chabab Houara Logo"
                className="w-14 h-14 object-contain logo-shadow transition-transform group-hover:scale-110 drop-shadow-[0_0_10px_rgba(255,191,0,0.3)]"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/56x56?text=Logo";
                }}
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 space-x-reverse">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-xs font-black transition-all hover:scale-105 uppercase tracking-tighter ${scrolled ? 'text-gray-300 hover:text-club-primary' : 'text-white hover:text-club-primary'}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => setLang(lang === 'ar' ? 'fr' : 'ar')}
              className={`flex items-center gap-1 text-xs font-black border rounded-lg px-3 py-1.5 transition-all ${scrolled ? 'border-club-primary text-club-primary hover:bg-club-primary hover:text-black' : 'border-white text-white hover:bg-white hover:text-black'}`}
            >
              <Globe size={14} />
              {lang === 'ar' ? 'FR' : 'AR'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white bg-club-primary/10 p-2 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} className="text-club-primary" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-zinc-900 border-b border-zinc-800 shadow-2xl absolute w-full top-full left-0 animate-fade-in-down">
          <div className="px-4 pt-4 pb-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-right px-4 py-4 text-base font-black text-gray-300 hover:bg-club-primary hover:text-black rounded-xl transition-all mb-1"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setLang(lang === 'ar' ? 'fr' : 'ar');
                setIsOpen(false);
              }}
              className="w-full mt-4 flex items-center justify-center gap-2 py-4 bg-club-primary text-black font-black rounded-xl shadow-lg"
            >
              <Globe size={20} />
              {lang === 'ar' ? 'Français' : 'العربية'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

