import React, { useState } from 'react'

// components
import Card from '../Card'
import Input from '../InputBox'

// styles
import './Form.css'

// icon
import pencil from '../../assets/icons/pencil.svg'

const Form = ({saveTodo}) => {
  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    const todo = {description: value, done: false}
    event.preventDefault()
    saveTodo(todo)
    setValue('')
   
  }

  return (
    <Card>
      <form className='form' onSubmit={handleSubmit}>
        <img src={pencil} alt='pencil' className='icon'/>
        <Input
          placeholder='What needs to be accomplished?'
          value={value}
          handleChange={handleChange}
        />
      </form>
    </Card>
  )
}

export default Form