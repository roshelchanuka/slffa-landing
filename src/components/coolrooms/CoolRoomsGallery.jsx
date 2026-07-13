"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight, User, Phone, Shield, Mail } from 'lucide-react';
import { galleryPhotosData } from '../../data/coolRoomsData';
import { useAdmin } from '../../context/AdminContext';
import Editable from '../Editable';

export default function CoolRoomsGallery() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const { isEditMode } = useAdmin();

  return (
    <>
      {/* Modern interactive Photo Gallery */}
      <section className="py-24 bg-white dark:bg-slate-950 relative z-30 overflow-hidden border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest block mb-2">Visual Showcase</span>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Upgraded Cold Facility Gallery
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mt-4 mb-6"></div>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-3">
              Photographs showing cold chambers, insulated sealing systems, and digital controls after our recent expansion.
            </p>
            <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider animate-pulse">
              * Click on any photograph to open the high-clarity full-screen viewer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryPhotosData.map((photo, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => setActiveImageIndex(idx)}
                className="aspect-[16/11] rounded-3xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-800 group relative bg-slate-100 dark:bg-slate-800 cursor-pointer transition-all duration-500 hover:shadow-2xl"
              >
                <Editable id={`coolrooms.gallery_${idx}.image`} type="image" defaultContent={photo.image}>
                  <motion.div 
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${photo.image}')` }}
                  ></motion.div>
                </Editable>
                
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-955/15 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300"></div>
                
                {/* Maximize Icon */}
                <div className="absolute top-5 right-5 bg-slate-950/75 backdrop-blur-md text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg transform translate-y-3 group-hover:translate-y-0 border border-white/10">
                  <Maximize2 className="h-4.5 w-4.5 text-blue-400" />
                </div>

                {/* Overlay details */}
                <div className={`absolute bottom-5 left-5 right-5 text-white transition-transform duration-300 group-hover:translate-y-[-2px] ${isEditMode ? 'z-30 cursor-pointer' : 'pointer-events-none'}`}>
                  <Editable id={`coolrooms.gallery_${idx}.title`} defaultContent={photo.title}>
                    <h4 className="font-extrabold text-lg tracking-wide mb-1 drop-shadow-md text-slate-55 animate-pulse">
                      {photo.title}
                    </h4>
                  </Editable>
                  <Editable id={`coolrooms.gallery_${idx}.description`} type="textarea" defaultContent={photo.description}>
                    <p className="text-slate-300 text-xs leading-relaxed font-light drop-shadow-sm max-w-sm">
                      {photo.description}
                    </p>
                  </Editable>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Experience Statement and Contacts Card Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800/60 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row items-stretch gap-16">
            
            {/* Left Side: Three Decades experience & Invitation */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest block">Commitment to Quality</span>
                
                <Editable id="coolrooms.experience.title" defaultContent="Over Thirty Years of Cargo Handling Excellence">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    Over Thirty Years of Cargo Handling Excellence
                  </h3>
                </Editable>
                
                <div className="w-20 h-1.5 bg-blue-600 rounded-full mt-4"></div>
                
                <Editable id="coolrooms.experience.description" type="textarea" defaultContent="With three decades of experience, our commitment to quality and customer satisfaction remains unmatched.">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    With three decades of experience, our commitment to quality and customer satisfaction remains unmatched.
                  </p>
                </Editable>
                
                <Editable id="coolrooms.experience.note" type="textarea" defaultContent="We invite freight forwarding agents, regional export firms, pharmaceutical importers, and strategic trade partners to take advantage of our specialized services to ensure the best care for your valuable, temperature-controlled cargo at Katunayake.">
                  <p className="text-slate-650 leading-relaxed text-sm sm:text-base">
                    We invite freight forwarding agents, regional export firms, pharmaceutical importers, and strategic trade partners to take advantage of our specialized services to ensure the best care for your valuable, temperature-controlled cargo at Katunayake.
                  </p>
                </Editable>
              </div>

              {/* Security/Trust Logo seal */}
              <div className="mt-8 pt-8 border-t border-slate-250 flex items-center space-x-4">
                <div className="bg-blue-600 text-white rounded-2xl p-4 shadow-lg shadow-blue-500/20 shrink-0">
                  <Shield className="h-8 w-8" />
                </div>
                <div>
                  <Editable id="coolrooms.safety.title" defaultContent="SLFFA Safety Certified">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">SLFFA Safety Certified</h4>
                  </Editable>
                  <Editable id="coolrooms.safety.description" type="textarea" defaultContent="Solely owned and approved by the Freight Forwarding fraternity of Sri Lanka.">
                    <p className="text-xs text-slate-500 dark:text-slate-400">Solely owned and approved by the Freight Forwarding fraternity of Sri Lanka.</p>
                  </Editable>
                </div>
              </div>
            </div>

            {/* Right Side: Inquiry Contacts */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-6">
              <div>
                <Editable id="coolrooms.contacts.title" defaultContent="Discuss Your Requirements">
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Discuss Your Requirements
                  </h4>
                </Editable>
                <Editable id="coolrooms.contacts.description" type="textarea" defaultContent="For more information or to discuss your specific requirements, please feel free to contact our terminal management team.">
                  <p className="text-slate-650 text-sm leading-relaxed">
                    For more information or to discuss your specific requirements, please feel free to contact our terminal management team.
                  </p>
                </Editable>
              </div>
              
              <div className="space-y-2">
                {/* DGM Lal Rajapaksha */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-50 dark:bg-slate-900 text-blue-600 dark:text-blue-400 rounded-xl p-3 shrink-0">
                      <User className="h-6 w-6" />
                    </div>
                    <div>
                      <Editable id="coolrooms.contacts.dgm.name" defaultContent="Mr. Lal Rajapaksha">
                        <h5 className="font-bold text-slate-900 dark:text-white text-sm leading-none mb-1">
                          Mr. Lal Rajapaksha
                        </h5>
                      </Editable>
                      <Editable id="coolrooms.contacts.dgm.role" defaultContent="Deputy General Manager (DGM)">
                        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider leading-none mt-1">
                          Deputy General Manager (DGM)
                        </p>
                      </Editable>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                    <a 
                      href="tel:+94773139389" 
                      className="group inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors font-bold text-sm gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      +94 77 3139389
                    </a>
                    <a 
                      href="mailto:rajapaksha.l@slffacs.com" 
                      className="group inline-flex items-center text-slate-550 hover:text-blue-600 dark:text-blue-400 transition-colors text-xs gap-2"
                    >
                      <Mail className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                      rajapaksha.l@slffacs.com
                    </a>
                  </div>
                </div>

                {/* Admin Manager Indika Fernando */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-50 dark:bg-slate-900 text-blue-600 dark:text-blue-400 rounded-xl p-3 shrink-0">
                      <User className="h-6 w-6" />
                    </div>
                    <div>
                      <Editable id="coolrooms.contacts.admin.name" defaultContent="Mr. Indika Fernando">
                        <h5 className="font-bold text-slate-900 dark:text-white text-sm leading-none mb-1">
                          Mr. Indika Fernando
                        </h5>
                      </Editable>
                      <Editable id="coolrooms.contacts.admin.role" defaultContent="Administration & HR Manager">
                        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider leading-none mt-1">
                          Administration & HR Manager
                        </p>
                      </Editable>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                    <a 
                      href="tel:+94772449939" 
                      className="group inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors font-bold text-sm gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      +94 77 2449939
                    </a>
                    <a 
                      href="mailto:indika.f@slffacs.com" 
                      className="group inline-flex items-center text-slate-550 hover:text-blue-600 dark:text-blue-400 transition-colors text-xs gap-2"
                    >
                      <Mail className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                      indika.f@slffacs.com
                    </a>
                  </div>
                </div>

                {/* Nishanthi Ranasinghe */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-50 dark:bg-slate-900 text-blue-600 dark:text-blue-400 rounded-xl p-3 shrink-0">
                      <User className="h-6 w-6" />
                    </div>
                    <div>
                      <Editable id="coolrooms.contacts.person_1.name" defaultContent="Ms. Nishanthi Ranasinghe">
                        <h5 className="font-bold text-slate-900 dark:text-white text-sm leading-none mb-1">
                          Ms. Nishanthi Ranasinghe
                        </h5>
                      </Editable>
                      <Editable id="coolrooms.contacts.person_1.role" defaultContent="Customer Service & Strategic Relations Manageress">
                        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider leading-none mt-1">
                          Customer Service & Strategic Relations Manageress
                        </p>
                      </Editable>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                    <a 
                      href="tel:+94772193851" 
                      className="group inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors font-bold text-sm gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      +94 77 2193851
                    </a>
                    <a 
                      href="mailto:nishanthi.r@slffacs.com" 
                      className="group inline-flex items-center text-slate-550 hover:text-blue-600 dark:text-blue-400 transition-colors text-xs gap-2"
                    >
                      <Mail className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                      nishanthi.r@slffacs.com
                    </a>
                  </div>
                </div>

                {/* Wasantha Lokubalasooriya */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-50 dark:bg-slate-900 text-blue-600 dark:text-blue-400 rounded-xl p-3 shrink-0">
                      <User className="h-6 w-6" />
                    </div>
                    <div>
                      <Editable id="coolrooms.contacts.person_2.name" defaultContent="Mr. Wasantha Lokubalasooriya">
                        <h5 className="font-bold text-slate-900 dark:text-white text-sm leading-none mb-1">
                          Mr. Wasantha Lokubalasooriya
                        </h5>
                      </Editable>
                      <Editable id="coolrooms.contacts.person_2.role" defaultContent="Operations Manager">
                        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider leading-none mt-1">
                          Operations Manager
                        </p>
                      </Editable>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                    <a 
                      href="tel:+94774694089" 
                      className="group inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 transition-colors font-bold text-sm gap-2"
                    >
                      <Phone className="h-4 w-4" />
                      +94 77 4694089
                    </a>
                    <a 
                      href="mailto:wasantha.l@slffacs.com" 
                      className="group inline-flex items-center text-slate-550 hover:text-blue-600 dark:text-blue-400 transition-colors text-xs gap-2"
                    >
                      <Mail className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                      wasantha.l@slffacs.com
                    </a>
                  </div>
                </div>
              </div>

              <Editable id="coolrooms.contacts.note" defaultContent="SLFFA Cargo Terminal Operations BIA Airport • Katunayake, Sri Lanka">
                <div className="text-[11px] text-slate-450 pt-2 font-semibold">
                  SLFFA Cargo Terminal Operations BIA Airport • Katunayake, Sri Lanka
                </div>
              </Editable>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox / Image Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-955/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10"
            onClick={() => setActiveImageIndex(null)}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-blue-400 bg-slate-900/80 p-3 rounded-full border border-slate-800 transition-all duration-300 z-10 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Previous Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) => (prev === 0 ? galleryPhotosData.length - 1 : prev - 1));
              }}
              className="absolute left-4 sm:left-10 text-white hover:text-blue-400 bg-slate-900/80 p-4 rounded-full border border-slate-800 transition-all duration-300 z-10 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image Container */}
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="max-w-5xl w-full flex flex-col items-center z-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-slate-900/40 border border-slate-800 p-3 rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src={galleryPhotosData[activeImageIndex].image} 
                  alt={galleryPhotosData[activeImageIndex].title} 
                  className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain border border-slate-800"
                />
              </div>

              {/* Title & Description under the image */}
              <div className="text-center mt-6 max-w-2xl px-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide mb-2">
                  {galleryPhotosData[activeImageIndex].title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                  {galleryPhotosData[activeImageIndex].description}
                </p>
                
                {/* Indicator Dots */}
                <div className="flex justify-center space-x-2 mt-6">
                  {galleryPhotosData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-350 cursor-pointer ${
                        activeImageIndex === idx ? 'w-8 bg-blue-50 dark:bg-slate-9000' : 'w-2 bg-slate-700 hover:bg-slate-550'
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Next Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) => (prev === galleryPhotosData.length - 1 ? 0 : prev + 1));
              }}
              className="absolute right-4 sm:right-10 text-white hover:text-blue-400 bg-slate-900/80 p-4 rounded-full border border-slate-800 transition-all duration-300 z-10 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
