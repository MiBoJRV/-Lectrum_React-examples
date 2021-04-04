/* Core */
import { Routes, Route, Navigate } from 'react-router-dom';

/* Components */
import { Nav, UserProfile, UserList } from './components';

const Example = () => {
    return (
        <>
            <Nav />

            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/users/:userId" element={<UserProfile />} />
                <Route path="/users/all" element={<UserList />} />

                {/* Redirect if no route match found. */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

export default Example;
