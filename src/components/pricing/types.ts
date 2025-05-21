
export interface Feature {
  name: string;
  starter: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

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
