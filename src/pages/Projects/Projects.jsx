import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGraduationCap, FaCertificate, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'منصة تجارة إلكترونية متكاملة مع لوحة تحكم وإدارة مخزون',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux'],
      image: '/images/project1.jpg',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Network Monitoring System',
      description: 'نظام مراقبة شبكات متقدم مع تنبيهات فورية وتقارير',
      technologies: ['Python', 'Django', 'Cisco API', 'PostgreSQL'],
      image: '/images/project2.jpg',
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'تطبيق لإدارة المهام والمشاريع مع ميزات التعاون',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      image: '/images/project3.jpg',
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];

  const certificates = [
    'Cisco CCNA',
    'MongoDB Certified Developer',
    'React Professional Certificate',
    'Network Security Specialist',
    'AWS Cloud Practitioner',
    'JavaScript Algorithms and Data Structures'
  ];

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('projects.title')}
        </motion.h2>

        {/* Education & Certifications */}
        <motion.div 
          className="education-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="education-card">
            <div className="education-icon">
              <FaGraduationCap />
            </div>
            <div className="education-content">
              <h3>{t('projects.education.bachelor')}</h3>
              <p className="education-date">2025</p>
              <p className="education-desc">ليسانس في علوم الحاسوب - تخصص تطوير البرمجيات والشبكات</p>
            </div>
          </div>

          <div className="certificates-grid">
            <div className="certificates-header">
              <FaCertificate className="certificates-icon" />
              <h3>{t('projects.education.certificates')}</h3>
            </div>
            <div className="certificates-list">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certificate-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 10, color: 'var(--gold)' }}
                >
                  <span className="cert-dot">•</span>
                  <span>{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="projects-grid"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <span>صورة المشروع</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, color: 'var(--gold)' }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, color: 'var(--gold)' }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;