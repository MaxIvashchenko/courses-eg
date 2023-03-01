import { Box, IconButton as MuiIconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterWrapper = styled(Box)(({ theme }) => ({
  padding: '24px 16px',
  background: '#69381e',
  minHeight: 80,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    textAlign: 'center'
  }
}));

const IconButton = styled(MuiIconButton)(() => ({
  margin: '0 16px'
}));

const Footer = {
  FooterWrapper,
  IconButton
};

export default Footer;
