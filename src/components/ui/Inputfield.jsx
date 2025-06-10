import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  type = 'text', 
  disabled = false,
  required = false,
  className = '',
  ...props 
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="text-[16px] font-semibold leading-[21px] text-[#1a202c] font-plus-jakarta mb-3">
          {label}
        </label>
      )}
      <div className="bg-[#f6f7f9] rounded-[10px] h-[56px] flex items-center px-8">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          required={required}
          className="w-full bg-transparent text-[14px] font-medium leading-[18px] text-[#90a3bf] font-plus-jakarta placeholder:text-[#90a3bf] focus:outline-none"
          {...props}
        />
      </div>
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default InputField;