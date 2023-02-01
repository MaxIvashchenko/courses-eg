import { useCallback } from 'react';
import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Grid, Typography } from '@mui/material';
import { Layout } from '@src/blocks';
import { ClickableCard, EmptyPageMessage } from '@src/components';
import { paths } from '@src/constants';
import { IBlock } from '@src/types';
import { getModule } from '@src/utils';
import _isEmpty from 'lodash/isEmpty';

interface ModuleProps {
  module: IBlock[];
  moduleTitle: string;
}

const Module = ({ moduleTitle, module }: ModuleProps) => {
  const router = useRouter();

  useEffect(() => {
    if (navigator.userAgent.indexOf('AppleWebKit') != -1) {
      window.history.scrollRestoration = 'auto';
    } else {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  const clickHandler = useCallback(
    (id: string) => () =>
      router.push({
        pathname: paths.block,
        query: { id }
      }),
    [router]
  );

  return _isEmpty(module) ? (
    <EmptyPageMessage message='Данного модуля не существует или он не доступен' />
  ) : (
    <Layout.PageContainer>
      <Grid container justifyContent='center'>
        <Grid item xs={12} md={8} lg={7} sx={{ mb: { xs: 2, md: 4 } }}>
          <Typography variant='h1'>{moduleTitle}</Typography>
        </Grid>
        {module.map((block, idx) => (
          <Grid key={block.id} item xs={12} md={8} lg={7} mb={2}>
            <ClickableCard
              clickHandler={clickHandler}
              {...block}
              subTitle={`Блок ${idx + 1}`}
            />
          </Grid>
        ))}
      </Grid>
    </Layout.PageContainer>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const moduleId = query?.id as string;

  const currentModule = getModule(moduleId);

  return {
    props: {
      moduleTitle: currentModule?.title || '',
      module: currentModule?.list || []
    }
  };
};

export default Module;
