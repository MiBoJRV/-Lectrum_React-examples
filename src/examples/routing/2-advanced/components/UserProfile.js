/* Core */
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

/* Instruments */
import users from './_users-mock.json';

export const UserProfile = () => {
    const navigate = useNavigate();
    const { userId } = useParams();
    const user = users.find(user => user.id === userId);

    useEffect(() => {
        // ? Redirect if user by id is not found.
        !user && navigate('/users/all', { replace: true });
    }, []);

    return (
        <>
            <h1>
                Welcome, {user.firstName} {user.lastName}
            </h1>

            <p>User id: {userId}</p>
            <button onClick={() => navigate(-1)}>&larr; Назад</button>
        </>
    );
};
