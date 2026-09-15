import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/news');

// Ensure the directory exists
if (!fs.existsSync(contentDirectory)) {
  fs.mkdirSync(contentDirectory, { recursive: true });
}

export function getNewsSlugs() {
  const files = fs.readdirSync(contentDirectory);
  return files.filter(file => file.endsWith('.mdx'));
}

export function getNewsBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: data,
    content,
  };
}

export function getAllNews() {
  const slugs = getNewsSlugs();
  const news = slugs
    .map((slug) => getNewsBySlug(slug))
    .filter((post) => post !== null)
    .sort((post1, post2) => (post1.meta.date > post2.meta.date ? -1 : 1));
  
  return news;
}
