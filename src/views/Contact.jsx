"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import Editable from '../components/Editable';
import { useAdmin } from '../context/AdminContext';
const contactHeroBg = '/api/imageProxy?id=1LyYXjM7dLtbkb6pUFoqpmrhkXxK-RWFj';

const Contact = () => {
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

  const heroBg = getContent('contact.hero.image', contactHeroBg);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.0, ease: "easeOut" }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[380px] sm:h-[65vh] sm:min-h-[450px] lg:h-screen flex items-center bg-slate-950 overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          style={isMobile ? {} : { y, opacity }}
          className="absolute inset-0 z-0"
        >
          {/* Subtle dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/45 to-slate-950/15 lg:from-slate-950/80 lg:via-slate-950/40 lg:to-transparent z-10"></div>
          
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Editable
              id="contact.hero.image"
              type="image"
              defaultContent={contactHeroBg}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${heroBg}')` }}
              >
                {/* Dark shading directly on image */}
                <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply"></div>
              </div>
            </Editable>
          </motion.div>
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="flex items-center space-x-2 text-blue-300 mb-4 text-sm font-semibold uppercase tracking-wider"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Contact Us</span>
          </motion.div>

          <Editable id="contact.hero.title" defaultContent="Contact Us">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight max-w-4xl drop-shadow-lg"
            >
              Contact Us
            </motion.h1>
          </Editable>

          <Editable id="contact.hero.subtitle" type="textarea" defaultContent="Get in touch with SLFFA Cargo Services for all your air cargo handling and logistics needs.">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
              className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed font-light drop-shadow-md"
            >
              Get in touch with SLFFA Cargo Services for all your air cargo handling and logistics needs.
            </motion.p>
          </Editable>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-50/60 via-slate-50/25 dark:from-slate-950/60 dark:via-slate-950/25 to-transparent z-15 pointer-events-none transition-colors duration-300"></div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 relative z-30 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Details Section - Two Columns on Top */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700 dark:text-slate-300 mb-16"
          >
            {/* Head Office Column (Left) */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col justify-between"
            >
              <div>
                <Editable id="contact.headoffice.title" defaultContent="Head Office">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                    Head Office
                  </h2>
                </Editable>
                <div className="space-y-6 text-base">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-955/40 rounded-xl text-blue-600 dark:text-blue-400 flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block font-semibold text-slate-900 dark:text-white">Address</span>
                      <Editable id="contact.headoffice.address" defaultContent="37D, Torrington Avenue, Colombo 07">
                        <span className="text-slate-600 dark:text-slate-300 block mt-0.5">37D, Torrington Avenue, Colombo 07</span>
                      </Editable>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-955/40 rounded-xl text-blue-600 dark:text-blue-400 flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block font-semibold text-slate-900 dark:text-white">Tel</span>
                      <Editable id="contact.headoffice.tel" defaultContent="(+94) 112 507 577, (+94) 114 963 375">
                        <span className="text-slate-600 dark:text-slate-300 block mt-0.5">(+94) 112 507 577, (+94) 114 963 375</span>
                      </Editable>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-955/40 rounded-xl text-blue-600 dark:text-blue-400 flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block font-semibold text-slate-900 dark:text-white">E-mail</span>
                      <Editable id="contact.headoffice.email" defaultContent="headoffice@slffacs.com">
                        <a href="mailto:headoffice@slffacs.com" className="text-blue-600 dark:text-blue-400 hover:underline block mt-0.5">headoffice@slffacs.com</a>
                      </Editable>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Operations Column (Right) */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col justify-between"
            >
              <div>
                <Editable id="contact.operations.title" defaultContent="Operations">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                    Operations
                  </h2>
                </Editable>
                <div className="space-y-6 text-base">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-955/40 rounded-xl text-blue-600 dark:text-blue-400 flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block font-semibold text-slate-900 dark:text-white">Address</span>
                      <Editable id="contact.operations.address" defaultContent="Terminal 02, Air Cargo Village, Bandaranayake International Air port, Katunayake, sri lanka">
                        <span className="text-slate-600 dark:text-slate-300 block mt-0.5">Terminal 02, Air Cargo Village, Bandaranayake International Air port, Katunayake, sri lanka</span>
                      </Editable>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-955/40 rounded-xl text-blue-600 dark:text-blue-400 flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block font-semibold text-slate-900 dark:text-white">Tel</span>
                      <Editable id="contact.operations.tel" defaultContent="+94 11 225 2533/6">
                        <span className="text-slate-600 dark:text-slate-300 block mt-0.5">+94 11 225 2533/6</span>
                      </Editable>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-955/40 rounded-xl text-blue-600 dark:text-blue-400 flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="block font-semibold text-slate-900 dark:text-white">E-mail</span>
                      <Editable id="contact.operations.email" defaultContent="admin@slffacs.com, import@slffacs.com">
                        <div className="flex flex-col mt-0.5">
                          <a href="mailto:admin@slffacs.com" className="text-blue-600 dark:text-blue-400 hover:underline">admin@slffacs.com</a>
                          <a href="mailto:import@slffacs.com" className="text-blue-600 dark:text-blue-400 hover:underline">import@slffacs.com</a>
                        </div>
                      </Editable>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map - Full Width at Bottom */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-[300px] md:h-[450px] bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.183424151778!2d79.878761!3d7.1683277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2efcebecf8f03%3A0xcebe43e8be22a788!2sSlffa+Cargo+Services+Limited%2C+Terminal+02%2C+Air+Cargo+Village%2C%20B.I.A%2C+Katunayake!5e0!3m2!1sen!2slk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SLFFA Cargo Services Location"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
