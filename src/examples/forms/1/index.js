import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const MyForm = () => {
    const [name, setName] = useState('');

    const handleChangeName = (event) => {
        console.log('event value');
        console.log(event.target.value);
        setName(event.target.value);
    };

    return (
        <input
            type="text"
            onChange={handleChangeName}
            value={name}
        />
    );
};

ReactDOM.render(<MyForm/>, document.getElementById("root"));
