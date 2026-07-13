"use client";

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { physicalFacilitiesData } from '../../data/servicesData';
import Editable from '../Editable';

const facilitiesBg = '/api/imageProxy?id=1bUQ3bnUrHTKiAAicd1G5c6KgUO3xB19r';

export default function FacilitiesGrid() {
  const renderIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent className="h-6 w-6 text-sky-400" /> : null;
  };

  return (
    <section className="py-24 text-white relative overflow-hidden group">
      {/* Background Image spanning the entire section */}
      <Editable id="services.facilities.bg" type="image" defaultContent={facilitiesBg}>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" 
          style={{ backgroundImage: `url('${facilitiesBg}')` }}
        ></div>
      </Editable>
      
      {/* Lighter sky blue shadow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-950/60 via-sky-900/40 to-sky-500/10 z-0"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-300/30 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <Editable id="services.facilities.badge" defaultContent="Our Infrastructure">
            <span className="text-sky-200 font-bold text-sm uppercase tracking-widest block mb-2 drop-shadow-md">Our Infrastructure</span>
          </Editable>
          <Editable id="services.facilities.title" defaultContent="State-of-the-Art Cargo Facilities">
            <h2 className="text-4xl font-extrabold text-white leading-tight drop-shadow-lg">
              State-of-the-Art Cargo Facilities
            </h2>
          </Editable>
          <div className="w-20 h-1.5 bg-sky-400 mx-auto rounded-full mt-4 mb-6 shadow-sm"></div>
          <Editable id="services.facilities.description" type="textarea" defaultContent="Operating secure and heavily managed storage spaces structured to handle highly complex, vulnerable, and time-critical consignments.">
            <p className="text-sky-50 text-lg font-light drop-shadow-md font-medium">
              Operating secure and heavily managed storage spaces structured to handle highly complex, vulnerable, and time-critical consignments.
            </p>
          </Editable>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {physicalFacilitiesData.map((facility, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, border: "1px solid rgba(14, 165, 233, 0.6)", backgroundColor: "rgba(15, 23, 42, 0.55)" }}
              className="bg-slate-900/40 backdrop-blur-md border border-slate-700/40 p-8 rounded-2xl transition-all duration-300 shadow-xl"
            >
              <div className="bg-slate-800/60 text-sky-300 w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-sky-400/30 shadow-inner">
                {renderIcon(facility.iconName)}
              </div>
              <Editable id={`services.facilities.${index}.title`} defaultContent={facility.title}>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide drop-shadow-sm">{facility.title}</h3>
              </Editable>
              <Editable id={`services.facilities.${index}.desc`} type="textarea" defaultContent={facility.description}>
                <p className="text-sky-50/90 text-sm leading-relaxed font-light drop-shadow-sm">{facility.description}</p>
              </Editable>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
