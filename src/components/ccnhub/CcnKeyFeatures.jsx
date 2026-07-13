"use client";

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { ccnFeaturesData } from '../../data/ccnHubData';
import Editable from '../Editable';

export default function CcnKeyFeatures() {
  const renderIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8 transition-colors duration-300" /> : null;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center mb-16">
          <Editable id="ccnhub.features.title" defaultContent="Key Features">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h2>
          </Editable>
          <div className="w-24 h-1 bg-slffaBlue mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ccnFeaturesData.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white dark:bg-slate-950 rounded-2xl shadow-sm p-8 border border-slate-100 dark:border-slate-800 transition-all duration-300 relative group overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-slffaBlue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="mb-6 bg-sky-50 w-16 h-16 rounded-xl flex items-center justify-center text-slffaBlue group-hover:scale-110 group-hover:bg-slffaBlue group-hover:text-white transition-all duration-500 shadow-sm border border-sky-100">
                {renderIcon(feature.iconName)}
              </div>
              <Editable id={`ccnhub.features.${index}.title`} defaultContent={feature.title}>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{feature.title}</h3>
              </Editable>
              <ul className="space-y-3 mt-auto">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-5 h-5 text-slffaBlue mr-3 shrink-0 mt-0.5 opacity-80" />
                    <Editable id={`ccnhub.features.${index}.item.${idx}`} defaultContent={item}>
                      <span className="font-medium text-sm leading-relaxed">{item}</span>
                    </Editable>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
