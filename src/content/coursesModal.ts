interface ICoursesModal {
  icon: string;
  title: string;
  subTitle: string;
  startDate: string;
  content: {
    title: string;
    subBlocks: string[] | (string | string[])[];
  }[];
}

const coursesModal: ICoursesModal[] = [
  {
    icon: 'shuttle',
    title: 'Курс для начинающего бизнеса',
    subTitle: 'Открой свой гастробизнес с нуля',
    startDate: '17 марта 2023',
    content: [
      {
        title: 'Блок 1 Идея',
        subBlocks: [
          'Урок 1 - Идея, концепция, цель, миссия, уникальность',
          'Урок 2 - Целевая аудитория',
          'Урок 3 - Анализ конкурентов и рынка',
          'Урок 4 - Прогрев аудитории, реклама',
          'Таблица -  SWOT анализ'
        ]
      },
      {
        title: 'Блок 2 Меню и ТТК',
        subBlocks: [
          'Урок 1 - Этапы создания меню',
          'Урок 2 - Что такое ТТК и как их составить',
          'Гайд - Дизайн проект меню',
          'Составляем меню, которое будет продавать'
        ]
      },
      {
        title: 'Блок 3 Регистрация фирмы',
        subBlocks: [
          'Урок 1 - Как открыть фирму в Польше',
          'Урок 2 - Налогообложение'
        ]
      },
      {
        title: 'Блок 4 Пакет документов для открытия',
        subBlocks: [
          'Урок 1 - Весь список документов для открытия гастробизнеса',
          '+ Шаблоны документов'
        ]
      },
      {
        title: 'Блок 5 Локация',
        subBlocks: [
          'Урок 1 - Поиск локации основываясь на концепцию бизнеса',
          'Урок 2 - Виды помещений под гастробизнес',
          'Урок 3 - Техническое состояние помещений',
          'Урок 4 - География локации',
          'Урок 5 - Договор аренды. Разбор по пунктам',
          'Гайд - Дизайн помещения. Где брать идеи. Бюджетные варианты',
          'Конспект - Где искать помещения'
        ]
      },
      {
        title: 'Блок 6 Поставщики/Оборудование',
        subBlocks: [
          'Урок 1 - Как работать с поставщиками',
          'Урок 2 - Виды оборудования'
        ]
      },
      {
        title: 'Блок 7 Найм сотрудников',
        subBlocks: [
          'Урок 1 - Подбор команды, Какие люди дадут результат бизнесу',
          'Урок 2 - Продуктивное собеседование'
        ]
      },
      {
        title: 'Блок 8 Бюджет',
        subBlocks: [
          'Урок 1 - Бизнес план. Ошибки при планировании бюджета',
          'Урок 2 -  Составим бюджет на открытие',
          'Гайд - Расчет точки безубыточности и расчет окупаемости',
          'Шаблон - Бизнес плана'
        ]
      },
      {
        title: 'Блок 9 Открытие',
        subBlocks: [
          'Урок 1 Как подготовится к открытию психологически и технически',
          'ИТОГ по модулю: Что делать и каких ошибок не совершать'
        ]
      }
    ]
  },
  {
    icon: 'suitcase',
    title: 'Курс для действующего бизнеса',
    subTitle: 'Развивай и масштабируй',
    startDate: '30 марта 2023',
    content: [
      {
        title: 'Блок 1  Финансовая грамотность',
        subBlocks: [
          'Урок 1 - Базовые понятия в фин учете и обзор 3 ех инструментов',
          'Урок 2 - Финансовая модель гастробизнеса (разбор таблицы ДДС +ОПУ)',
          'Урок 3 - Как поделить прибыль. Сколько оставить себе',
          'Урок 4 - Финансовый анализ и как и пользоваться',
          'Урок 5 - Ежедневный фин учет',
          'Гайд : Что такое чистая прибыль, выручка, маржинальность, фудкост',
          'Шаблон: ДДС+ОПУ'
        ]
      },
      {
        title: 'Блок 2  Маркетинг',
        subBlocks: [
          'Урок 1 -  CRM маркетинг',
          [
            'как собирать данные клиентов',
            'как сегментировать клиентов',
            'как работать с LTV',
            'как понимать структуру'
          ],
          'Урок 2 - NPS. Учимся держать руку на пульсе по качеству своего заведения/продукта',
          ['+ шаблон анкеты ОС'],
          'Урок 3 - Маркетинговая воронка продвижения',
          'Урок 4 -  Маркетинговые гипотезы, как их проверить и применить'
        ]
      },
      {
        title: 'Блок 3 Продажи и сервис',
        subBlocks: [
          'Урок 1 - Структура команды в гастробизнесе',
          'Урок 2 - Мотивация и контроль сотрудников',
          ['+ Шаблоны регламентов'],
          'Урок 3 - Искренний сервис. Про сотрудников на которых возвращаются гости',
          [
            'Как повышать LTV',
            'Как повышать средний чек благодаря работе с сотрудниками'
          ]
        ]
      },
      {
        title: 'Блок 4 Развитие',
        subBlocks: [
          'Урок 1 - Работа с посредниками',
          'Урок 2 - Продвижение и визуализация соц. сетей',
          'Урок 3 - Рентабельность вложений в развитие. Как находить идеи?'
        ]
      }
    ]
  }
];

export default coursesModal;
