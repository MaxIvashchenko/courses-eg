import { useCallback } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Grid, Typography } from '@mui/material';
import { Layout } from '@src/blocks';
import { paths } from '@src/constants';
import { IModuleRow } from '@src/types';
import _isEmpty from 'lodash/isEmpty';
import { courses, gastroModulesList } from 'src/content';

import { ClickableCard, EmptyPageMessage } from 'components';

interface ModulesProps {
  modules: IModuleRow[];
  courseTitle: string;
}

const Modules = ({ modules, courseTitle }: ModulesProps) => {
  const router = useRouter();

  const clickHandler = useCallback(
    (id: string) => () =>
      router.push({
        pathname: paths.module,
        query: { id }
      }),
    [router]
  );

  if (_isEmpty(modules)) {
    return <EmptyPageMessage message='Данного курса не существует' />;
  }

  return _isEmpty(modules) ? (
    <EmptyPageMessage message='На данный момент доступных модулей нет' />
  ) : (
    <Layout.PageContainer>
      <Grid
        container
        sx={{ justifyContent: { xs: 'center', lg: 'space-around' } }}
      >
        <Grid item xs={12} md={8} lg={11} sx={{ mb: { xs: 2, md: 4 } }}>
          <Typography variant='h1' sx={{ mb: { xs: 1, md: 2 } }}>
            {courseTitle}
          </Typography>
          <Typography variant='h3'>{`Доступно ${gastroModulesList.length} из ${gastroModulesList.length}`}</Typography>
        </Grid>
        {modules.map((module, idx) => (
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
    props: { courseTitle: course?.title || '', modules: course?.list || [] }
  };
};

export default Modules;
