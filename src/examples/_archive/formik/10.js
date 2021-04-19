import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import cx from 'classnames';
import styles from './styles.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(9, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const MyForm = () => {
  const initialValues = {
    name: '',
    email: ''
  };

  return (
    <Formik
      initialValues={ initialValues }
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched, handleSubmit }) => (
        <form  onSubmit={handleSubmit}>
          <div className={cx(
            [styles.defaultInput],
            {
              [styles.errorInput]: errors.name && touched.name
            }
          )}>
            <Field type="text" name="name" />
            {errors.name && touched.name && <div>{errors.name}</div>}
          </div>
          <div className={cx(
            [styles.defaultInput],
            {
              [styles.errorInput]: errors.email && touched.email
            }
          )}>
            <Field name="email" type="email" />
            {errors.email && touched.email && <div>{errors.email}</div>}
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

ReactDOM.render(<MyForm />, document.getElementById("root"));
