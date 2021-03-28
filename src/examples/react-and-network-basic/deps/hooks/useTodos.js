/* Core */
import { useState, useEffect } from 'react';

/* Instruments */
import { api } from '../api';

export const useTodos = () => {
    const [todos, setTodos] = useState(null);

    useEffect(
        /* async можно добавить и тут, но будут проблемы с TypeScript */ () => {
            (async () => {
                const { todos } = await api.getTodos();

                setTodos(todos);
            })();
        },
        [],
    );

    return [todos, setTodos];
};
