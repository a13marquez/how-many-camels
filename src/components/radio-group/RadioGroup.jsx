import React from 'react';
import PropTypes from 'prop-types';

export const RadioGroup = ({ label, options, handleChange }) => {
  const onChange = (event) => {
    if(event.target.checked) {
      handleChange(event.target.parentElement.innerText)
    }
  }

  return (
    <div className="level">
      <div className="level-left">
        <label htmlFor="input" className="level-item">{label}</label>
        <div className="level-item">
          <div className="control">
            {options.map( (option, index) => (
              <label key={option} className="radio">
                <input type="radio" 
                       name={label} 
                       checked={index === 0}
                       onChange={onChange}/>
                {option}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

RadioGroup.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
}
