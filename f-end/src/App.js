//essentials
import React, { useState } from 'react'
//css
import './App.css';
//components
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';


const App = () => {
  const [todos, setTodos] = useState([])

  const addTodos = (textFromInput) => {
    setTodos((prev) => [...prev, { id: Date.now(), input: textFromInput, status: false }])
  }

  const editOrSaveTodo = (objectFromTodo) => {
    const changedTodo = todos.map((todo) => {
      if (todo.id === objectFromTodo.id) {
        return { ...todo, ...objectFromTodo }
      } else return todo
    })
    setTodos(changedTodo)
  }
  const deleteTodo = (idFromTodo) => {
    const todoRemains = todos.filter((todo) => todo.id !== idFromTodo)
    setTodos(todoRemains)
  }

  return (
    <div className="App">
      <Header />
      <Input addFunc={addTodos} />
      <TodoList todos={todos} changeFunc={editOrSaveTodo} deleteFunc={deleteTodo} />
    </div>
  );
}


export default App;
