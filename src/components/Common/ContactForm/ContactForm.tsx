import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { sendRequest } from '@src/api';
import { IRequestFormState } from '@src/types';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Loader } from '../Loader';

const Form = styled('form')(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center'
  }
}));

interface ContactFormProps {
  modalHandler: () => void;
}

const initialValues: IRequestFormState = {
  name: '',
  email: '',
  phone: '',
  message: ''
};

const ContactForm = ({ modalHandler }: ContactFormProps) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Имя слишком короткое')
        .max(50, 'Не больше 50 символов')
        .required('Обязательно поле для ввода'),
      email: Yup.string()
        .email('Некорректный почтовый адресс')
        .required('Обязательно поле для ввода'),
      phone: Yup.string()
        .min(8, 'Не меньше 8 символов')
        .max(20, 'Не больше 20 символов'),
      message: Yup.string().min(9, 'Не меньше 9 символов')
    }),
    onSubmit: async (values) => {
      setLoading(true);
      await sendRequest(values)
        .then(() => {
          setLoading(false);
          modalHandler();
        })
        .catch((error) => console.error(error));
    }
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {isLoading && (
        <Box
          sx={{
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            flex: 1,
            position: 'absolute',
            background: '#808080a1',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Loader fill='#a35817' />
        </Box>
      )}
      <Typography variant='h2' py={1}>
        Заполните форму, чтобы связатсья с менеджером
      </Typography>
      <TextField
        disabled={isLoading}
        sx={{
          mb: 1
        }}
        fullWidth
        id='name'
        name='name'
        placeholder='Введите свое имя:'
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        disabled={isLoading}
        sx={{
          mb: 1
        }}
        fullWidth
        id='email'
        name='email'
        placeholder='Введите свою почту'
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        disabled={isLoading}
        sx={{
          mb: 1
        }}
        fullWidth
        id='phone'
        name='phone'
        placeholder='Введите свой телефон'
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />
      <TextField
        disabled={isLoading}
        multiline
        maxRows={4}
        sx={{
          mb: 1
        }}
        fullWidth
        id='message'
        name='message'
        placeholder='Введите комментарий'
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
      />
      <Button disabled={isLoading} type='submit' fullWidth>
        Отправить
      </Button>
    </Form>
  );
};

export default ContactForm;
