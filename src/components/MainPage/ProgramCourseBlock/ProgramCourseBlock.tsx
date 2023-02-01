import { useState } from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { programCourse } from '@src/constants';

import { MainPage } from 'blocks';
import { IconComponent } from 'components';

const { PaperButton, Line, List } = MainPage;

const ProgramCourseBlock = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const setActive = (idx: number) => () => setActiveIdx(idx);

  const currentModule = programCourse[activeIdx];

  return (
    <Grid
      container
      sx={{
        background: 'white',
        p: { xs: 2, md: 4 }
      }}
    >
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%',
            pl: { xs: 0, md: 4 },
            pr: { xs: 0, md: 2 },
            position: 'relative'
          }}
        >
          <Stack
            direction='column'
            sx={{ position: 'absolute', left: 0, top: 0 }}
          >
            <Typography
              color='primary.main'
              sx={{
                writingMode: 'vertical-rl',
                textOrientation: 'upright',
                mb: 2
              }}
              variant='h3'
            >
              {activeIdx + 1}
            </Typography>
            <Line />
          </Stack>

          <Typography
            textAlign='left'
            variant='h3'
            color='secondary.main'
            px={1}
            py={1}
            mb={2}
          >
            {currentModule.name}
          </Typography>
          <Typography textAlign='left' variant='body1' px={1} py={1}>
            {currentModule.description}
          </Typography>

          <List>
            {currentModule.list.map((row) => (
              <li key={row}>
                <Typography variant='body1'>{row}</Typography>
              </li>
            ))}
          </List>

          <Typography
            textAlign='right'
            variant='h2'
            px={2}
            py={1}
          >{`${currentModule.price} $`}</Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Grid container justifyContent='space-around'>
          {programCourse.map((item, index) => (
            <Grid item key={item.name} xs={5} mb={4}>
              <PaperButton
                onClick={setActive(index)}
                variant='text'
                className={activeIdx === index ? 'active' : ''}
              >
                <Box className='iconWrapper'>
                  <IconComponent width={40} height={40} name={item.iconName} />
                </Box>
                <Typography textAlign='center' variant='h5'>
                  {item.name}
                </Typography>
              </PaperButton>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProgramCourseBlock;
