import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import { Grid } from '@mui/material';
import { Prisma } from '@prisma/client';
import { Layout } from '@src/blocks';
import { paths } from '@src/constants';
import { IUserDetails } from '@src/types';
import _isEmpty from 'lodash/isEmpty';

import { CourseStageView, EmptyPageMessage } from 'components';
import prisma from '../../lib/prismadb';

interface ProfileProps {
  user: IUserDetails;
}

const Profile = ({ user }: ProfileProps) => {
  const router = useRouter();
  const { available_courses } = user;

  const setProgram = (id: string) =>
    router.push(`${router.pathname}${paths.program}/${id}`);

  return (
    <Layout.PageContainer sx={{ minHeight: '100%' }}>
      <Grid
        container
        sx={{
          px: 1,
          marginTop: '80px',
          justifyContent: { xs: 'center', lg: 'space-around' }
        }}
      >
        {_isEmpty(available_courses) ? (
          <EmptyPageMessage message='На данный момент ни один курс не доступен' />
        ) : (
          <CourseStageView
            courses={available_courses}
            clickHandler={setProgram}
          />
        )}
      </Grid>
    </Layout.PageContainer>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (!session) {
    return { redirect: { destination: paths.main } };
  }

  const user: Prisma.UserUncheckedCreateInput | null =
    await prisma.user.findUnique({ where: { id: session?.user?.id } });

  return {
    props: {
      user
    }
  };
}

export default Profile;
