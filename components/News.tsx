
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, NEWS } from '../constants';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';

interface NewsProps {
  lang: Language;
}

const News: React.FC<NewsProps> = ({ lang }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="text-sm font-bold text-club-green uppercase tracking-widest mb-2">
            {TRANSLATIONS.news[lang]}
          </h2>
          <h3 className="text-4xl font-black text-gray-900">
            {lang === 'ar' ? 'آخر أخبار النادي' : 'Dernières Actualités'}
          </h3>
        </div>
        <button className="hidden sm:flex items-center gap-2 text-club-green font-bold hover:gap-4 transition-all">
          {lang === 'ar' ? 'شاهد كل الأخبار' : 'Toutes les news'}
          {lang === 'ar' ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {NEWS.map((item) => (
          <div key={item.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="md:w-2/5 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="md:w-3/5 p-6 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 bg-emerald-50 text-club-green text-xs font-bold rounded-full mb-4">
                  {item.category}
                </span>
                <h4 className="text-xl font-black text-gray-900 mb-3 leading-tight group-hover:text-club-green transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t pt-4 border-gray-100">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <button className="text-sm font-bold text-club-green hover:underline">
                  {lang === 'ar' ? 'اقرأ المزيد' : 'Lire plus'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
