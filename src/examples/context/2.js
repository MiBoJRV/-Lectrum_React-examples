/* Core */
import { createContext, useContext } from 'react';
import { render } from 'react-dom';

/* Instruments */
import { data } from './data';

const Context = createContext();

const Library = () => {
    return <Room />;
};

const Room = () => {
    return <Bookshelf />;
};

const Bookshelf = () => {
    return <Book />;
};

const Book = () => {
    return <Page />;
};

const Page = () => {
    const context = useContext(Context);

    return (
        <>
            <h1>{context.title}</h1>
            <p>
                Page: <code>{context.page}</code>
            </p>
        </>
    );
};

render(
    <Context.Provider value={data}>
        <Library />
    </Context.Provider>,
    document.getElementById('root'),
);
