
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@/test/utils/test-utils';
import PricingCard from '../PricingCard';

// Mock the useLanguage hook
vi.mock('@/hooks/useLanguage', () => ({
  useLanguage: () => ({
    t: (key: string) => key,
    language: 'en'
  })
}));

// Mock other hooks used by PricingCard
vi.mock('@/hooks/use-pro-plan', () => ({
  useProPlan: () => ({ isProPlan: false })
}));

vi.mock('@/hooks/use-enterprise-plan', () => ({
  useEnterprisePlan: () => ({ isEnterprisePlan: false })
}));

vi.mock('@/hooks/use-free-plan', () => ({
  useFreePlan: () => ({ isFreePlan: true })
}));

vi.mock('@/hooks/use-analytics', () => ({
  useAnalytics: () => ({ track: vi.fn() })
}));

describe('PricingCard Component', () => {
  const mockProps = {
    name: 'Professional',
    monthly: 599,
    description: 'Perfect for growing businesses',
    primaryFeatures: ['Feature 1', 'Feature 2'],
    cta: 'Get Started',
    accent: true,
    icon: <div>Icon</div>,
    billingPeriod: 'monthly' as const,
    yearlyDiscountRate: 0.8
  };

  it('renders pricing card with correct information', () => {
    render(<PricingCard {...mockProps} />);
    
    expect(screen.getByText('Professional')).toBeInTheDocument();
    expect(screen.getByText('Perfect for growing businesses')).toBeInTheDocument();
    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 2')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('displays monthly pricing correctly', () => {
    render(<PricingCard {...mockProps} />);
    
    expect(screen.getByText('599 €')).toBeInTheDocument();
  });

  it('applies accent styling when accent prop is true', () => {
    render(<PricingCard {...mockProps} />);
    
    const card = document.querySelector('.bg-primary');
    expect(card).toBeInTheDocument();
  });

  it('handles custom pricing display', () => {
    const customProps = {
      ...mockProps,
      monthly: null
    };
    
    render(<PricingCard {...customProps} />);
    
    expect(screen.getByText('pricing.custom')).toBeInTheDocument();
  });
});
