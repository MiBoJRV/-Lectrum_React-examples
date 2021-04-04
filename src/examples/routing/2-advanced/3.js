/* Core */
import { Routes, Route, NavLink, Outlet, Navigate } from 'react-router-dom';

/* Components */
import { Home } from './components';

const Dashboard = () => {
    return (
        <>
            <h1>Dashboard</h1>

            <nav>
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink end to="/dashboard">
                    Dashboard
                </NavLink>
                <NavLink to="invoices">Invoices</NavLink>
            </nav>

            <hr />

            <Outlet />
        </>
    );
};

const Example = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="/" element={<h1>Dashboard Home</h1>} />
                    <Route
                        path="invoices"
                        element={<h1>Dashboard Invoices</h1>}
                    />
                </Route>
            </Route>

            {/* Redirect if no route match found. */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default Example;
