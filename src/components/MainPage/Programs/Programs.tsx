import React, { ReactElement, useCallback, useState } from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconComponent, Modal } from '@src/components';
import { coursesModal } from '@src/content';

import { Contacts, CustomAccordion, Layers, ModalContent } from './components';

const ProgramsContainer = styled(Box)(() => ({
  backgroundImage: 'url(images/layer7.svg)',
  backgroundColor: '#fff',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'bottom',
  width: '100%',
  position: 'relative',
  overflow: 'hidden'
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
  margin: '8px 0',
  '&:hover': {
    // opacity: 0.9,
    background: '#ffffff4d',
    '& svg path': {
      fill: '#a358174d'
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

interface IPlan {
  title: string;
  descriptions: any[];
  backgroundColor: string;
  price: ReactElement;
}

const plans: IPlan[] = [
  {
    title: 'Start',
    descriptions: [
      'Один курс',
      '1 консультация с наставником',
      'Чат с обратной связью от всех наставников на 3 месяца',
      'Сообщество единомышленников'
    ],
    backgroundColor: '#a35817',
    price: (
      <Stack justifyContent='center' direction='row' px={2}>
        <Typography variant='h4' textAlign='center'>
          <span style={{ fontSize: 24, textDecoration: 'line-through' }}>
            750$
          </span>
        </Typography>
        <Typography variant='h4' ml={2} textAlign='center'>
          <span style={{ fontSize: 34, color: '#5e9b0d', padding: '14px 0' }}>
            {` 500$ `}
          </span>
        </Typography>
      </Stack>
    )
  },
  {
    title: 'Duet',
    descriptions: [
      'Два курса',
      '2 консультации с наставником',
      'Чат с обратной связью от всех наставников на 6 месяцев',
      'Сообщество единомышленников'
    ],
    backgroundColor: '#5b6b46',
    price: (
      <Stack justifyContent='center' direction='row' px={2}>
        <Typography variant='h4' textAlign='center'>
          <span style={{ fontSize: 24, textDecoration: 'line-through' }}>
            1250$
          </span>
        </Typography>
        <Typography variant='h4' ml={2} textAlign='center'>
          <span style={{ fontSize: 34, color: '#5e9b0d', padding: '14px 0' }}>
            {` 950$ `}
          </span>
        </Typography>
      </Stack>
    )
  },
  {
    title: 'Mentor',
    descriptions: [],
    backgroundColor: '#99c8dc',
    price: (
      <>
        <Typography variant='h4' textAlign='center'>
          Консультация наставника
        </Typography>
        <Typography variant='h4' textAlign='center'>
          <span style={{ fontSize: 28 }}>{` 1 час `}</span>
          <span style={{ fontSize: 28, color: '#5e9b0d', padding: '14px 0' }}>
            {` 50$ `}
          </span>
        </Typography>
        <Typography pt={1} variant='h4' textAlign='center'>
          Индивидуальное наставничество
        </Typography>
        <Typography variant='h4' textAlign='center'>
          <span style={{ fontSize: 28 }}>{` 30 часов `}</span>
          <span style={{ fontSize: 28, color: '#5e9b0d', padding: '14px 0' }}>
            {` 700$ `}
          </span>
        </Typography>
      </>
    )
  }
];

interface ProgramsProps {
  modalHandler: () => void;
}

const Programs = ({ modalHandler }: ProgramsProps) => {
  const [currentBlockOpen, setCurrentBlockOpen] = useState<number | null>(null);

  const [modalNum, setModalNum] = useState<number | null>(null);

  const switchHandler = useCallback(
    (num: number) => () => {
      setCurrentBlockOpen(num === currentBlockOpen ? null : num);
    },
    [currentBlockOpen]
  );

  const courseHandler = useCallback((num: number) => {
    setModalNum(num);
  }, []);

  const closeModal = () => setModalNum(null);

  return (
    <ProgramsContainer id='courses'>
      <Layers />
      <Box
        sx={{
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
            {coursesModal.map(({ icon, title, subTitle }, idx) => (
              <CourseButton
                onClick={() => courseHandler(idx + 1)}
                key={title}
                variant='text'
              >
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

        <Contacts modalHandler={modalHandler} />
      </Box>

      <Modal isOpen={Boolean(modalNum)} closeModal={closeModal}>
        <ModalContent num={modalNum || 1} />
      </Modal>
    </ProgramsContainer>
  );
};

export default Programs;
