import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-logo">
              <span className="gold-gradient">Abder</span>
              <span className="logo-dot">.</span>
            </h3>
            <p className="footer-desc">
              مطور برمجيات ومتخصص في الشبكات، أعمل على بناء حلول تقنية مبتكرة.
            </p>
          </div>

          <div className="footer-links">
            <h4>روابط سريعة</h4>
            <ul>
              <li><a href="#home">{t('nav.home')}</a></li>
              <li><a href="#skills">{t('nav.skills')}</a></li>
              <li><a href="#projects">{t('nav.projects')}</a></li>
              <li><a href="#contact">{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>تواصل اجتماعي</h4>
            <div className="social-icons">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: 'var(--gold)' }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: 'var(--gold)' }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: 'var(--gold)' }}
              >
                <FaTwitter />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Abder Abdelatif. {t('footer.rights')}.
          </p>
          <p className="made-with">
            {t('footer.madeWith')} <FaHeart className="heart-icon" /> Abder
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;