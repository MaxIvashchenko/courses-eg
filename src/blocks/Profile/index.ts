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
  background: theme.palette.common.white
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  width: 'auto',
  '& svg': {
    width: '140px',
    height: '140px'
  },

  [theme.breakpoints.down('sm')]: {
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
