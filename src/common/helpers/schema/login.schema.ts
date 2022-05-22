import * as Yup from 'yup';

export const validationLoginSchema = Yup.object({
  email: Yup.string().email(),
  password: Yup.string(),
});
