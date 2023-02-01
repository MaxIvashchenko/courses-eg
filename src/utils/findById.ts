import { courses } from '@src/content';
import { IBlock, ICourses, IModuleRow } from '@src/types';

export const getCourse = (courseId: string): ICourses | undefined =>
  courses.find(({ id }) => id === courseId);

export const getModule = (incomeId: string): IModuleRow | undefined => {
  if (!incomeId) return;
  const [courseId] = incomeId.split('-');

  const course: ICourses | undefined = getCourse(courseId);

  if (course?.list) {
    return course.list.find(({ id }) => id === incomeId);
  }
};

export const getBlockTheme = (incomeId: string): IBlock | undefined => {
  if (!incomeId) return;
  const [courseId, module, moduleNum] = incomeId.split('-');

  const moduleId = `${courseId}-${module}-${moduleNum}`;

  const currentModule: IModuleRow | undefined = getModule(moduleId);

  if (currentModule?.list) {
    return currentModule?.list.find(({ id }) => id === incomeId);
  }
};
