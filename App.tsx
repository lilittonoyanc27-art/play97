import React from 'react';
import GameView from './GameView';
import { UserCircle2, Gamepad2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-soft overflow-x-hidden selection:bg-brand-brown selection:text-white font-sans">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-brown/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-green/10 rounded-full blur-[120px]" />
      </div>

      <nav className="sticky top-0 z-50 bg-white/100 border-b border-slate-200/50 px-4 md:px-8 py-4 shadow-sm">
         <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3 group">
               <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-blue-dark rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform shadow-lg">
                  <Gamepad2 className="text-white w-6 h-6 md:w-7 md:h-7" />
               </div>
               <div>
                 <span className="block text-lg md:text-xl font-black text-slate-800 leading-none tracking-tighter uppercase italic">
                    ԳՈՌ ԵՎ <br/> <span className="text-brand-blue">ԳԱՅԱՆԵ</span>
                 </span>
               </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
               <div className="hidden sm:flex flex-col items-end mr-2">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Խաղ</span>
                 <span className="text-sm font-black text-brand-blue-dark uppercase leading-tight">Մեղրահաց</span>
               </div>
               <button className="p-2 md:p-3 hover:bg-slate-100 rounded-2xl transition-colors text-slate-400 hover:text-slate-900 border border-transparent hover:border-slate-200">
                  <UserCircle2 className="w-6 h-6 md:w-7 md:h-7" />
               </button>
            </div>
         </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative min-h-[80vh] flex flex-col items-center">
        <GameView />
      </main>

      <footer className="py-12 mt-20 border-t border-slate-200/50 bg-white/50 backdrop-blur-sm">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] flex items-center justify-center gap-2 text-slate-400">
               &copy; 2024 ԻՍՊԱՆԵՐԵՆԻ ԱԿԱԴԵՄԻԱ • ԳՈՌ ԵՎ ԳԱՅԱՆԵ
            </p>
         </div>
      </footer>
    </div>
  );
}

