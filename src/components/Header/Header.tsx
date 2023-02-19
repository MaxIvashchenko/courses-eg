import { useRouter } from 'next/router';
import { Box, Button, Typography } from '@mui/material';
import { paths } from '@src/constants';

import { Header as HeadersBlocks } from 'blocks';

const { HeaderWrapper } = HeadersBlocks;

const headerList: string[] = ['О нас', 'Курс'];

const Header = () => {
  const router = useRouter();
  // const phoneCallHandler = () => window.open(`tel:${phoneNumber}`);
  const signInHandler = () => router.push(paths.signIn);

  return (
    <HeaderWrapper component='header'>
      <Box sx={{ display: 'flex' }}>
        {headerList.map((link) => (
          <Typography variant='h4' key={link} mr={2}>
            {link}
          </Typography>
        ))}
      </Box>

      <Box>
        <Button onClick={signInHandler} variant='text'>
          Вход
        </Button>
      </Box>
    </HeaderWrapper>
  );
};

export default Header;
