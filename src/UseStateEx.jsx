import './App.css'
import { useState } from 'react'

function UseStateEx() {

    const [todos, setTodos] = useState(
        ['Learn Rearn', 'Build a project']
    )

    const [newTodo, setNewTodo] = useState('')

    const deleteTodo = (index) => {
        setTodos(
            todos.filter(
                (_, i) => { return i !== index }
            )
        )
    }

    const addTodo = (newTodo) => {
        setTodos(
            [...todos, newTodo]
        )

        setNewTodo('')


    }


    return (
        <>
        <h2>Todo List</h2>
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => deleteTodo(index)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
        <p>Typing: {newTodo}</p>
        <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></input>
        <button onClick={() => addTodo(newTodo)}>Add New Task</button>
        </>

    )

}


export default UseStateEx