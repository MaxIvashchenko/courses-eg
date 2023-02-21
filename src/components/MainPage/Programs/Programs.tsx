import { useCallback, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { boxShadow } from '@src/styles';
import { phoneNumber } from 'src/constants';

import { CustomAccordion } from './components';

const ProgramsContainer = styled(Box)(({ theme }) => ({
  minHeight: '1200px',
  backgroundImage: 'url(images/layer7.svg)',
  backgroundColor: '#fff',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'bottom',
  width: '100%',
  position: 'relative',

  [theme.breakpoints.down('sm')]: {}
}));

// const TopGreyLayer = styled(Box)(({ theme }) => ({
//   width: '100%',

//   '& img': {
//     position: 'absolute',
//     top: -100,
//     width: '100%',
//     height: 'auto',

//     [theme.breakpoints.down('sm')]: {}
//   }
// }));

const ContactButtons = styled(Button)<{ background: string }>(
  ({ theme, background }) => ({
    background,
    minWidth: 350,
    margin: '8px 0',

    [theme.breakpoints.down('sm')]: {}
  })
);

interface ICourse {
  title: string;
  description: string;
  backgroundColor: string;
}

interface IPlan {
  title: string;
  descriptions: string[];
  backgroundColor: string;
}

const courses: ICourse[] = [
  {
    title: 'Открой свой бизнес с нуля',
    description: 'содержание курса',
    backgroundColor: '#a65813'
  },
  {
    title: 'Развивай и масштабируй',
    description: 'содержание курса',
    backgroundColor: '#dd964c'
  }
];

const plans: IPlan[] = [
  {
    title: 'Start',
    descriptions: [
      '1 консультация с наставником',
      'Чат с обратной связью от всех наставников на 3 месяца',
      'Сообщество единомышленников'
    ],
    backgroundColor: '#a35817'
  },
  {
    title: 'Duet',
    descriptions: [
      '2 консультации с наставником',
      'Чат с обратной связью от всех наставников на 6 месяцев',
      'Сообщество единомышленников'
    ],
    backgroundColor: '#5b6b46'
  },
  {
    title: 'Mentor',
    descriptions: [
      'Консультация наставника 50$',
      'Индивидуальное наставничество 30 ч - 700$'
    ],
    backgroundColor: '#99c8dc'
  }
];

const Programs = () => {
  const [currentBlockOpen, setCurrentBlockOpen] = useState<number | null>(null);

  const switchHandler = useCallback(
    (num: number) => () => {
      setCurrentBlockOpen(num === currentBlockOpen ? null : num);
    },
    [currentBlockOpen]
  );

  return (
    <ProgramsContainer>
      {/* <TopGreyLayer>
        <Image
         fill
         style={{top: -200, zIndex: 1}}
          src='/images/layer6.svg'
          alt='blue layer small'
        />
      </TopGreyLayer> */}
      <Box
        sx={{
          maxWidth: 1440,
          margin: '0 auto',
          zIndex: 20,
          px: { xs: 1, sm: 8 },
          pt: { xs: 2, sm: 4 },
          pb: { xs: 2, sm: 4 }
        }}
      >
        <Typography
          py={6}
          sx={{ width: '100%' }}
          textAlign='center'
          fontWeight='700'
          color='primary.black'
          variant='h1'
        >
          ПРОГРАММА МОДУЛЕЙ
        </Typography>
        <Grid container justifyContent='space-around' mb={4}>
          {courses.map((course, idx) => (
            <Grid item sx={boxShadow} key={course.title}>
              <Box
                sx={{
                  width: 400,
                  height: 400,
                  background: course.backgroundColor,
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Typography color='#fff' variant='h1' fontSize={148}>
                  {idx + 1}
                </Typography>
              </Box>
              <Box
                sx={{
                  minHeight: 100,
                  textAlign: 'center',
                  background: '#fff',
                  width: 400
                }}
              >
                <Typography
                  p={2}
                  variant='h3'
                  color='#000'
                  sx={{ textTransform: 'uppercase' }}
                >
                  {course.title}
                </Typography>
                <Typography p={1} variant='h5' sx={{}}>
                  {course.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid container my={7}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              padding: 2,
              display: 'flex',
              alignItems: 'center',
              textAlign: { xs: 'center', md: 'end' },
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <Typography
              fontWeight='700'
              color='primary.black'
              variant='h1'
              fontSize={56}
              sx={{ width: '100%', pb: 1 }}
            >
              ТАРИФНЫЙ
            </Typography>
            <Typography
              fontWeight='700'
              color='primary.black'
              variant='h1'
              fontSize={56}
              sx={{ width: '100%', pt: 1 }}
            >
              ПЛАН
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} p={2}>
            {plans.map((plan, idx) => (
              <CustomAccordion
                switchHandler={switchHandler(idx)}
                checked={currentBlockOpen === idx}
                key={plan.title}
                {...plan}
              />
            ))}
          </Grid>
        </Grid>

        <Grid container my={3}>
          <Grid
            item
            xs={12}
            md={6}
            alignItems='center'
            sx={{
              textAlign: 'end'
            }}
          >
            <ContactButtons background='#524a49'>
              СВЯЗАТЬСЯ С МЕНЕДЖЕРОМ
            </ContactButtons>
            <ContactButtons background='#ad733a'>
              ЗАПОЛНИИТЬ ФОРМУ
            </ContactButtons>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: 'center',
              alignSelf: 'center',
              pl: 2
            }}
          >
            <Typography variant='h1' py={2}>
              КОНТАКТЫ
            </Typography>
            <Typography variant='h2'>{phoneNumber}</Typography>
          </Grid>
        </Grid>
      </Box>
    </ProgramsContainer>
  );
};

export default Programs;

//
//
