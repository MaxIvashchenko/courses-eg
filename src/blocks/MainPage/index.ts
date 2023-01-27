import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const PaperButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  backgroundColor: 'white',
  padding: 16,
  borderRadius: 8,
  height: '100%',
  width: '100%',
  boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',

  '&:hover': {
    boxShadow: '0 28px 48px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  },
  '&.active': {
    boxShadow: '0 28px 48px rgba(20,14,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  },

  '& .iconWrapper': {
    display: 'flex',
    justifyContent: 'center',

    margin: '16px 0 8px',
    padding: 16,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main
  }
}));

const Line = styled(Box)(({ theme }) => ({
  height: 180,
  width: '1px',
  margin: '0 auto',
  border: `1px solid ${theme.palette.primary.main}`
}));

const List = styled('ul')(({ theme }) => ({
  paddingLeft: 24,
  margin: '8px 0 0 0',

  '& li': {
    '&::marker': {
      color: theme.palette.primary.main
    }
  }
}));

const MainPage = {
  PaperButton,
  Line,
  List
};

export default MainPage;
