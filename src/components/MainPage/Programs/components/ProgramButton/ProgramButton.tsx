import React from 'react';
import {
  Box,
  Button as MuiButton,
  Paper as MuiPaper,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconComponent } from '@src/components';

const Button = styled(MuiButton)(({ theme }) => ({
  width: '100%',
  height: '100%',
  '&:hover': {
    '& h2, & h4': {
      color: '#a25919'
    },
    '& svg': {
      '& path': {
        fill: '#a25919'
      }
    }
  },

  [theme.breakpoints.down('sm')]: {}
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    marginRight: 16,

    '& svg': {
      width: 48,
      height: 48
    }
  }
}));

const Paper = styled(MuiPaper)(({ theme }) => ({
  width: '100%',
  padding: 32,
  borderRadius: 8,
  height: '100%',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  boxShadow: '0 6px 20px rgb(0 0 0 / 30%)',
  transition: 'all 0.2s ease-out',
  position: 'relative',
  minHeight: 162,

  '&:hover': {
    transition: 'all 0.2s ease-out',
    boxShadow: '0 6px 20px rgb(0 0 0 / 50%)',
    transform: 'scale(1.05)'
  },

  [theme.breakpoints.down('sm')]: {
    padding: 24,
    minHeight: 0
  }
}));

interface ProgramButtonProps {
  iconName?: string;
  title: string;
  subTitle?: string;
  clickHandler: () => void;
}

const ProgramButton = ({
  iconName = 'cube',
  title,
  subTitle = '',
  clickHandler
}: ProgramButtonProps) => (
  <Button variant='text' onClick={clickHandler} sx={{ p: { xs: 1, md: 2 } }}>
    <Paper>
      <IconWrapper>
        <IconComponent name={iconName} width={60} height={60} />
      </IconWrapper>
      <Box
        textAlign='center'
        sx={{
          ml: { xs: 1, md: 3 },
          pr: { xs: 1, md: 4 }
        }}
      >
        <Typography variant='h2' textAlign='left'>
          {title}
        </Typography>
        {subTitle && (
          <Typography variant='h4' textAlign='left' pt={1}>
            {subTitle}
          </Typography>
        )}
      </Box>

      <IconWrapper sx={{ position: 'absolute', right: 0 }}>
        <IconComponent name='right' width={60} height={60} />
      </IconWrapper>
    </Paper>
  </Button>
);

export default ProgramButton;
