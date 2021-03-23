/* Core */
import { render } from 'react-dom';

const Child = props => {
    return (
        <footer>
            <h1>
                Сейчас <code>{props.year}</code> год.
            </h1>
        </footer>
    );
};

const year = new Date().getFullYear();

const Parent = () => {
    return <Child year={year} />;
};

render(<Parent />, document.getElementById('root'));
