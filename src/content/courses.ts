import { ICourses } from '@src/types';
import fastroCover from 'public/images/gastro/cover.jpg';
import gastroModulesList from './gastroModulesList';

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
