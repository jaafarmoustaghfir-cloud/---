
import React, { useState } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, MATCHES, CLUB_NAME, LEAGUE_TABLE } from '../constants';
import { Calendar, MapPin, Clock, ArrowLeft, ArrowRight, Shield, Home, Plane, Info, Trophy } from 'lucide-react';

interface MatchesProps {
  lang: Language;
}

const Matches: React.FC<MatchesProps> = ({ lang }) => {
  const [filter, setFilter] = useState<'all' | 'home' | 'away'>('all');
  
  const upcoming = MATCHES.filter(m => m.status === 'upcoming');
  const results = MATCHES.filter(m => m.status === 'finished');
  
  const nextMatch = upcoming[0];
  
  const filteredFixtures = MATCHES.filter(m => {
    if (filter === 'home') return m.isHome;
    if (filter === 'away') return !m.isHome;
    return true;
  });

  const miniTable = LEAGUE_TABLE.slice(0, 5); // Show top 5 in mini-table

  const getAbbreviation = (name: string) => {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-black text-club-primary rounded-full text-xs font-black mb-4 tracking-[0.2em] uppercase">
          <Shield size={14} />
          {TRANSLATIONS.season[lang]}
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900">
          {TRANSLATIONS.matches[lang]}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Highlight Section: Next Match & League Table */}
        <div className="lg:col-span-1 space-y-12">
          {/* Next Match Card */}
          {nextMatch && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-gray-900">
                  {TRANSLATIONS.nextMatch[lang]}
                </h3>
                <span className="text-[10px] font-black bg-club-primary text-black px-2 py-0.5 rounded">LIVE</span>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-club-primary to-yellow-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-black text-white rounded-3xl shadow-2xl overflow-hidden">
                   <div className="p-8 text-center">
                      <div className="flex items-center justify-between gap-4 mb-8">
                        <div className="flex-1">
                           <div className="w-16 h-16 bg-club-primary rounded-2xl mx-auto mb-2 flex items-center justify-center text-black font-black">
                             CCH
                           </div>
                           <p className="text-[10px] font-black truncate">{CLUB_NAME}</p>
                        </div>
                        <div className="font-black italic text-club-primary text-2xl">VS</div>
                        <div className="flex-1">
                           <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-2 flex items-center justify-center text-club-primary font-black">
                             {getAbbreviation(nextMatch.opponent)}
                           </div>
                           <p className="text-[10px] font-black truncate">{nextMatch.opponent}</p>
                        </div>
                      </div>
                      <div className="space-y-3 pt-6 border-t border-white/10">
                        <div className="flex items-center justify-center gap-2 text-gray-400 text-xs font-bold">
                           <Calendar size={14} className="text-club-primary" />
                           <span>{nextMatch.date}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-gray-400 text-xs font-bold">
                           <Clock size={14} className="text-club-primary" />
                           <span>{nextMatch.time}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-gray-400 text-[10px] font-bold">
                           <MapPin size={14} className="text-club-primary" />
                           <span className="truncate">{nextMatch.venue}</span>
                        </div>
                      </div>
                      <button className="w-full mt-8 py-4 bg-club-primary text-black font-black rounded-2xl hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 text-sm shadow-xl">
                        {lang === 'ar' ? 'تذكير بالمباراة' : 'Match Reminder'}
                      </button>
                   </div>
                </div>
              </div>
            </div>
          )}

          {/* League Table Mini */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black text-gray-900">
                {TRANSLATIONS.leagueTable[lang]}
              </h3>
              <button 
                onClick={() => document.getElementById('classification')?.scrollIntoView({behavior: 'smooth'})}
                className="text-[10px] font-black text-club-primary hover:underline uppercase tracking-widest"
              >
                {lang === 'ar' ? 'مشاهدة الكل' : 'View Full'}
              </button>
            </div>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <table className="w-full text-right">
                <thead className="bg-black text-club-primary text-[10px] uppercase font-black">
                  <tr>
                    <th className="px-6 py-4">#</th>
                    <th className="px-6 py-4 text-right">TEAM</th>
                    <th className="px-6 py-4">PTS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {miniTable.map((row) => (
                    <tr key={row.pos} className={`${row.team.includes('CCH') ? 'bg-club-primary/5' : ''}`}>
                      <td className="px-6 py-4 font-black text-xs text-gray-400">{row.pos}</td>
                      <td className={`px-6 py-4 font-black text-xs ${row.team.includes('CCH') ? 'text-black' : 'text-gray-700'}`}>
                        {row.team.split(' ').slice(0, 2).join(' ')}
                      </td>
                      <td className="px-6 py-4 font-black text-black">{row.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Full Fixtures Section */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="text-2xl font-black text-gray-900 flex items-center gap-3">
               <Info className="text-club-primary" size={24} />
               {TRANSLATIONS.fixturesTitle[lang]}
            </h3>
            <div className="flex bg-gray-100 p-1 rounded-xl">
               {(['all', 'home', 'away'] as const).map((opt) => (
                 <button
                  key={opt}
                  onClick={() => setFilter(opt)}
                  className={`px-4 py-2 rounded-lg text-xs font-black transition-all ${filter === opt ? 'bg-black text-club-primary shadow-lg' : 'text-gray-400 hover:text-gray-600'}`}
                 >
                   {opt === 'all' ? (lang === 'ar' ? 'الكل' : 'Tous') : (opt === 'home' ? TRANSLATIONS.homeMatch[lang] : TRANSLATIONS.awayMatch[lang])}
                 </button>
               ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredFixtures.map((match) => (
              <div 
                key={match.id} 
                className={`group p-6 bg-white rounded-3xl border transition-all hover:shadow-2xl relative overflow-hidden ${match.isHome ? 'border-club-primary/20' : 'border-gray-100'}`}
              >
                {/* Home/Away Badge */}
                <div className={`absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl flex items-center gap-1.5 text-[8px] font-black uppercase tracking-widest ${match.isHome ? 'bg-club-primary text-black' : 'bg-zinc-800 text-white'}`}>
                  {match.isHome ? <Home size={10} /> : <Plane size={10} />}
                  {match.isHome ? TRANSLATIONS.homeMatch[lang] : TRANSLATIONS.awayMatch[lang]}
                </div>

                <div className="mt-4 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-black text-gray-100 group-hover:text-club-primary/10 transition-colors">J{match.matchday}</span>
                    <div className="h-px flex-1 bg-gray-100"></div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[10px] font-black border border-gray-100 text-gray-400 group-hover:border-club-primary group-hover:text-club-primary transition-colors">
                      {getAbbreviation(match.opponent)}
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Opponent</p>
                      <h4 className="font-black text-gray-900 leading-tight">{match.opponent}</h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-2 text-gray-500 font-bold text-[10px]">
                      <Calendar size={12} className="text-club-primary" />
                      <span>{match.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 font-bold text-[10px]">
                      <Clock size={12} className="text-club-primary" />
                      <span>{match.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-zinc-900 p-8 rounded-[2rem] text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <p className="text-sm font-bold text-gray-400 mb-2 relative z-10">{lang === 'ar' ? 'المباريات القادمة رسمية ومعلنة من العصبة الوطنية' : 'Matchs officiels annoncés par la Ligue Nationale'}</p>
            <h4 className="text-xl font-black text-club-primary relative z-10 uppercase tracking-widest">GNFA 1 • 2025-2026</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
