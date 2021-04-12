/* Core */
import { Outlet, NavLink } from 'react-router-dom';

/* Components */
import { STATUS, useFetchTodos } from '../hooks/rest';

export const Layout = () => {
    return (
        <main>
            <nav>
                <h3>Панель</h3>
                <hr />
                <NavLink to="/">Все задачи</NavLink>
                <Stats />
            </nav>
            <section>
                <Outlet />
            </section>
        </main>
    );
};

const Stats = () => {
    const { todos, status: fetchTodosStatus } = useFetchTodos();

    return (
        <div>
            Всего задач:{' '}
            {fetchTodosStatus === STATUS.LOADING ? '...' : todos?.length}
        </div>
    );
};
