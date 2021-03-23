// Core
import React, { useState } from 'react';
import { render } from 'react-dom';

const Child = ({ count }) => {
  console.log('Child Render');

  return (
    <>
      <h2>{ count }</h2>
    </>
  )
};

const Parent = () => {
  console.log('Parent Render');

  const [title, setTitle] = useState('Count');

  const updateTitle = () => {
    setTitle((prevTitle) => prevTitle.toUpperCase());
  };

  return (
    <>
      <h1>{ title }</h1>
      <button onClick={ updateTitle }>Update title</button>











      
      <Child count={1}/>
    </>
  )
};

render(<Parent />, document.getElementById('root'));
