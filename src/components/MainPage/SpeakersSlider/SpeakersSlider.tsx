import { useRef } from 'react';
import Slider from 'react-slick';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography
} from '@mui/material';

import { speakersList } from '@src/constants';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { IconComponent } from 'components';
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
};

const SpeakersSlider = () => {
  const slider = useRef<Slider>(null);
  const goNext = () => slider?.current?.slickNext();

  const goBack = () => slider?.current?.slickPrev();
  const sliderQuantity = speakersList.length > 4 ? 4 : speakersList.length;

  return (
    <>
      <Grid container justifyContent='space-between' alignItems='center'>
        <Grid item xs={12}>
          <Typography
            my={2}
            py={1}
            textAlign='center'
            color='primary.main'
            variant='h2'
          >
            Спикеры курса
          </Typography>
        </Grid>
        <Grid item xs={6} md={8} lg={9} sx={{ borderTop: '1px solid grey' }} />
        <Grid item>
          <IconButton
            onClick={goBack}
            sx={{ '& svg': { transform: 'rotate(180deg)' } }}
          >
            <IconComponent width={24} height={24} name='arrow' />
          </IconButton>
          <IconButton onClick={goNext}>
            <IconComponent width={24} height={24} name='arrow' />
          </IconButton>
        </Grid>
      </Grid>

      <Slider
        ref={slider}
        {...{
          ...settings,
          slidesToShow: sliderQuantity,
          slidesToScroll: sliderQuantity
        }}
      >
        {speakersList.map((item) => (
          <Box key={item.id} p={2}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component='img'
                alt='green iguana'
                height='280'
                image={item.photo}
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {item.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </>
  );
};

export default SpeakersSlider;
