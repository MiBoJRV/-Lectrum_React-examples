/* Core */
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    useParams,
} from 'react-router-dom';

/* Instruments */
import users from './_users.json';

const UserProfile = () => {
    const { userId } = useParams();
    const user = users.find(user => user.id === userId);

    return (
        <>
            <h1>
                User: {user.firstName} {user.lastName}
            </h1>
            <p>User id: {userId}</p>
        </>
    );
};

const AllUsers = () => {
    const usersJSX = users.map(user => {
        return (
            <li key={user.id}>
                <Link to={`/users/${user.id}`}>
                    {user.firstName} {user.lastName}
                </Link>
            </li>
        );
    });

    return <ul>{usersJSX}</ul>;
};

const App = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/users/all">All Users</Link>
            </nav>

            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/users/:userId" element={<UserProfile />} />
                <Route path="/users/all" element={<AllUsers />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root'),
);
