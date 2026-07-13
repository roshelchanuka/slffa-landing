"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Newspaper, ArrowRight, Calendar } from 'lucide-react';
import { newsItems } from '../../data/newsData';

export default function NewsEvents() {
  const [currentNewsIdx, setCurrentNewsIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNewsIdx((prev) => (prev + 1) % Math.min(newsItems.length, 4));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden relative border-b border-slate-200 dark:border-slate-800/50 dark:border-slate-800 transition-colors duration-300">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl opacity-60 -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-100/30 dark:bg-sky-900/10 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-2">
              <Newspaper className="h-5 w-5 text-blue-600 dark:text-blue-400 animate-pulse" />
              <span className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest block">
                Stay Updated
              </span>
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Latest News & Events
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-4"></div>
          </div>
          <div>
            <Link 
              href="/news"
              className="group inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 cursor-pointer"
            >
              Explore All News
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Interactive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left: Main Large Featured Card */}
          <div className="lg:col-span-2">
            <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/60 dark:border-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group/featured flex flex-col h-full">
              {/* Large Cover Image with transition */}
              <div className="aspect-[16/9] w-full bg-slate-955 overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentNewsIdx}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${newsItems[currentNewsIdx]?.image}')` }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-955/70 via-slate-955/20 to-transparent z-10"></div>
                <span className="absolute top-4 left-4 z-20 bg-blue-600 text-white text-xs font-bold uppercase px-3.5 py-1 rounded-full tracking-wider shadow-md">
                  {newsItems[currentNewsIdx]?.category}
                </span>
              </div>

              {/* Content Area */}
              <div className="p-8 md:p-10 flex flex-col justify-between flex-grow text-left space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-bold tracking-wider">
                    <Calendar className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                    <span>{newsItems[currentNewsIdx]?.date}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white group-hover/featured:text-blue-600 dark:group-hover/featured:text-blue-400 transition-colors leading-tight">
                    {newsItems[currentNewsIdx]?.title}
                  </h3>

                  <p className="text-slate-655 dark:text-slate-300 text-sm md:text-base leading-relaxed line-clamp-3 font-normal whitespace-pre-line">
                    {newsItems[currentNewsIdx]?.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/60 dark:border-slate-800 flex items-center justify-between">
                  <Link
                    href="/news"
                    className="inline-flex items-center justify-center bg-blue-50 dark:bg-blue-955/40 hover:bg-blue-600 text-blue-600 dark:text-blue-400 hover:text-white dark:hover:text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-300 gap-1.5 cursor-pointer shadow-sm"
                  >
                    Read Full Story
                    <ArrowRight className="h-4 w-4 transform group-hover/featured:translate-x-1.5 transition-transform" />
                  </Link>

                  {/* Auto-Slide Progress Dots */}
                  <div className="flex space-x-2">
                    {newsItems.slice(0, 4).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentNewsIdx(idx)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          currentNewsIdx === idx ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Sidebar selector containing the other 3 items */}
          <div className="lg:col-span-1 space-y-4">
            <h4 className="text-slate-900 dark:text-white font-extrabold text-base text-left tracking-wider uppercase mb-2">
              Recent Updates
            </h4>
            <div className="space-y-4">
              {newsItems.slice(0, 4).map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => setCurrentNewsIdx(idx)}
                  className={`p-4 bg-white dark:bg-slate-900 border rounded-2xl cursor-pointer flex gap-4 transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md ${
                    currentNewsIdx === idx
                      ? 'border-blue-500 ring-2 ring-blue-500/10 shadow-md bg-blue-50 dark:bg-slate-900/10 dark:bg-blue-950/20'
                      : 'border-slate-200 dark:border-slate-800/80 dark:border-slate-800 shadow-sm'
                  }`}
                >
                  {/* Thumbnail Image */}
                  <div
                    className="w-24 h-20 shrink-0 rounded-xl bg-slate-100 dark:bg-slate-800 bg-cover bg-center border border-slate-100 dark:border-slate-800"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  
                  {/* Text Details */}
                  <div className="flex flex-col justify-between text-left min-w-0">
                    <h5 className={`font-bold text-xs leading-snug line-clamp-2 transition-colors ${
                      currentNewsIdx === idx ? 'text-blue-600 dark:text-blue-400' : 'text-slate-800 dark:text-slate-200'
                    }`}>
                      {item.title}
                    </h5>
                    <span className="text-[10px] text-slate-450 dark:text-slate-400 font-bold block mt-1">
                      {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
