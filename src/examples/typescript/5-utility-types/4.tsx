// Pick извлекает из типа перечисленные свойства и создаёт новый тип

type UserType = {
    name: string;
    age: number;
}

const user: Pick<UserType, 'name'> = {
    name: 'Андрей',
    // age: 30 // ошибка
};

const Component = () => {
    return (
        <>
            <h1>Пользователь {user.name}</h1>
        </>
    );
}

export default Component;
