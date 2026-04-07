import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Settings, Eye, Calculator, BookOpen, 
  ArrowRight, Info, CheckCircle, TrendingUp,
  Shield, Heart, Utensils, Store, X
} from 'lucide-react';
import { cn } from './lib/utils';

type Niche = 'law' | 'medicine' | 'gastronomy' | 'local';
type Mode = 'xray' | 'roi' | 'hero' | 'end-client';

const niches = {
  law: {
    name: 'Advocacia',
    icon: Shield,
    colors: {
      primary: 'bg-slate-900',
      text: 'text-slate-900',
      accent: 'bg-amber-600',
      accentText: 'text-amber-600',
      bg: 'bg-slate-50',
      border: 'border-slate-200'
    },
    hero: {
      title: 'Defenda seus direitos com quem entende.',
      subtitle: 'Especialistas em direito empresarial e civil, focados em resultados rápidos e seguros. Protegemos o seu patrimônio com excelência.',
      cta: 'Agende uma Consulta',
    },
    features: [
      { title: 'Análise de Contratos', desc: 'Revisão minuciosa para evitar passivos.' },
      { title: 'Defesa Trabalhista', desc: 'Proteção completa para sua empresa.' },
      { title: 'Consultoria Tributária', desc: 'Otimização de impostos dentro da lei.' },
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
    colors: {
      primary: 'bg-teal-700',
      text: 'text-teal-900',
      accent: 'bg-emerald-500',
      accentText: 'text-emerald-600',
      bg: 'bg-teal-50',
      border: 'border-teal-200'
    },
    hero: {
      title: 'Sua saúde em mãos especialistas.',
      subtitle: 'Atendimento humanizado e tecnologia de ponta para o seu bem-estar. Agende sua consulta sem sair de casa.',
      cta: 'Marcar Exame',
    },
    features: [
      { title: 'Corpo Clínico Renomado', desc: 'Especialistas com anos de experiência.' },
      { title: 'Equipamentos Modernos', desc: 'Diagnósticos precisos e rápidos.' },
      { title: 'Atendimento 24h', desc: 'Sempre prontos para cuidar de você.' },
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
    colors: {
      primary: 'bg-orange-700',
      text: 'text-orange-950',
      accent: 'bg-red-600',
      accentText: 'text-red-600',
      bg: 'bg-orange-50',
      border: 'border-orange-200'
    },
    hero: {
      title: 'Uma experiência inesquecível para o seu paladar.',
      subtitle: 'Ingredientes frescos, receitas exclusivas e um ambiente acolhedor. Descubra o verdadeiro sabor da alta gastronomia.',
      cta: 'Fazer Reserva',
    },
    features: [
      { title: 'Menu Degustação', desc: 'Uma jornada de sabores únicos.' },
      { title: 'Carta de Vinhos', desc: 'Rótulos selecionados por sommeliers.' },
      { title: 'Eventos Privados', desc: 'Espaço exclusivo para celebrações.' },
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
    colors: {
      primary: 'bg-indigo-700',
      text: 'text-indigo-950',
      accent: 'bg-pink-600',
      accentText: 'text-pink-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200'
    },
    hero: {
      title: 'Os melhores produtos, pertinho de você.',
      subtitle: 'Qualidade, variedade e o atendimento que você já conhece e confia. Compre online e retire na loja.',
      cta: 'Ver Ofertas',
    },
    features: [
      { title: 'Entrega Rápida', desc: 'Receba suas compras em casa.' },
      { title: 'Produtos Frescos', desc: 'Reposição diária de hortifruti.' },
      { title: 'Clube de Vantagens', desc: 'Descontos exclusivos para clientes.' },
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
              isActive ? "bg-blue-600 text-white scale-110" : "bg-white text-blue-600 hover:bg-blue-50 animate-pulse"
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
                className="absolute top-12 left-0 w-80 bg-white rounded-xl shadow-2xl border border-slate-100 p-5 text-left"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-slate-900">{data.title}</h4>
                  <button onClick={() => setActiveXray(null)} className="text-slate-400 hover:text-slate-600">
                    <X size={16} />
                  </button>
                </div>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{data.desc}</p>
                <div className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-2">
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
        mode === 'xray' ? "border-2 border-dashed border-blue-300 rounded-2xl m-4 p-4 bg-blue-50/30" : "",
        className
      )}>
        {children}
      </div>
    );
  };

  return (
    <div className={cn("min-h-screen font-sans transition-colors duration-500", currentNiche.colors.bg)}>
      
      {/* Consultant Controls (Hidden in End-Client Mode) */}
      <AnimatePresence>
        {!isEndClient && (
          <motion.div 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
                
                {/* Niche Selector */}
                <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg overflow-x-auto w-full md:w-auto">
                  {(Object.entries(niches) as [Niche, typeof niches[Niche]][]).map(([key, value]) => {
                    const Icon = value.icon;
                    return (
                      <button
                        key={key}
                        onClick={() => setNiche(key)}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap",
                          niche === key 
                            ? "bg-white text-slate-900 shadow-sm" 
                            : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                        )}
                      >
                        <Icon size={16} />
                        {value.name}
                      </button>
                    );
                  })}
                </div>

                {/* Mode Selector */}
                <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg w-full md:w-auto">
                  <button
                    onClick={() => setMode('hero')}
                    className={cn(
                      "flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all",
                      mode === 'hero' ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    )}
                  >
                    <BookOpen size={16} />
                    <span className="hidden sm:inline">Guia do Herói</span>
                  </button>
                  <button
                    onClick={() => setMode('xray')}
                    className={cn(
                      "flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all",
                      mode === 'xray' ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    )}
                  >
                    <Settings size={16} />
                    <span className="hidden sm:inline">Raio-X</span>
                  </button>
                  <button
                    onClick={() => setMode('roi')}
                    className={cn(
                      "flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all",
                      mode === 'roi' ? "bg-white text-emerald-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    )}
                  >
                    <Calculator size={16} />
                    <span className="hidden sm:inline">ROI</span>
                  </button>
                  <div className="w-px h-6 bg-slate-300 mx-1 hidden md:block"></div>
                  <button
                    onClick={() => setMode('end-client')}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition-all"
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
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl hover:bg-slate-800 transition-all hover:scale-105"
          >
            <Settings size={18} />
            Sair da Visão do Cliente
          </motion.button>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className={cn("transition-all duration-500", !isEndClient ? "pt-32" : "")}>
        
        {/* ROI Simulator Overlay */}
        <AnimatePresence>
          {mode === 'roi' && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="fixed top-32 right-6 z-40 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
            >
              <div className="bg-emerald-600 text-white p-4">
                <h3 className="font-bold flex items-center gap-2">
                  <Calculator size={18} />
                  Simulador de Conversão
                </h3>
                <p className="text-emerald-100 text-xs mt-1">Impacto financeiro do design estratégico</p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-slate-600 mb-1">
                    <span>Tráfego Mensal</span>
                    <span className="font-semibold text-slate-900">{currentNiche.roi.visitors.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-slate-300 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-slate-600 mb-1">
                    <span>Ticket Médio</span>
                    <span className="font-semibold text-slate-900">R$ {currentNiche.roi.ticket.toLocaleString()}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm text-slate-500">Cenário Atual ({(currentNiche.roi.conversionRate * 100).toFixed(1)}%)</span>
                    <span className="font-bold text-slate-700">R$ {monthlyRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-medium text-emerald-600">Com UX Otimizado ({(currentNiche.roi.conversionRate * 1.5 * 100).toFixed(1)}%)</span>
                    <span className="font-bold text-xl text-emerald-600">R$ {optimizedRevenue.toLocaleString()}</span>
                  </div>
                </div>
                <div className="bg-emerald-50 p-3 rounded-lg mt-4">
                  <p className="text-sm text-emerald-800 font-medium text-center">
                    Potencial de <span className="font-bold">+ R$ {(optimizedRevenue - monthlyRevenue).toLocaleString()}</span> /mês
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <SectionWrapper id="hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <XrayMarker id="hero" position="-top-4 -left-4" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              key={`${niche}-hero-text`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6", currentNiche.colors.accent, "text-white")}>
                <currentNiche.icon size={16} />
                Especialista em {currentNiche.name}
              </div>
              <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight", currentNiche.colors.text)}>
                {currentNiche.hero.title}
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {currentNiche.hero.subtitle}
              </p>
              
              <SectionWrapper id="cta" className="-m-4 p-4">
                <XrayMarker id="cta" position="-top-2 -right-2" />
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className={cn(
                    "px-8 py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all hover:scale-105 flex items-center justify-center gap-2",
                    currentNiche.colors.primary
                  )}>
                    {currentNiche.hero.cta}
                    <ArrowRight size={20} />
                  </button>
                  {mode === 'hero' && (
                    <div className="flex items-center gap-2 text-sm text-slate-500 px-4">
                      <CheckCircle size={16} className={currentNiche.colors.accentText} />
                      Sem compromisso
                    </div>
                  )}
                </div>
              </SectionWrapper>
            </motion.div>

            <motion.div 
              key={`${niche}-hero-img`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className={cn("absolute inset-0 rounded-3xl opacity-20 blur-3xl", currentNiche.colors.primary)}></div>
              <div className={cn("relative aspect-square rounded-3xl overflow-hidden border-8 shadow-2xl", currentNiche.colors.border, "bg-white")}>
                <img 
                  src={`https://picsum.photos/seed/${niche}business/800/800`} 
                  alt={`${currentNiche.name} representação`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Trust Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4">
                  <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", currentNiche.colors.bg, currentNiche.colors.accentText)}>
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Resultados Comprovados</p>
                    <p className="text-sm text-slate-500">Mais de 500 clientes satisfeitos</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>

        {/* Features Section */}
        <div className="bg-white py-24">
          <SectionWrapper id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <XrayMarker id="features" position="-top-4 -left-4" />
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", currentNiche.colors.text)}>
                Por que nos escolher?
              </h2>
              <p className="text-lg text-slate-600">
                Nossa abordagem é focada em resolver os problemas reais do seu negócio, entregando valor em cada interação.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {currentNiche.features.map((feature, index) => (
                <motion.div 
                  key={`${niche}-feature-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={cn("p-8 rounded-2xl border transition-all hover:shadow-xl", currentNiche.colors.border, currentNiche.colors.bg)}
                >
                  <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white shadow-sm", currentNiche.colors.accentText)}>
                    <CheckCircle size={28} />
                  </div>
                  <h3 className={cn("text-xl font-bold mb-3", currentNiche.colors.text)}>{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </SectionWrapper>
        </div>

        {/* Educational Footer for the Consultant (Hidden in End-Client) */}
        {!isEndClient && (
          <div className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="mb-4 text-slate-300 font-medium">Plataforma de Demonstração Estratégica</p>
              <p className="text-sm max-w-2xl mx-auto">
                Este ambiente foi criado para demonstrar como o design focado em conversão e a arquitetura de informação 
                impactam diretamente os resultados de negócios em diferentes nichos.
              </p>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

