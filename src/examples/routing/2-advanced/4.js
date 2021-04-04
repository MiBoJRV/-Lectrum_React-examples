/* Core */
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

/* Components */
import { Home } from './components';

const Dashboard = () => {
    return (
        <div>
            <h1>Look, more routes!</h1>
            <nav>
                <NavLink end to="/">
                    Home
                </NavLink>
                <NavLink end to=".">
                    Dashboard
                </NavLink>
                <NavLink to="invoices">Invoices</NavLink>
            </nav>

            <hr />

            <Routes>
                <Route path="/" element={<h1>Dashboard!</h1>} />
                <Route path="invoices" element={<h1>Invoices</h1>} />
            </Routes>
        </div>
    );
};

const Example = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="/dashboard/*" element={<Dashboard />} />
            </Route>

            {/* Redirect if no route match found. */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default Example;
