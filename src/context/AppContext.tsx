import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Mode, NicheId } from '../types';

interface AppContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  niche: NicheId;
  setNiche: (niche: NicheId) => void;
  activeXray: string | null;
  setActiveXray: (id: string | null) => void;
  heroTitle: string;
  setHeroTitle: (title: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>('hero');
  const [niche, setNiche] = useState<NicheId>('professional');
  const [activeXray, setActiveXray] = useState<string | null>(null);
  const [heroTitle, setHeroTitle] = useState<string>(''); // Will be initialized by the layout

  return (
    <AppContext.Provider value={{
      mode, setMode,
      niche, setNiche,
      activeXray, setActiveXray,
      heroTitle, setHeroTitle
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
