import { ChangeEvent, useEffect, useRef } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { TextField, Button, IconButton, Typography } from '@mui/material';
import { useFormik } from 'formik';
import _isEmpty from 'lodash/isEmpty';

import _get from 'lodash/get';

import { IconComponent, InputWrapper } from 'components';
import { paths, signInSchema as validationSchema } from 'src/constants';

import { Auth } from 'blocks';

const { SignInWrapper, Wrapper, BodyWrapper, Body, Footer } = Auth;

interface FormProps {
  email: string;
  password: string;
}

const initialValues: FormProps = {
  email: '',
  password: ''
};

const SignIn = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {}
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    formik.handleChange(e);
  };

  const clearEmail = () => {
    formik.setFieldValue('email', '');
  };

  const clearPassword = () => {
    formik.setFieldValue('password', '');
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const {
    values: { email, password }
  } = formik;
  const isButtonDisabled = (!email && !password) || !_isEmpty(formik.errors);

  return (
    <SignInWrapper>
      <Typography variant='h2' sx={{ mb: { xs: 2, md: 5 } }}>
        Вход в личный кабинет
      </Typography>
      <Wrapper>
        <Body>
          <BodyWrapper onSubmit={formik.handleSubmit}>
            <InputWrapper
              errorMsg={formik.errors.email}
              isTouched={formik.touched.email}
            >
              <TextField
                inputRef={inputRef}
                fullWidth
                id='email'
                label='Почтовый адрес'
                variant='standard'
                InputProps={{
                  endAdornment: formik.values.email && (
                    <IconButton onClick={clearEmail}>
                      <IconComponent name='close' width={14} height={14} />
                    </IconButton>
                  )
                }}
                value={formik.values.email}
                onChange={onChange}
                onBlur={formik.handleBlur}
                sx={{ mb: 3 }}
              />
            </InputWrapper>
            <InputWrapper
              errorMsg={formik.errors.password}
              isTouched={formik.touched.password}
            >
              <TextField
                fullWidth
                id='password'
                label='Пароль'
                variant='standard'
                type='password'
                InputProps={{
                  endAdornment: formik.values.password && (
                    <IconButton onClick={clearPassword}>
                      <IconComponent name='close' width={14} height={14} />
                    </IconButton>
                  )
                }}
                value={formik.values.password}
                onChange={onChange}
                onBlur={formik.handleBlur}
                sx={{ mb: 3 }}
              />
            </InputWrapper>
            <Button
              size='large'
              disabled={isButtonDisabled}
              variant='contained'
              type='submit'
              sx={{ mt: 1, mb: 3 }}
            >
              Sign In
            </Button>
            <Footer>
              <Typography mr={0.5}>Еще нет аккаунта?</Typography>
              <Link href={paths.signUp}>
                <Typography mr={0.5}>Зарегистрироваться</Typography>
              </Link>
            </Footer>
          </BodyWrapper>
          {/* {isLoading && (
          <LoaderWrapper background={loaderBackground} color={loaderIconColor}>
            <CircularProgress color='inherit' />
          </LoaderWrapper>
        )} */}
        </Body>
      </Wrapper>
    </SignInWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  //   const cookies = nookies.get(context);
  //   const token = _get(cookies, USER_TOKEN, '');
  //   const isExist = Boolean(token);

  //   if (isExist) {
  //     return {
  //       redirect: {
  //         permanent: false,
  //         destination: routes.profile
  //       }
  //     };
  //   }

  return {
    props: {}
  };
};

export default SignIn;
