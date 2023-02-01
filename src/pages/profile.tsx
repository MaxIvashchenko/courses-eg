import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Grid, Typography } from '@mui/material';
import { Layout } from '@src/blocks';
import { ClickableCard, EmptyPageMessage } from '@src/components';
import { paths } from '@src/constants';
import courses from '@src/content/courses';
import _isEmpty from 'lodash/isEmpty';

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
