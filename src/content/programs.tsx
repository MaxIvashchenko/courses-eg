import { Typography } from '@mui/material';
import { IAdditionalBlock, IAppPrograms, ICourse } from '@src/types';

export const ADDITIONAL_BLOCKS_START_BUSINESS: {
  [key: string]: IAdditionalBlock;
} = {
  asb1: {
    id: 'asb1',
    program: 'asb',
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
    ),
    lessons: {
      lesson_1: {
        id: 'lesson_1',
        program: 'asb',
        block: 'asb1',
        type: 'lesson',
        name: 'Lesson 1 :=> block asb1'
      },
      lesson_2: {
        id: 'lesson_2',
        program: 'asb',
        block: 'asb1',
        type: 'lesson',
        name: 'Lesson 2 :=> block asb1'
      },
      lesson_3: {
        id: 'lesson_3',
        program: 'asb',
        block: 'asb1',
        type: 'lesson',
        name: 'Lesson 3 :=> block asb1'
      },
      lesson_4: {
        id: 'lesson_4',
        program: 'asb',
        block: 'asb1',
        type: 'lesson',
        name: 'Lesson 4 :=> block asb1'
      }
    }
  },
  asb2: {
    id: 'asb2',
    program: 'asb',
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
    ),
    lessons: {
      lesson_1: {
        id: 'lesson_1',
        program: 'asb',
        block: 'asb2',
        type: 'lesson',
        name: 'Lesson 1 :=> block asb2'
      },
      lesson_2: {
        id: 'lesson_2',
        program: 'asb',
        block: 'asb2',
        type: 'lesson',
        name: 'Lesson 2 :=> block asb2'
      },
      lesson_3: {
        id: 'lesson_3',
        program: 'asb',
        block: 'asb2',
        type: 'lesson',
        name: 'Lesson 3 :=> block asb2'
      }
    }
  },
  asb3: {
    id: 'asb3',
    program: 'asb',
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
    ),
    lessons: {
      lesson_1: {
        id: 'lesson_1',
        program: 'asb',
        block: 'asb3',
        type: 'lesson',
        name: 'Lesson 1 :=> block asb3'
      },
      lesson_2: {
        id: 'lesson_2',
        program: 'asb',
        block: 'asb3',
        type: 'lesson',
        name: 'Lesson 2 :=> block asb3'
      },
      lesson_3: {
        id: 'lesson_3',
        program: 'asb',
        block: 'asb3',
        type: 'lesson',
        name: 'Lesson 3 :=> block asb3'
      },
      lesson_4: {
        id: 'lesson_4',
        program: 'asb',
        block: 'asb3',
        type: 'lesson',
        name: 'Lesson 4 :=> block asb3'
      },
      lesson_5: {
        id: 'lesson_5',
        program: 'asb',
        block: 'asb3',
        type: 'lesson',
        name: 'Lesson 5 :=> block asb3'
      }
    }
  },
  asb4: {
    id: 'asb4',
    program: 'asb',
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
    ),
    lessons: {
      lesson_1: {
        id: 'lesson_1',
        program: 'asb',
        block: 'asb4',
        type: 'lesson',
        name: 'Lesson 1 :=> block asb4'
      },
      lesson_2: {
        id: 'lesson_2',
        program: 'asb',
        block: 'asb4',
        type: 'lesson',
        name: 'Lesson 2 :=> block asb4'
      }
    }
  }
};

