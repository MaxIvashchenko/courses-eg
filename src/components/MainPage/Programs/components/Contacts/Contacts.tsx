import { Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { phoneNumber } from '@src/constants';

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
    <Grid item xs={12} md={9} lg={8}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: 'center', md: 'end', lg: 'center' },
            px: 2,
            mb: { xs: 3, md: 2, lg: 0 }
          }}
        >
          <Typography variant='h1' py={2}>
            КОНТАКТЫ
          </Typography>
          <Typography variant='h2' noWrap>
            {phoneNumber}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            textAlign: { xs: 'center', md: 'end' }
          }}
        >
          <ContactButtons background='#524a49'>
            СВЯЗАТЬСЯ С МЕНЕДЖЕРОМ
          </ContactButtons>
          <ContactButtons background='#ad733a'>ЗАПОЛНИИТЬ ФОРМУ</ContactButtons>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default Contacts;
