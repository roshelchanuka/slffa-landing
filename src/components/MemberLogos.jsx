"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Editable from './Editable';

import { logoUrls } from '../data/extractedLogos';

export default function MemberLogos() {
  // Use all provided logos for the slider
  const logosSubset = logoUrls;
  const totalCount = logosSubset.length;

  const x = useMotionValue(0);

  // Slider layout dimensions
  const itemWidth = 140; 
  const gap = 28; 
  const stepWidth = itemWidth + gap;
  const totalWidth = totalCount * stepWidth;
  const halfWidth = totalWidth / 2;

  // Continuous linear animation scrolling
  useEffect(() => {
    if (totalCount === 0) return;
    
    // Animate x continuously from 0 to -totalWidth (moving left)
    const controls = animate(x, -totalWidth, {
      ease: "linear",
      duration: totalCount * 2.2, // 2.2 seconds per logo card for a gentle, readable pace
      repeat: Infinity
    });

    controls.play();

    return () => controls.stop();
  }, [totalCount, totalWidth, x]);

  if (totalCount === 0) return null;

  return (
    <section 
      className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 overflow-hidden relative select-none transition-colors duration-300"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-50 dark:bg-slate-900/50 dark:bg-blue-900/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-14">
          <Editable id="memberlogos.title" defaultContent="Our Member Network">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Member Network</h2>
          </Editable>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <Editable id="memberlogos.description" type="textarea" defaultContent="SLFFA Cargo Services is powered by Sri Lanka's leading freight forwarding fraternity and global logistics partners. Together, we drive seamless cargo terminal operations.">
            <p className="text-lg text-slate-655 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              SLFFA Cargo Services is powered by Sri Lanka's leading freight forwarding fraternity and global logistics partners. Together, we drive seamless cargo terminal operations.
            </p>
          </Editable>
        </div>

        {/* Viewport for the continuous marquee */}
        <div className="relative w-full overflow-hidden py-12 flex items-center justify-center min-h-[180px]">
          {/* Centered Track Anchor (width 0px) */}
          <div className="relative flex items-center justify-center" style={{ width: '0px', height: '140px' }}>
            {logosSubset.map((url, i) => {
              // Calculate continuous relative X position for each logo
              // as x goes from 0 to -totalWidth, rawX moves to the left
              const itemX = useTransform(x, (latestX) => {
                const rawX = i * stepWidth + latestX;
                // Seamless modulo wrapping between -halfWidth and halfWidth
                const wrapped = ((((rawX + halfWidth) % totalWidth) + totalWidth) % totalWidth) - halfWidth;
                return wrapped;
              });

              // Map the relative X position to styling properties
              const scale = useTransform(itemX, [-stepWidth * 2.5, -stepWidth * 1.5, 0, stepWidth * 1.5, stepWidth * 2.5], [0.85, 1.08, 1.25, 1.08, 0.85]);
              const opacity = useTransform(itemX, [-stepWidth * 3, -stepWidth * 2, 0, stepWidth * 2, stepWidth * 3], [0.3, 0.9, 1, 0.9, 0.3]);
              const grayscale = useTransform(itemX, [-stepWidth * 2.5, -stepWidth * 2, 0, stepWidth * 2, stepWidth * 2.5], [100, 0, 0, 0, 100]);
              const filter = useTransform(grayscale, (g) => `grayscale(${g}%)`);

              return (
                <motion.div
                  key={`marquee-card-${i}`}
                  style={{
                    position: 'absolute',
                    x: itemX,
                    scale,
                    opacity,
                    filter,
                    width: `${itemWidth}px`,
                    height: '110px',
                    left: `-${itemWidth / 2}px` // center the card itself on its active coordinate
                  }}
                  className="flex items-center justify-center bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-shadow duration-300 hover:shadow-md hover:border-blue-500/30"
                >
                  <div className="w-full h-full p-4 flex items-center justify-center">
                    <img
                      src={url}
                      alt={`SLFFA Member Logo ${i + 1}`}
                      className="max-w-full max-h-full object-contain pointer-events-none"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
