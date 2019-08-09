import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({ label, options, handleChange}) => {
  onchange = (event) => handleChange(event.target.value);

  return (
    <div className="level">
    <div className="level-left">
      <label htmlFor="input" className="level-item">{label}</label>
      <select className="level-item">
      {options.map( (option, index) => (
        <option key={index} value={option}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </option>  
      ))}
      </select>
    </div>
  </div>
  )
}

Select.propTypes ={
  label: PropTypes.string,
  options: PropTypes.array,
  onHandleHairColor: PropTypes.func
}