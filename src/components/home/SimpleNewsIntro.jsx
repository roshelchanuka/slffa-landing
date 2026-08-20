"use client";

import Link from 'next/link';
import { Newspaper, ArrowRight } from 'lucide-react';
import Editable from '../Editable';

export default function SimpleNewsIntro() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <Newspaper className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <span className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest block">
            Stay Updated
          </span>
        </div>
        
        <Editable id="home.simplenews.title" defaultContent="Latest News & Events">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            Latest News & Events
          </h2>
        </Editable>

        <Editable id="home.simplenews.description" type="textarea" defaultContent="Stay up-to-date with the latest operational announcements, facility upgrades, industry milestones, and association news from SLFFA Cargo Services.">
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg mb-10 leading-relaxed">
            Stay up-to-date with the latest operational announcements, facility upgrades, industry milestones, and association news from SLFFA Cargo Services.
          </p>
        </Editable>

        <Link 
          href="/news"
          className="group inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-8 py-4 rounded-xl transition-all duration-300 shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 cursor-pointer"
        >
          <Editable id="home.simplenews.button" defaultContent="Explore All News">
            <span>Explore All News</span>
          </Editable>
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1.5 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
