import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { imagesUrls } from '@src/constants';
import { imgLoader } from '@src/utils';

import { TextWithIcon } from './components';

const CourseTargetContainer = styled(Box)(({ theme }) => ({
  background: '#fff',
  backgroundImage: `url(${imagesUrls.layer4})`,
  backgroundPosition: 'bottom',
  position: 'relative',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  minHeight: 500,

  [theme.breakpoints.up('xl')]: {
    backgroundSize: 'cover',
    backgroundPosition: 'left'
  }
}));

const SmallGreyLayer = styled(Box)(({ theme }) => ({
  '& img': {
    position: 'absolute',
    top: 0,
    right: -5
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

const content: { text: string; icon: string; mirror: boolean }[] = [
  {
    text: 'Для всех, кто мечтает открыть гастробизнес и зарабатывать на нем',
    icon: 'man',
    mirror: false
  },
  {
    text: 'Для действующих предпринимателей, которые уже открыли свое первое заведение и собираются улучшить или масштабировать бизнес, применив новые знания',
    icon: 'cafe',
    mirror: true
  },
  {
    text: 'Для тех,кто в поиске себя и своей ниши',
    icon: 'loop',
    mirror: false
  }
];

const CourseTarget = () => (
  <CourseTargetContainer>
    <Grid
      container
      sx={{
        py: { xs: 2, md: 5 },
        maxWidth: 1680,
        margin: '0 auto'
      }}
    >
      <SmallGreyLayer>
        <Image
          priority
          src={imagesUrls.layer3}
          height={300}
          width={500}
          blurDataURL={imagesUrls.layer3}
          loader={imgLoader}
          alt='grey layer small'
        />
      </SmallGreyLayer>

      <Grid
        item
        xs={12}
        md={4}
        sx={{
          position: 'sticky',
          backgroundImage: `url(${imagesUrls.table})`,
          backgroundPosition: 'inherit',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain'
        }}
      ></Grid>
      <Grid
        item
        xs={12}
        md={8}
        px={2}
        sx={{ position: 'sticky', textAlign: { xs: 'center', md: 'left' } }}
      >
        <Typography mb={2} fontWeight='700' color='primary.black' variant='h1'>
          ДЛЯ КОГО КУРС
        </Typography>

        {content.map((row) => (
          <TextWithIcon key={row.text} {...row} />
        ))}
      </Grid>
    </Grid>
  </CourseTargetContainer>
);

export default CourseTarget;