export const ADDITIONAL_BLOCKS_EXIST_BUSINESS: {
  [key: string]: IAdditionalBlock;
} = {
  aeb1: {
    id: 'aeb1',
    program: 'aeb',
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
    ),
    lessons: {
      lesson_1: {
        id: 'lesson_1',
        program: 'aeb',
        block: 'aeb1',
        type: 'lesson',
        name: 'Lesson 1 :=> block aeb1'
      },
      lesson_2: {
        id: 'lesson_2',
        program: 'aeb',
        block: 'aeb1',
        type: 'lesson',
        name: 'Lesson 2 :=> block aeb1'
      },
      lesson_3: {
        id: 'lesson_3',
        program: 'aeb',
        block: 'aeb1',
        type: 'lesson',
        name: 'Lesson 3 :=> block aeb1'
      },
      lesson_4: {
        id: 'lesson_4',
        program: 'aeb',
        block: 'aeb1',
        type: 'lesson',
        name: 'Lesson 4 :=> block aeb1'
      },
      lesson_5: {
        id: 'lesson_5',
        program: 'aeb',
        block: 'aeb1',
        type: 'lesson',
        name: 'Lesson 5 :=> block aeb1'
      }
    }
  },
  aeb2: {
    id: 'aeb2',
    program: 'aeb',
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
    ),
    lessons: {
      lesson_1: {
        id: 'lesson_1',
        program: 'aeb',
        block: 'aeb2',
        type: 'lesson',
        name: 'Lesson 1 :=> block aeb2'
      },
      lesson_2: {
        id: 'lesson_2',
        program: 'aeb',
        block: 'aeb2',
        type: 'lesson',
        name: 'Lesson 2 :=> block aeb2'
      },
      lesson_3: {
        id: 'lesson_3',
        program: 'aeb',
        block: 'aeb2',
        type: 'lesson',
        name: 'Lesson 3 :=> block aeb2'
      }
    }
  },
  aeb3: {
    id: 'aeb3',
    program: 'aeb',
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
    ),
    lessons: {
      lesson_1: {
        id: 'lesson_1',
        program: 'aeb',
        block: 'aeb3',
        type: 'lesson',
        name: 'Lesson 1 :=> block aeb3'
      },
      lesson_2: {
        id: 'lesson_2',
        program: 'aeb',
        block: 'aeb3',
        type: 'lesson',
        name: 'Lesson 2 :=> block aeb3'
      },
      lesson_3: {
        id: 'lesson_3',
        program: 'aeb',
        block: 'aeb3',
        type: 'lesson',
        name: 'Lesson 3 :=> block aeb3'
      },
      lesson_4: {
        id: 'lesson_4',
        program: 'aeb',
        block: 'aeb3',
        type: 'lesson',
        name: 'Lesson 4 :=> block aeb3'
      }
    }
  }
};

