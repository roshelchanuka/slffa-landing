"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Editable from '../Editable';

export default function TradingConditions({ containerVariants, itemVariants }) {
  return (
    <motion.div
      id="standard-trading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="mb-24"
    >
      <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-12 border-b border-slate-200 dark:border-slate-800 pb-8 max-w-5xl mx-auto">
        <img src="https://res.cloudinary.com/n1jpvnbo/image/upload/f_auto,q_auto/v1785384434/62b64d45-1a8c-4c87-95a6-a1b446512078_pcjqor.png" alt="SLFFA CARGO SERVICES LTD Logo" className="h-28 w-auto mb-6 object-contain" />
        <Editable id="tools.stc.subtitle" defaultContent="SLFFA CARGO SERVICES LTD">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 tracking-wide uppercase">
            SLFFA CARGO SERVICES LTD
          </h2>
        </Editable>
        <Editable id="tools.stc.title" defaultContent="Standard Trading Conditions">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400 mt-2">
            Standard Trading Conditions
          </h1>
        </Editable>
      </motion.div>

      <div className="text-slate-700 dark:text-slate-300 max-w-5xl mx-auto px-4 sm:px-8">
        {/* Conditions text removed as requested */}
      </div>
    </motion.div>
  );
}
