"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { groundHighlightsData, imgGroundHandling } from '../../data/homeData';
import Editable from '../Editable';

export default function GroundOperations() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);
  const { Pause, Play, ArrowRight } = LucideIcons;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  }, []);

  const renderIcon = (iconName) => {
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent className="h-6 w-6 text-blue-400" /> : null;
  };

  return (
    <section className="py-32 relative overflow-hidden bg-slate-950 text-white min-h-[600px] flex items-center">
      {/* Background Image element */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Editable id="home.groundhandling.image" type="image" defaultContent={imgGroundHandling}>
          <video
            ref={videoRef}
            src={imgGroundHandling}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          />
        </Editable>
        {/* Shadow Overlay / Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/30 z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Content & Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 space-y-8 text-left"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-slate-9000/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full text-blue-400 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
                <span>BIA Airside Operations</span>
              </div>
              
              <Editable id="home.groundhandling.title" defaultContent="High-Performance Ground Handling Solutions">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  High-Performance Ground Handling Solutions
                </h2>
              </Editable>
              <div className="w-20 h-1 bg-blue-50 dark:bg-slate-900 rounded-full"></div>
            </div>
            
            <Editable id="home.groundhandling.description" type="textarea" defaultContent="As Bandaranaike International Airport's only alternative airside facility, we deliver professional cargo breakdown, palletizing, and transfer services. Our operations are fully optimized to guarantee rapid, secure, and weatherproof terminal processing.">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                As Bandaranaike International Airport's only alternative airside facility, we deliver professional cargo breakdown, palletizing, and transfer services. Our operations are fully optimized to guarantee rapid, secure, and weatherproof terminal processing.
              </p>
            </Editable>

            {/* Highlights list */}
            <div className="space-y-4">
              {groundHighlightsData.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-start p-4 rounded-2xl border border-white/5 bg-white/5 dark:bg-slate-950/20 hover:bg-white/10 backdrop-blur-md transition-all duration-300"
                >
                  <div className="p-3 rounded-xl mr-4 shrink-0 bg-blue-50 dark:bg-slate-9000/10 text-blue-400">
                    {renderIcon(item.iconName)}
                  </div>
                  <div className="space-y-1 text-left">
                    <Editable id={`home.groundhandling.highlight_${idx}.title`} defaultContent={item.title}>
                      <h4 className="font-bold text-white text-base">{item.title}</h4>
                    </Editable>
                    <Editable id={`home.groundhandling.highlight_${idx}.description`} type="textarea" defaultContent={item.desc}>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                    </Editable>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-left">
              <Link 
                href="/services" 
                className="group bg-blue-600 text-white hover:bg-blue-50 dark:bg-slate-9000 font-bold px-8 py-4.5 rounded-xl transition-all duration-300 inline-flex items-center justify-center shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transform hover:-translate-y-0.5"
              >
                Explore Airside Services
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Side: High-End Glassmorphic Live Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 grid grid-cols-2 gap-6"
          >
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-left hover:bg-slate-900/60 transition-all duration-300 group">
              <Editable id="home.groundhandling.stat_1.value" defaultContent="3,200">
                <div className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-2 group-hover:scale-105 transition-transform duration-300 origin-left">3,200</div>
              </Editable>
              <Editable id="home.groundhandling.stat_1.label" defaultContent="Square Feet">
                <div className="text-white font-bold text-sm">Square Feet</div>
              </Editable>
              <Editable id="home.groundhandling.stat_1.note" defaultContent="Shelter Coverage">
                <div className="text-slate-400 text-xs mt-1">Shelter Coverage</div>
              </Editable>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-left hover:bg-slate-900/60 transition-all duration-300 group">
              <Editable id="home.groundhandling.stat_2.value" defaultContent="16">
                <div className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-2 group-hover:scale-105 transition-transform duration-300 origin-left">16</div>
              </Editable>
              <Editable id="home.groundhandling.stat_2.label" defaultContent="ULD Pallets">
                <div className="text-white font-bold text-sm">ULD Pallets</div>
              </Editable>
              <Editable id="home.groundhandling.stat_2.note" defaultContent="Waterproof Capacity">
                <div className="text-slate-400 text-xs mt-1">Waterproof Capacity</div>
              </Editable>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-left hover:bg-slate-900/60 transition-all duration-300 group">
              <Editable id="home.groundhandling.stat_3.value" defaultContent="100%">
                <div className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-2 group-hover:scale-105 transition-transform duration-300 origin-left">100%</div>
              </Editable>
              <Editable id="home.groundhandling.stat_3.label" defaultContent="Error-Free">
                <div className="text-white font-bold text-sm">Error-Free</div>
              </Editable>
              <Editable id="home.groundhandling.stat_3.note" defaultContent="Accuracy Record">
                <div className="text-slate-400 text-xs mt-1">Accuracy Record</div>
              </Editable>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-left hover:bg-slate-900/60 transition-all duration-300 group">
              <Editable id="home.groundhandling.stat_4.value" defaultContent="24/7">
                <div className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-2 group-hover:scale-105 transition-transform duration-300 origin-left">24/7</div>
              </Editable>
              <Editable id="home.groundhandling.stat_4.label" defaultContent="Active Support">
                <div className="text-white font-bold text-sm">Active Support</div>
              </Editable>
              <Editable id="home.groundhandling.stat_4.note" defaultContent="Airside Operations">
                <div className="text-slate-400 text-xs mt-1">Airside Operations</div>
              </Editable>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating Ambient Video Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex space-x-3">
        <button
          onClick={() => {
            if (videoRef.current) {
              if (isVideoPlaying) {
                videoRef.current.pause();
                setIsVideoPlaying(false);
              } else {
                videoRef.current.play().catch(err => console.log(err));
                setIsVideoPlaying(true);
              }
            }
          }}
          className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/10 backdrop-blur-md transition-colors shadow-lg cursor-pointer flex items-center justify-center"
          aria-label={isVideoPlaying ? "Pause Video" : "Play Video"}
        >
          {isVideoPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
      </div>
    </section>
  );
}
