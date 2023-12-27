import React, { useState } from 'react';

function List({ item }) {
    // Use an object to store body visibility state for each item
    const [bodyVisibility, setBodyVisibility] = useState({});

    const toggleBody = (id) => {
        setBodyVisibility((prev) => ({
            ...prev,
            [id]: !prev[id], // Toggle the visibility state
        }));
    };

    return (
        <ul className="divide-y divide-slate-100 border rounded bg-[#1e1b4b] text-light min-w-96 text-base font-medium text-left p-2">
            {item.map((todo) => (
                <li key={todo.id} className='mb-2 cursor-pointer' onClick={() => toggleBody(todo.id)}>
                    <span
                        className='text-[green]'
                    >
                        Title:
                    </span>{' '}
                    {todo.title}
                    <br />
                    {/* Display the body if visibility is true */}
                    {bodyVisibility[todo.id] && <span>{todo.body}</span>}
                </li>
            ))}
        </ul>
    );
}

export default List;
