import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Calculator, Settings, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

export const HeroSection = ({ nicheId, currentNiche, SectionWrapper, XrayMarker }: any) => (
  <SectionWrapper id="hero" className="relative bg-brand-dark text-brand-yellow overflow-hidden min-h-[90vh] flex flex-col">
    <XrayMarker id="hero" position="top-32 left-8" />
    <div className="absolute inset-0 opacity-40">
      <img src={`https://picsum.photos/seed/${nicheId}hero/1920/1080`} className="w-full h-full object-cover" alt="Hero" />
    </div>
    <div className="relative z-10 flex-grow flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
      <div className="max-w-2xl mb-32">
        <p className="text-xl md:text-2xl mb-8 leading-snug font-medium">
          {currentNiche.hero.subtitle}
        </p>
        <SectionWrapper id="cta" className="-m-4 p-4 inline-block">
          <XrayMarker id="cta" position="-top-2 -right-2" />
          <button className="bg-brand-yellow text-brand-dark px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white transition-colors">
            {currentNiche.hero.cta} <ArrowRight size={18} />
          </button>
        </SectionWrapper>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full translate-y-[15%] px-6 md:px-12 pointer-events-none">
      <h1 className="text-[14vw] font-bold leading-none tracking-tighter text-brand-yellow mix-blend-normal whitespace-nowrap">
        The {currentNiche.name.toLowerCase()} club
      </h1>
    </div>
  </SectionWrapper>
);

export const AboutSection = ({ currentNiche, monthlyRevenue, optimizedRevenue, SectionWrapper, XrayMarker }: any) => (
  <SectionWrapper id="none" htmlId="sobre-nos" className="bg-brand-olive text-brand-yellow py-32">
    <XrayMarker id="features" position="top-8 left-8" />
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-3">
          <p className="text-xs tracking-widest uppercase font-medium">[ ESTRATÉGIA ]</p>
        </div>
        <div className="md:col-span-9">
          <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-16 max-w-4xl">
            Transformamos a confiança gerada pelo design em retorno financeiro direto para o seu negócio de {currentNiche.name.toLowerCase()}.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-brand-yellow/30 pt-12">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl md:text-5xl font-medium mb-2">{(currentNiche.roi.conversionRate * 100).toFixed(1)}%</p>
                <p className="text-sm opacity-80">Conversão Atual</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-medium mb-2">{(currentNiche.roi.conversionRate * 1.5 * 100).toFixed(1)}%</p>
                <p className="text-sm opacity-80">Meta Otimizada</p>
              </div>
              <div className="col-span-2">
                <p className="text-4xl md:text-5xl font-medium mb-2">+ R$ {(optimizedRevenue - monthlyRevenue).toLocaleString()}</p>
                <p className="text-sm opacity-80">Potencial de Receita Adicional / mês</p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-8 bg-brand-dark/10 p-8 rounded-2xl">
              <div>
                <div className="flex justify-between text-sm mb-3 font-medium">
                  <span>Receita Atual</span>
                  <span>R$ {monthlyRevenue.toLocaleString()}</span>
                </div>
                <div className="w-full bg-brand-dark/20 h-6 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '66%' }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-brand-yellow/50"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-3 font-medium">
                  <span>Receita Otimizada</span>
                  <span className="text-brand-yellow font-bold">R$ {optimizedRevenue.toLocaleString()}</span>
                </div>
                <div className="w-full bg-brand-dark/20 h-6 rounded-full overflow-hidden relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="h-full bg-brand-yellow relative"
                  >
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-dark text-xs font-bold"
                    >
                      +50%
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export const FeaturesSection = ({ currentNiche, FeatureCard }: any) => (
  <div className="bg-brand-light text-brand-dark py-32">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight max-w-2xl leading-tight">
          Metodologia focada em conversão e experiência.
        </h2>
        <p className="text-xs tracking-widest uppercase font-medium">[ COMO FUNCIONA ]</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {currentNiche.features.map((feature: any, index: number) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </div>
  </div>
);

export const CasesSection = ({ nicheId, currentNiche }: any) => (
  <div id="planos" className="bg-brand-light text-brand-dark pb-32">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
          Exemplos de Aplicação.
        </h2>
        <button className="inline-flex items-center gap-2 text-sm font-medium border-b border-brand-dark pb-1 hover:opacity-70 transition-opacity">
          <Settings size={14} /> Ver todos os casos
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-brand-dark/5">
              <img src={`https://picsum.photos/seed/${nicheId}case${i}/600/800`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={`Case ${i}`} />
              <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg transition-transform group-hover:scale-110">
                <ArrowUpRight size={20} className="text-brand-dark" />
              </div>
              <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-medium rounded-full">
                Case 0{i}
              </div>
            </div>
            <h3 className="text-lg font-medium uppercase tracking-wide mb-1">Projeto {currentNiche.name} {i}</h3>
            <p className="text-sm text-brand-dark/60">Otimização de fluxo de agendamento e redução de bounce rate.</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const FooterSection = () => (
  <footer className="bg-brand-dark text-brand-yellow py-24">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-12 items-end">
        <div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
            The<br/>portfolio<br/>club
          </h2>
          <p className="text-sm opacity-80 max-w-xs">
            Onde o design encontra a estratégia de negócios.
          </p>
        </div>
        <div className="flex flex-col md:items-end gap-8">
          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-2">
              <span className="font-medium mb-2">Contato</span>
              <a href="#" className="opacity-80 hover:opacity-100">hello@portfolioclub.com</a>
              <a href="#" className="opacity-80 hover:opacity-100">+55 11 99999-9999</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-medium mb-2">Legal</span>
              <a href="#" className="opacity-80 hover:opacity-100">Privacidade</a>
              <a href="#" className="opacity-80 hover:opacity-100">Termos</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
