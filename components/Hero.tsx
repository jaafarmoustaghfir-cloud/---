
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, CLUB_LOGO_URL } from '../constants';
import { ChevronDown, Trophy, Star } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background with Orange/Yellow Glow and Diagonal Splits */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/80 to-club-primary/20"></div>
        {/* Decorative elements matching logo colors */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-club-primary/5 -skew-x-12 transform origin-top"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Official Shield Logo in Hero */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-club-primary rounded-full blur-[60px] opacity-30 animate-pulse"></div>
              <img 
                src={CLUB_LOGO_URL} 
                alt="Chabab Houara Official Logo" 
                className="w-32 h-32 md:w-48 md:h-48 object-contain relative z-10 drop-shadow-[0_0_20px_rgba(255,191,0,0.5)] transition-transform hover:scale-110 duration-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mb-8">
             <div className="h-[2px] w-12 bg-club-primary"></div>
             <Trophy className="text-club-primary" size={24} />
             <span className="text-club-primary font-black uppercase tracking-[0.3em] text-sm">
               {TRANSLATIONS.season[lang]} • {TRANSLATIONS.foundedText[lang]}
             </span>
             <div className="h-[2px] w-12 bg-club-primary"></div>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white mb-4 leading-tight tracking-tighter">
            <span className="text-club-primary">CHABAB</span><br/>
            HOUARA
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-300 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            {TRANSLATIONS.slogan[lang]}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => document.getElementById('matches')?.scrollIntoView({behavior: 'smooth'})}
              className="w-full sm:w-auto px-10 py-5 bg-club-primary hover:bg-yellow-400 text-black font-black rounded-xl transition-all transform hover:scale-105 shadow-[0_10px_30px_rgba(255,191,0,0.3)] flex items-center justify-center gap-3"
            >
              {TRANSLATIONS.matches[lang]}
            </button>
            <button 
              onClick={() => document.getElementById('news')?.scrollIntoView({behavior: 'smooth'})}
              className="w-full sm:w-auto px-10 py-5 border-2 border-white/20 hover:border-club-primary hover:bg-club-primary/10 text-white font-black rounded-xl transition-all"
            >
              {TRANSLATIONS.news[lang]}
            </button>
          </div>
        </div>
      </div>

      {/* Season badge */}
      <div className="absolute top-24 right-8 hidden md:flex flex-col items-center">
        <div className="bg-club-primary text-black p-4 rounded-2xl rotate-12 shadow-2xl flex flex-col items-center gap-1 border-4 border-white">
          <Star size={20} fill="currentColor" />
          <span className="font-black text-xs">2025/2026</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">LIVE SEASON</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 md:bottom-20 left-1/2 transform -translate-x-1/2 text-club-primary animate-bounce cursor-pointer">
        <ChevronDown size={48} />
      </div>
    </div>
  );
};

export default Hero;
