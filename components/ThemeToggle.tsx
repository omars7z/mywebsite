'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Apply theme on mount
    applyTheme(theme);
  }, [theme]);

  const applyTheme = (newTheme: 'light' | 'dark') => {
    const root = document.documentElement;
    root.setAttribute('data-theme', newTheme);
    if (newTheme === 'light') {
      root.style.setProperty('--background', '#ffffff');
      root.style.setProperty('--foreground', '#000000');
    } else {
      root.style.setProperty('--background', '#000000');
      root.style.setProperty('--foreground', '#ffffff');
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    // Load saved theme or default to light
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-24 right-6 z-50 w-12 h-12 rounded-full glass-strong flex items-center justify-center hover:text-cyan-400 transition-colors"
      style={{ color: 'var(--text-secondary)' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </motion.button>
  );
}

