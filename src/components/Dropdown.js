import React, { useState } from 'react';
import './Dropdown.css'

const Dropdown = ({ label, options, highlightColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    handleToggle(false)
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <div
        className={`dropdown-toggle ${isOpen ? 'selected' : ''}`}
        onClick={handleToggle}
        style={{ backgroundColor: isOpen ? highlightColor : '' }}
      >
        {label}
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <div
              key={option.label}
              className={`dropdown-option ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
