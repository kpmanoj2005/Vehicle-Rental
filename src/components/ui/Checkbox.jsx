import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ 
  checked, 
  onChange, 
  label, 
  disabled = false,
  className = '',
  ...props 
}) => {
  return (
    <div className={`flex items-start space-x-4 ${className}`}>
      <div className="flex items-center justify-center w-6 h-6 mt-1">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="w-6 h-6 text-[#3563e9] bg-transparent border-2 border-gray-300 rounded focus:ring-[#3563e9] focus:ring-2"
          {...props}
        />
      </div>
      {label && (
        <label className="text-[16px] font-semibold leading-[21px] text-[#1f2544] font-plus-jakarta cursor-pointer">
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Checkbox;