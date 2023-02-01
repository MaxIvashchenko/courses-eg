import { Box, CardActionArea as MuiCardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';

const CenteredWrapper = styled(Box)({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column'
});

const CardActionArea = styled(MuiCardActionArea)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  background: theme.palette.common.white,
  '& img': {
    width: '160px',
    height: '160px'
  },

  [theme.breakpoints.down('sm')]: {
    '& img': {
      width: '132px',
      height: '132px'
    }
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  padding: 24,
  background: theme.palette.primary.main,
  width: 'auto',
  '& svg': {
    width: '112px',
    height: '112px'
  },

  [theme.breakpoints.down('sm')]: {
    padding: 16,
    textAlign: 'center',
    '& svg': {
      width: '100px',
      height: '100px'
    }
  }
}));

const Profile = {
  CenteredWrapper,
  CardActionArea,
  IconWrapper
};

export default Profile;
