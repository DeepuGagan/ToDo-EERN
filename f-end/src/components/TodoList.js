import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, changeFunc, deleteFunc }) => {
    return (
        todos.map((todo) => {
            return <Todo key={todo.id} {...todo} changeFunc={changeFunc} deleteFunc={deleteFunc} />
        })
    )
}

export default TodoList