import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { Grid, Typography } from '@mui/material';
import { Layout } from '@src/blocks';
import { EmptyPageMessage } from '@src/components';
import { paths } from '@src/constants';
import { APP_ADDITIONAL_BLOCKS, APP_COURSES } from '@src/content';
import { ILesson } from '@src/types/profile';
import { getIsProgramType } from '@src/utils';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';

const getProgramLesson = (
  program_id: string,
  block_id: string,
  lesson_id: string
) => APP_COURSES[program_id]?.blocks[block_id]?.lessons[lesson_id];

const getBlockLesson = (block_id: string, lesson_id: string) =>
  block_id && lesson_id && APP_ADDITIONAL_BLOCKS[block_id]?.lessons[lesson_id];

interface LessonPageProps {
  isNotAllowed?: boolean;
  lesson: ILesson;
}

const LessonPage = ({ isNotAllowed = false, lesson }: LessonPageProps) => (
  <Layout.PageContainer sx={{ minHeight: '100%' }}>
    <Grid
      container
      sx={{
        marginTop: '100px',
        justifyContent: { xs: 'center', lg: 'space-around' }
      }}
    >
      {isNotAllowed ? (
        <EmptyPageMessage message='Данного урока нет или у вас нет доступа' />
      ) : (
        <>
          <Grid item xs={12} lg={10} sx={{ mb: { xs: 2, md: 2 } }}>
            <Typography textAlign='center' variant='h1'>
              {lesson.name}
            </Typography>
          </Grid>
        </>
      )}
    </Grid>
  </Layout.PageContainer>
);

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const program_id = _get(query, 'params[0]', null);
  const block_id = _get(query, 'params[1]', null);
  const lesson_id = _get(query, 'params[2]', null);
  const session = await getSession(context);

  if (!session) {
    return { redirect: { destination: paths.main } };
  }

  if (!block_id && !lesson_id) {
    return { redirect: { destination: paths.profile } };
  }

  const isProgram: boolean = getIsProgramType(program_id as string);
  const available_courses: string[] = session?.user?.available_courses || [];

  const isAllowedForClient = isProgram
    ? available_courses.some((id) => id === program_id)
    : available_courses.some((course) =>
        new RegExp(`^${program_id}`).test(course)
      );

  if (!isAllowedForClient) {
    return {
      props: {
        isNotAllowed: true
      }
    };
  }

  if (program_id && block_id && lesson_id) {
    const lesson = isProgram
      ? getProgramLesson(
          program_id as string,
          block_id as string,
          lesson_id as string
        )
      : getBlockLesson(block_id as string, lesson_id as string);

    return {
      props: {
        isNotAllowed: _isEmpty(lesson) ? true : false,
        lesson: _isEmpty(lesson) ? {} : lesson
      }
    };
  }

  return {
    props: {}
  };
}

export default LessonPage;
