import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="toggle-track"
        initial={false}
        animate={{
          backgroundColor: isDarkMode ? 'var(--gold)' : 'var(--secondary-blue)'
        }}
      >
        <motion.div
          className="toggle-thumb"
          initial={false}
          animate={{
            x: isDarkMode ? 30 : 0,
            backgroundColor: isDarkMode ? 'var(--bg-primary)' : 'var(--gold)'
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {isDarkMode ? <FaMoon /> : <FaSun />}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;