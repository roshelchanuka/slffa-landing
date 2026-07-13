"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

import { bgHero } from '../data/coolRoomsData';
import CoolRoomsIntro from '../components/coolrooms/CoolRoomsIntro';
import ChambersGrid from '../components/coolrooms/ChambersGrid';
import FacilitiesChecklist from '../components/coolrooms/FacilitiesChecklist';
import CoolRoomsGallery from '../components/coolrooms/CoolRoomsGallery';

export default function CoolRooms() {
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
          {/* Brand navy blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-slate-950/15 lg:from-slate-950/90 lg:via-slate-900/60 lg:to-transparent z-10"></div>
          
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url('${bgHero}')` }}
          ></motion.div>
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
            <Link href="/services" className="hover:text-blue-300 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Cool Rooms</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight max-w-4xl"
          >
            Advanced Cool Room & Cold Chain Facilities
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed font-light"
          >
            Providing upgraded, multi-zone temperature control and professional handling infrastructure directly airside at Bandaranaike International Airport.
          </motion.p>
        </div>

        {/* Bottom feathering gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-50/60 via-slate-50/25 dark:from-slate-950/60 dark:via-slate-950/25 to-transparent z-15 pointer-events-none transition-colors duration-300"></div>
      </section>

      {/* Upgraded Facility Introduction Section */}
      <CoolRoomsIntro />

      {/* Temperature-Controlled Storage Chambers Grid */}
      <ChambersGrid />

      {/* Facilities & Services Checklist */}
      <FacilitiesChecklist staggerContainer={staggerContainer} fadeInUp={fadeInUp} />

      {/* Modern interactive Photo Gallery */}
      <CoolRoomsGallery />

    </div>
  );
}
