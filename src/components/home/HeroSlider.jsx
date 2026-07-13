"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdmin } from '../../context/AdminContext';
import { heroSlidesData } from '../../data/homeData';
import Editable from '../Editable';

export default function HeroSlider({ y, opacity, isMobile }) {
  const { isEditMode, getContent } = useAdmin();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = heroSlidesData.map(slide => ({
    ...slide,
    image: getContent(`home.hero.slide_${slide.id}.image`, slide.defaultImage)
  }));

  useEffect(() => {
    if (isEditMode) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length, isEditMode]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative h-[70vh] min-h-[460px] sm:h-[75vh] sm:min-h-[520px] xl:h-screen flex items-center bg-slffaBlue overflow-hidden">
      {/* Parallax Background with Slider */}
      <motion.div 
        style={isMobile ? {} : { y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slffaBlue/90 via-slffaBlue/55 to-slffaBlue/15 xl:from-slffaBlue/80 xl:via-slffaBlue/50 xl:to-transparent z-10"></div>
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <Editable
              id={`home.hero.slide_${slides[currentSlide].id}.image`}
              type="image"
              defaultContent={slides[currentSlide].defaultImage}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('${slides[currentSlide].image}')` 
                }}
              >
                {/* Subtle dark overlay directly on the image to shade it and enhance text legibility */}
                <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply"></div>
              </div>
            </Editable>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-24 pb-14 sm:pt-32 sm:pb-20 xl:py-0 text-left">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
            className="max-w-3xl text-white"
          >
            <Editable id={`home.hero.slide_${slides[currentSlide].id}.subtitle`} defaultContent={slides[currentSlide].subtitle}>
              <motion.h2 variants={itemVariants} className="text-sm sm:text-base xl:text-2xl font-bold text-blue-300 mb-2 uppercase tracking-wider drop-shadow-md">
                {slides[currentSlide].subtitle}
              </motion.h2>
            </Editable>
            <Editable id={`home.hero.slide_${slides[currentSlide].id}.title`} defaultContent={slides[currentSlide].title}>
              <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl xl:text-7xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight drop-shadow-lg animate-pulse-slow">
                {slides[currentSlide].title}
              </motion.h1>
            </Editable>
            <Editable id={`home.hero.slide_${slides[currentSlide].id}.description`} type="textarea" defaultContent={slides[currentSlide].description}>
              <motion.p variants={itemVariants} className="text-sm sm:text-base xl:text-xl text-blue-100 mb-6 md:mb-10 leading-relaxed max-w-2xl font-light drop-shadow-md">
                {slides[currentSlide].description}
              </motion.p>
            </Editable>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Slider Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-6 sm:left-8 lg:left-12 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
              currentSlide === index ? 'w-8 bg-blue-400' : 'w-2 bg-white dark:bg-slate-950/40 hover:bg-white dark:bg-slate-950/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden md:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex-col items-center"
      >
        <span className="text-white/60 text-sm mb-2 tracking-widest uppercase font-semibold">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"
        ></motion.div>
      </motion.div>

      {/* Beautiful bottom feathering gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-50/60 via-slate-50/25 dark:from-slate-950/60 dark:via-slate-950/25 to-transparent z-15 pointer-events-none transition-colors duration-300"></div>
    </section>
  );
}
