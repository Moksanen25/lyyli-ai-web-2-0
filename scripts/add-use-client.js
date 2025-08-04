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

// Function to add 'use client' directive to components that need it
function addUseClientDirective(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Check if file already has 'use client' directive
  if (content.startsWith("'use client'") || content.startsWith('"use client"')) {
    return false;
  }
  
  // Check if component uses React hooks
  const usesHooks = /useState|useEffect|useRef|useCallback|useMemo|useContext|useReducer|useLayoutEffect|useImperativeHandle|useDebugValue/.test(content);
  
  if (usesHooks) {
    // Add 'use client' directive at the beginning
    content = "'use client';\n\n" + content;
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Added 'use client' to: ${filePath}`);
    return true;
  }
  
  return false;
}

// Main function
function addUseClientToComponents() {
  console.log('🔄 Adding "use client" directive to components that use React hooks...');
  
  const srcDir = path.join(__dirname, '..', 'src');
  const files = findFiles(srcDir);
  
  let updatedCount = 0;
  
  files.forEach(file => {
    if (addUseClientDirective(file)) {
      updatedCount++;
    }
  });
  
  console.log(`\n✅ Added 'use client' directive to ${updatedCount} files.`);
}

// Run the script
addUseClientToComponents(); 