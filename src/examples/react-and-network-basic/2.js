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
                        'x-user': 'f5104d90-e639-415b-9788-f134346fdb8f',
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
