interface IProgramCourse {
  name: string;
  description: string;
  iconName: string;
  list: string[];
  price: number;
}

const programCourse: IProgramCourse[] = [
  {
    name: 'От плана до открытия',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    iconName: 'planning',
    list: ['oneoneone', 'twotwotwo', 'threethreethree', 'fourfourfour'],
    price: 220
  },
  {
    name: 'Финансовая грамотность в гастрономии',
    description:
      'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.',
    iconName: 'stats',
    list: [
      'oneoneone',
      'fourfourfour fourfourfourfourfourfour fourfourfourfourfourfourfourfourfour fourfourfour'
    ],
    price: 290
  },
  {
    name: 'Развитие/маркетинг/продвижение',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    iconName: 'marketing',
    list: ['oneoneone', 'twotwotwo', 'fourfourfour'],
    price: 190
  },
  {
    name: 'Масштабирование бизнеса',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    iconName: 'scaleup',
    list: ['oneoneone', 'twotwotwo', 'threethreethree', 'fourfourfour'],
    price: 145
  }
];

export default programCourse;
