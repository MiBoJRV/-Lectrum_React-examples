/* Core */
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

/* Components */
import { TodoList, TodoView, ManageTodoForm } from './components';

/* Instruments */
import { api } from '../api';
import { STATUS } from './hooks/rest';

export const TodoListView = () => {
    const [todos, setTodos] = useState(null);
    const [error, setError] = useState(null);
    const [fetchTodosStatus, setFetchTodosStatus] = useState(STATUS.IDLE);
    const [createTodoStatus, setCreateTodoStatus] = useState(STATUS.IDLE);

    const fetchTodosAsync = async () => {
        try {
            setFetchTodosStatus(STATUS.LOADING);
            const todoList = await api.fetchTodos();
            setTodos(todoList);
            setError(null);
            setFetchTodosStatus(STATUS.SUCCESS);
        } catch (err) {
            setError(err);
            setFetchTodosStatus(STATUS.ERROR);
        }
    };

    const createTodoAsync = async values => {
        try {
            setCreateTodoStatus(STATUS.LOADING);
            await api.createTodo(values);
            setCreateTodoStatus(STATUS.SUCCESS);
            fetchTodosAsync();
        } catch (err) {
            setCreateTodoStatus(STATUS.ERROR);
            console.error(err);
        }
    };

    const deleteTodoAsync = async id => {
        try {
            await api.deleteTodo(id);
            fetchTodosAsync();
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchTodosAsync();
    }, []);

    return (
        <>
            <TodoList
                todos={todos}
                status={fetchTodosStatus}
                error={error}
                deleteTodo={deleteTodoAsync}
            />

            <ManageTodoForm
                title="Создать задачу"
                status={createTodoStatus}
                onSubmit={createTodoAsync}
            />
        </>
    );
};

export const TodoByIdView = () => {
    const { todoId } = useParams();
    const navigate = useNavigate();

    const [todo, setTodo] = useState(null);
    const [error, setError] = useState(null);
    const [fetchTodoStatus, setFetchTodoStatus] = useState(STATUS.IDLE);
    const [updateTodoStatus, setUpdateTodoStatus] = useState(STATUS.IDLE);

    const fetchTodoByIdAsync = async () => {
        try {
            setFetchTodoStatus(STATUS.LOADING);

            const todoById = await api.fetchTodoById(todoId);

            if (!todoById) {
                navigate('/', { replace: true });
                return null;
            }

            setTodo(todoById);
            setError(null);
            setFetchTodoStatus(STATUS.SUCCESS);
        } catch (err) {
            setError(err);
            setFetchTodoStatus(STATUS.ERROR);
        }
    };

    useEffect(() => {
        fetchTodoByIdAsync();
    }, []);

    const submitUpdateTodo = async values => {
        try {
            setUpdateTodoStatus(STATUS.LOADING);
            await api.updateTodo(values);
            setUpdateTodoStatus(STATUS.SUCCESS);
            fetchTodoByIdAsync();
        } catch (err) {
            setUpdateTodoStatus(STATUS.ERROR);
            console.error(err);
        }
    };

    return (
        <>
            <TodoView status={fetchTodoStatus} error={error} todo={todo} />

            <ManageTodoForm
                title="Обновить задачу"
                status={updateTodoStatus}
                initialValues={todo}
                onSubmit={submitUpdateTodo}
            />
        </>
    );
};
