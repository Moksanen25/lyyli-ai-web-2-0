# Lyyli AI - Modern AI Communication Platform

A modern, AI-powered communication platform built with Next.js 14, TypeScript, and Tailwind CSS. Designed for seamless deployment on Vercel with optimized performance and clean architecture.

## 🚀 Features

- **AI-Powered Communication**: OpenAI integration for intelligent responses
- **Multi-language Support**: Finnish and English with proper i18n
- **Modern UI/UX**: Built with Radix UI and Tailwind CSS
- **Performance Optimized**: Next.js 14 with App Router
- **SEO Ready**: Comprehensive meta tags and structured data
- **Mobile First**: Responsive design across all devices
- **Vercel Ready**: Optimized for seamless deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Radix UI
- **Icons**: Lucide React
- **AI**: OpenAI API
- **Deployment**: Vercel
- **State Management**: React Context API

## 📁 Project Structure

```
├── public/
│   ├── images/           # Organized image assets
│   │   ├── hero/         # Hero section images
│   │   ├── blog/         # Blog post images
│   │   ├── features/     # Feature showcase images
│   │   ├── team/         # Team member photos
│   │   └── icons/        # Custom icons
│   └── favicon.ico
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── api/          # API routes
│   │   ├── [lang]/       # Language-specific routes
│   │   └── globals.css
│   ├── components/       # Reusable components
│   │   ├── ui/           # Base UI components
│   │   ├── layout/       # Layout components
│   │   └── sections/     # Page sections
│   ├── contexts/         # React contexts
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utility libraries
│   ├── translations/     # i18n files
│   └── data/             # Static data
└── docs/                 # Documentation
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- OpenAI API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Moksanen25/lyyli-ai-web-2-0.git
   cd lyyli-ai-web-2-0
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp ENV_EXAMPLE.md .env.local
   # Edit .env.local with your OpenAI API key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with:

```env
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_ASSISTANT_ID=your_openai_assistant_id_here

# Application Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Lyyli AI
```

### Image Management

- **Hero Images**: Place in `public/images/hero/` (1920x1080px)
- **Blog Images**: Place in `public/images/blog/` (1200x630px)
- **Feature Images**: Place in `public/images/features/` (800x600px)
- **Team Photos**: Place in `public/images/team/` (600x600px)

See `IMAGE_GUIDE.md` for detailed guidelines.

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript check
```

## 🌍 Internationalization

The app supports Finnish and English:

- **English**: `/` (default)
- **Finnish**: `/fi/`

Translation files are located in `src/translations/`.

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy automatically** on push to main branch

### Manual Deployment

```bash
npm run build
npm run start
```

## 📚 Documentation

- **[Image Guide](IMAGE_GUIDE.md)** - Image organization and usage
- **[Environment Setup](ENV_EXAMPLE.md)** - Environment variables configuration
- **[Development Guide](docs/DEVELOPMENT.md)** - Development workflow
- **[Architecture](docs/architecture.md)** - System architecture

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is proprietary software owned by Lyyli AI Oy.

## 🆘 Support

For support, email contact@lyyli.ai or create an issue in the repository.

---

**Built with ❤️ by the Lyyli AI team**