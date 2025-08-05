
# Architecture Documentation

## Overview

Lyyli.ai is a React-based web application built with modern web technologies, focusing on AI-powered communication solutions. The application uses a modular architecture with clear separation of concerns.

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: React Context API + Custom Hooks
- **Backend**: Next.js API Routes
- **AI Integration**: OpenAI API via server-side integration

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Base UI components (shadcn/ui)
│   ├── pricing/         # Pricing-specific components
│   ├── features/        # Feature showcase components
│   └── ...              # Other domain-specific components
├── pages/               # Route components
├── hooks/               # Custom React hooks
├── contexts/            # React Context providers
├── translations/        # Internationalization files
├── utils/               # Utility functions
├── services/            # API service layers
└── integrations/        # External service integrations
```

## Component Architecture

### Component Hierarchy
- **Pages**: Top-level route components that compose layouts
- **Feature Components**: Domain-specific components (pricing, features, etc.)
- **UI Components**: Reusable base components from shadcn/ui
- **Layout Components**: Headers, footers, navigation

### Component Design Principles
- Single Responsibility: Each component has one clear purpose
- Composition over Inheritance: Components are composed together
- Props Interface: Clear TypeScript interfaces for all props
- Responsive Design: Mobile-first approach with Tailwind CSS

## State Management

### Context API Usage
- **LanguageContext**: Manages internationalization and translations
- Component-level state for UI interactions
- Custom hooks for data fetching and business logic

### Data Flow
1. User interactions trigger events
2. Events update local component state or context
3. State changes trigger re-renders
4. API calls handled via custom hooks and services

## API Integration

### Next.js API Routes
- **/api/openai/***: Handles OpenAI API communication
- Secure API key management via environment variables
- Server-side processing for enhanced security

### Service Layer
- `openaiService.ts`: Abstracts OpenAI API interactions
- Error handling and retry logic
- Type-safe API responses

## Routing Structure

```
/                    # Landing page
/full/               # Main application routes
├── features         # Features showcase
├── pricing         # Pricing plans
├── about           # About page
├── blog            # Blog listing
├── contact         # Contact page
└── /fi/            # Finnish language routes (mirror structure)
```

## Internationalization

### Translation System
- Modular translation files by feature/page
- Context-based translation hooks
- Language switching with URL routing
- Fallback handling for missing translations

### Supported Languages
- English (default)
- Finnish

## Styling Architecture

### Tailwind CSS Configuration
- Custom color palette for brand consistency
- Responsive breakpoints
- Component-specific utilities
- Dark mode support (configurable)

### Design System
- Consistent spacing scale
- Typography hierarchy
- Color system with semantic naming
- Component variants via class-variance-authority

## Performance Considerations

### Code Splitting
- Route-based code splitting via React Router
- Component lazy loading where appropriate
- Translation file lazy loading

### Bundle Optimization
- Vite's built-in optimizations
- Tree shaking for unused code
- Tailwind CSS purging for production

## Security

### API Security
- Next.js API route security
- Environment variable management via .env files
- CORS configuration for API endpoints

### Client Security
- TypeScript for type safety
- Input validation and sanitization
- Secure authentication flows

## Development Workflow

### Development Setup
1. Clone repository
2. Install dependencies with `npm i`
3. Start development server with `npm run dev`
4. Configure OpenAI API integration

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting (configured)
- Component testing with React Testing Library

## Deployment

### Production Build
- Vite optimized production build
- Static asset optimization
- Environment-specific configurations

### Hosting
- Deployed via Lovable platform
- Custom domain support available
- Automatic HTTPS and CDN

## Future Enhancements

### Planned Improvements
- Comprehensive test coverage
- Performance monitoring
- Advanced error tracking
- Enhanced accessibility features

### Scalability Considerations
- Component library extraction
- Micro-frontend architecture potential
- Advanced state management (if needed)
- Database optimization strategies
