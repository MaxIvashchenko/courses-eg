import { ICourses } from '@src/types';
import fastroCover from 'public/images/gastro/cover.jpg';

const courses: ICourses[] = [
  {
    id: 'gastro',
    title: 'Гастробизнес под ключ в Польше',
    img: fastroCover.src
  },
  {
    id: 'beauty',
    title: 'Бьюти крус под ключ в Польше'
  }
];

export default courses;
