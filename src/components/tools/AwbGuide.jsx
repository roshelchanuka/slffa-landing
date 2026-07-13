"use client";

import React from 'react';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import Editable from '../Editable';
import { airwaybillImg } from '../../data/toolsData';

export default function AwbGuide({ containerVariants, itemVariants }) {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="pt-16 border-t border-slate-200 dark:border-slate-800 mb-24 transition-colors duration-300"
    >
      <div className="flex items-center gap-4 mb-10 border-b border-slate-200 dark:border-slate-800 pb-6">
        <FileText className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        <Editable id="tools.awb.title" defaultContent="Air WayBill Guide">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Air WayBill Guide</h2>
        </Editable>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Q&A Text - Normal Text Format Without Boxes */}
        <div className="w-full lg:w-1/2 space-y-10">
          <motion.div variants={itemVariants}>
            <Editable id="tools.awb.q1.title" defaultContent="What is an Air Waybill?">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                What is an Air Waybill?
              </h3>
            </Editable>
            <div className="w-12 h-1 bg-blue-600 rounded-full mb-4"></div>
            <Editable id="tools.awb.q1.answer" type="textarea" defaultContent="It is the document made out by or on behalf of the shipper which evidences the contract between the shipper and carrier(s) for carriage of goods over routes of the carrier(s).">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                It is the document made out by or on behalf of the shipper which evidences the contract between the shipper and carrier(s) for carriage of goods over routes of the carrier(s).
              </p>
            </Editable>
          </motion.div>
 
          <motion.div variants={itemVariants}>
            <Editable id="tools.awb.q2.title" defaultContent="What is the purpose of an Air Waybill?">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                What is the purpose of an Air Waybill?
              </h3>
            </Editable>
            <div className="w-12 h-1 bg-blue-600 rounded-full mb-4"></div>
            <ul className="list-disc list-outside text-lg text-slate-700 dark:text-slate-300 space-y-3 pl-6">
              <li>
                <Editable id="tools.awb.q2.a1" defaultContent="Documentary evidence of the conclusion of the contract of carriage.">
                  <span>Documentary evidence of the conclusion of the contract of carriage.</span>
                </Editable>
              </li>
              <li>
                <Editable id="tools.awb.q2.a2" defaultContent="Proof of receipt of the goods of shipment.">
                  <span>Proof of receipt of the goods of shipment.</span>
                </Editable>
              </li>
              <li>
                <Editable id="tools.awb.q2.a3" defaultContent="Freight bill.">
                  <span>Freight bill.</span>
                </Editable>
              </li>
              <li>
                <Editable id="tools.awb.q2.a4" defaultContent="Certificate of insurance (if carriers insurance is requested by the shipper).">
                  <span>Certificate of insurance (if carriers insurance is requested by the shipper).</span>
                </Editable>
              </li>
              <li>
                <Editable id="tools.awb.q2.a5" defaultContent="Guide to carriers staff in handling, dispatching and delivering the consignment.">
                  <span>Guide to carriers staff in handling, dispatching and delivering the consignment.</span>
                </Editable>
              </li>
            </ul>
          </motion.div>
 
          <motion.div variants={itemVariants}>
            <Editable id="tools.awb.q3.title" defaultContent="Who is responsible for the completion of the Air Waybill?">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Who is responsible for the completion of the Air Waybill?
              </h3>
            </Editable>
            <div className="w-12 h-1 bg-blue-600 rounded-full mb-4"></div>
            <Editable id="tools.awb.q3.answer" type="textarea" defaultContent="The shipper is responsible for the correctness of the particulars and statements relating to the goods which he inserts in the Air Waybill or which are inserted on his behalf.">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                The shipper is responsible for the correctness of the particulars and statements relating to the goods which he inserts in the Air Waybill or which are inserted on his behalf.
              </p>
            </Editable>
          </motion.div>
        </div>
 
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <motion.div variants={itemVariants} className="sticky top-24">
            <Editable id="tools.awb.image.badge" defaultContent="Visual Example">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest block mb-2">Visual Example</span>
            </Editable>
            <Editable id="tools.awb.image.title" defaultContent="What does an Air Waybill look like?">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                What does an Air Waybill look like?
              </h3>
            </Editable>
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <Editable id="tools.awb.image" type="image" defaultContent={airwaybillImg}>
                <img 
                  src={airwaybillImg}
                  alt="Air Waybill Sample" 
                  className="w-full h-auto object-contain bg-white dark:bg-slate-100 dark:bg-slate-800 p-2"
                />
              </Editable>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
