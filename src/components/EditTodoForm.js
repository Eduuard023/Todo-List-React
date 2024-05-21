import React, {useState} from 'react'

export const EditTodoFrom = ({editTodo, task}) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        editTodo(value, task.id)

        setValue('')
    }

    return(
        <form className='TodoFrom' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={value}
            placeholder='Editar Tarefa' onChange=
            {(e) => setValue(e.target.value)}/>
            <button type='submit' className='todo-btn'>Editar</button>
        </form>
    )
}