export const START_BUSINESS_COURSE: ICourse = {
  id: 'sb',
  icon: 'shuttle',
  title: 'Курс для начинающего бизнеса',
  subTitle: 'Открой свой гастробизнес с нуля',
  type: 'course',
  price: 500,
  cover:
    'https://txdqbvqdpkcgyndeltej.supabase.co/storage/v1/object/public/common/courses/course-sb.jpg',
  blocks: {
    sb1: {
      id: 'sb1',
      program: 'sb',
      title: 'Блок 1 Идея',
      lessons: {
        lesson_1: {
          id: 'lesson_1',
          program: 'sb',
          block: 'sb1',
          type: 'lesson',
          name: 'Идея, концепция, цель, миссия, уникальность'
        },
        lesson_2: {
          id: 'lesson_2',
          program: 'sb',
          block: 'sb1',
          type: 'lesson',
          name: 'Целевая аудитория'
        },
        lesson_3: {
          id: 'lesson_3',
          program: 'sb',
          block: 'sb1',
          type: 'lesson',
          name: 'Анализ конкурентов и рынка'
        },
        lesson_4: {
          id: 'lesson_4',
          program: 'sb',
          block: 'sb1',
          type: 'lesson',
          name: 'Прогрев аудитории, реклама'
        },
        lesson_5: {
          id: 'lesson_5',
          program: 'sb',
          block: 'sb1',
          type: 'file',
          name: 'Таблица -  SWOT анализ'
        }
      }
    },
    sb2: {
      id: 'sb2',
      program: 'sb',
      title: 'Блок 2 Меню и ТТК',
      lessons: {
        lesson_1: {
          id: 'lesson_1',
          program: 'sb',
          block: 'sb2',
          type: 'lesson',
          name: 'Этапы создания меню'
        },
        lesson_2: {
          id: 'lesson_2',
          program: 'sb',
          block: 'sb2',
          type: 'lesson',
          name: 'Формирование цен'
        },
        lesson_3: {
          id: 'lesson_3',
          program: 'sb',
          block: 'sb2',
          type: 'lesson',
          name: 'Что такое ТТК и как их составить'
        },
        lesson_4: {
          id: 'lesson_4',
          program: 'sb',
          block: 'sb2',
          type: 'lesson',
          name: 'Расчет себестоимости и среднего чека'
        },
        lesson_5: {
          id: 'lesson_5',
          program: 'sb',
          block: 'sb2',
          type: 'text',
          name: 'Гайд - Дизайн проект меню'
        },
        lesson_6: {
          id: 'lesson_6',
          program: 'sb',
          block: 'sb2',
          type: 'text',
          name: 'Составляем меню, которое будет продавать'
        }
      }
    },
    sb3: {
      id: 'sb3',
      program: 'sb',
      title: 'Блок 3 Регистрация фирмы',
      lessons: {
        lesson_1: {
          id: 'lesson_1',
          program: 'sb',
          block: 'sb3',
          type: 'lesson',
          name: 'Как открыть фирму в Польше'
        },
        lesson_2: {
          id: 'lesson_2',
          program: 'sb3',
          block: 'sb2',
          type: 'lesson',
          name: 'Налогообложение'
        }
      }
    },
    sb4: {
      id: 'sb4',
      program: 'sb',
      title: 'Блок 4 Пакет документов для открытия',
      lessons: {
        lesson_1: {
          id: 'lesson_1',
          program: 'sb',
          block: 'sb4',
          type: 'lesson',
          name: 'Весь список документов для открытия гастробизнеса'
        },
        lesson_2: {
          id: 'lesson_2',
          program: 'sb',
          block: 'sb4',
          type: 'file',
          name: 'Шаблоны документов'
        }
      }
    },
    sb5: {
      id: 'sb5',
      program: 'sb',
      title: 'Блок 5 Локация',
      lessons: {
        lesson_1: {
          id: 'lesson_1',
          program: 'sb',
          block: 'sb5',
          type: 'lesson',
          name: 'Поиск локации основываясь на концепцию бизнеса'
        },
        lesson_2: {
          id: 'lesson_2',
          program: 'sb',
          block: 'sb5',
          type: 'lesson',
          name: 'Виды помещений под гастробизнес'
        },
        lesson_3: {
          id: 'lesson_3',
          program: 'sb',
          block: 'sb5',
          type: 'lesson',
          name: 'Техническое состояние помещений'
        },
        lesson_4: {
          id: 'lesson_4',
          program: 'sb',
          block: 'sb5',
          type: 'lesson',
          name: 'География локации'
        },
        lesson_5: {
          id: 'lesson_5',
          program: 'sb',
          block: 'sb5',
          type: 'lesson',
          name: 'Договор аренды. Разбор по пунктам'
        },
        lesson_6: {
          id: 'lesson_6',
          program: 'sb',
          block: 'sb5',
          type: 'text',
          name: 'Гайд - Дизайн помещения. Где брать идеи. Бюджетные варианты'
        },
        lesson_7: {
          id: 'lesson_7',
          program: 'sb',
          block: 'sb5',
          type: 'text',
          name: 'Конспект - Где искать помещения'
        }
      }
    },
    sb6: {
      id: 'sb6',
      program: 'sb',
      title: 'Блок 6 Поставщики/Оборудование',
      lessons: {
        lesson_1: {
          id: 'lesson_1',
          program: 'sb',
          block: 'sb6',
          type: 'lesson',
          name: 'Как работать с поставщиками'
        },
        lesson_2: {
          id: 'lesson_2',
          program: 'sb',
          block: 'sb6',
          type: 'lesson',
          name: 'Виды оборудования'
        }
      }
    },
    sb7: {
      id: 'sb7',
      program: 'sb',
      title: 'Блок 7 Найм сотрудников',
      lessons: {
        lesson_1: {
          id: 'lesson_1',
          program: 'sb',
          block: 'sb7',
          type: 'lesson',
          name: 'Подбор команды, Какие люди дадут результат бизнесу'
        },
        lesson_2: {
          id: 'lesson_2',
          program: 'sb',
          block: 'sb7',
          type: 'lesson',
          name: 'Продуктивное собеседование'
        }
      }
    },
    sb8: {
      id: 'sb8',
      program: 'sb',
      title: 'Блок 8 Бюджет',
      lessons: {
        lesson_1: {
          id: 'lesson_1',
          program: 'sb',
          block: 'sb8',
          type: 'lesson',
          name: 'Как составить и рассчитать бюджет на открытие',
          subparagraphs: [
            'Бизнес план',
            'Инструменты контроля бюджета',
            'Ошибки при планировании бюджета'
          ]
        },
        lesson_2: {
          id: 'lesson_2',
          program: 'sb',
          block: 'sb8',
          type: 'lesson',
          name: 'Варианты привлечения инвестиций'
        },
        lesson_3: {
          id: 'lesson_3',
          program: 'sb',
          block: 'sb8',
          type: 'text',
          name: 'Гайд - Расчет точки безубыточности и окупаемости'
        },
        lesson_4: {
          id: 'lesson_4',
          program: 'sb',
          block: 'sb8',
          type: 'file',
          name: 'Шаблон - Бизнес плана'
        }
      }
    },
    sb9: {
      id: 'sb9',
      program: 'sb',
      title: 'Блок 9 Открытие',
      lessons: {
        lesson_1: {
          id: 'lesson_1',
          program: 'sb',
          block: 'sb9',
          type: 'lesson',
          name: 'Как подготовится к открытию психологически и технически'
        },
        lesson_2: {
          id: 'lesson_2',
          program: 'sb',
          block: 'sb9',
          type: 'text',
          name: 'ИТОГ по модулю: Что делать и каких ошибок не совершать'
        }
      }
    }
  }
};

