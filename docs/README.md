# Documentation

This directory contains comprehensive documentation for the Lyyli.ai project.

## Documentation Structure

- **[DEVELOPMENT.md](DEVELOPMENT.md)** - Complete development workflow and setup guide
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Production deployment strategies and configuration
- **[architecture.md](architecture.md)** - System architecture overview and technical details
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Guidelines for contributing to the project

## Quick Reference

### Development
```bash
npm run dev        # Start development server (port 8080)
npm run build      # Production build
npm run lint       # Code linting
npm run preview    # Preview production build
```

### Key Technologies
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Backend**: Supabase (Auth, Database, Edge Functions)
- **AI**: OpenAI API integration
- **i18n**: Finnish/English support

### Project Structure
```
src/
├── components/     # React components
├── pages/         # Route components  
├── hooks/         # Custom React hooks
├── translations/  # i18n files
├── utils/         # Utility functions
└── integrations/  # External services
```

For detailed information, see the individual documentation files above.