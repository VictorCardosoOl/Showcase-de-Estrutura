import React from 'react';
import { ArrowRight, Phone, Mail, MessageCircle, BookOpen, Award, CheckCircle2, Instagram, Linkedin, Twitter } from 'lucide-react';
import { cn } from '../../lib/utils';

export const HeroSection = ({ nicheId, currentNiche, SectionWrapper, XrayMarker }: any) => (
  <SectionWrapper id="hero" className="relative bg-brand-dark text-brand-yellow overflow-hidden min-h-[80vh] flex flex-col">
    <XrayMarker id="hero" position="top-32 left-8" />
    <div className="absolute inset-0 opacity-30">
      <img src={`https://picsum.photos/seed/${nicheId}hero/1920/1080`} className="w-full h-full object-cover" alt="Especialista" referrerPolicy="no-referrer" />
    </div>
    <div className="relative z-10 flex-grow flex flex-col justify-center max-w-7xl mx-auto px-6 w-full py-20">
      <div className="max-w-2xl">
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight mb-6">
          {currentNiche.hero.title}
        </h1>
        <p className="text-[clamp(1.125rem,2vw,1.5rem)] mb-10 opacity-90 font-medium max-w-xl">
          {currentNiche.hero.subtitle}
        </p>
        <SectionWrapper id="cta" className="inline-block w-full sm:w-auto">
          <XrayMarker id="cta" position="-top-2 -right-2" />
          <button className="w-full sm:w-auto bg-brand-yellow text-brand-dark px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl group">
            Agendar Consulta <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </SectionWrapper>
      </div>
    </div>
  </SectionWrapper>
);

