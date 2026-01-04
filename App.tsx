import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import AcademyRegistration from './components/AcademyRegistration';
import Matches from './components/Matches';
import LeagueTable from './components/LeagueTable';
import News from './components/News';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen font-cairo overflow-x-hidden bg-white selection:bg-club-primary selection:text-black">
      <Navbar lang={lang} setLang={setLang} />
      
      <main>
        <section id="home">
          <Hero lang={lang} />
        </section>
        
        <section id="about" className="py-24 bg-white">
          <About lang={lang} />
        </section>

        <section id="academy-registration" className="py-12 bg-white">
          <AcademyRegistration lang={lang} />
        </section>
        
        <section id="matches" className="py-24 bg-zinc-50 border-y border-zinc-100">
          <Matches lang={lang} />
        </section>

        <section id="classification" className="py-24 bg-white">
          <LeagueTable lang={lang} />
        </section>
        
        <section id="news" className="py-24 bg-zinc-50 border-y border-zinc-100">
          <News lang={lang} />
        </section>

        <section id="team" className="py-24 bg-white">
          <Team lang={lang} />
        </section>
        
        <section id="gallery" className="py-24 bg-zinc-50 border-y border-zinc-100">
          <Gallery lang={lang} />
        </section>
        
        <section id="contact" className="py-24 bg-zinc-900 text-white">
          <Contact lang={lang} />
        </section>
      </main>

      <Footer lang={lang} />
      
      {/* AI Assistant - Netlify/Ready and Fully Interactive */}
      <GeminiAssistant lang={lang} />
    </div>
  );
};

export default App;