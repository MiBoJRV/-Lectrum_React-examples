/* Core */
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
    Navigate,
} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <nav>
                <NavLink activeClassName="active" to="/" end>
                    Home
                </NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contacts">Contacts</NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="/contacts" element={<h1>Contacts</h1>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

render(<App />, document.getElementById('root'));
