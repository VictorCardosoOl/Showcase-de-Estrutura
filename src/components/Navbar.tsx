import React from 'react';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { cn } from '../lib/utils';

export function Navbar() {
  const { scrollDirection, isAtTop } = useScrollDirection();

  return (
    <header
      className={cn(
        // Classes base da Navbar
        "fixed top-0 left-0 w-full z-50",
        "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm",
        // Animação suave
        "transition-transform duration-300 ease-in-out",
        // Lógica de visibilidade:
        // Se estiver rolando para baixo E não estiver no topo -> esconde (translada -100%)
        // Caso contrário -> mostra (translada 0)
        scrollDirection === 'down' && !isAtTop 
          ? "-translate-y-full" 
          : "translate-y-0"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-bold text-2xl tracking-tight text-gray-900">
              Brand<span className="text-blue-600">.</span>
            </span>
          </div>

          {/* Links de Navegação (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Soluções', 'Metodologia', 'Cases'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors relative group"
              >
                {item}
                {/* Efeito de hover (underline animado) */}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* CTA / Ações */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:inline-flex text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
              Login
            </button>
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              Começar Agora
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
