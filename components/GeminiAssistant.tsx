import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';
import { askAssistant } from '../services/gemini';
import { Language } from '../types';

interface GeminiAssistantProps {
  lang: Language;
}

const GeminiAssistant: React.FC<GeminiAssistantProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { 
      role: 'assistant', 
      text: lang === 'ar' 
        ? "مرحباً بك مشجع شباب هوارة! أنا مساعدك الذكي، كيف يمكنني مساعدتك اليوم؟" 
        : "Bienvenue fan de Chabab Houara ! Je suis votre assistant intelligent, comment puis-je vous aider ?" 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await askAssistant(userMsg, lang);
    setMessages(prev => [...prev, { role: 'assistant', text: response || '' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      {isOpen ? (
        <div className="bg-white rounded-[2rem] shadow-2xl w-85 md:w-96 overflow-hidden border border-gray-100 animate-fade-in-up flex flex-col h-[500px]">
          <div className="bg-black p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-club-primary rounded-xl flex items-center justify-center text-black">
                <Bot size={24} />
              </div>
              <div>
                <span className="font-black text-sm block">CCH AI AGENT</span>
                <span className="text-[10px] text-club-primary flex items-center gap-1 font-bold">
                  <Sparkles size={10} /> {lang === 'ar' ? 'متصل الآن' : 'ONLINE'}
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-xl transition-colors">
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-zinc-50/50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium shadow-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-black text-white rounded-br-none' 
                  : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-1.5">
                  <span className="w-1.5 h-1.5 bg-club-primary rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-club-primary rounded-full animate-bounce delay-75"></span>
                  <span className="w-1.5 h-1.5 bg-club-primary rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-6 border-t border-gray-100 bg-white">
            <div className="flex gap-2 bg-gray-50 p-2 rounded-2xl border border-gray-100 focus-within:ring-2 focus-within:ring-club-primary transition-all">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={lang === 'ar' ? 'اسأل عن النادي...' : 'Poser une question...'}
                className="flex-1 px-3 py-2 bg-transparent focus:outline-none text-sm font-bold"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-black text-club-primary p-3 rounded-xl hover:bg-zinc-800 transition-colors disabled:opacity-50 shadow-lg"
              >
                <Send size={18} className={lang === 'ar' ? 'rotate-180' : ''} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-20 h-20 bg-black text-club-primary rounded-[2rem] flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:scale-105 transition-all group relative border-2 border-club-primary/20"
        >
          <div className="absolute inset-0 bg-club-primary/5 rounded-[2rem] animate-ping opacity-20"></div>
          <MessageSquare size={36} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 bg-club-primary text-black text-[9px] font-black px-2 py-0.5 rounded-full border-2 border-black">
            AI
          </span>
        </button>
      )}
    </div>
  );
};

export default GeminiAssistant;