import React, { useState, useEffect } from 'react';
import './App.css';

// components
import Form from './components/Form/Create'
import List from './components/List'

// icons
import deleteIcon from './assets/icons/trash.svg'

function App() {
  const [todos, setTodos] = useState()

  useEffect(() => {
    getTodos()
  }, []);

  const getTodos = () => {
    let todos = localStorage.getItem('todos')
    todos = todos ? JSON.parse(todos) : todos
    setTodos(todos)
  }

  const updateTodos = (name, checked) => {
    let todos = JSON.parse(localStorage.getItem('todos'))
    todos.map(todo => {
      if (todo.description == name) {
        todo.done = checked
      }
    })
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const handleCheckBox = (event) => {
    const { name, checked } = event.target
    updateTodos(name, checked)
    getTodos()
  }

  const saveTodo = (todo) => {
    let todos = JSON.parse(localStorage.getItem('todos') || '[]')
    todos.unshift(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
    getTodos()
  }

  const deleteTodo = (item) => {
    let todos = JSON.parse(localStorage.getItem('todos'))
    todos = todos.filter(todo => todo.description != item.description)
    localStorage.setItem('todos', JSON.stringify(todos))
    getTodos()
  }

  const clearTodo = () => {
    localStorage.setItem('todos', [])
    getTodos()
  }

  return (
    <div className="App">
      <h1>REACT TO-DO </h1>
      <Form saveTodo={saveTodo} />
      {todos &&
        <>
          <List
            items={todos}
            handleCheckBox={handleCheckBox}
            deleteTodo={deleteTodo}
            getTodos={getTodos} />
          <div className='clear-all' onClick={clearTodo}>
            <img src={deleteIcon} alt='delete' className='icon' />
            <span>
              Clear All
        </span>
          </div>
        </>
      }

    </div>
  );
}

export default App
