import React from 'react';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { Grid, Stack, Typography } from '@mui/material';
import { Prisma } from '@prisma/client';
import { Layout } from '@src/blocks';
import { UsersTable } from '@src/components';
import { paths } from '@src/constants';
import { IUserDetails } from '@src/types';

import prisma from '../../lib/prismadb';

interface AdminProps {
  users: IUserDetails[];
}

const Admin = ({ users }: AdminProps) => (
  <Layout.PageContainer sx={{ minHeight: '100%' }}>
    <Grid
      container
      sx={{
        marginTop: '60px',
        px: 1,
        justifyContent: { xs: 'center', lg: 'space-around' }
      }}
    >
      <Grid item xs={12} sx={{ mb: { xs: 2, md: 4 } }}>
        <Stack justifyContent='space-between' flexDirection='row'>
          <Typography variant='h1'>Зарегистрированные пользователи</Typography>
          <Typography variant='h1' px={2}>
            {users.length}
          </Typography>
        </Stack>
      </Grid>

      <UsersTable list={users} />
    </Grid>
  </Layout.PageContainer>
);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  const isAdmin = session?.user?.role === 'ADMIN';

  if (!session || !isAdmin) {
    return { redirect: { destination: paths.main } };
  }

  let users: Prisma.UserUncheckedCreateInput[] = [];
  try {
    const data = await prisma.user.findMany();
    const serializableProps = JSON.parse(JSON.stringify(data));
    users = serializableProps;
  } catch (error) {
    console.error("Can't reach database server");
  }

  return {
    props: { users }
  };
}

export default Admin;
