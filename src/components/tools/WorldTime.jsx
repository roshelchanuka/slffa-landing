"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Editable from '../Editable';

const logoWorldTime = 'https://res.cloudinary.com/n1jpvnbo/image/upload/f_auto,q_auto/v1785401263/mainlogo6a_q7qbat.png';

export default function WorldTime({ containerVariants, itemVariants }) {
  return (
    <motion.div
      id="world-time"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="mb-24"
    >
      <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-12 border-b border-slate-200 dark:border-slate-800 pb-8 w-full mx-auto px-3 min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">
        <img src={logoWorldTime} alt="World Time Logo" className="h-28 w-auto mb-6 object-contain" />
        <Editable id="tools.worldtime.subtitle" defaultContent="Utility Tool">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 tracking-wide uppercase">
            Utility Tool
          </h2>
        </Editable>
        <Editable id="tools.worldtime.title" defaultContent="World Time">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400 mt-2">
            World Time
          </h1>
        </Editable>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="w-full mx-auto px-3 min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]"
      >
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
          <div className="p-8 md:p-12 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>

            <Editable id="tools.worldtime.description" type="textarea" defaultContent="A vital synchronization resource tracking global time zones, city times, and regional calendar standards for international flight scheduling and global supply chain tracking.">
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl mb-8">
                A vital synchronization resource tracking global time zones, city times, and regional calendar standards for international flight scheduling and global supply chain tracking.
              </p>
            </Editable>

            <a
              href="https://www.timeanddate.com/worldclock/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Open World Clock
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
