/* Core */
import { useState, useEffect } from 'react';
import waait from 'waait';

/* Components */
import { TodoList } from './deps';

const Example = () => {
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        const getTodos = async () => {
            const response = await fetch(
                'https://lab.lectrum.io/rtx/api/todos',
                {
                    headers: {
                        'x-user': '@TEST_USER_XXX',
                    },
                },
            );

            const result = await response.json();

            await waait(1000);

            setTodos(result.data);
        };

        getTodos();
    }, []);

    return <TodoList todos={todos} />;
};

export default Example;
