import React from 'react';
import { Field, Form, Formik } from 'formik';
import { LoginComponent } from 'common/components/login/LoginComponent';
import { ILogin } from 'common/interfaces/signLoginInterface';
import { loginValues } from 'common/helpers/schema/login.value';
import { validationLoginSchema } from 'common/helpers/schema/login.schema';

export const LoginForm = () => {
  return (
    <Formik
      initialValues={loginValues}
      validationSchema={validationLoginSchema}
      onSubmit={(values: ILogin) => {
        console.log(values);
      }}
    >
      {({ values, touched, errors, handleBlur, handleChange }) => (
        <Form noValidate>
          <Field
            values={values}
            touched={touched}
            errors={errors}
            placeholder="Email"
            onBlur={handleBlur}
            onChange={handleChange}
            component={LoginComponent}
          />
          <Field
            values={values}
            placeholder="Password"
            touched={touched}
            errors={errors}
            onBlur={handleBlur}
            onChange={handleChange}
            component={LoginComponent}
          />
          <button type="submit" aria-label="button" className="login__btn" />
        </Form>
      )}
    </Formik>
  );
};
