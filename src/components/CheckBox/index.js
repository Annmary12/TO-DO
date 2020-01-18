import React from 'react'

// styles
import './CheckBox.css'

const CheckBox = ({ name, checked, handleChange}) => (
    <label htmlFor="checkbox" className="checkbox">
      <input
        type="checkbox"
        className="checkbox__input"
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      <span className="checkbox__checkmark"></span>
    </label>
  )
  
  export default CheckBox