import React from 'react';
import { Formik, Form, Field } from 'formik';

export const SignInForm = () => {
  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, touched, errors, handleBlur, handleChange }) => (
        <Form noValidate>
          <Field
            values={values}
            touched={touched}
            errors={errors}
            handleBlur={handleBlur}
            handleChange={handleChange}
          />
        </Form>
      )}
    </Formik>
  );
};
