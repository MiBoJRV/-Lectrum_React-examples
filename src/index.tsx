/* Core */
import { render } from 'react-dom';

/* Components */
import Example from './examples';
import { DarkModeToggle } from './theme/DarkModeToggle';

/* Instruments */
import './theme/main.scss';

render(
    <>
        <Example />
        <DarkModeToggle />
    </>,
    document.getElementById('root'),
);
