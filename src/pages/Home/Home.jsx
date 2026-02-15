import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaNetworkWired } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="home" className="home-section section">
      <div className="container">
        <div className="home-content">
          <motion.div
            className="home-text"
            initial={{ opacity: 0, x: i18n.dir() === 'rtl' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="home-greeting gold-gradient">{t('home.greeting')}</span>
            <h1 className="home-name">
              <span className="blue-text">Abder</span>
              <span className="gold-text">Abdelatif</span>
            </h1>
            <h2 className="home-title">{t('home.title')}</h2>
            <p className="home-description">{t('home.description')}</p>
            
            <div className="home-buttons">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '#contact'}
              >
                {t('home.contactBtn')}
              </motion.button>
              <motion.button
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '#projects'}
              >
                {t('home.projectsBtn')}
              </motion.button>
            </div>

            <div className="home-social">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                style={{ color: 'var(--text-primary)' }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                style={{ color: 'var(--text-primary)' }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                style={{ color: 'var(--text-primary)' }}
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="home-image"
            initial={{ opacity: 0, x: i18n.dir() === 'rtl' ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-wrapper">
              <div className="profile-frame">
                <img 
                  src="/images/profile.jpg" 
                  alt="Aber Abdelatif" 
                  className="profile-image"
                />
                <div className="frame-overlay"></div>
              </div>
              <div className="tech-icons">
                <motion.div
                  className="tech-icon"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <FaCode />
                </motion.div>
                <motion.div
                  className="tech-icon"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <FaNetworkWired />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;