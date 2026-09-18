"use client";

import { motion } from 'framer-motion';
import { Maximize2, Package, ShieldCheck, Activity, CheckCircle } from 'lucide-react';
import { yearsOfServiceImg } from '../../data/servicesData';
import Editable from '../Editable';

export default function ShelterExpansion() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col gap-12">
          {/* Top Content Card */}


          {/* Bottom Interactive Stats Card (Full Width with Badge) */}
          <motion.div 
            initial={{ opacity: 1, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full bg-slate-800 text-white rounded-3xl p-8 sm:p-12 lg:p-20 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden group gap-12 min-h-[500px]"
            style={{ boxShadow: '0 25px 65px -15px rgba(14, 165, 233, 0.12)' }}
          >
            {/* The Badge Image Background - placed on the right, no crop */}
            <Editable id="services.trust.image" type="image" defaultContent={yearsOfServiceImg}>
              <div 
                className="absolute inset-0 z-0 opacity-100 transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                style={{ 
                  backgroundImage: `url('${yearsOfServiceImg}')`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'right center',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
            </Editable>
            
            {/* Dark overlay to ensure text is readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-800/80 to-transparent z-0 pointer-events-none"></div>
            
            {/* Watermark decors */}
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl z-0 pointer-events-none"></div>
            
            <div className="relative z-10 lg:w-3/5 flex flex-col">
              <Editable id="services.trust.badge" defaultContent="Decades of Trust">
                <span className="text-blue-400 font-bold text-sm uppercase tracking-widest block mb-4">Decades of Trust</span>
              </Editable>
              <Editable id="services.trust.title" defaultContent="32 Years of Exceptional Service...">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight drop-shadow-sm">
                  32 Years of Exceptional Service...
                </h3>
              </Editable>
              <div className="w-24 h-1.5 bg-blue-50 dark:bg-slate-9000 rounded-full mb-8 shadow-sm"></div>
              
              <Editable id="services.trust.description" type="textarea" defaultContent="With a dedicated, efficient, and certified workforce, ample airside warehouse space, and a highly comprehensive web-based warehouse management system, SLFFA Cargo Services has been providing excellent service for its customers for nearly over three.">
                <p className="text-slate-200 leading-relaxed font-light text-lg sm:text-xl lg:text-2xl mb-12 max-w-3xl drop-shadow-sm">
                  With a dedicated, efficient, and certified workforce, ample airside warehouse space, and a highly comprehensive web-based warehouse management system, SLFFA Cargo Services has been providing excellent service for its customers for nearly over three.
                </p>
              </Editable>


            </div>

            {/* Spacer for desktop to push text left and keep badge visible on the right */}
            <div className="hidden lg:block lg:w-2/5"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
