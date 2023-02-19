import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import image2 from '../../../../public/images/image2.jpg';

const SmallGreyLayer = styled(Box)(({ theme }) => ({
  '& img': {
    position: 'absolute',
    top: 0,
    right: 0
  },
  [theme.breakpoints.down('sm')]: {
    '& img': {
      top: -5,
      right: 0,
      width: 480,
      height: 300
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

const CourseTarget = () => (
  <Box
    sx={{
      // minHeight: 850,
      background: '#fff',

      backgroundImage: 'url(images/layer4.svg)',
      backgroundPosition: 'bottom',
      position: 'relative',
      backgroundRepeat: 'no-repeat'
      // px: { xs: 4, sm: 8 },
      // pt: { xs: 8, sm: 10 },
      // pb: { xs: 2, sm: 4 }
    }}
  >
    <Grid
      container
      py={5}
      sx={{
        alignItems: 'center',
        maxWidth: 1440,
        margin: '0 auto'
      }}
    >
      <SmallGreyLayer>
        <Image
          priority
          src='/images/layer3.svg'
          height={300}
          width={500}
          alt='grey layer small'
        />
      </SmallGreyLayer>

      <Grid item xs={12} md={6} sx={{ position: 'sticky' }}>
        <ImageWrapper>
          <Image src={image2} alt='girl' width={500} height={800} />
        </ImageWrapper>
      </Grid>
      <Grid item xs={12} md={6} p={2} mb={4} sx={{ position: 'sticky' }}>
        <Typography my={2} fontWeight='700' color='primary.black' variant='h1'>
          ДЛЯ КОГО КУРС
        </Typography>
        {[
          'Для всех, кто мечтает открыть гастробизнес и зарабатывать на нем',
          'Для действующих предпринимателей, которые уже открыли свое первое заведение и собираются улучшить или масштабировать бизнес, применив новые знания',
          'Для тех,кто в поиске себя и своей ниши'
        ].map((row, idx) => (
          <Typography key={row} variant='h5' py={1}>{`${
            idx + 1
          }) ${row}`}</Typography>
        ))}
        <Typography mt={2} variant='h5'>
          От идеи к успешному бизнесу : Пошаговый план открытия — бизнес план —
          финансовая модель — поддержка на всех этапах — реальный результат
        </Typography>
      </Grid>
    </Grid>
  </Box>
);

export default CourseTarget;
