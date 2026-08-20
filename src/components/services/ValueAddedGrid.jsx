"use client";

import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { valueAddedServicesData } from '../../data/servicesData';
import Editable from '../Editable';

const facilitiesBg = 'https://i.ibb.co/N8HYxtK/Chat-GPT-Image-Jun-4-2026-at-03-26-33-PM.png';

export default function ValueAddedGrid({ staggerContainer, fadeInUp }) {
  const renderIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent className="h-7 w-7 text-sky-400" /> : null;
  };

  return (
    <section className="py-24 text-white relative overflow-hidden">
      {/* Background Image spanning the entire section */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url('${facilitiesBg}')` }}
      ></div>
      
      {/* Lighter sky blue shadow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-950/80 via-sky-900/60 to-sky-500/20 z-0"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-300/30 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <Editable id="services.valueadded.badge" defaultContent="What We Offer">
            <span className="text-sky-200 font-bold text-sm uppercase tracking-widest block mb-2 drop-shadow-md">What We Offer</span>
          </Editable>
          <Editable id="services.valueadded.title" defaultContent="Value-Added Airside Import Services">
            <h2 className="text-4xl font-extrabold text-white leading-tight drop-shadow-lg">
              Value-Added Airside Import Services
            </h2>
          </Editable>
          <div className="w-20 h-1.5 bg-sky-400 mx-auto rounded-full mt-4 mb-6 shadow-sm"></div>
          <Editable id="services.valueadded.description" type="textarea" defaultContent="We leverage our unique location directly airside at Bandaranaike International Airport to offer our partners unmatched time and cost benefits.">
            <p className="text-sky-50 text-lg font-light drop-shadow-md font-medium">
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
              whileHover={{ y: -8, border: "1px solid rgba(14, 165, 233, 0.6)", backgroundColor: "rgba(15, 23, 42, 0.55)", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-slate-900/40 backdrop-blur-md border border-slate-700/40 p-8 rounded-2xl transition-all duration-300 shadow-xl relative group overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              <div className="mb-6 bg-slate-800/60 w-14 h-14 rounded-xl flex items-center justify-center text-sky-300 border border-sky-400/30 shadow-inner group-hover:bg-sky-400 group-hover:text-slate-900 transition-all duration-500">
                {renderIcon(service.iconName)}
              </div>
              <Editable id={`services.valueadded.${index}.title`} defaultContent={service.title}>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide drop-shadow-sm group-hover:text-sky-300 transition-colors">
                  {service.title}
                </h3>
              </Editable>
              <Editable id={`services.valueadded.${index}.desc`} type="textarea" defaultContent={service.description}>
                <p className="text-sky-50/90 text-sm leading-relaxed font-light drop-shadow-sm">
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

