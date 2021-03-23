/* Core */
import { useState, useEffect } from 'react';
import { render } from 'react-dom';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count, 'useEffect execution');
        document.title = count; // ? Correct ✅
    });

    console.log(count, 'component render');
    // document.title = count; // ! Wrong ⛔️

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    );
};

render(<Counter />, document.getElementById('root'));
