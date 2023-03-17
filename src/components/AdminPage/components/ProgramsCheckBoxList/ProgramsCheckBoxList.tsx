import { memo } from 'react';
import { Button, Checkbox, FormControlLabel } from '@mui/material';
import { APP_PROGRAMS } from '@src/content';
import { useFormik } from 'formik';
import _isEqual from 'lodash/isEqual';

interface ProgramsCheckBoxListProps {
  userProgram: string[];
  submitHandler: (checked: string[]) => void;
}

const ProgramsCheckBoxList = ({
  userProgram = [],
  submitHandler
}: ProgramsCheckBoxListProps) => {
  const formik = useFormik({
    initialValues: {
      checked: userProgram
    },
    onSubmit: ({ checked }) => submitHandler(checked)
  });

  const isChanged = !_isEqual(formik.values.checked, userProgram);

  return (
    <form onSubmit={formik.handleSubmit}>
      {Object.values(APP_PROGRAMS).map((program) => (
        <FormControlLabel
          key={program.id}
          sx={{
            width: '100%',
            mr: 0,
            ml: program.type === 'block' ? 4 : 0
          }}
          control={
            <Checkbox
              checked={formik.values.checked.includes(program.id)}
              name='checked'
              onChange={formik.handleChange}
              value={program.id}
              sx={{ m: 0 }}
            />
          }
          label={`${program.type === 'block' ? 'Блок: ' : ''}${program.title}`}
        />
      ))}
      {isChanged && (
        <Button
          type='submit'
          fullWidth
          sx={{
            mt: 2
          }}
        >
          Сохранить
        </Button>
      )}
    </form>
  );
};

export default memo(ProgramsCheckBoxList);
