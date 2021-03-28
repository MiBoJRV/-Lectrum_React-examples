/* Core */
import { useState } from 'react';

/* Components */
import { TodoList } from './deps';

/* Instruments */
import { useTodos, api } from './deps';

const Example = () => {
    const [todos, setTodos] = useTodos();
    const [newTodo, setNewTodo] = useState('');
    const [isFetching, setIsFetching] = useState(false);

    const createTodo = async () => {
        setIsFetching(true);

        const { todo } = await api.createTodo({
            title: newTodo,
            deadline: '2025-03-07T23:59:59+02:00',
            tag: 'UX',
        });

        setTodos([todo, ...todos]);

        setNewTodo('');
        setIsFetching(false);
    };

    const deleteTodo = async todoId => {
        await api.deleteTodo(todoId);

        const nextTodos = todos.filter(todo => todo.hash !== todoId);

        setTodos(nextTodos);
    };

    return (
        <TodoList editable todos={todos} deleteTodo={deleteTodo}>
            <div>
                <input
                    disabled={isFetching}
                    value={newTodo}
                    placeholder="Новая задача..."
                    onChange={e => setNewTodo(e.target.value)}
                />
                <button disabled={isFetching} onClick={createTodo}>
                    Создать задачу
                </button>
            </div>
        </TodoList>
    );
};

export default Example;
