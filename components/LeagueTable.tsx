
import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS, LEAGUE_TABLE, CLUB_NAME } from '../constants';
import { Shield, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface LeagueTableProps {
  lang: Language;
}

const LeagueTable: React.FC<LeagueTableProps> = ({ lang }) => {
  const getFormColor = (f: 'W' | 'D' | 'L') => {
    if (f === 'W') return 'bg-emerald-500';
    if (f === 'D') return 'bg-amber-500';
    return 'bg-rose-500';
  };

  const isCCH = (teamName: string) => teamName.includes('CCH') || teamName.includes('هوارة');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-black text-club-primary rounded-full text-xs font-black mb-4 tracking-[0.2em] uppercase">
          <Shield size={14} />
          {lang === 'ar' ? 'البطولة الوطنية للهواة' : 'Championnat National Amateur'}
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          {TRANSLATIONS.tableFull[lang]}
        </h2>
        <p className="text-gray-500 font-bold max-w-2xl mx-auto">
          {lang === 'ar' 
            ? 'متابعة حية لترتيب الأندية والنتائج المسجلة في القسم الوطني الأول هواة.' 
            : 'Suivi en direct du classement des clubs et des résultats enregistrés en GNFA 1.'}
        </p>
      </div>

      <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead className="bg-zinc-900 text-white font-black text-[10px] uppercase tracking-widest">
              <tr>
                <th className="px-6 py-6 text-center w-12">#</th>
                <th className="px-6 py-6 text-right min-w-[200px]">{lang === 'ar' ? 'الفريق' : 'Équipe'}</th>
                <th className="px-4 py-6 text-center">{lang === 'ar' ? 'ل' : 'J'}</th>
                <th className="px-4 py-6 text-center">{lang === 'ar' ? 'ف' : 'G'}</th>
                <th className="px-4 py-6 text-center">{lang === 'ar' ? 'ت' : 'N'}</th>
                <th className="px-4 py-6 text-center">{lang === 'ar' ? 'خ' : 'P'}</th>
                <th className="px-4 py-6 text-center">{lang === 'ar' ? 'له' : 'BP'}</th>
                <th className="px-4 py-6 text-center">{lang === 'ar' ? 'عليه' : 'BC'}</th>
                <th className="px-4 py-6 text-center">{lang === 'ar' ? '+/-' : 'Diff'}</th>
                <th className="px-4 py-6 text-center bg-zinc-800 text-club-primary">{lang === 'ar' ? 'ن' : 'Pts'}</th>
                <th className="px-6 py-6 text-center min-w-[140px]">{lang === 'ar' ? 'آخر 5' : 'Derniers 5'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50">
              {LEAGUE_TABLE.map((row) => (
                <tr 
                  key={row.pos} 
                  className={`transition-colors ${isCCH(row.team) ? 'bg-club-primary/10 border-r-4 border-r-club-primary' : 'hover:bg-zinc-50'}`}
                >
                  <td className="px-6 py-5 text-center">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg font-black text-xs ${
                      row.pos <= 2 ? 'bg-emerald-50 text-emerald-700' : 
                      row.pos >= 15 ? 'bg-rose-50 text-rose-700' : 'text-gray-400'
                    }`}>
                      {row.pos}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-black ${isCCH(row.team) ? 'bg-black text-club-primary' : 'bg-zinc-100 text-zinc-400'}`}>
                        {row.team.split(' ').pop()?.substring(0, 3)}
                      </div>
                      <span className={`font-black text-sm ${isCCH(row.team) ? 'text-black' : 'text-zinc-700'}`}>
                        {row.team}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-5 text-center font-bold text-zinc-500 text-xs">{row.played}</td>
                  <td className="px-4 py-5 text-center font-bold text-zinc-500 text-xs">{row.won}</td>
                  <td className="px-4 py-5 text-center font-bold text-zinc-500 text-xs">{row.drawn}</td>
                  <td className="px-4 py-5 text-center font-bold text-zinc-500 text-xs">{row.lost}</td>
                  <td className="px-4 py-5 text-center font-bold text-zinc-500 text-xs">{row.gf}</td>
                  <td className="px-4 py-5 text-center font-bold text-zinc-500 text-xs">{row.ga}</td>
                  <td className={`px-4 py-5 text-center font-black text-xs ${row.gd > 0 ? 'text-emerald-600' : row.gd < 0 ? 'text-rose-600' : 'text-zinc-400'}`}>
                    {row.gd > 0 ? `+${row.gd}` : row.gd}
                  </td>
                  <td className={`px-4 py-5 text-center font-black text-sm ${isCCH(row.team) ? 'text-black' : 'text-zinc-900'}`}>
                    {row.pts}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-center gap-1.5">
                      {row.form.map((f, i) => (
                        <span 
                          key={i} 
                          title={f === 'W' ? 'Win' : f === 'D' ? 'Draw' : 'Loss'}
                          className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[7px] font-black text-white ${getFormColor(f)}`}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-zinc-50 p-6 flex flex-wrap gap-8 items-center justify-center border-t border-zinc-100 text-[10px] font-black uppercase tracking-widest text-zinc-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span>{lang === 'ar' ? 'منطقة الصعود' : 'Zone de Promotion'}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
            <span>{lang === 'ar' ? 'منطقة الهبوط' : 'Zone de Relégation'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-zinc-300">|</span>
            <span>{lang === 'ar' ? 'تحديث: الدورة 13' : 'MàJ: Journée 13'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueTable;
