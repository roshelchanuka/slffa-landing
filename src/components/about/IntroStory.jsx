"use client";

import { motion } from 'framer-motion';
import { useAdmin } from '../../context/AdminContext';
import { ground1 } from '../../data/aboutData';
import Editable from '../Editable';

export default function IntroStory({ containerVariants, itemVariants }) {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Content (Detailed Story) */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <span className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest block mb-2">Corporate Profile</span>
                <Editable id="about.corporate.title" defaultContent="Who We Are">
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                    Who We Are
                  </h2>
                </Editable>
                <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-4"></div>
              </motion.div>

              <Editable id="about.corporate.desc_1" type="textarea" defaultContent="SLFFA Cargo Services Ltd is a public unquoted company with limited liability, incorporated in Sri Lanka on 15th August 1994 and is solely owned by the Freight Forwarding fraternity of Sri Lanka. Its air cargo operation at the Bandaranaike International Airport is unique in Asia and the Far-East. The Company was established by the Freight Forwarding fraternity, to provide a speedy, safe and efficient service for the benefit of their customers, “The Consignees”.">
                <motion.p variants={itemVariants} className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  <strong>SLFFA Cargo Services Ltd</strong> is a public unquoted company with limited liability, incorporated in Sri Lanka on <span className="text-blue-600 dark:text-blue-400 font-semibold">15th August 1994</span> and is solely owned by the Freight Forwarding fraternity of Sri Lanka. Its air cargo operation at the Bandaranaike International Airport is unique in Asia and the Far-East. The Company was established by the Freight Forwarding fraternity, to provide a speedy, safe and efficient service for the benefit of their customers, <span className="italic font-semibold text-slate-800 dark:text-slate-200">“The Consignees”</span>.
                </motion.p>
              </Editable>

              <Editable id="about.corporate.desc_2" type="textarea" defaultContent="The Company, which was formed under the Company Act No. 17 of 1982, has served the industry for over 30 years. Its principal activity continues to be facilitating the smooth flow of import cargo brought by air into the country. The delivery of cargo averages 25 metric tons per day. We service large scale garments manufacturers and other leading importers to handle their cargo through our 25,000 square foot terminal based on the quality of personalized service we provide. Our customer base consists of over 75 leading forwarding agents in the country and over 300 consignees representing many trade sectors.">
                <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  The Company, which was formed under the Company Act No. 17 of 1982, has served the industry for over 30 years. Its principal activity continues to be facilitating the smooth flow of import cargo brought by air into the country. The delivery of cargo averages 25 metric tons per day. We service large scale garments manufacturers and other leading importers to handle their cargo through our 25,000 square foot terminal based on the quality of personalized service we provide. Our customer base consists of over 75 leading forwarding agents in the country and over 300 consignees representing many trade sectors.
                </motion.p>
              </Editable>

              <Editable id="about.corporate.desc_3" type="textarea" defaultContent="The main activity has been the facilitation of cargo received by Air in bulk, to ensure speed and efficiency in issue to consignees. It has been the objective of the Company to meet the ICAO “Recommended practice” of processing cargo through the terminal within a maximum period of 4 hours from the time of receipt of cargo by air, thereby minimizing cargo delivery time at the airport.">
                <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  The main activity has been the facilitation of cargo received by Air in bulk, to ensure speed and efficiency in issue to consignees. It has been the objective of the Company to meet the ICAO “Recommended practice” of processing cargo through the terminal within a maximum period of 4 hours from the time of receipt of cargo by air, thereby minimizing cargo delivery time at the airport.
                </motion.p>
              </Editable>

              <Editable id="about.corporate.desc_4" type="textarea" defaultContent="The Company has a proven track record of accuracy and efficiency in the release of goods, appreciated by satisfied customers. Several free trade organizations, particularly those importing textiles to manufacture garments, have found our facility useful. The Company system of receipt and delivery of cargo operate in a “state of the art” web based environment.">
                <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  The Company has a proven track record of accuracy and efficiency in the release of goods, appreciated by satisfied customers. Several free trade organizations, particularly those importing textiles to manufacture garments, have found our facility useful. The Company system of receipt and delivery of cargo operate in a “state of the art” web based environment.
                </motion.p>
              </Editable>

              <Editable id="about.corporate.desc_5" type="textarea" defaultContent="We work towards the ICAO goal of quick release of all cargo at airports and the imperatives of tariff revision together with providing the consignee with more value added services is our focus.">
                <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We work towards the ICAO goal of quick release of all cargo at airports and the imperatives of tariff revision together with providing the consignee with more value added services is our focus.
                </motion.p>
              </Editable>

              <Editable id="about.corporate.desc_6" type="textarea" defaultContent="In 2013, SLFFA Cargo Services Ltd and its partners, Cargo Community Network (CCN) launched their flagship product CCNhub in Sri Lanka, a secure and carrier neutral portal that offers a comprehensive range of electronic cargo services to the air cargo community. It provides cost savings for the industry as CCNhub offers freight forwarders, an effective and efficient electronic way of making allotment and free sales bookings, review flight schedules, track and trace shipments, distribution of neutral air waybills, as well as e-invoicing and payment. The adoption of e-services to handle daily cargo operations, raises the service standard of the cargo industry.">
                <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  In 2013, SLFFA Cargo Services Ltd and its partners, Cargo Community Network (CCN) launched their flagship product <strong>CCNhub</strong> in Sri Lanka, a secure and carrier neutral portal that offers a comprehensive range of electronic cargo services to the air cargo community. It provides cost savings for the industry as CCNhub offers freight forwarders, an effective and efficient electronic way of making allotment and free sales bookings, review flight schedules, track and trace shipments, distribution of neutral air waybills, as well as e-invoicing and payment. The adoption of e-services to handle daily cargo operations, raises the service standard of the cargo industry.
                </motion.p>
              </Editable>
            </motion.div>
          </div>

          {/* Right Column (Image & Sticky Info Card) */}
          <div className="w-full lg:w-5/12 space-y-12 lg:sticky lg:top-64 lg:pt-64">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 relative bg-slate-105"
            >
              <div
                className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('${ground1}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <Editable id="about.sidecard.title" defaultContent="State-of-the-Art Terminal">
                  <h4 className="text-xl font-bold mb-1">State-of-the-Art Terminal</h4>
                </Editable>
                <Editable id="about.sidecard.description" type="textarea" defaultContent="Processing metric tons of cargo daily at BIA airport airside facility.">
                  <p className="text-sm text-slate-200">Processing metric tons of cargo daily at BIA airport airside facility.</p>
                </Editable>
              </div>
            </motion.div>

            {/* Concluding Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative px-2"
            >
              <Editable id="about.quote.text" type="textarea" defaultContent="“Whilst it augurs well for business to grow in the coming years, we continue to remain the only alternative import cargo handling facility AIRSIDE at Bandaranaike International Airport having the capability to provide VALUE ADDED SERVICES.”">
                <p className="text-slate-600 dark:text-slate-400 font-semibold italic text-lg leading-relaxed relative z-10">
                  “Whilst it augurs well for business to grow in the coming years, we continue to remain the only alternative import cargo handling facility AIRSIDE at Bandaranaike International Airport having the capability to provide VALUE ADDED SERVICES.”
                </p>
              </Editable>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
