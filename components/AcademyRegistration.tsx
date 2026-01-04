
import React from 'react';
import { Language } from '../types';
import { SOCIAL_LINKS } from '../constants';
import { GraduationCap, Phone, MapPin, CheckCircle2, Users, Star, BrainCircuit } from 'lucide-react';

interface AcademyRegistrationProps {
  lang: Language;
}

const AcademyRegistration: React.FC<AcademyRegistrationProps> = ({ lang }) => {
  const benefits = [
    {
      title: lang === 'ar' ? 'برنامج تدريبي أسبوعي احترافي' : 'Programme d\'entraînement hebdomadaire professionnel',
      icon: <Star className="text-club-primary" size={24} />,
    },
    {
      title: lang === 'ar' ? 'تكوين بدني وتقني شامل' : 'Formation physique et technique complète',
      icon: <GraduationCap className="text-club-primary" size={24} />,
    },
    {
      title: lang === 'ar' ? 'دعم نفسي وتنمية شخصية' : 'Soutien psychologique et développement personnel',
      icon: <BrainCircuit className="text-club-primary" size={24} />,
    },
    {
      title: lang === 'ar' ? 'أنشطة موازية: دوريات ورحلات' : 'Activités : Tournois et excursions',
      icon: <Users className="text-club-primary" size={24} />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-zinc-900 rounded-[3rem] overflow-hidden relative shadow-2xl border border-zinc-800">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-club-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Content Side */}
          <div className="p-10 md:p-16 space-y-10 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-club-primary text-black rounded-full text-[10px] font-black uppercase tracking-widest mb-6 animate-bounce">
                {lang === 'ar' ? 'التسجيل مفتوح الآن' : 'Inscription Ouverte'}
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                {lang === 'ar' ? 'مدرسة نادي شباب هوارة ترحب بكم' : 'L\'école du CC Houara vous souhaite la bienvenue'}
              </h2>
              <p className="text-club-primary text-2xl font-black italic">
                {lang === 'ar' ? 'بداية التسجيل لموسم 2025-2026' : 'Début des inscriptions saison 2025-2026'}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                  {lang === 'ar' ? 'الفئات العمرية' : 'Tranches d\'âge'}
                </span>
                <p className="text-white text-3xl font-black">
                  {lang === 'ar' ? 'من 5 إلى 15 سنة' : 'De 5 à 15 ans'}
                </p>
              </div>
              <div className="w-16 h-16 bg-club-primary rounded-2xl flex items-center justify-center text-black">
                <Users size={32} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="text-club-primary" size={20} />
                  </div>
                  <p className="text-gray-300 font-bold text-sm leading-relaxed group-hover:text-white transition-colors">
                    {benefit.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-club-primary" size={20} />
                  <span className="text-white font-black text-sm uppercase tracking-tighter">
                    {lang === 'ar' ? 'المقر' : 'Siège'}
                  </span>
                </div>
                <p className="text-gray-400 font-bold text-xs leading-relaxed">
                  {lang === 'ar' ? SOCIAL_LINKS.address : SOCIAL_LINKS.addressFr}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="text-club-primary" size={20} />
                  <span className="text-white font-black text-sm uppercase tracking-tighter">
                    {lang === 'ar' ? 'للتسجيل أو الاستفسار' : 'Contact / Info'}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <a href={`tel:${SOCIAL_LINKS.mobile}`} className="text-club-primary text-xl font-black hover:underline" dir="ltr">
                    06 79 32 40 70
                  </a>
                  <a href={`tel:${SOCIAL_LINKS.phone}`} className="text-gray-300 text-lg font-bold hover:text-white transition-colors" dir="ltr">
                    05 28 52 84 45
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side (Mimicking Flyer Layout) */}
          <div className="hidden lg:block relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-l from-zinc-900 via-transparent to-transparent z-10"></div>
            <div className="absolute top-10 left-10 z-20">
               <div className="bg-black/80 backdrop-blur-md p-6 rounded-[2rem] border border-white/10 shadow-2xl rotate-3">
                 <p className="text-club-primary text-center font-black text-4xl mb-1">CCH</p>
                 <p className="text-white text-center font-bold text-[10px] tracking-[0.3em] uppercase">Academy</p>
               </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80" 
              alt="Academy Training" 
              className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyRegistration;
