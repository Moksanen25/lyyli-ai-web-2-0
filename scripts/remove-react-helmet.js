const fs = require('fs');
const path = require('path');

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && file !== '.next') {
      results = results.concat(findFiles(filePath, extensions));
    } else if (extensions.some(ext => file.endsWith(ext))) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Function to remove react-helmet imports and usage
function removeReactHelmet(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Remove import statements
  const importPatterns = [
    /import\s+\{\s*Helmet\s*\}\s+from\s+['"]react-helmet['"];?\n?/g,
    /import\s+Helmet\s+from\s+['"]react-helmet['"];?\n?/g
  ];
  
  importPatterns.forEach(pattern => {
    if (pattern.test(content)) {
      content = content.replace(pattern, '');
      modified = true;
    }
  });
  
  // Remove Helmet usage patterns
  const helmetPatterns = [
    // Remove entire Helmet components with their content
    /<Helmet[^>]*>[\s\S]*?<\/Helmet>/g,
    // Remove self-closing Helmet tags
    /<Helmet[^>]*\/>/g
  ];
  
  helmetPatterns.forEach(pattern => {
    if (pattern.test(content)) {
      content = content.replace(pattern, '');
      modified = true;
    }
  });
  
  // Clean up any empty lines that might be left
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Removed react-helmet from: ${filePath}`);
    return true;
  }
  
  return false;
}

// Main function
function removeReactHelmetFromProject() {
  console.log('🔄 Removing react-helmet from project...');
  
  const srcDir = path.join(__dirname, '..', 'src');
  const files = findFiles(srcDir);
  
  let updatedCount = 0;
  
  files.forEach(file => {
    if (removeReactHelmet(file)) {
      updatedCount++;
    }
  });
  
  console.log(`\n✅ Removed react-helmet from ${updatedCount} files.`);
  console.log('\n📝 Note: SEO metadata should now be handled by Next.js metadata API in the app directory.');
}

// Run the script
removeReactHelmetFromProject(); 