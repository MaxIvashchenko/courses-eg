import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const MenuButton = styled(Button)({
  textAlign: 'left',
  padding: 0,
  fontSize: 14
});

const Menu = styled(Box)(({ theme }) => ({
  '& .desktop': {
    display: 'block',

    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  '& .mobile': {
    display: 'none',

    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  }
}));

const Legal = {
  MenuButton,
  Menu
};

export default Legal;
