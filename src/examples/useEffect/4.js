/* Core */
import { useState } from 'react';
import { render } from 'react-dom';

const Example = () => {
    const [counter, setCounter] = useState(0);

    const increase = prevCounter => prevCounter + 1;

    setTimeout(() => {
        setCounter(increase);
    }, 1000);

    return (
        <>
            <h1>{counter}</h1>
        </>
    );
};

render(<Example />, document.getElementById('root'));
