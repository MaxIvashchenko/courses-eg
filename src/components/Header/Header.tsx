import React, { useState } from 'react';
import { Link } from 'react-scroll/modules';
import { Box, Button, IconButton, Menu } from '@mui/material';
import { useMobile, useScroll } from '@src/hooks';

import { Header as HeadersBlocks } from 'blocks';
import { IconComponent } from '../Common';

const { HeaderWrapper, PaddingWrapper, IconWrapper } = HeadersBlocks;

const headerList: { link: string; name: string }[] = [
  {
    link: 'speakers',
    name: 'Наставники'
  },
  {
    link: 'courses',
    name: 'Курсы'
  }
];

const Header = () => {
  const isScrolled = useScroll();
  const isMobile = useMobile();
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <HeaderWrapper scrolled={Number(isScrolled)} component='header'>
      <IconWrapper>
        <IconComponent fill='#404040' name='logo' width={100} height={100} />
      </IconWrapper>
      <PaddingWrapper>
        {isMobile ? (
          <>
            <IconButton sx={{ p: 2 }} onClick={handleClick}>
              <IconComponent name='menu' />
            </IconButton>
            <Menu
              id='basic-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button'
              }}
            >
              {headerList.map(({ link, name }) => (
                <Box
                  key={link}
                  sx={{
                    marginRight: { xs: 1, md: 2 },
                    textTransform: 'uppercase',
                    cursor: 'pointer'
                  }}
                >
                  <Button variant='text'>
                    <Link
                      onClick={handleClose}
                      activeClass='active'
                      to={link}
                      spy={true}
                      smooth={true}
                      offset={-88}
                      duration={500}
                    >
                      {name}
                    </Link>
                  </Button>
                </Box>
              ))}
            </Menu>
          </>
        ) : (
          <>
            <Box sx={{ display: 'flex' }}>
              {headerList.map(({ link, name }) => (
                <Box
                  key={link}
                  sx={{
                    marginRight: { xs: 1, md: 2 },
                    textTransform: 'uppercase',
                    cursor: 'pointer'
                  }}
                >
                  <Button variant='text'>
                    <Link
                      activeClass='active'
                      to={link}
                      spy={true}
                      smooth={true}
                      offset={-88}
                      duration={500}
                    >
                      {name}
                    </Link>
                  </Button>
                </Box>
              ))}
            </Box>

            <Box>
              <Button variant='text'>Вход</Button>
            </Box>
          </>
        )}
      </PaddingWrapper>
    </HeaderWrapper>
  );
};

export default Header;
