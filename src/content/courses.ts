import { ICourses } from '@src/types';

import gastroModulesList from './gastroModulesList';

import fastroCover from 'public/images/gastro/cover.jpg';

const courses: ICourses[] = [
  {
    id: 'gastro',
    title: 'Гастробизнес под ключ в Польше',
    img: fastroCover.src,
    list: gastroModulesList
  },
  {
    id: 'beauty',
    title: 'Бьюти крус под ключ в Польше',
    list: []
  }
];

export default courses;
