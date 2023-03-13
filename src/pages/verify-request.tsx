import Link from 'next/link';
import { Typography } from '@mui/material';
import { paths } from 'src/constants';

import { Auth } from 'blocks';

const { SignInWrapper } = Auth;

const VerifyRequest = () => (
  <SignInWrapper>
    <Typography
      variant='h2'
      sx={{
        mb: { xs: 2, md: 5 },
        px: { xs: 2, md: 0 },
        textAlign: 'center'
      }}
    >
      Проверьте свою электронную почту
    </Typography>
    <Typography
      variant='h4'
      sx={{
        mb: { xs: 2, md: 5 },
        px: { xs: 2, md: 0 },
        textAlign: 'center'
      }}
    >
      Ссылка для входа отправлена на ваш адрес электронной почты
    </Typography>
    <Link href={paths.main}>На главную</Link>
  </SignInWrapper>
);

export default VerifyRequest;
