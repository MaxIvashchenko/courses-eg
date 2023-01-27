import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeaderWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  background: '#242424',
  padding: '16px 24px',

  [theme.breakpoints.down('sm')]: {
    padding: '16px 8px'
  }
}));

const ButtonWrapper = styled(IconButton)(({ theme }) => ({
  '& svg path, & p': {
    fill: theme.palette.primary.main,
    color: theme.palette.primary.main
  },

  '&:hover': {
    '& svg path, & p': {
      fill: theme.palette.primary.dark,
      color: theme.palette.primary.dark
    }
  }
}));

const Header = {
  HeaderWrapper,
  ButtonWrapper
};

export default Header;
