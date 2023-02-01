import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, Button, Typography } from '@mui/material';
import { paths, phoneNumber } from '@src/constants';
import theme from '@src/theme';

import { Header as HeadersBlocks } from 'blocks';
import { IconComponent } from '..';

const { HeaderWrapper, ButtonWrapper } = HeadersBlocks;

const Header = () => {
  const router = useRouter();
  const phoneCallHandler = () => window.open(`tel:${phoneNumber}`);
  const signInHandler = () => router.push(paths.signIn);

  return (
    <HeaderWrapper component='header'>
      <Link href={paths.main}>
        <IconComponent name='logo' fill='#fff' height={60} width={90} />
      </Link>

      <Box>
        <ButtonWrapper onClick={phoneCallHandler} sx={{ alignItems: 'center' }}>
          <IconComponent name='telephone' width={32} height={32} />
          <Typography p={1}>{phoneNumber}</Typography>
        </ButtonWrapper>

        <ButtonWrapper sx={{ alignItems: 'center' }}>
          <IconComponent name='telegram' width={32} height={32} />
        </ButtonWrapper>
        <Button
          onClick={signInHandler}
          variant='text'
          sx={{ color: theme.palette.primary.main }}
        >
          Вход
        </Button>
      </Box>
    </HeaderWrapper>
  );
};

export default Header;
