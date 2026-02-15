import React from 'react';
import { motion } from 'framer-motion';
import './Card.css';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default', // default, gradient, outlined
  hoverEffect = true,
  onClick,
  ...props 
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: hoverEffect ? { 
      y: -10,
      boxShadow: '0 20px 40px rgba(255, 215, 0, 0.15)',
      borderColor: 'var(--gold)',
      transition: { duration: 0.3 }
    } : {},
    tap: { scale: 0.98 }
  };

  return (
    <motion.div
      className={`card card-${variant} ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={hoverEffect ? "hover" : undefined}
      whileTap={onClick ? "tap" : undefined}
      viewport={{ once: true, margin: "-50px" }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Card Header Component
Card.Header = ({ children, className = '' }) => (
  <div className={`card-header ${className}`}>
    {children}
  </div>
);

// Card Body Component
Card.Body = ({ children, className = '' }) => (
  <div className={`card-body ${className}`}>
    {children}
  </div>
);

// Card Footer Component
Card.Footer = ({ children, className = '' }) => (
  <div className={`card-footer ${className}`}>
    {children}
  </div>
);

// Card Image Component
Card.Image = ({ src, alt, className = '' }) => (
  <div className={`card-image ${className}`}>
    <img src={src} alt={alt} loading="lazy" />
  </div>
);

// Card Title Component
Card.Title = ({ children, className = '' }) => (
  <h3 className={`card-title ${className}`}>
    {children}
  </h3>
);

// Card Description Component
Card.Description = ({ children, className = '' }) => (
  <p className={`card-description ${className}`}>
    {children}
  </p>
);

export default Card;