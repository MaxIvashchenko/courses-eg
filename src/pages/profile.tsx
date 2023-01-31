import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import { IconComponent } from '@src/components';
import { useRouter } from 'next/router';
import _isEmpty from 'lodash/isEmpty';
import courses from '@src/mocks/courses';

import { Layout, Profile as ProfileBlock } from '@src/blocks';
import { paths } from '@src/constants';
import { useCallback } from 'react';

const { CenteredWrapper, CardActionArea, IconWrapper } = ProfileBlock;

const Profile = () => {
  const router = useRouter();

  const clickHandler = useCallback(
    (id: number) => () =>
      router.push({
        pathname: paths.program,
        query: { id }
      }),
    [router]
  );

  return _isEmpty(courses) ? (
    <CenteredWrapper>
      <Typography variant='h4' textAlign='center' sx={{ mb: 8 }}>
        На данный момент ни один курс не доступен
      </Typography>
    </CenteredWrapper>
  ) : (
    <Layout.PageContainer>
      <Grid container justifyContent='center'>
        <Grid item xs={12} md={8} lg={7} sx={{ mb: { xs: 2, md: 4 } }}>
          <Typography variant='h1'>{`Курсы (${courses.length}):`}</Typography>
        </Grid>
        {courses.map((course) => (
          <Grid key={course.id} item xs={12} md={8} lg={7} mb={2}>
            <Card
              sx={{
                boxShadow: '0 6px 20px rgb(0 0 0 / 10%)'
              }}
            >
              <CardActionArea onClick={clickHandler(course.id)}>
                <IconWrapper
                  sx={{
                    p: { xs: 2, md: 4 }
                  }}
                >
                  <IconComponent name={course.icon} />
                </IconWrapper>

                <Box
                  sx={{
                    p: { xs: 1, md: 3 },
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component='div' variant='h3'>
                      {course.title}
                    </Typography>
                  </CardContent>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout.PageContainer>
  );
};

export default Profile;
