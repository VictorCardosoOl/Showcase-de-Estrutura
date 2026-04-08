import { LucideIcon } from 'lucide-react';

export type NicheId = 'professional' | 'gastronomy' | 'commerce' | 'empresarial';
export type Mode = 'xray' | 'roi' | 'hero' | 'end-client';

export interface NicheData {
  name: string;
  icon: LucideIcon;
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    title: string;
    desc: string;
    impact: string;
  }[];
  roi: {
    visitors: number;
    conversionRate: number;
    ticket: number;
  };
}

export interface XrayDataPoint {
  title: string;
  desc: string;
  conversionImpact: string;
}

export type XrayDataMap = Record<string, XrayDataPoint>;
