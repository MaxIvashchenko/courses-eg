import { Grid, Typography } from '@mui/material';
import { ClickableCard, EmptyPageMessage } from '@src/components';
import { useRouter } from 'next/router';
import _isEmpty from 'lodash/isEmpty';
import courses from '@src/mocks/courses';

import { Layout } from '@src/blocks';
import { paths } from '@src/constants';
import { useCallback } from 'react';

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

  return _isEmpty(courses) ? (
    <EmptyPageMessage message='На данный момент ни один курс не доступен' />
  ) : (
    <Layout.PageContainer>
      <Grid container justifyContent='center'>
        <Grid item xs={12} md={8} lg={7} sx={{ mb: { xs: 2, md: 4 } }}>
          <Typography variant='h1'>{`Доступные курсы (${courses.length}):`}</Typography>
        </Grid>
        {courses.map((course) => (
          <Grid key={course.id} item xs={12} md={8} lg={7} mb={2}>
            <ClickableCard clickHandler={clickHandler} {...course} />
          </Grid>
        ))}
      </Grid>
    </Layout.PageContainer>
  );
};

export default Profile;
