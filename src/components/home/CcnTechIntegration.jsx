"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { ccnFeaturesData } from '../../data/homeData';
import { useAdmin } from '../../context/AdminContext';
import Editable from '../Editable';
import MemberLogos from '../MemberLogos';

const ccnLogo = '/images/drive/1_1EEybBCfBB_ZqtYVkeXUMpBS9wuHdXo.png';
const slffaLogo = '/images/drive/1d1z1Z0IMS6m0bu0Vqiyth92-Q0ezsPB0.png';

export default function CcnTechIntegration() {
  const { ShieldCheck, ArrowRight } = LucideIcons;

  const renderIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8 transition-colors duration-300" /> : null;
  };

  return (
    <>
      {/* CCNhub Technology Integration Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative overflow-hidden border-t border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/30 dark:bg-sky-900/10 rounded-full blur-3xl opacity-70 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/40 dark:bg-sky-900/10 rounded-full blur-3xl opacity-60 -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left Tech Feature Grid */}
            <div className="w-full lg:w-1/2 order-2 lg:order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ccnFeaturesData.map((feat, i) => (
                  <div key={i} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-lg shadow-sky-500/5 hover:shadow-xl hover:shadow-sky-500/15 hover:border-sky-300 dark:hover:border-sky-550/50 transition-all duration-300">
                    <div className="bg-sky-50 dark:bg-sky-955/40 text-sky-600 dark:text-sky-400 w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-sky-100/80 dark:border-sky-900/30">
                      {renderIcon(feat.iconName)}
                    </div>
                    <Editable id={`home.ccn.feature_${i}.title`} defaultContent={feat.title}>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">{feat.title}</h4>
                    </Editable>
                    <Editable id={`home.ccn.feature_${i}.description`} type="textarea" defaultContent={feat.description}>
                      <p className="text-slate-666 dark:text-slate-355 text-xs leading-relaxed">{feat.description}</p>
                    </Editable>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Information Text */}
            <div className="w-full lg:w-1/2 order-1 lg:order-1 relative">
              {/* Subtle background logo watermark - Centered and Larger */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] dark:opacity-[0.03] pointer-events-none select-none z-0">
                <img src={ccnLogo} alt="CCN Logo Watermark" className="w-72 h-72 md:w-96 md:h-96 object-contain" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 relative z-10"
              >
                <Editable id="home.ccn.badge" defaultContent="Technological Milestone">
                  <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-955/40 border border-blue-100 dark:border-blue-900/30 px-3 py-1 rounded-full text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
                    <ShieldCheck className="h-4 w-4 inline" /> Technological Milestone
                  </div>
                </Editable>
                <Editable id="home.ccn.title" defaultContent="Driving Digital Innovation with CCNhub">
                  <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                    Driving Digital Innovation with CCNhub
                  </h2>
                </Editable>
                <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-4"></div>

                <Editable id="home.ccn.p1" type="textarea" defaultContent="In 2013, SLFFA Cargo Services Ltd, in a powerful partnership with Cargo Community Network (CCN), proudly launched their flagship product: CCNhub in Sri Lanka.">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-light">
                    In <span className="font-semibold text-blue-600 dark:text-blue-400">2013</span>, SLFFA Cargo Services Ltd, in a powerful partnership with <strong className="text-slate-955 dark:text-white font-bold">Cargo Community Network (CCN)</strong>, proudly launched their flagship product: <strong className="text-slate-955 dark:text-white text-xl block sm:inline font-bold">CCNhub in Sri Lanka</strong>.
                  </p>
                </Editable>

                <Editable id="home.ccn.p2" type="textarea" defaultContent="CCNhub is a secure, carrier-neutral digital portal that offers an expansive, comprehensive suite of electronic cargo services specifically developed for the regional air cargo community.">
                  <p className="text-slate-655 dark:text-slate-355 leading-relaxed text-sm">
                    CCNhub is a secure, carrier-neutral digital portal that offers an expansive, comprehensive suite of electronic cargo services specifically developed for the regional air cargo community.
                  </p>
                </Editable>

                <Editable id="home.ccn.p3" type="textarea" defaultContent="By shifting traditional daily operations into a seamless e-service pipeline, CCNhub eliminates delays and offers freight forwarders a cost-effective, automated method to manage allotments, confirm bookings, distribute electronic air waybills, and finalize electronic invoicing and instant payments.">
                  <p className="text-slate-655 dark:text-slate-355 leading-relaxed text-sm">
                    By shifting traditional daily operations into a seamless e-service pipeline, CCNhub eliminates delays and offers freight forwarders a cost-effective, automated method to manage allotments, confirm bookings, distribute electronic air waybills, and finalize electronic invoicing and instant payments.
                  </p>
                </Editable>

                <div className="bg-blue-50 dark:bg-slate-900/70 dark:bg-blue-955/20 border border-blue-100 dark:border-blue-900/40/80 dark:border-blue-900/20 p-5 rounded-2xl">
                  <Editable id="home.ccn.quote" type="textarea" defaultContent="&quot;The strategic adoption of digital e-services raises the benchmark for service quality and efficiency across the entire regional air cargo industry.&quot;">
                    <p className="text-slate-700 dark:text-slate-300 text-sm italic">
                      "The strategic adoption of digital e-services raises the benchmark for service quality and efficiency across the entire regional air cargo industry."
                    </p>
                  </Editable>
                </div>

                <div className="pt-4">
                  <Link
                    href="/ccn-hub"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold hover:text-blue-800 dark:hover:text-blue-300 transition-colors group underline underline-offset-4 decoration-2 decoration-blue-600/30 hover:decoration-blue-600"
                  >
                    <Editable id="home.ccn.link" defaultContent="Explore More About CCN HUB">
                      <span>Explore More About CCN HUB</span>
                    </Editable>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Member Logos Section */}
      <MemberLogos />
    </>
  );
}
