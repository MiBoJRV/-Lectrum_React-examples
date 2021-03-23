/* Core */
import { render } from 'react-dom';

const Parent = props => {
    const {
        profile: { firstName, lastName },
    } = props;

    // ! Error
    // props.profile = null;

    // ? No Error
    props.profile.firstName = 'no error :(';

    console.log('props:', props);

    return (
        <h1>
            Name: {firstName} {lastName}!
        </h1>
    );
};

const profile = {
    firstName: 'Hermione',
    lastName: 'Granger',
};

render(<Parent profile={profile} />, document.getElementById('root'));
