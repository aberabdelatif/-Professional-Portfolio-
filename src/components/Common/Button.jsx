import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', // primary, secondary, outline, ghost, gradient
  size = 'medium', // small, medium, large
  fullWidth = false,
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...props 
}) => {
  const buttonVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    },
    disabled: {
      opacity: 0.6,
      scale: 1
    }
  };

  const getSizeClass = () => {
    switch(size) {
      case 'small':
        return 'btn-small';
      case 'large':
        return 'btn-large';
      default:
        return 'btn-medium';
    }
  };

  return (
    <motion.button
      type={type}
      className={`btn btn-${variant} ${getSizeClass()} ${fullWidth ? 'btn-fullwidth' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      variants={buttonVariants}
      whileHover={!disabled && !loading ? "hover" : undefined}
      whileTap={!disabled && !loading ? "tap" : undefined}
      animate={disabled || loading ? "disabled" : undefined}
      {...props}
    >
      {loading && (
        <span className="btn-loader">
          <span className="loader-dot"></span>
          <span className="loader-dot"></span>
          <span className="loader-dot"></span>
        </span>
      )}
      
      <span className={`btn-content ${loading ? 'btn-content-hidden' : ''}`}>
        {Icon && iconPosition === 'left' && (
          <span className="btn-icon btn-icon-left">{Icon}</span>
        )}
        <span className="btn-text">{children}</span>
        {Icon && iconPosition === 'right' && (
          <span className="btn-icon btn-icon-right">{Icon}</span>
        )}
      </span>
    </motion.button>
  );
};

// Button Group Component
Button.Group = ({ children, className = '', direction = 'horizontal' }) => (
  <div className={`btn-group btn-group-${direction} ${className}`}>
    {children}
  </div>
);

// Icon Button Component
Button.Icon = ({ 
  icon: Icon, 
  onClick, 
  size = 'medium',
  variant = 'ghost',
  className = '',
  ...props 
}) => (
  <motion.button
    className={`btn-icon-only btn-${variant} btn-icon-${size} ${className}`}
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    {...props}
  >
    <Icon />
  </motion.button>
);

export default Button;