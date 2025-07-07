# Development Guide - Lyyli.ai

## Overview

Lyyli.ai is a modern AI-powered communication platform built with React, TypeScript, and Supabase. This guide provides comprehensive instructions for developers working on the project.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development Workflow](#development-workflow)
- [Architecture](#architecture)
- [SEO & Performance](#seo--performance)
- [Mobile Optimization](#mobile-optimization)
- [Internationalization](#internationalization)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd lyyli-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## Project Structure

```
├── docs/                   # Project documentation
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Base UI components (shadcn/ui)
│   │   ├── pricing/       # Pricing-related components
│   │   ├── features/      # Feature-related components
│   │   ├── security/      # Security page components
│   │   ├── blog/          # Blog-related components
│   │   └── chat/          # Chat functionality
│   ├── pages/             # Route components
│   ├── hooks/             # Custom React hooks
│   ├── translations/      # i18n translation files
│   ├── utils/             # Utility functions
│   ├── contexts/          # React contexts
│   ├── integrations/      # External service integrations
│   └── services/          # API services
├── supabase/
│   └── functions/         # Supabase Edge Functions
└── public/                # Static assets
```

## Development Workflow

### Component Development

1. **Create Components in Appropriate Directories**
   - UI components: `src/components/ui/`
   - Feature-specific: `src/components/[feature]/`
   - Page components: `src/pages/`

2. **Follow TypeScript Best Practices**
   ```typescript
   interface ComponentProps {
     title: string;
     optional?: boolean;
   }

   const Component: React.FC<ComponentProps> = ({ title, optional = false }) => {
     return <div>{title}</div>;
   };

   export default Component;
   ```

3. **Use Design System**
   - Always use semantic tokens from `index.css`
   - Leverage Tailwind configuration
   - Follow established component patterns

### Mobile-First Development

Always develop with mobile-first approach:
- Use responsive design classes
- Test on multiple screen sizes
- Ensure touch targets are 44px minimum
- Use proper viewport meta tags

## Architecture

### Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Routing**: React Router DOM
- **Backend**: Supabase (Database, Auth, Edge Functions)
- **AI**: OpenAI API integration
- **i18n**: Custom translation system
- **Testing**: Vitest, React Testing Library

### State Management

- React hooks for local state
- Context API for global state
- Custom hooks for complex logic

### API Integration

All API calls go through Supabase Edge Functions:
```typescript
import { supabase } from '@/integrations/supabase/client';

const response = await supabase.functions.invoke('function-name', {
  body: { data }
});
```

## SEO & Performance

### Meta Tags Implementation

All pages must include comprehensive meta tags:

```tsx
import { Helmet } from 'react-helmet';

<Helmet>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={pageDescription} />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
  <link rel="canonical" href={canonicalUrl} />
</Helmet>
```

### Performance Optimization

- Code splitting by routes
- Lazy loading of components
- Image optimization
- Bundle analysis

## Mobile Optimization

### Responsive Design Guidelines

1. **Breakpoints**
   - Mobile: < 768px
   - Tablet: 768px - 1024px
   - Desktop: > 1024px

2. **Touch Targets**
   - Minimum 44px for interactive elements
   - Adequate spacing between clickable areas

3. **Typography**
   - Use responsive text sizes
   - Ensure readability on small screens

4. **Forms**
   - Font-size: 16px to prevent iOS zoom
   - Full-width inputs on mobile
   - Clear labels and error states

### Mobile-Specific Classes

```css
/* Mobile optimizations in index.css */
@media (max-width: 768px) {
  .mobile-section-padding {
    @apply py-8 md:py-12 lg:py-24;
  }
  
  .mobile-card {
    @apply p-4 md:p-6 w-full;
  }
}
```

## Internationalization

### Adding New Languages

1. Create language files in `src/translations/[lang]/`
2. Update `src/translations/index.ts`
3. Add routing support in `App.tsx`

### Translation Usage

```typescript
import { useLanguage } from '@/hooks/useLanguage';

const Component = () => {
  const { t, language } = useLanguage();
  
  return <h1>{t('key.path')}</h1>;
};
```

### Safe Translation Utility

Use `useSafeTranslation` for robust translation handling:

```typescript
import { useSafeTranslation } from '@/utils/safeTranslation';

const { safeT } = useSafeTranslation();
const text = safeT('key', { fallback: 'Default text' });
```

## Testing

### Running Tests

```bash
npm run test
npm run test:watch  # Watch mode
```

### Writing Tests

```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Component from './Component';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

### Test Structure

- Unit tests for utilities and hooks
- Component tests for UI behavior
- Integration tests for complex flows

## Deployment

### Production Build

```bash
npm run build
```

### Environment Configuration

Use Supabase secrets instead of .env files:
- `OPENAI_API_KEY`
- `OPENAI_ASSISTANT_ID`

### Deployment Options

1. **Lovable Platform** (Recommended)
   - Click "Publish" in editor
   - Automatic optimizations
   - Custom domain support

2. **Manual Deployment**
   - Build and deploy `dist/` folder
   - Configure environment variables

## Contributing

### Pull Request Process

1. Create feature branch from `main`
2. Make changes with proper TypeScript types
3. Add tests for new functionality
4. Ensure all tests pass
5. Update documentation
6. Submit pull request

### Code Style

- TypeScript strict mode
- ESLint for code quality
- Prettier for formatting
- Semantic commit messages

### Best Practices

- Mobile-first development
- SEO optimization
- Accessibility compliance
- Performance optimization
- Security considerations

## Debugging

### Development Tools

- React Developer Tools
- Browser DevTools
- Supabase Dashboard
- Network inspection

### Common Issues

1. **Build Errors**: Check TypeScript types
2. **API Issues**: Verify Supabase configuration
3. **Styling Issues**: Check Tailwind classes
4. **Translation Missing**: Update translation files

## Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase Docs](https://supabase.com/docs)
- [Vite Guide](https://vitejs.dev/guide/)

## Support

For development questions:
- Check existing documentation
- Review component TypeScript interfaces
- Use browser developer tools
- Consult team members

---

**Last Updated**: January 2025  
**Version**: 1.0.0