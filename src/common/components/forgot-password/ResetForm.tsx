import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { resetPasswordValues } from 'common/helpers/schema/reset-password.value';
import { validationResetPasswordSchema } from 'common/helpers/schema/reset-password.schema';

export const ResetForm = () => {
  return (
    <Formik
      initialValues={resetPasswordValues}
      validationSchema={validationResetPasswordSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      (
      <Form noValidate>
        <Field name="email" />
        <ErrorMessage name="email" />
      </Form>
      )
    </Formik>
  );
};
