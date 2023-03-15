import React, { ForwardedRef } from 'react';
import { Box, Typography } from '@mui/material';
import { EXIST_BUSINESS_COURSE, START_BUSINESS_COURSE } from '@src/content';
import _isArray from 'lodash/isArray';

interface ModalContent {
  num?: number;
  forwardedRef?: ForwardedRef<unknown>;
}

const content = [START_BUSINESS_COURSE, EXIST_BUSINESS_COURSE];

const ModalContent = ({ num = 1 }: ModalContent) => {
  const course = content[num - 1];

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
        sx={{
          pb: { xs: 1, md: 3 }
        }}
        variant='h2'
        textAlign='center'
        pb={1}
      >
        {course.subTitle}
      </Typography>
      <Box
        sx={{
          overflow: 'scroll',
          flex: 1
        }}
      >
        {Object.values(course.blocks).map(({ title, subBlocks }) => (
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
