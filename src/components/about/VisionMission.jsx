"use client";

import { motion } from 'framer-motion';
import Editable from '../Editable';

export default function VisionMission() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative z-30 overflow-hidden border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Vision Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Editable id="about.vision.title" defaultContent="Vision">
              <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Vision</h3>
            </Editable>
            <Editable id="about.vision.text" type="textarea" defaultContent="“To set the stands for service excellence in air cargo handling and warehouse solution through total commitment to quality management and be the leader in Srilanka in logistics management for Air & Ocean freight.”">
              <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                “To set the stands for service excellence in air cargo handling and warehouse solution through total commitment to quality management and be the leader in Srilanka in logistics management for Air & Ocean freight.”
              </p>
            </Editable>
          </motion.div>

          {/* Mission Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <Editable id="about.mission.title" defaultContent="Mission">
              <h3 className="text-lg font-bold text-sky-600 uppercase tracking-widest">Mission</h3>
            </Editable>
            <Editable id="about.mission.text" type="textarea" defaultContent="“Strengthening our customer relationship to meet their expectations by delivering consistent and innovative service all the time.”">
              <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                “Strengthening our customer relationship to meet their expectations by delivering consistent and innovative service all the time.”
              </p>
            </Editable>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
