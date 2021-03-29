/* Components */
import { Todo } from './Todo';

/* Instruments */
import './styles.scss';

export const TodoList = props => {
    let todosJSX = props.todos?.map(todo => {
        return (
            <Todo key={todo.hash} todo={todo} deleteTodo={props.deleteTodo} />
        );
    }) ?? <h2>Загрузка...</h2>;

    if (props.todos !== null && props.todos?.length === 0) {
        todosJSX = <h2>✅ Задач нет</h2>;
    }

    return (
        <section className="todo-list">
            <h1>📩 Мои задачи</h1>

            {props.children}

            <ul>{todosJSX}</ul>
        </section>
    );
};
