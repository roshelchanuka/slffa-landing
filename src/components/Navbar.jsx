"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Edit3, LogOut, Image, Home, Info, Briefcase, Newspaper, Wrench, PhoneCall } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdmin } from '../context/AdminContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { isAdmin, isEditMode, toggleEditMode, logout, setIsMediaLibraryOpen } = useAdmin();

  // Close mobile menu when route/pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About Us', path: '/about', icon: Info },
    { name: 'Our Services', path: '/services', icon: Briefcase },
    { name: 'News & Events', path: '/news', icon: Newspaper },
    { name: 'Tools', path: '/tools', icon: Wrench },
    { name: 'Contact Us', path: '/contact', icon: PhoneCall },
  ];

  return (
    <>
      <nav className={`absolute top-0 left-0 right-0 ${isOpen ? 'z-30' : 'z-50'} bg-gradient-to-b from-white/95 via-white/50 to-transparent dark:from-slate-950/95 dark:via-slate-950/50 dark:to-transparent transition-all duration-300 py-6 text-slate-900 dark:text-slate-100`}
      >
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-28 lg:h-32">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-4 group">
              <img src="/api/imageProxy?id=1d1z1Z0IMS6m0bu0Vqiyth92-Q0ezsPB0" alt="SLFFA Cargo Logo" className="h-12 sm:h-20 lg:h-26 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
              <span className="text-lg sm:text-3xl lg:text-4xl font-black tracking-wider text-slate-900 dark:text-white">
                SLFFA<span className="text-blue-600 dark:text-blue-400">CARGO</span>
              </span>
            </Link>
          </div>
          <div className="hidden xl:block ml-auto">
            <div className="flex items-center space-x-4 xl:space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`transition-all duration-300 px-1 py-1 uppercase tracking-wider inline-block
                      ${isActive 
                        ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 text-[14px] xl:text-[15px] font-black scale-105' 
                        : 'text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 border-b-2 border-transparent text-xs xl:text-sm font-bold hover:scale-105'}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              {isAdmin ? (
                <div className="flex items-center space-x-3">
                  {isEditMode && (
                    <button
                      onClick={() => setIsMediaLibraryOpen(true)}
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2.5 rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-300 transform hover:-translate-y-0.5 text-xs uppercase tracking-wider cursor-pointer border border-blue-500"
                    >
                      <Image className="h-4 w-4" />
                      Media Library
                    </button>
                  )}
                  <button
                    onClick={toggleEditMode}
                    className={`flex items-center gap-2 font-bold px-4 py-2.5 rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5 text-xs uppercase tracking-wider cursor-pointer border ${
                      isEditMode
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20 border-emerald-500'
                        : 'bg-slate-800 hover:bg-slate-900 text-slate-100 border-slate-700 shadow-slate-950/20'
                    }`}
                  >
                    <Edit3 className="h-4 w-4" />
                    {isEditMode ? 'Edit Mode: ON' : 'Edit: OFF'}
                  </button>
                  <button
                    onClick={logout}
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2.5 rounded-full shadow-lg shadow-red-500/20 hover:shadow-red-500/35 transition-all duration-300 transform hover:-translate-y-0.5 text-xs uppercase tracking-wider cursor-pointer"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-2.5 rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-300 transform hover:-translate-y-0.5 text-xs xl:text-sm uppercase tracking-wider inline-block"
                >
                  Login
                </Link>
              )}
              <ThemeToggle />
            </div>
          </div>
          <div className="xl:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors text-slate-900 dark:text-white hover:text-blue-600 dark:text-slate-100 dark:hover:text-blue-400"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      </nav>

      {/* Mobile menu with AnimatePresence - rendered outside of <nav> to avoid CSS stacking context conflicts */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-white dark:bg-slate-950/20 dark:bg-slate-950/50 backdrop-blur-[32px] xl:hidden"
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        )}
        {isOpen && (
          <motion.div
            key="mobile-nav-card"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ 
              x: 0, 
              opacity: 1, 
              transition: { 
                type: 'spring', 
                stiffness: 120, 
                damping: 22,
                mass: 1
              } 
            }}
            exit={{ 
              x: '100%', 
              opacity: 0, 
              transition: { 
                type: 'spring', 
                stiffness: 150, 
                damping: 25 
              } 
            }}
            className="fixed top-0 right-0 h-screen w-[85vw] max-w-[360px] z-50 xl:hidden 
              bg-gradient-to-br from-white/12 via-white/05 to-white/01 dark:from-slate-950/20 dark:via-slate-950/08 dark:to-slate-950/02
              border-l border-white/30 dark:border-white/10
              shadow-[-20px_0_60px_rgba(15,23,42,0.12)] dark:shadow-[-25px_0_60px_rgba(0,0,0,0.6)]
              shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4)] dark:shadow-[inset_1px_1px_1px_rgba(255,255,255,0.15)]
              backdrop-blur-[90px] overflow-y-auto flex flex-col p-6 rounded-l-[2.5rem]
              text-slate-900 dark:text-white"
          >
            {/* Animated Floating liquid glass background orbs */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              {/* Blue Orb */}
              <motion.div
                animate={{
                  x: [0, 30, -20, 0],
                  y: [0, -40, 20, 0],
                  scale: [1, 1.15, 0.85, 1],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-[10%] -left-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/35 to-cyan-500/35 dark:from-blue-500/40 dark:to-cyan-500/40 blur-3xl mix-blend-plus-lighter dark:mix-blend-screen"
              />
              {/* Purple/Pink Orb */}
              <motion.div
                animate={{
                  x: [0, -30, 20, 0],
                  y: [0, 40, -20, 0],
                  scale: [1, 0.9, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[15%] -right-[10%] w-72 h-72 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 dark:from-purple-500/35 dark:to-pink-500/35 blur-3xl mix-blend-plus-lighter dark:mix-blend-screen"
              />
              {/* Emerald/Cyan Orb */}
              <motion.div
                animate={{
                  x: [0, 20, -30, 0],
                  y: [0, 20, -40, 0],
                }}
                transition={{
                  duration: 11,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-[40%] left-[20%] w-48 h-48 rounded-full bg-gradient-to-br from-emerald-500/25 to-blue-400/25 dark:from-emerald-500/30 dark:to-blue-400/30 blur-3xl mix-blend-plus-lighter dark:mix-blend-screen"
              />
            </div>

            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center space-x-3 text-2xl sm:text-3xl font-black tracking-wider text-slate-900 dark:text-white group">
                <img src="/api/imageProxy?id=1d1z1Z0IMS6m0bu0Vqiyth92-Q0ezsPB0" alt="SLFFA Cargo Logo" className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                <span>
                  SLFFA<span className="text-blue-600 dark:text-blue-400">CARGO</span>
                </span>
              </Link>
              <div className="flex items-center space-x-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-full bg-slate-200/50 dark:bg-white dark:bg-slate-950/10 hover:bg-slate-300/50 dark:hover:bg-white dark:bg-slate-950/20 border border-slate-300 dark:border-slate-700/50 dark:border-white/20 text-slate-900 dark:text-white transition-all shadow-md backdrop-blur-md focus:outline-none cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>
            </div>

            <motion.div 
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.06
                  }
                }
              }}
              initial="hidden"
              animate="visible"
              className="flex flex-col space-y-3"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
                const IconComponent = link.icon;
                return (
                  <motion.div
                    key={link.name}
                    variants={{
                      hidden: { y: 15, opacity: 0 },
                      visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 320, damping: 24 } }
                    }}
                    whileHover={{ scale: 1.015, x: 2 }}
                    whileTap={{ scale: 0.985 }}
                    className="w-full"
                  >
                    <Link
                      href={link.path}
                      className={`group relative flex items-center gap-4 px-5 py-3.5 rounded-2xl text-[14px] font-bold uppercase tracking-wider transition-all overflow-hidden ${
                        isActive 
                          ? 'text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-950/70 dark:bg-white dark:bg-slate-950/10 shadow-sm dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] border border-blue-100 dark:border-white/15' 
                          : 'text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white dark:bg-slate-950/5 border border-transparent'
                      }`}
                    >
                      {/* Interactive glow effect on hover */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {IconComponent && <IconComponent className={`h-5 w-5 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 group-hover:text-blue-600 dark:text-slate-500 dark:group-hover:text-white'} transition-colors duration-300`} />}
                      <span className="relative z-10">{link.name}</span>
                      {isActive && (
                        <motion.span 
                          layoutId="activeMobileIndicator"
                          className="absolute left-2 w-1 h-5 rounded-full bg-blue-600 dark:bg-blue-400"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                variants={{
                  hidden: { y: 15, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 320, damping: 24 } }
                }}
                className="pt-2"
              >
                {isAdmin ? (
                  <div className="flex flex-col gap-3">
                    {isEditMode && (
                      <motion.button
                        whileHover={{ scale: 1.015 }}
                        whileTap={{ scale: 0.985 }}
                        onClick={() => {
                          setIsMediaLibraryOpen(true);
                          setIsOpen(false);
                        }}
                        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-50 dark:bg-slate-9000 text-white font-bold py-3.5 rounded-2xl shadow-lg transition-all duration-300 text-sm uppercase tracking-wider border border-blue-500 cursor-pointer"
                      >
                        <Image className="h-5 w-5" />
                        Media Library
                      </motion.button>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      onClick={() => {
                        toggleEditMode();
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center justify-center gap-2 font-bold py-3.5 rounded-2xl shadow-md transition-all duration-300 text-sm uppercase tracking-wider border cursor-pointer ${
                        isEditMode
                          ? 'bg-emerald-600 text-white border-emerald-500'
                          : 'bg-slate-800 dark:bg-slate-900 text-slate-200 dark:text-slate-100 border-slate-700'
                      }`}
                    >
                      <Edit3 className="h-5 w-5" />
                      {isEditMode ? 'Edit Mode: ON' : 'Edit Mode: OFF'}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      onClick={() => {
                        logout();
                        setIsOpen(false);
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold py-3.5 rounded-2xl shadow-lg transition-all duration-300 text-sm uppercase tracking-wider border border-red-500/30 cursor-pointer"
                    >
                      <LogOut className="h-5 w-5" />
                      Logout
                    </motion.button>
                  </div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                  >
                    <Link
                      href="/login"
                      className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-50 dark:bg-slate-9000 text-white font-bold py-4 rounded-2xl shadow-lg transition-all duration-300 text-base uppercase tracking-wider border border-blue-500/30"
                    >
                      Login
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>

            {/* Bottom Footer Area with smaller Theme Toggle */}
            <div className="mt-auto pt-6 pb-2 flex flex-col items-center justify-center border-t border-slate-200 dark:border-slate-800/10 dark:border-white/5">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 dark:text-slate-400 mb-2.5 font-bold">
                Theme Mode
              </span>
              <div className="scale-75 origin-bottom">
                <ThemeToggle align="up" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
