const Child = props => {
    console.log(props);

    return <h1>{props.children}</h1>;
};

const Parent = () => {
    return <Child children="Avada kedavra!" />;
};

export default Parent;
