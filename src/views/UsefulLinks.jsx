"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Editable from '../components/Editable';
import { useAdmin } from '../context/AdminContext';
import { 
  Search, 
  Plane, 
  Globe, 
  Building, 
  Layers, 
  ShieldCheck, 
  FileText, 
  TrendingUp, 
  Award, 
  Briefcase, 
  Ship, 
  Compass, 
  Users, 
  Clock, 
  ArrowUpRight, 
  X, 
  HelpCircle
} from 'lucide-react';

// Import widescreen hero and watermark background
const usefulLinksHero = '/api/imageProxy?id=1jiPWWVjS6eOdYS-qCo-LstjSdeNisPfX';
const worldmapair = '/images/worldmapair.jpg';

// Static ES Module Imports for all 13 official portal logos
const logoSlffa = '/api/imageProxy?id=1n4lX0-m1OJy8K_396U5b8p5XvwSZ2NlB';
const logoCaa = '/api/imageProxy?id=1BHwkvdlXjPsdwsG4-92JeuuL_pzQrZuQ';
const logoAasl = '/api/imageProxy?id=1cJYf7COk2A7Iz3LHCyNt48nF9BcGuzZS';
const logoFiata = '/api/imageProxy?id=1T3OGbNrmKR2cYlbs7EXQCr-qEHw_ocig';
const logoIata = '/api/imageProxy?id=1i69W0N1Yn_R84UoKdxND1h2_C3Yl7t9Y';
const logoSrilankan = '/api/imageProxy?id=1Xy8Yz8da6ho3UTQN0JjY2MCRUsKOeCvc';
const logoBoi = '/api/imageProxy?id=1vGer7LsZdSKoWSQvOCnL8KC9oF8Sm_Vt';
const logoNccsl = '/api/imageProxy?id=1DrjAddClY6ZMxWl1FKjPJ_5egRmoSMRh';
const logoCcc = '/api/imageProxy?id=1uQL5jsU_q9X8K_qyzZtuzWI9wIsHFW74';
const logoSlpa = '/api/imageProxy?id=1OPfE_hnGOZJVD2zl-SMCGcDg5xYEd0xk';
const logoCustoms = '/api/imageProxy?id=1eBUA05Zow8-hW_CBzXcThYvXhHvVS3SW';
const logoSlsc = '/api/imageProxy?id=1Yg-36n8msqdh7unXGHBpsU60wP67z_tj';
const logoWorldTime = '/api/imageProxy?id=1gP9hN-ailZQY3oXXcYVDAsh2je-vstnO';

// Secure Lucide icon lookup dictionary
const iconMap = {
  Plane,
  Globe,
  Building,
  Layers,
  ShieldCheck,
  FileText,
  TrendingUp,
  Award,
  Briefcase,
  Ship,
  Compass,
  Users,
  Clock
};

const DynamicIcon = ({ name, className }) => {
  const IconComponent = iconMap[name] || HelpCircle;
  return <IconComponent className={className} />;
};

