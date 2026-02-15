import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// Custom hook for theme management
const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  const { isDarkMode, toggleTheme } = context;

  // Get current theme colors
  const getThemeColors = () => {
    return {
      primary: isDarkMode ? '#0a192f' : '#1e3a8a',
      secondary: isDarkMode ? '#112240' : '#2563eb',
      background: isDarkMode ? '#000000' : '#ffffff',
      text: isDarkMode ? '#ffffff' : '#000000',
      gold: isDarkMode ? '#FFD700' : '#b8860b',
    };
  };

  // Toggle theme with animation
  const toggleWithAnimation = () => {
    document.documentElement.style.transition = 'all 0.3s ease';
    toggleTheme();
    setTimeout(() => {
      document.documentElement.style.transition = '';
    }, 300);
  };

  // Set theme directly
  const setTheme = (dark) => {
    if (dark !== isDarkMode) {
      toggleWithAnimation();
    }
  };

  // Check if system prefers dark mode
  const systemPrefersDark = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  // Reset to system preference
  const resetToSystemPreference = () => {
    setTheme(systemPrefersDark());
  };

  return {
    isDarkMode,
    toggleTheme: toggleWithAnimation,
    setTheme,
    systemPrefersDark,
    resetToSystemPreference,
    colors: getThemeColors(),
  };
};

export default useTheme;