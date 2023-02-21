import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const SignInWrapper = styled(Box)({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f5f7f8'
});

const Wrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginBottom: 100,
  width: 400,
  minWidth: 345,
  borderRadius: 10,
  overflow: 'hidden',
  padding: 32,
  boxShadow: '0 6px 20px rgb(0 0 0 / 10%)',
  background: '#fff',
  '& input::placeholder': {
    color: 'red',
    opacity: 1
  },

  '& .MuiInputBase-root': {
    color: 'black',
    borderBottom: `1px solid grey`,

    '&:not(.Mui-disabled):before, &:hover:not(.Mui-disabled):before, &:before, &:after':
      {
        border: 'none',
        '&:hover': {
          border: 'none'
        }
      }
  },

  '& .MuiInputLabel-root': {
    color: 'black',

    '&.Mui-focused': {
      color: 'black'
    }
  },

  [theme.breakpoints.down('sm')]: {
    width: 'auto'
  }
}));

const BodyWrapper = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '& > .MuiFormControl-root, & > button': {
    // marginBottom: 24
  }
});

const Body = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  color: 'green',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  [theme.breakpoints.down('sm')]: {}
}));

const Footer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& a p, & a': {
    fontSize: 14,
    color: 'black',
    textDecoration: 'none',
    '&:hover': {
      color: 'grey'
    }
  },
  [theme.breakpoints.down('sm')]: {}
}));

const Auth = {
  SignInWrapper,
  Wrapper,
  BodyWrapper,
  Body,
  Footer
};

export default Auth;
