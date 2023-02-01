import { GetServerSideProps } from 'next';
import { Grid, Typography } from '@mui/material';
import { ClickableCard, EmptyPageMessage } from 'components';
import { useRouter } from 'next/router';
import _isEmpty from 'lodash/isEmpty';
import { courses, modulesList } from '@src/mocks';

import { Layout } from '@src/blocks';
import { paths } from '@src/constants';
import { useCallback } from 'react';
import { ICourses } from '@src/types';

interface ModulesProps {
  currentCourse?: ICourses;
}

const Modules = ({ currentCourse }: ModulesProps) => {
  const router = useRouter();

  const clickHandler = useCallback(
    (id: string) => () =>
      router.push({
        pathname: paths.module,
        query: { id }
      }),
    [router]
  );

  if (_isEmpty(currentCourse)) {
    return <EmptyPageMessage message='Данного курса не существует' />;
  }

  return _isEmpty(modulesList) ? (
    <EmptyPageMessage message='На данный момент доступных модулей нет' />
  ) : (
    <Layout.PageContainer>
      <Grid
        container
        sx={{ justifyContent: { xs: 'center', lg: 'space-around' } }}
      >
        <Grid item xs={12} md={8} lg={12} sx={{ mb: { xs: 2, md: 4 } }}>
          <Typography variant='h1' sx={{ mb: { xs: 1, md: 2 } }}>
            {currentCourse.title}
          </Typography>
          <Typography variant='h3'>{`Доступно ${modulesList.length} из ${modulesList.length}`}</Typography>
        </Grid>
        {modulesList.map((module, idx) => (
          <Grid key={module.id} item xs={12} md={8} lg={5} mb={2}>
            <ClickableCard
              clickHandler={clickHandler}
              {...module}
              subTitle={`Модуль ${idx + 1}`}
            />
          </Grid>
        ))}
      </Grid>
    </Layout.PageContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

  const course = courses.find((course) => course.id === query.id);

  return {
    props: { programId: query.id, currentCourse: course || {} }
  };
};

export default Modules;
