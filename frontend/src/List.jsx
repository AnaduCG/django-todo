import React from 'react'

function List({ item }) {
    return (
        <ul className="divide-y divide-slate-100 border rounded bg-[#1e1b4b] text-light min-w-96 text-base font-medium text-left p-2">
            {item.map(todo => (
                <li key={todo.id} className='mb-2'>
                    <span className='text-[green]'>Title: </span> {todo.title}
                    <br />
                    <span>Body: </span>{todo.body}
                </li>
            ))}
        </ul>
    )
}

export default List;