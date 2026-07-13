"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useAdmin } from '../context/AdminContext';
import Editable from '../components/Editable';
import AwbGuide from '../components/tools/AwbGuide';
import CargoCalculators from '../components/tools/CargoCalculators';
import TradingConditions from '../components/tools/TradingConditions';

// Import image from the root images folder
const chatgptImgJun9 = '/api/imageProxy?id=1NX5HNt1OidScKMBjM_F-xHRYUmLVcgvG';

const Tools = () => {
  const { getContent } = useAdmin();
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

  const heroBg = getContent('tools.hero.image', chatgptImgJun9);

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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[380px] sm:h-[65vh] sm:min-h-[450px] lg:h-screen flex items-center bg-blue-900 overflow-hidden">
        {/* Parallax Background Container */}
        <motion.div
          style={isMobile ? {} : { y, opacity }}
          className="absolute inset-0 z-0"
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-900/50 to-blue-900/15 lg:from-blue-900/80 lg:via-blue-900/50 lg:to-transparent z-10"></div>
          
          {/* Smooth zoom scale transition background image */}
          <Editable id="tools.hero.image" type="image" defaultContent={chatgptImgJun9}>
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url('${heroBg}')` }}
            ></motion.div>
          </Editable>
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
            <span className="text-white">Tools & Guides</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight max-w-4xl"
          >
            Tools & Guides
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed font-light"
          >
            Explore our integrated tools, resources, and guides for cargo handling and calculations.
          </motion.p>
        </div>

        {/* Beautiful bottom feathering gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-50/60 via-slate-50/25 to-transparent z-15 pointer-events-none"></div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative z-30 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Standard Trading Conditions Section */}
          <TradingConditions containerVariants={containerVariants} itemVariants={itemVariants} />

          {/* Air WayBill Guide Section */}
          <AwbGuide containerVariants={containerVariants} itemVariants={itemVariants} />

          {/* Volumetric Weight Section */}
          <CargoCalculators containerVariants={containerVariants} itemVariants={itemVariants} />
        </div>
      </section>
    </div>
  );
};

export default Tools;
