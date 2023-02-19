import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  zIndex: 10,
  position: 'fixed',
  borderBottom: `2px solid #40404070`,
  padding: '32px 32px',

  [theme.breakpoints.up('lg')]: {
    padding: '16px 48px'
  },
  [theme.breakpoints.down('md')]: {
    padding: '16px 32px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '8px 16px'
  }
}));

const Header = {
  HeaderWrapper
};

export default Header;
