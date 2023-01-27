import { Box, Button, Typography } from '@mui/material';
import { phoneNumber } from '@src/constants';
import theme from '@src/theme';
import { Header as HeadersBlocks } from 'blocks';
import { IconComponent } from '../Common';

const { HeaderWrapper, ButtonWrapper } = HeadersBlocks;

export default function Header() {
  const phoneCallHandler = () => window.open(`tel:${phoneNumber}`);

  return (
    <HeaderWrapper component='header'>
      <IconComponent name='logo' fill='#fff' width={120} />

      <Box>
        <ButtonWrapper onClick={phoneCallHandler} sx={{ alignItems: 'center' }}>
          <IconComponent name='telephone' width={32} height={32} />
          <Typography p={1}>{phoneNumber}</Typography>
        </ButtonWrapper>

        <ButtonWrapper sx={{ alignItems: 'center' }}>
          <IconComponent name='telegram' width={32} height={32} />
        </ButtonWrapper>
        <Button variant='text' sx={{ color: theme.palette.primary.main }}>
          Вход
        </Button>
      </Box>
    </HeaderWrapper>
  );
}
