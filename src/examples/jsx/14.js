/* Core */
import { render, createPortal } from 'react-dom';

const target = document.getElementById('root');

const portal = createPortal(<span>Welcome!</span>, target);

const Book = () => {
    return (
        <>
            <h1>A Book</h1>
            {portal}
        </>
    );
};

render(<Book />, document.getElementById(target));
