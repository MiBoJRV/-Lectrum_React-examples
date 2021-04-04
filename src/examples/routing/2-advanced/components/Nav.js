/* Core */
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav>
            <NavLink end to="/">
                Home
            </NavLink>
            <NavLink to="/users/all">All Users</NavLink>
        </nav>
    );
};
