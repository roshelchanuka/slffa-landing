"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Editable from '../Editable';

const slffaLogo = 'https://res.cloudinary.com/n1jpvnbo/image/upload/f_auto,q_auto/v1785384434/62b64d45-1a8c-4c87-95a6-a1b446512078_pcjqor.png';

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-20px" }}
            >
              <Editable id="home.about.title" defaultContent="Who We Are">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Who We Are</h2>
              </Editable>
              <div className="w-20 h-1 bg-blue-600 rounded-full mb-8"></div>
              <Editable id="home.about.description" type="textarea" defaultContent="SLFFA Cargo Services Ltd is a public unquoted company with limited liability, incorporated in Sri Lanka on 15th August 1994. Solely owned by the Freight Forwarding fraternity of Sri Lanka, our air cargo operation at the Bandaranaike International Airport is unique in Asia and the Far-East.">
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  SLFFA Cargo Services Ltd is a public unquoted company with limited liability, incorporated in Sri Lanka on 15th August 1994. Solely owned by the Freight Forwarding fraternity of Sri Lanka, our air cargo operation at the Bandaranaike International Airport is unique in Asia and the Far-East.
                </p>
              </Editable>
              <Link href="/about" className="group inline-flex items-center font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-lg">
                <span className="relative overflow-hidden">
                  <Editable id="home.about.link" defaultContent="Read our full story">
                    <span>Read our full story</span>
                  </Editable>
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-20px" }}
               className="aspect-[4/3] bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl relative z-10"
             >
               <Editable id="home.about.image" type="image" defaultContent={slffaLogo}>
                 <motion.div 
                   whileHover={{ scale: 1.05 }}
                   transition={{ duration: 0.6 }}
                   className="absolute inset-0 bg-contain bg-no-repeat bg-center m-4"
                   style={{ backgroundImage: `url("${slffaLogo}")` }}
                 ></motion.div>
               </Editable>
             </motion.div>
             {/* Decorative elements */}
             <motion.div 
               initial={{ opacity: 0, x: 50, y: 50 }}
               whileInView={{ opacity: 1, x: 0, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               viewport={{ once: true }}
               className="hidden md:block absolute -bottom-8 -right-8 w-64 h-64 bg-blue-50 dark:bg-blue-950/20 rounded-2xl -z-0 border border-blue-100 dark:border-blue-900/20"
             ></motion.div>
             <motion.div 
               initial={{ opacity: 0, x: -30, y: -30 }}
               whileInView={{ opacity: 1, x: 0, y: 0 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               viewport={{ once: true }}
               className="hidden md:block absolute -top-8 -left-8 w-32 h-32 bg-slffaLightBlue/10 dark:bg-slffaLightBlue/5 rounded-full blur-xl -z-0"
             ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
