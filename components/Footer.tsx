
import React from 'react';
import { Language } from '../types';
import { CLUB_NAME, TRANSLATIONS, CLUB_LOGO_URL } from '../constants';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps { lang: Language; }

const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 overflow-hidden relative">
      {/* Decorative large text bg */}
      <div className="absolute top-0 right-0 text-[15rem] font-black text-white/[0.02] select-none leading-none -translate-y-1/4 translate-x-1/4">
        CCH
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <img 
                src={CLUB_LOGO_URL} 
                alt="Chabab Houara Club Logo" 
                className="w-16 h-16 object-contain logo-shadow"
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=CCH&background=FFBF00&color=000";
                }}
              />
              <span className="text-2xl font-black tracking-tighter leading-tight">
                <span className="text-club-primary">CHABAB</span><br/>HOUARA
              </span>
            </div>
            <p className="text-gray-500 font-medium leading-relaxed max-w-xs">
              {lang === 'ar' 
                ? "فخر مدينة أولاد تايمة ورمز الكرة الهوارية. مسيرة مستمرة منذ 1964 بشعار واحد: القمة."
                : "Fierté d'Ouled Teima et symbole du football Houari. Un parcours continu depuis 1964 avec un seul slogan : Le Sommet."}
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-club-primary hover:text-black transition-all transform hover:-translate-y-1">
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black text-club-primary uppercase tracking-[0.2em] mb-10">
              {lang === 'ar' ? 'استكشف' : 'Explorer'}
            </h4>
            <ul className="space-y-6 text-gray-400 font-bold">
              <li><a href="#about" className="hover:text-club-primary transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[2px] bg-club-primary transition-all"></span> {TRANSLATIONS.about[lang]}</a></li>
              <li><a href="#team" className="hover:text-club-primary transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[2px] bg-club-primary transition-all"></span> {TRANSLATIONS.team[lang]}</a></li>
              <li><a href="#matches" className="hover:text-club-primary transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[2px] bg-club-primary transition-all"></span> {TRANSLATIONS.matches[lang]}</a></li>
              <li><a href="#news" className="hover:text-club-primary transition-colors flex items-center gap-2 group"><span className="w-0 group-hover:w-2 h-[2px] bg-club-primary transition-all"></span> {TRANSLATIONS.news[lang]}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black text-club-primary uppercase tracking-[0.2em] mb-10">
              {lang === 'ar' ? 'معلومات النادي' : 'Club Info'}
            </h4>
            <ul className="space-y-6 text-gray-400">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-club-primary"><MapPin size={20} /></div>
                <span className="text-sm font-bold">Ouled Teima, Taroudant</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-club-primary"><Phone size={20} /></div>
                <span className="text-sm font-bold" dir="ltr">+212 5 28 00 00 00</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-club-primary"><Mail size={20} /></div>
                <span className="text-sm font-bold">contact@cchouara.ma</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black text-club-primary uppercase tracking-[0.2em] mb-10">
              {lang === 'ar' ? 'النشرة البريدية' : 'Newsletter'}
            </h4>
            <p className="text-gray-500 mb-8 text-sm font-medium">
              {lang === 'ar' 
                ? "انضم لعائلة هوارة وتوصل بآخر الأخبار الحصرية."
                : "Rejoignez la famille Houara et recevez les dernières news."}
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-club-primary focus:outline-none text-white transition-all"
              />
              <button className="absolute left-2 top-2 bottom-2 px-6 bg-club-primary text-black font-black rounded-xl hover:bg-yellow-400 transition-colors">
                GO
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-[10px] font-black uppercase tracking-widest">
          <p>© 2024 CLUB CHABAB HOUARA. OFFICIAL WEBSITE.</p>
          <div className="flex gap-8">
             <a href="#" className="hover:text-club-primary transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-club-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
