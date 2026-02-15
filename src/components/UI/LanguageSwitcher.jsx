import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';
import { LanguageContext } from '../../context/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const context = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  if (!context) {
    return null;
  }

  const { currentLang, changeLanguage, languages } = context;

  return (
    <div className="language-switcher">
      <motion.button
        className="lang-button"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
      >
        <FaGlobe />
        <span>{languages.find(l => l.code === currentLang)?.flag}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lang-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                className={`lang-option ${currentLang === lang.code ? 'active' : ''}`}
                onClick={() => {
                  changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                whileHover={{ x: 5 }}
              >
                <span className="lang-flag">{lang.flag}</span>
                <span className="lang-name">{lang.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;