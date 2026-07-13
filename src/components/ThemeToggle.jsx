"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Laptop, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ align = 'down' }) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const toggleOptions = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Laptop },
  ];

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950/70 backdrop-blur-md hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:bg-slate-800/80 transition-all duration-300 text-slate-800 dark:text-slate-100 cursor-pointer shadow-sm hover:shadow-md flex items-center justify-center focus:outline-none"
        aria-label="Toggle theme"
      >
        <AnimatePresence mode="wait" initial={false}>
          {resolvedTheme === 'light' ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <Sun className="h-5 w-5 text-amber-500 fill-amber-100 dark:fill-none" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <Moon className="h-5 w-5 text-blue-400 fill-blue-950/20 dark:fill-none" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Floating Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: align === 'up' ? 10 : -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: align === 'up' ? 10 : -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={`absolute right-0 w-40 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950/90 p-2 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/90 focus:outline-none z-[100] ${
              align === 'up' ? 'bottom-full mb-3 origin-bottom-right' : 'top-full mt-3 origin-top-right'
            }`}
          >
            <div className="flex flex-col space-y-1">
              {toggleOptions.map((opt) => {
                const Icon = opt.icon;
                const isActive = theme === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setTheme(opt.value);
                      setIsOpen(false);
                    }}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer text-left
                      ${
                        isActive
                          ? 'bg-blue-600/10 text-blue-600 dark:bg-blue-50 dark:bg-slate-9000/10 dark:text-blue-400'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:text-slate-355 dark:hover:bg-slate-800/60'
                      }`}
                  >
                    <div className="flex items-center space-x-2.5">
                      <Icon className={`h-4 w-4 ${isActive ? 'text-blue-500' : 'text-slate-455'}`} />
                      <span>{opt.label}</span>
                    </div>
                    {isActive && <Check className="h-4 w-4 text-blue-500 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
