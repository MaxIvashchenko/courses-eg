import Image from 'next/image';
import { Box, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { redirectToTelegramPrivateLink } from '@src/utils';

const SmallLayer = styled(Box)(({ theme }) => ({
  '& img': {
    position: 'absolute',
    top: -190,
    left: -100,

    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  maxWidth: 1680,
  margin: '0 auto',
  minHeight: '100vh',
  position: 'relative',

  backgroundImage: 'url(/images/image1.svg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right',
  backgroundSize: 'contain',

  [theme.breakpoints.up('xl')]: {
    minHeight: 900
  },
  [theme.breakpoints.down('md')]: {
    backgroundPosition: 'inherit'
  }
}));
const BigTitle = styled('p')(({ theme }) => ({
  textTransform: 'uppercase',
  fontWeight: 600,
  fontSize: 72,
  lineHeight: 0,
  marginBottom: 16,

  [theme.breakpoints.down('sm')]: {
    fontSize: 32
  }
}));
const SubTitle = styled('p')(({ theme }) => ({
  textTransform: 'uppercase',
  fontWeight: 400,
  fontSize: 72,
  lineHeight: 1,
  marginBottom: 16,

  [theme.breakpoints.down('sm')]: {
    fontSize: 32,
    marginBottom: 8
  }
}));

const title: string[] = ['ГАСТРОБИЗНЕС', 'ПОД КЛЮЧ', 'В ПОЛЬШЕ'];

const IntroBlock = () => (
  <Box
    id='top'
    sx={{
      background: '#e4e4dc',
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    <GridContainer container>
      <SmallLayer>
        <Image
          priority
          src='/images/layer1.svg'
          height={600}
          width={600}
          alt='blue layer small'
        />
      </SmallLayer>
      <Grid
        item
        xs={12}
        sx={{
          px: { xs: 4, sm: 8 },
          mb: { xs: 2, sm: 10 },
          position: 'sticky',
          alignSelf: 'end'
        }}
      >
        {title.map((text) => (
          <BigTitle key={text}>{text}</BigTitle>
        ))}

        <SubTitle>Онлайн-курс</SubTitle>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { xs: '100%', sm: 400 }
          }}
        >
          <Button
            size='large'
            variant='contained'
            onClick={redirectToTelegramPrivateLink}
            sx={{ minWidth: 300, my: 1, fontSize: 32 }}
          >
            Оставить Заявку
          </Button>
          <Button
            size='large'
            variant='contained'
            onClick={redirectToTelegramPrivateLink}
            sx={{ minWidth: 300, my: 1, fontSize: 24 }}
          >
            Связаться с менеджером
          </Button>
        </Box>
      </Grid>
    </GridContainer>
  </Box>
);

export default IntroBlock;
