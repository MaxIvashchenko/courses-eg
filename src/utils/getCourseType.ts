import {
  ADDITIONAL_BLOCKS_EXIST_BUSINESS,
  ADDITIONAL_BLOCKS_START_BUSINESS,
  APP_COURSES
} from '@src/content';
import _isEmpty from 'lodash/isEmpty';

export const getExistASBcourse = (ids: string[]) => {
  const idsExist = Object.keys(ADDITIONAL_BLOCKS_START_BUSINESS).filter(
    (x) => ids.indexOf(x) !== -1
  );
  return !_isEmpty(idsExist);
};

export const getExistAEBcourse = (ids: string[]) => {
  const idsExist = Object.keys(ADDITIONAL_BLOCKS_EXIST_BUSINESS).filter(
    (x) => ids.indexOf(x) !== -1
  );
  return !_isEmpty(idsExist);
};

export const getIsProgramType = (id: string) =>
  Object.keys(APP_COURSES).some((program_id) => program_id === id);
