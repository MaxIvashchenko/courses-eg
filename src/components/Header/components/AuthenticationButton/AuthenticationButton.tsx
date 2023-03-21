import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Box, Button, IconButton, Menu } from '@mui/material';
import { paths } from '@src/constants';
import { useLoaderContext } from '@src/hooks';

import { IconComponent } from 'components';

const AuthenticationButton = () => {
  const router = useRouter();
  const { data, status } = useSession();
  const { setLoading } = useLoaderContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const signInHandler = useCallback(() => {
    setLoading(true);
    signIn();
  }, [setLoading]);
  const signOutHandler = () => signOut();
  const toAdmminPanel = useCallback(() => {
    setLoading(true);
    router.push(paths.admin);
  }, [router, setLoading]);

  const toProfile = () => router.push(paths.profile);

  const renderAdmminButton = useCallback(
    () => (
      <IconButton onClick={toAdmminPanel} sx={{ mr: { xs: 0, md: 2 } }}>
        <IconComponent name='group' width={40} height={40} />
      </IconButton>
    ),
    [toAdmminPanel]
  );

  const renderAuthBtn = useCallback(() => {
    if (status === 'loading') return null;

    if (status === 'authenticated') {
      const isAdmin = data?.user?.role === 'ADMIN';

      return (
        <Box>
          {isAdmin && renderAdmminButton()}
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
        </Box>
      );
    }

    return (
      <Button onClick={signInHandler} size='small'>
        Вход
      </Button>
    );
  }, [
    status,
    data?.user?.image,
    data?.user?.role,
    renderAdmminButton,
    signInHandler
  ]);

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
          <Button variant='text' onClick={toProfile}>
            Мои курсы
          </Button>
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
