import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FaCode, FaDatabase, FaServer, 
  FaJs, FaReact, FaNodeJs, 
  FaPython, FaJava, FaGitAlt 
} from 'react-icons/fa';
import { 
  SiMongodb, SiMysql, SiPostgresql, 
  SiDjango, SiSpring, SiDocker,
  SiCisco, SiWireshark,
  SiLinux, SiWindows,
  SiTypescript, SiNextdotjs, SiExpress,
  SiPrisma, SiRedis, SiGraphql,
  SiKubernetes, SiJenkins, SiTerraform,
  SiAnsible, SiPrometheus, SiGrafana
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const { t } = useTranslation();

  const developmentSkills = [
    { name: 'JavaScript/ES6', icon: <FaJs />, level: 90, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript />, level: 85, color: '#3178C6' },
    { name: 'React.js', icon: <FaReact />, level: 85, color: '#61DAFB' },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 80, color: '#000000' },
    { name: 'Node.js', icon: <FaNodeJs />, level: 80, color: '#339933' },
    { name: 'Express.js', icon: <SiExpress />, level: 85, color: '#000000' },
    { name: 'Python', icon: <FaPython />, level: 85, color: '#3776AB' },
    { name: 'Django', icon: <SiDjango />, level: 80, color: '#092E20' },
    { name: 'Java', icon: <FaJava />, level: 75, color: '#007396' },
    { name: 'Spring Boot', icon: <SiSpring />, level: 70, color: '#6DB33F' },
    { name: 'Git', icon: <FaGitAlt />, level: 90, color: '#F05032' },
    { name: 'Docker', icon: <SiDocker />, level: 85, color: '#2496ED' },
  ];

  const databaseSkills = [
    { name: 'MongoDB', icon: <SiMongodb />, level: 85, color: '#47A248' },
    { name: 'MySQL', icon: <SiMysql />, level: 90, color: '#4479A1' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80, color: '#336791' },
    { name: 'Redis', icon: <SiRedis />, level: 75, color: '#DC382D' },
    { name: 'Prisma', icon: <SiPrisma />, level: 80, color: '#2D3748' },
    { name: 'GraphQL', icon: <SiGraphql />, level: 75, color: '#E10098' },
  ];

  const networkSkills = [
    { name: 'Cisco', icon: <SiCisco />, level: 85, color: '#1BA0D7' },
    { name: 'Wireshark', icon: <SiWireshark />, level: 80, color: '#1679A7' },
    { name: 'Linux', icon: <SiLinux />, level: 85, color: '#FCC624' },
    { name: 'Windows Server', icon: <SiWindows />, level: 80, color: '#0078D6' },
    { name: 'Kubernetes', icon: <SiKubernetes />, level: 75, color: '#326CE5' },
    { name: 'Jenkins', icon: <SiJenkins />, level: 70, color: '#D24939' },
    { name: 'Terraform', icon: <SiTerraform />, level: 75, color: '#7B42BC' },
    { name: 'Ansible', icon: <SiAnsible />, level: 70, color: '#EE0000' },
    { name: 'Prometheus', icon: <SiPrometheus />, level: 65, color: '#E6522C' },
    { name: 'Grafana', icon: <SiGrafana />, level: 70, color: '#F46800' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('skills.title')}
        </motion.h2>
        
        <motion.p 
          className="skills-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('skills.subtitle')}
        </motion.p>

        <div className="skills-categories">
          {/* Development Skills */}
          <motion.div 
            className="skill-category"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="category-header">
              <FaCode className="category-icon" />
              <h3>{t('skills.development.title')}</h3>
            </div>
            <p className="category-description">{t('skills.development.description')}</p>
            
            <div className="skills-grid">
              {developmentSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <h4>{skill.name}</h4>
                  <div className="skill-level">
                    <div className="level-bar">
                      <motion.div 
                        className="level-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        style={{ background: skill.color }}
                      />
                    </div>
                    <span className="level-text">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Database Skills */}
          <motion.div 
            className="skill-category"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="category-header">
              <FaDatabase className="category-icon" />
              <h3>{t('skills.database.title')}</h3>
            </div>
            <p className="category-description">{t('skills.database.description')}</p>
            
            <div className="skills-grid">
              {databaseSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <h4>{skill.name}</h4>
                  <div className="skill-level">
                    <div className="level-bar">
                      <motion.div 
                        className="level-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        style={{ background: skill.color }}
                      />
                    </div>
                    <span className="level-text">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Network & DevOps Skills */}
          <motion.div 
            className="skill-category"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="category-header">
              <FaServer className="category-icon" />
              <h3>{t('skills.network.title')}</h3>
            </div>
            <p className="category-description">شبكات، خوادم، و DevOps</p>
            
            <div className="skills-grid">
              {networkSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <h4>{skill.name}</h4>
                  <div className="skill-level">
                    <div className="level-bar">
                      <motion.div 
                        className="level-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        style={{ background: skill.color }}
                      />
                    </div>
                    <span className="level-text">{skill.level}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;