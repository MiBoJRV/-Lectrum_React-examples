/* Core */
import { useState, useEffect } from 'react';

/* Instruments */
import { api } from '../api';

export const useTodos = () => {
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        (async () => {
            const { todos } = await api.getTodos();

            setTodos(todos);
        })();
    }, []);

    /* async можно добавить и тут, но будут проблемы с TypeScript */
    // useEffect(async () => {
    //     const { todos } = await api.getTodos();

    //     setTodos(todos);
    // }, []);

    return [todos, setTodos];
};
