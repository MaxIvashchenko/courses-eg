import { useRouter } from 'next/router';
import { Button, Typography } from '@mui/material';
import { IconComponent } from '@src/components';
import { paths } from 'src/constants';

import { Auth } from 'blocks';

const { SignInWrapper } = Auth;

const AuthError = () => {
  const router = useRouter();

  const toSignIn = () => router.push(paths.signIn);
  const toMain = () => router.push(paths.main);

  return (
    <SignInWrapper>
      <Typography
        variant='h2'
        sx={{
          mb: { xs: 2, md: 2 },
          px: { xs: 2, md: 0 },
          textAlign: 'center'
        }}
      >
        Упс, что-то пошло не так :(
      </Typography>

      <Button
        onClick={toSignIn}
        variant='text'
        startIcon={<IconComponent name='repeat' width={18} height={18} />}
        sx={{ m: 0, p: 1 }}
      >
        Попробовать ещё раз
      </Button>
      <Button
        onClick={toMain}
        variant='text'
        startIcon={<IconComponent name='home' width={18} height={18} />}
        sx={{ m: 0, p: 1 }}
      >
        На главную
      </Button>
    </SignInWrapper>
  );
};
export default AuthError;
