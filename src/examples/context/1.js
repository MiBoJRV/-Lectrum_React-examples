/* Core */
import { render } from 'react-dom';

/* Instruments */
import { data } from './data';

const Library = props => {
    return <Room {...props} />;
};

const Room = props => {
    return <Bookshelf {...props} />;
};

const Bookshelf = props => {
    return <Book {...props} />;
};

const Book = props => {
    return <Page {...props} />;
};

const Page = props => {
    return (
        <>
            <h1>{props.title}</h1>
            <p>
                Page: <code>{props.page}</code>
            </p>
        </>
    );
};

render(<Library {...data} />, document.getElementById('root'));
