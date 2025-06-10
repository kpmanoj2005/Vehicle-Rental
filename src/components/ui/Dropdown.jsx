import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

const Dropdown = ({ 
  label, 
  placeholder = 'Select an option', 
  options = [], 
  value, 
  onChange, 
  disabled = false,
  className = '',
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`dropdown-container ${className}`} {...props}>
      {label && (
        <label className="dropdown-label">
          {label}
        </label>
      )}
      <div 
        className={`dropdown-trigger ${disabled ? 'disabled' : ''}`}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        role="button"
      >
        <span className={`dropdown-value ${!value ? 'placeholder' : ''}`}>
          {value || placeholder}
        </span>
        <img
          src="/images/img_arrowdown.svg"
          alt="dropdown arrow"
          className={`dropdown-arrow ${isOpen ? 'open' : ''}`}
        />
      </div>
      
      {isOpen && (
        <ul className="dropdown-options" role="listbox">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-option"
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={value === option}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Dropdown;