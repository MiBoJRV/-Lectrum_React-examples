const Child = props => {
    console.log('props', props);
    return <h1>{props.message}</h1>;
};

const Parent = () => {
    return <Child message={'Hello'} />;
};

export default Parent;
