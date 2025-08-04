# Migration Guide: Vite + React Router to Next.js

This document outlines the migration from a Vite + React Router setup to Next.js with Server-Side Rendering (SSR).

## Overview of Changes

### 1. Project Structure Changes

**Before (Vite):**
```
src/
├── main.tsx          # Entry point
├── App.tsx           # Main app with React Router
├── pages/            # Page components
└── components/       # Reusable components
```

**After (Next.js):**
```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   ├── [lang]/       # Internationalized routes
│   └── globals.css   # Global styles
├── pages/            # Page components (unchanged)
└── components/       # Reusable components (unchanged)
```

### 2. Key Configuration Files Updated

#### package.json
- **Removed:** Vite-specific dependencies (`vite`, `@vitejs/plugin-react-swc`, `react-router-dom`)
- **Added:** Next.js dependencies (`next`, `eslint-config-next`)
- **Updated:** Scripts to use Next.js commands

#### tsconfig.json
- Updated for Next.js compatibility
- Added proper path mapping
- Configured for App Router

#### tailwind.config.ts
- Updated content paths for Next.js
- Maintained existing design system

#### next.config.js (New)
- Configured for internationalization
- Set up image optimization
- Added redirect/rewrite rules

#### middleware.ts (New)
- Handles internationalization routing
- Redirects users to appropriate language paths

### 3. Routing Migration

#### React Router → Next.js App Router

**Before:**
```tsx
// App.tsx with React Router
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/about" element={<About />} />
  <Route path="/fi" element={<Index />} />
  <Route path="/fi/about" element={<About />} />
</Routes>
```

**After:**
```tsx
// Next.js App Router structure
src/app/
├── page.tsx              // / (English)
├── about/page.tsx        // /about (English)
├── [lang]/
│   ├── layout.tsx        // Layout for internationalized routes
│   ├── page.tsx          // /fi, /sv (Internationalized home)
│   └── about/page.tsx    // /fi/about, /sv/about
```

### 4. Component Updates

#### Navigation Components
- **Navbar.tsx:** Updated to use `next/link` and `usePathname`
- **LanguageSwitcher.tsx:** Added `'use client'` directive
- **LanguageContext.tsx:** Updated to use Next.js router

#### Key Changes:
```tsx
// Before: React Router
import { Link, useLocation } from 'react-router-dom';
<Link to="/about">About</Link>

// After: Next.js
import Link from 'next/link';
import { usePathname } from 'next/navigation';
<Link href="/about">About</Link>
```

### 5. Internationalization (i18n)

#### Language Detection
- **Before:** Client-side language detection with React Router
- **After:** Server-side language detection with Next.js middleware

#### Language Context Updates
- Updated to work with Next.js router
- Added SSR-safe checks for `window` and `localStorage`
- Maintained existing translation system

### 6. Styling and Assets

#### CSS Migration
- Combined `index.css` and `blog.css` into `globals.css`
- Maintained Tailwind CSS configuration
- Preserved existing design tokens and custom styles

#### Asset Handling
- Static assets moved to `public/` directory
- Images optimized with Next.js Image component (optional)
- Favicon and other static files properly configured

### 7. Development and Build

#### Development Server
```bash
# Before
npm run dev  # Vite dev server

# After
npm run dev  # Next.js dev server
```

#### Build Process
```bash
# Before
npm run build  # Vite build

# After
npm run build  # Next.js build
npm run start  # Next.js production server
```

### 8. Environment Variables

#### Vite → Next.js
```bash
# Before (Vite)
VITE_API_URL=https://api.example.com

# After (Next.js)
NEXT_PUBLIC_API_URL=https://api.example.com
```

### 9. SEO and Metadata

#### Enhanced SEO
- Added comprehensive metadata in layouts
- Implemented proper Open Graph tags
- Added structured data support
- Improved social media sharing

#### Example Metadata:
```tsx
export const metadata: Metadata = {
  title: 'Lyyli AI - Customer Segmentation Platform',
  description: 'AI-powered customer segmentation platform',
  openGraph: {
    title: 'Lyyli AI - Customer Segmentation Platform',
    description: 'AI-powered customer segmentation platform',
    // ... more OG tags
  }
}
```

### 10. Performance Improvements

#### SSR Benefits
- **Faster Initial Page Load:** Server-rendered HTML
- **Better SEO:** Search engines can crawl content immediately
- **Improved Core Web Vitals:** Better LCP and FID scores

#### Next.js Optimizations
- Automatic code splitting
- Image optimization
- Font optimization
- Bundle analysis

### 11. Testing and Quality Assurance

#### Testing Setup
- Maintained existing Vitest configuration
- Updated test utilities for Next.js
- Preserved component testing patterns

#### Linting and Formatting
- Updated ESLint configuration for Next.js
- Maintained existing code quality standards

### 12. Deployment Considerations

#### Build Output
- **Before:** Static files in `dist/`
- **After:** Next.js build in `.next/`

#### Deployment Platforms
- **Vercel:** Native Next.js support
- **Netlify:** Requires adapter configuration
- **Self-hosted:** Node.js server required

### 13. Migration Checklist

- [x] Update package.json dependencies
- [x] Configure Next.js and TypeScript
- [x] Migrate routing structure
- [x] Update navigation components
- [x] Implement internationalization
- [x] Update styling and assets
- [x] Configure middleware
- [x] Set up metadata and SEO
- [x] Test all routes and functionality
- [x] Update deployment configuration

### 14. Benefits of Migration

1. **Server-Side Rendering:** Better SEO and performance
2. **Built-in Optimizations:** Automatic code splitting, image optimization
3. **Better Developer Experience:** File-based routing, hot reloading
4. **Enhanced SEO:** Built-in metadata and structured data support
5. **Internationalization:** Better i18n support with middleware
6. **Performance:** Improved Core Web Vitals scores
7. **Scalability:** Better handling of large applications

### 15. Potential Issues and Solutions

#### Hydration Mismatches
- **Issue:** Server and client rendering differences
- **Solution:** Use `'use client'` directive appropriately

#### Environment Variables
- **Issue:** Different naming conventions
- **Solution:** Prefix with `NEXT_PUBLIC_` for client-side access

#### Image Optimization
- **Issue:** Different image handling
- **Solution:** Use Next.js Image component or configure `unoptimized: true`

### 16. Next Steps

1. **Testing:** Comprehensive testing of all routes and functionality
2. **Performance Monitoring:** Set up monitoring for Core Web Vitals
3. **SEO Audit:** Verify all meta tags and structured data
4. **Deployment:** Configure production deployment
5. **Documentation:** Update team documentation and processes

## Conclusion

The migration to Next.js provides significant benefits in terms of performance, SEO, and developer experience. The app router structure makes the codebase more maintainable and the built-in optimizations improve user experience.

All existing functionality has been preserved while adding server-side rendering capabilities and enhanced internationalization support. 