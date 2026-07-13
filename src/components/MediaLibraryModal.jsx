"use client";

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Upload, 
  Trash2, 
  Copy, 
  Check, 
  Image as ImageIcon, 
  ExternalLink,
  Search,
  CheckCircle2,
  Edit3
} from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

// Import default images to accurately track visual assignments
const homeSlider3 = '/images/home-slider-3.png';
const homeSlider4 = '/images/home-slider-4.png';
const img2_8CoolRoom = '/images/ChatGPT Image Jun 15, 2026 at 04_00_22 PM.png';
const chatgptImgJun25 = '/images/ChatGPT Image Jun 25, 2026 at 03_16_35 PM.png';
const slffaCargo7 = '/images/slffacargo(7).png';
const chatgptImgJun15 = '/images/ChatGPT Image Jun 15, 2026 at 11_59_54 AM.png';
const chatgptImgJun15_2 = '/images/ChatGPT Image Jun 15, 2026 at 12_14_54 PM.png';
const chatgptImgJun15_3 = '/images/ChatGPT Image Jun 15, 2026 at 01_09_59 PM.png';
const homeSlider2 = '/images/home-slider-2.png';
const worldmapair = '/images/worldmapair.jpg';
const servicesHero = '/images/services-hero.png';
const yearsOfServiceImg = '/images/31 Years of Service Excellence.png';
const ground2 = '/images/ground2.jpg';
const ground3 = '/images/ground3.jpg';
const imgAiCoolroom = '/images/ai_coolroom.png';
const bgImage = '/images/download.png';
const airwaybillImg = '/images/Air Waybill.jpg';
const usefulLinksHero = '/images/useful-links-hero.png';
const chatgptImgJun9 = '/images/ChatGPT Image Jun 9, 2026 at 03_30_36 PM.png';
const chatgptImgJun25_contact = '/images/ChatGPT Image Jun 25, 2026 at 04_00_52 PM.png';

