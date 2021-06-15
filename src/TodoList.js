import React from 'react'
import Todo from './Todo'

export default function TodoList( { todosList, toggleTodo, deleteTodo, editTodo }) {
    return (
            todosList.map(todo => {
                return <Todo key = {todo.id} editTodo={editTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} todo={todo} />
            })
    )
}