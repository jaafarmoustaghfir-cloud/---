
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, FOUNDED_YEAR, FOUNDER_NAME, FOUNDER_NAME_FR, MILESTONES, ACHIEVEMENTS } from '../constants';
import { Award, UserCheck, History } from 'lucide-react';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* Intro & Founder */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-sm font-black text-club-primary uppercase tracking-widest mb-4 inline-block bg-black px-4 py-1 rounded">
            {TRANSLATIONS.about[lang]}
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
            {lang === 'ar' ? `بناء الأمجاد منذ ${FOUNDED_YEAR}` : `Bâtir la gloire depuis ${FOUNDED_YEAR}`}
          </h3>
          <div className="prose prose-lg text-gray-600 space-y-6">
            <p className="leading-relaxed">
              {lang === 'ar' 
                ? `تأسس نادي شباب هوارة لكرة القدم عام 1964 على يد الأستاذ الراحل ${FOUNDER_NAME}، ليكون متنفساً رياضياً لشباب منطقة هوارة وواجهة مشرفة لمدينة أولاد تايمة.` 
                : `Le Club Chabab Houara de Football a été fondé en 1964 par feu M. ${FOUNDER_NAME_FR}, afin de servir d'exutoire sportif aux jeunes de la région de Houara.`}
            </p>
            <p className="leading-relaxed">
              {lang === 'ar'
                ? "قضى النادي أزيد من 40 سنة في أقسام الهواة قبل أن يحقق صعوداً تاريخياً للقسم الثاني عام 2006، حيث بصم على مواسم استثنائية نافس فيها على الصعود لقسم الأضواء."
                : "Le club a passé plus de 40 ans dans les divisions amateurs avant de réaliser une promotion historique en Botola 2 en 2006, où il a marqué des saisons exceptionnelles."}
            </p>
          </div>
          
          <div className="mt-10 flex items-center gap-4 p-6 bg-zinc-900 rounded-3xl text-white shadow-xl">
             <div className="w-16 h-16 bg-club-primary rounded-2xl flex items-center justify-center text-black">
                <UserCheck size={32} />
             </div>
             <div>
               <p className="text-xs font-black text-club-primary uppercase tracking-tighter opacity-70">
                 {TRANSLATIONS.founderTitle[lang]}
               </p>
               <h4 className="text-xl font-black">{lang === 'ar' ? FOUNDER_NAME : FOUNDER_NAME_FR}</h4>
             </div>
          </div>
        </div>
        
        <div className="relative order-1 lg:order-2">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80" 
              alt="Club Legend" 
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-black p-8 rounded-[2rem] shadow-2xl text-white z-20 hidden md:block">
            <span className="text-5xl font-black block text-club-primary">2006</span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              {lang === 'ar' ? 'سنة المجد التاريخي' : 'Année de Gloire'}
            </span>
          </div>
        </div>
      </div>

      {/* Palmares Grid */}
      <div className="bg-zinc-50 rounded-[3rem] p-12 border border-zinc-100">
        <div className="text-center mb-16">
          <Award className="mx-auto text-club-primary mb-4" size={48} />
          <h3 className="text-3xl font-black text-gray-900">{TRANSLATIONS.palmares[lang]}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((ach, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:border-club-primary transition-all group">
              <span className="text-club-primary font-black text-lg block mb-2">{ach.year}</span>
              <h4 className="text-gray-900 font-black text-xl leading-tight group-hover:scale-105 transition-transform">
                {ach.title[lang]}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="space-y-16">
        <div className="flex items-center gap-4">
           <History className="text-club-primary" size={32} />
           <h3 className="text-3xl font-black text-gray-900 uppercase">{lang === 'ar' ? 'مسارنا الزمني' : 'Notre Chronologie'}</h3>
           <div className="h-px flex-1 bg-zinc-200"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          <div className="absolute top-8 left-0 w-full h-px bg-zinc-200 hidden lg:block"></div>
          {MILESTONES.map((stone, idx) => (
            <div key={idx} className="relative z-10 space-y-4">
              <div className="w-16 h-16 bg-black text-club-primary rounded-2xl flex items-center justify-center font-black text-xl shadow-lg border-2 border-club-primary/20">
                {stone.year}
              </div>
              <p className="text-gray-600 font-bold leading-relaxed">
                {stone[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
