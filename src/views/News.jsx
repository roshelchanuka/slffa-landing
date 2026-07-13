"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { CalendarDays, ArrowUpRight, Newspaper, Camera, Sparkles, ChevronDown, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import Editable from '../components/Editable';

// Import shared news items
import { newsItems } from '../data/newsData';

// Replaced hero image to use Google Drive proxy
const newsHeroBg = '/api/imageProxy?id=15fwYP6fPS4fEVViD2hxFmkOdLC7Nadks';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

// Helper Slideshow Component for individual news/event items
function EventSlideshow({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  // Autoplay slideshow
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800/60 shadow-lg group bg-slate-950 aspect-[4/3] flex items-center justify-center">

      {/* Blurred background image for premium aspect ratio filling */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-30 scale-110 transition-all duration-700 ease-in-out pointer-events-none"
        style={{ backgroundImage: `url('${images[currentSlide]}')` }}
      />

      {/* Slideshow image container */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentSlide}
            src={images[currentSlide]}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.25 }
            }}
            className="absolute inset-0 w-full h-full object-contain z-10"
            alt={`Event Photo ${currentSlide + 1}`}
          />
        </AnimatePresence>
      </div>

      {/* Navigation Controls (visible on hover or if touch device) */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => {
              setDirection(-1);
              setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => {
              setDirection(1);
              setCurrentSlide((prev) => (prev + 1) % images.length);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Counter label */}
      <div className="absolute top-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-[2px]">
        {currentSlide + 1} / {images.length}
      </div>
    </div>
  );
}