export const EXIST_BUSINESS_COURSE: ICourse = {
  id: 'eb',
  icon: 'suitcase',
  title: 'Курс для действующего бизнеса',
  subTitle: 'Развивай и масштабируй',
  type: 'course',
  price: 500,
  cover:
    'https://txdqbvqdpkcgyndeltej.supabase.co/storage/v1/object/public/common/courses/cover.jpg',
  blocks: {
    eb1: {
      id: 'eb1',
      program: 'eb',
      title: 'Блок 1  Финансовая грамотность',
      lessons: {
        lesson_1: {
          id: 'lesson_1',
          program: 'eb',
          block: 'eb1',
          type: 'lesson',
          name: 'Основы финансового учёта и обзор 3х инструментов'
        },
        lesson_2: {
          id: 'lesson_2',
          program: 'eb',
          block: 'eb1',
          type: 'lesson',
          name: 'Структура финансов в гастробизнесе (разбор таблицы ДДС +ОПУ)'
        },
        lesson_3: {
          id: 'lesson_3',
          program: 'eb',
          block: 'eb1',
          type: 'lesson',
          name: 'Система фондов и распределения прибыли'
        },
        lesson_4: {
          id: 'lesson_4',
          program: 'eb',
          block: 'eb1',
          type: 'lesson',
          name: 'Финансовый анализ и как и пользоваться'
        },
        lesson_5: {
          id: 'lesson_5',
          program: 'eb',
          block: 'eb1',
          type: 'lesson',
          name: 'Ежедневный фин учет'
        },
        lesson_6: {
          id: 'lesson_6',
          program: 'eb',
          block: 'eb1',
          type: 'text',
          name: 'Гайд : Что такое: чистая прибыль, выручка, маржинальность, фудкост'
        },
        lesson_7: {
          id: 'lesson_7',
          program: 'eb',
          block: 'eb1',
          type: 'file',
          name: 'Шаблон: ДДС+ОПУ'
        }
      }
    },
    eb2: {
      id: 'eb2',
      program: 'eb',
      title: 'Блок 2  Маркетинг',
      lessons: {
        lesson_1: {
          id: 'lesson_1',
          program: 'eb',
          block: 'eb2',
          type: 'lesson',
          name: 'CRM-маркетинг. Как управлять клиентской базой и делать сегментацию'
        },
        lesson_2: {
          id: 'lesson_2',
          program: 'eb',
          block: 'eb2',
          type: 'lesson',
          name: 'NPS. Учимся держать руку на пульсе по качеству своего заведения/продукта + шаблон анкеты ОС'
        },
        lesson_3: {
          id: 'lesson_3',
          program: 'eb',
          block: 'eb2',
          type: 'lesson',
          name: 'Ключевые бизнес-показатели. Что замерять, чтобы расти уверенно и быстро'
        },
        lesson_4: {
          id: 'lesson_4',
          program: 'eb',
          block: 'eb2',
          type: 'lesson',
          name: 'Маркетинговая воронка.Волшебный способ заполучить максимум клиентов'
        }
      }
    },
    eb3: {
      id: 'eb3',
      program: 'eb',
      title: 'Блок 3 Продажи и сервис',
      lessons: {
        lesson_1: {
          id: 'lesson_1',
          program: 'eb',
          block: 'eb3',
          type: 'lesson',
          name: 'Структура команды в гастробизнесе'
        },
        lesson_2: {
          id: 'lesson_2',
          program: 'eb',
          block: 'eb3',
          type: 'lesson',
          name: 'Мотивация и контроль сотрудников',
          subparagraphs: ['Шаблоны регламентов']
        },
        lesson_3: {
          id: 'lesson_3',
          program: 'eb',
          block: 'eb3',
          type: 'lesson',
          name: 'Искренний сервис. Про сотрудников на которых возвращаются гости',
          subparagraphs: [
            'Как повышать LTV',
            'Как повышать средний чек благодаря работе с сотрудниками'
          ]
        }
      }
    },
    eb4: {
      id: 'eb4',
      program: 'eb',
      title: 'Блок 4 Развитие',
      lessons: {
        lesson_1: {
          id: 'lesson_1',
          program: 'eb',
          block: 'eb4',
          type: 'lesson',
          name: 'Работа с посредниками'
        },
        lesson_2: {
          id: 'lesson_2',
          program: 'eb',
          block: 'eb4',
          type: 'lesson',
          name: 'Продвижение и визуализация соц. сетей'
        },
        lesson_3: {
          id: 'lesson_3',
          program: 'eb',
          block: 'eb4',
          type: 'lesson',
          name: 'Рентабельность вложений в развитие. Как находить идеи?'
        }
      }
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
