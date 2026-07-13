"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Award, CheckCircle2, Zap, Globe, ArrowRight } from 'lucide-react';
import { worldmapair } from '../../data/aboutData';
import Editable from '../Editable';

export default function CoreExcellence() {
  return (
    <>
      {/* Core Excellence & Standards Section */}
      <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Visual Column */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
              <div className="bg-blue-50 dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-blue-100 dark:border-blue-900/40">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <Award className="text-blue-600 dark:text-blue-400 mr-2 h-7 w-7" />
                  <Editable id="about.corevalues.title" defaultContent="Our Core Values & Operations">
                    <span>Our Core Values & Operations</span>
                  </Editable>
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-lg p-2 mt-1 shrink-0">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <Editable id="about.corevalues.item_1.title" defaultContent="Proven Accuracy & Reliability">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">Proven Accuracy & Reliability</h4>
                      </Editable>
                      <Editable id="about.corevalues.item_1.desc" type="textarea" defaultContent="A long and proven track record of absolute accuracy and speed in releasing imports, highly appreciated by top satisfied clients.">
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          A long and proven track record of absolute accuracy and speed in releasing imports, highly appreciated by top satisfied clients.
                        </p>
                      </Editable>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-lg p-2 mt-1 shrink-0">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <Editable id="about.corevalues.item_2.title" defaultContent="Tailored for Apparel & Garments">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">Tailored for Apparel & Garments</h4>
                      </Editable>
                      <Editable id="about.corevalues.item_2.desc" type="textarea" defaultContent="Highly utilized by free trade zone organizations, especially those importing raw fabrics and textiles to manufacture quality garments.">
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          Highly utilized by free trade zone organizations, especially those importing raw fabrics and textiles to manufacture quality garments.
                        </p>
                      </Editable>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-lg p-2 mt-1 shrink-0">
                      <Globe className="h-5 w-5" />
                    </div>
                    <div>
                      <Editable id="about.corevalues.item_3.title" defaultContent="State-of-the-Art Web Infrastructure">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-1">State-of-the-Art Web Infrastructure</h4>
                      </Editable>
                      <Editable id="about.corevalues.item_3.desc" type="textarea" defaultContent="Operations operate in a seamless web-based software environment to automate receipts, terminal storage updates, and delivery alerts.">
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          Operations operate in a seamless web-based software environment to automate receipts, terminal storage updates, and delivery alerts.
                        </p>
                      </Editable>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <span className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest block">Speed and Standards</span>
                <Editable id="about.icao.title" defaultContent="Targeting the ICAO Recommended Practice">
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                    Targeting the ICAO Recommended Practice
                  </h2>
                </Editable>
                <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-4"></div>

                <Editable id="about.icao.desc_1" type="textarea" defaultContent="Our main operational activity continues to be facilitating the smooth and uninterrupted flow of air-freighted import cargo in Sri Lanka. Speed of release is vital to businesses.">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    Our main operational activity continues to be facilitating the smooth and uninterrupted flow of air-freighted import cargo in Sri Lanka.
                    Speed of release is vital to businesses.
                  </p>
                </Editable>

                <Editable id="about.icao.desc_2" type="textarea" defaultContent="It has always been the primary objective of SLFFA Cargo Services to meet and maintain the ICAO Recommended Practice: processing all incoming cargo through the terminal within a maximum period of 4 hours from receipt from the air carrier.">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    It has always been the primary objective of SLFFA Cargo Services to meet and maintain the <strong className="text-slate-800 dark:text-slate-200">ICAO "Recommended Practice"</strong>:
                    processing all incoming cargo through the terminal within a <strong>maximum period of 4 hours</strong> from receipt from the air carrier.
                  </p>
                </Editable>

                <Editable id="about.icao.desc_3" type="textarea" defaultContent="By keeping delivery wait times to an absolute minimum at the Bandaranaike International Airport airside terminal, we directly reduce warehousing overheads and optimize local manufacturing cycles for consignees.">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    By keeping delivery wait times to an absolute minimum at the Bandaranaike International Airport airside terminal, we directly reduce warehousing overheads and optimize local manufacturing cycles for consignees.
                  </p>
                </Editable>

                <div className="pt-4">
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <Editable id="about.icao.stat_1.value" defaultContent="4 hrs">
                        <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">4 hrs</div>
                      </Editable>
                      <Editable id="about.icao.stat_1.label" defaultContent="ICAO Max Target">
                        <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">ICAO Max Target</div>
                      </Editable>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Value Added Services Call-out Section */}
      <section className="py-24 bg-white dark:bg-slate-950 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl group border border-slate-200 dark:border-slate-800/50"
          >
            {/* Background Image - clearly visible now */}
            <Editable id="about.callout.image" type="image" defaultContent={worldmapair}>
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{ backgroundImage: `url('${worldmapair}')` }}></div>
            </Editable>
            
            {/* Faint shadow overlay to make the white text readable, blending sky blue */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-sky-900/80 to-sky-400/30"></div>
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-50 dark:bg-slate-9000/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center space-x-2 bg-sky-500/30 border border-sky-400/40 px-4 py-1.5 rounded-full text-sky-50 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                <Award className="h-4 w-4 text-sky-200" />
                <Editable id="about.callout.badge" defaultContent="Unrivaled Airside Advantage">
                  <span>Unrivaled Airside Advantage</span>
                </Editable>
              </div>
              
              <Editable id="about.callout.title" defaultContent="The Only Alternative Import Cargo Handling Facility Airside at BIA">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-sm">
                  The Only Alternative Import Cargo Handling Facility Airside at BIA
                </h2>
              </Editable>
              
              <Editable id="about.callout.description" type="textarea" defaultContent="We are uniquely positioned to offer unmatched convenience and value-added operations directly at the airside. Whether you are a large textile manufacturer, a high-value consumer goods importer, or a freight agent, we have the facility and custom capability to serve you.">
                <p className="text-lg text-sky-50 font-light leading-relaxed max-w-2xl drop-shadow-sm">
                  We are uniquely positioned to offer unmatched convenience and value-added operations directly at the airside.
                  Whether you are a large textile manufacturer, a high-value consumer goods importer, or a freight agent, we have the facility and custom capability to serve you.
                </p>
              </Editable>

              <div className="pt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="group bg-white dark:bg-slate-950 text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-sky-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  Explore Value Added Services
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-sky-200/50 text-white font-bold px-8 py-4 rounded-xl hover:bg-sky-400/30 transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