const usefulLinksData = [
  {
    name: "Sri Lanka Logistics & Freight Forwarders Association (SLFFA)",
    acronym: "SLFFA",
    url: "https://www.slffa.com/",
    category: "logistics",
    description: "The apex body representing the logistics and freight forwarding industry in Sri Lanka, fostering industry cooperation, training, and setting high professional standards.",
    iconName: "Layers",
    logo: logoSlffa
  },
  {
    name: "Civil Aviation Authority of Sri Lanka (CAA)",
    acronym: "CAA",
    url: "https://www.caa.lk/en/",
    category: "aviation",
    description: "The state regulatory authority overseeing aviation safety, security, and licensing standards across Sri Lanka in compliance with global standards.",
    iconName: "Plane",
    logo: logoCaa
  },
  {
    name: "Airport and Aviation Services (Sri Lanka) Ltd.",
    acronym: "AASL",
    url: "https://www.airport.lk/",
    category: "aviation",
    description: "The national airport authority responsible for the management, operation, and development of all civilian airport infrastructures, including BIA Katunayake.",
    iconName: "Building",
    logo: logoAasl
  },
  {
    name: "International Federation of Freight Forwarders Associations (FIATA)",
    acronym: "FIATA",
    url: "https://fiata.org/",
    category: "logistics",
    description: "The largest non-governmental organization representing the global freight forwarding and logistics industry, standardizing transport documents and trade procedures.",
    iconName: "Globe",
    logo: logoFiata
  },
  {
    name: "International Air Transport Association (IATA)",
    acronym: "IATA",
    url: "https://www.iata.org/",
    category: "aviation",
    description: "The trade association for the world’s airlines, supporting aviation activity, formulating industry policy, and standardizing safety and commercial procedures.",
    iconName: "ShieldCheck",
    logo: logoIata
  },
  {
    name: "SriLankan Cargo",
    acronym: "SriLankan Cargo",
    url: "https://www.srilankancargo.com/home",
    category: "cargo",
    description: "The cargo division of SriLankan Airlines, providing extensive air transportation services, maindeck freighter operations, and state-of-the-art cold chain services at BIA.",
    iconName: "FileText",
    logo: logoSrilankan
  },
  {
    name: "Board of Investment of Sri Lanka (BOI)",
    acronym: "BOI",
    url: "https://investsrilanka.com/",
    category: "government",
    description: "The primary agency responsible for promoting, facilitating, and licensing foreign direct investment (FDI) and export-oriented projects in Sri Lanka.",
    iconName: "TrendingUp",
    logo: logoBoi
  },
  {
    name: "National Chamber of Commerce (Sri Lanka)",
    acronym: "NCCSL",
    url: "https://nationalchamber.lk/",
    category: "trade",
    description: "A leading business support organization dedicated to developing domestic commerce, agriculture, and industries by connecting local businesses with global markets.",
    iconName: "Award",
    logo: logoNccsl
  },
  {
    name: "Ceylon Chamber of Commerce",
    acronym: "CCC",
    url: "https://www.chamber.lk/",
    category: "trade",
    description: "The oldest business chamber in Sri Lanka, serving as an influential voice for the private sector and a platform for trade expansion, international joint ventures, and policy advocacy.",
    iconName: "Briefcase",
    logo: logoCcc
  },
  {
    name: "Sri Lanka Ports Authority (SLPA)",
    acronym: "SLPA",
    url: "https://www.slpa.lk/",
    category: "logistics",
    description: "The state agency managing all commercial maritime ports in Sri Lanka, including the Port of Colombo, facilitating global shipping routes and break-bulk logistics.",
    iconName: "Ship",
    logo: logoSlpa
  },
  {
    name: "Sri Lanka Customs",
    acronym: "Customs",
    url: "https://www.customs.gov.lk/",
    category: "government",
    description: "The primary border control and revenue collection agency responsible for customs clearance, tariff enforcement, trade facilitation, and securing national cargo borders.",
    iconName: "Compass",
    logo: logoCustoms
  },
  {
    name: "Sri Lanka Shippers Council",
    acronym: "SLSC",
    url: "https://www.shipperscouncil.lk/",
    category: "logistics",
    description: "The peak advisory council representing the interests of local importers, exporters, and shippers in negotiations with government bodies, shipping lines, and logistics operators.",
    iconName: "Users",
    logo: logoSlsc
  },
  {
    name: "World Time",
    acronym: "World Time",
    url: "https://www.timeanddate.com/worldclock/",
    category: "tools",
    description: "A vital synchronization resource tracking global time zones, city times, and regional calendar standards for international flight scheduling and global supply chain tracking.",
    iconName: "Clock",
    logo: logoWorldTime
  }
];

const categories = [
  { id: 'all', name: 'All Portals' },
  { id: 'aviation', name: 'Aviation & Cargo' },
  { id: 'logistics', name: 'Logistics & Shipping' },
  { id: 'government', name: 'Government & Customs' },
  { id: 'trade', name: 'Chambers of Commerce' },
  { id: 'tools', name: 'Utility Tools' }
];

