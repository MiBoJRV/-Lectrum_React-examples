import React from 'react';
import ReactDOM from 'react-dom';

// Hook
import { useForm } from './useForm';

const MyForm = () => {
  const { form, handleChange } = useForm({
    name: '',
    email: ''
  });

  const { name, email } = form;

  return (
    <>
      <p>
        <input
          name="name"
          type="text"
          onChange={ handleChange }
          value={ name }
        />
        <span>
          { name }
        </span>
      </p>
      <p>
        <input
          name="email"
          type="email"
          onChange={ handleChange }
          value={ email }
        />
        <span>
          { email }
        </span>
      </p>
    </>
  );
};

ReactDOM.render(<MyForm />, document.getElementById("root"));
