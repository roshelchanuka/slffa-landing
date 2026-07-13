"use client";

import { motion } from 'framer-motion';
import Editable from '../Editable';

export default function CcnOverview() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <div className="flex items-center justify-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Overview</h2>
        </div>
        
        <div className="prose prose-lg prose-slate text-slate-600 dark:text-slate-400 leading-relaxed max-w-none text-left md:text-justify mx-auto space-y-6">
          <Editable id="ccnhub.overview.highlight" type="textarea" defaultContent="In 2013, SLFFA Cargo Services Ltd and its partners, Cargo Community Network (CCN) launched their flagship product CCNhub in Sri Lanka.">
            <p className="text-xl font-medium text-slate-700 dark:text-slate-300 text-center font-semibold">
              In 2013, SLFFA Cargo Services Ltd and its partners, Cargo Community Network (CCN) launched their flagship product CCNhub in Sri Lanka.
            </p>
          </Editable>
          <Editable id="ccnhub.overview.description" type="textarea" defaultContent="CCN Hub is a carrier-neutral, secure web portal where agents can check flight schedule availability, place a booking, submit MAWBs, Print HAWBs, track status of shipments and many other functions related to Agents and Airlines. Cargo agents are able to send messages ranging from (FFR – e-booking requests, FWB – AWB Data, FHL – HAWB data, FSR – shipment status requests, FVR/FIR – availability/schedule requests) to airlines and receive messages on (FFA – e-booking agreement, FSA – shipment status answers, FSU – shipment status update, FMA – positive acknowledgement, FNA – error message, FVA/FIA – availability/ schedule answers) from airlines via CCNhub/FTP gateway.">
            <p>
              <strong>CCN Hub</strong> is a carrier-neutral, secure web portal where agents can check flight schedule availability, place a booking, submit MAWBs, Print HAWBs, track status of shipments and many other functions related to Agents and Airlines. Cargo agents are able to send messages ranging from (<strong>FFR</strong> – e-booking requests, <strong>FWB</strong> – AWB Data, <strong>FHL</strong> – HAWB data, <strong>FSR</strong> – shipment status requests, <strong>FVR/FIR</strong> – availability/schedule requests) to airlines and receive messages on (<strong>FFA</strong> – e-booking agreement, <strong>FSA</strong> – shipment status answers, <strong>FSU</strong> – shipment status update, <strong>FMA</strong> – positive acknowledgement, <strong>FMA</strong> – error message, <strong>FVA/FIA</strong> – availability/ schedule answers) from airlines via CCNhub/FTP gateway.
            </p>
          </Editable>
          <div className="bg-sky-50 border-l-4 border-slffaBlue p-6 rounded-r-2xl my-8 text-left">
            <Editable id="ccnhub.overview.inhouse" type="textarea" defaultContent="In addition, CCN has the option to connect your in-house system which will provide you the convenience of submitting the AWB and FHL directly via the in-house system. CCNhub is a one-stop-shop for the agents which will benefit from our partner airlines on a carrier neutral, secure web portal – CCNhub which would streamline your cargo handling process. Furthermore, you will be entitled to the ongoing waivers granted by the respective airlines for your e-submissions.">
              <p className="m-0 text-slate-700 dark:text-slate-300 italic">
                In addition, CCN has the option to connect your in-house system which will provide you the convenience of submitting the AWB and FHL directly via the in-house system. CCNhub is a one-stop-shop for the agents which will benefit from our partner airlines on a carrier neutral, secure web portal – CCNhub which would streamline your cargo handling process. Furthermore, you will be entitled to the ongoing waivers granted by the respective airlines for your e-submissions.
              </p>
            </Editable>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
