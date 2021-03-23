import React from 'react';
import ReactDOM from 'react-dom';
import { Formik } from "formik";

import { Checkbox } from './checkbox';

const MyForm = () => {
  const initialValues = {
    roles: ["admin"]
  };

  return (
    <Formik
      initialValues={ initialValues }
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <Checkbox name="roles" value="admin" />
          <Checkbox name="roles" value="customer" />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

ReactDOM.render(<MyForm />, document.getElementById("root"));
