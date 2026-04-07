import React, { useState, useEffect, useRef } from 'react';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { cn } from '../lib/utils';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function Navbar() {
  const { scrollDirection, isAtTop } = useScrollDirection();
  const [isHoveringTop, setIsHoveringTop] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Se o mouse estiver nos primeiros 120px da tela, considera hover no topo
      if (e.clientY < 120) {
        setIsHoveringTop(true);
      } else {
        setIsHoveringTop(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const isVisible = isAtTop || scrollDirection === 'up' || isHoveringTop;

  useGSAP(() => {
    gsap.to(navRef.current, {
      yPercent: isVisible ? 0 : -100,
      duration: 0.4,
      ease: "power3.out",
      overwrite: true
    });
  }, [isVisible]);

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 w-full z-50",
        "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
      )}
    >
      <div className="max-w-[1920px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-bold text-2xl tracking-tight text-gray-900">
              Brand<span className="text-blue-600">.</span>
            </span>
          </div>

          {/* Links de Navegação (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Soluções', 'Metodologia', 'Casos'].map((item) => (
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
