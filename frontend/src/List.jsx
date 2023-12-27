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
        <div className='w-screen flex justify-center'>
            <ul className="divide-y divide-slate-100 border rounded bg-[#1e1b4b] text-light min-w-20 w-50 text-base font-medium text-left p-2">
                {item.map((todo) => (
                    <li key={todo.id} className='mb-2 cursor-pointer' onClick={() => toggleBody(todo.id)}>
                        <span
                            className='text-[green]'
                        >
                            Task:
                        </span>{' '}
                        {todo.title}
                        <br />
                        {/* Display the body if visibility is true */}
                        {bodyVisibility[todo.id] && <span>{todo.body}</span>}
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default List;
