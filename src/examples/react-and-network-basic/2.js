/* Core */
import { useState, useEffect } from 'react';
import waait from 'waait';

/* Components */
import { TodoList } from './deps';

const Example = () => {
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetch(
                `${process.env.REACT_APP_TODO_API_URL}/todos`,
                {
                    headers: {
                        'x-user': '@TEST_USER_XXX',
                    },
                },
            );

            const result = await response.json();

            await waait(1000);

            setTodos(result.data);
        })();
    }, []);

    return <TodoList todos={todos} />;
};

export default Example;
