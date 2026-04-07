import React, { useRef } from 'react';
import { ArrowRight, Calculator, Settings, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const HeroSection = ({ nicheId, currentNiche, SectionWrapper, XrayMarker }: any) => (
  <SectionWrapper id="hero" className="relative bg-brand-dark text-brand-yellow overflow-hidden min-h-[max(80vh,600px)] flex flex-col">
    <XrayMarker id="hero" position="top-32 left-8" />
    <div className="absolute inset-0 opacity-40">
      <img src={`https://picsum.photos/seed/${nicheId}hero/1920/1080`} className="w-full h-full object-cover" alt="Hero" />
    </div>
    <div className="relative z-10 flex-grow flex flex-col justify-center max-w-[1920px] mx-auto px-[clamp(1.5rem,5vw,4rem)] w-full pt-20 pb-[clamp(6rem,12vw,12rem)]">
      <div className="max-w-3xl mb-[clamp(2rem,8vw,8rem)]">
        <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] mb-8 leading-snug font-medium">
          {currentNiche.hero.subtitle}
        </p>
        <SectionWrapper id="cta" className="inline-block">
          <XrayMarker id="cta" position="-top-2 -right-2" />
          <button className="bg-brand-yellow text-brand-dark px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white transition-colors text-[clamp(0.875rem,1.5vw,1rem)]">
            {currentNiche.hero.cta} <ArrowRight size={18} />
          </button>
        </SectionWrapper>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full translate-y-[20%] px-[clamp(1.5rem,5vw,3rem)] pointer-events-none">
      <h1 className="text-[clamp(3.5rem,12vw,15rem)] font-bold leading-none tracking-tighter text-brand-yellow mix-blend-normal whitespace-nowrap opacity-90">
        The {currentNiche.name.toLowerCase()} club
      </h1>
    </div>
  </SectionWrapper>
);

export const AboutSection = ({ currentNiche, monthlyRevenue, optimizedRevenue, SectionWrapper, XrayMarker }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".progress-bar-1",
      { width: "0%" },
      { width: "66%", duration: 1, ease: "power3.out", scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
    );
    gsap.fromTo(".progress-bar-2",
      { width: "0%" },
      { width: "100%", duration: 1, ease: "power3.out", delay: 0.2, scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
    );
    gsap.fromTo(".progress-badge",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: 1.2, scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
    );
  }, { scope: containerRef });

  return (
  <SectionWrapper id="none" htmlId="sobre-nos" className="bg-brand-olive text-brand-yellow py-[clamp(6rem,12vw,12rem)]">
    <XrayMarker id="features" position="top-8 left-8" />
    <div ref={containerRef} className="max-w-[1920px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
      <div className="grid lg:grid-cols-12 gap-[clamp(2rem,5vw,3rem)]">
        <div className="lg:col-span-3">
          <p className="text-xs tracking-widest uppercase font-medium">[ ESTRATÉGIA ]</p>
        </div>
        <div className="lg:col-span-9">
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-medium leading-tight mb-[clamp(2rem,6vw,4rem)] max-w-5xl">
            Transformamos a confiança gerada pelo design em retorno financeiro direto para o seu negócio de {currentNiche.name.toLowerCase()}.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,5vw,3rem)] border-t border-brand-yellow/30 pt-[clamp(2rem,5vw,3rem)]">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-[clamp(2rem,4vw,3rem)] font-medium mb-2">{(currentNiche.roi.conversionRate * 100).toFixed(1)}%</p>
                <p className="text-sm opacity-80">Conversão Atual</p>
              </div>
              <div>
                <p className="text-[clamp(2rem,4vw,3rem)] font-medium mb-2">{(currentNiche.roi.conversionRate * 1.5 * 100).toFixed(1)}%</p>
                <p className="text-sm opacity-80">Meta Otimizada</p>
              </div>
              <div className="col-span-2">
                <p className="text-[clamp(2rem,4vw,3rem)] font-medium mb-2">+ R$ {(optimizedRevenue - monthlyRevenue).toLocaleString()}</p>
                <p className="text-sm opacity-80">Potencial de Receita Adicional / mês</p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-8 bg-brand-dark/10 p-[clamp(1.5rem,3vw,2rem)] rounded-2xl">
              <div>
                <div className="flex justify-between text-sm mb-3 font-medium">
                  <span>Receita Atual</span>
                  <span>R$ {monthlyRevenue.toLocaleString()}</span>
                </div>
                <div className="w-full bg-brand-dark/20 h-6 rounded-full overflow-hidden">
                  <div className="progress-bar-1 h-full bg-brand-yellow/50" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-3 font-medium">
                  <span>Receita Otimizada</span>
                  <span className="text-brand-yellow font-bold">R$ {optimizedRevenue.toLocaleString()}</span>
                </div>
                <div className="w-full bg-brand-dark/20 h-6 rounded-full overflow-hidden relative">
                  <div className="progress-bar-2 h-full bg-brand-yellow relative">
                    <div className="progress-badge absolute right-3 top-1/2 -translate-y-1/2 text-brand-dark text-xs font-bold">
                      +50%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
  );
};

