/* Core */
import { Routes, Route, NavLink, Outlet, Navigate } from 'react-router-dom';

const MainNav = () => {
    return (
        <>
            <h1>Home</h1>
            <nav>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </nav>
            <hr />

            <Outlet />
        </>
    );
};

const Dashboard = () => {
    return (
        <>
            <h1>Dashboard</h1>

            <nav>
                <NavLink to="/" end>
                    Home
                </NavLink>
                &nbsp;| &nbsp;
                <NavLink to="invoices">Invoices</NavLink>&nbsp;| &nbsp;
                <NavLink to="team">Team</NavLink>
            </nav>

            <hr />

            <Outlet />
        </>
    );
};

const Example = () => {
    return (
        <Routes>
            <Route path="/" element={<MainNav />}>
                <Route path="dashboard" element={<Dashboard />}>
                    <Route path="invoices" element={<h1>Invoices</h1>} />
                    <Route path="team" element={<h1>Team</h1>} />
                </Route>
            </Route>

            {/* Redirect if no route match found. */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default Example;
