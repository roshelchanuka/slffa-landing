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
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12"
          >
            <div className="lg:w-2/3">
              <Editable id="services.shelter.badge" defaultContent="Operational Upgrade Completed">
                <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 dark:text-emerald-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-200">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 inline" /> Operational Upgrade Completed
                </div>
              </Editable>
              
              <Editable id="services.shelter.title" defaultContent="Announcing Our Brand New Shelter Expansion">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                  Announcing Our Brand New Shelter Expansion
                </h2>
              </Editable>
              
              <Editable id="services.shelter.desc1" type="textarea" defaultContent="We are delighted to announce that the construction of our highly anticipated terminal shelter covering 3,200 Sq. Ft. is now fully completed and operational.">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6 font-medium">
                  We are delighted to announce that the construction of our highly anticipated terminal shelter covering <span className="text-blue-600 dark:text-blue-400 font-bold">3,200 Sq. Ft.</span> is now fully completed and operational.
                </p>
              </Editable>
              
              <Editable id="services.shelter.desc2" type="textarea" defaultContent="This state-of-the-art expansion enhances our handling speed and safety standards. With this new shelter, we are now capable of holding up to 16 loaded pallets (ULDs), protecting your valuable consignments entirely from water damage while the breakdown of received import cargo is actively in progress.">
                <p className="text-slate-650 leading-relaxed m-0 text-lg">
                  This state-of-the-art expansion enhances our handling speed and safety standards. With this new shelter, we are now capable of holding up to <span className="text-slate-900 dark:text-white font-semibold">16 loaded pallets (ULDs)</span>, protecting your valuable consignments entirely from water damage while the breakdown of received import cargo is actively in progress.
                </p>
              </Editable>
            </div>

            <div className="lg:w-1/3 flex flex-col gap-6 w-full">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 text-blue-600 dark:text-blue-400 rounded-xl p-4">
                  <Maximize2 className="h-8 w-8" />
                </div>
                <div>
                  <Editable id="services.shelter.stat1.val" defaultContent="3,200 Sq. Ft.">
                    <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">3,200 Sq. Ft.</div>
                  </Editable>
                  <Editable id="services.shelter.stat1.lbl" defaultContent="Total Shelter Coverage">
                    <div className="text-sm text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider mt-1">Total Shelter Coverage</div>
                  </Editable>
                </div>
              </div>
              <div className="w-full h-px bg-slate-200"></div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 text-blue-600 dark:text-blue-400 rounded-xl p-4">
                  <Package className="h-8 w-8" />
                </div>
                <div>
                  <Editable id="services.shelter.stat2.val" defaultContent="16 Loaded ULDs">
                    <div className="text-2xl font-bold text-slate-800 dark:text-slate-200">16 Loaded ULDs</div>
                  </Editable>
                  <Editable id="services.shelter.stat2.lbl" defaultContent="Waterproof Storage">
                    <div className="text-sm text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider mt-1">Waterproof Storage</div>
                  </Editable>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Interactive Stats Card (Full Width with Badge) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
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
              <Editable id="services.trust.title" defaultContent="31 Years of Exceptional Service...">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight drop-shadow-sm">
                  31 Years of Exceptional Service...
                </h3>
              </Editable>
              <div className="w-24 h-1.5 bg-blue-50 dark:bg-slate-9000 rounded-full mb-8 shadow-sm"></div>
              
              <Editable id="services.trust.description" type="textarea" defaultContent="With a dedicated, efficient, and certified workforce, ample airside warehouse space, and a highly comprehensive web-based warehouse management system, SLFFA Cargo Services has been providing excellent service for its customers for nearly two decades.">
                <p className="text-slate-200 leading-relaxed font-light text-lg sm:text-xl lg:text-2xl mb-12 max-w-3xl drop-shadow-sm">
                  With a dedicated, efficient, and certified workforce, ample airside warehouse space, and a highly comprehensive web-based warehouse management system, SLFFA Cargo Services has been providing excellent service for its customers for nearly two decades.
                </p>
              </Editable>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800/90 transition-colors shadow-md flex-1 max-w-[200px]">
                  <div className="flex items-center justify-between mb-2">
                    <Activity className="h-5 w-5 text-blue-400" />
                  </div>
                  <Editable id="services.trust.stat1.val" defaultContent="1994">
                    <div className="text-3xl lg:text-4xl font-extrabold text-blue-400">1994</div>
                  </Editable>
                  <Editable id="services.trust.stat1.lbl" defaultContent="Established">
                    <div className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-2">Established</div>
                  </Editable>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800/90 transition-colors shadow-md flex-1 max-w-[200px]">
                  <div className="flex items-center justify-between mb-2">
                    <CheckCircle className="h-5 w-5 text-blue-400" />
                  </div>
                  <Editable id="services.trust.stat2.val" defaultContent="100%">
                    <div className="text-3xl lg:text-4xl font-extrabold text-blue-400">100%</div>
                  </Editable>
                  <Editable id="services.trust.stat2.lbl" defaultContent="Accuracy">
                    <div className="text-xs text-slate-400 uppercase tracking-widest font-bold mt-2">Accuracy</div>
                  </Editable>
                </div>
              </div>
            </div>

            {/* Spacer for desktop to push text left and keep badge visible on the right */}
            <div className="hidden lg:block lg:w-2/5"></div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
