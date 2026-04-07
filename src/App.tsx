import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Settings, Eye, Calculator, BookOpen, 
  ArrowRight, Info, CheckCircle, TrendingUp,
  Shield, Heart, Utensils, Store, X, ArrowUpRight
} from 'lucide-react';
import { cn } from './lib/utils';

type Niche = 'law' | 'medicine' | 'gastronomy' | 'local';
type Mode = 'xray' | 'roi' | 'hero' | 'end-client';

const niches = {
  law: {
    name: 'Advocacia',
    icon: Shield,
    hero: {
      title: 'Defenda seus direitos com quem entende.',
      subtitle: 'Especialistas em direito empresarial e civil, focados em resultados rápidos e seguros. Protegemos o seu patrimônio com excelência.',
      cta: 'Agende uma Consulta',
    },
    features: [
      { title: 'Análise de Contratos', desc: 'Revisão minuciosa para evitar passivos e garantir segurança jurídica.' },
      { title: 'Defesa Trabalhista', desc: 'Proteção completa para sua empresa contra processos indevidos.' },
      { title: 'Consultoria Tributária', desc: 'Otimização de impostos dentro da lei para maximizar seus lucros.' },
    ],
    roi: {
      visitors: 1000,
      conversionRate: 0.03,
      ticket: 5000,
    }
  },
  medicine: {
    name: 'Medicina',
    icon: Heart,
    hero: {
      title: 'Sua saúde em mãos especialistas.',
      subtitle: 'Atendimento humanizado e tecnologia de ponta para o seu bem-estar. Agende sua consulta sem sair de casa.',
      cta: 'Marcar Exame',
    },
    features: [
      { title: 'Corpo Clínico Renomado', desc: 'Especialistas com anos de experiência e formação nas melhores instituições.' },
      { title: 'Equipamentos Modernos', desc: 'Diagnósticos precisos e rápidos com tecnologia de última geração.' },
      { title: 'Atendimento 24h', desc: 'Sempre prontos para cuidar de você, a qualquer hora do dia ou da noite.' },
    ],
    roi: {
      visitors: 2000,
      conversionRate: 0.08,
      ticket: 350,
    }
  },
  gastronomy: {
    name: 'Gastronomia',
    icon: Utensils,
    hero: {
      title: 'Uma experiência inesquecível para o seu paladar.',
      subtitle: 'Ingredientes frescos, receitas exclusivas e um ambiente acolhedor. Descubra o verdadeiro sabor da alta gastronomia.',
      cta: 'Fazer Reserva',
    },
    features: [
      { title: 'Menu Degustação', desc: 'Uma jornada de sabores únicos criada pelo nosso chef premiado.' },
      { title: 'Carta de Vinhos', desc: 'Rótulos selecionados por sommeliers para harmonizar perfeitamente.' },
      { title: 'Eventos Privados', desc: 'Espaço exclusivo e atendimento personalizado para suas celebrações.' },
    ],
    roi: {
      visitors: 5000,
      conversionRate: 0.15,
      ticket: 180,
    }
  },
  local: {
    name: 'Comércio Local',
    icon: Store,
    hero: {
      title: 'Os melhores produtos, pertinho de você.',
      subtitle: 'Qualidade, variedade e o atendimento que você já conhece e confia. Compre online e retire na loja.',
      cta: 'Ver Ofertas',
    },
    features: [
      { title: 'Entrega Rápida', desc: 'Receba suas compras em casa no mesmo dia, com total comodidade.' },
      { title: 'Produtos Frescos', desc: 'Reposição diária de hortifruti e produtos perecíveis de alta qualidade.' },
      { title: 'Clube de Vantagens', desc: 'Descontos exclusivos e ofertas personalizadas para clientes fiéis.' },
    ],
    roi: {
      visitors: 10000,
      conversionRate: 0.05,
      ticket: 85,
    }
  }
};

const xrayData = {
  hero: {
    title: 'A Seção Hero (Acima da Dobra)',
    desc: 'Esta é a área mais crítica do site. O usuário decide em 3 segundos se vai ficar ou sair. A arquitetura aqui foca em Clareza (O que é?), Benefício (Por que me importa?) e Ação (O que faço agora?).',
    conversionImpact: '+40% na retenção inicial'
  },
  features: {
    title: 'Bloco de Autoridade / Benefícios',
    desc: 'Em vez de listar características técnicas, traduzimos funcionalidades em benefícios emocionais. Isso reduz a ansiedade do usuário e constrói confiança.',
    conversionImpact: '+25% no engajamento'
  },
  cta: {
    title: 'Call to Action (Chamada para Ação)',
    desc: 'Posicionamento estratégico do botão principal. Usamos contraste de cor e microcópia orientada à ação para guiar o olhar do usuário diretamente para a conversão.',
    conversionImpact: '+15% na taxa de cliques'
  }
};

