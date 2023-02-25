import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const contentLeft: string[] = [
  'На протяжении всего курса, мы с тобой одна команда',
  'Рассчитаем необходимый бюджет на старт /разберём варианты привлечения инвестиций',
  'Дадим  все необходимые инструменты и подробные инструкции на каждом этапе подготовки'
];
const contentRight: string[] = [
  'Создадим и вкусно упакуем идею/концепцию/уникальность вашего заведения',
  'Подготовим полный пакет документов для всех инстанций',
  'Обеспечим поддержкой наставников на всех этапах создания,формирования и внедрения бизнеса'
];

const GridItem = styled(Grid)<{ direct: string }>(({ theme, direct }) => ({
  [`border${direct}`]: '1px solid #000',

  [theme.breakpoints.down('md')]: {
    border: 'none'
  }
}));

const PointLine = styled(Box)<{ direct: string }>(({ theme, direct }) => ({
  borderTop: '2px solid #000',
  position: 'absolute',
  [direct]: 0,
  top: '50%',
  height: 1,
  width: 20,
  '&:before': {
    content: '""',
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: '#000',
    position: 'absolute',
    top: -6,
    [direct]: 15
  },

  [theme.breakpoints.down('md')]: {
    left: 0,
    border: 0,
    '&:before': {
      left: 0
    }
  }
}));

const ContentWrapper = styled(Box)<{ direct: string }>(({ direct }) => ({
  position: 'relative',
  display: 'flex',
  minHeight: 100,
  alignItems: 'center',
  justifyContent: direct
}));

const YourGain = () => (
  <Grid
    container
    sx={{
      minHeight: 400,
      backgroundColor: '#fff',
      px: { xs: 2, sm: 4 }
    }}
  >
    <Grid item xs={12}>
      <Typography textAlign='center' sx={{ pb: { xs: 1, md: 4 } }} variant='h1'>
        ЧТО ВЫ ПОЛУЧИТЕ
      </Typography>
    </Grid>
    <GridItem direct='Right' item xs={12} md={6}>
      {contentLeft.map((text) => (
        <ContentWrapper direct='right' key={text}>
          <Typography
            textTransform='uppercase'
            color='commonn.black'
            fontWeight={400}
            variant='h4'
            sx={{
              textAlign: { xs: 'left', md: 'right' },
              py: { xs: 1, md: 2 },
              pr: { xs: 0, md: 6 },
              pl: { xs: 4, md: 0 }
            }}
          >
            {text}
          </Typography>
          <PointLine direct='right' />
        </ContentWrapper>
      ))}
    </GridItem>
    <GridItem direct='Left' item xs={12} md={6} sx={{ pt: { xs: 0, md: 6 } }}>
      {contentRight.map((text) => (
        <ContentWrapper key={text} direct='left'>
          <Typography
            textTransform='uppercase'
            variant='h4'
            fontWeight={400}
            color='commonn.black'
            sx={{
              textAlign: 'left',
              py: { xs: 1, md: 2 },
              pl: { xs: 4, md: 6 }
            }}
          >
            {text}
          </Typography>

          <PointLine direct='left' />
        </ContentWrapper>
      ))}
    </GridItem>
  </Grid>
);

export default YourGain;