// Robust dynamic fallback logo component
const LogoLoader = ({ logo, acronym, iconName }) => {
  const [imageError, setImageError] = useState(false);

  // Generates unique colored gradients dynamically based on monogram initials
  const getGradient = (text) => {
    const sum = text.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const gradients = [
      'from-blue-600 to-indigo-700',
      'from-cyan-600 to-blue-700',
      'from-indigo-600 to-purple-700',
      'from-emerald-600 to-teal-700',
      'from-sky-600 to-blue-800',
      'from-violet-600 to-fuchsia-700'
    ];
    return gradients[sum % gradients.length];
  };

  if (imageError || !logo) {
    return (
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getGradient(acronym)} flex flex-col items-center justify-center shadow-md relative overflow-hidden transition-all duration-500 shrink-0`}>
        <span className="text-white text-[10px] font-black tracking-wider uppercase z-10 px-1 text-center truncate max-w-full">
          {acronym.substring(0, 4)}
        </span>
        {/* Dynamic rotated spring-scale icon on hover */}
        <div className="absolute -bottom-2 -right-2 opacity-15 text-white z-0 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
          <DynamicIcon name={iconName} className="h-10 w-10" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 p-2 flex items-center justify-center shadow-sm relative transition-all duration-500 bg-white dark:bg-slate-950 shrink-0">
      <img 
        src={logo}
        alt={`${acronym} Logo`}
        className="w-full h-full object-contain"
        onError={() => setImageError(true)}
      />
    </div>
  );
};

// React Framer-Motion Animation Variants
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 16 }
  }
};

// Scroll trigger reveal animations for cards
const cardVariants = {
  hidden: { opacity: 0, y: 55, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 14
    }
  }
};

export default function UsefulLinks() {
  const { isEditMode, getContent } = useAdmin();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // React Framer Motion Parallax Bindings (widescreen viewport scale)
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

  // Real-time keyword filter query
  const filteredLinks = useMemo(() => {
    return usefulLinksData.filter(link => {
      const name = getContent(`usefullinks.portal.${link.acronym}.name`, link.name);
      const description = getContent(`usefullinks.portal.${link.acronym}.description`, link.description);
      const matchesSearch = 
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.acronym.toLowerCase().includes(searchQuery.toLowerCase()) ||
        description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || link.category === selectedCategory || (selectedCategory === 'aviation' && link.category === 'cargo');
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, getContent]);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-24 relative overflow-hidden">
      {/* Subtle global worldmap background watermark grid */}
      <div 
        className="absolute inset-0 bg-repeat opacity-[0.035] select-none pointer-events-none z-0 mix-blend-overlay"
        style={{ backgroundImage: `url('${worldmapair}')`, backgroundSize: '750px' }}
      ></div>

      {/* Slowly breathing background neon decorative orbs */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl -z-10 animate-pulse pointer-events-none"></div>
      <div className="absolute top-2/3 right-10 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl -z-10 animate-pulse pointer-events-none"></div>

      {/* Full-screen Hero Header Section */}
      <section className="relative h-[55vh] min-h-[380px] sm:h-[65vh] sm:min-h-[450px] lg:h-screen flex items-center bg-slffaBlue overflow-hidden">
        {/* Parallax Background Container */}
        <motion.div 
          style={isMobile ? {} : { y, opacity }}
          className="absolute inset-0 z-0"
        >
          {/* Split official brand navy blue gradient overlay (matching Home Page) */}
          <div className="absolute inset-0 bg-gradient-to-r from-slffaBlue/85 via-slffaBlue/50 to-slffaBlue/15 lg:from-slffaBlue/80 lg:via-slffaBlue/50 lg:to-transparent z-10"></div>
          
          {/* Smooth zoom scale transition background image */}
          <Editable id="usefullinks.hero.image" type="image" defaultContent={usefulLinksHero}>
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url('${usefulLinksHero}')` }}
            ></motion.div>
          </Editable>
        </motion.div>
        
        {/* Beautiful bottom feathering gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-slate-50/60 via-slate-50/25 to-transparent z-15 pointer-events-none"></div>
        
        <motion.div 
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20 text-left"
        >
          {/* Breadcrumbs with initial spring reveal (left-aligned matching Home/Services) */}
          <motion.nav 
            variants={heroItemVariants}
            className="flex items-center space-x-2 text-xs sm:text-sm font-semibold tracking-wider text-blue-300 mb-4 uppercase"
          >
            <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <span className="text-blue-400/60">/</span>
            <span className="text-white">Useful Links</span>
          </motion.nav>
          
          <Editable id="usefullinks.hero.title" defaultContent="Useful Links & Portals">
            <motion.h1 
              variants={heroItemVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-4xl"
            >
              Useful Links & Portals
            </motion.h1>
          </Editable>
          <Editable id="usefullinks.hero.description" type="textarea" defaultContent="A comprehensive, centralized directory connecting freight forwarders and shippers with leading national, international, and governmental trade bodies.">
            <motion.p 
              variants={heroItemVariants}
              className="max-w-2xl text-lg sm:text-xl text-blue-100 font-light leading-relaxed"
            >
              A comprehensive, centralized directory connecting freight forwarders and shippers with leading national, international, and governmental trade bodies.
            </motion.p>
          </Editable>
        </motion.div>

        {/* Home Screen Bouncing Scroll Cue */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex-col items-center cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight * 0.85,
              behavior: 'smooth'
            });
          }}
        >
          <span className="text-white/60 text-xs mb-2 tracking-widest uppercase font-semibold">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-[2px] h-10 bg-gradient-to-b from-white/70 to-transparent"
          ></motion.div>
        </motion.div>
      </section>

      {/* Main Filter & Content Section - Adjusted spacing to 16 for elegant visual separation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-20">
        
        {/* Beautiful spacious title block for Search */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-center sm:text-left mb-6"
        >
          <Editable id="usefullinks.search.title" defaultContent="Search Directory">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Search Directory</h2>
          </Editable>
          <Editable id="usefullinks.search.subtitle" defaultContent="Filter through our comprehensive registry of trusted trade partners and regulators.">
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Filter through our comprehensive registry of trusted trade partners and regulators.</p>
          </Editable>
        </motion.div>

        {/* Interactive Search Bar Panel with glassmorphism and spring scroll slide-in */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 85, damping: 15 }}
          className="bg-white dark:bg-slate-950/75 dark:bg-slate-900/75 backdrop-blur-md rounded-3xl p-4 sm:p-5 shadow-[0_15px_50px_rgba(0,0,0,0.02)] border border-slate-200 dark:border-slate-800/80 dark:border-slate-700/80 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between"
        >
          <div className="relative w-full md:max-w-md flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input 
              type="text"
              placeholder="Search by portal name, keyword, initials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 rounded-2xl py-3.5 pl-12 pr-10 focus:outline-none focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 focus:ring-4 focus:ring-blue-500/10 focus:shadow-[0_0_25px_rgba(59,130,246,0.15)] transition-all duration-300 text-sm font-medium"
            />
            {/* Spin-in / Spin-out clear query button with AnimatePresence */}
            <AnimatePresence>
              {searchQuery && (
                <motion.button 
                  initial={{ scale: 0, rotate: -90, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  exit={{ scale: 0, rotate: 90, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:text-slate-400 transition-colors"
                >
                  <X className="h-4 w-4" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-semibold shrink-0">
            Showing {filteredLinks.length} of {usefulLinksData.length} portals
          </div>
        </motion.div>

        {/* Categories Tab Bar featuring fluid sliding background transition and scroll slide-in */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 }}
          className="flex overflow-x-auto pb-4 mb-10 w-full scrollbar-hide space-x-2.5"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            const count = usefulLinksData.filter(link => cat.id === 'all' || link.category === cat.id || (cat.id === 'aviation' && link.category === 'cargo')).length;
            
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-6 py-3 rounded-full text-sm font-bold tracking-wide uppercase whitespace-nowrap cursor-pointer transition-all duration-300 border group
                  ${isActive 
                    ? 'border-transparent text-white shadow-lg shadow-blue-500/20' 
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 hover:border-slate-300 dark:hover:border-slate-600'}`}
              >
                {/* Framer-Motion layoutId: High-end smooth sliding background pill */}
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryIndicator"
                    className="absolute inset-0 bg-blue-600 rounded-full z-0"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10 flex items-center space-x-2.5">
                  <span>{cat.name}</span>
                  
                  {/* Micro-scale spring counter badge */}
                  <motion.span 
                    layout
                    className={`text-xs px-2 py-0.5 rounded-full font-bold transition-all duration-300
                      ${isActive ? 'bg-blue-800 text-blue-100 scale-105' : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 group-hover:bg-slate-250 dark:group-hover:bg-slate-600'}`}
                  >
                    {count}
                  </motion.span>
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Directory Grid with morphing coordinates and high-fidelity viewport reveals */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredLinks.map((link) => (
              <motion.div
                layout
                key={link.acronym}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Advanced Vercel-style glowing neon border on hover */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-[1px]"></div>
                
                {/* Card solid white backplate */}
                <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-[23px] -z-10"></div>

                <div>
                  {/* Top card metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <LogoLoader 
                      logo={link.logo} 
                      acronym={link.acronym} 
                      iconName={link.iconName} 
                    />
                    
                    <span className="text-[10px] sm:text-xs font-black tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-slate-900 px-3 py-1 rounded-full uppercase">
                      {link.category === 'cargo' ? 'aviation' : link.category}
                    </span>
                  </div>

                  {/* Body details with sleek expanding title underline on hover */}
                  <Editable id={`usefullinks.portal.${link.acronym}.name`} defaultContent={link.name}>
                    <h3 className="relative inline-block text-slate-900 dark:text-white font-extrabold text-lg sm:text-xl leading-snug group-hover:text-blue-600 dark:text-blue-400 transition-colors duration-300 pb-1">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
                    </h3>
                  </Editable>
                  
                  <Editable id={`usefullinks.portal.${link.acronym}.description`} type="textarea" defaultContent={link.description}>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-normal mt-3 mb-6 line-clamp-4 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                      {link.description}
                    </p>
                  </Editable>
                </div>

                {/* Footer anchor hyperlink with high tactile responsive diagonal arrow */}
                <div className="flex flex-col mt-auto border-t border-slate-100 dark:border-slate-800 pt-4">
                  {isEditMode && (
                    <div className="mb-2">
                      <Editable id={`usefullinks.portal.${link.acronym}.url`} defaultContent={link.url}>
                        <span className="text-[11px] text-slate-400 hover:text-blue-500 cursor-pointer font-mono block truncate max-w-full">
                          URL: {link.url}
                        </span>
                      </Editable>
                    </div>
                  )}
                  <a 
                    href={getContent(`usefullinks.portal.${link.acronym}.url`, link.url)} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors cursor-pointer"
                  >
                    Visit Portal Website
                    <ArrowUpRight className="ml-1.5 h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search State with spring reveal */}
        {filteredLinks.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white dark:bg-slate-900 border border-slate-150 dark:border-slate-800 rounded-3xl shadow-sm max-w-lg mx-auto"
          >
            <HelpCircle className="h-12 w-12 text-slate-400 dark:text-slate-500 dark:text-slate-400 mx-auto mb-4" />
            <h3 className="text-slate-800 dark:text-white font-bold text-lg mb-1">No Portals Found</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs mx-auto px-4 leading-relaxed">
              We couldn't find any portals matching "{searchQuery}". Try adjusting your keywords or category filters.
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-6 bg-blue-600 hover:bg-blue-50 dark:bg-slate-9000 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </motion.div>
        )}

      </div>
    </div>
  );
}
