import React from 'react';
import { ArrowRight, ShoppingBag, Truck, CreditCard, RefreshCw, ShieldCheck, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import { cn } from '../../lib/utils';

export const HeroSection = ({ nicheId, currentNiche, SectionWrapper, XrayMarker }: any) => (
  <SectionWrapper id="hero" className="relative bg-brand-light overflow-hidden min-h-[70vh] flex flex-col">
    <XrayMarker id="hero" position="top-32 left-8" />
    <div className="absolute inset-0">
      <img src={`https://picsum.photos/seed/${nicheId}banner/1920/1080`} className="w-full h-full object-cover" alt="Banner" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/60 to-transparent"></div>
    </div>
    <div className="relative z-10 flex-grow flex flex-col justify-center max-w-7xl mx-auto px-6 w-full">
      <div className="max-w-xl text-white">
        <span className="inline-block bg-brand-yellow text-brand-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
          Nova Coleção 2024
        </span>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] font-bold leading-tight mb-6">
          {currentNiche.hero.title}
        </h1>
        <p className="font-sans text-lg mb-10 opacity-90 max-w-md">
          {currentNiche.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <SectionWrapper id="cta" className="inline-block">
            <XrayMarker id="cta" position="-top-2 -right-2" />
            <button className="bg-brand-yellow text-brand-dark px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white transition-all shadow-xl">
              Comprar Agora <ShoppingBag size={20} />
            </button>
          </SectionWrapper>
          <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
            Ver Promoções
          </button>
        </div>
      </div>
    </div>
    <div className="relative z-10 bg-brand-dark/80 backdrop-blur-md py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 text-white/80 text-xs font-bold uppercase tracking-widest">
        <div className="flex items-center gap-2"><Truck size={16} className="text-brand-yellow" /> Frete Grátis acima de R$ 299</div>
        <div className="flex items-center gap-2"><CreditCard size={16} className="text-brand-yellow" /> 10x sem juros no cartão</div>
        <div className="flex items-center gap-2"><RefreshCw size={16} className="text-brand-yellow" /> Primeira troca grátis</div>
      </div>
    </div>
  </SectionWrapper>
);

export const CategoriesSection = ({ SectionWrapper }: any) => (
  <SectionWrapper id="categories" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 text-center">Navegue por Categorias</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { name: 'Masculino', img: 'male' },
          { name: 'Feminino', img: 'female' },
          { name: 'Acessórios', img: 'accessories' },
          { name: 'Lançamentos', img: 'new' },
        ].map((cat, i) => (
          <div key={i} className="group cursor-pointer relative aspect-square rounded-2xl overflow-hidden">
            <img src={`https://picsum.photos/seed/cat-${cat.img}/600/600`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={cat.name} referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-display text-white text-xl font-bold uppercase tracking-wider">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export const ProductShowcaseSection = ({ SectionWrapper }: any) => (
  <SectionWrapper id="products" className="py-24 bg-brand-light">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex justify-between items-end mb-12">
        <h2 className="font-display text-3xl font-bold">Vitrine de Produtos</h2>
        <button className="font-sans text-brand-dark font-bold border-b-2 border-brand-yellow hover:text-brand-yellow transition-colors">Ver todos</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((p) => (
          <div key={p} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src={`https://picsum.photos/seed/prod-${p}/600/800`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Produto" referrerPolicy="no-referrer" />
              <button className="absolute bottom-4 left-4 right-4 bg-brand-dark text-white py-3 rounded-xl font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Ver Detalhes
              </button>
            </div>
            <div className="p-6">
              <p className="font-sans text-xs text-brand-dark/40 font-bold uppercase mb-1">Marca Premium</p>
              <h3 className="font-display font-bold text-lg mb-2">Produto Exclusivo {p}</h3>
              <div className="flex items-center gap-3">
                <span className="text-brand-dark font-bold text-xl">R$ 199,90</span>
                <span className="text-brand-dark/30 line-through text-sm">R$ 259,90</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export const BestSellersSection = ({ SectionWrapper }: any) => (
  <SectionWrapper id="bestsellers" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-brand-dark rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center gap-16 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="flex-1 z-10 text-center md:text-left">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Os Mais Vendidos</h2>
          <p className="font-sans text-lg opacity-70 mb-10">Confira as peças que são tendência absoluta e garanta a sua antes que acabe o estoque.</p>
          <button className="bg-brand-yellow text-brand-dark px-12 py-4 rounded-full font-bold hover:bg-white transition-colors">
            Explorar Favoritos
          </button>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4 z-10">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl translate-y-8">
            <img src="https://picsum.photos/seed/best1/400/400" className="w-full h-full object-cover" alt="Best Seller" referrerPolicy="no-referrer" />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/seed/best2/400/400" className="w-full h-full object-cover" alt="Best Seller" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export const FAQSection = ({ SectionWrapper }: any) => (
  <SectionWrapper id="faq" className="py-24 bg-brand-light">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="font-display text-3xl font-bold mb-12 text-center">Dúvidas Frequentes</h2>
      <div className="space-y-4">
        {[
          { q: 'Qual o prazo de entrega?', a: 'O prazo varia de 3 a 10 dias úteis dependendo da sua região.' },
          { q: 'Como funciona a troca?', a: 'A primeira troca é por nossa conta! Você tem até 7 dias após o recebimento.' },
          { q: 'Quais as formas de pagamento?', a: 'Aceitamos PIX com 5% de desconto, cartões de crédito em até 10x e boleto.' },
        ].map((item, i) => (
          <details key={i} className="bg-white rounded-2xl p-6 cursor-pointer group border border-brand-dark/5">
            <summary className="font-bold text-lg list-none flex justify-between items-center">
              {item.q}
              <span className="text-brand-yellow group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-brand-dark/60 leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </SectionWrapper>
);

export const NewsletterSection = ({ SectionWrapper }: any) => (
  <SectionWrapper id="newsletter" className="py-24 bg-brand-yellow">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4 text-brand-dark">Ganhe 10% OFF na primeira compra</h2>
      <p className="text-brand-dark/70 mb-10 max-w-xl mx-auto font-medium">Cadastre seu e-mail e receba um cupom exclusivo, além de novidades e promoções em primeira mão.</p>
      <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
        <input type="email" placeholder="Seu melhor e-mail" className="flex-grow px-8 py-5 rounded-full bg-white border-none focus:ring-2 focus:ring-brand-dark outline-none" />
        <button className="bg-brand-dark text-brand-yellow px-12 py-5 rounded-full font-bold hover:bg-brand-dark/90 transition-all">
          Quero meu Cupom
        </button>
      </form>
    </div>
  </SectionWrapper>
);

export const FooterSection = ({ SectionWrapper }: any) => (
  <footer className="bg-white py-20 border-t border-brand-dark/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-bold mb-6">Brand Store<span className="text-brand-yellow">.</span></h3>
          <p className="text-brand-dark/50 mb-8">Sua curadoria de moda e estilo com a qualidade que você merece.</p>
          <div className="flex gap-4">
            <Instagram className="text-brand-dark/40 hover:text-brand-dark cursor-pointer transition-colors" />
            <Facebook className="text-brand-dark/40 hover:text-brand-dark cursor-pointer transition-colors" />
            <Youtube className="text-brand-dark/40 hover:text-brand-dark cursor-pointer transition-colors" />
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest">Institucional</h4>
          <ul className="space-y-4 text-brand-dark/60 text-sm">
            <li className="hover:text-brand-dark cursor-pointer">Sobre Nós</li>
            <li className="hover:text-brand-dark cursor-pointer">Trabalhe Conosco</li>
            <li className="hover:text-brand-dark cursor-pointer">Políticas de Privacidade</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest">Ajuda</h4>
          <ul className="space-y-4 text-brand-dark/60 text-sm">
            <li className="hover:text-brand-dark cursor-pointer">Trocas e Devoluções</li>
            <li className="hover:text-brand-dark cursor-pointer">Prazos de Entrega</li>
            <li className="hover:text-brand-dark cursor-pointer">Fale Conosco</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest">Pagamento e Segurança</h4>
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="w-10 h-6 bg-brand-light rounded border border-brand-dark/5"></div>
            <div className="w-10 h-6 bg-brand-light rounded border border-brand-dark/5"></div>
            <div className="w-10 h-6 bg-brand-light rounded border border-brand-dark/5"></div>
          </div>
          <div className="flex items-center gap-2 text-brand-dark/40">
            <ShieldCheck size={20} />
            <span className="text-xs font-bold uppercase">Site Seguro</span>
          </div>
        </div>
      </div>
      <div className="pt-8 border-t border-brand-dark/5 text-center text-brand-dark/30 text-xs">
        <p>© 2024 Brand Store. Todos os direitos reservados. CNPJ: 00.000.000/0001-00</p>
      </div>
    </div>
  </footer>
);