export default function MediaLibraryModal() {
  const { 
    isMediaLibraryOpen, 
    setIsMediaLibraryOpen, 
    mediaItems, 
    addMediaItem, 
    deleteMediaItem,
    mediaSelectionCallback,
    setMediaSelectionCallback,
    libraryDefaultTab,
    setLibraryDefaultTab,
    updateContent,
    replaceMediaUrl,
    updateMediaItem,
    getContent
  } = useAdmin();

  const [copiedIndex, setCopiedIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [uploadLocation, setUploadLocation] = useState('My Uploads');
  const [editingItem, setEditingItem] = useState(null);
  const [assignSuccessMsg, setAssignSuccessMsg] = useState('');
  const fileInputRef = useRef(null);
  const locationPath = usePathname();

  const assignDestinations = [
    { name: 'Home Page Hero (Slide 1)', id: 'home.hero.slide_1.image', defaultVal: chatgptImgJun15 },
    { name: 'Home Page Hero (Slide 2)', id: 'home.hero.slide_2.image', defaultVal: homeSlider2 },
    { name: 'Home Page Hero (Slide 3)', id: 'home.hero.slide_3.image', defaultVal: chatgptImgJun15_2 },
    { name: 'Home Page Hero (Slide 4)', id: 'home.hero.slide_4.image', defaultVal: chatgptImgJun15_3 },
    { name: 'Home Page Hero (Slide 5)', id: 'home.hero.slide_5.image', defaultVal: img2_8CoolRoom },
    { name: 'Home Page Hero (Slide 6)', id: 'home.hero.slide_6.image', defaultVal: chatgptImgJun25 },
    { name: 'Home Page - Who We Are Profile Image', id: 'home.about.image', defaultVal: slffaCargo7 },
    { name: 'About Us - Profile/Callout Image', id: 'about.callout.image', defaultVal: worldmapair },
    { name: 'Our Services - Hero Background', id: 'services.hero.image', defaultVal: servicesHero },
    { name: 'Our Services - Decades of Trust Stat Image', id: 'services.trust.image', defaultVal: yearsOfServiceImg },
    { name: 'Our Services - Facilities Background', id: 'services.facilities.bg', defaultVal: ground2 },
    { name: 'Our Services - Footer CTA Background', id: 'services.cta.image', defaultVal: ground3 },
    { name: 'Cool Rooms - Main Thermal Image', id: 'coolrooms.thermal.image', defaultVal: imgAiCoolroom },
    { name: 'CCN Hub - Hero Background', id: 'ccnhub.hero.image', defaultVal: bgImage },
    { name: 'Tools - Hero Background', id: 'tools.hero.image', defaultVal: chatgptImgJun9 },
    { name: 'Tools - Air Waybill Specimen Image', id: 'tools.awb.image.src', defaultVal: airwaybillImg },
    { name: 'Useful Links - Hero Background', id: 'usefullinks.hero.image', defaultVal: usefulLinksHero },
    { name: 'Contact Us - Hero Background', id: 'contact.hero.image', defaultVal: chatgptImgJun25_contact }
  ];

  const handleAssignDirectly = (destId, url) => {
    updateContent(destId, url);
    const destName = assignDestinations.find(d => d.id === destId)?.name || 'Page Asset';
    setAssignSuccessMsg(`Successfully assigned image to: ${destName}!`);
    setTimeout(() => setAssignSuccessMsg(''), 4500);
  };

  useEffect(() => {
    if (isMediaLibraryOpen) {
      if (libraryDefaultTab && libraryDefaultTab !== 'All') {
        setActiveTab(libraryDefaultTab);
      } else {
        // Fallback to route mapping
        const path = locationPath.pathname;
        if (path === '/') {
          setActiveTab('Home Page');
        } else if (path.startsWith('/about')) {
          setActiveTab('About Us');
        } else if (path.startsWith('/services')) {
          setActiveTab('Our Services');
        } else if (path.startsWith('/cool-rooms')) {
          setActiveTab('Cool Rooms');
        } else {
          setActiveTab('All');
        }
      }
    }
  }, [isMediaLibraryOpen, libraryDefaultTab, locationPath.pathname]);

  if (!isMediaLibraryOpen) return null;

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const newItem = {
            id: 'media_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
            name: file.name,
            url: reader.result,
            size: (file.size / 1024).toFixed(1) + ' KB',
            type: file.type,
            createdAt: new Date().toLocaleDateString(),
            location: uploadLocation
          };
          addMediaItem(newItem);
        };
        reader.readAsDataURL(file);
      }
    });
    // Reset file input
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleCopy = (url, idx) => {
    navigator.clipboard.writeText(url);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleSelect = (url) => {
    if (mediaSelectionCallback) {
      mediaSelectionCallback(url);
      setMediaSelectionCallback(null);
    }
    setIsMediaLibraryOpen(false);
  };

  const handleClose = () => {
    setMediaSelectionCallback(null);
    setLibraryDefaultTab('All');
    setEditingItem(null);
    setIsMediaLibraryOpen(false);
  };

  const filteredItems = mediaItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'All' || item.location === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10 font-sans">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4 }}
          className="relative w-full max-w-6xl h-[85vh] bg-white dark:bg-slate-950 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col z-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-800 dark:text-slate-200 flex items-center gap-2.5">
                <ImageIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                Global Media Library
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                {mediaSelectionCallback 
                  ? 'Select an image from the library below to insert it' 
                  : 'Upload, replace, and manage images used across the website'}
              </p>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-700 dark:text-slate-300 transition cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Success Banner */}
          <AnimatePresence>
            {assignSuccessMsg && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="bg-emerald-500 text-white font-semibold px-8 py-3 text-xs uppercase tracking-widest flex items-center justify-center shrink-0 border-b border-emerald-600 shadow-inner text-center leading-relaxed"
              >
                {assignSuccessMsg}
              </motion.div>
            )}
          </AnimatePresence>
 
          <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
            {/* Left Panel: Upload Zone */}
            <div className="w-full md:w-80 border-r border-slate-100 dark:border-slate-800 p-6 flex flex-col gap-6 bg-slate-50 dark:bg-slate-900/40 shrink-0">
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-slate-700 dark:text-slate-300 text-sm mb-3">Add New Media</h3>
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-blue-500 rounded-2xl p-8 text-center bg-white dark:bg-slate-950 hover:bg-slate-50 dark:bg-slate-900 transition cursor-pointer group shadow-sm"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      multiple
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <div className="bg-blue-50 dark:bg-slate-900 text-blue-600 dark:text-blue-400 p-3.5 rounded-2xl mb-4 group-hover:scale-110 transition duration-300">
                      <Upload className="h-6 w-6" />
                    </div>
                    <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">Upload Photos</span>
                    <span className="text-slate-400 text-xs mt-1 leading-relaxed">
                      Click to browse files or drag and drop here
                    </span>
                    <span className="text-[10px] text-slate-400 mt-2 font-mono">
                      PNG, JPG, WEBP, GIF
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                    Upload Destination Category
                  </label>
                  <select
                    value={uploadLocation}
                    onChange={(e) => setUploadLocation(e.target.value)}
                    className="w-full h-11 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 text-xs font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition cursor-pointer shadow-sm"
                  >
                    <option value="My Uploads">My Uploads (General)</option>
                    <option value="Home Page">Home Page</option>
                    <option value="About Us">About Us</option>
                    <option value="Our Services">Our Services</option>
                    <option value="Airport Floor Gallery">Airport Floor Gallery</option>
                    <option value="Cool Rooms">Cool Rooms</option>
                  </select>
                </div>
              </div>

              {/* Tips & Info */}
              <div className="mt-auto border border-blue-100 dark:border-blue-900/40 bg-blue-50 dark:bg-slate-900/50 rounded-2xl p-4">
                <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-1">Local Storage Notice</h4>
                <p className="text-[11px] text-blue-700 dark:text-blue-400/80 leading-relaxed font-medium">
                  Images are converted to Base64 and stored in your browser's Local Storage. Replacing files will immediately update them anywhere they are loaded.
                </p>
              </div>
            </div>

            {/* Right Panel: Gallery Grid OR Editing Dashboard */}
            {editingItem ? (
              <div className="flex-grow flex flex-col overflow-hidden bg-slate-50 dark:bg-slate-900/20">
                {/* Back bar */}
                <div className="px-8 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-950 shrink-0">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setEditingItem(null)}
                      className="h-8 px-3 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:bg-slate-900 transition cursor-pointer flex items-center gap-1.5"
                    >
                      ← Back to Library
                    </button>
                    <span className="text-slate-350 text-xs">/</span>
                    <span className="font-extrabold text-slate-750 text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400">Edit Asset Details</span>
                  </div>
                  <span className="text-slate-400 text-[10px] font-mono select-all bg-slate-50 dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-100 dark:border-slate-800">
                    ID: {editingItem.id}
                  </span>
                </div>

                {/* Main panel columns */}
                <div className="flex-grow overflow-y-auto p-8 flex flex-col lg:flex-row gap-8">
                  {/* Image Column */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div>
                      <label className="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2.5">
                        Media Preview
                      </label>
                      <div className="aspect-video w-full rounded-2xl border border-slate-150 bg-slate-900/5 flex items-center justify-center overflow-hidden shadow-inner p-2.5 relative group">
                        <img 
                          src={editingItem.url} 
                          alt={editingItem.name} 
                          className="max-h-full max-w-full object-contain drop-shadow-md rounded"
                        />
                      </div>
                    </div>

                    {/* Image Replacer Dropzone */}
                    <div>
                      <label className="block text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-2">
                        Replace File (Overwrite Site-Wide)
                      </label>
                      <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-blue-500 rounded-2xl p-6 text-center bg-white dark:bg-slate-950 hover:bg-slate-50 dark:bg-slate-900/50 transition cursor-pointer relative group shadow-sm">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onloadend = () => {
                                const newBase64 = reader.result;
                                replaceMediaUrl(editingItem.url, newBase64);
                                updateMediaItem(editingItem.id, {
                                  url: newBase64,
                                  size: (file.size / 1024).toFixed(1) + ' KB'
                                });
                                // Keep local editor state in sync
                                setEditingItem(prev => ({
                                  ...prev,
                                  url: newBase64,
                                  size: (file.size / 1024).toFixed(1) + ' KB'
                                }));
                                setAssignSuccessMsg("Successfully replaced image in Media Library and all site components!");
                                setTimeout(() => setAssignSuccessMsg(''), 4500);
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                          className="absolute inset-0 opacity-0 cursor-pointer z-10"
                        />
                        <Upload className="h-6 w-6 text-slate-400 group-hover:text-blue-500 transition-colors mb-2 animate-bounce" />
                        <span className="text-slate-700 dark:text-slate-300 font-bold text-xs group-hover:text-blue-500 transition-colors">
                          Drop new image or click to replace file
                        </span>
                        <span className="text-[10px] text-slate-400 mt-1.5 leading-relaxed max-w-[280px]">
                          Automatically swaps this photo in any website location currently referencing/calling it.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Settings & Assignments Column */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="bg-white dark:bg-slate-950 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm space-y-4">
                      <h4 className="font-extrabold text-slate-800 dark:text-slate-200 text-sm border-b border-slate-50 pb-2">Asset Properties</h4>
                      
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Image Label / Filename
                        </label>
                        <input 
                          type="text"
                          value={editingItem.name}
                          onChange={(e) => {
                            const newName = e.target.value;
                            updateMediaItem(editingItem.id, { name: newName });
                            setEditingItem(prev => ({ ...prev, name: newName }));
                          }}
                          className="w-full h-11 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 text-xs font-bold text-slate-700 dark:text-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Library Category
                        </label>
                        <select
                          value={editingItem.location}
                          onChange={(e) => {
                            const newLoc = e.target.value;
                            updateMediaItem(editingItem.id, { location: newLoc });
                            setEditingItem(prev => ({ ...prev, location: newLoc }));
                          }}
                          className="w-full h-11 border border-slate-200 dark:border-slate-800 rounded-xl px-3.5 text-xs font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                        >
                          <option value="My Uploads">My Uploads (General)</option>
                          <option value="Home Page">Home Page</option>
                          <option value="About Us">About Us</option>
                          <option value="Our Services">Our Services</option>
                          <option value="Airport Floor Gallery">Airport Floor Gallery</option>
                          <option value="Cool Rooms">Cool Rooms</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-[10px] font-mono text-slate-400 border-t border-slate-50 pt-4">
                        <div>Size: <span className="font-bold text-slate-600 dark:text-slate-400">{editingItem.size}</span></div>
                        <div>Date: <span className="font-bold text-slate-600 dark:text-slate-400">{editingItem.createdAt}</span></div>
                      </div>
                    </div>

                    {/* Active Assignment Checker */}
                    <div className="bg-white dark:bg-slate-950 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm">
                      <h4 className="font-extrabold text-slate-800 dark:text-slate-200 text-sm mb-1 pb-1">Assign to Page Section</h4>
                      <p className="text-slate-400 text-[10px] leading-relaxed mb-4">
                        Select a layout location below to assign this photo. Green rows show where this image is currently active.
                      </p>

                      <div className="max-h-[220px] overflow-y-auto space-y-1.5 pr-1 scrollbar-thin">
                        {assignDestinations.map(dest => {
                          const isAssigned = getContent(dest.id, dest.defaultVal) === editingItem.url;
                          return (
                            <button
                              key={dest.id}
                              onClick={() => handleAssignDirectly(dest.id, editingItem.url)}
                              className={`w-full flex items-center justify-between px-3 py-2 rounded-xl border text-[11px] transition-all duration-200 cursor-pointer ${
                                isAssigned 
                                  ? 'bg-emerald-500/10 border-emerald-300 text-emerald-950 font-bold shadow-sm shadow-emerald-50/50' 
                                  : 'bg-white dark:bg-slate-950 border-slate-150 text-slate-650 hover:bg-slate-50 dark:bg-slate-900'
                              }`}
                            >
                              <span>{dest.name}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-[9px] text-slate-400 font-mono hidden sm:inline">{dest.id}</span>
                                {isAssigned && (
                                  <span className="bg-emerald-500 text-white font-extrabold text-[8px] px-1.5 py-0.5 rounded uppercase tracking-widest">
                                    Active Here
                                  </span>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-grow flex flex-col overflow-hidden">
                {/* Search Bar */}
                <div className="px-8 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4 bg-white dark:bg-slate-950 shrink-0">
                  <div className="relative flex-grow max-w-md">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search images by filename..."
                      className="w-full pl-10 pr-4 h-10 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition"
                    />
                  </div>
                  <div className="text-xs text-slate-400 font-semibold ml-auto">
                    Showing {filteredItems.length} of {mediaItems.length} images
                  </div>
                </div>

                {/* Category tabs */}
                <div className="px-8 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2 bg-slate-50 dark:bg-slate-900/50 overflow-x-auto shrink-0 scrollbar-none">
                  {['All', 'Home Page', 'About Us', 'Our Services', 'Airport Floor Gallery', 'Cool Rooms', 'My Uploads'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer whitespace-nowrap border ${
                        activeTab === tab
                          ? 'bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-500/10'
                          : 'bg-white dark:bg-slate-950 border-slate-250 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:bg-slate-900 hover:text-slate-800 dark:text-slate-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Grid Area */}
                <div className="flex-grow overflow-y-auto p-8 bg-slate-50 dark:bg-slate-900/30">
                  {filteredItems.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-8">
                      <div className="bg-slate-100 dark:bg-slate-800 text-slate-400 p-5 rounded-full mb-4">
                        <ImageIcon className="h-10 w-10" />
                      </div>
                      <h3 className="font-bold text-slate-700 dark:text-slate-300 text-lg">No media found</h3>
                      <p className="text-slate-400 text-sm mt-1 max-w-sm leading-relaxed">
                        {searchQuery 
                          ? 'No images match your current search query. Try typing something else.' 
                          : 'Your Media Library is currently empty. Upload some images from the left panel to get started!'}
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                      {filteredItems.map((item, idx) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-150 overflow-hidden shadow-sm hover:shadow-md transition duration-300 group flex flex-col relative"
                        >
                          {/* Thumbnail Container */}
                          <div className="aspect-square bg-slate-50 dark:bg-slate-900 relative flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-slate-800">
                            {/* Location Tag Badge */}
                            {item.location && (
                              <span className="absolute top-2 left-2 bg-slate-900/75 backdrop-blur-md text-[9px] font-extrabold text-white px-2 py-0.5 rounded-md border border-white/5 uppercase tracking-wider z-10 pointer-events-none">
                                {item.location}
                              </span>
                            )}
                            <img 
                              src={item.url} 
                              alt={item.name} 
                              className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                            />
                            {/* Hover action overlay */}
                            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-2">
                              {mediaSelectionCallback ? (
                                <button
                                  onClick={() => handleSelect(item.url)}
                                  className="bg-blue-600 text-white font-bold px-4 py-2 rounded-xl text-xs hover:bg-blue-700 transition shadow-md shadow-blue-500/20 cursor-pointer flex items-center gap-1 hover:scale-105"
                                >
                                  <CheckCircle2 className="h-3.5 w-3.5" />
                                  Select Image
                                </button>
                              ) : (
                                <>
                                  <button
                                    onClick={() => setEditingItem(item)}
                                    className="bg-blue-600 text-white font-bold px-3 py-1.5 rounded-xl text-xs hover:bg-blue-700 hover:scale-105 transition shadow-sm cursor-pointer flex items-center justify-center gap-1.5 w-full font-bold"
                                  >
                                    <Edit3 className="h-3.5 w-3.5 text-blue-200" />
                                    Edit / Assign
                                  </button>
                                  <button
                                    onClick={() => handleCopy(item.url, idx)}
                                    className="bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-semibold px-3 py-1.5 rounded-xl text-xs hover:bg-slate-105 transition shadow-sm cursor-pointer flex items-center gap-1 hover:scale-105 w-full justify-center"
                                  >
                                    {copiedIndex === idx ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                                    {copiedIndex === idx ? 'Copied!' : 'Copy Path/URL'}
                                  </button>
                                  <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white dark:bg-slate-950/90 text-slate-700 dark:text-slate-300 p-2 rounded-full hover:bg-white dark:bg-slate-950 transition cursor-pointer"
                                    title="View full screen"
                                  >
                                    <ExternalLink className="h-3.5 w-3.5" />
                                  </a>
                                </>
                              )}
                              <button
                                onClick={() => deleteMediaItem(idx)}
                                className="absolute top-2 right-2 bg-white dark:bg-slate-950/95 text-rose-600 p-2 rounded-full hover:bg-rose-600 hover:text-white transition shadow-sm cursor-pointer hover:scale-105 z-10"
                                title="Delete from Library"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>

                          {/* Card Info */}
                          <div className="p-3.5 flex-grow flex flex-col justify-between">
                            <h4 className="font-bold text-slate-700 dark:text-slate-300 text-xs truncate" title={item.name}>
                              {item.name}
                            </h4>
                            <div className="flex items-center justify-between mt-2 text-[10px] text-slate-400 font-mono">
                              <span>{item.size}</span>
                              <span>{item.createdAt}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
