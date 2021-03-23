/* Core */
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { render } from 'react-dom';

const App = () => {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Contacts</Link>
            </nav>
        </Router>
    );
};

render(<App />, document.getElementById('root'));
