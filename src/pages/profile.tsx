import { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth';
import { Grid } from '@mui/material';
import { Layout } from '@src/blocks';
import { EmptyPageMessage } from '@src/components';
import { paths } from '@src/constants';
import _isEmpty from 'lodash/isEmpty';

import authOptions from './api/auth/[...nextauth]';

const Profile = () =>
  _isEmpty([]) ? (
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
          {/* <Typography variant='h1'>{`Доступные курсы (${courses.length}):`}</Typography> */}
        </Grid>
      </Grid>
    </Layout.PageContainer>
  );

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
