
# Lyyli.ai - AI-Powered Communication Platform

Welcome to Lyyli.ai, a modern web application that provides AI-powered communication solutions for businesses. Built with React, TypeScript, and Supabase.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Development Setup

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
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

## 🏗️ Project Structure

```
├── docs/                 # Project documentation
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # Base UI components
│   │   ├── pricing/     # Pricing components
│   │   └── features/    # Feature components
│   ├── pages/           # Route components
│   ├── hooks/           # Custom React hooks
│   ├── translations/    # i18n translation files
│   ├── utils/           # Utility functions
│   └── services/        # API services
├── supabase/
│   └── functions/       # Supabase Edge Functions
└── public/              # Static assets
```

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Routing**: React Router DOM
- **Backend**: Supabase (Database, Auth, Edge Functions)
- **AI**: OpenAI API integration
- **Internationalization**: Custom i18n system
- **Testing**: Vitest, React Testing Library

## 🌍 Internationalization

The application supports multiple languages:
- English (default)
- Finnish

Language switching is handled via URL routing (`/en/` and `/fi/` prefixes).

## 🔧 Configuration

### Environment Variables

This project uses Supabase secrets for environment management instead of `.env` files:

**Required Supabase Secrets:**
- `OPENAI_API_KEY` - OpenAI API key for AI features
- `OPENAI_ASSISTANT_ID` - OpenAI Assistant ID

### Supabase Setup

1. **Create a Supabase project**
2. **Configure authentication** (if using auth features)
3. **Set up secrets** in Supabase dashboard
4. **Deploy edge functions** (automatically handled by Lovable)

## 🧪 Testing

### Running Tests
```bash
npm run test
# or
npm run test:watch  # Watch mode
```

### Test Structure
- Unit tests for components and utilities
- Integration tests for complex features
- React Testing Library for component testing

### Writing Tests
```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Deployment Options

#### Lovable Platform (Recommended)
1. Click "Publish" in Lovable editor
2. Configure custom domain (optional)
3. Automatic deployment with optimizations

#### Manual Deployment
1. Build the project: `npm run build`
2. Deploy `dist/` folder to your hosting provider
3. Configure environment variables on hosting platform

### Environment-Specific Configurations

Production builds automatically optimize:
- Bundle size and code splitting
- Asset compression and caching
- CSS purging and minification

## 🔌 API Integration

### Supabase Edge Functions

#### OpenAI Assistant Function
- **Endpoint**: `/functions/v1/openai-assistant`
- **Purpose**: Secure OpenAI API communication
- **Authentication**: Handled via Supabase

#### Usage Example
```typescript
import { supabase } from '@/integrations/supabase/client';

const response = await supabase.functions.invoke('openai-assistant', {
  body: { action: 'createThread' }
});
```

### Error Handling
- Comprehensive error boundaries
- User-friendly error messages
- Automatic retry mechanisms

## 🎨 Styling Guide

### Tailwind CSS
- Custom color palette in `tailwind.config.ts`
- Responsive design with mobile-first approach
- Component variants using `class-variance-authority`

### Design System
- Consistent spacing scale (4px base unit)
- Typography hierarchy with custom fonts
- Semantic color naming for maintainability

## 📁 Component Guidelines

### Creating New Components
1. Use TypeScript interfaces for props
2. Follow single responsibility principle
3. Include proper error boundaries
4. Add appropriate ARIA labels for accessibility

### Component Structure
```typescript
interface ComponentProps {
  // Define props with TypeScript
}

const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Component logic
  return (
    // JSX
  );
};

export default Component;
```

## 🔍 Debugging

### Development Tools
- React Developer Tools
- Supabase logs in dashboard
- Browser developer console
- Network tab for API debugging

### Common Issues
- Check Supabase secrets configuration
- Verify OpenAI API key validity
- Ensure proper CORS configuration

## 📊 Performance

### Optimization Features
- Code splitting by routes
- Lazy loading of translations
- Image optimization
- Bundle analysis available

### Performance Monitoring
```bash
npm run build -- --analyze  # Bundle analysis
```

## 🤝 Contributing

### Development Workflow
1. Create feature branch
2. Make changes with proper TypeScript types
3. Add tests for new functionality
4. Ensure all tests pass
5. Submit pull request

### Code Style
- TypeScript strict mode enabled
- ESLint configuration for code quality
- Prettier for consistent formatting
- Component and utility testing required

## 📝 Documentation

- **Architecture**: See `docs/architecture.md`
- **Component API**: TypeScript interfaces serve as documentation
- **Translation Keys**: Located in `src/translations/`

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   - Check TypeScript errors: `npm run type-check`
   - Verify all imports are correct

2. **API Issues**
   - Confirm Supabase secrets are set
   - Check network connectivity
   - Review Supabase function logs

3. **Styling Issues**
   - Verify Tailwind classes are correct
   - Check responsive design breakpoints

### Getting Help
- Check project documentation in `docs/`
- Review component TypeScript interfaces
- Use browser developer tools for debugging

## 📄 License

This project is part of the Lovable platform ecosystem.

## 🔗 Useful Links

- [Lovable Documentation](https://docs.lovable.dev/)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
