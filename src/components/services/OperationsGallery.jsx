"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Maximize2, X, ChevronLeft, ChevronRight, Pencil, Trash2, PlusCircle, Pencil as PencilIcon 
} from 'lucide-react';
import { initialGalleryData } from '../../data/servicesData';
import { useAdmin } from '../../context/AdminContext';
import Editable from '../Editable';

export default function OperationsGallery() {
  const { isEditMode, getContent, updateContent } = useAdmin();
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  // Gallery Management States
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [galleryModalMode, setGalleryModalMode] = useState('add'); // 'add' or 'edit'
  const [editingItemIndex, setEditingItemIndex] = useState(null);
  const [modalImage, setModalImage] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');

  const galleryItems = getContent('services.gallery.items', initialGalleryData);

  // Gallery CRUD Handlers
  const handleDeleteGalleryItem = (indexToDelete, e) => {
    e.preventDefault();
    e.stopPropagation();
    const updated = galleryItems.filter((_, idx) => idx !== indexToDelete);
    updateContent('services.gallery.items', updated);
  };

  const handleOpenAddGalleryModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setGalleryModalMode('add');
    setModalImage('');
    setModalTitle('');
    setModalDescription('');
    setIsGalleryModalOpen(true);
  };

  const handleOpenEditGalleryModal = (idx, e) => {
    e.preventDefault();
    e.stopPropagation();
    setGalleryModalMode('edit');
    setEditingItemIndex(idx);
    setModalImage(galleryItems[idx].image);
    setModalTitle(galleryItems[idx].title);
    setModalDescription(galleryItems[idx].description);
    setIsGalleryModalOpen(true);
  };

  const handleSaveGalleryItem = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (galleryModalMode === 'add') {
      const newItem = {
        image: modalImage || 'https://images.unsplash.com/photo-1594818821905-ae4d12c8e3a2?q=80&w=300&auto=format&fit=crop',
        title: modalTitle || 'New Gallery Image',
        description: modalDescription || ''
      };
      const updated = [...galleryItems, newItem];
      updateContent('services.gallery.items', updated);
    } else {
      const updated = [...galleryItems];
      updated[editingItemIndex] = {
        image: modalImage,
        title: modalTitle,
        description: modalDescription
      };
      updateContent('services.gallery.items', updated);
    }
    setIsGalleryModalOpen(false);
  };

  return (
    <section id="ground-handling" className="py-24 bg-white dark:bg-slate-950 relative z-30 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Editable id="services.gallery.badge" defaultContent="Operations In Action">
            <span className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest block mb-2">Operations In Action</span>
          </Editable>
          <Editable id="services.gallery.title" defaultContent="Airport Terminal Floor Gallery">
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Airport Terminal Floor Gallery
            </h2>
          </Editable>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mt-4 mb-6"></div>
          <Editable id="services.gallery.description" type="textarea" defaultContent="A visual window into our daily ground operations, break-bulk pallet breakdown, and high-capacity machinery at BIA.">
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-3">
              A visual window into our daily ground operations, break-bulk pallet breakdown, and high-capacity machinery at BIA.
            </p>
          </Editable>
          <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider animate-pulse">
            * Click on any image below to view it in full size and high clarity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onClick={() => !isEditMode && setActiveImageIndex(idx)}
              className="aspect-[16/10] rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800 group relative bg-slate-100 dark:bg-slate-800 cursor-pointer transition-all duration-500 hover:shadow-2xl"
            >
              {/* Image */}
              <motion.div 
                whileHover={!isEditMode ? { scale: 1.05 } : {}}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
              ></motion.div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-955/90 via-slate-955/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300"></div>
              
              {/* Click to Zoom Badge */}
              {!isEditMode && (
                <div className="absolute top-5 right-5 bg-slate-950/75 backdrop-blur-md text-white p-3.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg transform translate-y-3 group-hover:translate-y-0 border border-white/10">
                  <Maximize2 className="h-5 w-5 text-blue-400" />
                </div>
              )}

              {/* Edit & Delete Overlays */}
              {isEditMode && (
                <div className="absolute top-5 right-5 flex items-center space-x-3 z-30">
                  <button
                    onClick={(e) => handleOpenEditGalleryModal(idx, e)}
                    className="bg-white dark:bg-slate-950/95 text-slate-800 dark:text-slate-200 p-2.5 rounded-full hover:bg-blue-50 dark:bg-slate-9000 hover:text-white transition-all duration-300 shadow-lg border border-slate-200 dark:border-slate-800 cursor-pointer flex items-center justify-center hover:scale-105"
                    title="Edit Image Details"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    onClick={(e) => handleDeleteGalleryItem(idx, e)}
                    className="bg-white dark:bg-slate-950/95 text-rose-600 p-2.5 rounded-full hover:bg-rose-600 hover:text-white transition-all duration-300 shadow-lg border border-slate-200 dark:border-slate-800 cursor-pointer flex items-center justify-center hover:scale-105"
                    title="Delete Image"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              )}

              {/* Texts on overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white transition-transform duration-300 group-hover:translate-y-[-4px] pointer-events-none">
                <h4 className="font-extrabold text-xl tracking-wide mb-2 drop-shadow-md text-slate-50">
                  {item.title}
                </h4>
                <p className="text-slate-200 text-sm leading-relaxed font-light drop-shadow-sm max-w-xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          {isEditMode && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={handleOpenAddGalleryModal}
              className="aspect-[16/10] rounded-3xl overflow-hidden border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-slate-100 dark:bg-slate-800/80 hover:border-blue-500 group min-h-[300px]"
            >
              <PlusCircle className="h-12 w-12 text-slate-400 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-350" />
              <span className="mt-4 text-slate-600 dark:text-slate-400 font-bold text-lg group-hover:text-blue-600 dark:text-blue-400 transition-colors duration-350">
                Add New Gallery Image
              </span>
              <span className="mt-1 text-slate-400 text-xs text-center max-w-[200px]">
                Click to add a photo, title, and description to this gallery
              </span>
            </motion.div>
          )}
        </div>

      </div>

      {/* Lightbox / Image Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && galleryItems[activeImageIndex] && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-10"
            onClick={() => setActiveImageIndex(null)}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-blue-400 bg-slate-900/80 p-3 rounded-full border border-slate-800 transition-all duration-300 z-10 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Previous Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
              }}
              className="absolute left-4 sm:left-10 text-white hover:text-blue-400 bg-slate-900/80 p-4 rounded-full border border-slate-800 transition-all duration-300 z-10 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image Container */}
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="max-w-5xl w-full flex flex-col items-center z-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-slate-900/40 border border-slate-800 p-3 rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src={galleryItems[activeImageIndex].image} 
                  alt={galleryItems[activeImageIndex].title} 
                  className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain border border-slate-800"
                />
              </div>

              {/* Title & Description under the image */}
              <div className="text-center mt-6 max-w-2xl px-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide mb-2">
                  {galleryItems[activeImageIndex].title}
                </h3>
                <p className="text-slate-350 text-sm sm:text-base font-light leading-relaxed">
                  {galleryItems[activeImageIndex].description}
                </p>
                
                {/* Indicator Dots */}
                <div className="flex justify-center space-x-2 mt-6">
                  {galleryItems.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-350 cursor-pointer ${
                        activeImageIndex === idx ? 'w-8 bg-blue-50 dark:bg-slate-9000' : 'w-2 bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-50 dark:bg-slate-9000'
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Next Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setActiveImageIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
              }}
              className="absolute right-4 sm:right-10 text-white hover:text-blue-400 bg-slate-900/80 p-4 rounded-full border border-slate-800 transition-all duration-300 z-10 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Gallery Modal Dialogue for Add/Edit */}
      <AnimatePresence>
        {isGalleryModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsGalleryModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white dark:bg-slate-950 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800 z-10 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <h3 className="font-bold text-slate-800 dark:text-slate-200 text-lg">
                  {galleryModalMode === 'add' ? 'Add New Gallery Item' : 'Edit Gallery Item'}
                </h3>
                <button
                  onClick={() => setIsGalleryModalOpen(false)}
                  className="p-1 rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-600 dark:text-slate-400 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={handleSaveGalleryItem} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Image Source / URL</label>
                  <input
                    type="text"
                    value={modalImage}
                    onChange={(e) => setModalImage(e.target.value)}
                    placeholder="/images/example.jpg"
                    className="w-full h-11 rounded-lg border border-slate-200 dark:border-slate-800 px-4 text-slate-800 dark:text-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Title</label>
                  <input
                    type="text"
                    value={modalTitle}
                    onChange={(e) => setModalTitle(e.target.value)}
                    placeholder="Enter image title"
                    className="w-full h-11 rounded-lg border border-slate-200 dark:border-slate-800 px-4 text-slate-800 dark:text-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Description</label>
                  <textarea
                    value={modalDescription}
                    onChange={(e) => setModalDescription(e.target.value)}
                    placeholder="Enter short description"
                    className="w-full h-24 rounded-lg border border-slate-200 dark:border-slate-800 p-3 text-slate-800 dark:text-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition text-sm resize-none"
                    required
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setIsGalleryModalOpen(false)}
                    className="h-10 px-4 rounded-lg border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:bg-slate-900 transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="h-10 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm font-semibold text-white shadow-md transition cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
