/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, CheckCircle2, RefreshCcw } from 'lucide-react';
import { GAME_LEVELS } from './data';

interface HexCell {
  id: string; 
  text: string;
  type: 'hy' | 'es';
  hidden: boolean;
}

export default function GameView() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [cells, setCells] = useState<HexCell[]>([]);
  const [selectedCell, setSelectedCell] = useState<number | null>(null);
  const [isLevelComplete, setIsLevelComplete] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const level = GAME_LEVELS[levelIndex];

  useEffect(() => {
    if (!level) return;
    
    const newCells: HexCell[] = [];
    level.pairs.forEach(pair => {
      newCells.push({ id: pair.id, text: pair.hy, type: 'hy', hidden: false });
      newCells.push({ id: pair.id, text: pair.es, type: 'es', hidden: false });
    });

    setCells(newCells.sort(() => Math.random() - 0.5));
    setIsLevelComplete(false);
    setSelectedCell(null);
  }, [levelIndex, level]);

  const handleCellClick = (index: number) => {
    if (cells[index].hidden || index === selectedCell) return;

    if (selectedCell === null) {
      setSelectedCell(index);
    } else {
      const first = cells[selectedCell];
      const second = cells[index];

      if (first.id === second.id && first.type !== second.type) {
        const nextCells = [...cells];
        nextCells[selectedCell].hidden = true;
        nextCells[index].hidden = true;
        setCells(nextCells);
        setSelectedCell(null);

        if (nextCells.every(c => c.hidden)) {
          setIsLevelComplete(true);
          setTimeout(() => {
            if (levelIndex < GAME_LEVELS.length - 1) {
              setLevelIndex(prev => prev + 1);
            } else {
              setIsGameFinished(true);
            }
          }, 1500);
        }
      } else {
        setSelectedCell(index);
      }
    }
  };

  if (isGameFinished) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto text-center space-y-8 p-8 bg-white rounded-[40px] shadow-2xl border-4 border-brand-blue/20"
      >
        <div className="w-32 h-32 bg-brand-sky rounded-full flex items-center justify-center mx-auto shadow-lg text-6xl">
          🏆
        </div>
        <div className="space-y-2">
          <h2 className="text-4xl font-black text-slate-800 uppercase italic">ԱՊՐԵՍ!</h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-lg">ԳՈՌ ԵՎ ԳԱՅԱՆԵ</p>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">ԴՈՒՔ ՍՈՎՈՐԵՑԻՔ ԲՈԼՈՐ ԲԱՅԵՐԸ</p>
        </div>
        <button 
          onClick={() => {
            setLevelIndex(0);
            setIsGameFinished(false);
          }}
          className="btn-primary w-full py-6 text-xl flex items-center justify-center gap-3"
        >
          <RefreshCcw /> ԿՐԿՆԵԼ ԽԱՂԸ
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl w-full mx-auto flex flex-col gap-8 px-4 select-none mb-20">
      <div className="flex justify-between items-center bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50">
        <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg ${levelIndex % 2 === 0 ? 'bg-brand-blue-dark text-white' : 'bg-brand-sky text-white'}`}>
                {levelIndex % 2 === 0 ? '🤵' : '👩'}
            </div>
            <div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Բայ</span>
              <span className={`text-xl font-black italic text-brand-blue-dark`}>
                {level?.verb}
              </span>
            </div>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Առաջընթաց</span>
          <span className="text-2xl font-black text-brand-blue-dark italic">{levelIndex + 1}/{GAME_LEVELS.length}</span>
        </div>
      </div>

      <div className="flex justify-center py-10 relative">
        <div className="absolute left-[-60px] top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2">
            <div className="text-6xl">🤵</div>
            <span className="text-[10px] font-black bg-brand-blue-dark text-white px-3 py-1 rounded-full">ԳՈՌ</span>
        </div>
        <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-2">
            <div className="text-6xl">👩</div>
            <span className="text-[10px] font-black bg-brand-sky text-white px-3 py-1 rounded-full">ԳԱՅԱՆԵ</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {cells.map((cell, i) => (
            <motion.div
              key={`${levelIndex}-${i}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: cell.hidden ? 0 : 1, 
                opacity: cell.hidden ? 0 : 1 
              }}
              className="relative w-32 h-36"
            >
              <button
                onClick={() => handleCellClick(i)}
                className={`hexagon w-full h-full flex items-center justify-center p-4 text-center transition-all duration-300 ${
                  selectedCell === i 
                    ? 'bg-brand-blue text-white shadow-xl scale-105 z-10' 
                    : 'bg-white text-slate-700 shadow-md hover:shadow-lg hover:bg-brand-ice'
                } border-2 ${selectedCell === i ? 'border-white' : 'border-slate-100'}`}
              >
                <span className={`font-bold leading-tight ${cell.text.length > 10 ? 'text-sm' : 'text-base'}`}>
                  {cell.text}
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-center min-h-[48px]">
        <AnimatePresence>
          {isLevelComplete && (
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-brand-blue-dark text-white px-8 py-3 rounded-full font-black uppercase tracking-widest flex items-center gap-3 shadow-xl"
            >
               <CheckCircle2 /> ԳԵՐԱԶԱՆՑ Է! ՀԱՋՈՐԴԸ...
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="text-center text-slate-400 font-bold uppercase text-[10px] tracking-[0.4em] opacity-40">
          Գտիր հայերեն և իսպաներեն զույգերը
      </div>

      <style>{`
        .hexagon {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
      `}</style>
    </div>
  );
}
