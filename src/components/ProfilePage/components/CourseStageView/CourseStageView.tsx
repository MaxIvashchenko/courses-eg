import { Grid, Typography } from '@mui/material';
import { EXIST_BUSINESS_COURSE, START_BUSINESS_COURSE } from '@src/content';
import { getExistAEBcourse, getExistASBcourse } from '@src/utils';

import { CourseButton } from 'components';

interface CourseStageViewProps {
  courses: string[];
  clickHandler: (id: string) => void;
}

const CourseStageView = ({
  courses = [],
  clickHandler
}: CourseStageViewProps) => {
  const rennderCourses = () =>
    courses.map((id) => {
      if (id === START_BUSINESS_COURSE.id) {
        return (
          <CourseButton
            key={id}
            clickHandler={clickHandler}
            {...START_BUSINESS_COURSE}
          />
        );
      }

      if (id === EXIST_BUSINESS_COURSE.id) {
        return (
          <CourseButton
            key={id}
            clickHandler={clickHandler}
            {...EXIST_BUSINESS_COURSE}
          />
        );
      }
    });

  const renderAdditionalBlocksSB = () => {
    const isAdditionalSBexist = getExistASBcourse(courses);

    if (isAdditionalSBexist) {
      return (
        <CourseButton
          clickHandler={clickHandler}
          id='asb'
          title='Дополнительные блоки для курса начинающего бизнеса'
          cover='https://txdqbvqdpkcgyndeltej.supabase.co/storage/v1/object/public/common/courses/cover.jpg'
        />
      );
    }
  };

  const renderAdditionalBlocksEB = () => {
    const isAdditionalEBexist = getExistAEBcourse(courses);

    if (isAdditionalEBexist) {
      return (
        <CourseButton
          clickHandler={clickHandler}
          id='aeb'
          title='Дополнительные блоки для курса действующего бизнеса'
          cover='https://txdqbvqdpkcgyndeltej.supabase.co/storage/v1/object/public/common/courses/cover.jpg'
        />
      );
    }
  };

  return (
    <>
      <Grid item xs={12} lg={10} sx={{ mb: { xs: 2, md: 2 } }}>
        <Typography variant='h2'>{`Доступные курсы (${courses.length}):`}</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        lg={10}
        sx={{ mb: { xs: 2, md: 4 }, borderTop: '1px solid #69381e' }}
      >
        {rennderCourses()}
        {renderAdditionalBlocksSB()}
        {renderAdditionalBlocksEB()}
      </Grid>
    </>
  );
};

export default CourseStageView;
