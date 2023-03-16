import React from 'react';
import { Link } from 'react-scroll';
import { Box, IconButton } from '@mui/material';
import { useScroll } from '@src/hooks';

import { IconComponent } from '../IconComponent';

const ToTopButton = () => {
  const isScrolled = useScroll();

  return isScrolled ? (
    <Link
      style={{ zIndex: 90 }}
      activeClass='active'
      to='top'
      spy={true}
      smooth={true}
      offset={-88}
      duration={500}
    >
      <IconButton
        sx={{
          position: 'fixed',
          bottom: { xs: 90, sm: 48 },
          right: { xs: 20, md: 48 },
          transform: 'scale(1, -1)',
          backgroundColor: '#ad733a',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          zIndex: 90,

          '&:hover': {
            backgroundColor: '#ad733ac4'
          }
        }}
      >
        <IconComponent width={32} height={32} fill='#fff' name='downArrow' />
      </IconButton>
    </Link>
  ) : (
    <Box />
  );
};

export default ToTopButton;
