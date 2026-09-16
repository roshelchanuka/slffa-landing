const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? 
      walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function fixGetContent(filePath) {
  if (!filePath.endsWith('.jsx') && !filePath.endsWith('.js')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replace getContent(..., fallback) with just fallback
  // The regex finds getContent( something, fallbackValue )
  // We have to be careful with nested parentheses.
  // Actually, a simpler way is to replace `getContent(key, value)` with `value`.
  // Since some values might be complex, let's use a regex that matches up to the comma, then captures the rest.
  // Pattern: getContent\([^,]+,\s*(.+?)\)
  // But JavaScript regex doesn't handle nested parentheses well if the fallback has function calls.
  // Let's do a simple string replacement for the known ones:
  content = content.replace(/getContent\([^,]+,\s*(.+?)\)/g, (match, p1) => {
    return p1;
  });
  
  // also replace isEditMode with false
  content = content.replace(/\bisEditMode\b/g, 'false');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${filePath}`);
  }
}

const srcDir = path.join(__dirname, '../src');
walkDir(srcDir, fixGetContent);
console.log('Fix complete.');
