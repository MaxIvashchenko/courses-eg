import React, { useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { Grid, Stack, TextField, Typography } from '@mui/material';
import { Prisma } from '@prisma/client';
import { Layout } from '@src/blocks';
import { UsersTable } from '@src/components';
import { paths } from '@src/constants';
import { IUserDetails } from '@src/types';
import _get from 'lodash/get';

import prisma from '../../lib/prismadb';

interface AdminProps {
  users: IUserDetails[];
}

const Admin = ({ users }: AdminProps) => {
  const [searchedValue, setSearchedValue] = useState<string>('');

  const filterByInput = (value: IUserDetails) => {
    const name = _get(value, 'name', '');
    const email = _get(value, 'email', '');

    return (
      name.toLowerCase().includes(searchedValue.toLowerCase()) ||
      email.toLowerCase().includes(searchedValue.toLowerCase())
    );
  };

  const filteredData = [...users].filter(filterByInput);

  return (
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
            <Typography variant='h1'>
              Зарегистрированные пользователи
            </Typography>
            <Typography variant='h1' px={2}>
              {filteredData.length}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3} sx={{ mb: { xs: 2, md: 4 } }}>
          <TextField
            onChange={(e) => setSearchedValue(e.target.value)}
            id='name-filter'
            label='Поиск пользователя'
            variant='outlined'
            fullWidth
          />
        </Grid>

        <UsersTable list={filteredData} />
      </Grid>
    </Layout.PageContainer>
  );
};

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
