import React, { useRef } from 'react';
import Slider from 'react-slick';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { imagesUrls, speakersList } from '@src/constants';
import { getSpeakerImageById } from '@src/utils';

import { IconComponent } from 'components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  arrows: false,
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
      breakpoint: 680,
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

const IconButtonWrapper = styled(IconButton)<{ position: string }>(
  ({ theme, position }) => ({
    position: 'absolute',
    height: '100%',
    [position]: -50,
    '& svg': { transform: position === 'left' && 'rotate(180deg)' },
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.0)',
      '& svg path': {
        fill: 'rgb(58,81,53,0.7)'
      }
    },

    [theme.breakpoints.down('sm')]: {
      [position]: -35
    }
  })
);

const SpeakersSlider = () => {
  const slider = useRef<Slider>(null);
  const goNext = () => slider?.current?.slickNext();

  const goBack = () => slider?.current?.slickPrev();
  const sliderQuantity = speakersList.length > 4 ? 3 : speakersList.length;

  return (
    <Box
      sx={{
        background: '#fff',
        backgroundImage: `url(${imagesUrls.layer5})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        position: 'relative',
        backgroundRepeat: 'no-repeat',
        px: { xs: 4, sm: 8 },
        pb: { xs: 2, sm: 4 }
      }}
    >
      <Box
        py={2}
        sx={{
          alignItems: 'center',
          maxWidth: 1680,
          margin: '0 auto'
        }}
      >
        <Typography
          id='speakers'
          sx={{
            my: { xs: 1, md: 6 },
            py: { xs: 1, md: 2 }
          }}
          textAlign='center'
          fontWeight='700'
          // color='common.white'
          color='common.black'
          variant='h1'
        >
          НАСТАВНИКИ КУРСА
        </Typography>
        <Box
          sx={{
            mt: 4,
            position: 'relative'
          }}
        >
          <IconButtonWrapper position='right' onClick={goNext}>
            <IconComponent width={30} height={90} name='triangle' />
          </IconButtonWrapper>
          <IconButtonWrapper onClick={goBack} position='left'>
            <IconComponent isMirror width={30} height={90} name='triangle' />
          </IconButtonWrapper>
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
                <Card
                  sx={{
                    backgroundColor: '#3A4F34',
                    maxWidth: 345,
                    boxShadow: '0px 0px 9px 7px rgb(0 0 0 / 20%)',
                    margin: '0 auto',
                    textAlign: 'center'
                  }}
                >
                  <CardMedia
                    component='img'
                    alt={item.id}
                    height='280'
                    image={getSpeakerImageById(item.id)}
                    sx={{ objectPosition: 'top' }}
                  />
                  <CardContent
                    sx={{
                      color: '#fff',
                      minHeight: 88,
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'column'
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        minHeight: 60,
                        alignItems: 'center',
                        mb: { xs: 1, md: 2 }
                      }}
                    >
                      <Typography
                        gutterBottom
                        variant='h3'
                        color='#fff'
                        sx={{
                          textTransform: 'uppercase',
                          lineHeight: 1.25
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Box>

                    {item.description.map((text, idx) => (
                      <React.Fragment key={text}>
                        {idx !== 0 && (
                          <IconComponent
                            name='circle'
                            fill='#fff'
                            width={8}
                            height={8}
                          />
                        )}
                        <Typography my={1} variant='body2' color='common.white'>
                          {text}
                        </Typography>
                      </React.Fragment>
                    ))}
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default SpeakersSlider;
