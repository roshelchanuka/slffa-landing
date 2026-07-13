"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Wrench } from 'lucide-react';
import { imgAiCoolroom } from '../../data/coolRoomsData';
import Editable from '../Editable';

export default function CoolRoomsIntro() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 relative z-30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-955/40 text-blue-700 dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200 dark:border-blue-900/30">
                <ShieldCheck className="h-4 w-4 text-blue-600 dark:text-blue-455" /> Facility Upgraded & Expanded
              </div>
              
              <Editable id="coolrooms.thermal.title" defaultContent="State-of-the-Art Thermal Storage Solutions">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  State-of-the-Art Thermal Storage Solutions
                </h2>
              </Editable>
              <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-4"></div>
              
              <Editable id="coolrooms.thermal.description_1" type="textarea" defaultContent="We are pleased to inform you that we have recently increased and upgraded our cool room facilities to provide more efficient and reliable service to our valued customers.">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  We are pleased to inform you that we have recently increased and upgraded our cool room facilities to provide more efficient and reliable service to our valued customers.
                </p>
              </Editable>
              
              <Editable id="coolrooms.thermal.description_2" type="textarea" defaultContent="You may now proceed with transferring your temperature-controlled cargo to our warehouse with absolute confidence. Our upgraded thermal units ensure seamless environmental regulation for import pharmaceutical shipments, sensitive high-value electronics, retail cosmetics, and perishables.">
                <p className="text-slate-650 dark:text-slate-350 leading-relaxed">
                  You may now proceed with transferring your temperature-controlled cargo to our warehouse with absolute confidence. Our upgraded thermal units ensure seamless environmental regulation for import pharmaceutical shipments, sensitive high-value electronics, retail cosmetics, and perishables.
                </p>
              </Editable>
 
              {/* ICEMAN Maintenance highlight card */}
              <div className="bg-blue-50 dark:bg-blue-955/20 border-l-4 border-blue-600 p-6 rounded-r-2xl shadow-sm mt-6">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center">
                  <Wrench className="text-blue-600 dark:text-blue-400 h-5 w-5 mr-2 animate-pulse" /> ICEMAN Technologies SLA Protection
                </h4>
                <p className="text-slate-655 dark:text-slate-300 text-sm leading-relaxed">
                  To maintain an uninterrupted cold chain, we have entered into an elite maintenance service agreement with <strong>ICEMAN Technologies (Kandana)</strong>, whose dedicated refrigeration engineering team is guaranteed to arrive at our Katunayake terminal within approximately <strong>4 hours</strong> in the event of any service requirement.
                </p>
              </div>
            </motion.div>
          </div>
 
          {/* Visual Column (Side Image Box) */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] lg:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 relative group bg-slate-100 dark:bg-slate-900"
            >
              <Editable id="coolrooms.thermal.image" type="image" defaultContent={imgAiCoolroom}>
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ backgroundImage: `url('${imgAiCoolroom}')` }}
                ></div>
              </Editable>
              <div className="absolute inset-0 bg-slate-955/15 dark:bg-slate-955/30 group-hover:bg-transparent transition-colors duration-300"></div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
