import Image from 'next/image';
import { Box, Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconComponent } from '@src/components/Common';

import table from '../../../../public/images/image1.jpg';

const SmallLayer = styled(Box)(({ theme }) => ({
  '& img': {
    position: 'absolute',
    top: 0,
    left: 50,

    [theme.breakpoints.down('sm')]: {
      zIndex: 2,
      width: 300,
      height: 200,
      position: 'absolute',
      top: 0,
      left: -25
    }
  }
}));
const BigLayer = styled(Box)(({ theme }) => ({
  '& img': {
    position: 'absolute',
    top: 50,
    right: 50,
    [theme.breakpoints.down('lg')]: {
      width: 600,
      height: 900,
      top: 200,
      right: 0
    },
    [theme.breakpoints.down('md')]: {
      width: 700,
      height: 1050,
      top: 400,
      right: 50
    },
    [theme.breakpoints.down('sm')]: {
      height: 450,
      width: 300,
      top: 250,
      right: -50
    }
  }
}));
const ImageWrapper = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  textAlign: 'end',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    marginTop: 20,

    '& img': {
      height: 450,
      width: 300
    }
  }
}));

const IntroBlock = () => (
  <Box
    sx={{
      minHeight: '100vh',
      background: '#e4e4dc',
      width: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      px: { xs: 4, sm: 8 },
      pt: { xs: 8, sm: 10 },
      pb: { xs: 2, sm: 4 }
    }}
  >
    <Grid
      container
      sx={{
        maxWidth: 1440,
        margin: '0 auto'
      }}
    >
      <SmallLayer>
        <Image
          priority
          src='/images/layer1.svg'
          height={300}
          width={450}
          alt='blue layer small'
        />
      </SmallLayer>
      <BigLayer>
        <Image
          priority
          src='/images/layer2.svg'
          height={1100}
          width={800}
          alt='blue layer big'
        />
      </BigLayer>
      <Grid item xs={12} pt={1} textAlign='center' sx={{ zIndex: 20 }}>
        <IconComponent name='logo' width={350} height={200} />
      </Grid>
      <Grid item xs={12} md={6} sx={{ position: 'sticky', alignSelf: 'end' }}>
        <p
          style={{
            textTransform: 'uppercase',
            fontWeight: 400,
            fontSize: 72,
            lineHeight: 1,
            marginBottom: 2,
            padding: 1
          }}
        >
          Онлайн-курс
        </p>
        <Typography
          fontSize={40}
          fontWeight='400'
          color='primary.black'
          variant='h1'
        >
          ГАСТРОБИЗНЕС ПОД
        </Typography>
        <Typography
          fontSize={40}
          fontWeight='400'
          color='primary.black'
          variant='h1'
        >
          КЛЮЧ В ПОЛЬШЕ
        </Typography>
        <Typography color='common.black' sx={{ pt: 3 }} variant='h3'>
          Открой свою КОФЕЙНЮ, ПЕКАРНЮ или КОНДИТЕРСКУЮ
        </Typography>
        <Typography color='common.black' sx={{ pb: 3 }} variant='h3'>
          <span>зарабатывай от 500 тыс. уже через 3 месяца</span> после старта
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { xs: '100%', sm: 400 }
          }}
        >
          <Button size='large' variant='contained' sx={{ width: 300, my: 1 }}>
            Купитиь Курс
          </Button>
          <Button size='large' variant='contained' sx={{ width: 300, my: 1 }}>
            У меня есть вопросы
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{ position: 'sticky' }}>
        <ImageWrapper>
          <Image src={table} alt='table' width={500} height={800} />
        </ImageWrapper>
      </Grid>
    </Grid>
  </Box>
);

export default IntroBlock;
