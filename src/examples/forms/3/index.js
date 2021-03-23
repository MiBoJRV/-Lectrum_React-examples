import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const MyForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: ''
  });

  const handleChange = (event) => {
    setForm((prevForm) => {
      return {
        ...prevForm,
        [event.target.name]: event.target.value
      }
    });
  };

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
