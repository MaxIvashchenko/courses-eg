import React, { useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import { getSession } from 'next-auth/react';
import {
  Box,
  FormControlLabel,
  Grid,
  Stack,
  Switch,
  Typography
} from '@mui/material';
import { Prisma } from '@prisma/client';
import { Layout } from '@src/blocks';
import { IconComponent, Loader, ProgramsCheckBoxList } from '@src/components';
import { paths } from '@src/constants';
import { APP_ADDITIONAL_BLOCKS, APP_COURSES } from '@src/content';
import { IUserDetails } from '@src/types';
import axios from 'axios';
import _isEmpty from 'lodash/isEmpty';

import prisma from '../../lib/prismadb';

interface UserInfoPage {
  user: IUserDetails;
}

const UserInfoPage = ({ user }: UserInfoPage) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSwitcher, setShowSwitcher] = useState<boolean>(false);

  const switchHandler = () => setShowSwitcher((prev) => !prev);

  const submitHandler = async (data: string[]) => {
    const updateUser = { ...user, available_courses: data };

    try {
      setIsLoading(true);
      await axios.post('/api/user/update', updateUser);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout.PageContainer sx={{ minHeight: '100%' }}>
      {isLoading && <Loader fill='#fff' isFullPage />}
      <Grid
        container
        sx={{
          marginTop: '60px',
          justifyContent: { xs: 'center', md: 'flex-start' },
          alignItems: 'center'
        }}
      >
        <Grid item xs={12} sm={4} md={3}>
          <Box
            sx={{
              mb: { xs: 2, md: 0 },
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            {user.image ? (
              <Image
                style={{ borderRadius: '50%' }}
                src={user.image}
                width={150}
                height={150}
                alt='avatar'
              />
            ) : (
              <IconComponent name='user' width={140} height={140} />
            )}
          </Box>
        </Grid>

        <Grid item xs={12} sm={8} md={9}>
          <Box
            sx={{
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            <Typography variant='h1' py={1}>
              {user.name}
            </Typography>
            <Typography variant='h3' py={1}>
              {user.email}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          marginTop: 2,
          justifyContent: { xs: 'center', md: 'flex-start' }
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography variant='h4' py={1}>
            Доступные курсы:
          </Typography>
          {_isEmpty(user.available_courses) ? (
            <Typography>Доступных курсов нет для этого клиента</Typography>
          ) : (
            user.available_courses.map(
              (item) =>
                APP_COURSES[item] && (
                  <Stack
                    key={APP_COURSES[item].id}
                    direction='row'
                    alignItems='center'
                    py={1}
                  >
                    <IconComponent name={APP_COURSES[item].icon} />
                    <Typography sx={{ ml: 2 }}>
                      {APP_COURSES[item].title}
                    </Typography>
                  </Stack>
                )
            )
          )}

          <Typography variant='h4' mt={1} py={1}>
            Дополнительные блоки:
          </Typography>
          {_isEmpty(user.available_courses) ? (
            <Typography>Доступных блоков нет для этого клиента</Typography>
          ) : (
            user.available_courses.map(
              (item) =>
                APP_ADDITIONAL_BLOCKS[item] && (
                  <Stack
                    key={APP_ADDITIONAL_BLOCKS[item].id}
                    direction='row'
                    alignItems='center'
                    py={1}
                  >
                    <IconComponent name={APP_ADDITIONAL_BLOCKS[item].icon} />
                    <Typography sx={{ ml: 2 }}>
                      {APP_ADDITIONAL_BLOCKS[item].title}
                    </Typography>
                  </Stack>
                )
            )
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControlLabel
            onChange={switchHandler}
            value={showSwitcher}
            sx={{ m: 0 }}
            control={<Switch color='primary' />}
            label={
              <Typography variant='h4' py={1}>
                Открыть курсы или блоки для клиента
              </Typography>
            }
            labelPlacement='start'
          />
          {showSwitcher && (
            <ProgramsCheckBoxList
              userProgram={user.available_courses}
              submitHandler={submitHandler}
            />
          )}
        </Grid>
      </Grid>
    </Layout.PageContainer>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const session = await getSession(context);
  const isAdmin = session?.user?.role === 'ADMIN';

  if (!session || !isAdmin) {
    return { redirect: { destination: paths.main } };
  }

  const user: Prisma.UserUncheckedCreateInput | null =
    await prisma.user.findUnique({ where: { id: query.id as string } });

  return {
    props: {
      user
    }
  };
}

export default UserInfoPage;
