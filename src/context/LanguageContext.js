import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// إنشاء السياق
export const LanguageContext = createContext();

// إنشاء المزود
export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('language') || 'ar';
  });

  useEffect(() => {
    i18n.changeLanguage(currentLang);
    localStorage.setItem('language', currentLang);
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [currentLang, i18n]);

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
  };

  const languages = [
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const value = {
    currentLang,
    changeLanguage,
    languages
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};