import React from 'react';
import ReactDOM from 'react-dom';

// Hooks
import {useForm} from './useForm';

const MyForm = () => {
    const {form, handleChange} = useForm({
        name: '123',
        email: ''
    });

    const send = (event) => {
        event.preventDefault();
        console.log('send');
        // api.send(form);
    }

    return (
        <>
            <form onSubmit={send}>
                <input
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={form.name}
                />
                <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={form.email}
                />
                <button type="submit">Send</button>
            </form>
        </>
    );
};

ReactDOM.render(<MyForm/>, document.getElementById("root"));
