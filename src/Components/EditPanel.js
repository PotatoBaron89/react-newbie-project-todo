import React, { useRef } from 'react'

export default function EditPanel( { editPanel, editTodo, todo}) {

    function handleEditTodo() { editTodo(todo.id)}

    return (
        <div className="edit-Panel medium-padding center-item">
            <img onClick={handleEditTodo} className="close-icon" src="https://img.icons8.com/plasticine/44/000000/close-window.png"/>
            <label className="center-item">
                <h2 className="title text-black small-padding">Edit Item</h2>
                <input className="input--style-4" type="text" value = 'test'  />
            </label>
        </div>
    )
}
