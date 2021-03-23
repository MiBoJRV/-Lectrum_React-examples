/* Core */
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Outlet,
    useNavigate,
} from 'react-router-dom';
import { render } from 'react-dom';

const Nav = () => {
    const navigate = useNavigate();

    return (
        <>
            <nav>
                <button onClick={() => navigate('/')}>Home</button>
                <button onClick={() => navigate('/about')}>About</button>
                <button onClick={() => navigate('/contacts')}>Contacts</button>
            </nav>

            <Outlet />
        </>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Nav>
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route path="/about" element={<h1>About</h1>} />
                    <Route path="/contacts" element={<h1>Contacts</h1>} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Nav>
            </Routes>
        </Router>
    );
};

render(<App />, document.getElementById('root'));
