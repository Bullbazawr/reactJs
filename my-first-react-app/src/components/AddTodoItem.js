import { useState } from 'react'

export default function TodoList() {
    const [todos, setTodos] = useState([])
    const [currenTodo, setCurrentTodo] = useState('')

    const addTodo = (e) => {
        e.preventDefault()
        if (!currenTodo.trim()) return
        setTodos([...todos, currenTodo])
        setCurrentTodo('')
    }

    const handleInputChange = (e) => {
        setCurrentTodo(e.target.value)
    }


    return (
        <div>
            <form onSubmit={addTodo}>
                <input type='text' value={currenTodo} onChange={handleInputChange} />
                <button type='submit'>Добавить</button>
            </form>
            <ul>
                {todos.map((todo, i) => (
                    <li key={i}>
                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    )
}