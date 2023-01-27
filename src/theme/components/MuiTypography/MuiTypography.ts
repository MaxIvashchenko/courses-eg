import { TypographyProps } from '@mui/material';
import {
  ComponentsOverrides,
  ComponentsVariants,
  Theme
} from '@mui/material/styles';

type MuiTypographyType = {
  defaultProps?: TypographyProps;
  styleOverrides?: ComponentsOverrides<Theme>['MuiTypography'];
  variants?: ComponentsVariants['MuiTypography'];
};

const MuiTypography: MuiTypographyType = {
  defaultProps: {
    variantMapping: {
      landing1: 'h1',
      landing2: 'h2',
      landing3: 'h3',
      body3: 'p',
      'body1-sm': 'p',
      'h1-sm': 'h1'
    }
  },
  styleOverrides: {
    root: ({ theme }) => ({
      fontWeight: 700,
      color: theme.palette.common.black
    }),
    // using
    h1: ({ theme }) => ({
      fontSize: 40,
      lineHeight: '40px',
      [theme.breakpoints.down('sm')]: {
        fontSize: 20,
        lineHeight: '20px'
      }
    }),
    h2: ({ theme }) => ({
      fontSize: 26,
      lineHeight: '32px',
      [theme.breakpoints.down('sm')]: {
        fontSize: 23,
        lineHeight: '28px'
      }
    }),
    h3: ({ theme }) => ({
      fontWeight: 700,
      fontSize: 24,
      lineHeight: '24px',
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
        lineHeight: '16px'
      }
    }),
    h4: ({ theme }) => ({
      fontSize: 18,
      lineHeight: '26px',
      [theme.breakpoints.down('sm')]: {
        fontWeight: 400
      }
    }),
    h5: {
      fontWeight: 400,
      fontSize: 18,
      lineHeight: '26px'
    },
    body1: ({ theme }) => ({
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '24px',
      color: theme.palette.grey[700]
    }),
    body2: ({ theme }) => ({
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '20px',
      color: theme.palette.grey[700]
    }),
    caption: ({ theme }) => ({
      fontWeight: 600,
      fontSize: 10,
      lineHeight: '12px',
      color: theme.palette.grey[700]
    })
  },
  variants: [
    {
      props: { variant: 'landing1' },
      style: ({ theme }) => ({
        fontSize: 64,
        lineHeight: '64px',
        [theme.breakpoints.down('sm')]: {
          fontSize: 40,
          lineHeight: '44px'
        }
      })
    },
    {
      props: { variant: 'landing2' },
      style: ({ theme }) => ({
        color: theme.palette.common.black,
        fontSize: 48,
        lineHeight: '52px',
        [theme.breakpoints.down('sm')]: {
          fontSize: 28,
          lineHeight: '32px'
        }
      })
    },
    {
      props: { variant: 'landing3' },
      style: ({ theme }) => ({
        fontSize: 40,
        lineHeight: '40px',
        [theme.breakpoints.down('sm')]: {
          fontSize: 24,
          lineHeight: '28px'
        }
      })
    },
    {
      props: { variant: 'body3' },
      style: ({ theme }) => ({
        fontWeight: 400,
        fontSize: 12,
        lineHeight: '16px',
        color: theme.palette.grey[700]
      })
    }
  ]
};

export default MuiTypography;
