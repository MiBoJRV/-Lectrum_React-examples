/* Core */
import { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    const [count, setCount] = useState(0);

    console.log(count);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setCount(count + 1);
        }, 1000);

        return () => {
            // ? Triggers after each render
            console.log('🗑 Clean up some trash...');
            clearTimeout(timerId);
        };
    }, [count]);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment +</button>
        </>
    );
};

render(<Counter />, document.getElementById('root'));