export default function News() {
  const [selectedYear, setSelectedYear] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Parallax scroll transforms
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], ['0%', '30%']);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1280);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filter items by selected year
  const filteredItems = newsItems.filter(item => {
    if (selectedYear === 'All') return true;
    return item.date.includes(selectedYear);
  });

  // Years range 2014 to 2026
  const years = ['All', ...Array.from({ length: 2026 - 2014 + 1 }, (_, i) => (2026 - i).toString())];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen relative overflow-hidden transition-colors duration-300">

      {/* Ambient background glows */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] aspect-square rounded-full bg-blue-200/20 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50%] aspect-square rounded-full bg-sky-200/20 blur-[120px] pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[380px] sm:h-[65vh] sm:min-h-[450px] lg:h-screen flex items-center bg-slate-900 overflow-hidden">
        {/* Parallax Background Container */}
        <motion.div
          style={isMobile ? {} : { y, opacity }}
          className="absolute inset-0 z-0"
        >
          {/* Split official brand navy blue gradient overlay (matching Services/About) */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/15 lg:from-slate-950/85 lg:via-slate-900/60 lg:to-transparent z-10"></div>

          {/* Smooth zoom scale transition background image */}
          <Editable id="news.hero.image" type="image" defaultContent={newsHeroBg}>
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url('${newsHeroBg}')` }}
            ></motion.div>
          </Editable>
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-24">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-sky-200">
              <Newspaper className="h-4 w-4" />
              <Editable id="news.hero.badge" defaultContent="News & Events">
                <span>News & Events</span>
              </Editable>
            </div>

            <Editable id="news.hero.title" defaultContent="Latest Updates from SLFFA Cargo Services">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-md">
                Latest Updates from SLFFA Cargo Services
              </h1>
            </Editable>

            <Editable
              id="news.hero.description"
              type="textarea"
              defaultContent="Company milestones, facility improvements, community events, and service updates from the SLFFA Cargo Services team."
            >
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100 font-light drop-shadow-sm">
                Company milestones, facility improvements, community events, and service updates from the SLFFA Cargo Services team.
              </p>
            </Editable>
          </div>
        </div>

        {/* Beautiful bottom feathering gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-50/60 via-slate-50/25 dark:from-slate-950/60 dark:via-slate-950/25 to-transparent z-15 pointer-events-none transition-colors duration-300"></div>
      </section>

      <section className="relative z-20 pt-16 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Archive Header & Compact Filter Dropdown on the Right */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-16 pb-6 border-b border-slate-200 dark:border-slate-800/60 dark:border-slate-800">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Newspaper className="h-6 w-6 text-blue-600 dark:text-blue-455" />
                News & Events Archive
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Explore our company milestones, updates, and events over the years.
              </p>
            </div>

            {/* Smaller, Compact Year Filter on the Right */}
            <div className="relative w-full sm:w-44 z-30 self-end sm:self-center">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between gap-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-sm hover:border-blue-400 hover:shadow transition-all duration-300 cursor-pointer focus:outline-none"
              >
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5 text-blue-600 dark:text-blue-455" />
                  {selectedYear === 'All' ? 'All Years' : `Year: ${selectedYear}`}
                </span>
                <ChevronDown className={`h-3 w-3 text-slate-500 dark:text-slate-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsDropdownOpen(false)}
                    />

                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 left-0 mt-1 z-50 bg-white dark:bg-slate-950/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 dark:border-slate-800 rounded-lg shadow-lg py-1 max-h-56 overflow-y-auto focus:outline-none"
                    >
                      {years.map((year) => (
                        <li key={year}>
                          <button
                            onClick={() => {
                              setSelectedYear(year);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3 py-1.5 text-xs font-bold transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 flex items-center justify-between cursor-pointer ${selectedYear === year
                                ? 'bg-blue-600/10 text-blue-900 dark:text-blue-200 font-extrabold'
                                : 'text-slate-800 dark:text-slate-300'
                              }`}
                          >
                            <span>{year === 'All' ? 'All Years' : year}</span>
                            {selectedYear === year && (
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                            )}
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-slate-950/70 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800/80 dark:border-slate-800 shadow-xl max-w-xl mx-auto my-12 w-full">
              <div className="inline-flex p-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 dark:text-slate-400 mb-4">
                <Newspaper className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">No News or Events Found</h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2">There are no updates archived for the year {selectedYear}.</p>
              <button
                onClick={() => setSelectedYear('All')}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition cursor-pointer"
              >
                View All Years
              </button>
            </div>
          ) : (
            <div className="space-y-24">
              {filteredItems.map((item, index) => {
                const isImageRight = index % 2 === 0;
                const isEven = !isImageRight;
                const [firstParagraph, ...otherParagraphs] = item.excerpt.split('\n\n');
                const remainingText = otherParagraphs.join('\n\n');

                return (
                  <motion.div 
                    key={item.id} 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                  >

                    {/* Top Row: Slideshow & First Paragraph side-by-side */}
                    <div className="grid grid-cols-1 lg:grid-cols-[600px_1fr] gap-8 lg:items-center items-start">

                      {/* Column for Slideshow (even: left, odd: right) */}
                      <aside className={`w-full max-w-[600px] mr-auto lg:mr-0 z-10 space-y-6 ${isEven ? '' : 'lg:order-last'}`}>
                        {/* Specific Event's Slideshow */}
                        {item.images && item.images.length > 0 && (
                          <div className="relative z-10 pt-2">
                            <EventSlideshow images={item.images} />
                          </div>
                        )}
                      </aside>

                      {/* Column for Event title and first paragraph (even: right, odd: left) */}
                      <div className={`space-y-6 z-10 pt-2 lg:pl-4 ${isEven ? '' : 'lg:order-first lg:pr-8 lg:pl-0'}`}>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                          <span className="rounded-full bg-blue-50 dark:bg-blue-955/40 px-3 py-1 font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wide text-xs">
                            {item.category}
                          </span>
                          <span className="inline-flex items-center gap-2 font-semibold">
                            <CalendarDays className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            {item.date}
                          </span>
                        </div>

                        <Editable id={`news.${item.id}.title`} defaultContent={item.title}>
                          <h2 className="text-3xl font-extrabold leading-tight text-blue-700 dark:text-blue-400 sm:text-4xl tracking-tight">
                            {item.title}
                          </h2>
                        </Editable>

                        <Editable id={`news.${item.id}.first_paragraph`} type="textarea" defaultContent={firstParagraph}>
                          <p className="text-base sm:text-lg leading-relaxed text-slate-750 dark:text-slate-300 font-normal whitespace-pre-line">
                            {firstParagraph}
                          </p>
                        </Editable>
                      </div>

                    </div>

                    {/* Bottom Row: Remaining Paragraphs stretching full width */}
                    {remainingText && (
                      <div className="relative z-10 mt-8 max-w-5xl">
                        <Editable id={`news.${item.id}.remaining_text`} type="textarea" defaultContent={remainingText}>
                          <p className="text-base sm:text-lg leading-relaxed text-slate-750 dark:text-slate-300 font-normal whitespace-pre-line">
                            {remainingText}
                          </p>
                        </Editable>
                      </div>
                    )}

                    {/* Light blue gradient divider line at the end of the event */}
                    {index < filteredItems.length - 1 && (
                      <div className="pt-16 pb-4">
                        <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"></div>
                      </div>
                    )}

                  </motion.div>
                );
              })}
            </div>
          )}


        </div>
      </section>
    </div>
  );
}

