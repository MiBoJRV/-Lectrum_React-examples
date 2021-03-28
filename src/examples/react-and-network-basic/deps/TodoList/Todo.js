/* Core */
import { useState } from 'react';

export const Todo = props => {
    const [isFetching, setIsFetching] = useState(false);

    const deleteTodo = async () => {
        setIsFetching(true);
        props.deleteTodo(props.todo.hash);
    };

    return (
        <li>
            {props.todo.title}
            {props.editable && (
                <button disabled={isFetching} onClick={deleteTodo}>
                    ❌
                </button>
            )}
        </li>
    );
};
