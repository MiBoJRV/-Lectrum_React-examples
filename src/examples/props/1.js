/* Core */
import { render } from 'react-dom';

const Child = props => {
    console.log('props', props);
    return <h1>{props.message}</h1>;
};

const Parent = () => {
    return <Child message={'Hello'} />;
};
render(<Parent />, document.getElementById('root'));
