
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, SOCIAL_LINKS } from '../constants';
import { Camera, Instagram, ExternalLink } from 'lucide-react';

interface GalleryProps {
  lang: Language;
}

const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-black text-club-primary rounded-full text-xs font-black mb-4 tracking-[0.2em] uppercase">
          <Camera size={14} />
          {lang === 'ar' ? 'معرض الصور' : 'Galerie'}
        </div>
        <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          {lang === 'ar' ? 'فريقنا بالصور' : 'Notre Équipe en Images'}
        </h3>
        <p className="text-gray-500 font-bold max-w-2xl mx-auto mb-8">
          {lang === 'ar' 
            ? 'تابعوا آخر كواليس وصور النادي الحصرية مباشرة عبر حسابنا الرسمي على إنستغرام.' 
            : 'Suivez les coulisses et les photos exclusives du club en direct sur notre compte Instagram officiel.'}
        </p>
      </div>

      {/* Empty State / Instagram Redirection */}
      <div className="bg-zinc-900 rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        
        <div className="relative z-10 space-y-8">
          <div className="w-24 h-24 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-[2rem] flex items-center justify-center text-white mx-auto shadow-2xl transform -rotate-6">
            <Instagram size={48} />
          </div>
          
          <div className="space-y-4">
            <h4 className="text-2xl md:text-3xl font-black text-club-primary uppercase tracking-tighter">
              {lang === 'ar' ? 'البث المباشر للصور' : 'Flux Photos en Direct'}
            </h4>
            <p className="text-gray-400 font-medium max-w-lg mx-auto leading-relaxed">
              {lang === 'ar'
                ? "نقوم بتحديث معرض الصور يومياً عبر منصة إنستغرام. تفضل بزيارة حسابنا الرسمي لمشاهدة أحدث لقطات المباريات والتدريبات."
                : "Nous mettons à jour notre galerie quotidiennement sur Instagram. Visitez notre compte officiel pour voir les derniers clichés des matchs et des entraînements."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-club-primary text-black font-black rounded-2xl transition-all hover:scale-105 shadow-[0_10px_30px_rgba(255,191,0,0.3)]"
            >
              <Instagram size={20} />
              {lang === 'ar' ? 'فتح في إنستغرام' : 'Ouvrir sur Instagram'}
              <ExternalLink size={16} className="opacity-50 group-hover:opacity-100" />
            </a>
            
            <div className="text-white/20 font-black text-sm hidden sm:block">@clubchababhouara</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
