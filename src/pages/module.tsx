import { Grid, Typography } from '@mui/material';
import { ClickableCard, EmptyPageMessage } from '@src/components';
import _isEmpty from 'lodash/isEmpty';
import { Layout } from '@src/blocks';
import { GetServerSideProps } from 'next';
import { gastroModulesList } from 'src/content';
import { IBlock } from '@src/types';

interface ModuleProps {
  module: IBlock[];
  moduleTitle: string;
}

const Module = ({ moduleTitle, module }: ModuleProps) => {
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
            <ClickableCard {...block} subTitle={`Блок ${idx + 1}`} />
          </Grid>
        ))}
      </Grid>
    </Layout.PageContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const moduleId = query.id;

  const currentModule = gastroModulesList.find(
    (module) => module.id === moduleId
  );

  return {
    props: {
      moduleTitle: currentModule?.title || '',
      module: currentModule?.list || []
    }
  };
};

export default Module;
