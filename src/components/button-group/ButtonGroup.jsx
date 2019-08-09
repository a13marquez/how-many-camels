import React from 'react';
import PropTypes from 'prop-types';

export const ButtonGroup = ({ label, img, options, handleChange }) => {
  const onChange = (event) => {
    event.target.parentElement.parentElement.querySelectorAll('li').forEach( button => 
      button.classList.remove('is-active'))
    event.target.parentElement.classList.add('is-active');
    handleChange(event.target.innerText)
  }

  return (
    <div className="level">
    <div className="level-left">
      <label htmlFor="input" className="level-item">{label}</label>
      <div className="level-item">
        <ul className="tabs is-toggle">
        {options.map( (option, index) => (
          <li key={option} className={index === 0 ? 'is-active' : ''}>
            <a onClick={onChange}>
              {img ? <img src={img}></img> : ''}
              {option}
            </a>
          </li>
          )
        )}
        </ul>
      </div>
    </div>
  </div>
  )
}

ButtonGroup.prototypes = {
  label: PropTypes.string, 
  img: PropTypes.string,
  options: PropTypes.array.isRequired, 
  handleChange: PropTypes.func.isRequired, 
}