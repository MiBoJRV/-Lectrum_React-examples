import React from 'react';
import ReactDOM from 'react-dom';

// Hooks
import { useForm } from './useForm';

const MyForm = () => {
  const { form, handleChange } = useForm({
    name: '',
    email: ''
  });

  return (
    <>
      <input
        name="name"
        type="text"
        onChange={ handleChange }
        value={ form.name }
      />
      <input
        name="email"
        type="email"
        onChange={ handleChange }
        value={ form.email }
      />
    </>
  );
};

ReactDOM.render(<MyForm />, document.getElementById("root"));
