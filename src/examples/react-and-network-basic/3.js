/* Core */
import { useState, useEffect } from 'react';

/* Components */
import { TodoList } from './deps';

/* Instruments */
import { api } from './deps';

const Example = () => {
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        (async () => {
            const { todos } = await api.getTodos();

            setTodos(todos);
        })();
    }, []);

    return <TodoList todos={todos} />;
};

export default Example;
