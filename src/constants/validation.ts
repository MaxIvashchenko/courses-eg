import * as yup from 'yup';

const validation = {
  email: yup.string().email('Неверный email'),
  password: yup
    .string()
    .min(6, 'Должен быть не короче 6 символов')
    .required('Обязательное поле'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Пароли не совпадают')
    .required('Обязательное поле')
};

export const signInSchema = yup.object({
  email: validation.email
});

export const signUpSchema = yup.object({
  email: validation.email,
  password: validation.password,
  passwordConfirmation: validation.passwordConfirmation
});
