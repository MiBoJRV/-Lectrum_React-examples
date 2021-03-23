/* Core */
import { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    const [count, setCount] = useState(0);

    console.log('component render');

    useEffect(() => {
        console.log('useEffect execution');

        return () => {
            // ? cleanup old timer ids, stop data fetching, remove event listeners...
            console.log('useEffect cleanup function');
        };
    });

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    );
};

render(<Counter />, document.getElementById('root'));
