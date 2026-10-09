import News from '../../views/News';
import { newsItems } from '../../data/newsData';

export const metadata = {
  title: 'News & Events - SLFFA Cargo',
  description: 'Stay updated with the latest news, updates, and events from SLFFA Cargo.',
};

export default function Page() {
  return <News customNews={newsItems} />;
}
