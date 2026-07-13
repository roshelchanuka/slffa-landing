"use client";

import { useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';

import HeroSlider from '../components/home/HeroSlider';
import FeaturedServices from '../components/home/FeaturedServices';
import GroundOperations from '../components/home/GroundOperations';
import NewsEvents from '../components/home/NewsEvents';
import CcnTechIntegration from '../components/home/CcnTechIntegration';

export default function Home() {
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
    <div className="flex flex-col">
      {/* Hero Parallax Section */}
      <HeroSlider y={y} opacity={opacity} isMobile={isMobile} />

      {/* Featured Services Grid */}
      <FeaturedServices />

      {/* Ground Handling Operations Section */}
      <GroundOperations />

      {/* Standalone News & Events Section */}
      <NewsEvents />

      {/* CCNhub Technology Integration Section */}
      <CcnTechIntegration />
    </div>
  );
}
