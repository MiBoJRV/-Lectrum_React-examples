/* Core */
import waait from 'waait';
import axios from 'axios';

const TODO_API_URL = process.env.REACT_APP_TODO_API_URL;
const headers = { 'x-user': '@TEST_USER_XXX' };

export const api = {
    async getTodos() {
        const response = await fetch(`${TODO_API_URL}/todos`, { headers });

        const result = await response.json();

        await waait(1000);

        return { todos: result.data };
    },
    async createTodo(todo) {
        const response = await fetch(`${TODO_API_URL}/todos`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json', // ! Обязательно !
            },
            body: JSON.stringify(todo),
        });

        const result = await response.json();

        await waait(1000);

        return { todo: result.data };
    },
    async deleteTodo(todoId) {
        const response = await axios.delete(`${TODO_API_URL}/todos/${todoId}`, {
            headers,
        });

        await waait(1000);

        const isDeleted = response.status === 204;

        isDeleted && console.info('✅ Todo deleted.');

        return { isDeleted };
    },
};
