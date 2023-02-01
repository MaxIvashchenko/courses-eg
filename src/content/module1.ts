import { IBlock } from '@src/types';

import block1 from 'public/images/gastro/module1/block1.jpg';
import block2 from 'public/images/gastro/module1/block2.jpg';
import block3 from 'public/images/gastro/module1/block3.jpg';
import block4 from 'public/images/gastro/module1/block4.jpg';
import block5 from 'public/images/gastro/module1/block5.jpg';

const module1: IBlock[] = [
  {
    id: 'gastro-module-1-block-1',
    title: 'Идея',
    img: block1.src,
    themes: [
      {
        id: 'gastro-module-1-block-1-t-1',
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
        id: 'gastro-module-1-block-1-t-2',
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
        id: 'gastro-module-1-block-1-t-3',
        title: 'Миссия, уникальность (чем ты на рынке выделяешься)',
        videoLink: '',
        description: ['']
      },
      {
        id: 'gastro-module-1-block-1-t-4',
        title:
          'Раскрутка заранее в соц сетях, реклама ( создавайте инста, подогревайте аудиторию)',
        videoLink: '',
        description: ['']
      },
      {
        id: 'gastro-module-1-block-1-t-5',
        title:
          'Немного про найм и сотрудников ( какие были принципы, как важна команда, как она влияет на качество )',
        videoLink: '',
        description: ['']
      },
      {
        id: 'gastro-module-1-block-1-t-6',
        title: 'SWOT анализ - в презе',
        videoLink: '',
        description: ['']
      },
      {
        id: 'gastro-module-1-block-1-t-7',
        title: 'Итог по модулю: Что делать и чего точно не делать',
        videoLink: '',
        description: ['']
      }
    ]
  },
  {
    id: 'gastro-module-1-block-2',
    title: 'Бюджет',
    img: block2.src,
    themes: [
      {
        id: 'gastro-module-1-block-2-t-1',
        title:
          'Считаем бюджет (- на свои деньги, - кредит в банке, - с инвестором)',
        videoLink: '',
        description: ['']
      },
      {
        id: 'gastro-module-1-block-2-t-2',
        title: 'Составляем инвестиционный бюджет + шаблон бизнес плана',
        videoLink: '',
        description: ['']
      },
      {
        id: 'gastro-module-1-block-2-t-3',
        title: 'Расчет точки безубыточности',
        videoLink: '',
        description: ['']
      },
      {
        id: 'gastro-module-1-block-2-t-4',
        title: 'Расчет окупаемости',
        videoLink: '',
        description: ['']
      },
      {
        id: 'gastro-module-1-block-2-t-4',
        title: 'Калькулятор, который поможет посчитать стартовый бюджет',
        videoLink: '',
        description: ['']
      }
    ]
  },
  {
    id: 'gastro-module-1-block-3',
    title: 'Регистрация фирмы',
    img: block3.src,
    themes: [
      {
        id: 'gastro-module-1-block-3-t-1',
        title:
          'Открытие фирмы  - кто может открыть фирмы - выдать контакты в вип',
        videoLink: '',
        description: ['']
      },
      {
        id: 'gastro-module-1-block-3-t-2',
        title: 'Налогообложение для каждой формы',
        videoLink: '',
        description: ['']
      }
    ]
  },
  {
    id: 'gastro-module-1-block-4',
    title: 'Полный пакет документов',
    img: block4.src,
    themes: [
      {
        id: 'gastro-module-1-block-4-t-1',
        title: 'Договор документ фирмы',
        videoLink: '',
        description: ['']
      },
      {
        id: 'gastro-module-1-block-4-t-2',
        title: 'Разрешение на помещение',
        videoLink: '',
        description: ['']
      }
    ]
  },
  {
    id: 'gastro-module-1-block-5',
    title: 'Локация',
    img: block5.src,
    themes: [
      {
        id: 'gastro-module-1-block-5-t-1',
        title: 'Локации и техническое состояние помещений',
        videoLink: '',
        description: ['']
      },
      {
        id: 'gastro-module-1-block-5-t-2',
        title: 'Где искать помещения',
        videoLink: '',
        description: ['']
      },
      {
        id: 'gastro-module-1-block-5-t-3',
        title:
          'Локация ( это заведение для центра, спальника или в офисном центре )',
        videoLink: '',
        description: ['']
      },
      {
        id: 'gastro-module-1-block-5-t-4',
        title:
          'Входит ли локализация в зону обслуживания доставщиков - (ПРИМЕР ПЛАН А №1)',
        videoLink: '',
        description: ['']
      },
      {
        id: 'gastro-module-1-block-5-t-5',
        title: 'Какие варианты могут быть помещений',
        videoLink: '',
        description: ['']
      }
    ]
  }
];

export default module1;
