import { useState } from 'react';
import Link from 'next/link';
import { IconButton, Box, Slide, Snackbar as MuiSnackbar } from '@mui/material';
import { SlideProps } from '@mui/material/Slide';
import { styled } from '@mui/material/styles';

import { IconComponent } from '..';
import { paths } from 'src/constants';

const Snackbar = styled(MuiSnackbar)(({ theme }) => ({
  '& a': {
    textDecoration: 'underline',
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.primary.light
    }
  }
}));

type TransitionProps = Omit<SlideProps, 'direction'>;

const TransitionUp = (props: TransitionProps) => {
  return <Slide {...props} direction='left' />;
};

const CookiesAlert = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [transition, setTransition] = useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const handleClick =
    (Transition: React.ComponentType<TransitionProps>) => () => {
      setTransition(() => Transition);
      setIsOpen(false);
    };

  const handleClose = () => {
    handleClick(TransitionUp);
    setIsOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      TransitionComponent={transition}
      open={isOpen}
      onClose={handleClose}
      message={
        <Box>
          Пользуясь нашим сайтом, вы соглашаетесь с тем, что
          <Link style={{ marginLeft: 8 }} href={paths.legal}>
            мы используем cookies
          </Link>
        </Box>
      }
      action={
        <IconButton
          aria-label='close'
          color='inherit'
          sx={{ p: 0.5 }}
          onClick={handleClose}
        >
          <IconComponent name='close' width={16} height={16} />
        </IconButton>
      }
    />
  );
};

export default CookiesAlert;
