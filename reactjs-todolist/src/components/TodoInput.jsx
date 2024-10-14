import { useState } from "react"

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setToDoValue } = props

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setToDoValue(e.target.value)
            }} 
            placeholder="Enter something...">
            </input>
            <button onClick={() => {
                handleAddTodos(todoValue)
                setToDoValue('')
            }}>
                Add
            </button>
        </header>
    )
}