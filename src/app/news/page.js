import News from '../../views/News';
import { getAllNews } from '../../lib/mdx';
import { newsItems } from '../../data/newsData';

export const metadata = {
  title: 'News & Events - SLFFA Cargo',
  description: 'Stay updated with the latest news, updates, and events from SLFFA Cargo.',
};

export default async function Page() {
  const mdxNews = getAllNews();
  
  // Convert MDX data format to match the existing newsData format temporarily
  const formattedNews = mdxNews.map(item => ({
    id: item.slug,
    title: item.meta.title,
    date: item.meta.date,
    category: item.meta.category || 'News',
    excerpt: item.meta.excerpt || item.content.substring(0, 150),
    images: [], // MDX images not set up yet
  }));

  const allNews = [...formattedNews, ...newsItems];

  return <News customNews={allNews} />;
}
