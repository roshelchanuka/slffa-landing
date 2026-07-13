"use client";

import { motion } from 'framer-motion';
import { Thermometer, Shield } from 'lucide-react';
import { tempRoomsData } from '../../data/coolRoomsData';
import Editable from '../Editable';

export default function ChambersGrid() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 relative z-30 border-y border-slate-100 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-100 dark:bg-slate-900/10 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest block mb-2">Chamber Specifications</span>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Six Dedicated Multi-Zone Chambers
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mt-4 mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Our upgraded facilities operate across three separate temperature ranges to suit different types of climate-sensitive cargo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tempRoomsData.map((room, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`bg-white dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-850 p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between overflow-hidden ${room.glowColor}`}
            >
              {/* Temperature Ring Marker */}
              <div className={`absolute top-0 left-0 w-full h-[4px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${room.accentColor.replace('border', 'bg')}`}></div>
              
              <div>
                <div className="flex justify-between items-center mb-6">
                  <Editable id={`coolrooms.tempRoom_${index}.useCase`} defaultContent={room.useCase}>
                    <span className={`text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm ${room.badgeColor}`}>
                      {room.useCase}
                    </span>
                  </Editable>
                  <Thermometer className="h-6 w-6 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                
                <div className="mb-4">
                  <Editable id={`coolrooms.tempRoom_${index}.range`} defaultContent={room.range}>
                    <h3 className="text-5xl font-black text-slate-900 dark:text-white mb-2 font-mono">
                      {room.range}
                    </h3>
                  </Editable>
                  <Editable id={`coolrooms.tempRoom_${index}.rooms`} defaultContent={room.rooms}>
                    <h4 className="text-lg font-bold text-slate-700 dark:text-slate-300">
                      {room.rooms}
                    </h4>
                  </Editable>
                </div>
                
                <Editable id={`coolrooms.tempRoom_${index}.description`} type="textarea" defaultContent={room.description}>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8">
                    {room.description}
                  </p>
                </Editable>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800 pt-6 flex items-center text-xs font-bold text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <span>Guaranteed Chamber Stability</span>
                <Shield className="h-4 w-4 ml-2" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
