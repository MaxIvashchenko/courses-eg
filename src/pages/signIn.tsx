import { ChangeEvent, useEffect, useRef } from 'react';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { signIn } from 'next-auth/react';
import {
  Button,
  IconButton,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { useFormik } from 'formik';
import _isEmpty from 'lodash/isEmpty';
import { paths, signInSchema as validationSchema } from 'src/constants';

import { Auth } from 'blocks';
import { IconComponent, InputWrapper } from 'components';
import authOptions from './api/auth/[...nextauth]';

const { SignInWrapper, Wrapper, BodyWrapper, Body } = Auth;

interface FormProps {
  email: string;
}

const initialValues: FormProps = {
  email: ''
};

const SignIn = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async ({ email }) => {
      await signIn('email', {
        email
      });
    }
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    formik.handleChange(e);
  };

  const clearEmail = () => {
    formik.setFieldValue('email', '');
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
    values: { email }
  } = formik;
  const isButtonDisabled = !email || !_isEmpty(formik.errors);

  const loginHandler = (id: string) => () => signIn(id);

  return (
    <SignInWrapper>
      <Typography variant='h2' sx={{ mb: { xs: 2, md: 5 } }}>
        Вход в личный кабинет
      </Typography>
      <Wrapper>
        <Body>
          <BodyWrapper onSubmit={formik.handleSubmit}>
            <Stack flexDirection='row' justifyContent='center' my={2}>
              {['google', 'facebook'].map((social) => (
                <IconButton
                  key={social}
                  sx={{ width: 48, height: 48, mx: 1 }}
                  onClick={loginHandler(social)}
                >
                  <Image
                    src={`/${social}.png`}
                    alt={social}
                    width={38}
                    height={38}
                  />
                </IconButton>
              ))}
            </Stack>

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

            <Button
              size='large'
              disabled={isButtonDisabled}
              variant='contained'
              type='submit'
              sx={{ mt: 1, mb: 3 }}
            >
              Войти
            </Button>
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { redirect: { destination: paths.profile } };
  }

  return {
    props: {}
  };
}

export default SignIn;
