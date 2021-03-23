/* Core */
import { useState } from 'react';
import { render } from 'react-dom';

const Profile = () => {
    const [name, setName] = useState('');

    const updateName = event => {
        const nextName = event.target.value;

        setName(nextName);
    };

    return (
        <>
            <h1>My name is {name}</h1>
            <input value={name} type="text" onChange={updateName} />
        </>
    );
};

render(<Profile />, document.getElementById('root'));
