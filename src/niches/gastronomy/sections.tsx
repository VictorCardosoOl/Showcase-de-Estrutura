import React from 'react';
import { ArrowRight, UtensilsCrossed, Calendar, MapPin, Clock, Star, Instagram, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import { cn } from '../../lib/utils';

export const HeroSection = ({ nicheId, currentNiche, SectionWrapper, XrayMarker }: any) => (
  <SectionWrapper id="hero" className="relative h-screen flex flex-col overflow-hidden">
    <XrayMarker id="hero" position="top-32 left-8" />
    <div className="absolute inset-0">
      <img src={`https://picsum.photos/seed/${nicheId}food/1920/1080`} className="w-full h-full object-cover" alt="Gastronomia" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
    </div>
    <div className="relative z-10 flex-grow flex flex-col justify-end max-w-7xl mx-auto px-6 w-full pb-24">
      <div className="max-w-3xl text-white">
        <div className="flex items-center gap-2 text-brand-yellow mb-6">
          {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          <span className="text-sm font-bold uppercase tracking-widest ml-2">A melhor experiência da cidade</span>
        </div>
        <h1 className="font-display text-[clamp(3rem,8vw,6rem)] font-black leading-[0.9] mb-8 uppercase italic tracking-tighter">
          {currentNiche.hero.title}
        </h1>
        <p className="font-sans text-[clamp(1.125rem,2vw,1.5rem)] mb-12 text-white/80 font-medium max-w-xl leading-relaxed">
          {currentNiche.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <SectionWrapper id="cta" className="inline-block">
            <XrayMarker id="cta" position="-top-2 -right-2" />
            <button className="bg-brand-yellow text-brand-dark px-12 py-5 rounded-full font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white transition-all shadow-2xl shadow-brand-yellow/20">
              Reservar Mesa <Calendar size={22} />
            </button>
          </SectionWrapper>
          <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white/20 transition-all">
            Ver Cardápio
          </button>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export const MenuSection = ({ SectionWrapper }: any) => (
  <SectionWrapper id="menu" className="py-32 bg-[#fffcf5]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black uppercase italic tracking-tighter text-brand-dark mb-6">Nosso Cardápio</h2>
        <p className="text-brand-dark/60 max-w-xl mx-auto font-medium">Uma seleção cuidadosa de pratos autorais que celebram a tradição com um toque de modernidade.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-16">
        {[
          { cat: 'Entradas', items: [{ n: 'Bruschetta Toscana', p: 'R$ 42', d: 'Pão artesanal, tomates cereja, manjericão e azeite trufado.' }, { n: 'Carpaccio de Filé', p: 'R$ 58', d: 'Lâminas de filé mignon, alcaparras, parmesão e rúcula.' }] },
          { cat: 'Pratos Principais', items: [{ n: 'Risoto de Cogumelos', p: 'R$ 89', d: 'Arroz arbóreo, mix de cogumelos frescos e queijo pecorino.' }, { n: 'Salmão Grelhado', p: 'R$ 115', d: 'Filé de salmão com crosta de ervas e purê de mandioquinha.' }] },
        ].map((category, i) => (
          <div key={i}>
            <h3 className="font-display text-2xl font-black uppercase italic text-brand-yellow mb-8 border-b-2 border-brand-yellow/20 pb-2">{category.cat}</h3>
            <div className="space-y-10">
              {category.items.map((item, j) => (
                <div key={j} className="group cursor-pointer">
                  <div className="flex justify-between items-end mb-2">
                    <h4 className="font-display text-xl font-bold text-brand-dark group-hover:text-brand-yellow transition-colors">{item.n}</h4>
                    <div className="flex-grow border-b border-dotted border-brand-dark/20 mx-4 mb-1"></div>
                    <span className="font-sans font-bold text-brand-dark">{item.p}</span>
                  </div>
                  <p className="font-sans text-brand-dark/50 text-sm leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20 text-center">
        <button className="inline-flex items-center gap-3 bg-brand-dark text-white px-10 py-4 rounded-full font-bold hover:bg-brand-yellow hover:text-brand-dark transition-all">
          Baixar Cardápio Completo (PDF) <ExternalLink size={18} />
        </button>
      </div>
    </div>
  </SectionWrapper>
);

export const ReservationsSection = ({ SectionWrapper }: any) => (
  <SectionWrapper id="reservations" className="py-32 bg-brand-dark text-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-brand-yellow rounded-[3rem] p-12 md:p-24 text-brand-dark flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
        <div className="flex-1 z-10">
          <h2 className="font-display text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none">Garanta sua Mesa</h2>
          <p className="font-sans text-xl font-medium mb-12 opacity-80 leading-relaxed">Evite filas e garanta o melhor lugar da casa para o seu momento especial. Reservas disponíveis para almoço e jantar.</p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-brand-dark text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform">
              <Calendar size={20} /> Reservar Online
            </button>
            <button className="bg-white text-brand-dark px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform">
              <MessageCircle size={20} /> WhatsApp
            </button>
          </div>
        </div>
        <div className="flex-1 relative z-10">
          <div className="aspect-square rounded-[2rem] overflow-hidden rotate-3 shadow-2xl">
            <img src="https://picsum.photos/seed/reserva/800/800" className="w-full h-full object-cover" alt="Reserva" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export const GallerySection = ({ SectionWrapper }: any) => (
  <SectionWrapper id="gallery" className="py-32 bg-white">
    <div className="max-w-[1920px] mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="font-display text-5xl font-black uppercase italic tracking-tighter text-brand-dark mb-6">Nossa Atmosfera</h2>
        <p className="font-sans text-brand-dark/60 max-w-xl mx-auto font-medium">Um ambiente pensado nos mínimos detalhes para proporcionar conforto e sofisticação.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className={cn(
            "relative overflow-hidden rounded-2xl cursor-pointer group",
            i === 1 || i === 6 ? "md:col-span-2 md:row-span-2" : "aspect-square"
          )}>
            <img src={`https://picsum.photos/seed/gallery-${i}/800/800`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Galeria" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-brand-yellow/0 group-hover:bg-brand-yellow/20 transition-colors"></div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export const LocationSection = ({ SectionWrapper }: any) => (
  <SectionWrapper id="location" className="py-32 bg-[#fffcf5]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="aspect-video bg-brand-dark/5 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl">
             {/* Placeholder for Map */}
             <div className="w-full h-full flex flex-col items-center justify-center bg-slate-200 text-slate-400">
               <MapPin size={48} className="mb-4" />
               <p className="font-bold uppercase tracking-widest">Mapa Interativo</p>
             </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="font-display text-5xl font-black uppercase italic tracking-tighter text-brand-dark mb-10">Onde Estamos</h2>
          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-brand-yellow rounded-2xl flex items-center justify-center text-brand-dark shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-brand-yellow mb-2">Endereço</p>
                <p className="text-xl font-bold text-brand-dark leading-tight">Rua Gastronômica, 123<br />Bairro Nobre - Cidade/UF</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-brand-yellow rounded-2xl flex items-center justify-center text-brand-dark shrink-0">
                <Clock size={28} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-brand-yellow mb-2">Horários</p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-brand-dark font-bold">
                  <p>Ter - Qui:</p><p>18h às 23h</p>
                  <p>Sex - Sáb:</p><p>12h às 00h</p>
                  <p>Dom:</p><p>12h às 17h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export const ReviewsSection = ({ SectionWrapper }: any) => (
  <SectionWrapper id="reviews" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black uppercase italic tracking-tighter text-brand-dark mb-6">Voz dos Clientes</h2>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-1 text-brand-yellow">
            {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
          </div>
          <span className="text-2xl font-black text-brand-dark">4.9/5.0</span>
        </div>
        <p className="text-brand-dark/40 mt-2 font-bold uppercase tracking-widest text-xs">Baseado em +1.200 avaliações no Google</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { n: 'Carla Dias', r: 'Melhor massa que já comi! O ambiente é incrível e o atendimento impecável.' },
          { n: 'João Pedro', r: 'Carta de vinhos espetacular. Um lugar perfeito para comemorações especiais.' },
          { n: 'Beatriz Silva', r: 'O risoto de cogumelos é de outro mundo. Voltarei com certeza muitas vezes.' },
        ].map((review, i) => (
          <div key={i} className="bg-brand-light p-10 rounded-[2rem] border border-brand-dark/5 relative">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-brand-dark font-black">"</div>
            <p className="text-brand-dark/70 italic mb-8 leading-relaxed">"{review.r}"</p>
            <p className="font-black uppercase tracking-widest text-sm text-brand-dark">{review.n}</p>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export const FooterSection = ({ SectionWrapper }: any) => (
  <footer className="bg-brand-dark text-white py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-2">
          <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-8">The Food Club<span className="text-brand-yellow">.</span></h3>
          <p className="max-w-sm opacity-60 mb-10 leading-relaxed font-medium">
            Celebrando a alta gastronomia com ingredientes locais e técnicas globais. Uma experiência sensorial completa.
          </p>
          <div className="flex gap-6">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all cursor-pointer">
              <Instagram size={20} />
            </div>
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all cursor-pointer">
              <Phone size={20} />
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-yellow mb-8">Delivery</h4>
          <ul className="space-y-4 font-bold">
            <li className="flex items-center gap-3 hover:text-brand-yellow cursor-pointer transition-colors"><ExternalLink size={16} /> iFood</li>
            <li className="flex items-center gap-3 hover:text-brand-yellow cursor-pointer transition-colors"><ExternalLink size={16} /> Rappi</li>
            <li className="flex items-center gap-3 hover:text-brand-yellow cursor-pointer transition-colors"><ExternalLink size={16} /> Pedido Direto</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-yellow mb-8">Contato</h4>
          <p className="font-bold mb-2">(11) 2222-2222</p>
          <p className="font-bold opacity-60">contato@foodclub.com.br</p>
          <p className="text-xs opacity-30 mt-8">CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] opacity-30">
        <p>© 2024 The Food Club. All rights reserved.</p>
        <p>Design & Experience by Conversion Strategy</p>
      </div>
    </div>
  </footer>
);
