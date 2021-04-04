/* Core */
import { NavLink } from 'react-router-dom';

/* Instruments */
import users from './_users-mock.json';

export const UserList = () => {
    const usersJSX = users.map(user => {
        return (
            <li key={user.id}>
                <NavLink to={`/users/${user.id}`}>
                    {user.firstName} {user.lastName}
                </NavLink>
            </li>
        );
    });

    return <ul>{usersJSX}</ul>;
};
