interface ICourses {
  id: number;
  title: string;
  icon: string;
}

const courses: ICourses[] = [
  {
    id: 1111,
    title: 'Гастробизнес под ключ в Польше',
    icon: 'restaurant'
  },
  {
    id: 2222,
    title: 'Бьюти крус под ключ в Польше',
    icon: 'salon'
  }
];

export default courses;