export default function App() {
  const [niche, setNiche] = useState<Niche>('law');
  const [mode, setMode] = useState<Mode>('hero');
  const [activeXray, setActiveXray] = useState<string | null>(null);

  const currentNiche = niches[niche];
  const isEndClient = mode === 'end-client';

  // ROI Calculations
  const monthlyRevenue = currentNiche.roi.visitors * currentNiche.roi.conversionRate * currentNiche.roi.ticket;
  const optimizedRevenue = currentNiche.roi.visitors * (currentNiche.roi.conversionRate * 1.5) * currentNiche.roi.ticket; // Assuming 50% improvement with good UX

  const XrayMarker = ({ id, position }: { id: keyof typeof xrayData, position: string }) => {
    if (mode !== 'xray') return null;
    
    const isActive = activeXray === id;
    const data = xrayData[id];

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
                  <h4 className="font-bold">{data.title}</h4>
                  <button onClick={() => setActiveXray(null)} className="text-brand-yellow/60 hover:text-brand-yellow">
                    <X size={16} />
                  </button>
                </div>
                <p className="text-sm opacity-80 mb-4 leading-relaxed">{data.desc}</p>
                <div className="bg-brand-yellow text-brand-dark text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-2">
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

  const SectionWrapper = ({ children, id, className }: { children: React.ReactNode, id: keyof typeof xrayData, className?: string }) => {
    return (
      <div className={cn(
        "relative transition-all duration-500",
        mode === 'xray' ? "border-2 border-dashed border-brand-yellow/50 m-4 p-4" : "",
        className
      )}>
        {children}
      </div>
    );
  };

  return (
    <div className="min-h-screen font-sans bg-brand-light text-brand-dark selection:bg-brand-yellow selection:text-brand-dark">
      
      {/* Consultant Controls (Hidden in End-Client Mode) */}
      <AnimatePresence>
        {!isEndClient && (
          <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="fixed top-0 left-0 right-0 z-50 bg-brand-light/90 backdrop-blur-md border-b border-brand-dark/10 shadow-sm"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
                
                {/* Niche Selector */}
                <div className="flex items-center gap-2 bg-white p-1 rounded-full overflow-x-auto w-full md:w-auto border border-brand-dark/10">
                  {(Object.entries(niches) as [Niche, typeof niches[Niche]][]).map(([key, value]) => {
                    const Icon = value.icon;
                    return (
                      <button
                        key={key}
                        onClick={() => setNiche(key)}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                          niche === key 
                            ? "bg-brand-dark text-brand-yellow" 
                            : "text-brand-dark/60 hover:text-brand-dark hover:bg-brand-dark/5"
                        )}
                      >
                        <Icon size={16} />
                        {value.name}
                      </button>
                    );
                  })}
                </div>

                {/* Mode Selector */}
                <div className="flex items-center gap-2 bg-white p-1 rounded-full w-full md:w-auto border border-brand-dark/10">
                  <button
                    onClick={() => setMode('hero')}
                    className={cn(
                      "flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                      mode === 'hero' ? "bg-brand-dark text-brand-yellow" : "text-brand-dark/60 hover:text-brand-dark"
                    )}
                  >
                    <BookOpen size={16} />
                    <span className="hidden sm:inline">Guia do Herói</span>
                  </button>
                  <button
                    onClick={() => setMode('xray')}
                    className={cn(
                      "flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                      mode === 'xray' ? "bg-brand-dark text-brand-yellow" : "text-brand-dark/60 hover:text-brand-dark"
                    )}
                  >
                    <Settings size={16} />
                    <span className="hidden sm:inline">Raio-X</span>
                  </button>
                  <button
                    onClick={() => setMode('roi')}
                    className={cn(
                      "flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                      mode === 'roi' ? "bg-brand-dark text-brand-yellow" : "text-brand-dark/60 hover:text-brand-dark"
                    )}
                  >
                    <Calculator size={16} />
                    <span className="hidden sm:inline">ROI</span>
                  </button>
                  <div className="w-px h-6 bg-brand-dark/10 mx-1 hidden md:block"></div>
                  <button
                    onClick={() => setMode('end-client')}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-brand-yellow text-brand-dark hover:bg-[#d8d287] transition-all"
                  >
                    <Eye size={16} />
                    <span className="hidden sm:inline">Visão Cliente</span>
                  </button>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Return from End-Client Mode Button */}
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

      {/* Main Content Area */}
      <main className={cn("transition-all duration-500", !isEndClient ? "pt-24" : "")}>
        
        {/* ROI Simulator Overlay */}
        <AnimatePresence>
          {mode === 'roi' && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="fixed top-32 right-6 z-40 w-80 bg-brand-dark text-brand-yellow rounded-2xl shadow-2xl border border-brand-yellow/20 overflow-hidden"
            >
              <div className="bg-brand-olive p-4">
                <h3 className="font-bold flex items-center gap-2">
                  <Calculator size={18} />
                  Simulador de Conversão
                </h3>
                <p className="text-brand-yellow/80 text-xs mt-1">Impacto financeiro do design estratégico</p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="opacity-80">Tráfego Mensal</span>
                    <span className="font-semibold">{currentNiche.roi.visitors.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-brand-yellow/20 rounded-full h-2">
                    <div className="bg-brand-yellow h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="opacity-80">Ticket Médio</span>
                    <span className="font-semibold">R$ {currentNiche.roi.ticket.toLocaleString()}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-brand-yellow/20">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm opacity-80">Cenário Atual ({(currentNiche.roi.conversionRate * 100).toFixed(1)}%)</span>
                    <span className="font-bold">R$ {monthlyRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-medium">Com UX Otimizado ({(currentNiche.roi.conversionRate * 1.5 * 100).toFixed(1)}%)</span>
                    <span className="font-bold text-xl">R$ {optimizedRevenue.toLocaleString()}</span>
                  </div>
                </div>
                <div className="bg-brand-yellow text-brand-dark p-3 rounded-lg mt-4">
                  <p className="text-sm font-medium text-center">
                    Potencial de <span className="font-bold">+ R$ {(optimizedRevenue - monthlyRevenue).toLocaleString()}</span> /mês
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HERO SECTION */}
        <SectionWrapper id="hero" className="relative bg-brand-dark text-brand-yellow overflow-hidden min-h-[90vh] flex flex-col">
           <XrayMarker id="hero" position="top-32 left-8" />
           
           {/* Background Image with Overlay */}
           <div className="absolute inset-0 opacity-40">
             <img src={`https://picsum.photos/seed/${niche}hero/1920/1080`} className="w-full h-full object-cover" alt="Hero" />
           </div>
           
           {/* Top Nav (Mock) */}
           <div className="relative z-10 flex justify-between items-center p-6 md:p-12">
             <div className="font-bold text-xl leading-none">
               The<br/>portfolio<br/>club
             </div>
             <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium">
               <span>Planos</span>
               <span>Sobre Nós</span>
               <button className="bg-brand-yellow text-brand-dark px-6 py-2 rounded-full flex items-center gap-2 hover:bg-white transition-colors">
                 Junte-se <ArrowRight size={14} />
               </button>
             </div>
           </div>

           <div className="relative z-10 flex-grow flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12 w-full">
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
           
           {/* Huge Title overlapping bottom */}
           <div className="absolute bottom-0 left-0 w-full translate-y-[15%] px-6 md:px-12 pointer-events-none">
             <h1 className="text-[14vw] font-bold leading-none tracking-tighter text-brand-yellow mix-blend-normal whitespace-nowrap">
               The {currentNiche.name.toLowerCase()} club
             </h1>
           </div>
        </SectionWrapper>

        {/* ABOUT / ROI SECTION (Olive background) */}
        <SectionWrapper id="features" className="bg-brand-olive text-brand-yellow py-32">
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
                
                {/* Stats / ROI */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-brand-yellow/30 pt-12">
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
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* FEATURES GRID (Light background) */}
        <div className="bg-brand-light text-brand-dark py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight max-w-2xl leading-tight">
                Metodologia focada em conversão e experiência.
              </h2>
              <p className="text-xs tracking-widest uppercase font-medium">[ COMO FUNCIONA ]</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {currentNiche.features.map((feature, index) => (
                <div key={index} className="border border-brand-dark/20 p-8 flex flex-col h-full bg-white">
                  <p className="text-xs tracking-widest mb-8 font-medium">[ 0{index + 1} ]</p>
                  <h3 className="text-2xl font-medium mb-4">{feature.title}</h3>
                  <p className="text-brand-dark/70 mt-auto leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* EVENTS / CARDS SECTION */}
        <div className="bg-brand-light text-brand-dark pb-32">
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
                    <img src={`https://picsum.photos/seed/${niche}case${i}/600/800`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={`Case ${i}`} />
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

        {/* FOOTER */}
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
      </main>
    </div>
  );
}

