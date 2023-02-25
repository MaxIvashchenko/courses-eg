import { createTheme, Theme } from '@mui/material/styles';

import { MuiButton, MuiTypography } from './components';
import palette from './palette';

const theme: Theme = createTheme({
  palette,
  components: {
    MuiButton,
    MuiTypography
  },
  typography: {
    fontFamily: ['Maven Pro', 'sans-serif'].join(',')
  }
});

export default theme;
