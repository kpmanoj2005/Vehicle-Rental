import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  className = '',
  padding = 'default',
  ...props 
}) => {
  const paddingClasses = {
    none: '',
    small: 'p-4',
    default: 'p-6',
    large: 'p-8',
  };

  return (
    <div 
      className={`bg-white rounded-[10px] shadow-sm ${paddingClasses[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  padding: PropTypes.oneOf(['none', 'small', 'default', 'large']),
};

export default Card;