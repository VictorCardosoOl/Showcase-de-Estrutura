import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Settings, Eye, Calculator, BookOpen, 
  ArrowRight, Info, CheckCircle, TrendingUp,
  Shield, Heart, Utensils, Store, X, ArrowUpRight, Briefcase, Building2
} from 'lucide-react';
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

gsap.registerPlugin(ScrollTrigger);

type Niche = 'professional' | 'gastronomy' | 'commerce' | 'empresarial';
type Mode = 'xray' | 'roi' | 'hero' | 'end-client';

const niches = {
  professional: {
    name: 'Profissional',
    icon: Briefcase,
    hero: {
      title: 'Posicionamento estratégico e autoridade no seu mercado.',
      subtitle: 'Soluções sob medida que traduzem a sua expertise em resultados reais. Eleve o padrão da sua atuação profissional.',
      cta: 'Solicitar Consultoria Estratégica',
    },
    features: [
      { title: 'Estratégia Personalizada', desc: 'Mapeamento detalhado do seu cenário para desenvolver soluções alinhadas aos seus objetivos.', impact: 'Aumenta a percepção de valor e confiança em 45%.' },
      { title: 'Expertise Comprovada', desc: 'Metodologias validadas e conhecimento técnico aplicado para gerar impacto direto no seu negócio.', impact: 'Gera autoridade imediata, aumentando cliques no CTA em 30%.' },
      { title: 'Foco em Conversão', desc: 'Design e arquitetura de informação direcionados para transformar visitantes em clientes qualificados.', impact: 'Foco na resolução de problemas converte 3x mais visitantes.' },
    ],
    roi: {
      visitors: 1500,
      conversionRate: 0.05,
      ticket: 2500,
    }
  },
  gastronomy: {
    name: 'Gastronomia',
    icon: Utensils,
    hero: {
      title: 'Uma experiência inesquecível para o seu paladar.',
      subtitle: 'Ingredientes selecionados, receitas exclusivas e um ambiente acolhedor. Descubra o verdadeiro sabor da nossa cozinha.',
      cta: 'Reservar uma Experiência',
    },
    features: [
      { title: 'Menu Exclusivo', desc: 'Uma jornada de sabores únicos criada com paixão e técnica.', impact: 'Imagens de alta qualidade aqui aumentam reservas em 40%.' },
      { title: 'Ambiente e Experiência', desc: 'Espaço pensado para proporcionar momentos memoráveis.', impact: 'Aumenta o ticket médio percebido antes mesmo da visita.' },
      { title: 'Eventos e Encomendas', desc: 'Atendimento personalizado para suas celebrações e necessidades.', impact: 'Formulários dedicados convertem leads de alto valor.' },
    ],
    roi: {
      visitors: 5000,
      conversionRate: 0.15,
      ticket: 150,
    }
  },
  commerce: {
    name: 'Comércio',
    icon: Store,
    hero: {
      title: 'Os melhores produtos, com a qualidade que você confia.',
      subtitle: 'Variedade, curadoria especial e o atendimento que você merece. Compre com facilidade e segurança.',
      cta: 'Explorar Coleção Exclusiva',
    },
    features: [
      { title: 'Logística Eficiente', desc: 'Receba suas compras com rapidez e total comodidade.', impact: 'O maior motivador de compra: reduz abandono de carrinho em 60%.' },
      { title: 'Curadoria de Qualidade', desc: 'Produtos selecionados rigorosamente para garantir sua satisfação.', impact: 'Gera recorrência. Clientes que confiam compram 4x mais.' },
      { title: 'Benefícios Exclusivos', desc: 'Vantagens e ofertas personalizadas para clientes fiéis.', impact: 'Aumenta o LTV (Life Time Value) e a retenção em 25%.' },
    ],
    roi: {
      visitors: 10000,
      conversionRate: 0.05,
      ticket: 100,
    }
  },
  empresarial: {
    name: 'Empresarial',
    icon: Building2,
    hero: {
      title: 'Transformação digital e escala para o seu negócio.',
      subtitle: 'Soluções corporativas robustas para otimizar processos, engajar colaboradores e impulsionar resultados em larga escala.',
      cta: 'Agendar Diagnóstico Corporativo',
    },
    features: [
      { title: 'Automação de Processos', desc: 'Reduza custos operacionais com fluxos de trabalho inteligentes e integrados.', impact: 'Aumenta a eficiência da equipe em até 40%.' },
      { title: 'Segurança e Conformidade', desc: 'Infraestrutura de ponta para proteger os dados da sua empresa e clientes.', impact: 'Reduz riscos de vazamento e garante conformidade com LGPD.' },
      { title: 'Escalabilidade Garantida', desc: 'Sistemas preparados para crescer junto com a sua empresa sem gargalos.', impact: 'Suporta picos de acesso sem perda de performance.' },
    ],
    roi: {
      visitors: 20000,
      conversionRate: 0.02,
      ticket: 15000,
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
  const [niche, setNiche] = useState<Niche>('professional');
  const [mode, setMode] = useState<Mode>('hero');
  const [activeXray, setActiveXray] = useState<string | null>(null);

  const { scrollDirection, isAtTop } = useScrollDirection();
  const [isHoveringTop, setIsHoveringTop] = useState(false);
  const controlsRef = React.useRef<HTMLDivElement>(null);
  const isEndClient = mode === 'end-client';

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 120) {
        setIsHoveringTop(true);
      } else {
        setIsHoveringTop(false);
      }
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

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  const currentNiche = niches[niche];

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

  const SectionWrapper = ({ children, id, htmlId, className }: { children: React.ReactNode, id: keyof typeof xrayData | 'none', htmlId?: string, className?: string }) => {
    return (
      <div id={htmlId} className={cn(
        "relative transition-all duration-500 w-full",
        mode === 'xray' && id !== 'none' ? "outline outline-2 outline-dashed outline-brand-yellow/50 outline-offset-[-2px] bg-brand-yellow/5" : "",
        className
      )}>
        {children}
      </div>
    );
  };

  const FeatureCard = ({ feature, index }: { feature: any, index: number }) => {
    const cardRef = React.useRef<HTMLDivElement>(null);

    useGSAP(() => {
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          delay: index * 0.1, 
          ease: "power3.out",
          scrollTrigger: { 
            trigger: cardRef.current, 
            start: "top 85%" 
          } 
        }
      );
    }, { scope: cardRef });

    return (
      <div 
        ref={cardRef}
        className="relative border border-brand-dark/20 p-[clamp(1.5rem,3vw,2rem)] flex flex-col h-full bg-white group overflow-hidden"
      >
        <p className="text-xs tracking-widest mb-8 font-medium">[ 0{index + 1} ]</p>
        <h3 className="text-[clamp(1.25rem,2vw,1.5rem)] font-medium mb-4">{feature.title}</h3>
        <p className="text-brand-dark/70 mt-auto leading-relaxed mb-8">{feature.desc}</p>
        
        <div className="absolute bottom-0 left-0 w-full p-[clamp(1.5rem,3vw,2rem)] bg-brand-dark text-brand-yellow transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex flex-col justify-center h-full sm:h-auto sm:min-h-[40%]">
          <div className="text-xs font-bold uppercase tracking-wider mb-2">Impacto UX</div>
          <div className="text-sm opacity-90 leading-relaxed">{feature.impact}</div>
        </div>
      </div>
    );
  };

  return (
    <div className={cn(
      "min-h-screen font-sans bg-brand-light text-brand-dark selection:bg-brand-yellow selection:text-brand-dark",
      niche === 'gastronomy' ? 'gastronomy-theme' : niche === 'commerce' ? 'commerce-theme' : niche === 'empresarial' ? 'empresarial-theme' : 'professional-theme'
    )}>
      
      {/* Smart Navbar (Visible only in End-Client Mode) */}
      <AnimatePresence>
        {isEndClient && <Navbar />}
      </AnimatePresence>

      {/* Consultant Controls (Hidden in End-Client Mode) */}
      <AnimatePresence>
        {!isEndClient && (
          <motion.div 
            ref={controlsRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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

