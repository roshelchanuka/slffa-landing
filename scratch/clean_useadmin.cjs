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

function removeUseAdmin(filePath) {
  if (!filePath.endsWith('.jsx') && !filePath.endsWith('.js')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Remove the import statement entirely
  content = content.replace(/import\s+\{\s*useAdmin\s*\}\s+from\s+['"].*AdminContext['"];?\n?/g, '');
  
  // Find destructured hooks: const { isEditMode, getContent } = useAdmin();
  // We can just remove the whole line.
  content = content.replace(/^.*useAdmin\(\).*$\n?/gm, '');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned ${filePath}`);
  }
}

const srcDir = path.join(__dirname, '../src');
walkDir(srcDir, removeUseAdmin);
console.log('Cleanup complete.');
