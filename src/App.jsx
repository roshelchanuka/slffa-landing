import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HashRouter as Router, Routes, Route, usePathname } from 'react-router-dom';
import { AdminProvider } from './context/AdminContext';
import { ThemeProvider } from './context/ThemeContext';
import MediaLibraryModal from './components/MediaLibraryModal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './views/Home';
import About from './views/About';
import Services from './views/Services';
import News from './views/News';
import Contact from './views/Contact';
import UsefulLinks from './views/UsefulLinks';
import Tools from './views/Tools';
import CcnHub from './views/CcnHub';
import CoolRooms from './views/CoolRooms';
import Login from './views/Login';
import CookiePolicy from './views/CookiePolicy';
import CookieConsent from 'react-cookie-consent';

// Route Loader Component that tracks page transitions
function RouteLoader() {
  const pathname = usePathname();
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    setIsPageLoading(true);
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isPageLoading && (
        <motion.div
          key="route-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9998] bg-white dark:bg-slate-950/95 dark:bg-slate-950/95 backdrop-blur-sm flex flex-col items-center justify-center pointer-events-auto"
        >
          <motion.img
            src="/api/imageProxy?id=1d1z1Z0IMS6m0bu0Vqiyth92-Q0ezsPB0"
            alt="Page Loading..."
            className="h-28 w-auto object-contain animate-pulse"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    const triggerZoom = () => {
      setIsZooming(true);
      setTimeout(() => {
        setIsInitialLoading(false);
      }, 800);
    };

    if (document.readyState === 'complete') {
      const timer = setTimeout(triggerZoom, 600);
      return () => clearTimeout(timer);
    } else {
      const handleLoad = () => {
        setTimeout(triggerZoom, 600);
      };
      window.addEventListener('load', handleLoad);
      const timer = setTimeout(triggerZoom, 1500);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {isInitialLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-[9999] bg-white dark:bg-slate-950 flex flex-col items-center justify-center pointer-events-auto overflow-hidden"
          >
            <motion.img
              src="/api/imageProxy?id=1d1z1Z0IMS6m0bu0Vqiyth92-Q0ezsPB0"
              alt="SLFFA Logo Loading"
              className="h-48 w-auto md:h-56 object-contain"
              animate={isZooming ? {
                scale: 0,
                opacity: 0,
                rotate: 0
              } : {
                scale: [1, 1.05, 1],
                opacity: [0.4, 1, 0.4],
                rotate: 0
              }}
              transition={isZooming ? {
                duration: 0.8,
                ease: [0.36, 0, 0.66, -0.1]
              } : {
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AdminProvider>
        <Router>
          <ScrollToTop />
          <RouteLoader />
          <MediaLibraryModal />
          <div className="min-h-screen flex flex-col font-sans overflow-x-hidden relative w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <Navbar />
            <main className="flex-grow w-full overflow-x-hidden">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/news" element={<News />} />
                <Route path="/useful-links" element={<UsefulLinks />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/ccn-hub" element={<CcnHub />} />
                <Route path="/cool-rooms" element={<CoolRooms />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
              </Routes>
            </main>
            <Footer />
            <CookieConsent
              location="bottom"
              buttonText="I Understand"
              cookieName="slffaCookieConsent"
              style={{ background: "#1e293b", color: "#f8fafc", zIndex: 9999 }}
              buttonStyle={{ background: "#3b82f6", color: "#fff", fontSize: "14px", borderRadius: "6px" }}
              expires={150}
            >
              We use cookies to improve your experience on our site. By using our site, you consent to cookies.{" "}
              <a href="#/cookie-policy" style={{ color: "#60a5fa", textDecoration: "underline" }}>Read our Cookie Policy</a>.
            </CookieConsent>
          </div>
        </Router>
      </AdminProvider>
    </ThemeProvider>
  );
}

export default App;
