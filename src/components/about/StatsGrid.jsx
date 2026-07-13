"use client";

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { statsData, ground4 } from '../../data/aboutData';
import Editable from '../Editable';

export default function StatsGrid() {
  const renderIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent className="h-6 w-6 text-blue-500" /> : null;
  };

  return (
    <section className="py-24 relative overflow-hidden text-white bg-slffaBlue">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('/api/imageProxy?id=1Urk6SxnI7IOD2IYU1Lbo-y9K8WaruGYm')` }}
      ></div>
      
      {/* Rich sky blue overlay shadow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slffaBlue/75 via-slffaBlue/65 to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-blue-400 font-bold text-sm uppercase tracking-widest">Strength in Numbers</span>
          <Editable id="about.stats.title" defaultContent="Our Track Record Speaks for Itself">
            <h2 className="text-4xl font-extrabold mt-3">Our Track Record Speaks for Itself</h2>
          </Editable>
          <div className="w-20 h-1 bg-blue-50 dark:bg-slate-9000 mx-auto rounded-full mt-4 mb-6"></div>
          <Editable id="about.stats.subtitle" type="textarea" defaultContent="Through strategic terminal optimization and robust logistics standards, we guarantee speed, security, and personalized care.">
            <p className="text-slate-400 text-lg">
              Through strategic terminal optimization and robust logistics standards, we guarantee speed, security, and personalized care.
            </p>
          </Editable>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="bg-slate-700/50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                {renderIcon(stat.iconName)}
              </div>
              <Editable id={`about.stat_${index}.value`} defaultContent={stat.value}>
                <h3 className="text-3xl font-extrabold text-blue-400 mb-1">{stat.value}</h3>
              </Editable>
              <Editable id={`about.stat_${index}.label`} defaultContent={stat.label}>
                <h4 className="text-lg font-bold text-slate-100 mb-3">{stat.label}</h4>
              </Editable>
              <Editable id={`about.stat_${index}.description`} type="textarea" defaultContent={stat.description}>
                <p className="text-slate-400 leading-relaxed text-sm">{stat.description}</p>
              </Editable>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
