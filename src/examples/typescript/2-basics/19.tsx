// const user: {
//     name: string | null
// } = {
//     name: null,
// };

const user: { [key: string]: string | null } = {};

user.name = 'Андрей';

const Component = () => {
    return (
        <>
            <h1>Пользователь {user.name}</h1>
        </>
    );
}

export default Component;
