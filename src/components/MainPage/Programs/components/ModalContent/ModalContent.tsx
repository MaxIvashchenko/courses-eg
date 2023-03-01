import React, { ForwardedRef } from 'react';
import { Box, Typography } from '@mui/material';
import { coursesModal } from '@src/content';
import _isArray from 'lodash/isArray';

interface ModalContent {
  num?: number;
  forwardedRef?: ForwardedRef<unknown>;
}

const ModalContent = ({ num = 1 }: ModalContent) => {
  const course = coursesModal[num - 1];

  return (
    <>
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
    </>
  );
};

export default React.forwardRef((props: ModalContent, ref) => (
  <ModalContent {...props} forwardedRef={ref} />
));
