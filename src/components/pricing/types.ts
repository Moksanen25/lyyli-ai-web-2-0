
export interface PricingTier {
  name: string;
  monthly: number | null;
  description: string;
  primaryFeatures: string[];
  secondaryFeatures?: string[];
  cta: string;
  accent: boolean;
  icon: React.ReactNode;
}

export interface Feature {
  name: string;
  free: boolean | string;
  starter: boolean | string;
  growth: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}
