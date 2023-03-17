import React, { useState } from 'react';
import { Link } from 'react-scroll/modules';
import { useRouter } from 'next/router';
import { Box, Button, IconButton as MuiIconButton, Menu } from '@mui/material';
import { paths } from '@src/constants';
import { useMobile, useScroll } from '@src/hooks';

import { Header as HeadersBlocks } from 'blocks';
import { IconComponent } from '../Common';
import { AuthenticationButton } from './components';

const { HeaderWrapper, PaddingWrapper, IconWrapper, IconButton } =
  HeadersBlocks;

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
  const router = useRouter();
  const isScrolled = useScroll();
  const isMobile = useMobile();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toMainPage = () => router.push(paths.main);

  const showMobileMenu = () => {
    if (router.route === paths.main) {
      return (
        <MuiIconButton sx={{ p: 2 }} onClick={handleClick}>
          <IconComponent name='menu' />
        </MuiIconButton>
      );
    }
  };

  const showMenu = () => {
    if (router.route === paths.main) {
      return headerList.map(({ link, name }) => (
        <Box
          key={link}
          sx={{
            marginRight: { xs: 1, md: 2 },
            textTransform: 'uppercase',
            cursor: 'pointer',
            textAlign: 'center'
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
      ));
    }
  };

  return (
    <HeaderWrapper scrolled={Number(isScrolled)} component='header'>
      <PaddingWrapper>
        {isMobile ? (
          <>
            <AuthenticationButton />
            {showMobileMenu()}
            <Menu
              id='links-menu'
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
                    cursor: 'pointer',
                    textAlign: 'center'
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
            <Box sx={{ display: 'flex' }}>{showMenu()}</Box>
            {/* <AccessToken /> */}
            <AuthenticationButton />
          </>
        )}
      </PaddingWrapper>
      <IconWrapper>
        <IconButton onClick={toMainPage}>
          <IconComponent fill='#404040' name='logo' width={100} height={100} />
        </IconButton>
      </IconWrapper>
    </HeaderWrapper>
  );
};

export default Header;
