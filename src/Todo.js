import React, { useRef } from 'react'

export default function Todo( { todo, toggleTodo, deleteTodo, editTodo }) {
    const checkedRef = useRef(null)
    const deleteRef = useRef(null)
    const editRef = useRef(null)

    function handleTodoClick() {  toggleTodo(todo.id)  }
    function handleEditTodo() { editTodo(todo.id)}
    function handleDeleteTodo() {  deleteTodo(todo.id)  }



    return (
        <div className="todo-element" onClick={handleTodoClick}>
            <label>
                <img className="edit-icon" ref={deleteRef} onClick={handleDeleteTodo} src="https://img.icons8.com/cotton/24/000000/delete.png" alt="edit"/>
                <img className="edit-icon" ref={editRef} onClick={handleEditTodo} src="https://img.icons8.com/color/24/000000/edit--v2.png" alt="edit"/>
                <input className="checkbox" type="checkbox" ref={checkedRef}   />
                <span className="todo-description"> {todo.name} </span>
                <input className="input--style-3" type="text" />
            </label>
        </div>
    )
}
