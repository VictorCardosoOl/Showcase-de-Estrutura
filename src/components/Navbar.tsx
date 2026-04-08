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
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        "bg-brand-light/85 backdrop-blur-xl border-b border-brand-dark/5 shadow-sm"
      )}
    >
      <div className="max-w-[1920px] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-display font-bold text-3xl tracking-tight text-brand-dark">
              Brand<span className="text-brand-yellow">.</span>
            </span>
          </div>

          {/* Links de Navegação (Desktop) */}
          <nav className="hidden md:flex space-x-10">
            {['Home', 'Soluções', 'Metodologia', 'Casos'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-brand-dark/70 hover:text-brand-dark px-2 py-2 text-[15px] font-medium transition-colors relative group font-sans tracking-wide"
              >
                {item}
                {/* Efeito de hover (underline animado) */}
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-brand-yellow transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* CTA / Ações */}
          <div className="flex items-center space-x-6">
            <button className="hidden md:inline-flex text-brand-dark/70 hover:text-brand-dark font-medium text-[15px] transition-colors font-sans tracking-wide">
              Login
            </button>
            <button className="bg-brand-dark text-brand-yellow px-7 py-3 rounded-full text-[15px] font-medium hover:bg-brand-dark/90 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-sans tracking-wide">
              Começar Agora
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