export const BioSection = ({ SectionWrapper }: any) => (
  <SectionWrapper id="bio" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
          <img src="https://picsum.photos/seed/professional-bio/800/1000" className="w-full h-full object-cover" alt="Bio" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-brand-yellow p-8 rounded-2xl shadow-xl hidden lg:block">
          <p className="text-brand-dark font-bold text-4xl">15+</p>
          <p className="text-brand-dark/70 text-sm font-medium">Anos de Experiência</p>
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-bold mb-8 text-brand-dark">Trajetória e Diferencial Humano</h2>
        <p className="text-lg text-brand-dark/70 mb-6 leading-relaxed">
          Com formação nas mais renomadas instituições, minha jornada é pautada pela busca incessante da excelência técnica aliada a um atendimento profundamente humanizado.
        </p>
        <p className="text-lg text-brand-dark/70 mb-8 leading-relaxed">
          Acredito que cada caso é único e exige uma abordagem personalizada, onde a escuta ativa e a empatia são tão fundamentais quanto o conhecimento técnico.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <Award className="text-brand-yellow mt-1 shrink-0" size={24} />
            <div>
              <p className="font-bold">Formação</p>
              <p className="text-sm text-brand-dark/60">Doutorado pela USP</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="text-brand-yellow mt-1 shrink-0" size={24} />
            <div>
              <p className="font-bold">Especialidade</p>
              <p className="text-sm text-brand-dark/60">Reconhecido pelo Conselho</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export const ServicesSection = ({ SectionWrapper }: any) => (
  <SectionWrapper id="services" className="py-24 bg-brand-light">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Áreas de Atuação</h2>
        <p className="text-brand-dark/60 max-w-2xl mx-auto">Soluções jurídicas e consultivas com foco em resultados e segurança para você ou sua empresa.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: 'Direito Civil', desc: 'Consultoria completa em contratos, responsabilidade civil e direitos reais.' },
          { title: 'Direito de Família', desc: 'Atendimento humanizado para divórcios, guardas e sucessões.' },
          { title: 'Direito Digital', desc: 'Proteção de dados, conformidade LGPD e crimes cibernéticos.' },
          { title: 'Consultoria Preventiva', desc: 'Análise de riscos para evitar litígios futuros.' },
          { title: 'Mediação de Conflitos', desc: 'Resolução extrajudicial de disputas com agilidade.' },
          { title: 'Compliance', desc: 'Implementação de normas e condutas éticas corporativas.' },
        ].map((service, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-dark/5 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand-yellow/20 rounded-xl flex items-center justify-center mb-6 text-brand-dark">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-brand-dark/60 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export const TestimonialsSection = ({ SectionWrapper }: any) => (
  <SectionWrapper id="testimonials" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-16 text-center">O que dizem os Clientes</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: 'Ricardo Silva', role: 'Empresário', text: 'Um profissional extremamente técnico e atencioso. Resolveu meu caso com uma agilidade impressionante.' },
          { name: 'Ana Paula', role: 'Arquiteta', text: 'A segurança que ele transmite é fundamental. Me senti amparada em todas as etapas do processo.' },
          { name: 'Marcos Oliveira', role: 'Diretor de TI', text: 'Excelente domínio sobre direito digital. Foi essencial para a adequação da nossa empresa.' },
        ].map((t, i) => (
          <div key={i} className="p-8 rounded-2xl bg-brand-light border border-brand-dark/5">
            <div className="flex gap-1 mb-4 text-brand-yellow">
              {[...Array(5)].map((_, j) => <Award key={j} size={16} fill="currentColor" />)}
            </div>
            <p className="text-brand-dark/70 mb-6 italic">"{t.text}"</p>
            <div>
              <p className="font-bold">{t.name}</p>
              <p className="text-sm text-brand-dark/50">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export const BlogSection = ({ SectionWrapper }: any) => (
  <SectionWrapper id="blog" className="py-24 bg-brand-light">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-bold mb-4">Artigos e Insights</h2>
          <p className="text-brand-dark/60">Conhecimento técnico compartilhado para sua atualização.</p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-brand-dark font-bold hover:text-brand-yellow transition-colors">
          Ver todos <ArrowRight size={20} />
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: 'As mudanças na LGPD para 2024', date: '15 Mar, 2024', category: 'Digital' },
          { title: 'Planejamento Sucessório: Por onde começar?', date: '10 Mar, 2024', category: 'Família' },
          { title: 'Contratos Inteligentes no Mercado Imobiliário', date: '05 Mar, 2024', category: 'Contratos' },
        ].map((post, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-video rounded-2xl overflow-hidden mb-6">
              <img src={`https://picsum.photos/seed/blog-${i}/600/400`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Blog" referrerPolicy="no-referrer" />
            </div>
            <p className="text-xs font-bold text-brand-yellow uppercase mb-2">{post.category}</p>
            <h3 className="text-xl font-bold mb-3 group-hover:text-brand-yellow transition-colors">{post.title}</h3>
            <p className="text-sm text-brand-dark/50">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export const ContactSection = ({ SectionWrapper }: any) => (
  <SectionWrapper id="contact" className="py-24 bg-brand-dark text-brand-yellow">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-white/5 rounded-3xl p-12 border border-white/10">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">Vamos conversar sobre o seu caso?</h2>
            <p className="text-lg opacity-70 mb-10">
              Estou à disposição para entender sua necessidade e propor a melhor estratégia jurídica ou consultiva.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm opacity-50">Telefone</p>
                  <p className="font-bold">(11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm opacity-50">E-mail</p>
                  <p className="font-bold">contato@especialista.com.br</p>
                </div>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Seu Nome" className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-yellow transition-colors" />
            <input type="email" placeholder="Seu E-mail" className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-yellow transition-colors" />
            <textarea placeholder="Como posso ajudar?" rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-yellow transition-colors"></textarea>
            <button className="w-full bg-brand-yellow text-brand-dark font-bold py-4 rounded-xl hover:bg-white transition-colors">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export const FooterSection = ({ SectionWrapper }: any) => (
  <footer className="bg-brand-dark text-white py-20 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <h3 className="text-2xl font-bold mb-6">Dr. Especialista<span className="text-brand-yellow">.</span></h3>
          <p className="opacity-50 max-w-sm mb-8">
            Comprometido com a ética e a excelência na prestação de serviços jurídicos e consultivos de alta complexidade.
          </p>
          <div className="flex gap-4">
            <Instagram className="cursor-pointer hover:text-brand-yellow transition-colors" />
            <Linkedin className="cursor-pointer hover:text-brand-yellow transition-colors" />
            <Twitter className="cursor-pointer hover:text-brand-yellow transition-colors" />
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-brand-yellow">Links Rápidos</h4>
          <ul className="space-y-4 opacity-70">
            <li className="hover:text-brand-yellow cursor-pointer transition-colors">Sobre</li>
            <li className="hover:text-brand-yellow cursor-pointer transition-colors">Serviços</li>
            <li className="hover:text-brand-yellow cursor-pointer transition-colors">Blog</li>
            <li className="hover:text-brand-yellow cursor-pointer transition-colors">Contato</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-brand-yellow">Legal</h4>
          <p className="text-sm opacity-50 mb-2">OAB/SP 000.000</p>
          <p className="text-sm opacity-50">CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 opacity-30 text-xs">
        <p>© 2024 Dr. Especialista. Todos os direitos reservados.</p>
        <p>Desenvolvido com foco em Conversão Estratégica.</p>
      </div>
    </div>
  </footer>
);
