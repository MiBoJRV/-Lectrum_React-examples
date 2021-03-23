/* Core */
import { render } from 'react-dom';

const Child = props => {
    return (
        <h1>
            User name:
            {props.firstName} {props.lastName}
        </h1>
    );
};
Child.defaultProps = {
    firstName: '❗️ NO_FIRST_NAME',
    lastName: '️❗️ NO_LAST_NAME',
};

const profile = {
    firstName: 'Hermione',
    lastName: 'Granger',
};

const Parent = () => {
    // return <Child {...profile} />;
    return <Child />;
};

render(<Parent />, document.getElementById('root'));
