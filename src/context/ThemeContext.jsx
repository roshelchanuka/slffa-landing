"use client";

import { createContext, useContext, useState, useEffect, useRef } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState('system');
  const [resolvedTheme, setResolvedTheme] = useState('light');
  const isMountedRef = useRef(false);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('slffa_theme');
      if (savedTheme) {
        setThemeState(savedTheme);
      }
    } catch (e) {
      console.error("Failed to load theme:", e);
    }
    isMountedRef.current = true;
  }, []);

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    if (isMountedRef.current) {
      try {
        localStorage.setItem('slffa_theme', newTheme);
      } catch (e) {
        // Ignore storage errors
      }
    }
  };

  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = () => {
      let activeTheme = theme;
      if (theme === 'system') {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        activeTheme = systemPrefersDark ? 'dark' : 'light';
      }

      setResolvedTheme(activeTheme);

      if (activeTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyTheme();

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => applyTheme();
      
      // Support both modern and legacy browsers for matchMedia listener
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', listener);
        return () => mediaQuery.removeEventListener('change', listener);
      } else if (mediaQuery.addListener) {
        mediaQuery.addListener(listener);
        return () => mediaQuery.removeListener(listener);
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
