/* Core */
import { NavLink, Outlet } from 'react-router-dom';

export const Home = () => {
    return (
        <>
            <h1>Home</h1>

            <nav>
                <NavLink to="/dashboard">Dashboard</NavLink>
            </nav>
            <hr />

            <Outlet />
        </>
    );
};
