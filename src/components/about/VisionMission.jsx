"use client";

import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import Editable from '../Editable';

export default function VisionMission() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative z-30 overflow-hidden border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-stretch">
          
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            {/* Very subtle top border line instead of thick gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600"></div>
            
            {/* Icon and Title */}
            <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="bg-amber-50/50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-100 dark:border-amber-900/30">
                <Eye className="h-6 w-6 text-amber-500 dark:text-amber-400" />
              </div>
              <Editable id="about.vision.title" defaultContent="Our Vision">
                <h3 className="text-xl font-bold text-amber-600 dark:text-amber-400 tracking-wide uppercase">Our Vision</h3>
              </Editable>
            </div>

            <Editable id="about.vision.text" type="textarea" defaultContent="“To set the standards for service excellence in air cargo handling and warehouse solutions through total commitment to quality management and be the leader in Sri Lanka in logistics management for Air & Ocean freight.”">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal relative z-10 flex-grow text-justify">
                "To set the standards for service excellence in air cargo handling and warehouse solutions through total commitment to quality management and be the leader in Sri Lanka in logistics management for Air & Ocean freight."
              </p>
            </Editable>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            {/* Very subtle top border line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-sky-600"></div>
            
            {/* Icon and Title */}
            <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div className="bg-amber-50/50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-100 dark:border-amber-900/30">
                <Target className="h-6 w-6 text-amber-500 dark:text-amber-400" />
              </div>
              <Editable id="about.mission.title" defaultContent="Our Mission">
                <h3 className="text-xl font-bold text-amber-600 dark:text-amber-400 tracking-wide uppercase">Our Mission</h3>
              </Editable>
            </div>

            <Editable id="about.mission.text" type="textarea" defaultContent="“Strengthening our customer relationships to meet their expectations by delivering consistent and innovative services at all times.”">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal relative z-10 flex-grow text-justify">
                "Strengthening our customer relationships to meet their expectations by delivering consistent and innovative services at all times."
              </p>
            </Editable>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
