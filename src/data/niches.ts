import { Briefcase, Utensils, Store, Building2 } from 'lucide-react';
import { NicheData, NicheId } from '../types';

export const niches: Record<NicheId, NicheData> = {
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
