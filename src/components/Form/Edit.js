import React, { useState } from 'react'

// components
import Input from '../InputBox'

// styles
import './Form.css'

const Form = ({item, getTodos, closeEditView }) => {
  const [value, setValue] = useState(item.description)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateTodo(value)   
   
  }

  const updateTodo = (value) => {
    let todos = JSON.parse(localStorage.getItem('todos'))
    todos.map(todo => {
      if(todo.description  == item.description) {
        todo.description = value
      }
    } )
    localStorage.setItem('todos', JSON.stringify(todos))
    getTodos()
    closeEditView()
  }

  return (
    <form className='form edit' onSubmit={handleSubmit}>
        <Input
          placeholder='What needs to be accomplished?'
          value={value}
          handleChange={handleChange}
        />
        <span className='close-btn' onClick={closeEditView}>Cancel</span>
      </form>
  )
}

export default Form