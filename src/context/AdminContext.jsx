"use client";

import { createContext, useContext, useState, useEffect, useRef } from 'react';

// Default media images are loaded dynamically via Vite glob pattern

import { rootImages } from '../data/staticGalleryData';

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const isMountedRef = useRef(false);

  const [editableData, setEditableData] = useState({});
  const [isMediaLibraryOpen, setIsMediaLibraryOpen] = useState(false);
  const [mediaSelectionCallback, setMediaSelectionCallback] = useState(null);
  const [libraryDefaultTab, setLibraryDefaultTab] = useState('All');
  const [mediaItems, setMediaItems] = useState([]);

  // Initialize values from localStorage on mount (client-side only) to avoid SSR ReferenceErrors and hydration mismatches
  useEffect(() => {
    // 1. Load editableData
    try {
      const savedData = localStorage.getItem('slffa_editable_data');
      if (savedData) {
        let parsed = JSON.parse(savedData);
        // Migration: Remove any saved local image paths that are now broken
        let changed = false;
        Object.keys(parsed).forEach(k => {
          if (typeof parsed[k] === 'string' && (
            parsed[k].startsWith('/images/') || 
            parsed[k].includes('.png') || 
            parsed[k].includes('.jpg') ||
            parsed[k].startsWith('https://lh3.googleusercontent.com')
          )) {
            delete parsed[k];
            changed = true;
          }
        });
        if (changed) {
          localStorage.setItem('slffa_editable_data', JSON.stringify(parsed));
        }
        setEditableData(parsed);
      }
    } catch (e) {
      console.error("Failed to load editable data:", e);
    }

    // 2. Load mediaReplacements
    try {
      const savedReplacements = localStorage.getItem('slffa_media_replacements');
      if (savedReplacements) {
        setMediaReplacements(JSON.parse(savedReplacements));
      }
    } catch (e) {
      console.error("Failed to load media replacements:", e);
    }

    // 3. Parse and set mediaItems
    const defaultItems = [];
    try {
      rootImages.forEach((url) => {
        const filename = url.split('/').pop();
        if (!filename || filename.startsWith('._')) {
          return;
        }
        
        let location = 'My Uploads';
        const nameLower = filename.toLowerCase();
        
        if (nameLower.includes('slider') || nameLower.includes('phone') || nameLower.includes('slffacargo(7)') || nameLower.includes('70862b8f')) {
          location = 'Home Page';
        } else if (nameLower.includes('about') || nameLower.includes('worldmap')) {
          location = 'About Us';
        } else if (nameLower.includes('ground') || nameLower.includes('services-hero') || nameLower.includes('forklift')) {
          location = 'Airport Floor Gallery';
        } else if (nameLower.includes('cool') || nameLower.includes('room') || nameLower.includes('freezer')) {
          location = 'Cool Rooms';
        } else if (nameLower.includes('logo') || nameLower.includes('boi') || nameLower.includes('fiata') || nameLower.includes('iata') || nameLower.includes('srilankan') || nameLower.includes('ports') || nameLower.includes('nccsl') || nameLower.includes('customs') || nameLower.includes('slffa') || nameLower.includes('mainlogo6a')) {
          location = 'Our Services';
        } else if (nameLower.includes('img_')) {
          if (nameLower.includes('9037') || nameLower.includes('9034') || nameLower.includes('9014')) {
            location = 'Cool Rooms';
          } else {
            location = 'Airport Floor Gallery';
          }
        }

        defaultItems.push({
          id: 'default_' + filename.replace(/[^a-zA-Z0-9]/g, '_'),
          name: filename,
          url: url,
          size: 'Original Asset',
          type: filename.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg',
          createdAt: 'Original',
          location: location
        });
      });
    } catch (e) {
      console.error("Failed to parse image modules:", e);
    }

    try {
      const savedItems = localStorage.getItem('slffa_media_items');
      if (savedItems) {
        const parsed = JSON.parse(savedItems);
        const userUploads = parsed.filter(item => item.id.startsWith('media_'));
        setMediaItems([...userUploads, ...defaultItems]);
      } else {
        setMediaItems(defaultItems);
      }
    } catch (e) {
      setMediaItems(defaultItems);
    }
    isMountedRef.current = true;
  }, []);

  useEffect(() => {
    if (isMountedRef.current && mediaItems.length > 0) {
      localStorage.setItem('slffa_media_items', JSON.stringify(mediaItems));
    }
  }, [mediaItems]);

  const addMediaItem = (item) => {
    setMediaItems(prev => [item, ...prev]);
  };

  const deleteMediaItem = (index) => {
    setMediaItems(prev => prev.filter((_, idx) => idx !== index));
  };

  // Verify server-side session on mount
  useEffect(() => {
    const verifySession = async () => {
      try {
        const response = await fetch('/api/auth/verify');
        const data = await response.json();
        
        if (data.authenticated) {
          setIsAdmin(true);
          setIsEditMode(true);
        }
      } catch (error) {
        console.error("Session verification failed:", error);
      }
    };
    
    verifySession();
  }, []);

  useEffect(() => {
    if (!isAdmin) {
      setIsEditMode(false);
    }
  }, [isAdmin]);

  const login = async (email, password) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setIsAdmin(true);
        setIsEditMode(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login request failed:", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch (error) {
      console.error("Logout request failed:", error);
    }
    setIsAdmin(false);
    setIsEditMode(false);
  };

  const [mediaReplacements, setMediaReplacements] = useState({});

  useEffect(() => {
    if (isMountedRef.current) {
      localStorage.setItem('slffa_media_replacements', JSON.stringify(mediaReplacements));
    }
  }, [mediaReplacements]);

  const replaceMediaUrl = (originalUrl, newUrl) => {
    setMediaReplacements(prev => {
      const updated = { ...prev, [originalUrl]: newUrl };
      return updated;
    });
  };

  const updateMediaItem = (id, updatedFields) => {
    setMediaItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, ...updatedFields };
      }
      return item;
    }));
  };

  const toggleEditMode = () => {
    if (isAdmin) {
      setIsEditMode(prev => !prev);
    }
  };

  const updateContent = (id, value) => {
    setEditableData(prev => {
      const updated = { ...prev, [id]: value };
      localStorage.setItem('slffa_editable_data', JSON.stringify(updated));
      return updated;
    });
  };

  const getContent = (id, defaultValue) => {
    const value = editableData[id] !== undefined ? editableData[id] : defaultValue;
    if (value && mediaReplacements[value]) {
      return mediaReplacements[value];
    }
    return value;
  };

  return (
    <AdminContext.Provider value={{
      isAdmin,
      isEditMode,
      editableData,
      login,
      logout,
      toggleEditMode,
      updateContent,
      getContent,
      isMediaLibraryOpen,
      setIsMediaLibraryOpen,
      mediaItems,
      addMediaItem,
      deleteMediaItem,
      mediaSelectionCallback,
      setMediaSelectionCallback,
      libraryDefaultTab,
      setLibraryDefaultTab,
      mediaReplacements,
      replaceMediaUrl,
      updateMediaItem
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
