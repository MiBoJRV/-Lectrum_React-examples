/* Core */
import { useState } from 'react';

export const Todo = props => {
    const [isFetching, setIsFetching] = useState(false);

    const deleteTodo = async () => {
        setIsFetching(true);
        await props.deleteTodo(props.todo.hash);
    };

    return (
        <li>
            {props.todo.title}
            {props.deleteTodo && (
                <button disabled={isFetching} onClick={deleteTodo}>
                    X
                </button>
            )}
        </li>
    );
};
