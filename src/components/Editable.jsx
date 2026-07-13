"use client";

import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Edit3, X, Check, Image as ImageIcon, Upload } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Editable({ id, defaultContent, type = 'text', children }) {
  const { isEditMode, getContent, updateContent, setIsMediaLibraryOpen, setMediaSelectionCallback, setLibraryDefaultTab } = useAdmin();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempValue, setTempValue] = useState('');

  const currentValue = getContent(id, defaultContent);

  if (!isEditMode) {
    // When edit mode is inactive, return the child with the stored value injected
    try {
      const child = React.Children.only(children);
      if (type === 'image') {
        if (child.type === 'img' || child.type === 'video') {
          return React.cloneElement(child, { src: currentValue });
        } else {
          return React.cloneElement(child, {
            style: {
              ...(child.props.style || {}),
              backgroundImage: `url('${currentValue}')`
            }
          });
        }
      } else {
        return React.cloneElement(child, { children: currentValue });
      }
    } catch (e) {
      console.warn("Editable wrapper expects a single child element.", e);
      return children;
    }
  }

  // Edit Mode is active
  let childElement;
  let isAbsolute = false;
  try {
    const child = React.Children.only(children);
    isAbsolute = child && child.props && child.props.className && child.props.className.includes('absolute');
    if (type === 'image') {
      if (child.type === 'img' || child.type === 'video') {
        childElement = React.cloneElement(child, { src: currentValue });
      } else {
        childElement = React.cloneElement(child, {
          style: {
            ...(child.props.style || {}),
            backgroundImage: `url('${currentValue}')`
          }
        });
      }
    } else {
      childElement = React.cloneElement(child, { children: currentValue });
    }
  } catch (e) {
    childElement = children;
  }

  if (type === 'image') {
    return (
      <div 
        className={`group border-2 border-dashed border-blue-400 hover:border-blue-600 rounded transition-all duration-200 overflow-hidden ${
          isAbsolute ? 'absolute inset-0 z-0' : 'relative w-full h-full'
        }`}
        title={`Edit Image: ${id}`}
      >
        {/* Sleek Glassmorphic Overlay on Hover */}
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2.5px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col items-center justify-center gap-3">
          <div className="text-center px-4">
            <span className="block text-[10px] font-extrabold uppercase text-sky-200 tracking-wider mb-2 drop-shadow-sm">Edit Page Photo</span>
            <div className="bg-slate-900/60 p-1.5 rounded-md text-[9px] text-slate-300 font-mono select-all truncate max-w-[200px] border border-white/5 drop-shadow-sm">
              {id}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2.5 px-4 w-full max-w-[280px]">
            {/* Quick Upload Button */}
            <label className="flex-1 h-9 flex items-center justify-center gap-1.5 bg-white dark:bg-slate-950 hover:bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-lg text-xs font-bold transition shadow-md cursor-pointer active:scale-95 duration-150">
              <Upload className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 animate-pulse" />
              <span>Upload</span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      updateContent(id, reader.result);
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="hidden"
              />
            </label>

            {/* Choose from Library Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                let defaultTab = 'All';
                if (id.startsWith('home') || id.includes('slider')) {
                  defaultTab = 'Home Page';
                } else if (id.startsWith('about')) {
                  defaultTab = 'About Us';
                } else if (id.startsWith('services.gallery')) {
                  defaultTab = 'Airport Floor Gallery';
                } else if (id.startsWith('services')) {
                  defaultTab = 'Our Services';
                } else if (id.startsWith('coolrooms') || id.includes('room')) {
                  defaultTab = 'Cool Rooms';
                }
                setLibraryDefaultTab(defaultTab);
                setMediaSelectionCallback(() => (selectedUrl) => {
                  updateContent(id, selectedUrl);
                });
                setIsMediaLibraryOpen(true);
              }}
              className="flex-1 h-9 flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition shadow-md cursor-pointer active:scale-95 duration-150"
            >
              <ImageIcon className="h-3.5 w-3.5 text-blue-200" />
              <span>Library</span>
            </button>
          </div>
        </div>

        {childElement}
      </div>
    );
  }

  const handleOpenEdit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setTempValue(currentValue);
    setIsModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateContent(id, tempValue);
    setIsModalOpen(false);
  };

  return (
    <>
      <div 
        onClick={handleOpenEdit}
        className="group relative cursor-pointer border border-dashed border-blue-400 hover:border-blue-600 hover:bg-blue-50 dark:bg-slate-900/10 rounded transition-all duration-200"
        title={`Click to edit: ${id}`}
      >
        {/* Hover Highlight Overlay */}
        <div className="absolute inset-0 bg-blue-50 dark:bg-slate-9000/5 opacity-0 group-hover:opacity-100 rounded transition-opacity duration-200 pointer-events-none z-10" />
        
        {/* Floating Edit Icon Badge */}
        <div className="absolute -top-3.5 -right-3.5 bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 flex items-center justify-center">
          {type === 'image' ? <ImageIcon className="h-3.5 w-3.5" /> : <Edit3 className="h-3.5 w-3.5" />}
        </div>
        
        {childElement}
      </div>

      {/* Editing Modal Portal-style Dialog */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            {/* Glassmorphic Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-lg bg-white dark:bg-slate-950 rounded-2xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  {type === 'image' ? (
                    <ImageIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  ) : (
                    <Edit3 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  )}
                  <h3 className="font-bold text-slate-800 dark:text-slate-200 text-lg">
                    {type === 'image' ? 'Edit Image Path' : 'Edit Text Content'}
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-600 dark:text-slate-400 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSave} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Field Identifier (ID)
                  </label>
                  <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-md px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono select-all">
                    {id}
                  </div>
                </div>

                <div>
                  {type === 'textarea' ? (
                    <>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Content Value
                      </label>
                      <textarea
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.value)}
                        className="w-full h-40 rounded-lg border border-slate-200 dark:border-slate-800 p-3 text-slate-800 dark:text-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition font-sans text-sm resize-y"
                        placeholder="Enter content..."
                        autoFocus
                      />
                    </>
                  ) : type === 'image' ? (
                    <div className="space-y-4">
                      {/* Media Library Selector */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Select from Media Library
                        </label>
                        <button
                          type="button"
                          onClick={() => {
                            let defaultTab = 'All';
                            if (id.startsWith('home') || id.includes('slider')) {
                              defaultTab = 'Home Page';
                            } else if (id.startsWith('about')) {
                              defaultTab = 'About Us';
                            } else if (id.startsWith('services.gallery')) {
                              defaultTab = 'Airport Floor Gallery';
                            } else if (id.startsWith('services')) {
                              defaultTab = 'Our Services';
                            } else if (id.startsWith('coolrooms') || id.includes('room')) {
                              defaultTab = 'Cool Rooms';
                            }
                            setLibraryDefaultTab(defaultTab);
                            setMediaSelectionCallback(() => (selectedUrl) => {
                              setTempValue(selectedUrl);
                            });
                            setIsMediaLibraryOpen(true);
                          }}
                          className="w-full h-11 flex items-center justify-center gap-2 bg-blue-50 dark:bg-slate-900 border border-blue-200 text-blue-600 dark:text-blue-400 rounded-xl hover:bg-blue-100 transition font-bold text-sm cursor-pointer shadow-sm shadow-blue-50/50"
                        >
                          <ImageIcon className="h-4.5 w-4.5" />
                          Choose from Media Library
                        </button>
                      </div>

                      <div className="relative flex py-1 items-center">
                        <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
                        <span className="flex-shrink mx-3 text-slate-400 text-[10px] font-bold uppercase tracking-wider">or</span>
                        <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
                      </div>

                      {/* Drag and Drop Upload */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          Upload Local File
                        </label>
                        <div className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-blue-500 rounded-xl p-5 bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-50 dark:bg-slate-900 transition cursor-pointer relative group">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                  setTempValue(reader.result);
                                };
                                reader.readAsDataURL(file);
                              }
                            }}
                            className="absolute inset-0 opacity-0 cursor-pointer z-10"
                          />
                          <Upload className="h-5 w-5 text-slate-400 group-hover:text-blue-500 transition-colors mb-1.5" />
                          <span className="text-slate-600 dark:text-slate-400 font-semibold text-xs group-hover:text-blue-500 transition-colors duration-300">
                            Drop image or click to browse
                          </span>
                        </div>
                      </div>

                      <div className="relative flex py-1 items-center">
                        <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
                        <span className="flex-shrink mx-3 text-slate-400 text-[10px] font-bold uppercase tracking-wider">or</span>
                        <div className="flex-grow border-t border-slate-100 dark:border-slate-800"></div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          Image Source URL or Local Path (Alternative)
                        </label>
                        <input
                          type="text"
                          value={tempValue}
                          onChange={(e) => setTempValue(e.target.value)}
                          className="w-full h-12 rounded-lg border border-slate-200 dark:border-slate-800 px-4 text-slate-800 dark:text-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition font-sans text-sm"
                          placeholder="/images/photo.png"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Content Value
                      </label>
                      <input
                        type="text"
                        value={tempValue}
                        onChange={(e) => setTempValue(e.target.value)}
                        className="w-full h-12 rounded-lg border border-slate-200 dark:border-slate-800 px-4 text-slate-800 dark:text-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition font-sans text-sm"
                        placeholder="Enter text..."
                        autoFocus
                      />
                    </>
                  )}
                </div>

                {type === 'image' && tempValue && (
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Image Preview
                    </label>
                    <div className="w-full h-32 rounded-lg border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-center overflow-hidden p-2">
                      <img 
                        src={tempValue} 
                        alt="Preview" 
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1594818821905-ae4d12c8e3a2?q=80&w=300&auto=format&fit=crop';
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="h-10 px-4 rounded-lg border border-slate-200 dark:border-slate-800 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:bg-slate-900 transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="h-10 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm font-semibold text-white shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <Check className="h-4 w-4" />
                    Save Changes
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
