const fs = require('fs');
const path = require('path');

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      results = results.concat(findFiles(filePath, extensions));
    } else if (extensions.some(ext => file.endsWith(ext))) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Function to replace React Router imports with Next.js equivalents
function replaceRouterImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Replace import statements
  const importReplacements = [
    {
      from: /import\s+\{\s*Link\s*\}\s+from\s+['"]react-router-dom['"];?/g,
      to: "import Link from 'next/link';"
    },
    {
      from: /import\s+\{\s*useLocation\s*\}\s+from\s+['"]react-router-dom['"];?/g,
      to: "import { usePathname } from 'next/navigation';"
    },
    {
      from: /import\s+\{\s*useNavigate\s*\}\s+from\s+['"]react-router-dom['"];?/g,
      to: "import { useRouter } from 'next/navigation';"
    },
    {
      from: /import\s+\{\s*useParams\s*\}\s+from\s+['"]react-router-dom['"];?/g,
      to: "import { useParams } from 'next/navigation';"
    },
    {
      from: /import\s+\{\s*MemoryRouter\s*\}\s+from\s+['"]react-router-dom['"];?/g,
      to: "// MemoryRouter removed - use Next.js router for testing"
    },
    {
      from: /import\s+\{\s*Link,\s*useLocation\s*\}\s+from\s+['"]react-router-dom['"];?/g,
      to: "import Link from 'next/link';\nimport { usePathname } from 'next/navigation';"
    },
    {
      from: /import\s+\{\s*Link,\s*useNavigate\s*\}\s+from\s+['"]react-router-dom['"];?/g,
      to: "import Link from 'next/link';\nimport { useRouter } from 'next/navigation';"
    },
    {
      from: /import\s+\{\s*useLocation,\s*Link,\s*useNavigate\s*\}\s+from\s+['"]react-router-dom['"];?/g,
      to: "import Link from 'next/link';\nimport { usePathname, useRouter } from 'next/navigation';"
    }
  ];
  
  // Apply import replacements
  importReplacements.forEach(replacement => {
    if (replacement.from.test(content)) {
      content = content.replace(replacement.from, replacement.to);
      modified = true;
    }
  });
  
  // Replace usage patterns
  const usageReplacements = [
    {
      from: /useLocation\(\)/g,
      to: 'usePathname()'
    },
    {
      from: /useNavigate\(\)/g,
      to: 'useRouter()'
    },
    {
      from: /location\.pathname/g,
      to: 'pathname'
    },
    {
      from: /navigate\(/g,
      to: 'router.push('
    },
    {
      from: /navigate\(([^,]+),\s*\{\s*replace:\s*true\s*\}\)/g,
      to: 'router.replace($1)'
    },
    {
      from: /<Link\s+to=/g,
      to: '<Link href='
    }
  ];
  
  // Apply usage replacements
  usageReplacements.forEach(replacement => {
    if (replacement.from.test(content)) {
      content = content.replace(replacement.from, replacement.to);
      modified = true;
    }
  });
  
  // Add 'use client' directive if component uses hooks
  if (modified && (content.includes('usePathname') || content.includes('useRouter') || content.includes('useParams'))) {
    if (!content.startsWith("'use client'") && !content.startsWith('"use client"')) {
      content = "'use client';\n\n" + content;
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${filePath}`);
    return true;
  }
  
  return false;
}

// Main migration function
function migrateRouterImports() {
  console.log('🔄 Starting React Router to Next.js migration...');
  
  const srcDir = path.join(__dirname, '..', 'src');
  const files = findFiles(srcDir);
  
  let updatedCount = 0;
  
  files.forEach(file => {
    if (replaceRouterImports(file)) {
      updatedCount++;
    }
  });
  
  console.log(`\n✅ Migration complete! Updated ${updatedCount} files.`);
  console.log('\n📝 Next steps:');
  console.log('1. Review the changes in the updated files');
  console.log('2. Test the application with: npm run dev');
  console.log('3. Fix any remaining issues manually');
}

// Run the migration
migrateRouterImports(); 