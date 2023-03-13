import { useCallback } from 'react';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { getServerSession } from 'next-auth';
import { Grid, Typography } from '@mui/material';
import { Layout } from '@src/blocks';
import { ClickableCard, EmptyPageMessage } from '@src/components';
import { paths } from '@src/constants';
import _isEmpty from 'lodash/isEmpty';
import { courses } from 'src/content';

import authOptions from './api/auth/[...nextauth]';

const Profile = () => {
  const router = useRouter();

  const clickHandler = useCallback(
    (id: string) => () =>
      router.push({
        pathname: paths.modules,
        query: { id }
      }),
    [router]
  );

  return _isEmpty([]) ? (
    <EmptyPageMessage message='На данный момент ни один курс не доступен' />
  ) : (
    <Layout.PageContainer sx={{ minHeight: '100%' }}>
      <Grid
        container
        sx={{
          marginTop: '100px',
          justifyContent: { xs: 'center', lg: 'space-around' }
        }}
      >
        <Grid item xs={12} md={8} lg={11} sx={{ mb: { xs: 2, md: 4 } }}>
          <Typography variant='h1'>{`Доступные курсы (${courses.length}):`}</Typography>
        </Grid>
        {courses.map((course) => (
          <Grid key={course.id} item xs={12} md={8} lg={5} mb={2}>
            <ClickableCard clickHandler={clickHandler} {...course} />
          </Grid>
        ))}
      </Grid>
    </Layout.PageContainer>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return { redirect: { destination: paths.main } };
  }

  return {
    props: {}
  };
}

export default Profile;
