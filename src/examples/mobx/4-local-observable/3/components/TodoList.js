import { TodoItem } from './TodoItem';

export const TodoList = ({ store }) => {
    const todosJSX = store.todos.map((todo, index) => <TodoItem key={index} todo={todo} />);

    return <ol>{todosJSX}</ol>;
}
