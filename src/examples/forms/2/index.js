import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const MyForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleChangeName = (event) => {
        console.log('name');
        console.log(event.target.value);
        setName(event.target.value);
    };

    const handleChangeEmail = (event) => {
        console.log('email');
        console.log(event.target.value);
        setEmail(event.target.value);
    };

    return (
        <>
            <input
                type="text"
                onChange={handleChangeName}
                value={name}
            />
            <input
                type="email"
                onChange={handleChangeEmail}
                value={email}
            />
        </>
    );
};

ReactDOM.render(<MyForm/>, document.getElementById("root"));
