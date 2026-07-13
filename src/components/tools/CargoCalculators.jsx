"use client";

import React from 'react';
import { Calculator, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import Editable from '../Editable';

export default function CargoCalculators({ containerVariants, itemVariants }) {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="pt-16 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <Calculator className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        <Editable id="tools.volumetric.title" defaultContent="Volumetric Weight">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Volumetric Weight</h2>
        </Editable>
      </div>
      
      <Editable id="tools.volumetric.description" type="textarea" defaultContent="Large items, light in weight are usually charged according to the space they take up on an aircraft. Shipment cost for such items/consignments are calculated by their volumetric weight, or dimensional weight. The formula below is used for calculating volumetric weights.">
        <motion.p variants={itemVariants} className="text-lg text-slate-700 dark:text-slate-300 mb-12 max-w-4xl leading-relaxed">
          Large items, light in weight are usually charged according to the space they take up on an aircraft. Shipment cost for such items/consignments are calculated by their volumetric weight, or dimensional weight. The formula below is used for calculating volumetric weights.
        </motion.p>
      </Editable>
 
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Calculation 1 */}
        <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-gradient-to-br from-blue-50/60 to-sky-50/40 dark:from-slate-900/60 dark:to-slate-950/40 rounded-3xl p-8 shadow-md border border-blue-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
          <Editable id="tools.volumetric.card1.commodity" defaultContent="1 / Commodity – C1024">
            <div className="bg-blue-50 dark:bg-blue-955/40 text-blue-700 dark:text-blue-400 font-bold px-4 py-2 rounded-xl inline-block mb-6 text-sm tracking-wide">
              1 / Commodity – C1024
            </div>
          </Editable>
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 text-center font-mono text-slate-700 dark:text-slate-300 mb-6 border border-slate-100 dark:border-slate-850 text-lg shadow-inner animate-pulse-slow">
            <Editable id="tools.volumetric.card1.formula" defaultContent="47 × 41 × 37 × 80">
              <div className="border-b border-slate-300 dark:border-slate-700 pb-3 mb-3 font-medium">47 × 41 × 37 × 80</div>
            </Editable>
            <Editable id="tools.volumetric.card1.divisor" defaultContent="7000">
              <div className="font-medium text-slate-500 dark:text-slate-400">7000</div>
            </Editable>
          </div>
          <div className="text-center font-bold text-4xl text-blue-600 dark:text-blue-455 mb-3">
            <Editable id="tools.volumetric.card1.result" defaultContent="= 815">
              <span>= 815</span>
            </Editable>{' '}
            <span className="text-xl text-blue-500 dark:text-blue-455">kg</span>
          </div>
          <Editable id="tools.volumetric.card1.dimensions" defaultContent="Dimensions: (47x41x37)cm | 80 pcs">
            <p className="text-sm text-slate-500 dark:text-slate-400 text-center bg-slate-50 dark:bg-slate-900 py-2 rounded-lg mt-4 border border-slate-100 dark:border-slate-800/10">
              Dimensions: (47x41x37)cm | 80 pcs
            </p>
          </Editable>
        </motion.div>
 
        {/* Calculation 2 */}
        <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-gradient-to-br from-blue-50/60 to-sky-50/40 dark:from-slate-900/60 dark:to-slate-950/40 rounded-3xl p-8 shadow-md border border-blue-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
          <Editable id="tools.volumetric.card2.commodity" defaultContent="2 / Commodity – C1401">
            <div className="bg-emerald-50 dark:bg-emerald-955/40 text-emerald-700 dark:text-emerald-400 font-bold px-4 py-2 rounded-xl inline-block mb-6 text-sm tracking-wide">
              2 / Commodity – C1401
            </div>
          </Editable>
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 text-center font-mono text-slate-700 dark:text-slate-300 mb-6 border border-slate-100 dark:border-slate-850 text-lg shadow-inner animate-pulse-slow">
            <Editable id="tools.volumetric.card2.formula" defaultContent="100 × 45 × 40 × 56">
              <div className="border-b border-slate-300 dark:border-slate-700 pb-3 mb-3 font-medium">100 × 45 × 40 × 56</div>
            </Editable>
            <Editable id="tools.volumetric.card2.divisor" defaultContent="7000">
              <div className="font-medium text-slate-500 dark:text-slate-400">7000</div>
            </Editable>
          </div>
          <div className="text-center font-bold text-4xl text-emerald-600 dark:text-emerald-400 mb-3">
            <Editable id="tools.volumetric.card2.result" defaultContent="= 1440.0">
              <span>= 1440.0</span>
            </Editable>{' '}
            <span className="text-xl text-emerald-500 dark:text-emerald-400">kg</span>
          </div>
          <Editable id="tools.volumetric.card2.dimensions" defaultContent="Dimensions: (100x45x40)cm | 56 pcs">
            <p className="text-sm text-slate-500 dark:text-slate-400 text-center bg-slate-50 dark:bg-slate-900 py-2 rounded-lg mt-4 border border-slate-100 dark:border-slate-800/10">
              Dimensions: (100x45x40)cm | 56 pcs
            </p>
          </Editable>
        </motion.div>
 
        {/* Calculation 3 */}
        <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-gradient-to-br from-blue-50/60 to-sky-50/40 dark:from-slate-900/60 dark:to-slate-950/40 rounded-3xl p-8 shadow-md border border-blue-100 dark:border-slate-800 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-amber-600"></div>
          <Editable id="tools.volumetric.card3.commodity" defaultContent="3 / All Other Cargo">
            <div className="bg-amber-50 dark:bg-amber-955/40 text-amber-700 dark:text-amber-400 font-bold px-4 py-2 rounded-xl inline-block mb-6 text-sm tracking-wide">
              3 / All Other Cargo
            </div>
          </Editable>
          <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 text-center font-mono text-slate-700 dark:text-slate-300 mb-6 border border-slate-100 dark:border-slate-850 text-lg shadow-inner animate-pulse-slow">
            <Editable id="tools.volumetric.card3.formula" defaultContent="60 × 42 × 37 × 60">
              <div className="border-b border-slate-300 dark:border-slate-700 pb-3 mb-3 font-medium">60 × 42 × 37 × 60</div>
            </Editable>
            <Editable id="tools.volumetric.card3.divisor" defaultContent="6000">
              <div className="font-medium text-slate-500 dark:text-slate-400">6000</div>
            </Editable>
          </div>
          <div className="text-center font-bold text-4xl text-amber-600 dark:text-amber-400 mb-3">
            <Editable id="tools.volumetric.card3.result" defaultContent="= 932.5">
              <span>= 932.5</span>
            </Editable>{' '}
            <span className="text-xl text-amber-500 dark:text-amber-400">kg</span>
          </div>
          <Editable id="tools.volumetric.card3.dimensions" defaultContent="Dimensions: (60x42x37)cm | 60 pcs">
            <p className="text-sm text-slate-500 dark:text-slate-400 text-center bg-slate-50 dark:bg-slate-900 py-2 rounded-lg mt-4 border border-slate-100 dark:border-slate-800/10">
              Dimensions: (60x42x37)cm | 60 pcs
            </p>
          </Editable>
        </motion.div>
      </div>
 
      {/* Commodity Legend */}
      <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-50/60 to-sky-50/40 dark:from-slate-900/60 dark:to-slate-950/40 rounded-2xl p-6 md:p-8 border border-blue-100 dark:border-slate-800 shadow-sm max-w-3xl flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
        <Editable id="tools.volumetric.legend.title" defaultContent="Commodity Codes">
          <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 m-0 whitespace-nowrap">
            <Info className="h-5 w-5 text-blue-500 dark:text-blue-400" /> Commodity Codes
          </h4>
        </Editable>
        <div className="flex flex-col sm:flex-row gap-6 text-slate-700 dark:text-slate-300 w-full">
          <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-lg flex-1 border border-slate-100 dark:border-slate-800/10">
            <span className="w-4 h-4 rounded-full bg-blue-50 dark:bg-slate-9000 shadow-sm"></span>
            <div>
              <span className="font-bold text-slate-900 dark:text-white">C1024</span>{' '}
              <Editable id="tools.volumetric.legend.c1024" defaultContent="– Live fish">
                <span>– Live fish</span>
              </Editable>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 px-4 py-2 rounded-lg flex-1 border border-slate-100 dark:border-slate-800/10">
            <span className="w-4 h-4 rounded-full bg-emerald-500 shadow-sm"></span>
            <div>
              <span className="font-bold text-slate-900 dark:text-white">C1401</span>{' '}
              <Editable id="tools.volumetric.legend.c1401" defaultContent="– Cut foliage and live plants">
                <span>– Cut foliage and live plants</span>
              </Editable>
            </div>
          </div>
        </div>
      </motion.div>
      
    </motion.div>
  );
}
