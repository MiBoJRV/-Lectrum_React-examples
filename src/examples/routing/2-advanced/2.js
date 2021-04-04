/* Core */
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';

/* Components */
import { Nav, UserProfile, UserList } from './components';

const UsersOutlet = () => {
    return (
        <>
            <h1>Users</h1>
            <UserList />

            {/*
                This element renders the element for the child route,
                which in this case will be <UserProfile />
            */}
            <Outlet />
        </>
    );
};

const Example = () => {
    return (
        <>
            <Nav />

            <Routes>
                <Route path="/" element={<h1>Home</h1>} />

                <Route path="/users" element={<UsersOutlet />}>
                    <Route path=":userId" element={<UserProfile />} />
                    <Route path="all" element={<Outlet />} />
                </Route>

                {/* Redirect if no route match found. */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

export default Example;