export const FeaturesSection = ({ currentNiche, FeatureCard }: any) => (
  <div className="bg-brand-light text-brand-dark py-[clamp(6rem,12vw,12rem)]">
    <div className="max-w-[1920px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-[clamp(2rem,6vw,4rem)] gap-8">
        <h2 className="text-[clamp(2rem,5vw,3.75rem)] font-medium tracking-tight max-w-3xl leading-tight">
          Metodologia focada em conversão e experiência.
        </h2>
        <p className="text-xs tracking-widest uppercase font-medium whitespace-nowrap">[ COMO FUNCIONA ]</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[clamp(1rem,3vw,1.5rem)]">
        {currentNiche.features.map((feature: any, index: number) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </div>
  </div>
);

export const CasesSection = ({ nicheId, currentNiche }: any) => (
  <div id="planos" className="bg-brand-light text-brand-dark pb-[clamp(6rem,12vw,12rem)]">
    <div className="max-w-[1920px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
      <div className="flex flex-col items-center text-center mb-[clamp(2rem,6vw,4rem)]">
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-medium tracking-tight mb-6">
          Exemplos de Aplicação.
        </h2>
        <button className="inline-flex items-center gap-2 text-sm font-medium border-b border-brand-dark pb-1 hover:opacity-70 transition-opacity">
          <Settings size={14} /> Ver todos os casos
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[clamp(1rem,3vw,1.5rem)]">
        {[1, 2, 3].map((i) => (
          <div key={i} className="group cursor-pointer flex flex-col">
            <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-brand-dark/5 rounded-lg">
              <img src={`https://picsum.photos/seed/${nicheId}case${i}/600/800`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={`Case ${i}`} />
              <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg transition-transform group-hover:scale-110">
                <ArrowUpRight size={20} className="text-brand-dark" />
              </div>
              <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-medium rounded-full shadow-sm">
                Case 0{i}
              </div>
            </div>
            <h3 className="text-[clamp(1.125rem,2vw,1.25rem)] font-medium uppercase tracking-wide mb-2">Projeto {currentNiche.name} {i}</h3>
            <p className="text-sm text-brand-dark/60 leading-relaxed">Otimização de fluxo de agendamento e redução de bounce rate.</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const FooterSection = () => (
  <footer className="bg-brand-dark text-brand-yellow py-[clamp(6rem,10vw,10rem)]">
    <div className="max-w-[1920px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
      <div className="grid md:grid-cols-2 gap-[clamp(3rem,8vw,6rem)] items-end">
        <div>
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-tighter leading-none mb-8">
            The<br/>portfolio<br/>club
          </h2>
          <p className="text-[clamp(0.875rem,1.5vw,1rem)] opacity-80 max-w-xs">
            Onde o design encontra a estratégia de negócios.
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-8">
          <div className="flex flex-wrap gap-[clamp(2rem,5vw,3rem)] text-sm">
            <div className="flex flex-col gap-3">
              <span className="font-medium mb-1 text-white/50 uppercase tracking-widest text-xs">Contato</span>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">hello@portfolioclub.com</a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">+55 11 99999-9999</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-medium mb-1 text-white/50 uppercase tracking-widest text-xs">Legal</span>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Privacidade</a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Termos</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
