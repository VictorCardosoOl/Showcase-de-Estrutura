import React from 'react';
import { cn } from '../lib/utils';
import { useAppContext } from '../context/AppContext';
import { xrayData } from '../data/xrayData';

export const SectionWrapper = ({ children, id, htmlId, className }: { children: React.ReactNode, id: keyof typeof xrayData | 'none', htmlId?: string, className?: string }) => {
  const { mode } = useAppContext();
  
  return (
    <div id={htmlId} className={cn(
      "relative transition-all duration-500 w-full",
      mode === 'xray' && id !== 'none' ? "outline outline-2 outline-dashed outline-brand-yellow/50 outline-offset-[-2px] bg-brand-yellow/5" : "",
      className
    )}>
      {children}
    </div>
  );
};
