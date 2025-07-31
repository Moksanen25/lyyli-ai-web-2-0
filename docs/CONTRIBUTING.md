# Contributing to Lyyli.ai

## Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/lyyli-ai.git
   cd lyyli-ai
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   # Open http://localhost:8080
   ```

## Development Guidelines

### Code Style
- Use TypeScript for all new code
- Follow ESLint rules (`npm run lint`)
- Use semantic HTML and proper ARIA attributes
- Follow mobile-first responsive design

### Component Guidelines
- Use functional components with hooks
- Extract reusable logic to custom hooks
- Use the design system tokens from `index.css`
- Implement proper TypeScript interfaces

### Translation Guidelines
- Add new translations to all language files
- Use `useLanguage` hook for translations
- Test all language variants

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes following the guidelines above
3. Run linting: `npm run lint`
4. Build the project: `npm run build`
5. Test your changes manually
6. Submit a pull request with a clear description

## Code Review Checklist

- [ ] Code follows TypeScript best practices
- [ ] Components are mobile-responsive
- [ ] Translations are complete for all languages
- [ ] No console errors in browser
- [ ] Build succeeds without warnings
- [ ] Accessibility considerations met

## Getting Help

- Check existing documentation in `/docs`
- Review similar existing components
- Ask questions in pull request comments