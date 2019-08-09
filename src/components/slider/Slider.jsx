import React, {useState} from 'react';
import PropTypes from 'prop-types';


export const Slider = ({label, min, max, step, handleChange}) => {
  const [value, setValue] = useState(18)

  const onChange = (event) => {
    const newValue = event.target.value
    setValue(newValue);
    handleChange(newValue)
  }
  return (
    <div className="level">
      <div className="level-left">
        <label htmlFor="input" className="level-item">{label}</label>
        <input className="slider level-item" 
               type="range"
               onChange={onChange}
               min={min}
               max={max}  
               step={step}></input>

      <div className="level-item">{value}</div>
      </div>
    </div>
  )
}

Slider.propTypes = {
  label: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired
}