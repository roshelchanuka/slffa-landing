"use client";

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { valueAddedServicesData } from '../../data/servicesData';
import Editable from '../Editable';

export default function ValueAddedGrid({ staggerContainer, fadeInUp }) {
  const renderIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent className="h-7 w-7 text-blue-600 dark:text-blue-400" /> : null;
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 dark:bg-slate-900 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-100 dark:bg-slate-800 rounded-full blur-3xl opacity-60 -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <Editable id="services.valueadded.badge" defaultContent="What We Offer">
            <span className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest block mb-2">What We Offer</span>
          </Editable>
          <Editable id="services.valueadded.title" defaultContent="Value-Added Airside Import Services">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Value-Added Airside Import Services
            </h2>
          </Editable>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mt-4 mb-6"></div>
          <Editable id="services.valueadded.description" type="textarea" defaultContent="We leverage our unique location directly airside at Bandaranaike International Airport to offer our partners unmatched time and cost benefits.">
            <p className="text-slate-660 text-lg">
              We leverage our unique location directly airside at Bandaranaike International Airport to offer our partners unmatched time and cost benefits.
            </p>
          </Editable>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {valueAddedServicesData.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)" }}
              className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 p-8 shadow-sm transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="mb-6 bg-blue-50 dark:bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {renderIcon(service.iconName)}
              </div>
              <Editable id={`services.valueadded.${index}.title`} defaultContent={service.title}>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:text-blue-400 transition-colors">
                  {service.title}
                </h3>
              </Editable>
              <Editable id={`services.valueadded.${index}.desc`} type="textarea" defaultContent={service.description}>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Editable>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
