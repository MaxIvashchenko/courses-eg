interface ICourses {
  id: string;
  title: string;
  icon: string;
}

const courses: ICourses[] = [
  {
    id: 'gastro',
    title: 'Гастробизнес под ключ в Польше',
    icon: 'restaurant'
  },
  {
    id: 'beauty',
    title: 'Бьюти крус под ключ в Польше',
    icon: 'salon'
  }
];

export default courses;
