
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, SOCIAL_LINKS } from '../constants';
import { Mail, Phone, MapPin, Send, Instagram } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div>
            <h2 className="text-sm font-black text-club-primary uppercase tracking-widest mb-4">
              {TRANSLATIONS.contact[lang]}
            </h2>
            <h3 className="text-4xl font-black mb-8">
              {lang === 'ar' ? 'انضم لمسيرتنا لموسم 2025/2026' : 'Rejoignez-nous pour la saison 2025/2026'}
            </h3>
            <p className="text-gray-400 font-medium leading-relaxed max-w-md">
              {lang === 'ar' 
                ? "سواء كنت مشجعاً، لاعباً طموحاً أو شريكاً، يسعدنا تواصلك معنا للمساهمة في مستقبل نادي شباب هوارة."
                : "Supporter, joueur ou partenaire, contactez-nous pour contribuer au futur du CC Houara."}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 group p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-club-primary transition-all">
              <div className="w-12 h-12 rounded-xl bg-club-primary text-black flex items-center justify-center flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-club-primary uppercase">Location</span>
                <span className="font-bold text-gray-300 text-xs">Ouled Teima, Maroc</span>
              </div>
            </div>

            <div className="flex items-center gap-4 group p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-club-primary transition-all">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-club-primary flex items-center justify-center flex-shrink-0">
                <Phone size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-club-primary uppercase">Phone</span>
                <span className="font-bold text-gray-300 text-xs" dir="ltr">{SOCIAL_LINKS.phone}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 group p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-club-primary transition-all">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-club-primary flex items-center justify-center flex-shrink-0">
                <Mail size={24} />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-[10px] font-black text-club-primary uppercase">Email</span>
                <span className="font-bold text-gray-300 text-xs truncate">{SOCIAL_LINKS.email}</span>
              </div>
            </div>

            <a 
              href={SOCIAL_LINKS.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 group p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center flex-shrink-0">
                <Instagram size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-pink-500 uppercase">Instagram</span>
                <span className="font-bold text-gray-300 text-xs">@clubchababhouara</span>
              </div>
            </a>
          </div>
        </div>

        <div className="bg-white text-gray-900 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-club-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase ml-4">{lang === 'ar' ? 'الاسم' : 'Name'}</label>
                <input 
                  type="text" 
                  className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-club-primary font-bold transition-all"
                  placeholder={lang === 'ar' ? 'أحمد محمد' : 'John Doe'}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase ml-4">Email</label>
                <input 
                  type="email" 
                  className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-club-primary font-bold transition-all"
                  placeholder="contact@mail.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase ml-4">{lang === 'ar' ? 'الموضوع' : 'Subject'}</label>
              <input 
                type="text" 
                className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-club-primary font-bold transition-all"
                placeholder={lang === 'ar' ? 'استفسار عن...' : 'Inquiry about...'}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase ml-4">Message</label>
              <textarea 
                rows={4}
                className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-club-primary font-bold transition-all"
                placeholder={lang === 'ar' ? 'رسالتك هنا...' : 'Your message...'}
              ></textarea>
            </div>
            <button className="w-full py-5 bg-black text-club-primary font-black rounded-2xl hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]">
              <Send size={20} className={lang === 'ar' ? 'rotate-180' : ''} />
              {lang === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
