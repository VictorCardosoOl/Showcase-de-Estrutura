// 📁 Mapeamento de Estrutura do Projeto
//
// /
// ├── .env.example               // Exemplo de variáveis de ambiente
// ├── .gitignore                 // Arquivos e pastas ignorados pelo Git
// ├── index.html                 // Ponto de entrada HTML da aplicação
// ├── metadata.json              // Metadados do projeto (nome, descrição, permissões)
// ├── package.json               // Dependências e scripts do Node.js
// ├── tsconfig.json              // Configurações do compilador TypeScript
// ├── vite.config.ts             // Configurações do bundler Vite
// └── src/                       // Código-fonte principal da aplicação
//     ├── App.tsx                // Componente raiz da aplicação React
//     ├── index.css              // Estilos globais e variáveis de tema do Tailwind
//     ├── main.tsx               // Ponto de entrada do React (montagem no DOM)
//     ├── components/            // Componentes reutilizáveis da interface
//     │   ├── sections.tsx       // Componentes de seções (Hero, About, Features, etc.)
//     │   └── SortableSection.tsx // Componente wrapper para funcionalidade de arrastar e soltar
//     ├── lib/                   // Bibliotecas e funções utilitárias
//     │   └── utils.ts           // Funções auxiliares (ex: concatenação de classes Tailwind)
//     └── niches/                // Módulos específicos para cada nicho de mercado
//         ├── professional/      // Layout e configuração do nicho Profissional
//         │   └── index.tsx      // Ponto de entrada do nicho Profissional
//         ├── gastronomy/        // Layout e configuração do nicho Gastronomia
//         │   └── index.tsx      // Ponto de entrada do nicho Gastronomia
//         └── commerce/          // Layout e configuração do nicho Comércio
//             └── index.tsx      // Ponto de entrada do nicho Comércio
//
// 🏗️ Arquitetura
// - /src/components: contém os blocos de construção visuais da interface, separados em seções lógicas e componentes interativos (como o drag-and-drop).
// - /src/niches: isola a lógica, a ordem das seções e o layout específico de cada nicho de cliente, permitindo personalização independente.
// - /src/lib: centraliza funções utilitárias para manter o código dos componentes limpo.
//
// 🚀 Ponto de Entrada
// src/main.tsx é responsável por iniciar a aplicação React e montá-la no index.html.
// src/App.tsx gerencia o estado global e o roteamento entre os diferentes nichos.
//
// ⚙️ Configurações
// vite.config.ts armazena parâmetros do servidor de desenvolvimento e build.
// package.json gerencia as dependências do projeto (React, Tailwind, dnd-kit, etc).
// tsconfig.json define as regras de tipagem do TypeScript.
