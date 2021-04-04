/* Core */
import { Routes, Route, NavLink, Outlet, Navigate } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <h1>Welcome to the app!</h1>

            <nav>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/users">Users</NavLink>
            </nav>

            <main>
                <Outlet />
            </main>
        </>
    );
};

const Example = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="dashboard" element={<h1>Dashboard</h1>} />
                <Route path="users" element={<h1>Users</h1>} />
            </Route>

            {/* Redirect if no route match found. */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default Example;
