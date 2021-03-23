/* Core */
import { useState } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    const [count, setCount] = useState(0);

    console.log(count);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <>
            <h1>{count}</h1>
            <button onClick={decrement}>Decrement -</button>
            <button onClick={increment}>Increment +</button>
        </>
    );
};

render(<Counter />, document.getElementById('root'));
