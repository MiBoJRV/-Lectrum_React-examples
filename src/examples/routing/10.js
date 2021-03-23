/* Core */
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from 'react-router-dom';

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

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
    );
};

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'),
);
