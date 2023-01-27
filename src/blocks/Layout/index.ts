import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const AppWrapper = styled(Box)({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflowX: 'hidden'
});

const ContentWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  width: '100%',
  maxWidth: 1440,
  height: '100%'
});

const LayoutWrapper = styled(Box)({
  height: '100%'
});

const Layout = {
  AppWrapper,
  ContentWrapper,
  LayoutWrapper
};

export default Layout;
