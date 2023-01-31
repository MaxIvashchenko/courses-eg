interface IBlock {
  id: string;
  title: string;
  themes: {
    id: string;
    title: string;
    videoLink: string;
    description: string[];
  }[];
}

const module1: IBlock[] = [
  {
    id: 'block-1',
    title: 'Идея',
    themes: [
      {
        id: 'block-1-t-1',
        title: 'Идея, концепция, цель',
        videoLink: '',
        description: [
          'Продумывание своей идеи и концепции',
          'Какие цели вы будете закрывать',
          'Проговрить о том, что очень круто если вы генератор идей и хотите придумать идею, которой не существет, но нет ничего такого если вы возьмете существющую модель и сделаете еще круче со своими нотками уникальности',
          'Сказать про покупку готового бизнеса'
        ]
      },
      {
        id: 'block-1-t-2',
        title: 'Целевая аудитория, анализ конкурентов',
        videoLink: '',
        description: [
          'Определение рыночной цены, востребованной ассортиментной матрицы',
          '',
          '',
          ''
        ]
      },
      {
        id: 'block-1-t-3',
        title: 'Миссия, уникальность (чем ты на рынке выделяешься)',
        videoLink: '',
        description: ['']
      },
      {
        id: 'block-1-t-4',
        title:
          'Раскрутка заранее в соц сетях, реклама ( создавайте инста, подогревайте аудиторию)',
        videoLink: '',
        description: ['']
      },
      {
        id: 'block-1-t-5',
        title:
          'Немного про найм и сотрудников ( какие были принципы, как важна команда, как она влияет на качество )',
        videoLink: '',
        description: ['']
      },
      {
        id: 'block-1-t-6',
        title: 'SWOT анализ - в презе',
        videoLink: '',
        description: ['']
      },
      {
        id: 'block-1-t-7',
        title: 'Итог по модулю: Что делать и чего точно не делать',
        videoLink: '',
        description: ['']
      }
    ]
  },
  {
    id: 'block-2',
    title: 'Бюджет',
    themes: [
      {
        id: 'block-2-t-1',
        title:
          'Считаем бюджет (- на свои деньги, - кредит в банке, - с инвестором)',
        videoLink: '',
        description: ['']
      },
      {
        id: 'block-2-t-2',
        title: 'Составляем инвестиционный бюджет + шаблон бизнес плана',
        videoLink: '',
        description: ['']
      },
      {
        id: 'block-2-t-3',
        title: 'Расчет точки безубыточности',
        videoLink: '',
        description: ['']
      },
      {
        id: 'block-2-t-4',
        title: 'Расчет окупаемости',
        videoLink: '',
        description: ['']
      },
      {
        id: 'block-2-t-4',
        title: 'Калькулятор, который поможет посчитать стартовый бюджет',
        videoLink: '',
        description: ['']
      }
    ]
  },
  {
    id: 'block-3',
    title: 'Регистрация фирмы',
    themes: [
      {
        id: 'block-3-t-1',
        title:
          'Открытие фирмы  - кто может открыть фирмы - выдать контакты в вип',
        videoLink: '',
        description: ['']
      },
      {
        id: 'block-3-t-2',
        title: 'Налогообложение для каждой формы',
        videoLink: '',
        description: ['']
      }
    ]
  },
  {
    id: 'block-4',
    title: 'Полный пакет документов',
    themes: [
      {
        id: 'block-4-t-1',
        title: 'Договор документ фирмы',
        videoLink: '',
        description: ['']
      },
      {
        id: 'block-4-t-2',
        title: 'Разрешение на помещение',
        videoLink: '',
        description: ['']
      }
    ]
  }
];

export default module1;
