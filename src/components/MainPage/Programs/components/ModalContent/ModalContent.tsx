import React, { ForwardedRef } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IconComponent } from '@src/components/Common';
import { coursesModal } from '@src/content';
import _isArray from 'lodash/isArray';

const ModalWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  maxWidth: '600px',
  width: '60%',
  height: '60%',
  margin: '10% auto 10%',
  background: '#fff',
  backgroundImage: 'url(images/modalLayer.svg)',
  backgroundPosition: 'bottom',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  padding: 32,
  borderRadius: 10,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  
  [theme.breakpoints.down('md')]: {
    height: '85%',
    width: '95%',
    padding: 24
  }
}));

interface ModalContent {
  num?: number;
  forwardedRef?: ForwardedRef<unknown>;
  closeModal: () => void;
}

const ModalContent = ({ num = 1, closeModal }: ModalContent) => {
  const course = coursesModal[num - 1];

  return (
    <ModalWrapper>
      <IconButton
        onClick={closeModal}
        sx={{
          position: 'absolute',
          top: 4,
          right: 4
        }}
      >
        <IconComponent name='close' width={18} height={18} />
      </IconButton>
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
      <Box
        sx={{
          overflow: 'scroll',

          flex: 1
        }}
      >
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
            {subBlocks.map((text, idx) =>
              _isArray(text) ? (
                <ul key={`subBlocks=${idx}`} style={{ margin: '0 12px' }}>
                  {text.map((subText) => (
                    <li key={subText}>
                      <Typography variant='h5'>{subText}</Typography>
                    </li>
                  ))}
                </ul>
              ) : (
                <Typography key={text} variant='h5'>
                  {text}
                </Typography>
              )
            )}
          </Box>
        ))}
      </Box>
    </ModalWrapper>
  );
};

export default React.forwardRef((props: ModalContent, ref) => (
  <ModalContent {...props} forwardedRef={ref} />
));
