
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        // Brand Colors - EXACT VALUES FROM BRAND BOOK
        'forest-green': '#2F5D50',      // Primary brand color - reliability and calm
        'soft-rose': '#F7EBEB',         // Gentle warmth and empathy
        'light-gray': '#F5F5F4',        // Minimalism and clarity
        'muted-turquoise': '#A7D6D1',   // Subtle technological accent
        
        // Supporting Colors
        'dark-gray': '#333333',
        'medium-gray': '#666666',
        'white': '#FFFFFF',
        
        // Semantic Color Mapping
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2F5D50", // Forest Green
          foreground: "#FFFFFF",
          light: "#3A6A5C",   // Slightly lighter Forest Green for hover
          dark: "#274A40",    // Slightly darker Forest Green for active
        },
        secondary: {
          DEFAULT: "#F7EBEB", // Soft Rose
          foreground: "#2F5D50",
        },
        accent: {
          DEFAULT: "#A7D6D1", // Muted Turquoise
          foreground: "#2F5D50",
        },
        muted: {
          DEFAULT: "#F5F5F4", // Light Gray
          foreground: "#666666", // Medium Gray
        },
        destructive: {
          DEFAULT: "#D64045",
          foreground: "#FFFFFF"
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#2F5D50"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          'primary-foreground': "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          'accent-foreground': "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))"
        }
      },
      fontFamily: {
        // Typography - EXACT FONTS FROM BRAND BOOK
        'playfair': ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'], // Headings - elegance and trust
        'inter': ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],    // Body text - clarity and readability
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif']
      },
      fontSize: {
        // Typography Hierarchy - EXACT SIZES FROM BRAND BOOK
        'xs': ['0.75rem', { lineHeight: '1.5' }],      // 12px - Small text
        'sm': ['0.875rem', { lineHeight: '1.5' }],     // 14px - Captions
        'base': ['1rem', { lineHeight: '1.6' }],       // 16px - Body text
        'lg': ['1.125rem', { lineHeight: '1.5' }],     // 18px - Subheadings
        'xl': ['1.25rem', { lineHeight: '1.4' }],      // 20px - H4
        '2xl': ['1.5rem', { lineHeight: '1.4' }],      // 24px - H3
        '3xl': ['2.25rem', { lineHeight: '1.3' }],     // 36px - H2
        '4xl': ['3rem', { lineHeight: '1.2' }],        // 48px - H1
        '5xl': ['3.75rem', { lineHeight: '1.1' }],     // 60px - Large H1
      },
      spacing: {
        // Spacing Scale - 8px base unit from brand book
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'soft': '0px 4px 12px rgba(0, 0, 0, 0.05)',   // Card shadows from brand book
        'medium': '0px 8px 24px rgba(0, 0, 0, 0.1)',  // Modal shadows from brand book
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in-slow': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          }
        },
        'slide-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          }
        },
        'bounce-gentle': {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-4px)'
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'fade-in': 'fade-in 0.7s ease-out',
        'fade-in-slow': 'fade-in-slow 1.2s ease-out',
        'slide-in-left': 'slide-in-left 0.5s ease-out',
        'bounce-gentle': 'bounce-gentle 2s infinite'
      },
      screens: {
        // Responsive Breakpoints - EXACT FROM BRAND BOOK
        'xs': '320px',    // Small mobile
        'sm': '640px',    // Mobile
        'md': '1024px',   // Desktop
        'lg': '1440px',   // Large desktop
        '3xl': '1920px',
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
  corePlugins: {
    // Disable unnecessary core plugins for better performance
    float: false,
    clear: false,
    skew: false,
  }
};

export default config;
