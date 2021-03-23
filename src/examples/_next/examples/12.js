/**
 * Реф с помощью хуков можно зарегистрировать с помощью хука useRef.
 */
import React, { useState, useRef, useEffect } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    const [name, setName] = useState('🎅🏼 Дед Мороз');
    const [isEditing, setIsEditing] = useState(false);
    const nameInputRef = useRef(null);

    useEffect(() => {
        nameInputRef.current.focus();
    }, [isEditing]);

    const buttonText = isEditing ? 'Заблокировать' : 'Разблокировать';

    return (
        <section className="counter">
            <h1>{name}</h1>
            <input
                disabled={!isEditing}
                ref={nameInputRef}
                value={name}
                onChange={event => setName(event.target.value)}
            />
            <button onClick={() => setIsEditing(!isEditing)}>
                {buttonText}
            </button>
        </section>
    );
};

render(<Counter />, document.getElementById('root'));
