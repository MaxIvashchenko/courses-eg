import { Typography } from '@mui/material';
import { IAdditionalBlock, IAppPrograms, ICourse } from '@src/types';

export const ADDITIONAL_BLOCKS_START_BUSINESS: {
  [key: string]: IAdditionalBlock;
} = {
  asb1: {
    id: 'asb1',
    title: 'Идея и анализ',
    price: 80,
    icon: 'bulb',
    buttonBackground: '#352012',
    type: 'block',
    cover:
      'https://txdqbvqdpkcgyndeltej.supabase.co/storage/v1/object/public/common/courses/course-sb.jpg',
    description: (
      <Typography
        sx={{
          pb: { xs: 1, md: 3 },
          color: 'black',
          fontSize: 20
        }}
        textAlign='center'
        pb={1}
      >
        Всё начинается с идеи. В этом блоке вы пройдете самый творческий и
        приятный этап открытия бизнеса. Создадите <strong>идею</strong>,
        сформулируете <strong>концепцию, цель</strong> и
        <strong> ценность</strong>. Определите свою{' '}
        <strong>уникальность</strong>. И как настоящий, начинающий,
        предприниматель по всем законам бизнеса проведете{' '}
        <strong>анализ целевой аудитории</strong> и
        <strong> анализ конкурентов</strong>. Без которых выходить на рынок
        будет грубой ошибкой.
      </Typography>
    )
  },
  asb2: {
    id: 'asb2',
    title: 'Разработка меню',
    price: 60,
    icon: 'menuBook',
    buttonBackground: '#6c6730',
    type: 'block',
    cover:
      'https://txdqbvqdpkcgyndeltej.supabase.co/storage/v1/object/public/common/courses/course-sb.jpg',
    description: (
      <Typography
        sx={{
          pb: { xs: 1, md: 3 },
          color: 'black',
          fontSize: 20
        }}
        textAlign='center'
        pb={1}
      >
        Меню должно быть вкусным, красивым, продаваемым, а так же правильно
        технически составленным. В этом блоке вы узнаете как составить
        <strong> ТТК карты</strong>, как <strong>сформировать цену </strong>
        продута, что такое <strong>себестоимость</strong> и
        <strong> средний чек</strong> и оформите{' '}
        <strong>вкусный визуал </strong>
        своего меню.
      </Typography>
    )
  },
  asb3: {
    id: 'asb3',
    title: 'Открытие фирмы и пакет документов',
    price: 130,
    icon: 'paper',
    buttonBackground: '#596c45',
    type: 'block',
    cover:
      'https://txdqbvqdpkcgyndeltej.supabase.co/storage/v1/object/public/common/courses/course-sb.jpg',
    description: (
      <Typography
        sx={{
          pb: { xs: 1, md: 3 },
          color: 'black',
          fontSize: 20
        }}
        textAlign='center'
        pb={1}
      >
        Открывая свой бизнес, не удаться избежать бюрократических вопросов.
        Самый популярный вопрос «Как открыть свою фирму и какой пакет документов
        необходим для открытия»? В этом блоке, вы получите подробную информацию
        о том,{' '}
        <strong>
          какие этапы открытия фирмы, виды налогообложения, пакет документов и
          шаблоны
        </strong>{' '}
        для открытия гастробизнеса под ключ вам понадобятся.
      </Typography>
    )
  },
  asb4: {
    id: 'asb4',
    title: 'Помещение и локация',
    price: 100,
    icon: 'home',
    buttonBackground: '#98cadb',
    type: 'block',
    cover:
      'https://txdqbvqdpkcgyndeltej.supabase.co/storage/v1/object/public/common/courses/course-sb.jpg',
    description: (
      <Typography
        sx={{
          pb: { xs: 1, md: 3 },
          color: 'black',
          fontSize: 20
        }}
        textAlign='center'
        pb={1}
      >
        Успех вашего заведения напрямую зависит от местонахождения, то есть
        локации. В этом блоке, мы подробно расскажем, как{' '}
        <strong>выбирать локации</strong>, какие{' '}
        <strong>виды помещений бывают</strong>, на какие{' '}
        <strong>технические требования</strong> обязательно обращать внимание,
        чтобы избежать дополнительных затрат. А так же, покажем примеры,{' '}
        <strong>как бюджетно оформить стильный и модный интерьер</strong>.
      </Typography>
    )
  }
};

