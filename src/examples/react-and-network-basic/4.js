/* Components */
import { TodoList } from './deps';

/* Instruments */
import { useTodos } from './deps';

const Example = () => {
    const [todos] = useTodos();

    return <TodoList todos={todos} />;
};

export default Example;
