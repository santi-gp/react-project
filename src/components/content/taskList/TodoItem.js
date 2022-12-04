import React from 'react'

function TodoItem({ title, completed, id, toogleTodo, removeTodo }) {
    const handleToogle = () => {
        toogleTodo(id)
    }
    const handleRemove = () => {
        removeTodo(id)
    }
    return (
        <>
            <input type='checkbox' checked={completed} onChange={handleToogle} />
            {title}
            <button onClick={handleRemove}>x</button>
        </>
    )
}

export default TodoItem