export const ADDITIONAL_BLOCKS_EXIST_BUSINESS: {
  [key: string]: IAdditionalBlock;
} = {
  aeb1: {
    id: 'aeb1',
    title: 'Финансовая грамотность',
    price: 120,
    icon: 'finance',
    buttonBackground: '#89513a',
    type: 'block',
    cover:
      'https://txdqbvqdpkcgyndeltej.supabase.co/storage/v1/object/public/common/courses/course-sb.jpg',
    description: (
      <Typography
        sx={{
          pb: { xs: 1, md: 3 },
          color: 'black',
          fontSize: 20
        }}
        textAlign='center'
        pb={1}
      >
        Основа любого бизнеса, <strong>это цифры</strong>. В этом блоке, вы
        научитесь <strong>контролировать</strong> и{' '}
        <strong>анализировать цифры</strong>, получите все необходимые{' '}
        <strong>шаблоны и таблицы</strong> для простого ведения финансового
        учета в гастрономии.
      </Typography>
    )
  },
  aeb2: {
    id: 'aeb2',
    title: 'Маркетинг',
    price: 140,
    icon: 'megaphone',
    buttonBackground: '#a35919',
    type: 'block',
    cover:
      'https://txdqbvqdpkcgyndeltej.supabase.co/storage/v1/object/public/common/courses/course-sb.jpg',
    description: (
      <Typography
        sx={{
          pb: { xs: 1, md: 3 },
          color: 'black',
          fontSize: 20
        }}
        textAlign='center'
        pb={1}
      >
        В наше время ни один бизнес не может существовать без грамотной
        <strong> маркетинговой стратегии</strong>. В этом блоке, мы дадим вам
        все современные инструменты для <strong>продвижения</strong> и
        <strong> развития</strong> своего гастробизнеса.
      </Typography>
    )
  },
  aeb3: {
    id: 'aeb3',
    title: 'Продажи и сервис',
    price: 100,
    icon: 'customerService',
    buttonBackground: '#a07040',
    type: 'block',
    cover:
      'https://txdqbvqdpkcgyndeltej.supabase.co/storage/v1/object/public/common/courses/course-sb.jpg',
    description: (
      <Typography
        sx={{
          pb: { xs: 1, md: 3 },
          color: 'black',
          fontSize: 20
        }}
        textAlign='center'
        pb={1}
      >
        <strong>Уровень сервиса</strong> напрямую влияет на прибыль заведения. В
        этом блоке мы расскажем,{' '}
        <strong>как работать с командой, повышать лояльность</strong> и{' '}
        <strong>возвращаемость клиента</strong>, а так же{' '}
        <strong>увеличивать средний чек</strong>.
      </Typography>
    )
  }
};

