import React, { ForwardedRef } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { IconComponent } from '@src/components/Common';
import { APP_COURSES } from '@src/content';
import _isEmpty from 'lodash/isEmpty';

interface ModalContent {
  courseId: string;
  forwardedRef?: ForwardedRef<unknown>;
}

const ModalContent = ({ courseId }: ModalContent) => {
  const course = APP_COURSES[courseId];

  const renderName = (type: string, idx: number, name: string) =>
    type === 'lesson' ? `Урок ${idx + 1} - ${name}` : name;

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
        {Object.values(course.blocks).map(({ title, lessons }) => (
          <Box
            key={title}
            sx={{
              pb: { xs: 1, md: 2 }
            }}
          >
            <Typography variant='h3' sx={{ mb: 1 }}>
              {title}
            </Typography>
            {Object.values(lessons).map((lesson, idx) => (
              <Box key={lesson.id} py={0.5}>
                <Stack direction='row'>
                  <IconComponent name={lesson.type} />
                  <Typography ml={1} variant='h5'>
                    {renderName(lesson.type, idx, lesson.name)}
                  </Typography>
                </Stack>
                <ul style={{ margin: '0 12px' }}>
                  {!_isEmpty(lesson.subparagraphs) &&
                    (lesson.subparagraphs || []).map((subText) => (
                      <li key={subText}>
                        <Typography variant='h5'>{subText}</Typography>
                      </li>
                    ))}
                </ul>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default React.forwardRef((props: ModalContent, ref) => (
  <ModalContent {...props} forwardedRef={ref} />
));
