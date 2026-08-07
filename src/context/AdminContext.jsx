"use client";

import { createContext, useContext, useState, useEffect, useRef } from 'react';

// Default media images are loaded dynamically via Vite glob pattern
import { rootImages } from '../data/staticGalleryData';

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const isAdmin = false;
  const isEditMode = false;

  const [editableData, setEditableData] = useState({});
  const isMediaLibraryOpen = false;
  const mediaSelectionCallback = null;
  const libraryDefaultTab = 'All';
  const mediaItems = [];
  const mediaReplacements = {};

  // Initialize values from localStorage on mount (client-side only) to avoid SSR ReferenceErrors and hydration mismatches
  useEffect(() => {
    // 1. Load editableData
    try {
      const savedData = localStorage.getItem('slffa_editable_data');
      if (savedData) {
        let parsed = JSON.parse(savedData);
        setEditableData(parsed);
      }
    } catch (e) {
      console.error("Failed to load editable data:", e);
    }
  }, []);

  const login = async (email, password) => {
    return false;
  };

  const logout = async () => {};

  const toggleEditMode = () => {};

  const updateContent = (id, value) => {};

  const getContent = (id, defaultValue) => {
    const value = editableData[id] !== undefined ? editableData[id] : defaultValue;
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
      setIsMediaLibraryOpen: () => {},
      mediaItems,
      addMediaItem: () => {},
      deleteMediaItem: () => {},
      mediaSelectionCallback,
      setMediaSelectionCallback: () => {},
      libraryDefaultTab,
      setLibraryDefaultTab: () => {},
      mediaReplacements,
      replaceMediaUrl: () => {},
      updateMediaItem: () => {}
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
