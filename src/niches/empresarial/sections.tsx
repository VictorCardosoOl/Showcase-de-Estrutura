import React from 'react';
import { ArrowRight, CheckCircle, Users, BarChart3, Shield, Globe, Mail, Phone, MapPin, Linkedin, Instagram, Settings } from 'lucide-react';
import { cn } from '../../lib/utils';

export const HeroSection = ({ nicheId, currentNiche, SectionWrapper, XrayMarker }: any) => (
  <SectionWrapper id="hero" className="relative bg-[#0f172a] text-white overflow-hidden min-h-[90vh] flex flex-col">
    <XrayMarker id="hero" position="top-32 left-8" />
    <div className="absolute inset-0 opacity-20">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent"></div>
      <img src={`https://picsum.photos/seed/${nicheId}corp/1920/1080`} className="w-full h-full object-cover" alt="Empresa" referrerPolicy="no-referrer" />
    </div>
    <div className="relative z-10 flex-grow flex flex-col justify-center max-w-7xl mx-auto px-6 w-full py-20">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-400 text-sm font-bold mb-8">
          <Globe size={16} /> Soluções Globais para Negócios Locais
        </div>
        <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.1] mb-8 tracking-tight">
          {currentNiche.hero.title}
        </h1>
        <p className="text-[clamp(1.125rem,2vw,1.5rem)] mb-12 text-slate-400 leading-relaxed max-w-2xl">
          {currentNiche.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <SectionWrapper id="cta" className="inline-block">
            <XrayMarker id="cta" position="-top-2 -right-2" />
            <button className="bg-blue-600 text-white px-12 py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
              Solicitar Orçamento <ArrowRight size={22} />
            </button>
          </SectionWrapper>
          <div className="flex items-center gap-4 text-slate-400">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0f172a] overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium">+500 empresas atendidas</p>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export const ServicesSection = ({ SectionWrapper }: any) => (
  <SectionWrapper id="services" className="py-32 bg-slate-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-end mb-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Nossas Soluções Corporativas</h2>
          <p className="text-lg text-slate-600 leading-relaxed">Desenvolvemos estratégias robustas para otimizar seus processos e maximizar a rentabilidade do seu negócio.</p>
        </div>
        <div className="flex lg:justify-end">
          <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 flex items-center gap-6 border border-slate-100">
            <div className="text-4xl font-bold text-blue-600">98%</div>
            <div className="text-sm text-slate-500 font-medium leading-tight">Taxa de satisfação e<br />retenção de clientes</div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: 'Consultoria Estratégica', desc: 'Análise profunda de mercado e posicionamento competitivo.', icon: BarChart3 },
          { title: 'Otimização de Processos', desc: 'Redução de custos operacionais e aumento de produtividade.', icon: Settings },
          { title: 'Segurança da Informação', desc: 'Proteção de dados críticos e conformidade com a LGPD.', icon: Shield },
        ].map((s, i) => (
          <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <s.icon size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
            <p className="text-slate-600 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export const MethodologySection = ({ SectionWrapper }: any) => (
  <SectionWrapper id="methodology" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Como Trabalhamos</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Um processo estruturado para garantir previsibilidade e resultados consistentes em cada projeto.</p>
      </div>
      <div className="grid md:grid-cols-4 gap-12 relative">
        <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-slate-100 z-0"></div>
        {[
          { step: '01', title: 'Diagnóstico', desc: 'Entendimento profundo dos desafios e objetivos.' },
          { step: '02', title: 'Estratégia', desc: 'Desenvolvimento do plano de ação personalizado.' },
          { step: '03', title: 'Execução', desc: 'Implementação ágil com foco em marcos reais.' },
          { step: '04', title: 'Monitoramento', desc: 'Análise de KPIs e melhoria contínua dos resultados.' },
        ].map((m, i) => (
          <div key={i} className="relative z-10 text-center md:text-left">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-8 mx-auto md:mx-0 shadow-lg shadow-blue-600/30">
              {m.step}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">{m.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export const PortfolioSection = ({ SectionWrapper }: any) => (
  <SectionWrapper id="portfolio" className="py-32 bg-slate-900 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <h2 className="text-4xl font-bold mb-6">Cases de Sucesso</h2>
          <p className="text-slate-400 max-w-xl">Resultados reais entregues para empresas que buscam excelência e inovação constante.</p>
        </div>
        <div className="flex gap-12 opacity-50">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="text-2xl font-black italic tracking-tighter">LOGO {i}</div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: 'Transformação Digital: TechCorp', result: '+150% em eficiência operacional', img: 'corp1' },
          { title: 'Expansão de Mercado: GlobalLog', result: 'Redução de 30% nos custos logísticos', img: 'corp2' },
        ].map((c, i) => (
          <div key={i} className="group relative aspect-video rounded-[2rem] overflow-hidden cursor-pointer">
            <img src={`https://picsum.photos/seed/${c.img}/1200/800`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Case" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
              <p className="text-blue-400 font-bold">{c.result}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export const TeamSection = ({ SectionWrapper }: any) => (
  <SectionWrapper id="team" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Nossa Liderança</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Um time multidisciplinar focado em transformar a realidade do seu negócio através da expertise e inovação.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { name: 'Carlos Mendes', role: 'CEO & Founder', img: 'ceo' },
          { name: 'Elena Rocha', role: 'COO', img: 'coo' },
          { name: 'André Santos', role: 'CTO', img: 'cto' },
          { name: 'Julia Lima', role: 'Head of Strategy', img: 'strategy' },
        ].map((t, i) => (
          <div key={i} className="text-center group">
            <div className="aspect-square rounded-3xl overflow-hidden mb-6 shadow-xl shadow-slate-200 group-hover:-translate-y-2 transition-transform duration-500">
              <img src={`https://i.pravatar.cc/400?u=${t.img}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={t.name} referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">{t.name}</h3>
            <p className="text-slate-500 text-sm font-medium">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export const QuoteSection = ({ SectionWrapper }: any) => (
  <SectionWrapper id="quote" className="py-32 bg-blue-600 text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Pronto para elevar o nível da sua empresa?</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">Solicite um diagnóstico inicial sem compromisso e descubra como nossas soluções podem impulsionar seus resultados.</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><CheckCircle size={24} /></div>
              <p className="font-medium">Análise detalhada de processos</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center"><CheckCircle size={24} /></div>
              <p className="font-medium">Proposta de valor personalizada</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[2.5rem] p-10 text-slate-900 shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Nome</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Empresa</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">E-mail Corporativo</label>
              <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Desafio Principal</label>
              <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 transition-colors">
                <option>Otimização de Custos</option>
                <option>Transformação Digital</option>
                <option>Segurança de Dados</option>
                <option>Outros</option>
              </select>
            </div>
            <button className="w-full bg-blue-600 text-white font-bold py-5 rounded-xl hover:bg-slate-900 transition-all shadow-xl shadow-blue-600/20">
              Enviar Solicitação
            </button>
          </form>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export const FooterSection = ({ SectionWrapper }: any) => (
  <footer className="bg-slate-950 text-slate-400 py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-2">
          <h3 className="text-2xl font-bold text-white mb-8">Empresarial Solutions<span className="text-blue-600">.</span></h3>
          <p className="max-w-md mb-10 leading-relaxed">
            Parceiro estratégico para empresas que buscam eficiência, segurança e escala através de soluções inteligentes e processos validados.
          </p>
          <div className="flex gap-6">
            <Linkedin className="hover:text-blue-600 cursor-pointer transition-colors" />
            <Instagram className="hover:text-blue-600 cursor-pointer transition-colors" />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-8 uppercase text-xs tracking-[0.2em]">Contato</h4>
          <ul className="space-y-6 text-sm">
            <li className="flex items-start gap-4"><MapPin size={18} className="text-blue-600 shrink-0" /> Av. Paulista, 1000 - São Paulo/SP</li>
            <li className="flex items-center gap-4"><Phone size={18} className="text-blue-600 shrink-0" /> (11) 3333-3333</li>
            <li className="flex items-center gap-4"><Mail size={18} className="text-blue-600 shrink-0" /> corp@empresarial.com</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-8 uppercase text-xs tracking-[0.2em]">Legal</h4>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-white cursor-pointer transition-colors">Políticas de Privacidade</li>
            <li className="hover:text-white cursor-pointer transition-colors">Termos de Uso</li>
            <li className="hover:text-white cursor-pointer transition-colors">Conformidade LGPD</li>
            <li className="text-xs opacity-50 pt-4">CNPJ: 00.000.000/0001-00</li>
          </ul>
        </div>
      </div>
      <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium">
        <p>© 2024 Empresarial Solutions. Todos os direitos reservados.</p>
        <p className="uppercase tracking-widest text-slate-600">Excelência em Resultados Corporativos</p>
      </div>
    </div>
  </footer>
);
