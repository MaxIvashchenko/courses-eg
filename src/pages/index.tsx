import React from 'react';
import { Box } from '@mui/material';

// import { styled } from '@mui/material/styles';
import { AboutUs, CourseTarget, IntroBlock, SpeakersSlider } from 'components';

// const Container = styled(Box)(({}) => ({}));

const Home = () => (
  <>
    <IntroBlock />
    <CourseTarget />
    <AboutUs />
    <Box sx={{ background: '#fff' }}>
      <SpeakersSlider />
    </Box>
  </>
);

export default Home;
