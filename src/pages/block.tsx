import { GetServerSideProps } from 'next';
import { Grid, Typography } from '@mui/material';
import { Layout } from '@src/blocks';
import { EmptyPageMessage } from '@src/components';
import { IBlockTheme } from '@src/types';
import { getBlockTheme } from '@src/utils';
import _isEmpty from 'lodash/isEmpty';

interface ModuleProps {
  blockTitle: string;
  themes: IBlockTheme;
}

const Block = ({ themes, blockTitle }: ModuleProps) =>
  _isEmpty(themes) ? (
    <EmptyPageMessage message='Данного блока не существует или он не доступен' />
  ) : (
    <Layout.PageContainer>
      <Grid container justifyContent='center'>
        <Grid item xs={12} md={8} lg={7} sx={{ mb: { xs: 2, md: 4 } }}>
          <Typography variant='h1'>{blockTitle}</Typography>
        </Grid>
        {/* {module.map((block, idx) => (
              <Grid key={block.id} item xs={12} md={8} lg={7} mb={2}>
                <ClickableCard {...block} subTitle={`Блок ${idx + 1}`} />
              </Grid>
            ))} */}
      </Grid>
    </Layout.PageContainer>
  );

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const blockId = query?.id as string;

  const currentBlock = getBlockTheme(blockId);

  return {
    props: {
      blockTitle: currentBlock?.title || '',
      themes: currentBlock?.themes || []
    }
  };
};

export default Block;
