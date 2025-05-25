
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

describe('PricingCard Component', () => {
  const mockTier = {
    name: 'Professional',
    monthly: 599,
    description: 'Perfect for growing businesses',
    primaryFeatures: ['Feature 1', 'Feature 2'],
    cta: 'Get Started',
    accent: true,
    icon: <div>Icon</div>
  };

  it('renders pricing card with correct information', () => {
    render(<PricingCard tier={mockTier} billingPeriod="monthly" />);
    
    expect(screen.getByText('Professional')).toBeInTheDocument();
    expect(screen.getByText('Perfect for growing businesses')).toBeInTheDocument();
    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 2')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('displays monthly pricing correctly', () => {
    render(<PricingCard tier={mockTier} billingPeriod="monthly" />);
    
    expect(screen.getByText('599')).toBeInTheDocument();
    expect(screen.getByText('/month')).toBeInTheDocument();
  });

  it('applies accent styling when accent prop is true', () => {
    render(<PricingCard tier={mockTier} billingPeriod="monthly" />);
    
    const card = screen.getByTestId('pricing-card') || screen.getByRole('article');
    expect(card).toHaveClass('border-primary');
  });

  it('handles custom pricing display', () => {
    const customTier = {
      ...mockTier,
      monthly: null
    };
    
    render(<PricingCard tier={customTier} billingPeriod="monthly" />);
    
    expect(screen.getByText('pricing.custom')).toBeInTheDocument();
  });
});
