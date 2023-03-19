import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { Grid, Typography } from '@mui/material';
import { Layout } from '@src/blocks';
import { paths } from '@src/constants';
import { APP_COURSES, APP_PROGRAMS } from '@src/content';
import { IAdditionalBlock, IBlock } from '@src/types';
import { getIsProgramType } from '@src/utils';

import { BlockButton, EmptyPageMessage } from 'components';

interface ProgramStageViewProps {
  blocks: IAdditionalBlock[] | IBlock[];
  isNotAllowed: boolean;
}

const ProgramStageView = ({ blocks, isNotAllowed }: ProgramStageViewProps) => (
  <Layout.PageContainer sx={{ minHeight: '100%' }}>
    <Grid
      container
      sx={{
        marginTop: '100px',
        justifyContent: { xs: 'center', lg: 'space-around' }
      }}
    >
      {isNotAllowed ? (
        <EmptyPageMessage message='Данного курса нет или он не существует' />
      ) : (
        <>
          <Grid item xs={12} lg={10} sx={{ mb: { xs: 2, md: 2 } }}>
            <Typography variant='h2'>{`Блоки:  `}</Typography>
          </Grid>
          <Grid item xs={12} lg={10} sx={{ mb: { xs: 2, md: 4 } }}>
            {blocks.map((block) => (
              <BlockButton
                activeBlockId={blocks[0].id}
                key={block.id}
                {...block}
              />
            ))}
          </Grid>
        </>
      )}
    </Grid>
  </Layout.PageContainer>
);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const queryId = query?.id as string;
  const session = await getSession(context);

  if (!session) {
    return { redirect: { destination: paths.main } };
  }

  if (!query?.id) {
    return { redirect: { destination: paths.profile } };
  }

  const available_courses: string[] = session?.user?.available_courses || [];

  const isProgram = getIsProgramType(queryId);

  const isAllowedForClient = isProgram
    ? available_courses.some((id) => id === queryId)
    : available_courses.some((course) =>
        new RegExp(`^${query.id}`).test(course)
      );

  const programIds = available_courses.filter((course) =>
    new RegExp(`^${queryId}`).test(course)
  );
  const blocks = isProgram
    ? Object.values(APP_COURSES[queryId]?.blocks)
    : programIds.map((id) => APP_PROGRAMS[id]);

  return {
    props: {
      isNotAllowed: !isAllowedForClient,
      blocks: JSON.parse(JSON.stringify(blocks))
    }
  };
}

export default ProgramStageView;
