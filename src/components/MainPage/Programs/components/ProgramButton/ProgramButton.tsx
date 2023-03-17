import React from 'react';
import {
  Box,
  Button as MuiButton,
  Paper as MuiPaper,
  Stack,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconComponent } from '@src/components';

const Button = styled(MuiButton)(({ theme }) => ({
  width: '100%',
  height: '100%',
  padding: 0,
  '&:hover': {
    '& h2, & h4': {
      color: '#ffffff99'
    },
    '& svg': {
      '& path': {
        fill: '#ffffff99'
      }
    }
  },

  [theme.breakpoints.down('sm')]: {}
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  margin: 16,
  [theme.breakpoints.down('sm')]: {
    marginRight: 16,

    '& svg': {
      width: 48,
      height: 48
    }
  }
}));

const ArrowWrapper = styled(Box)<{ direction: string }>(
  ({ theme, direction }) => ({
    position: 'absolute',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    [direction.toLowerCase()]: 4,
    top: 0,

    [theme.breakpoints.down('sm')]: {
      [direction.toLowerCase()]: 8,

      '& svg': {
        width: 24,
        height: 24
      }
    }
  })
);

const Paper = styled(MuiPaper)<{ background: string; position: string }>(
  ({ theme, background, position }) => ({
    width: '100%',
    padding: position === 'Left' ? '16px 8px 16px 16px' : '16px 16px 16px 8px',
    borderRadius: 0,
    [`borderTop${position}Radius`]: 16,
    [`borderBottom${position}Radius`]: 16,
    height: '100%',
    zIndex: 2,
    boxShadow: '0 6px 20px rgb(0 0 0 / 30%)',
    transition: 'all 0.2s ease-out',
    position: 'relative',
    background,

    [theme.breakpoints.up('md')]: {
      '&:hover': {
        transition: 'all 0.2s ease-out',
        boxShadow: '0 6px 20px rgb(0 0 0 / 50%)',
        transform: 'scale(1.05)',
        borderRadius: 16
      }
    },
    [theme.breakpoints.down('md')]: {
      borderRadius: 16,
      padding: 16
    }
  })
);

interface ProgramButtonProps {
  iconName?: string;
  title: string;
  subTitle?: string;
  position?: string;
  isBlock?: boolean;
  background?: string;
  clickHandler: () => void;
}

const ProgramButton = ({
  iconName = 'cube',
  title,
  subTitle = '',
  position = 'Left',
  isBlock = false,
  background = '#fff',
  clickHandler
}: ProgramButtonProps) => (
  <Button variant='text' onClick={clickHandler}>
    <Paper background={background} position={position}>
      <ArrowWrapper direction={position}>
        <IconComponent
          isMirror={position === 'Left'}
          fill='#fff'
          name='right'
        />
      </ArrowWrapper>

      <Stack
        alignItems='center'
        sx={{
          justifyContent: {
            xs: 'left',
            md: position !== 'Left' && isBlock ? 'right' : 'left'
          },
          flexDirection: {
            xs: 'row',
            md: position !== 'Left' && isBlock ? 'row-reverse' : 'row'
          }
        }}
      >
        <IconWrapper>
          {isBlock ? (
            <IconComponent fill='#fff' name={iconName} width={40} height={40} />
          ) : (
            <IconComponent fill='#fff' name={iconName} width={72} height={72} />
          )}
        </IconWrapper>
        <Typography
          color='#fff'
          variant='h2'
          sx={{
            textAlign: {
              xs: 'left',
              md: position !== 'Left' && isBlock ? 'right' : 'left'
            }
          }}
        >
          {title}
        </Typography>
      </Stack>

      {subTitle && (
        <Typography
          color='#fff'
          variant='h4'
          pt={1}
          pl={2}
          sx={{
            textTransform: 'uppercase',
            textAlign: {
              xs: 'left',
              md: position !== 'Left' && isBlock ? 'right' : 'left'
            }
          }}
        >
          {subTitle}
        </Typography>
      )}
    </Paper>
  </Button>
);

export default ProgramButton;
