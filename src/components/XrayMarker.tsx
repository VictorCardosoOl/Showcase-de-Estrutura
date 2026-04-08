import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Info, X, TrendingUp } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAppContext } from '../context/AppContext';
import { xrayData } from '../data/xrayData';

export const XrayMarker = ({ id, position }: { id: string, position: string }) => {
  const { mode, activeXray, setActiveXray } = useAppContext();
  
  if (mode !== 'xray') return null;
  
  const isActive = activeXray === id;
  const data = xrayData[id];

  if (!data) return null;

  return (
    <div className={cn("absolute z-50", position)}>
      <div className="relative">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setActiveXray(isActive ? null : id);
          }}
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full shadow-lg transition-all duration-300",
            isActive ? "bg-brand-yellow text-brand-dark scale-110" : "bg-white text-brand-dark hover:bg-brand-yellow/20 animate-pulse"
          )}
        >
          <Info size={24} />
        </button>
        
        <AnimatePresence>
          {isActive && (
            <motion.div 
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute top-12 left-0 w-80 bg-brand-dark text-brand-yellow rounded-xl shadow-2xl border border-brand-yellow/20 p-5 text-left"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-display font-bold text-lg">{data.title}</h4>
                <button onClick={() => setActiveXray(null)} className="text-brand-yellow/60 hover:text-brand-yellow">
                  <X size={16} />
                </button>
              </div>
              <p className="font-sans text-sm opacity-80 mb-4 leading-relaxed">{data.desc}</p>
              <div className="font-sans bg-brand-yellow text-brand-dark text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-2">
                <TrendingUp size={14} />
                Impacto: {data.conversionImpact}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
