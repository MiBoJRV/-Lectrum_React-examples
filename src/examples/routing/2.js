/* Core */
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate,
} from 'react-router-dom';
import { render } from 'react-dom';

const Home = () => {
    return <h1>Home</h1>;
};

const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Contacts</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="/contacts" element={<h1>Contacts</h1>} />
                <Route path="*" element={<h1>Not Found...</h1>} />
            </Routes>
        </Router>
    );
};

render(<App />, document.getElementById('root'));
