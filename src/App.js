import { useState, useRef, useEffect } from "react";
import './App.css';
import TodoList from './TodoList'
import EditPanel from "./EditPanel.js";
import uuidv4 from 'uuid/v4'

function App() {
    const [todos, setTodos] = useState([])
    const [notification, setNotification] = useState('')
    const [editPanel, setEditPanel] = useState({visible: false, oldText: 'default', newText: ''})
    const todoNameRef = useRef(null)
    const toEditRef = useRef(null)
    const LOCAL_STORAGE_KEY = 'todoApp.todos'

    const toggleEditPanel = () => {
        this.setEditPanel(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
    };

    // LOAD FROM LOCAL
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))     // JSON.parse converts it to an array
        if (storedTodos) {setTodos(storedTodos)}
    }, [])  // empty array for our deps, so the script will only load once on first load

    // SAVE TO LOCAL
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
        // Every time something changes in the second param
        // They are our dependencies, whenever the value one of them changes
    },[todos])

    // Edit: Pass up original edit text... somehow
    useEffect(() => {

    },[editPanel])

    function deleteCompletedTodos() {
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }

    function toggleTodo(id) {
        //console.log(`This is toggleTodo id: ${id}`)
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    function handleDeleteTodo(e) {
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === e)
        todo.deleteMe = true
        setTimeout(function(){const revisedTodos = todos.filter(todo => !todo.deleteMe)
            console.table(revisedTodos)
            setTodos(revisedTodos)}, 5)
            // Doesn't seem to allow to useState calls in one function, without use of delay
    }

    function handleAddTodo(e) {  // Notification should be handled in a different function
        const name = todoNameRef.current.value
        if (name === '') {
            setNotification("test")
            setTimeout(function() {
                setNotification("")
            },  4000);
            return }
        todoNameRef.current.value = null
        setNotification("")
        setTodos(prevTodos => {
            return [...prevTodos, {id: uuidv4(), name: name, complete: false, deleteMe: false, content: ''}]
        })
    }

    function handleEditTodo(e) {
        editPanel.visible = !editPanel.visible
        console.table(toEditRef)
    }

    const handleKeypress = e => {
        //it triggers by pressing the enter key
        if (e.charCode === 13) {
            handleAddTodo();
        }
    };

  return (
    <>
        {editPanel.visible && <EditPanel todosList={todos} editVal={editPanel} onClick={handleEditTodo} ref={toEditRef} editTodo={handleEditTodo}/>}
        <h2 className="title">Todo List</h2>
        <div className="todo-panel">
            <TodoList todosList={todos} ref={toEditRef} toggleTodo={toggleTodo} editTodo={handleEditTodo} deleteTodo={handleDeleteTodo} />
            <input className="input--style-4" ref={todoNameRef} type="text" onKeyPress={handleKeypress} />
            <button className="btn btn--blue btn--radius-2" onClick={handleAddTodo}>Add Todo</button>
            <button className="btn btn--blue btn--radius-2"  onClick={deleteCompletedTodos}>Remove Todo</button>
            <div>{todos.filter(todo => !todo.complete).length} left todo</div>
            <button>Display List</button>
            <div className="notification">{notification}</div>
        </div>
    </>
  )
}

export default App;


// toggleTodo={toggleTodo} here we are passing in our function, which we need to import in our TodoList.js