/* Core */
import { useRef } from 'react';
import { render } from 'react-dom';

const Example = () => {
    const inputRef = useRef();

    const focusOnClick = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <input ref={inputRef} type="text" />
            <button onClick={focusOnClick}>Input focus</button>
        </>
    );
};

render(<Example />, document.getElementById('root'));