export const START_BUSINESS_COURSE: ICourse = {
  id: 'sb',
  icon: 'shuttle',
  title: 'Курс для начинающего бизнеса',
  subTitle: 'Открой свой гастробизнес с нуля',
  type: 'course',
  cover:
    'https://txdqbvqdpkcgyndeltej.supabase.co/storage/v1/object/public/common/courses/course-sb.jpg',
  blocks: {
    b1: {
      id: 'sb.b1',
      title: 'Блок 1 Идея',
      subBlocks: [
        'Урок 1 - Идея, концепция, цель, миссия, уникальность',
        'Урок 2 - Целевая аудитория',
        'Урок 3 - Анализ конкурентов и рынка',
        'Урок 4 - Прогрев аудитории, реклама',
        'Таблица -  SWOT анализ'
      ]
    },
    b2: {
      id: 'sb.b2',
      title: 'Блок 2 Меню и ТТК',
      subBlocks: [
        'Урок 1 - Этапы создания меню',
        'Урок 2 - Формирование цен',
        'Урок 3 - Что такое ТТК и как их составить',
        'Урок 4 - Расчет себестоимости и среднего чека',
        'Гайд - Дизайн проект меню',
        'Составляем меню, которое будет продавать'
      ]
    },
    b3: {
      id: 'sb.b3',
      title: 'Блок 3 Регистрация фирмы',
      subBlocks: [
        'Урок 1 - Как открыть фирму в Польше',
        'Урок 2 - Налогообложение'
      ]
    },
    b4: {
      id: 'sb.b4',
      title: 'Блок 4 Пакет документов для открытия',
      subBlocks: [
        'Урок 1 - Весь список документов для открытия гастробизнеса',
        '+ Шаблоны документов'
      ]
    },
    b5: {
      id: 'sb.b5',
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
    b6: {
      id: 'sb.b6',
      title: 'Блок 6 Поставщики/Оборудование',
      subBlocks: [
        'Урок 1 - Как работать с поставщиками',
        'Урок 2 - Виды оборудования'
      ]
    },
    b7: {
      id: 'sb.b7',
      title: 'Блок 7 Найм сотрудников',
      subBlocks: [
        'Урок 1 - Подбор команды, Какие люди дадут результат бизнесу',
        'Урок 2 - Продуктивное собеседование'
      ]
    },
    b8: {
      id: 'sb.b8',
      title: 'Блок 8 Бюджет',
      subBlocks: [
        'Урок 1 - Как составить и рассчитать бюджет на открытие',
        [
          'Бизнес план',
          'Инструменты контроля бюджета',
          'Ошибки при планировании бюджета'
        ],
        'Урок 2 -  Варианты привлечения инвестиций',
        'Гайд - Расчет точки безубыточности и окупаемости',
        'Шаблон - Бизнес плана'
      ]
    },
    b9: {
      id: 'sb.b9',
      title: 'Блок 9 Открытие',
      subBlocks: [
        'Урок 1 Как подготовится к открытию психологически и технически',
        'ИТОГ по модулю: Что делать и каких ошибок не совершать'
      ]
    }
  }
};

export const EXIST_BUSINESS_COURSE: ICourse = {
  id: 'eb',
  icon: 'suitcase',
  title: 'Курс для действующего бизнеса',
  subTitle: 'Развивай и масштабируй',
  type: 'course',
  cover:
    'https://txdqbvqdpkcgyndeltej.supabase.co/storage/v1/object/public/common/courses/cover.jpg',
  blocks: {
    b1: {
      id: 'eb.b1',
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
    b2: {
      id: 'eb.b2',
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
    b3: {
      id: 'eb.b3',
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
    b4: {
      id: 'eb.b4',
      title: 'Блок 4 Развитие',
      subBlocks: [
        'Урок 1 - Работа с посредниками',
        'Урок 2 - Продвижение и визуализация соц. сетей',
        'Урок 3 - Рентабельность вложений в развитие. Как находить идеи?'
      ]
    }
  }
};

export const APP_COURSES: { [key: string]: ICourse } = {
  sb: START_BUSINESS_COURSE,
  eb: EXIST_BUSINESS_COURSE
};

export const APP_ADDITIONAL_BLOCKS: { [key: string]: IAdditionalBlock } = {
  ...ADDITIONAL_BLOCKS_START_BUSINESS,
  ...ADDITIONAL_BLOCKS_EXIST_BUSINESS
};

export const APP_PROGRAMS: IAppPrograms = {
  sb: START_BUSINESS_COURSE,
  ...ADDITIONAL_BLOCKS_START_BUSINESS,
  eb: EXIST_BUSINESS_COURSE,
  ...ADDITIONAL_BLOCKS_EXIST_BUSINESS
};
