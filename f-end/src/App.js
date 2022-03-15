//essentials
import React, { useEffect, useState } from 'react'
import axios from 'axios'
//css
import './App.css';
//components
import Header from './components/Header';
import Input from './components/Input';
import TodoList from './components/TodoList';


const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const backendData = async () => {
      const forTodos = await getBackend()
      setTodos(forTodos)
    }
    backendData()
  }, [])

  const getBackend = async () => {
    const response = await axios.get('http://localhost:2000/backend')
    return response.data
  }


  const addTodos = async (textFromInput) => {
    const requestBody = { id: Date.now(), input: textFromInput, status: false }
    await axios.post(`http://localhost:2000/backend/${requestBody.id}`, requestBody)
    setTodos((prev) => [...prev, requestBody])
  }

  const editOrSaveTodo = async (objectFromTodo) => {
    const changedTodo = todos.map((todo) => {
      if (todo.id === objectFromTodo.id) {
        return { ...todo, ...objectFromTodo }
      } else return todo
    })
    let index = changedTodo.findIndex((f) => f.id === objectFromTodo.id)
    const requestBody = changedTodo[index]
    await axios.post(`http://localhost:2000/backend/${objectFromTodo.id}`, requestBody)
    setTodos(changedTodo)
  }

  const deleteTodo = async (idFromTodo) => {
    const todoRemains = todos.filter((todo) => todo.id !== idFromTodo)
    await axios.delete(`http://localhost:2000/backend/${idFromTodo}`)
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
