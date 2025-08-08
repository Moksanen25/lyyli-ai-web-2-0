#!/usr/bin/env node

/**
 * Lyyli AI Brand Compliance Validator
 * 
 * This script validates that all code changes follow the brand guidelines.
 * Run this script before committing code to ensure brand compliance.
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Brand color definitions - MUST match exactly
const BRAND_COLORS = {
  primary: '#2F5D50',
  primaryLight: '#A7D6D1',
  secondary: '#F7EBEB',
  accent: '#A7D6D1',
  background: '#FFFFFF',
  foreground: '#2F5D50',
};

// Forbidden colors that should never be used
const FORBIDDEN_COLORS = [
  '#000000', '#FF0000', '#00FF00', '#0000FF', // Pure colors
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', // Bright colors
  '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'  // Pastel colors
];

// Required font families
const REQUIRED_FONTS = [
  'Inter',
  'Playfair Display'
];

// Required messaging keywords
const REQUIRED_MESSAGES = [
  'AI-powered communication automation',
  'Consistent brand voice',
  'Enterprise-grade security',
  'Multi-language support',
  'GDPR compliant',
  'ISO 27001'
];

class BrandValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.filesChecked = 0;
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
  }

  addError(file, line, message) {
    this.errors.push({ file, line, message });
    this.log(`ERROR: ${file}:${line} - ${message}`, 'error');
  }

  addWarning(file, line, message) {
    this.warnings.push({ file, line, message });
    this.log(`WARNING: ${file}:${line} - ${message}`, 'warn');
  }

  validateColors(content, file) {
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      const lineNumber = index + 1;
      
      // Check for forbidden colors
      FORBIDDEN_COLORS.forEach(color => {
        if (line.includes(color)) {
          this.addError(file, lineNumber, `Forbidden color used: ${color}`);
        }
      });

      // Check for hardcoded colors that don't match brand palette
      const colorRegex = /#[0-9A-Fa-f]{6}/g;
      const matches = line.match(colorRegex);
      
      if (matches) {
        matches.forEach(color => {
          const upperColor = color.toUpperCase();
          if (!Object.values(BRAND_COLORS).includes(upperColor)) {
            this.addWarning(file, lineNumber, `Non-brand color detected: ${color}`);
          }
        });
      }
    });
  }

  validateTypography(content, file) {
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      const lineNumber = index + 1;
      
      // Check for system fonts without Inter fallback
      if (line.includes('font-family') && !line.includes('Inter')) {
        this.addWarning(file, lineNumber, 'Typography should include Inter font family');
      }

      // Check for missing font hierarchy
      if (line.includes('text-') && !line.includes('font-')) {
        this.addWarning(file, lineNumber, 'Typography should include font weight');
      }
    });
  }

  validateMessaging(content, file) {
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      const lineNumber = index + 1;
      
      // Check for casual language
      const casualWords = ['awesome', 'cool', 'amazing', 'fantastic', 'super'];
      casualWords.forEach(word => {
        if (line.toLowerCase().includes(word)) {
          this.addWarning(file, lineNumber, `Casual language detected: "${word}" - use professional tone`);
        }
      });

      // Check for missing key messages in content files
      if (file.includes('content') || file.includes('translation')) {
        const hasKeyMessage = REQUIRED_MESSAGES.some(message => 
          line.toLowerCase().includes(message.toLowerCase())
        );
        
        if (!hasKeyMessage && line.length > 50) {
          this.addWarning(file, lineNumber, 'Consider including key brand messages');
        }
      }
    });
  }

  validateAccessibility(content, file) {
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      const lineNumber = index + 1;
      
      // Check for missing alt text - improved regex to avoid false positives
      if (line.includes('<img') && !line.includes('alt=')) {
        // Check if this is a self-closing img tag or if alt is on the next line
        const isSelfClosing = line.includes('/>') || line.includes('>');
        const hasAltOnSameLine = line.includes('alt=');
        
        if (isSelfClosing && !hasAltOnSameLine) {
          this.addError(file, lineNumber, 'Image missing alt text for accessibility');
        } else if (!isSelfClosing) {
          // For multi-line img tags, check if alt is present in the next few lines
          const nextLines = lines.slice(index, index + 3);
          const hasAltInNextLines = nextLines.some(nextLine => nextLine.includes('alt='));
          if (!hasAltInNextLines) {
            this.addError(file, lineNumber, 'Image missing alt text for accessibility');
          }
        }
      }

      // Check for proper heading hierarchy
      if (line.includes('<h') && !line.includes('aria-label') && !line.includes('id=')) {
        this.addWarning(file, lineNumber, 'Consider adding ARIA labels for better accessibility');
      }

      // Check for color-only information
      if (line.includes('color:') && line.includes('red') && !line.includes('aria-label')) {
        this.addWarning(file, lineNumber, 'Color-only information should include ARIA labels');
      }
    });
  }

  validateFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const relativePath = path.relative(process.cwd(), filePath);
      
      this.filesChecked++;
      this.log(`Checking: ${relativePath}`);

      // Skip certain files
      if (filePath.includes('node_modules') || 
          filePath.includes('.git') || 
          filePath.includes('.next') ||
          filePath.includes('package-lock.json')) {
        return;
      }

      // Validate based on file type
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.js')) {
        this.validateColors(content, relativePath);
        this.validateTypography(content, relativePath);
        this.validateAccessibility(content, relativePath);
      }

      if (filePath.endsWith('.md') || filePath.endsWith('.mdx')) {
        this.validateMessaging(content, relativePath);
      }

      if (filePath.endsWith('.css') || filePath.endsWith('.scss')) {
        this.validateColors(content, relativePath);
        this.validateTypography(content, relativePath);
      }

    } catch (error) {
      this.addError(filePath, 0, `Failed to read file: ${error.message}`);
    }
  }

  async validateProject() {
    this.log('Starting Lyyli AI Brand Compliance Validation...');
    
    // Get all relevant files
    const patterns = [
      'src/**/*.{ts,tsx,js,jsx}',
      'src/**/*.{css,scss}',
      'src/**/*.{md,mdx}',
      'public/**/*.{html,svg}',
      '*.{json,js,ts}'
    ];

    for (const pattern of patterns) {
      const files = glob.sync(pattern, { ignore: ['node_modules/**', '.next/**', '.git/**'] });
      files.forEach(file => this.validateFile(file));
    }

    // Generate report
    this.generateReport();
  }

  generateReport() {
    this.log('\n=== LYTLI AI BRAND COMPLIANCE REPORT ===');
    this.log(`Files checked: ${this.filesChecked}`);
    this.log(`Errors found: ${this.errors.length}`);
    this.log(`Warnings found: ${this.warnings.length}`);

    if (this.errors.length > 0) {
      this.log('\n❌ ERRORS (Must be fixed):');
      this.errors.forEach(error => {
        this.log(`  ${error.file}:${error.line} - ${error.message}`, 'error');
      });
    }

    if (this.warnings.length > 0) {
      this.log('\n⚠️  WARNINGS (Should be reviewed):');
      this.warnings.forEach(warning => {
        this.log(`  ${warning.file}:${warning.line} - ${warning.message}`, 'warn');
      });
    }

    if (this.errors.length === 0 && this.warnings.length === 0) {
      this.log('\n✅ All files pass brand compliance validation!', 'success');
    }

    // Exit with error code if there are errors
    if (this.errors.length > 0) {
      this.log('\n❌ Brand compliance validation failed. Please fix the errors above.', 'error');
      process.exit(1);
    }

    this.log('\n✅ Brand compliance validation completed successfully!', 'success');
  }
}

// Run validation if this script is executed directly
if (require.main === module) {
  const validator = new BrandValidator();
  validator.validateProject().catch(error => {
    console.error('Validation failed:', error);
    process.exit(1);
  });
}

module.exports = BrandValidator; 