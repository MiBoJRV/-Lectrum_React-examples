/* Core */
import { render } from 'react-dom';

/* Instruments */
import Example from './5';
import { DarkModeToggle } from '../../theme/DarkModeToggle';

render(
    <>
        <DarkModeToggle />
        <Example />
    </>,
    document.getElementById('root'),
);
