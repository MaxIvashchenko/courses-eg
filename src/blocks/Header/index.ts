import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeaderWrapper = styled(Box)<{ scrolled: number }>(({ scrolled }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  zIndex: 10,
  position: 'fixed',
  transition: 'background 0.5s ease-out',
  background: scrolled ? '#ffffffe6' : ''
}));

const PaddingWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 90,
  [theme.breakpoints.up('lg')]: {
    padding: '16px 48px'
  },
  [theme.breakpoints.down('lg')]: {
    padding: '16px 32px'
  },
  [theme.breakpoints.down('sm')]: {
    padding: '8px 16px',
    justifyContent: 'end'
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  display: 'flex',
  zIndex: 80,
  justifyContent: 'center',
  alignItems: 'center',

  '& path': {
    fill: theme.palette.common.black
  },
  [theme.breakpoints.down('sm')]: {
    justifyContent: 'start'
  }
}));

const Header = {
  HeaderWrapper,
  PaddingWrapper,
  IconWrapper
};

export default Header;
