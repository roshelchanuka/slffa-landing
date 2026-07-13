"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Editable from '../components/Editable';

import { servicesHero, ground3 } from '../data/servicesData';
import ShelterExpansion from '../components/services/ShelterExpansion';
import ValueAddedGrid from '../components/services/ValueAddedGrid';
import FacilitiesGrid from '../components/services/FacilitiesGrid';
import OperationsGallery from '../components/services/OperationsGallery';

export default function Services() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], ['0%', '30%']);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1280);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[380px] sm:h-[65vh] sm:min-h-[450px] lg:h-screen flex items-center bg-slate-900 overflow-hidden">
        {/* Parallax Background Container */}
        <motion.div 
          style={isMobile ? {} : { y, opacity }}
          className="absolute inset-0 z-0"
        >
          {/* Split official brand navy blue gradient overlay (matching Home Page) */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/15 lg:from-slate-950/85 lg:via-slate-900/60 lg:to-transparent z-10"></div>
          {/* Right-side black soft shadow overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/10 to-transparent z-10 pointer-events-none"></div>
          
          {/* Smooth zoom scale transition background image */}
          <Editable id="services.hero.image" type="image" defaultContent={servicesHero}>
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url('${servicesHero}')` }}
            ></motion.div>
          </Editable>
        </motion.div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-24">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 text-blue-400 mb-4 text-sm font-semibold uppercase tracking-wider"
          >
            <Link href="/" className="hover:text-blue-300 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Our Services</span>
          </motion.div>
          
          <Editable id="services.hero.title" defaultContent="World-Class Airside Operations">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight max-w-4xl"
            >
              World-Class Airside Operations
            </motion.h1>
          </Editable>
          
          <Editable id="services.hero.description" type="textarea" defaultContent="Providing exceptional import cargo handling, state-of-the-art cold storage, and digital integrations directly at Bandaranaike International Airport.">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed font-light"
            >
              Providing exceptional import cargo handling, state-of-the-art cold storage, and digital integrations directly at Bandaranaike International Airport.
            </motion.p>
          </Editable>
        </div>

        {/* Beautiful bottom feathering gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-50/60 via-slate-50/25 dark:from-slate-950/60 dark:via-slate-950/25 to-transparent z-15 pointer-events-none transition-colors duration-300"></div>
      </section>

      {/* Operational Highlights & New Shelter */}
      <ShelterExpansion />

      {/* Our Services - Value Added Grid */}
      <ValueAddedGrid staggerContainer={staggerContainer} fadeInUp={fadeInUp} />

      {/* Physical Facilities Section */}
      <FacilitiesGrid />

      {/* Terminal Operations Image Gallery */}
      <OperationsGallery />

      {/* Useful Links Directory Promo Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800/60 dark:border-slate-800 relative z-30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            <div className="max-w-3xl space-y-4">
              <Editable id="services.promo.badge" defaultContent="Industry Portals & Tools">
                <span className="text-xs font-black tracking-widest text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-955/40 px-3.5 py-1.5 rounded-full inline-block">
                  Industry Portals & Tools
                </span>
              </Editable>
              <Editable id="services.promo.title" defaultContent="Access All Essential Trade & Logistics Portals In One Place">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                  Access All Essential Trade & Logistics Portals In One Place
                </h2>
              </Editable>
              <Editable id="services.promo.description" type="textarea" defaultContent="Connect directly with major international and local authorities, chambers of commerce, and civil aviation regulators like IATA, SLFFA, Sri Lanka Customs, and CAA via our secure unified directory.">
                <p className="text-slate-600 dark:text-slate-350 text-base sm:text-lg font-light leading-relaxed">
                  Connect directly with major international and local authorities, chambers of commerce, and civil aviation regulators like IATA, SLFFA, Sri Lanka Customs, and CAA via our secure unified directory.
                </p>
              </Editable>
            </div>
            
            <div className="shrink-0 w-full sm:w-auto">
              <Link 
                href="/useful-links" 
                className="group bg-blue-600 hover:bg-blue-50 dark:bg-slate-9000 text-white font-bold px-8 py-4.5 rounded-2xl transition-all duration-300 flex items-center justify-center shadow-lg shadow-blue-500/20 transform hover:-translate-y-0.5 w-full sm:w-auto cursor-pointer"
              >
                <Editable id="services.promo.button" defaultContent="Open Useful Links Directory">
                  <span>Open Useful Links Directory</span>
                </Editable>
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-24 bg-white dark:bg-slate-950 relative z-30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16 z-10"
          >
            {/* Left Column (Texts & Buttons) */}
            <div className="w-full lg:w-7/12 space-y-6">
              <Editable id="services.cta.badge" defaultContent="Unrivaled Airside Advantage">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest block">Unrivaled Airside Advantage</span>
              </Editable>
              <Editable id="services.cta.title" defaultContent="Partner with Sri Lanka's Only Alternative Import Facility Airside">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white">
                  Partner with Sri Lanka's Only Alternative Import Facility Airside
                </h2>
              </Editable>
              <Editable id="services.cta.description" type="textarea" defaultContent="Ready to accelerate your supply chain operations, enjoy 3 days demurrage-free storage, and experience direct BIA airport airside handling excellence? Get in touch with our operations support desk.">
                <p className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  Ready to accelerate your supply chain operations, enjoy 3 days demurrage-free storage, and experience direct BIA airport airside handling excellence? Get in touch with our operations support desk.
                </p>
              </Editable>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="group bg-blue-600 text-white hover:bg-blue-50 dark:bg-slate-9000 font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg shadow-blue-500/20 transform hover:-translate-y-0.5"
                >
                  <Editable id="services.cta.button" defaultContent="Contact Our Operations Desk">
                    <span>Contact Our Operations Desk</span>
                  </Editable>
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column (Crisp & Beautiful Image Showcase) */}
            <div className="w-full lg:w-5/12 shrink-0">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800/80 dark:border-slate-800 relative group bg-slate-100 dark:bg-slate-900">
                <Editable id="services.cta.image" type="image" defaultContent={ground3}>
                  <img 
                    src={ground3} 
                    alt="Airside Advantage Ground Operations" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Editable>
                <div className="absolute inset-0 bg-slate-950/5 dark:bg-slate-950/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
