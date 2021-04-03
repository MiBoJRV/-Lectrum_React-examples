/* Core */
import { useState } from 'react';

/* Components */
import { TodoList } from './deps';

/* Instruments */
import { useTodos, api } from './deps';

const Example = () => {
    const [todos, setTodos] = useTodos(null);
    const [newTodo, setNewTodo] = useState('');
    const [isFetching, setIsFetching] = useState(false);

    const createTodo = async () => {
        document.documentElement.setAttribute('data-theme', 'light');

        if (newTodo.length < 3) {
            return null;
        }

        setIsFetching(true);

        try {
            const { todo } = await api.createTodo({
                title: newTodo,
                deadline: '2025-03-07T23:59:59+02:00',
                tag: 'UX',
            });
            setTodos([todo, ...todos]);
            setNewTodo('');
        } catch (error) {
            // ? Обработка ошибок
            alert(`Упс! Что-то пошло не так: ${error.message}`);
        } finally {
            setIsFetching(false);
        }
    };

    const deleteTodo = async todoId => {
        await api.deleteTodo(todoId);

        const nextTodos = todos.filter(todo => todo.hash !== todoId);

        setTodos(nextTodos);
    };

    return (
        <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            isFetching={isFetching}
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            createTodo={createTodo}></TodoList>
    );
};

export default Example;
