// Literal Types
enum Roles {
    ADMIN = 'ADMIN',
    REGULAR = 'REGULAR',
};

const Component = () => {
    const role: Roles = Roles.ADMIN;

    return (
        <>
            <h1>Пользователь</h1>
            <p>Роль: {role}</p>
        </>
    );
}

export default Component;
