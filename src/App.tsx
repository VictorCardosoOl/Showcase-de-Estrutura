import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, Eye, Calculator, BookOpen } from 'lucide-react';
import { cn } from './lib/utils';
import ProfessionalLayout from './niches/professional';
import GastronomyLayout from './niches/gastronomy';
import CommerceLayout from './niches/commerce';
import EmpresarialLayout from './niches/empresarial';
import { Navbar } from './components/Navbar';
import { useScrollDirection } from './hooks/useScrollDirection';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useAppContext } from './context/AppContext';
import { niches } from './data/niches';
import { XrayMarker } from './components/XrayMarker';
import { SectionWrapper } from './components/SectionWrapper';
import { FeatureCard } from './components/FeatureCard';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const { niche, setNiche, mode, setMode } = useAppContext();
  const { scrollDirection, isAtTop } = useScrollDirection();
  const [isHoveringTop, setIsHoveringTop] = useState(false);
  const controlsRef = useRef<HTMLDivElement>(null);
  const isEndClient = mode === 'end-client';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setIsHoveringTop(e.clientY < 120);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const isControlsVisible = isAtTop || scrollDirection === 'up' || isHoveringTop;

  useGSAP(() => {
    if (controlsRef.current) {
      gsap.to(controlsRef.current, {
        yPercent: isControlsVisible ? 0 : -100,
        duration: 0.4,
        ease: "power3.out",
        overwrite: true
      });
    }
  }, [isControlsVisible, isEndClient]);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  const currentNiche = niches[niche];
  const monthlyRevenue = currentNiche.roi.visitors * currentNiche.roi.conversionRate * currentNiche.roi.ticket;
  const optimizedRevenue = currentNiche.roi.visitors * (currentNiche.roi.conversionRate * 1.5) * currentNiche.roi.ticket;

  return (
    <div className={cn(
      "min-h-screen font-sans bg-brand-light text-brand-dark selection:bg-brand-yellow selection:text-brand-dark",
      `${niche}-theme`
    )}>
      <AnimatePresence>
        {isEndClient && <Navbar />}
      </AnimatePresence>

      <AnimatePresence>
        {!isEndClient && (
          <motion.div 
            ref={controlsRef}
            className="fixed top-0 left-0 right-0 z-[100] bg-white/85 backdrop-blur-xl border-b border-slate-200/60 shadow-sm"
          >
            <div className="max-w-[1920px] mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              
              <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/60">
                {(Object.entries(niches) as [keyof typeof niches, typeof niches[keyof typeof niches]][]).map(([key, value]) => {
                  const Icon = value.icon;
                  const isActive = niche === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setNiche(key)}
                      className={cn(
                        "flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                        isActive 
                          ? "bg-white text-brand-dark shadow-sm ring-1 ring-slate-200/50" 
                          : "text-slate-500 hover:text-brand-dark hover:bg-slate-200/50"
                      )}
                    >
                      <Icon size={16} className={isActive ? "text-brand-yellow" : "text-slate-400"} />
                      <span className="hidden sm:inline">{value.name}</span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl border border-slate-200/60">
                  <button
                    onClick={() => setMode('hero')}
                    className={cn(
                      "flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                      mode === 'hero' ? "bg-white text-brand-dark shadow-sm ring-1 ring-slate-200/50" : "text-slate-500 hover:text-brand-dark hover:bg-slate-200/50"
                    )}
                  >
                    <BookOpen size={16} className={mode === 'hero' ? "text-brand-yellow" : "text-slate-400"} />
                    <span className="hidden lg:inline">Guia do Herói</span>
                  </button>
                  <button
                    onClick={() => setMode('xray')}
                    className={cn(
                      "flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                      mode === 'xray' ? "bg-white text-brand-dark shadow-sm ring-1 ring-slate-200/50" : "text-slate-500 hover:text-brand-dark hover:bg-slate-200/50"
                    )}
                  >
                    <Settings size={16} className={mode === 'xray' ? "text-brand-yellow" : "text-slate-400"} />
                    <span className="hidden lg:inline">Raio-X</span>
                  </button>
                  <button
                    onClick={() => setMode('roi')}
                    className={cn(
                      "flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                      mode === 'roi' ? "bg-white text-brand-dark shadow-sm ring-1 ring-slate-200/50" : "text-slate-500 hover:text-brand-dark hover:bg-slate-200/50"
                    )}
                  >
                    <Calculator size={16} className={mode === 'roi' ? "text-brand-yellow" : "text-slate-400"} />
                    <span className="hidden lg:inline">ROI</span>
                  </button>
                </div>

                <div className="w-px h-8 bg-slate-200 hidden sm:block"></div>

                <button
                  onClick={() => setMode('end-client')}
                  className="flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-2 rounded-xl text-sm font-bold bg-brand-dark text-brand-yellow hover:bg-brand-dark/90 transition-all whitespace-nowrap shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Eye size={16} />
                  <span className="hidden sm:inline">Visão Cliente</span>
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isEndClient && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => setMode('hero')}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-brand-dark text-brand-yellow px-6 py-3 rounded-full shadow-2xl hover:bg-[#1a1a14] transition-all hover:scale-105"
          >
            <Settings size={18} />
            Sair da Visão do Cliente
          </motion.button>
        )}
      </AnimatePresence>

      <main className={cn("transition-all duration-500", !isEndClient ? "pt-20" : "")}>
        {niche === 'professional' && (
          <ProfessionalLayout 
            nicheId={niche} currentNiche={currentNiche} mode={mode} 
            monthlyRevenue={monthlyRevenue} optimizedRevenue={optimizedRevenue} 
            XrayMarker={XrayMarker} SectionWrapper={SectionWrapper} FeatureCard={FeatureCard} 
          />
        )}
        {niche === 'gastronomy' && (
          <GastronomyLayout 
            nicheId={niche} currentNiche={currentNiche} mode={mode} 
            monthlyRevenue={monthlyRevenue} optimizedRevenue={optimizedRevenue} 
            XrayMarker={XrayMarker} SectionWrapper={SectionWrapper} FeatureCard={FeatureCard} 
          />
        )}
        {niche === 'commerce' && (
          <CommerceLayout 
            nicheId={niche} currentNiche={currentNiche} mode={mode} 
            monthlyRevenue={monthlyRevenue} optimizedRevenue={optimizedRevenue} 
            XrayMarker={XrayMarker} SectionWrapper={SectionWrapper} FeatureCard={FeatureCard} 
          />
        )}
        {niche === 'empresarial' && (
          <EmpresarialLayout 
            nicheId={niche} currentNiche={currentNiche} mode={mode} 
            monthlyRevenue={monthlyRevenue} optimizedRevenue={optimizedRevenue} 
            XrayMarker={XrayMarker} SectionWrapper={SectionWrapper} FeatureCard={FeatureCard} 
          />
        )}
      </main>
    </div>
  );
}
