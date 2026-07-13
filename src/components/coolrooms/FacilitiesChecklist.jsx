"use client";

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { facilitiesChecklistData } from '../../data/coolRoomsData';
import Editable from '../Editable';

export default function FacilitiesChecklist({ staggerContainer, fadeInUp }) {
  const renderIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" /> : null;
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest block mb-2">Core Infrastructure Advantages</span>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Features Offered By Our Cool Storage Rooms
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mt-4 mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Structured to satisfy and maintain high global logistics compliance standards, providing peace of mind for valuable imports.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {facilitiesChecklistData.map((item) => (
            <motion.div 
              key={item.id}
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)" }}
              className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 p-6 shadow-sm transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="mb-4 bg-blue-50 dark:bg-slate-900 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  {renderIcon(item.iconName)}
                </div>
                <Editable id={`coolrooms.facility_${item.id}.title`} defaultContent={item.title}>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 dark:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                </Editable>
                <Editable id={`coolrooms.facility_${item.id}.description`} type="textarea" defaultContent={item.description}>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </Editable>
              </div>
              
              <div className="text-[10px] font-black text-slate-350 uppercase tracking-widest mt-6">
                Feature 0{item.id}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
