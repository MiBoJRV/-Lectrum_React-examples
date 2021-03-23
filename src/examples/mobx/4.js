// Making React reactive

/* Core */
import { render } from 'react-dom';
import { observer } from 'mobx-react-lite';

import { makeObservable, observable, computed, action, autorun } from 'mobx';

class ObservableTodoStore {
    todos = [];
    pendingRequests = 0;

    constructor() {
        makeObservable(this, {
            todos: observable,
            pendingRequests: observable,
            completedTodosCount: computed,
            report: computed,
            addTodo: action,
        });
        autorun(() => console.log(this.report));
    }

    get completedTodosCount() {
        return this.todos.filter(todo => todo.completed === true).length;
    }

    get report() {
        if (this.todos.length === 0) return '<none>';
        const nextTodo = this.todos.find(todo => todo.completed === false);
        return (
            `Next todo: "${nextTodo ? nextTodo.task : '<none>'}". ` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}`
        );
    }

    addTodo(task) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null,
        });
    }
}

const store = new ObservableTodoStore();
store.addTodo('read MobX tutorial');
store.addTodo('try MobX');

const TodoList = observer(({ store }) => {
    const onNewTodo = () => {
        store.addTodo(prompt('Enter a new todo:', 'coffee plz'));
    };

    return (
        <div>
            {store.report}
            <ul>
                {store.todos.map((todo, idx) => (
                    <TodoView todo={todo} key={idx} />
                ))}
            </ul>
            {store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null}
            <button onClick={onNewTodo}>New Todo</button>
            <small> (double-click a todo to edit)</small>
            {/* <RenderCounter /> */}
        </div>
    );
});

const TodoView = observer(({ todo }) => {
    const onToggleCompleted = () => {
        todo.completed = !todo.completed;
    };

    const onRename = () => {
        todo.task = prompt('Task name', todo.task) || todo.task;
    };

    return (
        <li onDoubleClick={onRename}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggleCompleted}
            />
            {todo.task}
            {todo.assignee ? <small>{todo.assignee.name}</small> : null}
            {/* <RenderCounter /> */}
        </li>
    );
});

render(<TodoList store={store} />, document.getElementById('root'));

store.todos[0].completed = !store.todos[0].completed;
store.todos[1].task = 'Random todo ' + Math.random();
store.todos.push({ task: 'Find a fine cheese', completed: true });
