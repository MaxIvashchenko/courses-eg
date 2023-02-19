import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const content = [
  'Создадим и вкусно упакуем идею/концепцию/уникальность вашего заведения',
  'Рассчитаем необходимый бюджет на старт /разберём варианты привлечения инвестиций',
  'Подготовим полный пакет документов для всех инстанций',
  'Дадим  все необходимые инструменты и подробные инструкции на каждом этапе подготовки',
  'Обеспечим поддержкой наставников на всех этапах создания,формирования и внедрения бизнеса'
];

const TextWrapper = styled(Grid)(({ theme }) => ({
  height: '100%',
  width: '100%',
  textAlign: 'end',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
    padding: 8
  }
}));

const ImageWrapper = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    '& div ': {
      margin: 'auto'
    }
  }
}));

const AboutUs = () => (
  <Grid
    container
    sx={{
      textAlign: 'end',
      background: '#E5E4DD',
      py: 4
    }}
  >
    <TextWrapper item xs={12} md={8}>
      <Typography my={2} fontWeight='700' color='primary.black' variant='h1'>
        О НАС
      </Typography>
      <Typography variant='h5'>
        На протяжении всего курса, мы с тобой одна команда
      </Typography>
      {content.map((item, idx) => (
        <Typography key={item} variant='h5' py={1}>{`${
          idx + 1
        }) ${item}`}</Typography>
      ))}
    </TextWrapper>
    <ImageWrapper item xs={12} md={4}>
      <Box
        sx={{
          width: 400,
          height: 400,
          backgroundImage: 'url(images/image3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          marginLeft: 'auto'
        }}
      />
    </ImageWrapper>
  </Grid>
);

export default AboutUs;
