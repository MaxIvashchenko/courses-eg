import * as React from 'react';
import { Paper, Slide, SlideProps, Typography } from '@mui/material';
import MuiSnackbar from '@mui/material/Snackbar';
import { styled } from '@mui/material/styles';

import { IconComponent } from '../IconComponent';

const SnackbarMessage = styled(Paper, {
  shouldForwardProp: (prop) => prop !== 'isError'
})<{ isError?: boolean }>(({ theme, isError }) => ({
  minWidth: 400,
  backgroundColor: isError
    ? theme.palette.error.light
    : theme.palette.success.light,
  padding: '16px',
  alignSelf: 'center',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 6,

  '& path': {
    fill: isError ? theme.palette.error.main : theme.palette.success.main
  },
  '& h5': {
    color: isError ? theme.palette.error.main : theme.palette.success.main
  },

  [theme.breakpoints.down('sm')]: {
    minWidth: 0,
    width: '100%'
  }
}));

type TransitionProps = Omit<SlideProps, 'direction'>;

const Transition = (props: TransitionProps) => (
  <Slide {...props} direction='up' />
);

interface SnackbarProps {
  isError?: boolean;
  message: string;
  closeSnackbar: () => void;
}

const Snackbar = ({ isError, message, closeSnackbar }: SnackbarProps) => (
  <MuiSnackbar
    autoHideDuration={3000}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    open={Boolean(message)}
    onClose={closeSnackbar}
    TransitionComponent={Transition}
  >
    <SnackbarMessage isError={isError}>
      <IconComponent
        width={32}
        height={32}
        fill='#e3513e'
        name={isError ? 'error' : 'success'}
      />
      <Typography px={2} variant='h5'>
        {message}
      </Typography>
    </SnackbarMessage>
  </MuiSnackbar>
);

export default Snackbar;
