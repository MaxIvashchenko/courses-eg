import React from 'react';
import { Box } from '@mui/material';

import { styled } from '@mui/material/styles';

import { IntroBlock, ProgramCourseBlock, SpeakersSlider } from 'components';

const Container = styled(Box)(({ theme }) => ({
  backgroundImage: 'url(images/bar.webp)',
  backgroundSize: 'contain',
  backgroundColor: '#bb6336',
  backgroundRepeat: 'no-repeat',

  [theme.breakpoints.down('md')]: {
    backgroundSize: 'cover'
  }
}));

export default function Home() {
  return (
    <Container>
      <IntroBlock />
      <ProgramCourseBlock />

      <Box sx={{ background: '#fff' }}>
        <SpeakersSlider />
      </Box>
      {/*       
      <Grid
        container

        sx={{
          background: '#fff',
          p: { xs: 2, md: 4 }
        }}
      >
        <Grid item xs={12} >
          <Typography color='common.black' py={2} variant='h1' textAlign='center'>
            <span>Для кого</span> курс?
          </Typography>
        </Grid>
        {motivationContent.map(({ title, subTitle, boldSubtitle }, index) => (
          <Grid item key={title} xs={12} md={6} py={2} sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <Typography sx={{ fontSize: '110px', lineHeight: '110px', pr: { xs: 1, sm: 2 } }} color='primary.main'>{index + 1}</Typography>
            <Box>
              <Typography variant='h3' color='primary.black'>{title}</Typography>
              <Typography variant='h3' color='primary.black'>
                {subTitle}<strong>{boldSubtitle}</strong>
              </Typography>
            </Box>
          </Grid>
        ))}

      </Grid> */}
    </Container>
  );
}

// const motivationContent = [
//   {
//     title: 'ДЛЯ ВСЕХ',
//     subTitle: 'кто давно мечтает открыть свою кофейню или пекарню и зарабатывать ',
//     boldSubtitle: 'от 500 тыс.руб в месяц'
//   },
//   {
//     title: 'ДЛЯ ДОМАШНИХ КОНДИТЕРОВ',
//     subTitle: 'которые устали работать руками и хотели бы зарабатывать больше, выйти на другой уровень - открыть ',
//     boldSubtitle: 'свое кафе-кондитерскую'
//   },
//   {
//     title: 'ДЛЯ НАЧИНАЮЩИХ ПРЕДПРИНИМАТЕЛЕЙ',
//     subTitle: 'которые уже наметили план своего бизнеса и возможно даже придумали продукт, но почему-то до сих пор ',
//     boldSubtitle: 'так и не решились  открыть свое дело'
//   },
//   {
//     title: 'ДЛЯ БИЗНЕСМЕНОВ',
//     subTitle: 'которые уже открыли свое первое заведение и собираются улучшить или масштабировать бизнес, применив другой опыт',
//     boldSubtitle: ''
//   },
// ]
