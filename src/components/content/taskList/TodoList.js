import React, { useContext, createContext } from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
    const StateContext = createContext( );
    const items = useContext(StateContext)
    return (
        <>{
            items.map(item =>
                <TodoItem {...item} {...props} key={item.id} />)
        }
        </>
    )
}

export default TodoList