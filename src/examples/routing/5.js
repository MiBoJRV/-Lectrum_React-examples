/* Core */
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
} from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <h1>Welcome to the app!</h1>

            <nav>
                <Link to="/dashboard">Dashboard</Link>&nbsp;| &nbsp;
                <Link to="/users">Users</Link>
            </nav>

            <main>
                <Outlet />
            </main>
        </>
    );
};

const Users = () => {
    return <h1>Users</h1>;
};

const Dashboard = () => {
    return <h1>Dashboard</h1>;
};

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="users" element={<Users />} />
            </Route>
        </Routes>
    );
};

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'),
);
