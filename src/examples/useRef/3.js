/* Core */
import { useRef } from 'react';
import { render } from 'react-dom';

const Example = () => {
    const numberRef = useRef('hello');

    console.log(numberRef.current);
    numberRef.current += ' world';
    console.log(numberRef.current);

    return <h1>{numberRef.current}</h1>;
};

render(<Example />, document.getElementById('root'));
