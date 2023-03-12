import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Box, Button, IconButton, Menu } from '@mui/material';

import { IconComponent } from 'components';

const AuthenticationButton = () => {
  const { data, status } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const signInHandler = () => signIn();
  const signOutHandler = () => signOut();

  const renderAuthBtn = useCallback(() => {
    if (status === 'loading') return null;

    if (status === 'authenticated') {
      return (
        <IconButton onClick={handleClick}>
          {data?.user?.image ? (
            <Image
              src={data.user.image}
              width={38}
              height={38}
              alt='avatar'
              style={{ borderRadius: '50%', border: '3px solid #fff' }}
            />
          ) : (
            <IconComponent name='user' width={30} height={30} />
          )}
        </IconButton>
      );
    }

    return (
      <Button onClick={signInHandler} size='small'>
        Вход
      </Button>
    );
  }, [status, data?.user?.image]);

  return (
    <>
      {renderAuthBtn()}
      <Menu
        id='user-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Box textAlign='center'>
          <Button variant='text'>Мои курсы</Button>
        </Box>
        <Box textAlign='center'>
          <Button onClick={signOutHandler} variant='text'>
            Выход
          </Button>
        </Box>
      </Menu>
    </>
  );
};

export default AuthenticationButton;
