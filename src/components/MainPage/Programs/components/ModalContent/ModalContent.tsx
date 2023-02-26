import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { coursesModal } from '@src/content';

const ModalWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  width: '80%',
  height: '60%',
  margin: '10% auto 10%',
  overflow: 'scroll',
  border: '32px solid #fff',

  [theme.breakpoints.down('md')]: {
    height: '85%'
  }
}));

interface ModalContent {
  num?: number;
}

const ModalContent = ({ num = 1 }: ModalContent) => {
  const course = coursesModal[num - 1];

  return (
    <ModalWrapper>
      <Typography
        variant='h1'
        textAlign='center'
        color='#a35817'
        sx={{
          pb: { xs: 1, md: 1 }
        }}
      >
        {course.title}
      </Typography>
      <Typography
        variant='h2'
        textAlign='center'
        sx={{
          pb: { xs: 1, md: 3 }
        }}
      >
        {course.subTitle}
      </Typography>
      {course.content.map(({ title, subBlocks }) => (
        <Box
          key={title}
          sx={{
            pb: { xs: 1, md: 2 }
          }}
        >
          <Typography variant='h3' sx={{ mb: 1 }}>
            {title}
          </Typography>
          {subBlocks.map((text) => (
            <Typography key={text} variant='h5'>
              {text}
            </Typography>
          ))}
        </Box>
      ))}
    </ModalWrapper>
  );
};

export default ModalContent;
