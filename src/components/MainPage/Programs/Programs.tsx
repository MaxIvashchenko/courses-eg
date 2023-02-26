import { useCallback, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconComponent } from '@src/components/Common';

import { Contacts, CustomAccordion, Layers } from './components';

const ProgramsContainer = styled(Box)(() => ({
  backgroundImage: 'url(images/layer7.svg)',
  backgroundColor: '#fff',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'bottom',
  width: '100%',
  position: 'relative',
  overflow: 'hidden'
  // zIndex: 20
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  marginRight: 24,

  [theme.breakpoints.down('sm')]: {
    marginRight: 16,

    '& svg': {
      width: 48,
      height: 48
    }
  }
}));

const CourseButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  '&:hover': {
    opacity: 0.9,
    '& svg path': {
      fill: 'black'
    }
  },

  [theme.breakpoints.down('sm')]: {
    padding: 8,
    justifyContent: 'center'
  }
}));

const CoursesGridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'start',
  flexDirection: 'column',

  [theme.breakpoints.down('sm')]: {
    justifyContent: 'center'
  }
}));

interface ICourse {
  icon: string;
  title: string;
  subTitle: string;
}

interface IPlan {
  title: string;
  descriptions: string[];
  backgroundColor: string;
}

const courses: ICourse[] = [
  {
    icon: 'shuttle',
    title: 'Для начинающего бизнеса',
    subTitle: 'Открой свой бизнес с нуля'
  },
  {
    icon: 'suitcase',
    title: 'Для действующего бизнеса',
    subTitle: 'Развивай и масштабируй'
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
    <ProgramsContainer id='courses'>
      <Layers />
      <Box
        sx={{
          // position: 'sticky',
          maxWidth: 1680,
          margin: '0 auto',
          zIndex: 20,
          px: { xs: 1, sm: 8 },
          pt: { xs: 2, sm: 4 },
          pb: { xs: 2, sm: 4 }
        }}
      >
        <Grid container justifyContent='start' mb={4}>
          <CoursesGridItem item xs={12} md={8}>
            {courses.map(({ icon, title, subTitle }) => (
              <CourseButton key={title} variant='text'>
                <IconWrapper>
                  <IconComponent
                    fill='#a25919'
                    name={icon}
                    width={80}
                    height={80}
                  />
                </IconWrapper>
                <Box textAlign='left'>
                  <Typography variant='h1' py={1}>
                    {title}
                  </Typography>
                  <Typography variant='h3' py={1}>
                    {subTitle}
                  </Typography>
                </Box>
              </CourseButton>
            ))}
          </CoursesGridItem>
        </Grid>

        <Grid container my={7}>
          <Grid item xs={12} justifyContent='center'>
            <Typography
              textAlign='center'
              fontWeight='700'
              color='primary.black'
              variant='h1'
              fontSize={56}
              sx={{ position: 'sticky' }}
            >
              ТАРИФЫ
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2} md={3} lg={4} />
          <Grid item xs={12} sm={8} md={6} lg={4} p={2}>
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

        <Contacts />
      </Box>
    </ProgramsContainer>
  );
};

export default Programs;
