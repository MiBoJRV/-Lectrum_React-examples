type UserType = {
    name?: string;
    age?: number;
}

const user: { [key in keyof UserType]: string } = {};

user.name = 'Андрей';

const Component = () => {
    return (
        <>
            <h1>Пользователь {user.name}</h1>
        </>
    );
}

export default Component;
