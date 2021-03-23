/* Core */
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    Outlet,
    Navigate,
} from 'react-router-dom';

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

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <nav>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </nav>
            <hr />
        </>
    );
};

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/dashboard" element={<Dashboard />}>
                <Route path="invoices" element={<h1>Invoices</h1>} />
                <Route path="team" element={<h1>Team</h1>} />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'),
);
