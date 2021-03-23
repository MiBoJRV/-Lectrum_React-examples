// Asynchronous actions

/* Core */
import { render } from 'react-dom';
import { observer } from 'mobx-react-lite';

import { makeObservable, observable, computed, action, autorun } from 'mobx';

class TodoStore {
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

const peopleStore = observable([{ name: 'Michel' }, { name: 'Me' }]);

const todoStore = new TodoStore();
todoStore.addTodo('read MobX tutorial');
todoStore.addTodo('try MobX');
todoStore.todos[0].assignee = peopleStore[0];
todoStore.todos[1].assignee = peopleStore[1];
peopleStore[0].name = 'Michel Weststrate';

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
            {todo.assignee ? (
                <small> Assignee: {todo.assignee.name}</small>
            ) : null}
        </li>
    );
});

const TodoList = observer(({ store }) => {
    const onNewTodo = () => {
        store.addTodo(prompt('Enter a new todo:', 'coffee plz'));
    };

    const asyncData = () => {
        todoStore.pendingRequests++;
        setTimeout(
            action(() => {
                todoStore.addTodo('Random Todo ' + Math.random());
                todoStore.pendingRequests--;
            }),
            2000,
        );
    };

    return (
        <div>
            {store.report}
            <ul>
                {store.todos.map((todo, idx) => (
                    <TodoView todo={todo} key={idx} />
                ))}
            </ul>
            {store.pendingRequests > 0 ? <div>Loading...</div> : null}
            <button onClick={onNewTodo}>New Todo</button>
            <button onClick={asyncData}>New Todo Async</button>
            <small> (double-click a todo to edit)</small>
            <input onKeyUp={() => (peopleStore[1].name = event.target.value)} />
        </div>
    );
});

render(<TodoList store={todoStore} />, document.getElementById('root'));

todoStore.todos[0].completed = !todoStore.todos[0].completed;
todoStore.todos[1].task = 'Random todo ' + Math.random();
todoStore.todos.push({ task: 'Find a fine cheese', completed: true });
