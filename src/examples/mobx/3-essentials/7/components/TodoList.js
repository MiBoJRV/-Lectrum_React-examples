import { observer } from 'mobx-react-lite';
import { action } from 'mobx';

import { TodoView } from './TodoView';
import { todoStore, peopleStore } from '../store';

export const TodoList = observer(({ store }) => {
    const onNewTodo = () => {
        store.addTodo(prompt('Введите новую задачу:', 'Сделать перерыв'));
    };

    const asyncData = () => {
        todoStore.pendingRequests++;

        setTimeout(
            action(() => {
                todoStore.addTodo('Рандомная задач ' + Math.round(Math.random() * 1000));
                todoStore.pendingRequests--;
            }),
            2000,
        );
        // setTimeout(
        //     () => {
        //         todoStore.addTodo('Рандомная задач ' + Math.round(Math.random() * 1000));
        //         todoStore.pendingRequests--;
        //     },
        //     2000,
        // );
    };

    return (
        <div>
            {store.report}
            <ul>
                {store.todos.map((todo, idx) => (
                    <TodoView todo={todo} key={idx} />
                ))}
            </ul>
            {store.pendingRequests > 0 ? <p>Загрузка...</p> : null}
            <div>
                <button onClick={onNewTodo}>Новая задача</button>
                &nbsp;
                <button onClick={asyncData}>Новая асинхронная задача</button>
                <small> (Двойной клик на туду для редактирования)</small>
            </div>
            <div style={{marginTop: 10}}>
                <input onKeyUp={(event) => (peopleStore[1].name = event.target.value)} />
            </div>
        </div>
    );
});
