/* Core */
import { render } from 'react-dom';

const Child = props => {
    return (
        <h1>
            Hi, {props.firstName} {props.lastName}!
        </h1>
    );
};

const profile1 = {
    firstName: 'Ron',
};

const profile2 = {
    firstName: 'Hermione',
    lastName: 'Granger',
};

const Parent = () => {
    return <Child {...profile2} {...profile1} />;
};

render(<Parent />, document.getElementById('root'));
