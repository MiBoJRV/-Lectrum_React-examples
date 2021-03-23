import { useState } from 'react';

export const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    event.persist();

    setForm((prevForm) => {
      return {
        ...prevForm,
        [event.target.name]: event.target.value
      }
    });
    console.log(form);
  };

  return {
    form,
    handleChange
  }
};
