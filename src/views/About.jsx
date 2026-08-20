"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Editable from '../components/Editable';

import { aboutCargo } from '../data/aboutData';
import IntroStory from '../components/about/IntroStory';
import VisionMission from '../components/about/VisionMission';
import StatsGrid from '../components/about/StatsGrid';
import CoreExcellence from '../components/about/CoreExcellence';

export default function About() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[380px] sm:h-[65vh] sm:min-h-[450px] lg:h-screen flex items-center bg-slffaBlue overflow-hidden">
        {/* Parallax Background Container */}
        <motion.div
          style={isMobile ? {} : { y, opacity }}
          className="absolute inset-0 z-0"
        >
          {/* Split official brand navy blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slffaBlue/85 via-slffaBlue/50 to-slffaBlue/15 lg:from-slffaBlue/80 lg:via-slffaBlue/50 lg:to-transparent z-10"></div>

          {/* Smooth zoom scale transition background image */}
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url('${aboutCargo}')` }}
          ></motion.div>
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 text-blue-300 mb-4 text-sm font-semibold uppercase tracking-wider"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </motion.div>

          <Editable id="about.hero.title" defaultContent="Pioneering Airside Cargo Solutions">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight max-w-4xl"
            >
              Pioneering Airside Cargo Solutions
            </motion.h1>
          </Editable>

          <Editable id="about.hero.subtitle" type="textarea" defaultContent="SLFFA Cargo Services Ltd — Facilitating the smooth, secure, and highly efficient flow of air imports in Sri Lanka since 1994.">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed font-light"
            >
              SLFFA Cargo Services Ltd — Facilitating the smooth, secure, and highly efficient flow of air imports in Sri Lanka since 1994.
            </motion.p>
          </Editable>
        </div>

        {/* Beautiful bottom feathering gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-50/60 via-slate-50/25 dark:from-slate-950/60 dark:via-slate-950/25 to-transparent z-15 pointer-events-none transition-colors duration-300"></div>
      </section>

      {/* Intro Section */}
      <IntroStory containerVariants={containerVariants} itemVariants={itemVariants} />

      {/* Vision & Mission Section */}
      <VisionMission />

      {/* Stats Section */}
      <StatsGrid />

      {/* Core Excellence & Standards Section */}
      <CoreExcellence />

    </div>
  );
}
