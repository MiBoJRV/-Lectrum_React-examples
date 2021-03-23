// Core
import React, { useRef, useState } from 'react';
import { render } from 'react-dom';

const Example = () => {
  const [count, setCount] = useState(0);
  const counterEl = useRef(null);

  const increment = () => {
    setCount(count + 1);
    console.log(counterEl.current);
  };

  return (
    <>
      Count: <span ref={counterEl}>{count}</span>
      <button onClick={increment}>+</button>
    </>
  )
};

render(<Example />, document.getElementById('root'));
