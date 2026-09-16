import Home from '../views/Home';
import { getHomePageData } from '../lib/cmsData';

export const metadata = {
  title: 'Home - SLFFA Cargo',
  description: "Welcome to Sri Lanka Logistics and Freight Forwarders' Association Cargo Services.",
};

export default function Page() {
  const homeData = getHomePageData() || {};
  return <Home cmsData={homeData} />;
}
