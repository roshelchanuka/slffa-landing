"use client";

import { motion } from 'framer-motion';
import { Award, Calendar, Clock, MapPin } from 'lucide-react';
import { eventImg1, eventImg2, eventImg3 } from '../../data/ccnHubData';
import Editable from '../Editable';

export default function CcnMilestones() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        {/* Badge & Title */}
        <div className="text-center md:text-left mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-slate-900 text-slffaBlue mb-4 border border-blue-100 dark:border-blue-900/40 uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            Historical Milestone
          </span>
          <Editable id="ccnhub.event.title" defaultContent="CCNhub Colombo Facilitates Air Cargo Exports Automation">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              CCNhub Colombo Facilitates Air Cargo Exports Automation
            </h2>
          </Editable>
          <div className="mt-4 flex flex-wrap gap-4 items-center justify-center md:justify-start text-sm text-slate-500 dark:text-slate-400 font-medium">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slffaBlue" />
              <Editable id="ccnhub.event.meta.date" defaultContent="21st of July 2016">
                <span>21st of July 2016</span>
              </Editable>
            </div>
            <span className="hidden md:inline text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slffaBlue" />
              <Editable id="ccnhub.event.meta.time" defaultContent="2:30 PM - 4:30 PM">
                <span>2:30 PM - 4:30 PM</span>
              </Editable>
            </div>
            <span className="hidden md:inline text-slate-300">•</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-slffaBlue" />
              <Editable id="ccnhub.event.meta.location" defaultContent="Olympic House, Colombo 07">
                <span>Olympic House, Colombo 07</span>
              </Editable>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Content & Presenters */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Event Details as Normal Paragraphs */}
            <div className="prose prose-lg prose-slate max-w-none text-slate-700 dark:text-slate-300 leading-relaxed space-y-6 text-justify">
              <Editable id="ccnhub.event.p1" type="textarea" defaultContent="SLFFA Cargo Services Ltd (the commercial arm of SLFFA) in collaboration with CCNhub Colombo hosted an awareness session to familiarize industry stakeholders on the fundamentals of the e-AWB concept for air cargo. It was held on the 21 of July 2016 from 2.30pm to 4.30pm at the Olympic House, Colombo 07.">
                <p>
                  SLFFA Cargo Services Ltd (the commercial arm of SLFFA) in collaboration with CCNhub Colombo hosted an awareness session to familiarize industry stakeholders on the fundamentals of the e-AWB concept for air cargo. It was held on the 21 of July 2016 from 2.30pm to 4.30pm at the Olympic House, Colombo 07.
                </p>
              </Editable>

              <Editable id="ccnhub.event.p2" type="textarea" defaultContent="As a pioneer in e-freight, CCNhub Colombo has driven the industry towards the adoption of e-AWB through collaboration with relevant stakeholders and authorities while facilitating unique industry requirements.">
                <p>
                  As a pioneer in e-freight, CCNhub Colombo has driven the industry towards the adoption of e-AWB through collaboration with relevant stakeholders and authorities while facilitating unique industry requirements.
                </p>
              </Editable>

              <Editable id="ccnhub.event.p3" type="textarea" defaultContent="The session was opened by the Chairman of SLFFA Cargo Services Ltd. Mr. Diren Hallock with an emphasis on the inception of e-freight in Colombo, its current development and how the industry should evolve into the future. Mr. Sanjeewa Rodrigo – Head of Cargo and Mr. Roshan Cooray – Senior Executive Cargo Reservation, Qatar Airways took to the session to express their views on how the air freight industry is being simplified through e-freight and the progress made by Qatar Airways. Mr. Pubudu Prasanna – Cargo Supervisor, Sri Lankan Airlines reiterated the challenges faced during the adoption of eAWB at CMB and went into detail on the newly adopted ‘Single Process’.">
                <p>
                  The session was opened by the Chairman of SLFFA Cargo Services Ltd. Mr. Diren Hallock with an emphasis on the inception of e-freight in Colombo, its current development and how the industry should evolve into the future. Mr. Sanjeewa Rodrigo – Head of Cargo and Mr. Roshan Cooray – Senior Executive Cargo Reservation, Qatar Airways took to the session to express their views on how the air freight industry is being simplified through e-freight and the progress made by Qatar Airways. Mr. Pubudu Prasanna – Cargo Supervisor, Sri Lankan Airlines reiterated the challenges faced during the adoption of eAWB at CMB and went into detail on the newly adopted ‘Single Process’.
                </p>
              </Editable>

              <Editable id="ccnhub.event.p4" type="textarea" defaultContent="To bring in more perspective to the event Mr. Dilanka Galappatti – Manager System Implementation, Dart Global Logistics spoke about enabling the forwarder and the benefits of electronic submissions. A final presentation was made by Mr. Malaka Yattigala and Ms. Umalka Perera of CCNhub in order to recap the session and highlighted the importance of e-AWB to the e-Freight concept and the role of CCNhub in promoting the automation of the air freight industry in Colombo.">
                <p>
                  To bring in more perspective to the event Mr. Dilanka Galappatti – Manager System Implementation, Dart Global Logistics spoke about enabling the forwarder and the benefits of electronic submissions. A final presentation was made by Mr. Malaka Yattigala and Ms. Umalka Perera of CCNhub in order to recap the session and highlighted the importance of e-AWB to the e-Freight concept and the role of CCNhub in promoting the automation of the air freight industry in Colombo.
                </p>
              </Editable>

              <Editable id="ccnhub.event.p5" type="textarea" defaultContent="The event witnessed a participation of more than 50 representatives from both airlines and forwarders. It was concluded with a brief Q&A session, Tea and refreshments.">
                <p className="font-semibold text-slate-800 dark:text-slate-200">
                  The event witnessed a participation of more than 50 representatives from both airlines and forwarders. It was concluded with a brief Q&A session, Tea and refreshments.
                </p>
              </Editable>
            </div>

          </div>

          {/* Right Side: Photo Gallery */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              Event Gallery
            </h3>
            
            <div className="grid grid-cols-1 gap-6">
              {/* Image 1 */}
              <div className="group rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md bg-slate-50 dark:bg-slate-900 relative">
                <Editable id="ccnhub.event.image_1" type="image" defaultContent={eventImg1}>
                  <img 
                    src={eventImg1} 
                    alt="CCNhub Colombo awareness session 1" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </Editable>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-bold m-0">Awareness Session - Air Cargo Exports Automation</p>
                </div>
              </div>

              {/* Image 2 */}
              <div className="group rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md bg-slate-50 dark:bg-slate-900 relative">
                <Editable id="ccnhub.event.image_2" type="image" defaultContent={eventImg2}>
                  <img 
                    src={eventImg2} 
                    alt="CCNhub Colombo awareness session 2" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </Editable>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-bold m-0">Industry Stakeholders Familiarization on e-AWB Fundamentals</p>
                </div>
              </div>

              {/* Image 3 */}
              <div className="group rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-md bg-slate-50 dark:bg-slate-900 relative">
                <Editable id="ccnhub.event.image_3" type="image" defaultContent={eventImg3}>
                  <img 
                    src={eventImg3} 
                    alt="CCNhub Colombo awareness session 3" 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </Editable>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-bold m-0">Key Presentations at Olympic House, Colombo</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
