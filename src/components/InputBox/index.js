import React from 'react'

// styles
import './InputBox.css'

const InputBox = ({ handleChange, value, placeholder }) => (
  <input
    type='text'
    className='input-box'
    onChange={handleChange}
    value={value}
    placeholder={placeholder} />
)

export default InputBox
