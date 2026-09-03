"use client";

import { useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';

import HeroSlider from '../components/home/HeroSlider';
import WhoWeAre from '../components/home/WhoWeAre';
import FeaturedServices from '../components/home/FeaturedServices';
import SimpleNewsIntro from '../components/home/SimpleNewsIntro';
import CcnTechIntegration from '../components/home/CcnTechIntegration';
import UsefulLinksPromo from '../components/home/UsefulLinksPromo';

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

      {/* Who We Are Section */}
      <WhoWeAre />

      {/* Featured Services (News & STC) */}
      <FeaturedServices hideCoolRooms={true} showNewsIntro={true} />


      {/* Useful Links Promo */}
      <UsefulLinksPromo />


      {/* Ground Handling Operations Section (Removed) */}

      {/* CCNhub Technology Integration Section */}
      {/* <CcnTechIntegration /> */}
      
      {/* Member Logos Section (Removed) */}
    </div>
  );
}
