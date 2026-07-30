import '../index.css';
import { AdminProvider } from '../context/AdminContext';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MediaLibraryModal from '../components/MediaLibraryModal';
import CookieBanner from '../components/CookieBanner';

export const metadata = {
  title: 'SLFFA Cargo',
  icons: {
    icon: '/images/drive/1d1z1Z0IMS6m0bu0Vqiyth92-Q0ezsPB0.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&family=Anek+Tamil:wght@100..800&family=Dancing+Script:wght@400..700&family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lato&family=League+Spartan:wght@100..900&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Mulish:ital,wght@0,200..1000;1,200..1000&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          <AdminProvider>
            <MediaLibraryModal />
            <div className="min-h-screen flex flex-col font-sans overflow-x-hidden relative w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
              <Navbar />
              <main className="flex-grow w-full overflow-x-hidden">
                {children}
              </main>
              <Footer />
              <CookieBanner />
            </div>
          </AdminProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
