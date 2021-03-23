/* Core */
import { useRef, useEffect } from 'react';
import { render } from 'react-dom';

const Example = () => {
    const inputRef = useRef();

    console.log(1, inputRef);

    const focusOnClick = () => {
        inputRef.current.focus();
        console.log(inputRef.current.value);
    };

    useEffect(() => {
        console.log(2, inputRef);
    }, []);

    return (
        <>
            <input ref={inputRef} type="text" />
            <button onClick={focusOnClick}>Input focus</button>
        </>
    );
};

render(<Example />, document.getElementById('root'));
