import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeaderWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  background: '#242424',
  padding: '16px 16px'
});

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
