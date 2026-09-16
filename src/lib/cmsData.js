import fs from 'fs';
import path from 'path';

export function getHomePageData() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'content', 'pages', 'home.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading home page CMS data:', error);
    return null;
  }
}


