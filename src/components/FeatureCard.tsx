import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const FeatureCard = ({ feature, index }: { feature: any, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

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
