"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Editable from '../components/Editable';

import { bgImage } from '../data/ccnHubData';
import CcnOverview from '../components/ccnhub/CcnOverview';
import CcnKeyFeatures from '../components/ccnhub/CcnKeyFeatures';
import CcnMilestones from '../components/ccnhub/CcnMilestones';
import CcnContact from '../components/ccnhub/CcnContact';

export default function CcnHub() {
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

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900 font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[380px] sm:h-[65vh] sm:min-h-[500px] lg:h-[80vh] lg:min-h-[600px] flex items-center overflow-hidden bg-slffaBlue">
        {/* Parallax Background Container */}
        <motion.div
          style={isMobile ? {} : { y, opacity }}
          className="absolute inset-0 z-0"
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slffaBlue/55 to-slffaBlue/15 lg:from-slate-900/90 lg:via-slffaBlue/80 lg:to-transparent z-10"></div>

          {/* Background image */}
          <Editable id="ccnhub.hero.image" type="image" defaultContent={bgImage}>
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url('${bgImage}')` }}
            ></motion.div>
          </Editable>
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 text-sky-200 mb-6 text-sm font-semibold uppercase tracking-wider"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <span>/</span>
            <span className="text-white">CCN HUB</span>
          </motion.div>

          <Editable id="ccnhub.hero.title" defaultContent="CARGO COMMUNITY NETWORK (CCN)">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight max-w-4xl drop-shadow-lg"
            >
              CARGO COMMUNITY NETWORK (CCN)
            </motion.h1>
          </Editable>

          <Editable id="ccnhub.hero.subtitle" type="textarea" defaultContent="A carrier-neutral, secure web portal where agents and airlines streamline their cargo handling process.">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl text-sky-50 max-w-3xl leading-relaxed font-light drop-shadow-md"
            >
              A carrier-neutral, secure web portal where agents and airlines streamline their cargo handling process.
            </motion.p>
          </Editable>
        </div>

        {/* Beautiful bottom feathering gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 via-slate-50/50 to-transparent z-15 pointer-events-none"></div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 relative z-30">
        {/* Overview Section */}
        <CcnOverview />

        {/* Key Features Section */}
        <CcnKeyFeatures />

        {/* Industry Events / Automation Milestones Section */}
        <CcnMilestones />

        {/* Contact Banner at the Bottom */}
        <CcnContact />
      </section>
    </div>
  );
}
