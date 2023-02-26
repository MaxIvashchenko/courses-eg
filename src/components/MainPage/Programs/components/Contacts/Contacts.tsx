import { Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const ContactButtons = styled(Button)<{ background: string }>(
  ({ theme, background }) => ({
    background,
    minWidth: 350,
    margin: '8px 0',

    [theme.breakpoints.down('md')]: {
      minWidth: 400
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: 310
    }
  })
);

const Contacts = () => (
  <Grid container my={3}>
    <Grid item xs={12} md={3} lg={4} />
    <Grid
      item
      xs={12}
      md={6}
      lg={8}
      sx={{
        textAlign: 'center',
        my: { xs: 3, md: 2, lg: 0 }
      }}
    >
      <ContactButtons background='#524a49'>Оставить заявку</ContactButtons>
    </Grid>
  </Grid>
);

export default Contacts;
