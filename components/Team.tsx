
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';
import { GraduationCap, Target } from 'lucide-react';

interface TeamProps {
  lang: Language;
}

const Team: React.FC<TeamProps> = ({ lang }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Academy & Philosophy Intro */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-zinc-900 p-10 rounded-[2.5rem] text-white space-y-6">
          <div className="w-12 h-12 bg-club-primary rounded-xl flex items-center justify-center text-black">
            <Target size={28} />
          </div>
          <h3 className="text-2xl font-black">{TRANSLATIONS.philosophy[lang]}</h3>
          <p className="text-gray-400 font-medium leading-relaxed">
            {lang === 'ar' 
              ? "نؤمن بتطوير المواهب المحلية وتعزيز روح العمل الجماعي والانضباط. فلسفتنا تقوم على الاستثمار في المستقبل واللعب بروح القتالية دفاعاً عن ألوان هوارة."
              : "Nous croyons au développement des talents locaux et au renforcement de l'esprit d'équipe. Notre philosophie est basée sur l'investissement dans le futur."}
          </p>
        </div>
        <div className="bg-club-primary p-10 rounded-[2.5rem] text-black space-y-6">
          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-club-primary">
            <GraduationCap size={28} />
          </div>
          <h3 className="text-2xl font-black">{TRANSLATIONS.academy[lang]}</h3>
          <p className="text-zinc-800 font-bold leading-relaxed">
            {lang === 'ar'
              ? "تضم مدرسة شباب هوارة أزيد من 200 برعم وشاب يتوزعون على فئات U13 و U15 و U17 و U19، حيث نسهر على تكوينهم رياضياً وتربوياً."
              : "L'académie du CC Houara accueille plus de 200 jeunes répartis entre les catégories U13, U15, U17 et U19, assurant leur formation sportive et éducative."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
